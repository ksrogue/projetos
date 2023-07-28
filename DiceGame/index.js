let p1Number;
let p1Image = document.querySelector(".p1-image");
let p2Number;
let p2Image = document.querySelector(".p2-image");
let winMessage = document.querySelector("h1");

function refresh() {
  p1Number = Math.floor(Math.random() * 6) + 1;
  p2Number = Math.floor(Math.random() * 6) + 1;

  p1Image.innerHTML = `<img src="images/dice${p1Number}.png"/>`;
  p2Image.innerHTML = `<img src="images/dice${p2Number}.png"/>`;

  if (p1Number > p2Number) {
    winMessage.innerHTML = "<i class='bi bi-flag-fill'></i> Player 1 WINS!";
  } else if (p2Number > p1Number) {
    winMessage.innerHTML = "Player 2 WINS! <i class='bi bi-flag-fill'></i>";
  } else {
    winMessage.innerHTML = "We Have a Draw!";
  }
}
