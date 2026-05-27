/*
5. Leia um número N e exiba todos os números primos entre 2 e N 
usando laços aninhados (for dentro de for). Exiba também 
a quantidade total de primos encontrados.
*/

const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));

let totalPrimeNumber = 0;

for (let i = 2; i <= number; i++) {
  let dividers = 0;

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      dividers++;
    }
  }

  if (dividers === 2) {
    console.log("Número primo:", i);
    totalPrimeNumber++;
  }
}

console.log("Total de números primos:", totalPrimeNumber);
