
// Capturando os 3 campos da tela.
let btnEntrar = document.getElementById('btn-entrar');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

const emailBanco = "admin@gmail.com";
const senhaBanco = "12345678";

// Aqui capturo o evento de click para tomar uma ação qualquer
btnEntrar.addEventListener('click', () => {

    if (email.value === "" && senha.value === "") {
       
        alert('Por favor, insira um E-mail e uma Senha.')

    } else if (email.value !== emailBanco || senha.value !== senhaBanco) {
    
        alert('Usuário ou Senha incorretos. Tente novamente!')       

    } else {

        window.open('cadastro-usuario.html', '_self')
        
    }
});

//Desafio:
// 1° Pegar o email digitado. Check
// 2° Pegar a senha digitada. Check
// 3° Validar se o email e senha estão corretos.
// 4° Caso esteja incorreto, mandar mensagem de usuario ou senha invalida.
// 5° Caso esteja correto, ir para tela de cadastro de usuário. Check