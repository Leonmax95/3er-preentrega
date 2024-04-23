document.addEventListener('DOMContentLoaded', function () {

    const realizarCompraBtn = document.getElementById('realizarCompraBtn');


    document.getElementById('finalizar-compra').addEventListener('click', function () {

        let resumenCompra = generarResumenCompra(carrito);


        document.getElementById('resumenCompraBody').innerHTML = resumenCompra;


        let resumenCompraModal = new bootstrap.Modal(document.getElementById('resumenCompraModal'));
        resumenCompraModal.show();
    });


    document.getElementById('realizarCompraBtn').addEventListener('click', function () {
        realizarCompra(carrito);
    });

    document.getElementById('realizarCompraBtn').addEventListener('click', function () {
        let agradecimientoModal = new bootstrap.Modal(document.getElementById('agradecimientoModal'));
        agradecimientoModal.show();
    });
});

//Utilizacion de sintaxis avanzada en una funcion "común" a funcion "flecha"
const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.classList.remove('modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
            modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
    });
});








function generarResumenCompra(carrito) {
    let total = 0;


    let resumen = '<h5>Resumen de la compra:</h5><ul>';
    carrito.forEach(function (producto) {
        resumen += `<li><img src='${producto.imagen}' width="50"> ${producto.nombre} - $${producto.precio}</li>`;
        total += producto.precio;
    });
    resumen += `</ul><p>Total: $${total}</p>`;

    return resumen;
}


function realizarCompra(carrito) {

    console.log('Compra realizada');


    let agradecimientoModal = new bootstrap.Modal(document.getElementById('agradecimientoModal'));
    agradecimientoModal.show();
}


