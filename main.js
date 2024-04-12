const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 5600;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  container.className = "container grow";
  text.innerHTML = "Love!";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      container.className = "container shrink";

      text.innerHTML = "Marry!";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`June 22 ${currentYear + 2} 00:00:00`);

// Set background year
year.innerText = currentYear;

//  update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h > 9 ? h : `0${h}`;
  minutes.innerHTML = m > 9 ? m : `0${m}`;
  seconds.innerHTML = s > 9 ? s : `0${s}`;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
