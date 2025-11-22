const markerHome = document.getElementById("home-result");
const markerGuest = document.getElementById("guest-result");
const timerElement = document.getElementById("game-timer");
let time = 0;
let timerInterval;

put = (e) => {
  //e represents the current object, on wich user interacts
  if (e.name === "home") {
    markerHome.innerHTML = parseInt(markerHome.innerHTML) + parseInt(e.value);
  } else {
    markerGuest.innerHTML = parseInt(markerGuest.innerHTML) + parseInt(e.value);
  }
};



make = (e) => {
  if (e.name === "home") {
    markerHome.innerHTML = "0";
  } else {
    markerGuest.innerHTML = "0";
  }
};

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    time++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 0;
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
updateTimer();
