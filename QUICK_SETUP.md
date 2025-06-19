# Quick Setup Guide

## 🚀 5-Minute Setup (Latest)

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd whatsapp-bot
npm install
```

### 2. Environment & Config Setup
```bash
cp env_template.txt .env
# Edit .env with your timezone, due window, and Google Sheet ID
# Add your creds.json (Google API credentials) to the project root
# Add a config.json file to the project root (see template below)
```

#### Example .env:
```
DEFAULT_TIMEZONE=Asia/Kolkata
DUE_WINDOW_MINUTES=60
GOOGLE_SHEET_ID=your_sheet_id_here
```

#### config.json Template
```json
{
  "teamMember": "your_name",
  "messagesSheet": "Messages_your_name",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```
- **teamMember**: Your name (used for WhatsApp session and sheet naming)
- **messagesSheet**: The default messages sheet (usually `Messages_<your_name>`)
- **createdAt**: (Optional) Date the config was created

If you skip this, the bot will auto-create config.json and prompt for your name on first run.

### 3. Google Sheets Setup
1. **Create Google Cloud Project** → Enable Sheets API
2. **Create Service Account** → Download JSON
3. **Rename to `creds.json`** → Place in project root
4. **Create Google Sheet** → Share with service account email
5. **Copy Sheet ID** → Add to `.env` file

### 4. Sheet Format (Latest)
| Campaign | Phone Numbers | Message Text | Image | Time | Status | Run |
|----------|---------------|--------------|-------|------|--------|-----|
| Welcome  | +1234567890   | Hello!       | https://drive.google.com/file/d/... | | Pending | Yes |
| Update   | +1234567890,+9876543210 | Hi! | https://example.com/image.jpg | 9:00 | Pending | Yes |

- **Phone Numbers**: Single or multiple, separated by `, ; |` or newlines
- **Image**: Direct URL or Google Drive link (auto-converted)
- **Time**: Flexible formats (see below)
- **Run**: Set to "Yes", "True", or "1" to process
- **Status**: Auto-updated

#### Supported Time Formats:
- `9:00`, `9:00 AM`, `14:30`, `2:30 PM`, `25/12/2024 20:30`, `now`

#### Phone Number Formats:
- `+1234567890`, `1234567890`, `+1234567890,+9876543210`, etc.

### 5. Run Bot
```bash
npm start
```

### 6. First Time Setup
- Scan QR code with WhatsApp
- Configure team member name
- Add messages to your Google Sheet (see format above)
- Start sending!

## 🔧 Features & Modes
- **Instant Mode**: Sends all messages with empty Time column
- **Scheduled Mode**: Sends only messages due by Time
- **Combined Mode**: Handles both in one run
- **Google Drive images**: Links are auto-converted
- **Auto-stop**: Schedules pause when all messages are sent

## 🚨 Common Issues
- **QR Code Issues**: Close WhatsApp Web on other devices
- **Google Sheets Error**: Check service account permissions, creds.json, and sharing
- **Messages Not Sending**: Check phone number format, WhatsApp connection, and Run column
- **Image Not Sending**: Ensure link is valid and accessible

## 📞 Need Help?
1. Check the full README.md
2. Review example files in repo
3. Check troubleshooting section
4. Create an issue with details

---

**Ready to deploy!** 🎉 
