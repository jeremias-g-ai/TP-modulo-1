console.log("JS cargado");


// 1. BASE DE DATOS (LIBROS)

const libros = {
  libro1: {
    titulo: "The Lord of the Rings",
    autor: "J.R.R. Tolkien",
    precio: "$120.000",
    descripcion: "La obra épica de fantasía de Tolkien.",
    imagen: "../assets/coleccion-senor-anillos-tolkien-01.avif"
  },

  libro2: {
    titulo: "El Último Reino",
    autor: "Bernard Cornwell",
    precio: "$40.000",
    descripcion: "Historia de guerra y reinos anglosajones.",
    imagen: "../assets/el ultimo reyno.jpg"
  },

  libro3: {
    titulo: "La Torre Oscura",
    autor: "Stephen King",
    precio: "$100.000",
    descripcion: "Fantasía oscura y ciencia ficción.",
    imagen: "../assets/la torre obscura.webp"
  },

  libro4: {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    precio: "$80.000",
    descripcion: "El joven mago de Hogwarts.",
    imagen: "../assets/Harry potter.webp"
  },

  libro5: {
    titulo: "Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    precio: "Un riñón",
    descripcion: "El detective más famoso.",
    imagen: "../assets/sherlock holmes.jpg"
  },
  libro6: {
  titulo: "El Hobbit",
  autor: "J.R.R. Tolkien",
  precio: "$85.000",
  descripcion: "Precuela de El Señor de los Anillos.",
  imagen: "../assets/El hobbit.jpg"
}
};


// 2. ELEMENTOS DEL DOM

const imagenPrincipal = document.getElementById("imagenPrincipal");
const titulo = document.getElementById("tituloPrincipal");
const autor = document.getElementById("autorPrincipal");
const precio = document.getElementById("precioPrincipal");
const descripcion = document.getElementById("descripcionPrincipal");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const cerrarModal = document.getElementById("cerrarModal");


// 3. FUNCIÓN PRINCIPAL

function mostrarLibro(libro) {
  titulo.textContent = libros[libro].titulo;
  autor.textContent = libros[libro].autor;
  precio.textContent = libros[libro].precio;
  descripcion.textContent = libros[libro].descripcion;
  imagenPrincipal.src = libros[libro].imagen;
}


// 4. EVENTOS GALERÍA

document.querySelectorAll(".miniatura").forEach(img => {
  img.addEventListener("click", () => {
    const libro = img.dataset.libro;
    mostrarLibro(libro);
  });
});

// 5. MODAL


// abrir modal
imagenPrincipal.addEventListener("click", () => {
  modal.classList.add("active");
  modalImg.src = imagenPrincipal.src;
});

cerrarModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});