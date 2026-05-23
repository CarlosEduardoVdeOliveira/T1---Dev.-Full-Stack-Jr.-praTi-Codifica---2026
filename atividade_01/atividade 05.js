/*
5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.
*/
const prompt = require("prompt-sync")();
const totalPurchaseValue = Number(prompt("Digite o valor total da compra: "))

function calculateTheFinalPurchasePrice(totalPurchaseValue){
  let percent = 0;
  if (totalPurchaseValue >= 100 && totalPurchaseValue < 300) {
    percent = 10
  }else if (totalPurchaseValue >= 300 && totalPurchaseValue < 500) {
    percent = 15
    
  }else if (totalPurchaseValue >= 500) {
    percent = 20
    
  }
  const discount = totalPurchaseValue * (percent/100);
  const totalValue = totalPurchaseValue - discount;

  return (`Valor da compra: R$ ${totalPurchaseValue.toFixed(2)} \nDesconto: ${percent}% \nValor com desconto: R$ ${totalValue.toFixed(2)}`)
}

console.log(calculateTheFinalPurchasePrice(totalPurchaseValue));
