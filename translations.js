// Translations for multiple languages
const translations = {
    en: {
        tagline: "Your Personal Medicine Companion",
        signin: "Sign In",
        signup: "Sign Up",
        email: "Email",
        password: "Password",
        signinBtn: "Sign In",
        name: "Full Name",
        age: "Age",
        dob: "Date of Birth",
        gender: "Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        bloodGroup: "Blood Group (Optional)",
        phone: "Phone Number (Optional)",
        emergencyContact: "Emergency Contact (Optional)",
        signupBtn: "Create Account",
        dashboard: "Dashboard",
        progress: "Progress",
        history: "History",
        analyser: "Medicine Analyser",
        profile: "Profile",
        settings: "Settings",
        logout: "Logout",
        welcomeMessage: "Welcome Back!",
        addNewMedicine: "Add New Medicine",
        addMedicineBtn: "+ Add Medicine",
        todaysMedicines: "Today's Medicines",
        upcomingDoses: "Upcoming Doses",
        yourMedicines: "Your Medicines",
        noMedicines: "No medicines scheduled for today",
        medicineName: "Medicine Name",
        dosage: "Dosage (e.g., 50mg)",
        timing: "Time",
        duration: "Duration (days)",
        tablets: "Tablets per dose",
        addAnotherMedicine: "+ Add Another Medicine",
        submitBtn: "Submit",
        medicineReminder: "Medicine Reminder! 💊",
        taken: "✓ Taken",
        skip: "✗ Skip",
        stopToday: "Stop for Today",
        whySkip: "Why did you skip?",
        forgot: "Forgot to take",
        notWell: "Not feeling well",
        outOfStock: "Out of stock",
        sideEffects: "Side effects",
        otherReason: "Other reason",
        chatbotTitle: "MediTrack Assistant",
        chatbotWelcome: "Hello! I'm your medicine assistant. Ask me anything about medicines, symptoms, or your medication schedule!",
        send: "Send",
        chatInputPlaceholder: "Type your message...",
        medicationProgress: "Medication Progress",
        medicationHistory: "Medication History",
        searchMedicine: "Search Medicine or Symptom",
        searchBtn: "Search",
        analyzing: "Analyzing...",
        editProfile: "Edit Profile",
        saveChanges: "Save Changes"
    },
    ta: {
        tagline: "உங்கள் தனிப்பட்ட மருந்து துணை",
        signin: "உள்நுழைய",
        signup: "பதிவு செய்ய",
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        signinBtn: "உள்நுழைய",
        name: "முழு பெயர்",
        age: "வயது",
        dob: "பிறந்த தேதி",
        gender: "பாலினம்",
        male: "ஆண்",
        female: "பெண்",
        other: "மற்றவை",
        bloodGroup: "இரத்த வகை (விருப்பமானது)",
        phone: "தொலைபேசி எண் (விருப்பமானது)",
        emergencyContact: "அவசர தொடர்பு (விருப்பமானது)",
        signupBtn: "கணக்கை உருவாக்கு",
        dashboard: "டாஷ்போர்டு",
        progress: "முன்னேற்றம்",
        history: "வரலாறு",
        analyser: "மருந்து பகுப்பாய்வி",
        profile: "சுயவிவரம்",
        settings: "அமைப்புகள்",
        logout: "வெளியேறு",
        welcomeMessage: "மீண்டும் வரவேற்கிறோம்!",
        addNewMedicine: "புதிய மருந்து சேர்க்க",
        addMedicineBtn: "+ மருந்து சேர்க்க",
        todaysMedicines: "இன்றைய மருந்துகள்",
        upcomingDoses: "வரவிருக்கும் அளவுகள்",
        yourMedicines: "உங்கள் மருந்துகள்",
        noMedicines: "இன்று எந்த மருந்தும் திட்டமிடப்படவில்லை",
        medicineName: "மருந்தின் பெயர்",
        dosage: "அளவு (எ.கா., 50mg)",
        timing: "நேரம்",
        duration: "காலம் (நாட்கள்)",
        tablets: "ஒரு முறை மாத்திரைகள்",
        addAnotherMedicine: "+ மற்றொரு மருந்து சேர்க்க",
        submitBtn: "சமர்ப்பிக்கவும்",
        medicineReminder: "மருந்து நினைவூட்டல்! 💊",
        taken: "✓ எடுத்தது",
        skip: "✗ தவிர்",
        stopToday: "இன்றைக்கு நிறுத்து",
        whySkip: "ஏன் தவிர்த்தீர்கள்?",
        forgot: "எடுக்க மறந்துவிட்டேன்",
        notWell: "நலமில்லை",
        outOfStock: "இருப்பில் இல்லை",
        sideEffects: "பக்க விளைவுகள்",
        otherReason: "வேறு காரணம்",
        chatbotTitle: "மெடிட்ராக் உதவியாளர்",
        chatbotWelcome: "வணக்கம்! நான் உங்கள் மருந்து உதவியாளர். மருந்துகள், அறிகுறிகள் அல்லது உங்கள் மருந்து அட்டவணை பற்றி என்னிடம் கேளுங்கள்!",
        send: "அனுப்பு",
        chatInputPlaceholder: "உங்கள் செய்தியை உள்ளிடவும்...",
        medicationProgress: "மருந்து முன்னேற்றம்",
        medicationHistory: "மருந்து வரலாறு",
        searchMedicine: "மருந்து அல்லது அறிகுறி தேடுக",
        searchBtn: "தேடு",
        analyzing: "பகுப்பாய்வு செய்கிறது...",
        editProfile: "சுயவிவரத்தை திருத்து",
        saveChanges: "மாற்றங்களை சேமி"
    },
    hi: {
        tagline: "आपका व्यक्तिगत दवा साथी",
        signin: "साइन इन करें",
        signup: "साइन अप करें",
        email: "ईमेल",
        password: "पासवर्ड",
        signinBtn: "साइन इन करें",
        name: "पूरा नाम",
        age: "उम्र",
        dob: "जन्म तिथि",
        gender: "लिंग",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        bloodGroup: "रक्त समूह (वैकल्पिक)",
        phone: "फ़ोन नंबर (वैकल्पिक)",
        emergencyContact: "आपातकालीन संपर्क (वैकल्पिक)",
        signupBtn: "खाता बनाएं",
        dashboard: "डैशबोर्ड",
        progress: "प्रगति",
        history: "इतिहास",
        analyser: "दवा विश्लेषक",
        profile: "प्रोफ़ाइल",
        settings: "सेटिंग्स",
        logout: "लॉग आउट",
        welcomeMessage: "वापसी पर स्वागत है!",
        addNewMedicine: "नई दवा जोड़ें",
        addMedicineBtn: "+ दवा जोड़ें",
        todaysMedicines: "आज की दवाएं",
        upcomingDoses: "आगामी खुराक",
        yourMedicines: "आपकी दवाएं",
        noMedicines: "आज के लिए कोई दवा निर्धारित नहीं",
        medicineName: "दवा का नाम",
        dosage: "खुराक (जैसे, 50mg)",
        timing: "समय",
        duration: "अवधि (दिन)",
        tablets: "प्रति खुराक गोलियां",
        addAnotherMedicine: "+ एक और दवा जोड़ें",
        submitBtn: "जमा करें",
        medicineReminder: "दवा अनुस्मारक! 💊",
        taken: "✓ लिया",
        skip: "✗ छोड़ें",
        stopToday: "आज के लिए रोकें",
        whySkip: "आपने क्यों छोड़ा?",
        forgot: "लेना भूल गए",
        notWell: "अच्छा महसूस नहीं कर रहे",
        outOfStock: "स्टॉक में नहीं",
        sideEffects: "दुष्प्रभाव",
        otherReason: "अन्य कारण",
        chatbotTitle: "मेडिट्रैक सहायक",
        chatbotWelcome: "नमस्ते! मैं आपका दवा सहायक हूं। दवाओं, लक्षणों या आपके दवा कार्यक्रम के बारे में मुझसे कुछ भी पूछें!",
        send: "भेजें",
        chatInputPlaceholder: "अपना संदेश टाइप करें...",
        medicationProgress: "दवा प्रगति",
        medicationHistory: "दवा इतिहास",
        searchMedicine: "दवा या लक्षण खोजें",
        searchBtn: "खोजें",
        analyzing: "विश्लेषण कर रहा है...",
        editProfile: "प्रोफ़ाइल संपादित करें",
        saveChanges: "परिवर्तन सहेजें"
    },
    te: {}, kn: {}, ml: {} // Abbreviated for space
};

let currentLanguage = 'en';

function changeLanguage() {
    const selector = document.getElementById('languageSelector');
    if (!selector) return;
    
    currentLanguage = selector.value;
    localStorage.setItem('preferredLanguage', currentLanguage);
    applyTranslations();
}

function applyTranslations() {
    const lang = translations[currentLanguage] || translations.en;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (lang[key]) {
            element.setAttribute('placeholder', lang[key]);
        }
    });
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = savedLang;
            applyTranslations();
        }
    }
});