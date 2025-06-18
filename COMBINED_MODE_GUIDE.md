# Combined Mode Guide

## Overview

The WhatsApp Bot now supports a **Combined Mode** that intelligently processes both instant messages and scheduled messages in a single operation. This mode automatically detects the message type based on the presence of a time value in the "Time" column.

## 🆕 Auto-Stop Schedule Feature

**NEW**: The system now automatically stops schedules when all messages in a sheet have been sent! This prevents unnecessary background processing and saves resources.

### How Auto-Stop Works:

1. **Automatic Detection**: The system counts remaining unsent messages after each processing run
2. **Smart Stopping**: When remaining messages = 0, the schedule automatically stops and removes itself
3. **Progress Tracking**: Shows remaining messages count in results
4. **Manual Control**: You can also manually stop schedules when prompted

### Benefits:
- ✅ **No more background noise** - schedules stop when work is done
- ✅ **Resource efficient** - no unnecessary processing
- ✅ **Clear progress tracking** - see exactly how many messages remain
- ✅ **Automatic cleanup** - schedules remove themselves when complete

## How It Works

### Message Type Detection

The system automatically categorizes messages based on the "Time" column:

1. **Instant Messages**: Messages with an **empty** or **blank** "Time" column
   - These messages are sent immediately when processed
   - No time validation is performed

2. **Scheduled Messages**: Messages with a **time value** in the "Time" column
   - These messages are only sent if the scheduled time is due
   - Time validation is performed against the current time

### Processing Logic

When using Combined Mode (Option 3 in the main menu):

1. **Scan all rows** in the Google Sheet
2. **For each row**:
   - If "Time" column is **empty/blank** → Process as **Instant Message**
   - If "Time" column has a **value** → Check if time is due, then process as **Scheduled Message**
3. **Send messages** according to their type
4. **Update status** in the sheet
5. **Count remaining messages** and determine if schedule should stop
6. **Provide detailed results** showing breakdown of instant vs scheduled messages

## Google Sheet Structure

Your Google Sheet should have these columns:

| Column | Description | Required | Example |
|--------|-------------|----------|---------|
| Phone Numbers | Recipient phone numbers | Yes | +1234567890, +0987654321 |
| Message Text | Message content | Yes | "Hello! This is a test message." |
| Time | Scheduled time (leave empty for instant) | No | 14:30, 2:30 PM, 2024-01-15 14:30 |
| Image | Image URL (optional) | No | https://example.com/image.jpg |
| Campaign Name | Campaign identifier (optional) | No | "Morning Campaign" |
| Run | Set to "yes" to process | Yes | yes, true, 1 |
| Status | Delivery status (auto-updated) | No | Sent, Failed, Pending |

## Time Format Support

The system supports various time formats:

### Time Only (for same-day scheduling)
- `14:30` - 24-hour format
- `2:30 PM` - 12-hour format with AM/PM
- `14:30:00` - With seconds

### Date + Time (for future scheduling)
- `01/15/2024 14:30` - MM/DD/YYYY format
- `15/01/2024 14:30` - DD/MM/YYYY format

## Usage Examples

### Example 1: Mixed Sheet with Instant and Scheduled Messages

| Phone Numbers | Message Text | Time | Campaign Name | Run | Status |
|---------------|--------------|------|---------------|-----|--------|
| +1234567890 | Welcome message! | | Welcome Campaign | yes | |
| +0987654321 | Reminder at 2 PM | 14:00 | Reminder Campaign | yes | |
| +1122334455 | Daily update | | Daily Campaign | yes | |
| +5566778899 | Evening reminder | 18:00 | Evening Campaign | yes | |

**Result when processed with Combined Mode:**
- ✅ **Instant Messages**: 2 sent (Welcome message, Daily update)
- ✅ **Scheduled Messages**: 2 sent (if current time is 2 PM or 6 PM)
- 📊 **Total**: 4 messages processed
- 🎉 **Auto-Stop**: Schedule will stop automatically if all messages are sent

### Example 2: All Instant Messages

| Phone Numbers | Message Text | Time | Campaign Name | Run | Status |
|---------------|--------------|------|---------------|-----|--------|
| +1234567890 | Quick message 1 | | Campaign A | yes | |
| +0987654321 | Quick message 2 | | Campaign A | yes | |
| +1122334455 | Quick message 3 | | Campaign A | yes | |

