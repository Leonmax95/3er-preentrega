// darkMode.js
new Darkmode({
    label: '🌓', // Puedes personalizar el ícono o texto del botón
    // Otras opciones de configuración...
}).showWidget();

document.getElementById('darkModeToggle').onclick = function () {
    const darkmode = new Darkmode();
    darkmode.toggle();
}


