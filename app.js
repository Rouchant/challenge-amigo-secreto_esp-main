const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const inputAmigo = document.getElementById("amigo");
let amigos = [];

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    if (nombre.length > 20) {
        alert("El nombre no puede tener más de 20 caracteres.");
        return;
    }
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("delete-button");
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.innerHTML = "<p>No hay amigos para sortear.</p>";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong> 🎉</p>`;
}

inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
