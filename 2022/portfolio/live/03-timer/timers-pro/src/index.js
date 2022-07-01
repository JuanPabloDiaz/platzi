// DOM
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
const btnStopwatch = document.getElementById("stopwatch-button");
const btnAlarm = document.getElementById("alarm-button");
const btnClock = document.getElementById("clock-button");
const btnTimer = document.getElementById("timer-button");
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let hoursSpan = document.getElementById("hours");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const main = document.querySelector(".main");

// Event Listeners
btnStart.addEventListener("click", startStopwatch);
btnReset.addEventListener("click", resetStopwatch);
btnStop.addEventListener("click", stopStopwatch);
btnTimer.addEventListener("click", excecuteTimer);
btnStopwatch.addEventListener("click", excecuteStopwatch);
btnAlarm.addEventListener("click", excecuteAlarm);

let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let currentInterval;

function startStopwatch() {
  currentInterval = setInterval(() => {
    btnStart.style.display = "none";
    btnStop.style.display = "inline-block";
    btnReset.style.display = "inline-block";
    secondsValue++;
    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue++;
    }
    if (minutesValue === 60) {
      minutesValue = 0;
      hoursValue++;
    }
    seconds.textContent = formatTime(secondsValue);
    minutes.textContent = formatTime(minutesValue);
    hours.textContent = formatTime(hoursValue);
  }, 10);
}

function formatTime(time) {
  return `0${time}`.slice(-2);
}

function stopStopwatch() {
  clearInterval(currentInterval);
  btnStart.style.display = "block";
  btnStop.style.display = "none";
}

function resetStopwatch() {
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  btnReset.style.display = "none";
  btnStop.style.display = "none";
  btnStart.style.display = "block";
}

function resetAll(){
  subtitle.textContent = " ";
  clearInterval(currentInterval);
}

// Timer
function startTimer() {
  event.preventDefault();


  let timerInputs = document.getElementById("timerInputs");
  let seconds = parseInt(event.target.seconds.value);
  let minutes = parseInt(event.target.minutes.value);
  let hours = parseInt(event.target.hours.value);

  console.log(seconds);

  btnStart.style.display = "none";

  secondsSpan.textContent = formatTime(seconds);
  minutesSpan.textContent = formatTime(minutes);
  hoursSpan.textContent = formatTime(hours);

  secondsValue = seconds;
  minutesValue = minutes;
  hoursValue = hours;

  currentInterval = setInterval(() => {
    secondsValue--;
    if (secondsValue === -1) {
      minutesValue--;
      secondsValue = 59;
    }
    if (minutesValue === -1) {
      hoursValue--;
      minutesValue = -1;
    }
    if (hoursValue === -1) {
      hoursValue = 0;
      minutesValue = 0;
      secondsValue = 0;
    }
    if (secondsValue === 0 && minutesValue === 0 && hoursValue === 0) {
      stopStopwatch();
      btnStart.style.display = "block";
      btnStop.style.display = "none";
      btnReset.style.display = "none";
      subtitle.textContent = "Time's up!";
    }

    btnReset.addEventListener("click", resetStopwatch);

    console.log(secondsValue);

    secondsSpan.textContent = formatTime(secondsValue);
    minutesSpan.textContent = formatTime(minutesValue);
    hoursSpan.textContent = formatTime(hoursValue);
  }, 1000);
}

function mainInner() {
  main.innerHTML = `
  <div class="container">
        <div class="timer">
          <div class="timer-display">
            <div class="timer-display-text">
              <span class="timer-display-text-hours" id="hours">00</span>:
              <span class="timer-display-text-minutes" id="minutes">00</span>:
              <span class="timer-display-text-seconds" id="seconds">00</span>
            </div>
          </div>
        </div>

        <div class="wrapper wrapper-buttons">
          <button class="button button-reset" id="reset">
            <i class="fa-solid fa-rotate-left"></i>
          </button>
          <button class="button button-stop" id="stop">
            <i class="fa-solid fa-pause"></i>
          </button>
          <button class="button button-start" id="start">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
      `;
}

