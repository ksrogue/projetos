// as cores que aparece no jogo;
const buttonColours = ["green", "yellow", "red", "blue"];

// padrão que o jogo irá gerar de forma aleatoria;
let gamePattern = [];

// cores que o jogador clicou;
let userClickedPattern = [];

// checa se o jogo começou;
let gameStarted = false;

// nível do jogo;
let level = 0;

// checa a cor que o jogador clicou;
$(".items").on("click", function() {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playAudio(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
})

// gera as cores aleatorias;
$(".btn").on("click", function() {
  if(!gameStarted) {
    $(".btn").text("Level 0");
    nextSequence();
    gameStarted = true;
  }
})


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let colours = buttonColours[randomNumber];
  gamePattern.push(colours);

  $(`.${colours}`).fadeOut(100).fadeIn(100);
  playAudio(colours);
  animatePress(colours);

  level++;
  $(".btn").text("level " + level);
}

function playAudio(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function animatePress(currentColour) {
  $(`.${currentColour}`).addClass("pressed");

  setTimeout(function() {
    $(`.${currentColour}`).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if(gamePattern.length == userClickedPattern.length) { 
      setTimeout(function() {
        nextSequence();
        userClickedPattern = [];
      }, 1000)
    }
  } else {
    new Audio("sounds/wrong.mp3").play();
    $('.btn').text("Game Over! Aperte Novamente pra Recomeçar")
    gameOver();
  }
}

function gameOver() {
  $("body").addClass("game-over");

  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
