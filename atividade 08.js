/*
8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando

switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/
const prompt = require("prompt-sync")();

const typePizza = prompt("Digite o tamanho da pizza (P, M ou G): ").toUpperCase();
const typeEdge = prompt("Digite o tipo de borda (tradicional ou recheada): ").toLowerCase();

let price = 0;

switch (typePizza) {
  case "P":
    price = 25;
    break;

  case "M":
    price = 35;
    break;

  case "G":
    price = 45;
    break;

  default:
    console.log("Tamanho inválido!");
    process.exit();
}

if (typeEdge === "recheada") {
  price += 8;
} else if (typeEdge !== "tradicional") {
  console.log("Tipo de borda inválido!");
  process.exit();
}

console.log(`Valor total: R$ ${price.toFixed(2)}`);
