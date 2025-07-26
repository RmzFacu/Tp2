const adelante = document.getElementById("adelante");
const atras = document.getElementById("atras");
const centro = document.getElementById("centro");

let waifus = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]; // en la misma carpeta
let contador = 0;

// Crear la imagen
let imagen = document.createElement("img");
imagen.src = waifus[contador];
imagen.classList.add("image");
centro.appendChild(imagen);

// Función para actualizar la imagen
function mostrarImagen(index) {
  imagen.src = waifus[index];
}

// Avanzar imagen
adelante.addEventListener("click", () => {
  contador = (contador + 1) % waifus.length; // vuelve al inicio si llega al final
  mostrarImagen(contador);
});

// Retroceder imagen
atras.addEventListener("click", () => {
  contador = (contador - 1 + waifus.length) % waifus.length; // vuelve al final si va antes del inicio
  mostrarImagen(contador);
});

// Si querés usar un input para buscar algo en el futuro
function search() {
  const input = document.getElementById("busqueda").value;
  console.log("Buscando:", input);
}
