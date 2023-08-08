// array com as cores do joguinho;
const buttonColours = ["green", "red", "yellow", "blue"];

// checa se o game iniciou;
let gameStarted = false;

// level do jogo;
let level = 0;

// sequencia que o jogo irá gerar e o jogador precisa acertar;
let gamePattern = [];

// sequencia que o jogador está selecionando as cores;
let userClickedPattern = [];

// checa a cor que o jogador escolheu;
$(".btn").on("click", function() {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// quando a primeira tecla for apertada, o jogo inicia;
$(document).on("keypress", function() {
  if(!gameStarted) {
    $("h1").text("Level 0");
    nextSequence();
    gameStarted = true;
  } 
});

// mesmo comando anterior, mas para touch no mobile;
$(".mobile-button").on("click", function() {
  if(!gameStarted) {
    $("h1").text("Level 0");
    nextSequence();
    gameStarted = true;
  } 
});

// chamada ao iniciar o jogo e sempre que o jogador acertar a sequencia;
function nextSequence() { 
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);

  level++;
  $("h1").text(`Level ${level}`);
  
}

// checa se a cor que o jogador escolheu corresponde com a ultima cor mostrada;
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
   gameOver();
  }
}

// toca o som correspondente ao botão clicado;
function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

// toca uma animação no botão clicado;
function animatePress(currentColour) {
  $(`.${currentColour}`).addClass("pressed");

  setInterval(() => {
    $(`.${currentColour}`).removeClass("pressed");
  }, 100);
}

// chama o game over caso o jogador erre a sequencia;
function gameOver() {
  new Audio("sounds/wrong.mp3").play();
  $("h1").text("Game Over, Press Any Key to Restart");
  $(".mobile-button").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(() => {
    $(".mobile-button").text("Click to Start");
    $("body").removeClass("game-over"); 
    startOver();
  }, 1000);
}

// recomeça o jogo após o game over;
function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}