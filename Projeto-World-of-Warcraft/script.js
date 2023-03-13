const wheelBtns = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".img");
const info = document.querySelectorAll(".info-container");

wheelBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        deactivateSelectedBtn();
        button.classList.add("selected");

        deactivateSelectedImg();
        imgs[index].classList.add("active");

        deactivateSelectedInfo();
        info[index].classList.add('info-active');
    })
})

function deactivateSelectedBtn() {
    const selectedBtn = document.querySelector(".selected");
    selectedBtn.classList.remove("selected");
}

function deactivateSelectedImg() {
    const selectedImg = document.querySelector(".active");
    selectedImg.classList.remove("active");
}

function deactivateSelectedInfo() {
    const selectedInfo = document.querySelector(".info-active");
    selectedInfo.classList.remove("info-active");
}