// Atividade prática – JavaScript básico
// Autor: Manoel Matias do Nascimento Cardoso
// Data: 04/11/2025
// Objetivo: praticar estruturas de controle e repetição

console.log("Exercício 1 – Estrutura de Decisão (if/else)")
const prompt = require('prompt-sync')()

let idade = Number(prompt("Informe a idade da pessoa: "))

if (idade >= 18) {
    console.log("A pessoa é maior de idade.")
} else {
    console.log("A pessoa é menor de idade.")
}


console.log("Exercício 2 – Estrutura Condicional (switch)")
let dia = Number(prompt("Informe um número referente ao dia da semana: "))

switch (dia) {
    case 1:
        console.log("Domingo.")
        break;
    case 2:
        console.log("Segunda-feira.")
        break;
    case 3:
        console.log("Terça-feira.")
        break;
    case 4:
        console.log("Quarta-feira.")
        break;
    case 5:
        console.log("Quinta-feira.")
        break;
    case 6:
        console.log("Sexta-feira.")
        break;
    case 7:
        console.log("Sábado.")
        break;
    default:
        console.log("Número inválido!")
}

console.log("Exercício 3 – Estrutura de Repetição (for)")
console.log("Valores de 1 a 10:")
for (let index = 1; index <= 10; index++){
    console.log(index)
}

console.log("Exercício 4 – Estrutura de Repetição (while)")
let numero = Number(prompt("Informe um número:"))

while (numero != 0) {
    numero = Number(prompt("Informe um número: "))
}
if(numero == 0){
    console.log("Leitura de números encerrada.")
}


console.log("Exercício 5 – Estrutura de Repetição (do...while)")
let senha = 123
let senha2
do{
    senha2 = Number(prompt("Informe a senha correta: "))
}while(senha2 != senha)
