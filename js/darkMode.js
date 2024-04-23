// darkMode.js
new Darkmode({
    label: '🌓', // Puedes personalizar el ícono o texto del botón
    // Otras opciones de configuración...
}).showWidget();

const darkStyles = document.getElementById('darkModeToggle');

darkStyles && darkStyles.addEventListener('click', () => {
    const darkmode = new Darkmode();
    darkmode.toggle();
});
