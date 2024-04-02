let carrito = [];

function renderizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    
    listaCarrito.innerHTML = "";

    
    carrito.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${item.imagen}" width="50"></td>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td><a href="#" class="borrar-item" data-id="${item.id}">X</a></td>
        `;
        listaCarrito.appendChild(fila);
    });

    
    document.querySelectorAll('.borrar-item').forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            const id = parseInt(this.dataset.id);
            const index = carrito.findIndex(producto => producto.id === id);
            if (index !== -1) {
                carrito.splice(index, 1);
            }
            renderizarCarrito();
        });
    });
}


let borrarItemBtns = document.getElementsByClassName('borrar-item');


for (let btn of borrarItemBtns) {
    btn.addEventListener('click', function(event) {
        
        event.preventDefault();

        
        let id = parseInt(this.dataset.id);

        
        let index = productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            productos.splice(index, 1);
        }

        
        localStorage.setItem('productos', JSON.stringify(productos));

        
        renderizarCarrito();
    });
}


function vaciarCarrito() {
    carrito = [];
    
    renderizarCarrito();
}

document.addEventListener("DOMContentLoaded", function() {
    const carritoContainer = document.getElementById("carrito");
    const imgCarrito = document.getElementById("img-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

   
    function mostrarCarrito() {
        carritoContainer.classList.toggle("mostrar");
    }

   
    function agregarAlCarrito(id) {
        
        const productoEncontrado = productos.find(producto => producto.id === id);

        
        carrito.push(productoEncontrado);

        
        mostrarNotificacion(`${productoEncontrado.nombre} agregado al carrito`);

        
        renderizarCarrito();
    }

    
    function mostrarNotificacion(mensaje) {
       
        const notificacion = document.createElement('div');
        notificacion.classList.add('notificacion');
        notificacion.textContent = mensaje;

        
        document.body.appendChild(notificacion);

       
        setTimeout(() => {
            notificacion.remove();
        }, 3000); 
    }

    
    imgCarrito.addEventListener("click", mostrarCarrito);

    
    document.querySelectorAll(".agregar-carrito").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.dataset.id);
            agregarAlCarrito(id);
        });
    });

    
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
});


window.vaciarCarrito = vaciarCarrito;