"use strict";
console.log("main.js");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");

const newYears = "1 1 2023";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor((totalSeconds / 3600) % 24);

  const mins = Math.floor(totalSeconds / 60) % 60;

  const secs = Math.floor(totalSeconds % 60);

  //   console.log(days, hours, minutes, seconds);
  //   console.log(newYearsDate - currentDate);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = zeroBefore(hours);
  minsEl.innerHTML = zeroBefore(mins);
  secsEl.innerHTML = zeroBefore(secs);
}

function zeroBefore(time) {
  return time < 10 ? `0${time}` : time;
}

// CALLING THE DATE
countDown();

setInterval(countDown, 1000);

// snowflakes
createSnowflake();
setInterval(createSnowflake, 50);

function createSnowflake() {
  const snowFlake = document.createElement("i");
  snowFlake.classList.add("fa");
  snowFlake.classList.add("fa-snowflake-o");
  snowFlake.style.left = Math.random() * window.innerWidth + "px";

  // random animation duration
  //between 2 and 5 secs
  snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s";

  //snow oppacity
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}
