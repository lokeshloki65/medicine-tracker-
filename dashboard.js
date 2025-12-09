// Dashboard functionality
let currentMedicine = null;
let notificationInterval = null;
let skipCount = 0; 
let currentNotificationMedicine = null;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('mobile-visible');
}

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    
    // Show selected section
    if (section === 'dashboard') {
        document.getElementById('dashboardSection').style.display = 'block';
        document.querySelectorAll('.menu-item')[0].classList.add('active');
        loadMedicines();
    } else if (section === 'progress') {
        document.getElementById('progressSection').style.display = 'block';
        document.querySelectorAll('.menu-item')[1].classList.add('active');
        loadProgress();
    } else if (section === 'history') {
        document.getElementById('historySection').style.display = 'block';
        document.querySelectorAll('.menu-item')[2].classList.add('active');
        loadHistory();
    }
}

function openAddMedicineModal() {
    document.getElementById('addMedicineModal').classList.add('active');
}

function closeAddMedicineModal() {
    document.getElementById('addMedicineModal').classList.remove('active');
    document.getElementById('medicineForm').reset();
    // Reset to single medicine entry
    const entries = document.getElementById('medicineEntries');
    entries.innerHTML = `
        <div class="medicine-entry">
            <div class="form-group">
                <label data-translate="medicineName">Medicine Name</label>
                <input type="text" class="medicine-name" required>
            </div>
            <div class="form-group">
                <label data-translate="dosage">Dosage (e.g., 50mg)</label>
                <input type="text" class="medicine-dosage" required>
            </div>
            <div class="form-group">
                <label data-translate="timing">Time</label>
                <input type="time" class="medicine-time" required>
            </div>
            <div class="form-group">
                <label data-translate="duration">Duration (days)</label>
                <input type="number" class="medicine-duration" min="1" required>
            </div>
            <div class="form-group">
                <label data-translate="tablets">Tablets per dose</label>
                <input type="number" class="medicine-tablets" min="1" value="1" required>
            </div>
        </div>
    `;
}

function addAnotherMedicine() {
    const entries = document.getElementById('medicineEntries');
    const newEntry = document.createElement('div');
    newEntry.className = 'medicine-entry';
    newEntry.style.borderTop = '2px solid #e0e0e0';
    newEntry.style.paddingTop = '20px';
    newEntry.style.marginTop = '20px';
    newEntry.innerHTML = `
        <div class="form-group">
            <label data-translate="medicineName">Medicine Name</label>
            <input type="text" class="medicine-name" required>
        </div>
        <div class="form-group">
            <label data-translate="dosage">Dosage (e.g., 50mg)</label>
            <input type="text" class="medicine-dosage" required>
        </div>
        <div class="form-group">
            <label data-translate="timing">Time</label>
            <input type="time" class="medicine-time" required>
        </div>
        <div class="form-group">
            <label data-translate="duration">Duration (days)</label>
            <input type="number" class="medicine-duration" min="1" required>
        </div>
        <div class="form-group">
            <label data-translate="tablets">Tablets per dose</label>
            <input type="number" class="medicine-tablets" min="1" value="1" required>
        </div>
    `;
    entries.appendChild(newEntry);
}

async function addMedicine(event) {
    event.preventDefault();
    
    if (!window.currentUserId) {
        alert('Please sign in first');
        return;
    }

    const entries = document.querySelectorAll('.medicine-entry');
    const medicines = [];

    entries.forEach(entry => {
        const name = entry.querySelector('.medicine-name').value;
        const dosage = entry.querySelector('.medicine-dosage').value;
        const time = entry.querySelector('.medicine-time').value;
        const duration = entry.querySelector('.medicine-duration').value;
        const tablets = entry.querySelector('.medicine-tablets').value;

        medicines.push({
            name,
            dosage,
            time,
            duration: parseInt(duration),
            tablets: parseInt(tablets),
            startDate: new Date().toISOString(),
            createdAt: new Date().toISOString()
        });
    });

    try {
        const medicinesRef = window.firebaseDb.collection('users').doc(window.currentUserId).collection('medicines');
        
        for (const medicine of medicines) {
            await window.firebaseDb.collection('users')
                .doc(window.currentUserId)
                .collection('medicines')
                .add(medicine);
        }

        alert('Medicine(s) added successfully!');
        closeAddMedicineModal();
        loadMedicines();
    } catch (error) {
        console.error('Error adding medicine:', error);
        alert('Failed to add medicine: ' + error.message);
    }
}

