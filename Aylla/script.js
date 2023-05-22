function ativar(button) {
    let inativo = document.getElementById("hidden");
    inativo.classList.remove("hidden");
    button.classList.add("hidden");
}

function ativarGaleria(button) {
    let galeria = document.getElementById("galeria");
    let main = document.getElementById("main");
    let header = document.getElementById("header");
    galeria.style.opacity = 1;
    galeria.style.display = "flex";
    button.classList.add("hidden");
    main.classList.add("hidden");
    header.classList.add("hidden");
    setInterval(moveImg, 2500);
    TransformStream.trans
}
