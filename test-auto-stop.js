require('dotenv').config();
const { DateTime } = require('luxon');

// Get timezone from environment variable, default to Asia/Kolkata
const DEFAULT_TIMEZONE = process.env.DEFAULT_TIMEZONE || 'Asia/Kolkata';

console.log('🔄 Auto-Stop and Restart Test');
console.log('==============================');
console.log(`Current timezone: ${DEFAULT_TIMEZONE}`);
console.log(`Current time: ${DateTime.now().setZone(DEFAULT_TIMEZONE).toFormat('dd/MM/yyyy HH:mm:ss')}`);
console.log('');

// Simulate a sheet with scheduled messages
const mockSheet = [
  { name: 'John', phone: '919078840822', message: 'Test 1', time: '22:05', status: '' },
  { name: 'Jane', phone: '919078840823', message: 'Test 2', time: '22:06', status: '' },
  { name: 'Bob', phone: '919078840824', message: 'Test 3', time: '22:07', status: '' }
];

console.log('📋 Initial Sheet State:');
console.log('------------------------');
mockSheet.forEach((row, index) => {
  console.log(`Row ${index + 1}: ${row.name} | ${row.phone} | ${row.time} | ${row.status || 'Pending'}`);
});

console.log('');
console.log('⏰ Processing scheduled messages...');
console.log('----------------------------------');

// Simulate processing each message
mockSheet.forEach((row, index) => {
  const scheduledTime = DateTime.fromFormat(row.time, 'HH:mm', { zone: DEFAULT_TIMEZONE });
  const now = DateTime.now().setZone(DEFAULT_TIMEZONE);
  const timeDiff = now.diff(scheduledTime, 'minutes').minutes;
  
  if (timeDiff >= 0 && timeDiff <= 60) {
    console.log(`✅ Row ${index + 1}: ${row.name} - Message sent at ${now.toFormat('HH:mm')}`);
    row.status = 'Sent';
  } else {
    console.log(`⏳ Row ${index + 1}: ${row.name} - Not due yet (${timeDiff.toFixed(1)} minutes ${timeDiff > 0 ? 'late' : 'early'})`);
  }
});

console.log('');
console.log('📊 After Processing:');
console.log('-------------------');
mockSheet.forEach((row, index) => {
  console.log(`Row ${index + 1}: ${row.name} | ${row.phone} | ${row.time} | ${row.status}`);
});

// Check if all scheduled messages are sent
const remainingScheduled = mockSheet.filter(row => row.status !== 'Sent').length;
console.log('');
console.log(`📈 Remaining scheduled messages: ${remainingScheduled}`);

if (remainingScheduled === 0) {
  console.log('🛑 AUTO-STOP: All scheduled messages sent, schedule will pause');
  console.log('💡 Schedule is paused but not deleted - ready for restart');
} else {
  console.log(`⏸️ Schedule continues - ${remainingScheduled} messages remaining`);
}

console.log('');
console.log('🔄 Adding new scheduled message...');
console.log('----------------------------------');
mockSheet.push({ name: 'Alice', phone: '919078840825', message: 'New Test', time: '22:10', status: '' });

console.log('📋 Updated Sheet State:');
console.log('-----------------------');
mockSheet.forEach((row, index) => {
  console.log(`Row ${index + 1}: ${row.name} | ${row.phone} | ${row.time} | ${row.status || 'Pending'}`);
});

const newRemainingScheduled = mockSheet.filter(row => row.status !== 'Sent').length;
console.log('');
console.log(`📈 New remaining scheduled messages: ${newRemainingScheduled}`);

if (newRemainingScheduled > 0) {
  console.log('▶️ RESTART: New messages detected, schedule can be restarted');
  console.log('💡 Use "Restart Stopped Schedule" option in Settings menu');
} else {
  console.log('🛑 All messages still sent, schedule remains paused');
}

console.log('');
console.log('✅ Auto-stop and restart test completed!');
console.log('');
console.log('💡 Key Points:');
console.log('   • Auto-stop pauses schedule when all scheduled messages are sent');
console.log('   • Schedule is preserved for future use');
console.log('   • Adding new scheduled messages allows restart');
console.log('   • Use Settings → Restart Stopped Schedule to resume'); 