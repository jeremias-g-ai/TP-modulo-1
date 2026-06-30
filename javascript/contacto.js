
console.log("contacto.js cargado correctamente");
const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const btnEnviar = document.getElementById("btnEnviar");

let reservas = [];

btnAgregar.addEventListener("click", function () {

    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Escribí una reserva");
        return;
    }

    reservas.push({
    texto: texto,
    completada: false
});

    renderizarReservas();

    inputTarea.value = "";

});

function renderizarReservas() {

    listaTareas.innerHTML = "";

    reservas.forEach(function (reserva, index) {

        const li = document.createElement("li");

        li.classList.add("list-group-item");

      if (reserva.completada) {
    li.classList.add("completada");
}

        li.innerHTML = `
            ${reserva.texto}

            <button
                class="btn btn-success btn-sm me-2 float-end"
                onclick="completarReserva(${index})">
                ✔
            </button>

            <button
                class="btn btn-danger btn-sm float-end"
                onclick="eliminarReserva(${index})">
                X
            </button>
        `;

        listaTareas.appendChild(li);

    });

}
function eliminarReserva(index) {

    reservas.splice(index, 1);

    renderizarReservas();

}

function completarReserva(index) {

    reservas[index].completada = !reservas[index].completada;

    renderizarReservas();

}

inputTarea.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        btnAgregar.click();

    }

});

btnEnviar.addEventListener("click", function () {

    if (reservas.length === 0) {

        alert("No hay reservas para enviar");

        return;

    }

    console.log("Lista de reservas:", reservas);

    alert("Lista de reservas enviada correctamente");

    reservas = [];

    renderizarReservas();

});