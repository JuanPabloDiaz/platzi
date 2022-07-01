// Main variables
//Clock btns
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
//Tab btns
const btnStopwatch = document.getElementById("stopwatch-button");
const btnAlarm = document.getElementById("alarm-button");
const btnClock = document.getElementById("clock-button");
const btnTimer = document.getElementById("timer-button");
//Text
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let hoursSpan = document.getElementById("hours");
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let currentInterval;
//Constantly changing
const container = document.getElementById("container");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
// Event Listeners
btnTimer.addEventListener("click", excecuteTimer);
btnStopwatch.addEventListener("click", excecuteStopwatch);
btnAlarm.addEventListener("click", excecuteAlarm);
btnClock.addEventListener("click", excecuteClock);


//Clean HTML and interval
function resetAll() {
  container.innerHTML = "";
  subtitle.textContent = " ";
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;
  clearInterval(currentInterval);
}

//stopwatch functions
function excecuteStopwatch() {
  location.hash = `stopwatch`;
  resetAll();

  title.textContent = "Stopwatch";
  btnStopwatch.classList.add("active");
  btnAlarm.classList.remove("active");
  btnTimer.classList.remove("active");
  btnClock.classList.remove("active");

  clockHTML();
  const spanSeconds = document.getElementById("spanSeconds");
  spanSeconds.textContent = `.`;
  btnsHTML();

  btnStart.addEventListener("click", startStopwatch);
  btnReset.addEventListener("click", resetStopwatch);
  btnStop.addEventListener("click", stopStopwatch);
}

function startStopwatch() {
  currentInterval = setInterval(() => {
    hideStartBtn();
    secondsValue++;
    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue++;
    }
    if (minutesValue === 60) {
      minutesValue = 0;
      hoursValue++;
    }

    formatSpan();
  }, 10);
}

function stopStopwatch() {
  clearInterval(currentInterval);
  stopBtn();
}

function resetStopwatch() {
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;

  secondsSpan.textContent = "00";
  minutesSpan.textContent = "00";
  hoursSpan.textContent = "00";

  showStartBtn();
  stopStopwatch();
}

// Timer function
function excecuteTimer() {
  location.hash = "#timer";
  resetAll();
  // subtitle.textContent = "Set your timer!";

  title.textContent = "Timer";
  btnTimer.classList.add("active");
  btnStopwatch.classList.remove("active");
  btnAlarm.classList.remove("active");
  btnClock.classList.remove("active");

  setYourTimer();
}

function startTimer() {
  event.preventDefault();

  // let timerInputs = document.getElementById("timerInputs");
  let seconds = parseInt(event.target.seconds.value);
  let minutes = parseInt(event.target.minutes.value);
  let hours = parseInt(event.target.hours.value);

  secondsValue = seconds;
  minutesValue = minutes;
  hoursValue = hours;

  if (Number.isNaN(hoursValue)) {
    hours = "00";
    hoursValue = 0;
  }
  if (Number.isNaN(minutesValue)) {
    minutes = "00";
    minutesValue = 0;
  }
  if (Number.isNaN(secondsValue)) {
    seconds = "00";
    secondsValue = 0;
  }
  if (secondsValue === 0 && minutesValue === 0 && hoursValue === 0) {
    subtitle.classList.remove("error-text");
    subtitle.textContent = "Enter a number!";
    subtitle.classList.add("error-text");
  } else {
    container.innerHTML = " ";
    subtitle.textContent = " ";
    clockHTML();
    btnsHTML();
    continueTimer();

    formatSpan();

    hideStartBtn();

    btnStart.addEventListener("click", continueTimer);
    btnReset.addEventListener("click", excecuteTimer);
    btnStop.addEventListener("click", stopStopwatch);
  }
}

function continueTimer() {
  hideStartBtn();

  currentInterval = setInterval(() => {
    secondsValue--;

    if (secondsValue === -1) {
      minutesValue--;
      secondsValue = 59;
    }
    if (minutesValue === -1) {
      hoursValue--;
      minutesValue = 59;
    }
    if (hoursValue === -1) {
      hoursValue = 0;
      minutesValue = 0;
      secondsValue = 0;
    }
    if (secondsValue === 0 && minutesValue === 0 && hoursValue === 0) {
      stopStopwatch();
      showStartBtn();
      container.innerHTML = " ";
      subtitle.classList.remove("error-text");
      setYourTimer();
      subtitle.textContent = "Time's up!";
    }

    console.log(secondsValue);

    formatSpan();
  }, 1000);
}

// Pomodoro function
function excecuteAlarm() {
  location.hash = "#pomodoro";
  resetAll();
  
  title.textContent = "Pomodoro";
  subtitle.textContent = "5 minutes pomodoro";
  btnAlarm.classList.add("active");
  btnStopwatch.classList.remove("active");
  btnTimer.classList.remove("active");
  btnClock.classList.remove("active");

  clockHTML();
  btnsHTML();

  minutesSpan.textContent = "05";
  minutes = "05";

  minutesValue = formatTime(minutes);

  btnStart.addEventListener("click", continueTimer);
  btnReset.addEventListener("click", excecuteAlarm);
  btnStop.addEventListener("click", stopStopwatch);
}

//Clock functions
function excecuteClock() {
  location.hash = "#clock";
  resetAll();

  title.textContent = "Clock";
  subtitle.textContent = "Time in your city";
  btnAlarm.classList.remove("active");
  btnClock.classList.add("active");
  btnStopwatch.classList.remove("active");
  btnTimer.classList.remove("active");

  clockHTML();

  currentInterval = setInterval(() => {
    displayTime();
  }, 1000);
}

function displayTime() {
  // const spanHours = 
  // spanHours.textContent = "h";
  const time = new Date();
  hoursSpan.textContent = `${time.getHours().toString().padStart(2, "0")}`;
  minutesSpan.textContent = `${time.getMinutes().toString().padStart(2, "0")}`;
  secondsSpan.textContent = `${time.getSeconds().toString().padStart(2, "0")}`;
}


//Initial function
excecuteStopwatch();
