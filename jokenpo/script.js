// if player == 0 && enemy == 0 / draw;
// if player == 0 && enemy == 1 / enemy win;
// if player == 0 && enemy == 2 / player win;
// if player == 1 && enemy == 0 / player win;
// if player == 1 && enemy == 1 / draw;
// if player == 1 && enemy == 2 / enemy win;
// if player == 2 && enemy == 0 / enemy win;
// if player == 2 && enemy == 1 / player win;
// if player == 2 && enemy == 2 / draw;

let randomNumber;
let selected = false;

const playerHand = document.querySelectorAll(".player-hand");
const enemyHand = document.querySelector(".enemy-hand-img");

const time = document.querySelector(".time");
const msg = document.querySelector(".msg");

let playerPoints = 0;
let cpuPoints = 0;

for (let i = 0; i < playerHand.length; i++) {
  playerHand[i].addEventListener("click", function () {
    if (!selected) {
      selected = true;
      this.classList.add("selecionado");
      msg.style.display = "none";
      time.style.display = "block";
      countDown(this.id);
    }
  });
}

function play(id) {
  randomNumber = Math.floor(Math.random() * 3);

  if (id == randomNumber) {
    // empate
    enemyHand.setAttribute("src", `images/${randomNumber}.jpg`);
    time.style.display = "none";
    msg.innerHTML = "Empatou!";
    setTimeout(() => {
      msg.style.display = "block";
      setTimeout(() => {
        replay();
      }, 700);
    }, 500);
  } else if (
    (id == 0 && randomNumber == 2) ||
    (id == 1 && randomNumber == 0) ||
    (id == 2 && randomNumber == 1)
  ) {
    // jogador vence
    enemyHand.setAttribute("src", `images/${randomNumber}.jpg`);
    time.style.display = "none";
    msg.innerHTML = "Você Venceu!";
    setTimeout(() => {
      playerPoints++;
      document.querySelector(".pPoints").innerHTML =
        "Sua Pontuação: " + playerPoints;
      msg.style.display = "block";
      setTimeout(() => {
        replay();
      }, 700);
    }, 500);
  } else {
    // jogador perde
    enemyHand.setAttribute("src", `images/${randomNumber}.jpg`);
    time.style.display = "none";
    msg.innerHTML = "Você Perdeu!";
    setTimeout(() => {
      cpuPoints++;
      document.querySelector(".cPoints").innerHTML =
        "Pontuação do CPU: " + cpuPoints;
      msg.style.display = "block";
      setTimeout(() => {
        replay();
      }, 700);
    }, 500);
  }
}

function countDown(id) {
  const time = document.querySelector(".time");
  setTimeout(() => {
    time.innerHTML = "2";
    setTimeout(() => {
      time.innerHTML = "1";
      setTimeout(() => {
        time.innerHTML = "0";
        play(id);
      }, 1000);
    }, 1000);
  }, 1000);
}

function replay() {
  selected = false;
  enemyHand.setAttribute("src", `images/com-hand.png`);
  msg.innerHTML = "Escolha Novamente";
  time.innerHTML = "3";
  playerHand.forEach((element) => {
    element.classList.remove("selecionado");
  });
}
