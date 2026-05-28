/*
8. Leia uma palavra, armazene seus caracteres em um array e, 
percorrendo-o de trás para frente com um laço for, monte a palavra
invertida. Exiba a palavra original, a invertida e informe se ela
é um palíndromo.
*/

const prompt = require("prompt-sync")();

const word = prompt("Digite uma palavra: ").toLowerCase();

const arrayWord = [];
for (const character of word) {
  arrayWord.push(character);
}
console.log(arrayWord);

let inverseWord = "";
for (let i = arrayWord.length - 1; i >= 0; i--) {
  inverseWord += arrayWord[i];
}

console.log(`Palavra original: ${word}`);
console.log(`Palavra invertida: ${inverseWord}`);

if (word === inverseWord) {
  console.log(`A palavra ${word} é palíndroma.`);
} else {
  console.log(
    `A palavra ${word} não é palíndroma, pois é diferente de ${inverseWord}`,
  );
}
