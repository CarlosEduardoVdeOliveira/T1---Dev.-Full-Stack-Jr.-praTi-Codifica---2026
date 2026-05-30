/*
  Para rodar os programas instale o prompt-sync na mesma pasta do arquivo;
 * npm install prompt-sync ou npm i prompt-sync
*/
/*
Link do repositório no GitHub: 
 *  * https://github.com/CarlosEduardoVdeOliveira/T1---Dev.-Full-Stack-Jr.-praTi-Codifica---2026/tree/main/atividade_03

*/

const prompt = require("prompt-sync")();

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

/*
2. Crie dois objetos representando personagens de um jogo, cada um 
com as propriedades: nome, vida, ataque e defesa. Use for...in 
para exibir os atributos de cada personagem lado a lado e determine
qual deles tem maior poder total (soma de vida + ataque + defesa).*/

const goku = {
  name: "Goku",
  life: 100,
  attack: 15549,
  defense: 8651,
};

const vegeta = {
  name: "Vegeta",
  life: 100,
  attack: 15349,
  defense: 8951,
};

for (const key in goku) {
  console.log(
    `${key}: Goku = ${goku[key]} | Vegeta = ${vegeta[key]}`
  );
}

function calculatePower(character) {
  return (
    character.life +
    character.attack +
    character.defense
  );
}

const p1 = calculatePower(goku);
const p2 = calculatePower(vegeta);

if (p1 > p2) {
  console.log(`${goku.name} é o mais forte!`);
} else if (p2 > p1) {
  console.log(`${vegeta.name} é o mais forte!`);
} else {
  console.log(
    `${goku.name} e ${vegeta.name} têm o mesmo poder!`
  );
}

/*
3. Crie um objeto representando um funcionário com nome, cargo, salário
e anos de experiência. Use for...in para listar todos os dados. Com base
nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5%
do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.*/

const employee = {
  name: "Vanessa Santos",
  position: "Recrutadora",
  wage: 2500,
  yearXp: 3.5,
};

for (const key in employee) {
  console.log(`${key}: ${employee[key]}`);
}

function calculateBonus(salary, percentage) {
  return salary * (percentage / 100);
}

if (employee.yearXp <= 2) {
  console.log(`Bônus: R$ ${calculateBonus(employee.wage, 5).toFixed(2)}`);
} else if (employee.yearXp <= 5) {
  console.log(`Bônus: R$ ${calculateBonus(employee.wage, 10).toFixed(2)}`);
} else if (employee.yearXp > 5) {
  console.log(`Bônus: R$ ${calculateBonus(employee.wage, 15).toFixed(2)}`);
} else {
  console.log("Anos de experiência inválidos!");
}

/*
4. Crie um objeto onde cada chave é o nome de um item e o valor é a 
quantidade no inventário do jogador (ex: { espada: 1, poção: 5, 
escudo: 2 }). Use for...in para listar o inventário completo. 
Permita que o usuário informe um item para usar: reduza a quantidade
em 1 ou exiba "item esgotado" se for zero.*/


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


/*
5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e 
exibir se cada uma ficou dentro ou acima do orçamento, e calcule o 
saldo geral do mês.*/

const budget = {
  alimentation: {
    planned: 800,
    spent: 750,
  },
  transport: {
    planned: 300,
    spent: 350,
  },
  leisure: {
    planned: 400,
    spent: 500,
  },
  health: {
    planned: 200,
    spent: 150,
  },
}
let plannedTotal = 0 
let spentTotal = 0

for (const key in budget) {
  let balanceMouth = budget[key].planned - budget[key].spent
  if(budget[key].planned >= budget[key].spent){
    console.log(`${key}: Dentro do orçamento. Saldo: R$ ${balanceMouth}`);
  }else{
    console.log(`${key}: Fora do orçamento.Saldo: R$ ${balanceMouth}`);
  }
  plannedTotal += Number( budget[key].planned)
  spentTotal += Number(budget[key].spent)
}
let balance = Number(plannedTotal - spentTotal)
if (balance >= 0) {
  console.log(`Dentro do orçamento do mês! Saldo: R$ ${balance.toFixed(2)}`);
}else {
  console.log(`Fora do orçamento do mês! Saldo: R$ ${balance.toFixed(2)}`);
}

