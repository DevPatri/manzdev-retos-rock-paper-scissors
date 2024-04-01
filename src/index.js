const piedra = "🗿";
const tijera = "✂️";
const papel = "📄";
const opciones = ["🗿", "✂️", "📄"];

const choice = document.querySelectorAll(".choice a");

choice.forEach((element) => {
  element.addEventListener("click", function (e) {
    choice.forEach((b) => b.classList.remove("selected"));
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    }
    element.classList.toggle("selected");
  });
});

let cpuChoice;

const play = document.querySelector("#play");

play.addEventListener("click", () => {
  // se elige la opción de la CPU
  cpuChoice = opciones[Math.floor(Math.random() * opciones.length)];
  const cpu = document.querySelector(".cpu-choice");
  cpu.innerHTML = cpuChoice;
  const achoice = document.querySelectorAll(".choice a");
  const user = document.querySelector(".user-choice");

  // se recoge la opción del usuario y se muestra.
  achoice.forEach((element) => {
    if (element.classList.contains("selected")) {
      if (element.textContent.includes(piedra)) {
        user.innerHTML = piedra;
      } else if (element.textContent.includes(papel)) {
        user.innerHTML = papel;
      } else {
        user.innerHTML = tijera;
      }
    }
  });

  const userChoice = document.querySelector(".user-choice");
  const winner = document.querySelector(".winner");

  if (cpuChoice === piedra && userChoice.textContent === tijera) {
    winner.innerHTML = cpuChoice;
    winner.innerHTML += "Rocks Win!";
  } else if (cpuChoice === piedra && userChoice.textContent === papel) {
    winner.innerHTML = userChoice.textContent;
    winner.innerHTML += "Paper Win!";
  } else if (cpuChoice === piedra && userChoice.textContent === piedra) {
    winner.innerHTML = "";
    winner.innerHTML += "NO Winner!";
  } else if (cpuChoice === papel && userChoice.textContent === tijera) {
    winner.innerHTML = userChoice.textContent;
    winner.innerHTML += "Scissor Win!";
  } else if (cpuChoice === papel && userChoice.textContent === papel) {
    winner.innerHTML = "";
    winner.innerHTML += "NO Winner!";
  } else if (cpuChoice === papel && userChoice.textContent === piedra) {
    winner.innerHTML = cpuChoice;
    winner.innerHTML += "Paper Win!";
  } else if (cpuChoice === tijera && userChoice.textContent === piedra) {
    winner.innerHTML = userChoice.textContent;
    winner.innerHTML += "Rocks Win!";
  } else if (cpuChoice === tijera && userChoice.textContent === papel) {
    winner.innerHTML = cpuChoice;
    winner.innerHTML += "Scissor Win!";
  } else if (cpuChoice === tijera && userChoice.textContent === tijera) {
    winner.innerHTML = "";
    winner.innerHTML += "NO Winner!";
  }
});
