
/*
3. Peça ao usuário quantos termos da sequência de Fibonacci deseja 
ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...
*/

const prompt = require("prompt-sync")();

const quantity = Number(
  prompt("Digite quantos termos da sequência de Fibonacci: ")
);

function fib(quantity) {
  let first = 1;
  let second = 1;

  if (quantity <= 0) {
    console.log("Quantidade inválida!");
    return;
  }

  if (quantity === 1) {
    console.log("1");
    return;
  }

  let sequence = "1 1 ";

  for (let i = 3; i <= quantity; i++) {
    let next = first + second;

    sequence += `${next} `;

    first = second;
    second = next;
  }

  console.log(sequence);
}

fib(quantity);