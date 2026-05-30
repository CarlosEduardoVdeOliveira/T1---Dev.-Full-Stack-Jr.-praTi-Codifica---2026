/*
4. Crie um objeto onde cada chave é o nome de um item e o valor é a 
quantidade no inventário do jogador (ex: { espada: 1, poção: 5, 
escudo: 2 }). Use for...in para listar o inventário completo. 
Permita que o usuário informe um item para usar: reduza a quantidade
em 1 ou exiba "item esgotado" se for zero.*/

const prompt = require("prompt-sync")();

const inventario = {
  espada: 1,
  poção: 5,
  escudo: 2,
};
for (const key in inventario) {
  console.log(`${key} ${inventario[key]}`);
}

const item = prompt("Digite o item: ");

if (inventario[item] === undefined) {
  console.log("Item não existe no inventário!");
} else if (inventario[item] > 0) {
  inventario[item]--;
  console.log(`${item} usado! Quantidade restante: ${inventario[item]}`);
} else {
  console.log(`${item}: Item esgotado!`);
}
