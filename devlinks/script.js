let darkTheme = true;
const body = document.querySelector("body");
const img = document.querySelector("#profile img");

function changeMode() {
    if(darkTheme) {
        img.setAttribute("src", "./assets/placeholder-light.png");
        img.setAttribute("alt", "Placeholder para a foto de perfil com tema claro");
        darkTheme = false;
    } else {
        img.setAttribute("src", "./assets/placeholder.png");
        img.setAttribute("alt", "Placeholder para a foto de perfil com tema escuro");
        darkTheme = true;
    }

    body.classList.toggle("light");
}