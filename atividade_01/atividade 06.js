/*
6. Crie um programa de caixa eletrônico simplificado. O usuário informa o 
valor que deseja sacar (múltiplo de 10). O programa deve calcular e 
exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 
e R$ 10 necessárias para compor o saque.
*/

const prompt = require("prompt-sync")();

const value = Number(
  prompt("Digite o valor múltiplo de 10 (ex: 10, 20, 30): "),
);

function withdrawMoney(value) {
  let newValue = value;
  let div = 0;
  let mod = 0;
  let result = "";
  if (value % 10 !== 0) {
    return "Operação inválida!";
  }
  while (newValue > 0) {
    if (newValue >= 100) {
      mod = newValue % 100;
      div = Math.trunc(newValue / 100);
      newValue = mod;
      result += `100: ${div} `;
    } else if (newValue >= 50) {
      mod = newValue % 50;
      div = Math.trunc(newValue / 50);
      newValue = mod;
      result += `R$ 50: ${div} `;
    } else if (newValue >= 20) {
      mod = newValue % 20;
      div = Math.trunc(newValue / 20);
      newValue = mod;
      result += `20: ${div} `;
    } else if (newValue >= 10) {
      mod = newValue % 10;
      div = Math.trunc(newValue / 10);
      newValue = mod;
      result += `R$ 10: ${div} `;
    }
  }
  return result;
}
console.log(withdrawMoney(value));
