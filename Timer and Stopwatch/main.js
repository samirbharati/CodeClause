// Timer:
let timerInterval;
let timerOutput = document.getElementById("timerOutput");
let timerInput = document.getElementById("timerInput");
let timerCountdown;

// Stopwatch:
let stopwatchInterval;
let stopwatchOutput = document.getElementById("stopwatchOutput");
let stopwatchCount = 0;

// Timer functions:
function startTimer() {
  if (timerInput.value === "") {
    alert("Please enter a time.");
    return;
  }
  let timeArray = timerInput.value.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    alert("Please enter a valid time.");
    return;
  }
  timerCountdown = hours * 3600 + minutes * 60 + seconds;
  timerInterval = setInterval(() => {
    timerCountdown--;
    if (timerCountdown < 0) {
      clearInterval(timerInterval);
      alert("Timer complete!");
    } else {
      let hours = Math.floor(timerCountdown / 3600);
      let minutes = Math.floor((timerCountdown % 3600) / 60);
      let seconds = timerCountdown % 60;
      timerOutput.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerOutput.innerText = "";
  timerInput.value = "";
}

// Stopwatch functions:
function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchCount++;
    let hours = Math.floor(stopwatchCount / 3600);
    let minutes = Math.floor((stopwatchCount % 3600) / 60);
    let seconds = stopwatchCount % 60;
    stopwatchOutput.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchCount = 0;
  stopwatchOutput.innerText = "00:00:00";
}