function excecuteStopwatch() {
  resetAll();

  title.textContent = "Stopwatch";
  btnStopwatch.classList.add("active");
  btnAlarm.classList.remove("active");
  btnTimer.classList.remove("active");
  btnClock.classList.remove("active");

  mainInner();

  secondsSpan = document.getElementById("seconds");
  minutesSpan = document.getElementById("minutes");
  hoursSpan = document.getElementById("hours");

  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  btnReset = document.getElementById("reset");

  btnStart.addEventListener("click", startStopwatch);
  btnReset.addEventListener("click", resetStopwatch);
  btnStop.addEventListener("click", stopStopwatch);
}

function excecuteTimer() {
  resetAll();

  title.textContent = "Timer";
  btnTimer.classList.add("active");
  btnStopwatch.classList.remove("active");
  btnAlarm.classList.remove("active");
  btnClock.classList.remove("active");

  main.innerHTML = `
  <div class="container">
        <div class="timer">
          <div class="timer-display">
            <div class="timer-display-text">
              <span class="timer-display-text-hours" id="hours">00</span>:
              <span class="timer-display-text-minutes" id="minutes">00</span>:
              <span class="timer-display-text-seconds" id="seconds">00</span>
            </div>
          </div>
        </div>

        <div class="">
        <form onsubmit="startTimer()" class="timer-form">
        <p class="wrapper wrapper-title timer-title">Set your timer</p>
        <div class="wrapper timer timer-group" id="timer-inputs">
           <input type="number" id="hoursIn" name="hours" value="0" min="0" max="23" placeholder="Hours"> <span>:</span>
            <input type="number" id="minutesIn" name="minutes" value="0" placeholder="Minutes" min="0" max="59"> <span>:</span>
            <input type="number" id="secondsIn" name="seconds" value="0" placeholder="Hours" min="0" max="59">
        </div>

        <div class="wrapper wrapper-buttons">
          <button class="button button-reset" id="reset">
            <i class="fa-solid fa-rotate-left"></i>
          </button>
          <button class="button button-stop" id="stop">
            <i class="fa-solid fa-pause"></i>
          </button>
          <button type="submit" class="button button-start" id="start">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
        </form>
        </div>
      </div>
      `;

  secondsSpan = document.getElementById("seconds");
  minutesSpan = document.getElementById("minutes");
  hoursSpan = document.getElementById("hours");

  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  btnReset = document.getElementById("reset");

  btnReset.addEventListener("click", resetStopwatch);
  btnStop.addEventListener("click", stopStopwatch);

  // let timerInputs = document.getElementById("timer-inputs");
}

function excecuteAlarm() {
  resetAll();

  title.textContent = "Pomodoro";
  btnAlarm.classList.add("active");
  btnStopwatch.classList.remove("active");
  btnTimer.classList.remove("active");
  btnClock.classList.remove("active");

  mainInner();

  secondsSpan = document.getElementById("seconds");
  minutesSpan = document.getElementById("minutes");
  hoursSpan = document.getElementById("hours");

  let minutes = minutesSpan.textContent;
  minutesSpan.textContent = "05";
  minutes = "05";

  minutesValue = formatTime(minutes);

  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  btnReset = document.getElementById("reset");

  btnStart.addEventListener("click", startAlarm);
  btnReset.addEventListener("click", resetStopwatch);
  btnStop.addEventListener("click", stopStopwatch);
}

function startAlarm() {

  btnStart.style.display = "none";
  btnStop.style.display = "inline-block";
  btnReset.style.display = "inline-block";

  secondsValue = secondsSpan.textContent;

  currentInterval = setInterval(() => {
    secondsValue--;
    if (secondsValue === -1) {
      minutesValue--;
      secondsValue = 59;
    }
    if (minutesValue === -1) {
      hoursValue--;
      minutesValue = -1;
    }
    if (hoursValue === -1) {
      hoursValue = 0;
      minutesValue = 0;
      secondsValue = 0;
    }
    if (secondsValue === 0 && minutesValue === 0 && hoursValue === 0) {
      stopStopwatch();
      btnStart.style.display = "block";
      btnStop.style.display = "none";
      btnReset.style.display = "none";

      subtitle.textContent = "Time is up!";
    }

    secondsSpan.textContent = formatTime(secondsValue);
    minutesSpan.textContent = formatTime(minutesValue);
    hoursSpan.textContent = formatTime(hoursValue);
  }, 1000);
}
