/*
10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

*/

const prompt = require("prompt-sync")();

const hours = Number(prompt("Digite a quantidade de horas: "));
let total = 0
switch (hours) {
  case 1:
    total = 8
    break;
  case 2:
    total = 8 + 6
    break;
  case 3:
    total = 8 + 6 + 4;
    break;
  default:
    if (hours > 3) {
      total = 18 + ((hours - 3) * 2);
    } else {
      console.log("Operação inválida!");
    }
    break;
}
console.log(`Tempo total: ${hours} hora(s)`);
console.log(`Valor a pagar: R$ ${total.toFixed(2)}`);
