import imagenPlaceholder from "../images/partes-externas-ordenador.png"; // tuve que importar la imagen porque poniendo la ruta no me la tomaba
// En realidad cada producto debería tener su propia imagen, pero supongo  que para el ejemplo alcanza con un placeholder
const productos = [
  {
    id: 1,
    nombre: "Teclado",
    imagen: imagenPlaceholder, 
    precio: 50000,
  },
  {
    id: 2,
    nombre: "Mouse",
    imagen: imagenPlaceholder,
    precio: 9900,
  },
  {
    id: 3,
    nombre: "Monitor",
    imagen: imagenPlaceholder,
    precio: 145000,
  },
  {
    id: 4,
    nombre: "Auriculares",
    imagen: imagenPlaceholder,
    precio: 33000,
  },
  {
    id: 5,
    nombre: "Webcam",
    imagen: imagenPlaceholder,
    precio: 50000,
  },
  {
    id: 6,
    nombre: "Parlantes",
    imagen: imagenPlaceholder,
    precio: 45000,
  },
  {
    id: 7,
    nombre: "Mousepad",
    imagen: imagenPlaceholder,
    precio: 4000,
  },
  {
    id: 8,
    nombre: "Pendrive 32GB",
    imagen: imagenPlaceholder,
    precio: 9000,
  },
  {
    id: 9,
    nombre: "Disco Externo 1TB",
    imagen: imagenPlaceholder,
    precio: 65000,
  },
];

export default productos;
