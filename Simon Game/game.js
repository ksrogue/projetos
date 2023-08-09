// array com as cores dos botões;
const colours = ["green", "yellow", "red", "blue"];

// padrão que o jogo irá criar;
let gamePattern = [];

// cores que o jogador escolheu;
let userClickedPattern = [];

// checa se o jogo iniciou;
let gameStarted = false;

// nível da partida;
let level = 0;

// checa o botão que o jogador clicou;
$(".items").on("click", function() {
  let userChosenColour = $(this).attr("id"); 
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


// inicia o jogo quando o botão for clicado;
$(".btn").on("click", function() {
  if(!gameStarted) {
    $(".btn").text("Level " + level);
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
});

// checa se a resposta do jogador está correta;
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
    $(".btn").text("GAME OVER! RECOMEÇAR.");
    startOver();
  }
}

// cria a próxima cor da sequencia;
function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = colours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  $(".btn").text("Level " + level);
  level++;
}

// toca o som da cor correspondente;
function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

// animação da cor correspondente;
function animatePress(currentColour) {
  $(`.${currentColour}`).addClass("pressed");

  setTimeout(() => {
    $(`.${currentColour}`).removeClass("pressed");
  }, 100)
}

// game over;
function gameOver() {
  new Audio("sounds/wrong.mp3").play();
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 500);
}

// recomeça o jogo;
function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
