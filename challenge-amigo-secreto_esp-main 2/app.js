
let NombresAmigos = []; // Definir variable tipo lista para almacenar los nombres

/* Definir función del botón Añadir: tomar el nombre ingresado al oprimir el elemento 
HTML botón Añadir. La variable debe ser de tipo Input para que tome el valor 
de entrada del id "amigo". Además Si el campo tiene un nombre agregar el nombre a la 
variable lista, sino mostrar una alerta. Además se llama a dos funciones: 1. mostraAmigos
para crear la lista de nombres y 2. deshabilitarSortear que impide hacer un sorteo 
con menos de 3 amigos */

function agregarAmigo() {
    let InputAmigo = document.getElementById("amigo").value;
    if (InputAmigo) {
        NombresAmigos.push(InputAmigo);
        document.getElementById("amigo").value = '';
        mostrarAmigos();
        deshabilitarSortear(); // Verifica si deshabilitar el botón
    } else {
        alert("Ingresa un nombre");
        return;
    }
    console.log(NombresAmigos);
}

/* Definir la función mostrarAmigos. Llamar al elemento HTML "ListaAmigos" donde se
muestran los nombres. limpiar la lista antes de comenzar. Además, crear un bucle 
de tipo for para verificar el tamaño de la lista e ir incrementando su tamaño y
mostrar la lista de los nombres ingresados (creatElement) */

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
lista para hacer el sorteo cuando se han ingresado 3 amigos o más, sino mostrar una alerta
que no se puede hacer el sorte hasta que se haya ingresado 3 amigos o más */

function sortearAmigo() {
    if (NombresAmigos.length >= 3) {
        let amigoSecreto = NombresAmigos[Math.floor(Math.random() * NombresAmigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tú amigo secreto es: ${amigoSecreto}`;
    } else {
        alert("Necesitas al menos 3 amigos en la lista para hacer el sorteo.");
    }
}

// Llama a deshabilitarSortear al cargar la página
window.onload = function() {
    deshabilitarSortear();
};