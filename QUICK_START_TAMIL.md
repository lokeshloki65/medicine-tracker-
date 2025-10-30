# 🚀 Quick Start Guide - MediTrack

## இந்த வழிகாட்டி தமிழில் / This Guide in Tamil

### படி 1: Firebase Setup செய்யுங்கள்

1. **Firebase Console போங்க:** https://console.firebase.google.com/
2. **"Add project"** click பண்ணுங்க
3. Project பெயர் கொடுங்க (e.g., "meditrack-lokesh")
4. Google Analytics enable பண்ணுங்க (optional)
5. **"Create project"** click பண்ணுங்க

### படி 2: Authentication Enable பண்ணுங்க

1. Left sidebar-ல **"Authentication"** click பண்ணுங்க
2. **"Get Started"** button press பண்ணுங்க
3. **"Email/Password"** option enable பண்ணுங்க
4. Save பண்ணுங்க

### படி 3: Firestore Database Create பண்ணுங்க

1. Left sidebar-ல **"Firestore Database"** click பண்ணுங்க
2. **"Create database"** click பண்ணுங்க
3. **"Start in test mode"** select பண்ணுங்க
4. Location select பண்ணுங்க (asia-south1 - Mumbai recommended)
5. **"Enable"** click பண்ணுங்க

### படி 4: Firebase Config Copy பண்ணுங்க

1. Project Settings போங்க (gear icon ⚙️)
2. Scroll down பண்ணுங்க, **"Your apps"** section-க்கு
3. Web icon **(</>)** click பண்ணுங்க
4. App nickname கொடுங்க (e.g., "MediTrack Web")
5. **"Register app"** click பண்ணுங்க
6. **firebaseConfig** object copy பண்ணுங்க

```javascript
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### படி 5: Config-ஐ Update பண்ணுங்க

**3 files-ல update பண்ணனும்:**

1. **index.html** - Line 260 பக்கம்
2. **dashboard.html** - Line 770 பக்கம்
3. **profile.html** - Line 400 பக்கம்

Copy பண்ண config-ஐ paste பண்ணுங்க.

### படி 6: Gemini API Key வாங்குங்க

1. **https://makersuite.google.com/app/apikey** போங்க
2. Google account-ல sign in பண்ணுங்க
3. **"Create API Key"** click பண்ணுங்க
4. API key-ஐ copy பண்ணுங்க

### படி 7: API Key Update பண்ணுங்க

**2 files-ல update பண்ணனும்:**

1. **dashboard.js** - Line 280 பக்கம்
   ```javascript
   const apiKey = 'YOUR_GEMINI_API_KEY';
   ```

2. **medicine-analyser.html** - Line 250 பக்கம்
   ```javascript
   const apiKey = 'YOUR_GEMINI_API_KEY';
   ```

### படி 8: Application Run பண்ணுங்க

**Option 1: Python வச்சு run பண்ணுங்க**
```bash
# Medicine tracker folder-க்கு போங்க
cd "C:\Users\Lokesh\Downloads\medicine tracker"

