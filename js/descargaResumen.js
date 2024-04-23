
document.getElementById('descargarResumen').addEventListener('click', async function () {

    let resumenCompraHTML = generarResumenCompra(carrito);

    let resumenCompraJSON = `<div>${resumenCompraHTML}</div>`;

    let resumenCompraElement = document.createElement('div');
    resumenCompraElement.innerHTML = '<div style="text-align:center; margin: 50px;"><h1>ATHENA INDUMENTARIA</h1><br><br>' + resumenCompraJSON + '</div>';

    let opt = {
        margin: 1,
        filename: 'ResumenCompra.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(resumenCompraElement).save();
});





document.getElementById('cerrarModal').addEventListener('click', function () {

    vaciarCarrito();


    let agradecimientoModal = new bootstrap.Modal(document.getElementById('agradecimientoModal'));
    agradecimientoModal.hide();

    console.log(JSON.stringify(carrito) + " Carrito vaciado");


    [...document.querySelectorAll('.modal.show')].forEach(modal => {
        let bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();
    });
});