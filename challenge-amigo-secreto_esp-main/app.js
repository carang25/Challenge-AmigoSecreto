/* Definir una variable de tipo lista para almacenar todos los valores ingresados y poder
hacer el sorteo */

let NombresAmigos = [];

/* Definir la función del botón Añadir: tomar el nombre ingresado al oprimir el elemento 
HTML botón Añadir. La variable debe ser de tipo Input para que tome el valor 
de entrada del id "amigo" */
//Si el campo tiene un nombre agregar el nombre a la variable lista, sino mostrar una 

function agregarAmigo() {
    let InputAmigo = document.getElementById ("amigo").value;
    if (InputAmigo) {
    NombresAmigos.push(InputAmigo);
    document.getElementById("amigo").value = '';
    mostrarAmigos();
    } else {
    alert("Ingresa un nombre");
    return;
    } 
    console.log(NombresAmigos);    
}

/* Definir la función mostrarAmigos. Llamar al elemento HTML "ListaAmigos" donde se
muestran los nombres. limpiar la lista antes de comenzar */
function mostrarAmigos() {
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i =0; i < NombresAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = NombresAmigos[i];
        listaAmigos.appendChild(item);
    }   
}

/* Definir la función del botón Sortear amigo: seleccionar un elemento aleatorio de la 
lista para hacer el sorteo */

function sortearAmigo() {
    if (NombresAmigos.length > 0) {
        let amigoSecreto = NombresAmigos[Math.floor(Math.random() * NombresAmigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tú amigo secreto es: ${amigoSecreto}`;
    } else {
        alert("No hay amigos en la lista para sortear.");
    }
}