# Python server start பண்ணுங்க
python -m http.server 8000
```
பிறகு browser-ல open பண்ணுங்க: **http://localhost:8000**

**Option 2: Direct-ah open பண்ணுங்க**
- `index.html` file-ஐ double click பண்ணுங்க
- Chrome or Edge browser-ல open ஆகும்

### படி 9: Account Create பண்ணுங்க

1. **"Sign Up"** tab click பண்ணுங்க
2. உங்க details fill பண்ணுங்க:
   - Name (பெயர்)
   - Age (வயசு)
   - Date of Birth (பிறந்த தேதி)
   - Gender (ஆண்/பெண்/மற்றவை)
   - Email
   - Password (குறைந்தது 6 characters)
   - Blood Group (optional)
   - Phone Number (optional)
   - Emergency Contact (optional)
3. **"Create Account"** click பண்ணுங்க
4. Success message வரும், dashboard-க்கு redirect ஆகும்

### படி 10: Medicine Add பண்ணுங்க

1. Dashboard-ல **"+ Add Medicine"** button click பண்ணுங்க
2. Medicine details fill பண்ணுங்க:
   - **Medicine Name:** (e.g., Paracetamol)
   - **Dosage:** (e.g., 500mg)
   - **Time:** (e.g., 08:00 AM)
   - **Duration:** (e.g., 5 days)
   - **Tablets:** (e.g., 1 or 2)
3. Multiple medicines add பண்ண **"+ Add Another Medicine"** click பண்ணுங்க
4. எல்லாம் fill பண்ணி **"Submit"** click பண்ணுங்க

### படி 11: Language Change பண்ணுங்க

1. Top right-ல language dropdown இருக்கும்
2. உங்க language select பண்ணுங்க (தமிழ்)
3. உடனே எல்லாம் தமிழில் மாறும்!

## ✅ Features என்னென்ன Use பண்ணலாம்

### 📊 Dashboard
- Today's medicines பார்க்கலாம்
- Upcoming doses பார்க்கலாம்
- All medicines list இருக்கும்

### 📈 Progress
- எத்தனை medicine குடிச்சீங்கன்னு பார்க்கலாம்
- On-time rate பார்க்கலாம்
- Progress bars காணலாம்

### 📜 History
- Past-ல என்ன medicines எடுத்தீங்கன்னு பார்க்கலாம்
- Skip பண்ண medicines reasons பார்க்கலாம்

### 🔬 Medicine Analyser
- Medicine பத்தி search பண்ணலாம்
- Fever-க்கு என்ன tablet-னு search பண்ணலாம்
- AI-powered information கிடைக்கும்

### 👤 Profile
- உங்க details பார்க்கலாம்
- Edit பண்ணலாம்

### ⚙️ Settings
- Notifications on/off பண்ணலாம்
- Language மாத்தலாம்
- Dark mode use பண்ணலாம்

### 💬 Chatbot
- Bottom right corner-ல chatbot இருக்கும்
- Medicine பத்தி கேள்வி கேக்கலாம்
- AI answer தரும்

## 🔔 Notifications எப்படி Work ஆகும்

1. **Exact time-க்கு notification வரும்**
2. **10 seconds sound வரும்**
3. **3 options:**
   - ✓ **Taken** - Medicine குடிச்சீங்கன்னு mark பண்ணுங்க
   - ✗ **Skip** - Skip பண்ண reason select பண்ணுங்க:
     - Forgot to take (மறந்துட்டேன்)
     - Not feeling well (உடம்பு சரியில்ல)
     - Out of stock (இருப்பு இல்ல)
     - Side effects (பக்க விளைவு)
     - Other reason (வேற காரணம்)
   - **Stop for Today** - இன்னைக்கு வேணாம்

4. **Skip பண்ணா:**
   - 20 minutes-க்கு பிறகு மறுபடியும் notification வரும்
   - மொத்தம் 3 முறை வரும்
   - 3 முறைக்கு மேல வராது

## 📱 Mobile-ல Use பண்ணுறது

1. Chrome browser-ல open பண்ணுங்க
2. Menu (3 dots) click பண்ணுங்க
3. **"Add to Home Screen"** select பண்ணுங்க
4. Mobile app மாதிரி use பண்ணலாம்!

## 🆘 Problems வந்தா

### Login ஆகல:
- Firebase config correct-ah இருக்கா check பண்ணுங்க
- Email/Password authentication enabled-ah இருக்கா பாருங்க

### Notifications வரல:
- Browser notification permission கொடுங்க
- Settings-ல notifications enabled-ah இருக்கா பாருங்க

### AI Features work ஆகல:
- Gemini API key correct-ah paste பண்ணீங்களா check பண்ணுங்க
- Internet connection இருக்கா பாருங்க

## 💡 Tips

- **Multiple medicines ஒரே time-க்கு add பண்ணலாம்**
- **Language எப்போ வேணாலும் மாத்தலாம்**
- **History-ல எல்லா records save ஆகும்**
- **Progress section-ல detailed stats காணலாம்**
- **Medicine Analyser use பண்ணி info search பண்ணுங்க**
- **Chatbot use பண்ணி instant answers வாங்குங்க**

## 🎯 Important

- இது medicine track பண்ற app மட்டும்தான்
- Doctor advice-க்கு substitute இல்ல
- எப்பவும் doctor-ட consult பண்ணுங்க
- Emergency-க்கு உடனே doctor-கிட்ட போங்க

---

**எல்லாம் setup ஆச்சா? Perfect! இப்ப உங்க medicine tracking easy-யா manage பண்ணலாம்! 🎉**

**Questions இருந்தா README.md file பாருங்க!**