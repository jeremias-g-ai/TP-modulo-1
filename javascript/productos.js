console.log("productos.js cargado");
const imagenPrincipal = document.getElementById("imagenPrincipal");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const cerrarModal = document.getElementById("cerrarModal");
const libro1 = document.getElementById("libro1");
const libro2 = document.getElementById("libro2");
const libro3 = document.getElementById("libro3");
const libro4 = document.getElementById("libro4");
const libro5 = document.getElementById("libro5");
function cambiarImagen(imgSrc) {
    imagenPrincipal.src = imgSrc;
}
libro1.addEventListener("click", () => cambiarImagen(libro1.src));
libro2.addEventListener("click", () => cambiarImagen(libro2.src));
libro3.addEventListener("click", () => cambiarImagen(libro3.src));
libro4.addEventListener("click", () => cambiarImagen(libro4.src));
libro5.addEventListener("click", () => cambiarImagen(libro5.src));


imagenPrincipal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = imagenPrincipal.src;
});


cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});