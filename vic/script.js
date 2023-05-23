const imgs = document.querySelectorAll("img");
const imgContainer = document.getElementById("img-container");
const button = document.getElementById("button");
const teste = document.getElementById("teste");

let intervalo;
let index = 0;
let playing = false;

console.log(teste.width);

function changeImage() {
    index++;

    if(index > imgs.length -1) {
        index = 0;
    }

    imgContainer.style.transform = `translateX(${-index * teste.width}px)`;
}

function play() {
    if(!playing) {
        button.innerHTML = `<i class="bi bi-stop-circle-fill"></i>`;
        intervalo = setInterval(changeImage, 2500)
        playing = true;
    } else {
        button.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
        clearInterval(intervalo);
        playing = false;
        
    }
    
    
}