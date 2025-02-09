const currentTime1 = document.getElementById('Current-time');
const alarmInput = document.getElementById('Alarm-time');
const setAlarmButton = document.getElementById('Set-Alarm');
const alarmSound = document.getElementById('Alarm-Sound');
const stopAlarmButton = document.getElementById('Stop-Alarm');

let alarmTime = null; // Store the alarm time (in "HH:MM" format)
let alarmTimeout = null;

function updateCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    currentTime1.textContent = `${hours}:${minutes}:${seconds}`;

  // Check if the current time matches the set alarm time (ignoring seconds)
  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    triggerAlarm();
    // Clear the alarm once triggered (if single alarm)
    alarmTime = null;
  }
}

// Start the clock update
setInterval(updateCurrentTime, 1000);

// Function to handle setting the alarm
setAlarmButton.addEventListener('click', () => {
  // Get the time from the input (in "HH:MM" format)
  const inputTime = alarmInput.value;
  if (!inputTime) {
    alert('Please select a valid time for the alarm.');
    return;
  }
  alarmTime = inputTime;
  alert(`Alarm is set for ${alarmTime}`);
});

// Function to trigger the alarm
function triggerAlarm() {
    // Play the alarm sound
    alarmSound.play();
    // Show the stop alarm button
    stopAlarmButton.style.display = 'block';
    // Optionally, display an alert or a visual indicator
    alert('Alarm is ringing!');
}

// Event listener for the "Stop Alarm" button
stopAlarmButton.addEventListener('click', () => {
    // Stop the alarm sound
    alarmSound.pause();
    alarmSound.currentTime = 0; // Reset the audio to the beginning
    
    // Hide the Stop Alarm button again
    stopAlarmButton.style.display = 'none';
});

    
