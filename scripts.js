let workTitle = document.querySelector("#work");
let breakTitle = document.querySelector("#break");

let workTime = 25;
let breakTime = 5;

let workMinutes = workTime - 1;
let breakMinutes = breakTime - 1;

let seconds = "00";

let timerInterval;

onload = () => {
  document.querySelector("#minutes").innerHTML = workTime;
  document.querySelector("#seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

function start() {
  document.querySelector("#start").style.display = "none";
  document.querySelector("#reset").style.display = "block";

  seconds = 59;

  breakCount = 0;

  let timerFunction = () => {
    document.querySelector("#minutes").innerHTML = workMinutes;
    document.querySelector("#seconds").innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;

          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      }
      seconds = 59;
    }
  };
  timerInterval = setInterval(timerFunction, 1000);
}

function reset() {
  document.querySelector("#reset").style.display = "none";
  document.querySelector("#start").style.display = "block";
  
  workMinutes = workTime;
  seconds = "00";

  document.querySelector("#minutes").innerHTML = workMinutes;
  document.querySelector("#seconds").innerHTML = seconds;

  clearInterval(timerInterval)
}
