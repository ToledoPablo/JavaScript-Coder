const loginForm = document.querySelector('.loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user =>  user.email === email &&  user.password === password);
    if(!validUser){
        return Swal.fire({
            icon: 'error',
            title: 'Usuario y/o contraseña incorrecta',
          })
    }
    window.location.href = 'index.html';
})