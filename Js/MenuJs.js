const menu = document.querySelector(".menu");


const boton = document.querySelector(".Fig-menu");


boton.addEventListener("click", Mostrar);

const changes = window.matchMedia("screen and (max-width:767px)");

changes.addListener(validacion);

function validacion(event) {
    // console.log(event);
    if (event.matches) {
        boton.addEventListener("click", Mostrar);

    } else {
        boton.removeEventListener("click", Mostrar);
    }
}

function Mostrar() {
    if (menu.classList.contains("Animacion-Menu")) {
        menu.classList.remove("Animacion-Menu");
        console.log("Mostrar quitado");
    } else {
        menu.classList.add("Animacion-Menu");
        console.log("Mostrar abierto");
    }
}
//Agregar clase/ menu.classList.add('Animacion-Menu');