async function deleteMedicine(medicineId) {
    if (!confirm('Are you sure you want to delete this medicine?')) return;

    try {
        await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicines')
            .doc(medicineId)
            .delete();
        
        loadMedicines();
    } catch (error) {
        console.error('Error deleting medicine:', error);
        alert('Failed to delete medicine');
    }
}

function startNotificationCheck() {
    // Check every minute for medicine reminders
    notificationInterval = setInterval(checkMedicineReminders, 60000);
    // Also check immediately
    checkMedicineReminders();
}

async function checkMedicineReminders() {
    if (!window.currentUserId) return;

    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    
    try {
        const snapshot = await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicines')
            .get();

        snapshot.forEach((doc) => {
            const medicine = doc.data();
            const startDate = new Date(medicine.startDate);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + medicine.duration);

            // Check if medicine is active and time matches
            if (now >= startDate && now <= endDate && medicine.time === currentTime) {
                showMedicineNotification(medicine, doc.id);
            }
        });
    } catch (error) {
        console.error('Error checking reminders:', error);
    }
}

function showMedicineNotification(medicine, medicineId) {
    currentNotificationMedicine = { ...medicine, id: medicineId };
    skipCount = 0;
    
    const notification = document.getElementById('notification');
    const message = document.getElementById('notificationMessage');
    
    message.innerHTML = `
        <strong>${medicine.name}</strong><br>
        Dosage: ${medicine.dosage}<br>
        Tablets: ${medicine.tablets}
    `;
    
    notification.classList.add('active');
    
    // Play notification sound
    const sound = document.getElementById('notificationSound');
    sound.play();
    
    // Stop sound after 10 seconds
    setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
    }, 10000);
}

async function markAsTaken() {
    if (!currentNotificationMedicine) return;

    try {
        // Log the taken medicine
        await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicineLog')
            .add({
                medicineId: currentNotificationMedicine.id,
                medicineName: currentNotificationMedicine.name,
                dosage: currentNotificationMedicine.dosage,
                tablets: currentNotificationMedicine.tablets,
                scheduledTime: currentNotificationMedicine.time,
                takenAt: new Date().toISOString(),
                status: 'taken'
            });

        document.getElementById('notification').classList.remove('active');
        document.getElementById('notificationSound').pause();
        document.getElementById('notificationSound').currentTime = 0;
        
        alert('Great! Medicine marked as taken.');
        currentNotificationMedicine = null;
        skipCount = 0;
    } catch (error) {
        console.error('Error logging medicine:', error);
    }
}

function skipDose() {
    document.getElementById('notification').classList.remove('active');
    document.getElementById('notificationSound').pause();
    document.getElementById('notificationSound').currentTime = 0;
    
    // Show skip reason modal
    document.getElementById('skipReasonModal').classList.add('active');
}

async function selectSkipReason(reason) {
    if (!currentNotificationMedicine) return;

    try {
        // Log the skipped medicine
        await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicineLog')
            .add({
                medicineId: currentNotificationMedicine.id,
                medicineName: currentNotificationMedicine.name,
                dosage: currentNotificationMedicine.dosage,
                scheduledTime: currentNotificationMedicine.time,
                skippedAt: new Date().toISOString(),
                status: 'skipped',
                reason: reason
            });

        closeSkipModal();
        
        // Increment skip count and show reminder after 20 minutes
        skipCount++;
        if (skipCount < 3) {
            setTimeout(() => {
                showMedicineNotification(currentNotificationMedicine, currentNotificationMedicine.id);
            }, 20 * 60 * 1000); // 20 minutes
        } else {
            currentNotificationMedicine = null;
            skipCount = 0;
        }
    } catch (error) {
        console.error('Error logging skip:', error);
    }
}

