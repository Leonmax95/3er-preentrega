// darkMode.js
const darkStyles = document.getElementById('darkModeToggle');

darkStyles && darkStyles.addEventListener('click', () => {
    const darkmode = new Darkmode();
    darkmode.toggle();
});

// Inicializar DarkMode.js con modo predeterminado en light
new Darkmode({
    label: '🌓', // Puedes personalizar el ícono o texto del botón
    // Otras opciones de configuración...
}).showWidget();