/*
7. Simule um carrinho de compras: leia nomes e preços de produtos em
um laço até o usuário digitar "sair". Armazene em arrays. 
Ao final, liste todos os itens, exiba o subtotal, aplique 10% de 
desconto se houver mais de 3 itens e mostre o total a pagar.
*/

const prompt = require("prompt-sync")();

const products = [];

let option = "";

while (option !== "sair") {
  const product = prompt(
    "Digite o nome do produto (ou 'sair'): ",
  ).toLowerCase();

  if (product === "sair") {
    break;
  }

  const priceProduct = Number(prompt("Digite o preço do produto: "));

  products.push({ name: product, price: priceProduct });
}

let subtotal = 0;

console.log("\nProdutos:");

for (const product of products) {
  console.log(`${product.name} - R$ ${product.price.toFixed(2)}`);

  subtotal += product.price;
}

let total = subtotal;

if (products.length > 3) {
  total -= total * 0.1;
}

console.log(`\nSubtotal: R$ ${subtotal.toFixed(2)}`);

if (products.length > 3) {
  console.log("Desconto aplicado: 10%");
}

console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
