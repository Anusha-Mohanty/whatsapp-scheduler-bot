# WhatsApp Scheduler Bot - Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   - Copy `env_template.txt` to `.env`
   - Fill in your Google Sheets credentials and WhatsApp settings
   - Set your timezone and due window (see below)

3. **Create Google Sheet**
   - Create a new Google Sheet
   - Add a sheet named `Messages_[YourName]` (e.g., `Messages_John`)
   - Set up the columns as shown below

4. **Run the Bot**
   ```bash
   npm start
   ```

## 📋 Sheet Format (Latest)

Create a single sheet with these columns:

| Campaign | Phone Numbers | Message Text | Image | Time | Status | Run |
|----------|---------------|--------------|-------|------|--------|-----|
| Morning Greeting | +1234567890 | Hello! | https://drive.google.com/file/d/... | | Pending | Yes |
| Team Update | +1234567890,+9876543210 | Hi there! | https://example.com/image.jpg | 9:00 | Pending | Yes |
| Test Campaign | +9876543210 | Test msg | | | Sent | Yes |

### Column Details:
- **Campaign**: (Optional) Name of your campaign (for organization)
- **Phone Numbers**: Single or multiple numbers (comma, semicolon, pipe, or newline separated)
- **Message Text**: The message to send
- **Image**: (Optional) Direct image URL or Google Drive link (auto-converted)
- **Time**: (Optional) When to send (supports many formats: HH:MM, 9:00 AM, 25/12/2024 20:30, "now")
- **Status**: Auto-updated (Pending, Sent, Failed, Completed)
- **Run**: Set to "Yes", "True", or "1" to include in processing

### Phone Number Formats:
- Single: `+1234567890` or `1234567890`
- Multiple: `+1234567890,+9876543210` or separated by `, ; |` or newlines
- With country code: `+919078840822`
- International: `+1234567890`

### Time Formats:
- `9:00` (24-hour)
- `9:00 AM` (12-hour)
- `14:30` (24-hour)
- `2:30 PM` (12-hour)
- `25/12/2024 20:30` (date + time)
- `now` (immediate send)

### Image Column:
- Supports direct image URLs and Google Drive links (auto-converted to direct links)

## 🎯 How It Works

### Modes
- **Instant Mode**: Ignores the Time column, sends all messages marked "Run = Yes" immediately
- **Scheduled Mode**: Sends only messages where current time >= scheduled time
- **Combined Mode**: Handles both instant (empty time) and scheduled (with time) messages in one run

### Scheduling & Auto-Stop
- Supports cron-based scheduling (see below)
- Schedules can auto-stop when all scheduled messages are sent
- Add new messages and use "Restart Stopped Schedule" to resume

## 📅 Scheduling Patterns

- **Every 10 minutes**: `*/10 * * * *`
- **Every hour**: `0 * * * *`
- **Every 2 hours**: `0 */2 * * *`
- **Daily at 9 AM**: `0 9 * * *`
- **Daily at 6 PM**: `0 18 * * *`
- **Weekdays only**: `0 9 * * 1-5`

## 🔧 Configuration

### Environment Variables (.env)
```
DEFAULT_TIMEZONE=Asia/Kolkata
DUE_WINDOW_MINUTES=60
GOOGLE_SHEET_ID=your_sheet_id_here
```

### Google Sheets API Setup
- Create a Google Cloud project and enable Sheets API
- Create a Service Account, download JSON, rename to `creds.json`, and place in project root
- Share your sheet with the service account email
- Set `GOOGLE_SHEET_ID` in `.env`

### Team Member Setup
- The bot will ask for your team member name on first run
- This creates a sheet named `Messages_[YourName]`
- You can change this later in Settings

## 💡 Tips

1. **Test with a few messages first**
2. **Use Instant Mode for immediate sending**
3. **Use Scheduled Mode for time-sensitive messages**
4. **Use Combined Mode for both**
5. **Check Status column to see what was sent**
6. **Multiple phone numbers are supported**
7. **Google Drive image links are auto-converted**

## 🚨 Troubleshooting

### Common Issues:
- **QR Code not scanning**: Make sure WhatsApp Web is not active elsewhere
- **Sheet not found**: Check the sheet name matches and is shared with the service account
- **Messages not sending**: Verify phone numbers are in correct format
- **Scheduling not working**: Check cron expression format and timezone
- **Image not sending**: Ensure the link is valid and accessible

### Getting Help:
- Check the Status dashboard for connection info
- Verify your Google Sheets permissions
- Ensure WhatsApp is connected properly

## 📊 Status Dashboard

The Status dashboard shows:
- WhatsApp connection status
- Active schedules count
- Schedule overview with patterns
- Quick tips for each option

## 🔄 Auto-Save

Schedules are automatically saved every 5 minutes and restored when the bot restarts.

## Support

For any issues:
1. Check the troubleshooting section
2. Verify your configuration
3. Contact the administrator

## 📁 Required Files

After cloning, you must add the following files to the project root:

- `creds.json` — Your Google API credentials (service account JSON)
- `.env` — Your environment configuration (see example above)
- `config.json` — Your bot configuration (see template below)

### config.json Template
```json
{
  "teamMember": "your_name",
  "messagesSheet": "Messages_your_name",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```
- **teamMember**: Your name (used for sheet naming and WhatsApp session)
- **messagesSheet**: The default sheet for your messages (usually `Messages_<your_name>`)
- **createdAt**: (Optional) Date the config was created

If `config.json` is missing, the bot will create one with default values and prompt you for your team member name on first run.
