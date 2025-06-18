# Quick Setup Guide

## 🚀 5-Minute Setup

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd whatsapp-bot
npm install
```

### 2. Environment Setup
```bash
cp env_template.txt .env
# Edit .env with your timezone and Google Sheet ID
```

### 3. Google Sheets Setup
1. **Create Google Cloud Project** → Enable Sheets API
2. **Create Service Account** → Download JSON
3. **Rename to `creds.json`** → Place in project root
4. **Create Google Sheet** → Share with service account email
5. **Copy Sheet ID** → Add to `.env` file

### 4. Run Bot
```bash
npm start
```

### 5. First Time Setup
- Scan QR code with WhatsApp
- Configure team member name
- Add messages to your Google Sheet
- Start sending!

## 📋 Required Files

### Must Have:
- ✅ `package.json` - Dependencies
- ✅ `env_template.txt` - Environment template
- ✅ `.gitignore` - Excludes sensitive files
- ✅ `README.md` - Full documentation

### User Must Add:
- 🔑 `creds.json` - Google API credentials
- ⚙️ `.env` - Environment configuration

### Auto-Generated:
- 📁 `node_modules/` - Dependencies
- 📁 `.wwebjs_auth/` - WhatsApp session
- 📁 `.wwebjs_cache/` - WhatsApp cache

## 🔧 Configuration

### .env File:
```bash
DEFAULT_TIMEZONE=Asia/Kolkata
DUE_WINDOW_MINUTES=60
GOOGLE_SHEET_ID=your_sheet_id_here
```

### Google Sheet Columns:
- Phone Numbers
- Message Text  
- Time (optional)
- Image (optional)
- Run (optional)
- Status (auto)
- Campaign (optional)

## 🚨 Common Issues

**QR Code Issues:**
- Close WhatsApp Web on other devices
- Check internet connection

**Google Sheets Error:**
- Verify service account permissions
- Check `creds.json` location
- Enable Google Sheets API

**Messages Not Sending:**
- Check phone number format
- Verify WhatsApp connection
- Wait 1-2 minutes between messages

## 📞 Need Help?

1. Check the full README.md
2. Review example files in repo
3. Check troubleshooting section
4. Create an issue with details

---

**Ready to deploy!** 🎉 