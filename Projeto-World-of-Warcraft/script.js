const wheelBtns = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".img");
const info = document.querySelectorAll(".info-container");
let index = 0;
let timer = 5000;

//changeImg();

wheelBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        deactivateSelectedBtn();
        button.classList.add("selected");

        deactivateSelectedImg();
        imgs[i].classList.add("active");

        deactivateSelectedInfo();
        info[i].classList.add('info-active');
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

// function changeImg() {
//     for (let i = 0; i < imgs.length; i++) {
//         imgs[i].style.display = "none";
//         wheelBtns[i].classList.remove("selected");
//         info[i].classList.remove("info-active")
//     }

//     index++;

//     if (index > imgs.length) {
//         index = 1;
//     }

//     imgs[index - 1].style.display = "block";
//     wheelBtns[index - 1].classList.add("selected");
//     info[index - 1].classList.add("info-active");

//     setTimeout(changeImg, timer);
// }