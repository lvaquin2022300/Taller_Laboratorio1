/*var cabecera = document.getElementById("main-header");

// Obtener la posición inicial de la cabecera
var posicionInicial = cabecera.offsetTop;

// Función para actualizar la posición de la cabecera al hacer scroll
function actualizarCabecera() {
    if (window.pageYOffset > posicionInicial) {
        cabecera.classList.add("fija");
    } else {
        cabecera.classList.remove("fija");
    }
}

// Evento de scroll para llamar a la función
window.onscroll = function () {
    actualizarCabecera();
};*/

window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})