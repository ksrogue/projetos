const btns = document.querySelectorAll(".btn");
const personagens = document.querySelectorAll(".personagem");

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        unselectPersonagem();
        unselectBtn();
        
        btn.classList.add("selected");
        personagens[i].classList.add("selected");
    });
});

function unselectPersonagem() {
    const selectedPersonagem = document.querySelector(".personagem.selected");
    selectedPersonagem.classList.remove("selected");
}

function unselectBtn() {
    const selectedBtn = document.querySelector(".btn.selected");
    selectedBtn.classList.remove("selected");
}