/*
6. Crie um array de objetos representando músicas, cada uma com título, 
artista e duração em segundos. Use for...of para exibir cada música no
formato "Artista — Título (mm:ss)". Ao final, use forEach para somar
a duração total e exiba-a no mesmo formato.*/

const musics = [
  {
    title: "Aerials",
    artist: "System of a Down",
    duration: 244,
  },
  {
    title: "Iris",
    artist: "Goo Goo Dolls",
    duration: 342,
  },
  {
    title: "One Last Breath",
    artist: "Creed",
    duration: 240,
  },
  {
    title: "My Last Breath (with lyrics)",
    artist: "Evanescence",
    duration: 248,
  },
  {
    title: "Máscara",
    artist: "Pitty",
    duration: 299,
  },
];

for (const music of musics) {
  const minutes = Math.trunc(music.duration / 60);
  const seconds = music.duration % 60;

  console.log(
    `${music.artist} — ${music.title} (${minutes}:${seconds < 10 ? "0" + seconds : seconds})`,
  );
}

let totalDuration = 0;

musics.forEach((music) => {
  totalDuration += music.duration;
});

const totalMinutes = Math.trunc(totalDuration / 60);
const totalSeconds = totalDuration % 60;

console.log(
  `Tempo total: ${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}`,
);

/*
7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of 
para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e 
exibir o resultado. Use forEach para calcular e exibir separadamente
a média dos aprovados e a média dos reprovados.*/

const students = [
  { name: "Lucas", grade: 8.5 },
  { name: "Ana", grade: 5.2 },
  { name: "João", grade: 4.8 },
  { name: "Maria", grade: 6.5 },
  { name: "Pedro", grade: 4.9 },
  { name: "Luíza", grade: 9.5 },
];

for (const student of students) {
  if (student.grade >= 7) {
    console.log(
      `Aluno ${student.name} - Aprovado. Nota: ${student.grade.toFixed(2)}`,
    );
  } else if (student.grade >= 5) {
    console.log(
      `Aluno ${student.name} - Recuperação. Nota: ${student.grade.toFixed(2)}`,
    );
  } else {
    console.log(
      `Aluno ${student.name} - Reprovado. Nota: ${student.grade.toFixed(2)}`,
    );
  }
}
let totalApproved = 0;
let approved = 0;
let totalReproved = 0;
let reproved = 0;
students.forEach((student) => {
  if (student.grade >= 7) {
    totalApproved += Number(student.grade);
    approved++;
  } else if (student.grade < 5) {
    totalReproved += Number(student.grade);
    reproved++;
  }
});
console.log(
  `Média dos aprovados: ${
    approved > 0 ? (totalApproved / approved).toFixed(2) : "Nenhum"
  }`,
);
console.log(
  `Média dos reprovados: ${
    reproved > 0 ? (totalReproved / reproved).toFixed(2) : "Nenhum"
  }`,
);


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

/*
9. Crie um array de objetos onde cada objeto representa um contato
com nome, telefone e e-mail. Use forEach para listar todos os contatos
formatados. Permita buscar um contato pelo nome usando for...of e exiba
os dados encontrados ou uma mensagem de "não encontrado".*/

const contacts = [
  { name: "Lucas", phone: "33999195955", email: "lucas@gamail.com" },
  { name: "Rafael", phone: "11999143811", email: "raf@gamail.com" },
  { name: "Pietra", phone: "22999022231", email: "pi01@gamail.com" },
  { name: "Leonardo", phone: "21999812131", email: "leo51@gamail.com" },
  { name: "Julia", phone: "31999220011", email: "juju30a@gamail.com" },
];

contacts.forEach(({ name, phone, email }) => {
  console.log(`Nome: ${name} - Telefone: ${phone} - E-mail: ${email}`);
});

const searchContact = prompt("Pesquisar contato: ")

let found = false;

for (const contact of contacts) {
  if ((searchContact).toLowerCase() === (contact.name).toLowerCase()) {
    console.log(
      `Nome: ${contact.name} - Telefone: ${contact.phone} - E-mail: ${contact.email}`
    );
    found = true;
    break;
  }
}

if (!found) {
  console.log("Nenhum contato encontrado.");
}