**Result when processed with Combined Mode:**
- ✅ **Instant Messages**: 3 sent
- ⏭️ **Scheduled Messages**: 0 (no time values)
- 📊 **Total**: 3 messages processed
- 🎉 **Auto-Stop**: Schedule will stop automatically

### Example 3: All Scheduled Messages

| Phone Numbers | Message Text | Time | Campaign Name | Run | Status |
|---------------|--------------|------|---------------|-----|--------|
| +1234567890 | Morning message | 09:00 | Morning Campaign | yes | |
| +0987654321 | Afternoon message | 14:00 | Afternoon Campaign | yes | |
| +1122334455 | Evening message | 18:00 | Evening Campaign | yes | |

**Result when processed with Combined Mode:**
- ⏭️ **Instant Messages**: 0 (all have time values)
- ✅ **Scheduled Messages**: 1-3 sent (depending on current time)
- 📊 **Total**: Messages sent only if their scheduled time is due
- 🎉 **Auto-Stop**: Schedule will stop when all due messages are sent

## Menu Options

### Main Menu - Option 3: Send Combined Messages

When you select **Option 3** from the main menu:

1. **Confirmation**: The system asks for confirmation to process combined messages
2. **Processing**: Shows "🔄 Processing combined messages (instant + scheduled)..."
3. **Results**: Displays detailed breakdown:
   ```
   📊 RESULTS SUMMARY
   ══════════════════════════════════════════════════════════════
   📤 Messages Sent: 5
   ❌ Failed: 0
   ⏭️ Skipped: 2
   📊 Total Processed: 7
   
   📋 Message Breakdown:
      🚀 Instant Messages: 3
      ⏰ Scheduled Messages: 2
   
   📈 Progress:
      📋 Total Processable: 10
      ⏳ Remaining Messages: 0
   
   🎉 All messages completed! Schedule will be stopped automatically.
   ══════════════════════════════════════════════════════════════
   ```

## Auto-Stop Schedule Behavior

### Automatic Schedule Management:

1. **Background Processing**: When schedules run automatically (every 5 minutes, etc.)
   - System checks remaining messages after each run
   - Automatically stops and removes schedule when all messages are sent
   - Logs: `🎉 All messages in [sheet] have been sent! Stopping schedule automatically.`

2. **Manual Processing**: When you manually run message processing
   - Shows remaining messages count in results
   - Offers to stop active schedules if all messages are sent
   - You can choose to keep or stop the schedule

3. **Progress Tracking**: Always shows:
   - Total processable messages
   - Remaining unsent messages
   - Whether schedule should stop

### Schedule Lifecycle:

```
📅 Schedule Created → 🔄 Processing Messages → 📊 Check Remaining → 🎉 Auto-Stop (if complete)
```

## Benefits

1. **Flexibility**: Mix instant and scheduled messages in the same sheet
2. **Efficiency**: Process both types in a single operation
3. **Clarity**: Clear breakdown of what was processed
4. **Convenience**: No need to run separate operations for different message types
5. **Time Management**: Automatic time validation for scheduled messages
6. **Auto-Cleanup**: Schedules stop automatically when work is complete
7. **Resource Efficient**: No unnecessary background processing

## Best Practices

1. **Use descriptive campaign names** to track different message types
2. **Set appropriate times** for scheduled messages (consider timezone)
3. **Test with small batches** before running large campaigns
4. **Monitor the status column** to track delivery success
5. **Use the Run column** to control which messages to process
6. **Let auto-stop work** - don't manually stop schedules unless needed
7. **Check remaining messages** to understand progress

## Troubleshooting

### Common Issues

1. **No messages sent**: Check if "Run" column is set to "yes"
2. **Scheduled messages not sent**: Verify current time vs scheduled time
3. **Time parsing errors**: Use supported time formats
4. **Phone number issues**: Ensure numbers are in international format
5. **Schedule not stopping**: Check if all messages have "Sent" status

### Debug Tips

- Check the console output for detailed processing information
- Verify Google Sheet permissions and column names
- Ensure WhatsApp client is connected and ready
- Review the status column for delivery confirmation
- Monitor remaining messages count in results
- Check if auto-stop is working by looking for completion messages 