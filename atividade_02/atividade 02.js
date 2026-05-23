/*
2. Leia um número inteiro positivo e, usando um laço while, calcule 
e exiba quantos dígitos ele possui. Trate o caso do número 
zero (que possui 1 dígito).
*/

const prompt = require("prompt-sync")()

let number = Number(prompt("Digite um número inteiro positivo: "));

let count = 0;

if (number === 0) {
  count = 1;
} else {
  while (number > 0) {
    number = Math.trunc(number / 10);
    count++;
  }
}

console.log(`Quantidade de dígitos: ${count}`);
