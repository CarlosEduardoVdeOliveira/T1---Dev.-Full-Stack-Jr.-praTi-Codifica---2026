/*
1. Crie um objeto representando um produto com as propriedades: nome, 
preço, categoria e quantidade em estoque. Use for...in para 
percorrer e exibir todas as propriedades e seus valores. 
Em seguida, adicione uma nova propriedade desconto ao objeto e 
exiba o preço final calculado.*/

const product = {
  name: "Monitor",
  price: 1655.99,
  category: "Informática",
  stock: 21,
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}

product.discount = 10;

const priceFinal = product.price - product.price * (product.discount / 100);

console.log(`Preço com desconto: R$ ${priceFinal.toFixed(2)}`);
