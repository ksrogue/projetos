const galeria = document.getElementById("moldura");
const imgs = document.querySelectorAll(".moldura img");
let index = 0;

function moveImg() {
    index++;

    if(index > imgs.length - 1) {
        index = 0;
    }

    galeria.style.transform = `translateX(${-index * 300}px)`;
}

