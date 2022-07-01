//Create clock in HTML
function clockHTML() {
  const timer = document.createElement("div");
  timer.classList.add("timer");
  const timerDisplay = document.createElement("div");
  timerDisplay.classList.add("timer-display");
  const timerDisplayText = document.createElement("div");
  timerDisplayText.classList.add("timer-display-text");
  const timerDisplayTextHours = document.createElement("span");
  timerDisplayTextHours.classList.add("timer-display-text-hours");
  timerDisplayTextHours.setAttribute("id", "hours");
  const timerDisplayTextMinutes = document.createElement("span");
  timerDisplayTextMinutes.classList.add("timer-display-text-minutes");
  timerDisplayTextMinutes.setAttribute("id", "minutes");
  const timerDisplayTextSeconds = document.createElement("span");
  timerDisplayTextSeconds.classList.add("timer-display-text-seconds");
  timerDisplayTextSeconds.setAttribute("id", "seconds");
  timerDisplayTextHours.textContent = "00";
  timerDisplayTextMinutes.textContent = "00";
  timerDisplayTextSeconds.textContent = "00";

  const span = document.createElement("span");
  span.setAttribute("id", "spanHours");
  span.textContent = ":";
  const span2 = document.createElement("span");
  span2.setAttribute("id", "spanSeconds");
  span2.textContent = ":";

  timer.appendChild(timerDisplay);
  timerDisplay.appendChild(timerDisplayText);
  timerDisplayText.appendChild(timerDisplayTextHours);
  timerDisplayText.appendChild(span);
  timerDisplayText.appendChild(timerDisplayTextMinutes);
  timerDisplayText.appendChild(span2);
  timerDisplayText.appendChild(timerDisplayTextSeconds);
  container.appendChild(timer);

  secondsSpan = document.getElementById("seconds");
  minutesSpan = document.getElementById("minutes");
  hoursSpan = document.getElementById("hours");
}
//Create start, stop and reset buttons
function btnsHTML() {
  const btns = document.createElement("div");
  btns.classList.add("wrapper", "wrapper-buttons");

  const startBtn = document.createElement("button");
  startBtn.classList.add("button", "button-start");
  startBtn.setAttribute("id", "start");

  const startIcon = document.createElement("i");
  startIcon.classList.add("fa-solid", "fa-play");

  const stopBtn = document.createElement("button");
  stopBtn.classList.add("button", "button-stop");
  stopBtn.setAttribute("id", "stop");

  const stopIcon = document.createElement("i");
  stopIcon.classList.add("fa-solid", "fa-pause");

  const Resetbtn = document.createElement("button");
  Resetbtn.classList.add("button", "button-reset");
  Resetbtn.setAttribute("id", "reset");

  const ResetIcon = document.createElement("i");
  ResetIcon.classList.add("fa-solid", "fa-rotate-left");

  btns.appendChild(Resetbtn);
  Resetbtn.appendChild(ResetIcon);
  btns.appendChild(startBtn);
  startBtn.appendChild(startIcon);
  btns.appendChild(stopBtn);
  stopBtn.appendChild(stopIcon);
  container.appendChild(btns);

  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  btnReset = document.getElementById("reset");
}
//Create inputs for timer
function setYourTimer() {
  subtitle.classList.remove("error-text");
  subtitle.textContent = "Set your timer!";

  const form = document.createElement("form");
  form.setAttribute("onSubmit", "startTimer()");
  form.classList.add("timer-form");
  //startTimer();

  const timerDisplay = document.createElement("div");
  timerDisplay.classList.add("wrapper", "timer", "timer-display");
  timerDisplay.setAttribute("id", "timer-inputs");
  const timerDisplayText = document.createElement("div");

  const inputHours = document.createElement("input");
  inputHours.classList.add("timer-display-text");
  inputHours.setAttribute("type", "number");
  inputHours.setAttribute("id", "hoursIn");
  inputHours.setAttribute("name", "hours");
  inputHours.setAttribute("min", "0");
  inputHours.setAttribute("max", "99");
  inputHours.setAttribute("placeholder", "00");

  const inputMinutes = document.createElement("input");
  inputMinutes.classList.add("timer-display-text");
  inputMinutes.setAttribute("type", "number");
  inputMinutes.setAttribute("id", "minutesIn");
  inputMinutes.setAttribute("name", "minutes");
  inputMinutes.setAttribute("min", "0");
  inputMinutes.setAttribute("max", "59");
  inputMinutes.setAttribute("placeholder", "00");

  const inputSeconds = document.createElement("input");
  inputSeconds.classList.add("timer-display-text");
  inputSeconds.setAttribute("type", "number");
  inputSeconds.setAttribute("id", "secondsIn");
  inputSeconds.setAttribute("name", "seconds");
  inputSeconds.setAttribute("min", "0");
  inputSeconds.setAttribute("max", "59");
  inputSeconds.setAttribute("placeholder", "00");
  inputSeconds.setAttribute("autofocus", "true");

  const spanHours = document.createElement("span");
  spanHours.textContent = "h";
  spanHours.classList.add("spanTimer");
  const spanMinutes = document.createElement("span");
  spanMinutes.textContent = "m";
  spanMinutes.classList.add("spanTimer");
  const spanSeconds = document.createElement("span");
  spanSeconds.textContent = "s";
  spanSeconds.classList.add("spanTimer");

  const btns = document.createElement("div");
  btns.classList.add("wrapper", "wrapper-buttons");
  const btnSummit = document.createElement("button");
  btnSummit.classList.add("button", "button-start");
  btnSummit.setAttribute("id", "summit");

  const btnSummitIcon = document.createElement("i");
  btnSummitIcon.classList.add("fa-solid", "fa-play");

  form.appendChild(timerDisplay);
  timerDisplay.appendChild(timerDisplayText);
  timerDisplayText.appendChild(inputHours);
  timerDisplayText.appendChild(spanHours);
  timerDisplayText.appendChild(inputMinutes);
  timerDisplayText.appendChild(spanMinutes);
  timerDisplayText.appendChild(inputSeconds);
  timerDisplayText.appendChild(spanSeconds);

  form.appendChild(btns);
  btns.appendChild(btnSummit);
  btnSummit.appendChild(btnSummitIcon);
  container.appendChild(form);
}
//Hide start button
function hideStartBtn() {
  btnStart.style.display = "none";
  btnStop.style.display = "inline-block";
  btnReset.style.display = "inline-block";
}
//Show start button
function showStartBtn() {
  btnStart.style.display = "inline-block";
  btnStop.style.display = "none";
  btnReset.style.display = "none";
}
function stopBtn(){
  btnStart.style.display = "inline-block";
  btnStop.style.display = "none";
}
//Set formatTime for text
function formatSpan() {
  secondsSpan.textContent = formatTime(secondsValue);
  minutesSpan.textContent = formatTime(minutesValue);
  hoursSpan.textContent = formatTime(hoursValue);
}
//Function to format time
function formatTime(time) {
  return `0${time}`.slice(-2);
}
//Initial HTML
clockHTML();
btnsHTML();
