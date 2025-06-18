const { parseTime, isTimeDue } = require('./utils');
const { DateTime } = require('luxon');

console.log('🧪 Testing Scheduling Logic');
console.log('══════════════════════════════════════════════════════════════');

// Test with your exact time
const testTime = '18/06/2025 21:39';
const currentTime = DateTime.now().setZone('Asia/Kolkata');

console.log(`Current time: ${currentTime.toFormat('dd/MM/yyyy HH:mm')} (${currentTime.zoneName})`);
console.log(`Testing scheduled time: ${testTime}`);

const parsedTime = parseTime(testTime);
if (parsedTime) {
  console.log(`Parsed time: ${parsedTime.toFormat('dd/MM/yyyy HH:mm')} (${parsedTime.zoneName})`);
  
  const isDue = isTimeDue(parsedTime);
  console.log(`Is due: ${isDue}`);
  
  const timeDiff = currentTime.diff(parsedTime, 'minutes').minutes;
  console.log(`Time difference: ${timeDiff.toFixed(1)} minutes`);
  
  if (isDue) {
    console.log('✅ Message should be sent!');
  } else {
    console.log('❌ Message should NOT be sent yet.');
  }
} else {
  console.log('❌ Failed to parse time');
}

console.log('══════════════════════════════════════════════════════════════'); 