/*
1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10)
usando um laço for. Em seguida, pergunte se ele deseja ver outra 
tabuada e repita enquanto a resposta for "sim".
*/
const prompt = require("prompt-sync")()
let number = Number(prompt("Digite um número: "))

function multiplicationTable(number){
  for (let i = 1; i <= 10; i++) {
    let result = i * number
    console.log(`${i} * ${number} = ${result}`)
  }
}
let  toContinue = "sim"
while(toContinue === "sim"){
  multiplicationTable(number);
  toContinue = prompt("Deseja ver outra tabuada? (sim ou não)").toLowerCase()
  if (toContinue === "sim") {
    number = Number(prompt("Digite um número: "))
  }
}


