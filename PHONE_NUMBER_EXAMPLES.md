# 📱 Phone Number Format Guide

## 🎯 **Supported Phone Number Formats**

The system now supports both **single number sending** and **bulk number sending** with various formats and separators.

## 📋 **Single Number Formats**

### **International Format (Recommended)**
```
+919078840822
+1234567890
+447911123456
```

### **National Format (Auto-detected)**
```
919078840822    → +919078840822 (Indian)
1234567890      → +11234567890 (US/Canada)
447911123456    → +447911123456 (UK)
```

### **Formatted Numbers (Auto-cleaned)**
```
+91 907-884-0822    → +919078840822
(123) 456-7890      → +11234567890
+44 7911 123456     → +447911123456
```

## 📊 **Bulk Number Formats**

### **Comma Separated**
```
+919078840822, +1234567890, +447911123456
```

### **Semicolon Separated**
```
+919078840822; +1234567890; +447911123456
```

### **Pipe Separated**
```
+919078840822 | +1234567890 | +447911123456
```

### **Newline Separated**
```
+919078840822
+1234567890
+447911123456
```

### **Mixed Formats (Auto-cleaned)**
```
+91 907-884-0822, 1234567890, +44 7911 123456
```

## 📈 **Google Sheet Examples**

### **Example 1: Single Numbers**
| Phone Numbers | Message Text | Campaign | Run |
|---------------|--------------|----------|-----|
| +919078840822 | Welcome message! | Campaign A | yes |
| 1234567890 | Hello there! | Campaign B | yes |
| +44 7911 123456 | UK message | Campaign C | yes |

**Result**: Each row sends to 1 number

### **Example 2: Bulk Numbers**
| Phone Numbers | Message Text | Campaign | Run |
|---------------|--------------|----------|-----|
| +919078840822, +1234567890, +447911123456 | Bulk message! | Campaign D | yes |
| 919078840822; 1234567890 | Another bulk | Campaign E | yes |

**Result**: Each row sends to multiple numbers

### **Example 3: Mixed Format**
| Phone Numbers | Message Text | Campaign | Run |
|---------------|--------------|----------|-----|
| +91 907-884-0822, 1234567890, +44 7911 123456 | Mixed format | Campaign F | yes |

**Result**: Auto-cleaned and sent to 3 numbers

## 🔍 **Debug Output Examples**

### **Single Number Processing**
```
🔍 parsePhoneNumbers input: "+919078840822"
🔍 Cleaning number: "+919078840822" -> "+919078840822"
🔍 Number already has + prefix: "+919078840822"
🔍 Validating "+919078840822" (919078840822): VALID
🔍 Final unique numbers: ["+919078840822"]
🔍 Total numbers to send: 1
📱 Single number sending: +919078840822
```

### **Bulk Number Processing**
```
🔍 parsePhoneNumbers input: "+919078840822, +1234567890, +447911123456"
🔍 Cleaning number: "+919078840822" -> "+919078840822"
🔍 Number already has + prefix: "+919078840822"
🔍 Validating "+919078840822" (919078840822): VALID
🔍 Cleaning number: " +1234567890" -> "+1234567890"
🔍 Number already has + prefix: "+1234567890"
🔍 Validating "+1234567890" (1234567890): VALID
🔍 Cleaning number: " +447911123456" -> "+447911123456"
🔍 Number already has + prefix: "+447911123456"
🔍 Validating "+447911123456" (447911123456): VALID
🔍 Final unique numbers: ["+919078840822", "+1234567890", "+447911123456"]
🔍 Total numbers to send: 3
📱 Bulk sending to 3 numbers: ["+919078840822", "+1234567890", "+447911123456"]
```

## 🛠️ **Auto-Detection Features**

### **Country Code Detection**
- **India**: `919078840822` → `+919078840822`
- **US/Canada**: `1234567890` → `+11234567890`
- **UK**: `447911123456` → `+447911123456`

### **Format Cleaning**
- **Spaces**: `+91 907 884 0822` → `+919078840822`
- **Dashes**: `+91-907-884-0822` → `+919078840822`
- **Parentheses**: `(123) 456-7890` → `+11234567890`

### **Duplicate Prevention**
- **Input**: `+919078840822, +919078840822`
- **Output**: `["+919078840822"]` (duplicate removed)

### **Length Validation**
- **Too Short**: `123456` → Skipped (invalid)
- **Too Long**: `919078840822919078840822` → `+919078840822` (truncated)
- **Valid**: `919078840822` → `+919078840822`

## 📊 **Processing Results**

### **Single Number Success**
```
✅ [Campaign A] [INSTANT] Sent to +919078840822: Welcome message!...
📊 Row 2 Summary: 1/1 sent successfully
```

### **Bulk Number Success**
```
✅ [Campaign D] [INSTANT] Sent to +919078840822: Bulk message!...
✅ [Campaign D] [INSTANT] Sent to +1234567890: Bulk message!...
✅ [Campaign D] [INSTANT] Sent to +447911123456: Bulk message!...
📊 Row 2 Summary: 3/3 sent successfully
```

### **Bulk Number Partial Success**
```
✅ [Campaign E] [INSTANT] Sent to +919078840822: Another bulk...
❌ [Campaign E] [INSTANT] Failed to send to +1234567890: Error message
📊 Row 3 Summary: 1/2 sent successfully
```

## 💡 **Best Practices**

### **Recommended Format**
```
+919078840822, +1234567890, +447911123456
```

### **Avoid These**
```
❌ 919078840822919078840822 (duplicated)
❌ 123456 (too short)
❌ +919078840822, +919078840822 (duplicates)
```

### **Use These Separators**
```
✅ Comma: +919078840822, +1234567890
✅ Semicolon: +919078840822; +1234567890
✅ Pipe: +919078840822 | +1234567890
✅ Newline: +919078840822\n+1234567890
```

## 🚀 **Ready to Use**

The system now handles:
- ✅ **Single numbers** in any format
- ✅ **Bulk numbers** with multiple separators
- ✅ **Auto-formatting** and validation
- ✅ **Duplicate removal**
- ✅ **Detailed logging** for debugging
- ✅ **Success/failure tracking** per number

**Just add your phone numbers to the sheet and the system will handle the rest!** 📱✨ 