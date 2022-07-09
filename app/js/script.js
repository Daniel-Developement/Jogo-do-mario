let sliderElement = document.getElementById("slider");
let buttonElement = document.getElementById('gerarSenha');

let sizePassword = document.getElementById('valor');
let password = document.getElementById('password');

let containerPassword = document.getElementById('container-password');

let charsert = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@";
let newPass = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

buttonElement.addEventListener('click', () => {
    generatePassword();
})

password.addEventListener('click', () => {
    copyPassowrd();
})

function generatePassword() {
    let pass = "";
    newPass = "";
    for (let i = 0, n = charsert.length; i < sliderElement.value; ++i) {
        pass += charsert.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hidden");
    password.innerHTML = pass;
    newPass = pass;
}

function copyPassowrd() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(newPass);
}
