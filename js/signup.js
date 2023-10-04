const signupForm = document.querySelector('.signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Revisa si el usuario ya esta creado, de lo contrario lo crea y almacena en localStorage

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find( user => user.email === email)
    if (isUserRegistered) {
        return alert ('El usuario ya esta registrado');
    }

    Users.push({ name: name, lastname: lastname, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(Users));

    alert('Registro exitoso');
    
    // Redireccion a Login //

    window.location.href = 'login.html';
})