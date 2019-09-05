const timeTitle = document.querySelector(".time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const list = ["wonderful human", "classy", "beautiful", "smartypants"];

function getGreeting(hours) {
  if (hours >= 7 && hours < 12) {
    return "Good Morning,"
  }
  if (hours >=12 && hours < 17 ) {
    return "Good Afternoon,"
  }
  if (hours >= 17 && hours < 20) {
    return "Good Evening,"
  }
  else {
    return "Good Night,"
  }
}

function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const RANDOM_NAME = list[Math.floor(Math.random()*list.length)];
  timeTitle.innerText = `${hours<10? `0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`;
  greeting.innerText = getGreeting(hours)+ " " + RANDOM_NAME
}

getTime();
