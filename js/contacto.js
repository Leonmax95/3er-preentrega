document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name === '' || email === '' || message === '') {
        document.getElementById('response').innerText = 'Por favor, completa todos los campos.';
        return;
    }
    document.getElementById('response').innerText = 'Enviando mensaje...';
    // Aquí iría el código para enviar el formulariO
});