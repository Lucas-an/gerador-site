let slidesElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOQRSTUVXZ0123456789!@';
let novaSenha = '';

sizePassword.innerHTML = slidesElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword () {
    let pass = ''
    for(let i = 0, n = charset.length; i < slidesElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
       
    }
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword () {
    alert('SENHA COPIADA COM SUCESSO!')
    navigator.clipboard.writeText(novaSenha);
}




