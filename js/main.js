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
