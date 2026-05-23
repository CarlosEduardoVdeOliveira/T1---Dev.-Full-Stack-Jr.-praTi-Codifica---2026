/*
3. Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
*/
const prompt = require("prompt-sync")();

const monthlySalary = Number(prompt("Qual atual salário: "));
const percentageIncrease = Number(
  prompt("Qual percentual de aumento (ex: 5, 10, 20): "),
);

function calculateTheNewSalary(monthlySalary, percentageIncrease) {
  let convertToPercentage = percentageIncrease / 100;
  if (monthlySalary <= 1500) {
    convertToPercentage *= 2;
  }
  let newSalary = monthlySalary + monthlySalary * convertToPercentage;
  return newSalary;
}
console.log(calculateTheNewSalary(monthlySalary, percentageIncrease));