function closeSkipModal() {
    document.getElementById('skipReasonModal').classList.remove('active');
}

function stopNotification() {
    document.getElementById('notification').classList.remove('active');
    document.getElementById('notificationSound').pause();
    document.getElementById('notificationSound').currentTime = 0;
    
    // Show skip reason modal
    document.getElementById('skipReasonModal').classList.add('active');
}

// Chatbot functionality
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotWindow');
    chatbot.classList.toggle('active');
}

async function sendChatMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    input.value = '';

    // Get AI response using Gemini API
    const response = await getChatbotResponse(message);
    addChatMessage(response, 'bot');
}

function addChatMessage(message, type) {
    const messagesDiv = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}`;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function getChatbotResponse(message) {
    // This is a placeholder. You need to implement Gemini API integration
    const apiKey = 'YOUR_GEMINI_API_KEY';
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a helpful medical assistant. Answer this question about medicine: ${message}`
                    }]
                }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Chatbot error:', error);
        return "I'm having trouble connecting. Please try again later. For medical emergencies, please consult a doctor.";
    }
}

// Progress functionality
async function loadProgress() {
    if (!window.currentUserId) return;

    const progressContent = document.getElementById('progressContent');
    progressContent.innerHTML = '<p>Loading progress data...</p>';

    try {
        const logsSnapshot = await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicineLog')
            .orderBy('takenAt', 'desc')
            .limit(30)
            .get();

        const medicinesSnapshot = await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicines')
            .get();

        let totalScheduled = 0;
        let totalTaken = 0;
        let onTime = 0;

        logsSnapshot.forEach(doc => {
            const log = doc.data();
            totalScheduled++;
            if (log.status === 'taken') {
                totalTaken++;
                // Check if taken within 30 minutes of scheduled time
                const scheduled = new Date('2000-01-01 ' + log.scheduledTime);
                const taken = new Date(log.takenAt);
                const diff = Math.abs(taken - scheduled) / (1000 * 60);
                if (diff <= 30) onTime++;
            }
        });

        const compliance = totalScheduled > 0 ? ((totalTaken / totalScheduled) * 100).toFixed(1) : 0;
        const punctuality = totalTaken > 0 ? ((onTime / totalTaken) * 100).toFixed(1) : 0;

        progressContent.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #667eea; margin-bottom: 10px;">Compliance Rate</h4>
                    <p style="font-size: 36px; font-weight: bold; color: #667eea;">${compliance}%</p>
                </div>
                <div style="background: #f3e5f5; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #764ba2; margin-bottom: 10px;">On-Time Rate</h4>
                    <p style="font-size: 36px; font-weight: bold; color: #764ba2;">${punctuality}%</p>
                </div>
                <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="color: #4caf50; margin-bottom: 10px;">Total Taken</h4>
                    <p style="font-size: 36px; font-weight: bold; color: #4caf50;">${totalTaken}</p>
                </div>
            </div>
            <h4 style="margin-bottom: 15px;">Active Medications</h4>
        `;

        medicinesSnapshot.forEach(doc => {
            const medicine = doc.data();
            const startDate = new Date(medicine.startDate);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + medicine.duration);
            const daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24));

            if (daysLeft > 0) {
                const progressDiv = document.createElement('div');
                progressDiv.style.cssText = 'background: #f5f7fa; padding: 15px; border-radius: 10px; margin-bottom: 15px;';
                progressDiv.innerHTML = `
                    <h4 style="color: #667eea; margin-bottom: 10px;">${medicine.name}</h4>
                    <p><strong>Dosage:</strong> ${medicine.dosage}</p>
                    <p><strong>Tablets per dose:</strong> ${medicine.tablets}</p>
                    <p><strong>Days remaining:</strong> ${daysLeft} days</p>
                    <p><strong>Time:</strong> ${medicine.time}</p>
                    <div style="margin-top: 10px; background: #e0e0e0; height: 10px; border-radius: 5px; overflow: hidden;">
                        <div style="background: #667eea; height: 100%; width: ${((medicine.duration - daysLeft) / medicine.duration * 100)}%; border-radius: 5px;"></div>
                    </div>
                    <p style="margin-top: 10px; font-size: 14px; color: #666;">
                        <strong>Important:</strong> Drink plenty of water with this medication. 
                        ${medicine.dosage.includes('50mg') ? 'Common side effects may include drowsiness.' : ''}
                    </p>
                `;
                progressContent.appendChild(progressDiv);
            }
        });
    } catch (error) {
        console.error('Error loading progress:', error);
        progressContent.innerHTML = '<p>Error loading progress data</p>';
    }
}

// History functionality
async function loadHistory() {
    if (!window.currentUserId) return;

    const historyContent = document.getElementById('historyContent');
    historyContent.innerHTML = '<p>Loading history...</p>';

    try {
        const logsSnapshot = await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('medicineLog')
            .orderBy('takenAt', 'desc')
            .get();

        historyContent.innerHTML = '<h4 style="margin-bottom: 15px;">Recent Activity</h4>';

        if (logsSnapshot.empty) {
            historyContent.innerHTML += '<p>No history available yet</p>';
            return;
        }

        logsSnapshot.forEach(doc => {
            const log = doc.data();
            const date = new Date(log.takenAt || log.skippedAt);
            const historyItem = document.createElement('div');
            historyItem.style.cssText = 'background: #f5f7fa; padding: 15px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid ' + (log.status === 'taken' ? '#4caf50' : '#f44336');
            historyItem.innerHTML = `
                <h4 style="color: ${log.status === 'taken' ? '#4caf50' : '#f44336'}; margin-bottom: 5px;">
                    ${log.status === 'taken' ? '✓' : '✗'} ${log.medicineName}
                </h4>
                <p><strong>Dosage:</strong> ${log.dosage}</p>
                <p><strong>Scheduled:</strong> ${log.scheduledTime}</p>
                <p><strong>Date:</strong> ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
                ${log.reason ? `<p><strong>Reason:</strong> ${log.reason}</p>` : ''}
                ${log.tablets ? `<p><strong>Tablets:</strong> ${log.tablets}</p>` : ''}
            `;
            historyContent.appendChild(historyItem);
        });

        // Add completed medicines section
        const completedSnapshot = await window.firebaseDb.collection('users')
            .doc(window.currentUserId)
            .collection('completedMedicines')
            .orderBy('completedAt', 'desc')
            .get();

        if (!completedSnapshot.empty) {
            historyContent.innerHTML += '<h4 style="margin-top: 30px; margin-bottom: 15px;">Completed Medications</h4>';
            
            completedSnapshot.forEach(doc => {
                const medicine = doc.data();
                const completedDate = new Date(medicine.completedAt);
                const completedItem = document.createElement('div');
                completedItem.style.cssText = 'background: #e8f5e9; padding: 15px; border-radius: 10px; margin-bottom: 15px;';
                completedItem.innerHTML = `
                    <h4 style="color: #4caf50; margin-bottom: 5px;">${medicine.name}</h4>
                    <p><strong>Dosage:</strong> ${medicine.dosage}</p>
                    <p><strong>Duration:</strong> ${medicine.duration} days</p>
                    <p><strong>Completed:</strong> ${completedDate.toLocaleDateString()}</p>
                `;
                historyContent.appendChild(completedItem);
            });
        }
    } catch (error) {
        console.error('Error loading history:', error);
        historyContent.innerHTML = '<p>Error loading history</p>';
    }
}

async function logout() {
    if (confirm('Are you sure you want to logout?')) {
        try {
            await window.firebaseAuth.signOut();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Failed to logout');
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Allow Enter key in chatbot
    document.getElementById('chatbotInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
});