// Array de objetos para los productos
const productos = [
    {
        id: 1,
        nombre: "pantalon 1",
        descripcion: "Calidad premium",
        precio: 13500,
        imagen: "./imagenes/pantalon-uno.jpg",
        tipo: "pantalon"
    },
    {
        id: 2,
        nombre: "pantalon 2",
        descripcion: "Calidad premium",
        precio: 13500,
        imagen: "./imagenes/pantalon-dos.jpg",
        tipo: "pantalon"
    },
    {
        id: 3,
        nombre: "pantalon 3",
        descripcion: "Calidad premium",
        precio: 13500,
        imagen: "./imagenes/pantalon-tres.jpg",
        tipo: "pantalon"
    },
    {
        id: 4,
        nombre: "Vestido 1",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/vestido-cinco.jpg",
        tipo: "vestido"
    },
    {
        id: 5,
        nombre: "Vestido 2",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/vestido-dos.jpg",
        tipo: "vestido"
    },
    {
        id: 6,
        nombre: "Vestido 3",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/vestido-uno.jpg",
        tipo: "vestido"
    },
    {
        id: 7,
        nombre: "calzado 1",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/calzado-uno.jpg",
        tipo: "calzado"
    },
    {
        id: 8,
        nombre: "calzado 2",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/calzado-dos.jpg",
        tipo: "calzado"
    },
    {
        id: 9,
        nombre: "calzado 3",
        descripcion: "Calidad premium",
        precio: 12000,
        imagen: "./imagenes/calzado-tres.jpg",
        tipo: "calzado"
    }
];

let productosJSON = JSON.stringify(productos);

localStorage.setItem('productos', productosJSON);


