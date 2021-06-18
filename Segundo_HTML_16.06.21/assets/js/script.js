let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txt-nome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = 'red';
        nomeOk = false;
    } else {
        txtNome.innerHTML = "";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txt-email");

    if (email.value.indexOf('@') === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = 'red';
        emailOk = false;
    } else {
        txtEmail.innerHTML = "";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txt-assunto");

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = 'block';
        assuntoOk = false;
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function validarFormulario() {
    if (nomeOk === true && emailOk === true && assuntoOk === true) {
        alert("Formulário válido!")
    } else {
        alert("Formulário inválido!");
    }
}


function mapaZoom() {
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}