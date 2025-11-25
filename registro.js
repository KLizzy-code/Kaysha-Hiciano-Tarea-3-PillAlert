let medicinas = JSON.parse(localStorage.getItem("medicinas")) || [];


const tabla = document.querySelector("#tabla-medicinas tbody");
const form = document.getElementById("med-form");
const nombre = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const editIndex = document.getElementById("edit-index");
const formTitle = document.getElementById("form-title");
const btnSubmit = document.getElementById("btn-submit");


function renderTabla() {
tabla.innerHTML = "";
medicinas.forEach((m, index) => {
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${m.nombre}</td>
<td>${m.fecha}</td>
<td>
<button class='btn btn-warning btn-sm' onclick='editar(${index})'>Editar</button>
</td>
`;
tabla.appendChild(tr);
});
}


function guardar() {
localStorage.setItem("medicinas", JSON.stringify(medicinas));
renderTabla();
}


form.addEventListener("submit", (e) => {
e.preventDefault();


if (editIndex.value === "") {
medicinas.push({ nombre: nombre.value, fecha: fecha.value });
} else {
medicinas[editIndex.value] = { nombre: nombre.value, fecha: fecha.value };
}


guardar();


form.reset();
editIndex.value = "";
formTitle.textContent = "Registrar Medicina";
btnSubmit.textContent = "Guardar";
});


function editar(i) {
const m = medicinas[i];
nombre.value = m.nombre;
fecha.value = m.fecha;
editIndex.value = i;
formTitle.textContent = "Editar Medicina";
btnSubmit.textContent = "Actualizar";
}


renderTabla();
