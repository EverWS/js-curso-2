let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function verificarConsole() {
    console.log('O botão foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JS!');
}

function verificaCidade() {
    let cidade = prompt('Qual o nome de uma cidade do Brasil?');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function resultadoSoma() {
    let num1 = Number(prompt('Digite um número inteiro:'));
    let num2 = Number(prompt('Digite outro número inteiro:'));
    let resultado = num1 + num2;
    alert(`A soma dos dois números inteiros é ${resultado}`);
}