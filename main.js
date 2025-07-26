const adelante = document.getElementById("adelante");
const atras = document.getElementById("atras");
const centro = document.getElementById("centro");

let waifus = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let contador = 0;

// Crear las imágenes
let imagenes = waifus.map((archivo) => {
    let img = document.createElement("img");
    img.src = `imagenes/${archivo}`;
    img.classList.add("image");
    img.style.display = "none"; // Ocultar todas menos la activa
    return img;
});

// Agregar todas las imágenes al contenedor
imagenes.forEach((img) => centro.appendChild(img));

// Mostrar la primera imagen
imagenes[contador].style.display = "block";

// Botón adelante
adelante.addEventListener("click", () => {
    imagenes[contador].style.display = "none";
    contador = (contador + 1) % imagenes.length;
    imagenes[contador].style.display = "block";
});

// Botón atrás
atras.addEventListener("click", () => {
    imagenes[contador].style.display = "none";
    contador = (contador - 1 + imagenes.length) % imagenes.length;
    imagenes[contador].style.display = "block";
});
