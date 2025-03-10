const btnLogin = document.getElementsByClassName('Login')[0];
const btnReg = document.getElementsByClassName('Reg')[0];

btnLogin.addEventListener('click', () => {
    window.location.href = '../login.html'
});

btnReg.addEventListener('click', () => {
    window.location.href = '../registration.html'
});