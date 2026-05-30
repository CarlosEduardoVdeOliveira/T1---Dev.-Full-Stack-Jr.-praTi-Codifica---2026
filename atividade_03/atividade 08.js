/*
8. Crie um array de objetos representando produtos com nome, preço e
quantidade. Use forEach para calcular o valor total em estoque de cada
produto (preço × quantidade) e exibir um relatório. Ao final, exiba
o valor total geral de todo o estoque.*/

const products = [
  {
    name: "Computador",
    price: 26950.17,
    qty: 3,
  },
  {
    name: "Mouse",
    price: 105.15,
    qty: 10,
  },
  {
    name: "Monitor",
    price: 1586.09,
    qty: 2,
  },
  {
    name: "Teclado",
    price: 255.98,
    qty: 8,
  },
  {
    name: "Webcam",
    price: 325.64,
    qty: 4,
  },
];

let total = 0;
products.forEach(({ name, price, qty }) => {
  let totalStock = price * qty;
  console.log(`${name} - Total: R$ ${totalStock.toFixed(2)}`);
  total += price * qty;
});
console.log(`Estoque total: R$ ${total.toFixed(2)}`);
