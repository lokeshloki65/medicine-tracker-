# MediTrack - Medicine Tracker Application

## 🌟 Features  

### ✅ Complete Features Implemented: 
- **Sign In/Sign Up System** with Firebase Authentication
- **Dashboard** with medicine management
- **Add Multiple Medicines** at once
- **Real-time Notifications** with sound (10 seconds)
- **Smart Reminders** - Repeats every 20 minutes if skipped (up to 3 times)
- **Skip Reasons** - 5 pre-defined reasons to track why medicines were skipped
- **Progress Tracking** - View compliance rate, on-time rate, and medication progress
- **History** - Complete log of all taken and skipped medicines
- **Medicine Analyser** - Search for medicine information or find medicines by symptoms (Gemini AI powered)
- **Profile Management** - Edit personal and medical information
- **Settings** - Comprehensive app configuration
- **Multi-language Support** - English, Tamil, Hindi, Telugu, Kannada, Malayalam
- **Chatbot** - AI-powered assistant for medicine queries (bottom right)
- **Mobile Responsive** - Works perfectly on desktop and mobile devices

## 🚀 Setup Instructions

### Prerequisites:
1. A modern web browser (Chrome, Firefox, Edge, Safari)
2. Firebase account (for backend)
3. Gemini API key (for AI features)

### Firebase Setup:

1. **Create a Firebase Project:**
   - Go to https://console.firebase.google.com/
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Authentication:**
   - In Firebase Console, go to "Authentication"
   - Click "Get Started"
   - Enable "Email/Password" authentication

3. **Create Firestore Database:**
   - Go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location

4. **Get Firebase Configuration:**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click the web icon (</>)
   - Copy the firebaseConfig object

5. **Update Firebase Config:**
   - Open `index.html`
   - Replace the firebaseConfig object (around line 260) with your config:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```
   - Do the same in `dashboard.html` (line 770)
   - And in `profile.html` (line 400)

### Gemini API Setup:

1. **Get Gemini API Key:**
   - Go to https://makersuite.google.com/app/apikey
   - Create or select a project
   - Click "Create API Key"

2. **Update API Keys:**
   - Open `dashboard.js`
   - Replace `YOUR_GEMINI_API_KEY` (around line 280) with your actual API key
   - Open `medicine-analyser.html`
   - Replace the API key (around line 250) with your actual API key

### Running the Application:

**Option 1: Simple Web Server**
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (install http-server first: npm install -g http-server)
http-server -p 8000
```

Then open: http://localhost:8000

**Option 2: Live Server (VS Code)**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Option 3: Direct File Opening**
- Simply open `index.html` in your web browser
- Note: Some features may not work due to CORS restrictions

## 📱 Converting to Mobile App (PWA)

To convert this web app to a mobile app:

1. **Add manifest.json** (already mobile responsive)
2. **Install on Android:**
   - Open in Chrome
   - Tap menu (3 dots)
   - Select "Add to Home Screen"

3. **Install on iOS:**
   - Open in Safari
   - Tap Share button
   - Select "Add to Home Screen"

## 🎨 File Structure

```
medicine tracker/
├── index.html              # Sign in/Sign up page
├── dashboard.html          # Main dashboard
├── dashboard.js            # Dashboard functionality
├── profile.html            # User profile page
├── medicine-analyser.html  # Medicine search & analysis
├── settings.html           # App settings
├── translations.js         # Multi-language support
└── README.md              # This file
```

## 💡 Usage Guide

### Adding Medicines:
1. Click "Add Medicine" button on dashboard
2. Fill in medicine details (name, dosage, time, duration, tablets)
3. Click "+ Add Another Medicine" to add multiple medicines at once
4. Click "Submit" to save

### Receiving Notifications:
- Notifications appear at the exact scheduled time
- A 10-second sound plays with each notification
- Options: ✓ Taken, ✗ Skip, or Stop for Today
- If skipped, reminder repeats after 20 minutes (up to 3 times)

### Tracking Progress:
- View compliance rate (% of medicines taken)
- See on-time rate (% taken within 30 minutes of scheduled time)
- Monitor active medications and days remaining

### Using Medicine Analyser:
- Search by medicine name to get detailed information
- Search by symptom (e.g., "fever") to find suitable medicines
- Get dosage information, side effects, and precautions

### Changing Language:
- Click language selector in header
- Select your preferred language
- All text updates instantly

## 🔒 Security Notes

- Firebase Authentication handles secure sign-in
- Firestore security rules should be configured for production
- API keys should be restricted in production
- User data is stored securely in Firebase

## 🐛 Troubleshooting

**Notifications not working:**
- Check browser notification permissions
- Ensure time is set correctly
- Verify Firebase connection

**Login issues:**
- Check Firebase configuration
- Verify authentication is enabled in Firebase Console
- Check browser console for errors

**AI features not working:**
- Verify Gemini API key is correct
- Check API key restrictions
- Ensure you have API quota available

## 📝 Notes

- **Firebase Config**: You MUST replace the Firebase configuration with your own
- **API Keys**: Replace placeholder API keys with real ones
- **Test Mode**: Firebase is set to test mode - configure security rules for production
- **Browser Compatibility**: Works best in Chrome, Firefox, Edge (latest versions)
- **Offline Support**: Some features require internet connection

## 🎯 Future Enhancements (Optional)

- Push notifications for better reliability
- Medicine interaction checker
- Pharmacy locator
- Prescription upload
- Doctor consultation integration
- Advanced analytics and reports

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify all API keys are correct
3. Ensure Firebase is properly configured
4. Check network connection

## 📄 License

This is a personal medicine tracking application. Use at your own discretion. Always consult healthcare professionals for medical advice.

---

**Important:** This application is for tracking purposes only and should not replace professional medical advice. Always consult with healthcare providers for medical decisions.

**Developed with LokeshLoki -- for better health management**
