# WhatsApp Scheduler Bot - Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   - Copy `env_template.txt` to `.env`
   - Fill in your Google Sheets credentials and WhatsApp settings

3. **Create Google Sheet**
   - Create a new Google Sheet
   - Add a sheet named `Messages_[YourName]` (e.g., `Messages_John`)
   - Set up the columns as shown below

4. **Run the Bot**
   ```bash
   npm start
   ```

## 📋 Sheet Format

Create a single sheet with these columns:

| Campaign Name | Phone Numbers | Message Text | Image | Time | Status | Run |
|---------------|---------------|--------------|-------|------|--------|-----|
| Morning Greeting | +1234567890 | Hello! | img1 | | Pending | Yes |
| Team Update | +1234567890,+9876543210 | Hi there! | img2 | 9:00 | Pending | Yes |
| Test Campaign | +9876543210 | Test msg | | | Sent | Yes |

### Column Details:

- **Campaign Name**: Name of your campaign (for organization)
- **Phone Numbers**: Single number or comma-separated multiple numbers
- **Message Text**: The message to send
- **Image**: (Optional) Image URL or filename
- **Time**: (Optional) When to send (HH:MM, 9:00 AM, etc.)
- **Status**: Auto-updated (Pending, Sent, Failed)
- **Run**: Set to "Yes" to include in processing

### Phone Number Formats:
- Single: `+1234567890` or `1234567890`
- Multiple: `+1234567890,+9876543210,+5551234567`

### Time Formats:
- `9:00` (24-hour)
- `9:00 AM` (12-hour)
- `14:30` (24-hour)
- `2:30 PM` (12-hour)

## 🎯 How It Works

### Option 1: Send Messages Now
- Ignores the Time column
- Sends all messages marked "Run = Yes" immediately
- Perfect for urgent messages

### Option 2: Send Scheduled Messages
- Checks the Time column
- Only sends messages where current time >= scheduled time
- Perfect for time-sensitive messages

### Option 3: Schedule Future Messages
- Sets up automatic recurring sending
- Choose from common patterns or custom schedule
- Messages are processed automatically at scheduled times

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
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_private_key_here
```

### Team Member Setup
- The bot will ask for your team member name on first run
- This creates a sheet named `Messages_[YourName]`
- You can change this later in Settings

## 💡 Tips

1. **Test with a few messages first**
2. **Use Option 1 for immediate sending**
3. **Use Option 2 for time-sensitive messages**
4. **Use Option 3 for recurring automation**
5. **Check Status column to see what was sent**
6. **Multiple phone numbers are separated by commas**

## 🚨 Troubleshooting

### Common Issues:
- **QR Code not scanning**: Make sure WhatsApp Web is not active elsewhere
- **Sheet not found**: Check the sheet name matches `Messages_[YourName]`
- **Messages not sending**: Verify phone numbers are in correct format
- **Scheduling not working**: Check cron expression format

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

## Google Sheets Format

### Required Columns
- Phone: Recipient's phone number (with country code) change the number accordingly(rightnow it has mine)
- Message: The message to send
- Schedule: now or YY/MM/DD HH:MM (use "now" for immediate send)
- Image: (Optional) Google Drive image link
- Run: Set to "yes" to process
- Handled By: Your name (must match config.json)
- Status: Auto-updated by bot

## Troubleshooting

1. **Connection Issues**
   - Delete `.wwebjs_auth` folder and restart
   - Verify Google Sheet access permissions
   - Check config.json and creds.json are present

2. **Message Not Sending**
   - Ensure "Run" is set to "yes"
   - Verify "Handled By" matches your config.json name
   - Check phone number format (include country code)

## Support

For any issues:
1. Check the troubleshooting section
2. Verify your configuration
3. Contact the administrator 
