// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable global para almacenar los nombres
let amigos = [];

/**
 * Agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre válido");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
     } else if (cantidadAmigos < 4) {
        alert("Debe agregar 4 amigos antes de sortear.");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}

// Función para reiniciar la lista y limpiar la pantalla
function reiniciarLista() {
    amigos = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}