document.addEventListener('DOMContentLoaded', function () {
    const categorias2 = document.getElementById('categorias2'); // Cambio aquí
    const catalogo2 = document.getElementById('catalogo2'); // Cambio aquí
    const volverBtn2 = document.getElementById('volverBtn2'); // Cambio aquí

    // Variable para almacenar los tipos de prendas mostrados
    const tiposMostrados = new Set();

    //PRESENTACION CATALOGO 
    // Función para cargar las imágenes representativas de cada tipo de prenda
    fetch('../catalogo.json')
        .then(response => response.json())
        .then(({ prendas }) => {
            prendas.forEach(prenda => {
                const { tipo, id } = prenda; // Obtenemos el tipo y el ID de la prenda

                // Mostrar el rectángulo representativo solo si no se ha mostrado antes
                if (!tiposMostrados.has(tipo)) {
                    const rectangulo = document.createElement('div');
                    rectangulo.classList.add('rectangulo2');
                    rectangulo.id = `${tipo.toLowerCase()}Catalogo`; // Generamos el ID deseado usando el tipo
                    rectangulo.textContent = tipo;
                    rectangulo.addEventListener('click', () => mostrarPrendasPorTipo(tipo));
                    categorias2.appendChild(rectangulo);

                    // Agregar el tipo de prenda mostrado al conjunto
                    tiposMostrados.add(tipo);
                }
            });
        })
        .catch(error => console.error('Error al cargar los tipos de prendas:', error));

    //INDUMENTARIA DENTRO DE CADA CATALOGO 


    // Función para mostrar las prendas disponibles para un tipo de prenda específico
    function mostrarPrendasPorTipo(tipo) {
        // Ocultar las imágenes de categoría
        categorias2.style.display = 'none'; // Cambio aquí

        // Mostrar el botón de volver
        volverBtn2.style.display = 'block'; // Cambio aquí

        // Limpiar el catálogo antes de mostrar las nuevas prendas
        catalogo2.innerHTML = ''; // Cambio aquí

        // Obtener las prendas del tipo seleccionado
        fetch('../catalogo.json')
            .then(response => response.json())
            .then(({ prendas }) => {
                // Filtrar las prendas por el tipo seleccionado
                console.log
                const prendasPorTipo = prendas.filter(prenda => prenda.tipo === tipo);

                // Mostrar las prendas del tipo seleccionado
                prendasPorTipo.forEach((prenda, index) => { // Añadir un índice para la numeración
                    const divProducto = document.createElement('div');
                    divProducto.classList.add('productos-content2');

                    const divProductoInner = document.createElement('div');
                    divProductoInner.classList.add('producto2');

                    const divProductoTxt = document.createElement('div');
                    divProductoTxt.classList.add('producto-txt2');

                    const h3 = document.createElement('h3');
                    h3.textContent = prenda.nombre;

                    const pDescripcion = document.createElement('p');
                    pDescripcion.textContent = `Descripción: Sin Stock`;

                    const pPrecio = document.createElement('p');
                    pPrecio.classList.add('Precio2');
                    pPrecio.textContent = `Precio: Sin Stock`;

                    const btnAgregar = document.createElement('button');
                    btnAgregar.classList.add('agregar-carrito2', 'btn-2');
                    btnAgregar.setAttribute('data-id', prenda.id);
                    btnAgregar.textContent = 'Sin Stock';

                    divProductoTxt.appendChild(h3);
                    divProductoTxt.appendChild(pDescripcion);
                    divProductoTxt.appendChild(pPrecio);
                    divProductoTxt.appendChild(btnAgregar);

                    divProductoInner.appendChild(divProductoTxt);

                    divProducto.style.backgroundColor = getRandomColor();
                    divProducto.style.padding = '20px';
                    divProducto.style.marginBottom = '20px';
                    divProducto.style.borderRadius = '10px';
                    divProducto.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

                    divProducto.appendChild(divProductoInner);

                    // Construir el ID dinámico
                    const id = `${tipo.toLowerCase()}${index + 1}producto2`; // Índice + 1 para evitar ID empezando en 0

                    // Agregar el ID al elemento principal
                    divProducto.setAttribute('id', id);

                    catalogo2.appendChild(divProducto);

                    // Agregar evento al botón "Agregar al carrito"
                    btnAgregar.addEventListener('click', () => {
                        agregarAlCarrito(prenda.id); // Llamar a la función agregarAlCarrito con el ID de la prenda
                    });

                    // Agregar producto al catálogo
                    catalogo2.appendChild(divProducto);
                });
            })
            .catch(error => console.error('Error al cargar las prendas por tipo:', error));
    }

    // Función para generar un color hexadecimal aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Evento para volver al catálogo principal al hacer clic en el botón de volver
    volverBtn2.addEventListener('click', () => {
        window.location.href = '../proximamente.html';
    });

    // Establecer estilos de grid para el contenedor de catálogo
    catalogo2.style.display = 'grid'; // Cambio aquí
    catalogo2.style.gridTemplateColumns = 'repeat(auto-fit, minmax(600px, 4fr))'; // Cambio aquí
    catalogo2.style.gridGap = '20px'; // Cambio aquí
});


