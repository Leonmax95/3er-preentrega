document.addEventListener('DOMContentLoaded', function () {

    let mainContainer = document.querySelector('.main-container');
    let loginContainer = document.querySelector('.login-container');
    let registerContainer = document.querySelector('.register-container');
    let loginLink = document.getElementById('loginLink');
    let registerLink = document.getElementById('registerLink');
    let loginBtn = document.getElementById('loginBtn');
    let registerBtn = document.getElementById('registerBtn');
    let loginEmailInput = document.getElementById('loginEmail');
    let registerEmailInput = document.getElementById('registerEmail');
    let errorMessage = document.getElementById('error-message');
    let errorText = document.getElementById('error-text');

    let registeredEmail = localStorage.getItem('registeredEmail');
    if (registeredEmail) {
        mainContainer.style.display = 'none';
        console.log('El usuario está logueado con el siguiente correo electrónico: ' + localStorage.getItem("registeredEmail"));
    } else {
        registerContainer.classList.add('show');
        console.log('El usuario no está registrado.');
    }

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginContainer.classList.remove('show');
        loginContainer.classList.add('hide');
        registerContainer.classList.remove('hide');
        registerContainer.classList.add('show');
        errorMessage.style.display = 'none'; // Oculta el mensaje de error al cambiar de formulario
    });

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registerContainer.classList.remove('show');
        registerContainer.classList.add('hide');
        loginContainer.classList.remove('hide');
        loginContainer.classList.add('show');
        errorMessage.style.display = 'none'; // Oculta el mensaje de error al cambiar de formulario
    });

    loginBtn.addEventListener('click', function () {
        let loginEmail = loginEmailInput.value;

        if (!emailRegex.test(loginEmail)) {
            errorText.textContent = 'Por favor, ingrese un correo electrónico válido.';
            errorMessage.style.display = 'block';
        } else if (!isRegisteredEmail(loginEmail)) {
            errorText.textContent = 'El correo ingresado no está registrado. Por favor, registre su correo y luego intente ingresar.';
            errorMessage.style.display = 'block';
        } else {
            localStorage.setItem('loggedInUser', loginEmail);
            mainContainer.style.display = 'none';
            errorMessage.style.display = 'none'; // Oculta el mensaje de error después de un inicio de sesión exitoso
        }
    });

    registerBtn.addEventListener('click', function () {
        let registerEmail = registerEmailInput.value;

        if (!emailRegex.test(registerEmail)) {
            errorText.textContent = 'Por favor, ingrese un correo electrónico válido.';
            errorMessage.style.display = 'block';
        } else if (localStorage.getItem('registeredEmail') === registerEmail) {
            errorText.textContent = 'El correo ya está registrado.';
            errorMessage.style.display = 'block';
        } else {
            localStorage.setItem('registeredEmail', registerEmail);
            mainContainer.style.display = 'none';
            console.log('El usuario está logueado con el siguiente correo electrónico: ' + localStorage.getItem("registeredEmail"));
            errorMessage.style.display = 'none'; // Oculta el mensaje de error después de un registro exitoso
        }
    });

    let logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function () {
        console.log("Logout button clicked");
        localStorage.removeItem('registeredEmail');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('isLoggedIn');
        window.location.href = './index.html';
    });

    let closeErrorBtn = document.getElementById('close-error-btn');
    closeErrorBtn.addEventListener('click', function () {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error al hacer clic en el botón de cierre
    });

    // Expresión regular para verificar un correo electrónico válido
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Función para verificar si un correo electrónico está registrado
    function isRegisteredEmail(email) {
        let registeredEmail = localStorage.getItem('registeredEmail');
        if (registeredEmail && registeredEmail === email) {
            return true;
        }
        return false;
    }
});