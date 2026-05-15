/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e 
calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos),
adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa 
(60 anos ou mais).
*/
const prompt = require("prompt-sync")();

const currentYear = new Date().getFullYear();

let yearOfBirth = Number(prompt("Digite seu ano de nascimento: "));

function calculateAge(yearOfBirth) {
  const age = currentYear - yearOfBirth;

  if (age < 0) {
    return "Ano inválido!";
  } else if (age <= 12) {
    return "Você é criança!";
  } else if (age <= 17) {
    return "Você é adolescente!";
  } else if (age <= 59) {
    return "Você é adulto!";
  } else {
    return "Você é idoso!";
  }
}

console.log(calculateAge(yearOfBirth));



