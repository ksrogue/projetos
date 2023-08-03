let drums = $(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        new Audio(`sounds/${i}.mp3`).play();       
    })
}



addEventListener('keydown', function(event) {
    buttonAnimation(event.key);
    switch (event.key) {
        case "w": new Audio("sounds/0.mp3").play();
        break;
        case "a": new Audio("sounds/1.mp3").play();
        break;
        case "s": new Audio("sounds/2.mp3").play();
        break;
        case "d": new Audio("sounds/3.mp3").play();
        break;
        case "j": new Audio("sounds/4.mp3").play();
        break;
        case "k": new Audio("sounds/5.mp3").play();
        break;
        case "l": new Audio("sounds/6.mp3").play();
        break;
    default: console.log(buttonInnerHTML);
    }
})

function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}
