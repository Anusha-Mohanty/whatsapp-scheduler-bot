require('dotenv').config();
const { DateTime } = require('luxon');
const { parseTime, isTimeDue } = require('./utils');

// Get timezone from environment variable, default to Asia/Kolkata
const DEFAULT_TIMEZONE = process.env.DEFAULT_TIMEZONE || 'Asia/Kolkata';

console.log('🌍 Timezone Configuration Test');
console.log('================================');
console.log(`Current timezone: ${DEFAULT_TIMEZONE}`);
console.log(`Current time: ${DateTime.now().setZone(DEFAULT_TIMEZONE).toFormat('dd/MM/yyyy HH:mm:ss')}`);
console.log('');

// Test different time formats
const testTimes = [
  '20:30',
  '08:30 PM',
  '8:30 PM',
  '20:30:00',
  '08:30:00 PM',
  '2024-12-25 20:30',
  '25/12/2024 20:30',
  '12/25/2024 8:30 PM'
];

console.log('⏰ Testing Time Parsing:');
console.log('------------------------');
testTimes.forEach(timeStr => {
  const parsed = parseTime(timeStr);
  if (parsed) {
    console.log(`✅ "${timeStr}" → ${parsed.toFormat('dd/MM/yyyy HH:mm:ss')}`);
  } else {
    console.log(`❌ "${timeStr}" → Invalid time`);
  }
});

console.log('');
console.log('⏳ Testing Due Time Checks:');
console.log('----------------------------');
const now = DateTime.now().setZone(DEFAULT_TIMEZONE);
const futureTime = now.plus({ hours: 1 });
const pastTime = now.minus({ hours: 1 });

console.log(`Current time: ${now.toFormat('HH:mm')}`);
console.log(`Future time (${futureTime.toFormat('HH:mm')}): ${isTimeDue(futureTime) ? 'DUE' : 'NOT DUE'}`);
console.log(`Past time (${pastTime.toFormat('HH:mm')}): ${isTimeDue(pastTime) ? 'DUE' : 'NOT DUE'}`);

console.log('');
console.log('🔧 Environment Variables:');
console.log('-------------------------');
console.log(`DEFAULT_TIMEZONE: ${process.env.DEFAULT_TIMEZONE || 'Not set (using default: Asia/Kolkata)'}`);
console.log(`DUE_WINDOW_MINUTES: ${process.env.DUE_WINDOW_MINUTES || 'Not set (using default: 60)'}`);

console.log('');
console.log('✅ Timezone configuration test completed!'); 