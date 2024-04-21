// let carrito = [];

// function renderizarCarrito() {
//     const listaCarrito = document.getElementById("lista-carrito");
    
//     listaCarrito.innerHTML = "";

    
//     carrito.forEach(item => {
//         const fila = document.createElement("tr");
//         fila.innerHTML = `
//             <td><img src="${item.imagen}" width="50"></td>
//             <td>${item.nombre}</td>
//             <td>$${item.precio}</td>
//             <td><a href="#" class="borrar-item" data-id="${item.id}">X</a></td>
//         `;
//         listaCarrito.appendChild(fila);
//     });

    
//     document.querySelectorAll('.borrar-item').forEach(boton => {
//         boton.addEventListener('click', function(event) {
//             event.preventDefault();
//             const id = parseInt(this.dataset.id);
//             const index = carrito.findIndex(producto => producto.id === id);
//             if (index !== -1) {
//                 carrito.splice(index, 1);
//             }
//             renderizarCarrito();
//         });
//     });
// }


// let borrarItemBtns = document.getElementsByClassName('borrar-item');


// for (let btn of borrarItemBtns) {
//     btn.addEventListener('click', function(event) {
        
//         event.preventDefault();

        
//         let id = parseInt(this.dataset.id);

        
//         let index = productos.findIndex(producto => producto.id === id);
//         if (index !== -1) {
//             productos.splice(index, 1);
//         }

        
//         localStorage.setItem('productos', JSON.stringify(productos));

        
//         renderizarCarrito();
//     });
// }


// function vaciarCarrito() {
//     carrito = [];
    
//     renderizarCarrito();
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const carritoContainer = document.getElementById("carrito");
//     const imgCarrito = document.getElementById("img-carrito");
//     const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

   
//     function mostrarCarrito() {
//         carritoContainer.classList.toggle("mostrar");
//     }

   
//     function agregarAlCarrito(id) {
        
//         const productoEncontrado = productos.find(producto => producto.id === id);

        
//         carrito.push(productoEncontrado);

        
//         mostrarNotificacion(`${productoEncontrado.nombre} agregado al carrito`);

        
//         renderizarCarrito();
//     }

    
//     function mostrarNotificacion(mensaje) {
       
//         const notificacion = document.createElement('div');
//         notificacion.classList.add('notificacion');
//         notificacion.textContent = mensaje;

        
//         document.body.appendChild(notificacion);

       
//         setTimeout(() => {
//             notificacion.remove();
//         }, 3000); 
//     }

    
//     imgCarrito.addEventListener("click", mostrarCarrito);

    
//     document.querySelectorAll(".agregar-carrito").forEach(boton => {
//         boton.addEventListener("click", () => {
//             const id = parseInt(boton.dataset.id);
//             agregarAlCarrito(id);
//         });
//     });

    
//     vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
// });


// window.vaciarCarrito = vaciarCarrito;


// Objeto global para manejar la funcionalidad del carrito
window.carritoFunciones = {
    carrito: [],

    renderizarCarrito: function() {
        const listaCarrito = document.getElementById("lista-carrito");
        listaCarrito.innerHTML = "";
        this.carrito.forEach(item => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td><img src="${item.imagen}" width="50"></td>
                <td>${item.nombre}</td>
                <td>$${item.precio}</td>
                <td><a href="#" class="borrar-item" data-id="${item.id}">X</a></td>
            `;
            listaCarrito.appendChild(fila);
        });
        this.actualizarBotonesEliminar();
    },

    actualizarBotonesEliminar: function() {
        document.querySelectorAll('.borrar-item').forEach(boton => {
            boton.addEventListener('click', (event) => {
                event.preventDefault();
                const id = parseInt(boton.dataset.id);
                this.eliminarDelCarrito(id);
            });
        });
    },

    eliminarDelCarrito: function(id) {
        const index = this.carrito.findIndex(producto => producto.id === id);
        if (index !== -1) {
            this.carrito.splice(index, 1);
            this.renderizarCarrito();
        }
    },

    vaciarCarrito: function() {
        this.carrito = [];
        this.renderizarCarrito();
    },

    agregarAlCarrito: function(id) {
        const productoEncontrado = productos.find(producto => producto.id === id);
        if (productoEncontrado) {
            this.carrito.push(productoEncontrado);
            this.mostrarNotificacion(`${productoEncontrado.nombre} agregado al carrito`);
            this.renderizarCarrito();
        }
    },

    mostrarNotificacion: function(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.classList.add('notificacion');
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);
        setTimeout(() => {
            notificacion.remove();
        }, 3000); 
    }
};

// Eventos del DOM
document.addEventListener("DOMContentLoaded", function() {
    const imgCarrito = document.getElementById("img-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    imgCarrito.addEventListener("click", carritoFunciones.renderizarCarrito.bind(carritoFunciones));
    vaciarCarritoBtn.addEventListener("click", carritoFunciones.vaciarCarrito.bind(carritoFunciones));

    document.querySelectorAll(".agregar-carrito").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.dataset.id);
            carritoFunciones.agregarAlCarrito(id);
        });
    });
});
