/*
4. Crie um programa que leia três números inteiros e exiba o maior deles, sem
utilizar funções prontas como Math.max().
*/
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Digite primeiro número: "));
const secondNumber = Number(prompt("Digite segundo número: "));
const thirdNumber = Number(prompt("Digite terceiro número: "));

function whichIsTheLargestNumber(firstNumber, secondNumber, thirdNumber) {
  let larger = firstNumber;
  if (secondNumber >= larger) {
    larger = secondNumber;
  }
  if(thirdNumber >= larger){
    larger = thirdNumber;
  }

  return larger;
}


const largerNumber = whichIsTheLargestNumber(firstNumber, secondNumber, thirdNumber)

console.log("O maior número é: ", largerNumber);

