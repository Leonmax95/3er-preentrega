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
    });

   
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registerContainer.classList.remove('show');
        registerContainer.classList.add('hide');
        loginContainer.classList.remove('hide');
        loginContainer.classList.add('show');
    });

    loginBtn.addEventListener('click', function () {
        let loginEmail = loginEmailInput.value;
        if (localStorage.getItem('registeredEmail') === loginEmail) {
            localStorage.setItem('loggedInUser', loginEmail);
            mainContainer.style.display = 'none';
        } else {
            let errorMessage = document.getElementById('error-message');
            let errorText = document.getElementById('error-text');
            errorText.textContent = 'Por favor registra tu mail!';
            errorMessage.style.display = 'block'; 
        }
    });
    
    let closeErrorBtn = document.getElementById('close-error-btn');
    closeErrorBtn.addEventListener('click', function () {
        let errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none'; 
    });

    registerBtn.addEventListener('click', function () {
        let registerEmail = registerEmailInput.value
        if (localStorage.getItem('registeredEmail') === registerEmail) {
            let errorMessage = document.getElementById('error-message');
            let errorText = document.getElementById('error-text');
            errorText.textContent = 'El correo ya está registrado.';
            errorMessage.style.display = 'block'; 
        } else {
            localStorage.setItem('registeredEmail', registerEmail);
            mainContainer.style.display = 'none';
            
            console.log('El usuario está logueado con el siguiente correo electrónico: ' + localStorage.getItem("registeredEmail"));
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
});