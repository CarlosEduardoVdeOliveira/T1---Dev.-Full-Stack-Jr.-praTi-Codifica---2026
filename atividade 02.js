/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e 
calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos),
adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa 
(60 anos ou mais).
*/
const prompt = require("prompt-sync")();
const getYear = new Date().getFullYear()
let yearOfBirth = Number(prompt("Digite seu ano de nascimento: "))

function calculateAge(yearOfBirth){
  const calculateAge = Number(getYear) - Number(yearOfBirth)
  if (calculateAge >= 0 && calculateAge <= 12) {
    return "Você é criança!"
  }else if(calculateAge <= 17){
    return "Você é adolescente!"
  }else if(calculateAge <= 59){
    return "Você é adulto!"
  }else if(calculateAge >= 60){
    return "Você é idoso!"
  }else{
    return "Ano inválido!"
  }
}

console.log(calculateAge(yearOfBirth));



