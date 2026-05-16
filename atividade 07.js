/*
7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.
*/

const prompt = require("prompt-sync")();

const numberFirst = Number(prompt("Digite um número: "));
const numberSecond = Number(prompt("Digite um número: "));
const operation = prompt("Escolha a operação (+, -, *, /): ");

let result = 0;

switch (operation) {
  case "+":
    result = numberFirst + numberSecond;
    console.log(result);
    break;

  case "-":
    result = numberFirst - numberSecond;
    console.log(result);
    break;

  case "*":
    result = numberFirst * numberSecond;
    console.log(result);
    break;

  case "/":
    if (numberSecond === 0) {
      console.log("Não é possível dividir por zero.");
    } else {
      result = numberFirst / numberSecond;
      console.log(result);
    }
    break;

  default:
    console.log("Operação inválida!");
}
