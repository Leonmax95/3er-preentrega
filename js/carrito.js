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
        boton.addEventListener('click', function (event) {
            event.preventDefault();
            const id = parseInt(this.dataset.id);
            const index = carrito.findIndex(producto => producto.id === id);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualiza el contenido del carrito en localStorage
            }
            renderizarCarrito();
        });
    });
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito'); // Elimina el contenido del carrito en localStorage
    renderizarCarrito();
}

document.addEventListener("DOMContentLoaded", function () {
    const carritoContainer = document.getElementById("carrito");
    const imgCarrito = document.getElementById("img-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    function mostrarCarrito() {
        carritoContainer.classList.toggle("mostrar");
    }

    function agregarAlCarrito(id) {
        const productoEncontrado = productos.find(producto => producto.id === id);
        const esIndex = window.location.pathname === '/index.html';
        if (!esIndex) {
            productoEncontrado.imagen = `::/${productoEncontrado.imagen}`;
        }
        carrito.push(productoEncontrado);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarNotificacion(`${productoEncontrado.nombre} agregado al carrito`);
        renderizarCarrito();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
            carrito = carritoGuardado;
            renderizarCarrito();
        }
    });

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

    // Cargar contenido del carrito desde localStorage al cargar la página
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        carrito = carritoGuardado;
        renderizarCarrito();
    }
});

window.vaciarCarrito = vaciarCarrito;



