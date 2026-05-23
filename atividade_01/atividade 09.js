
/*
9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
*/

const prompt = require("prompt-sync")()

const numberMonth = Number(prompt("Digite o numero do mês: "))
let bissexto = ""

switch (numberMonth) {
  case 1:
    console.log("Janeiro, 31 dias");
    break;
  case 2:
    bissexto = prompt("O ano é bissexto? (sim ou não) ").toLowerCase()
    if (bissexto === "sim") {
      console.log("Fevereiro, 29 dias");
    }else if(bissexto === "não"){
      console.log("Fevereiro, 28 dias");
    }else{
      console.log("Operação inválida!");
      
    }
    break;
  case 3:
    console.log("Março, 31 dias");
    break;
  case 4:
    console.log("Abril, 30 dias");
    break;
  case 5:
    console.log("Maio, 31 dias");
    break;
  case 6:
    console.log("Junho, 30 dias");
    break;
  case 7:
    console.log("Julho, 31 dias");
    break;
  case 8:
    console.log("Agosto, 31 dias");
    break;
  case 9:
    console.log("Setembro, 30 dias");
    break;
  case 10:
    console.log("Outubro, 31 dias");
    break;
  case 11:
    console.log("Novembro, 30 dias");
    break;
  case 12:
    console.log("Dezembro, 31 dias");
    break;

  default:
    console.log("Operação inválida!");
    
    break;
}


