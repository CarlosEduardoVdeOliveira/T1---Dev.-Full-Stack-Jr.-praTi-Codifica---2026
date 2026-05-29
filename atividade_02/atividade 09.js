/*
9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço
do...while, peça ao usuário para adivinhar; a cada tentativa, diga
se o número é maior ou menor. Registre as tentativas em um array e, 
ao acertar, exiba o histórico e quantas tentativas foram necessárias.
*/

const prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberTest = 0;

const history = [];

do {
  numberTest = Number(prompt("Digite um número: "));

  history.push(numberTest);

  if (numberTest > randomNumber) {
    console.log("O número secreto é menor!");
  } else if (numberTest < randomNumber) {
    console.log("O número secreto é maior!");
  } else {
    console.log(
      `Parabéns! Você acertou o número ${randomNumber}`
    );
  }

} while (numberTest !== randomNumber);

console.log(`Tentativas necessárias: ${history.length}`);

console.log("Histórico de tentativas:");

for (const attempt of history) {
  console.log(attempt);
}

