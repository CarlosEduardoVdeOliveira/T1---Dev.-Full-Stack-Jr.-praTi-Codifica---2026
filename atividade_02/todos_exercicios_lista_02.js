/*
  Para rodar os programas instale o prompt-sync na mesma pasta do arquivo;
 * npm install prompt-sync ou npm i prompt-sync
*/
/*
Link do repositório no GitHub: 
 * https://github.com/CarlosEduardoVdeOliveira/T1---Dev.-Full-Stack-Jr.-praTi-Codifica---2026/tree/main/atividade_02
*/

const prompt = require("prompt-sync")();
/*
1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10)
usando um laço for. Em seguida, pergunte se ele deseja ver outra 
tabuada e repita enquanto a resposta for "sim".
*/

let number = Number(prompt("Digite um número: "))

function multiplicationTable(number){
  for (let i = 1; i <= 10; i++) {
    let result = i * number
    console.log(`${i} * ${number} = ${result}`)
  }
}
let  toContinue = "sim"
while(toContinue === "sim"){
  multiplicationTable(number);
  toContinue = prompt("Deseja ver outra tabuada? (sim ou não)").toLowerCase()
  if (toContinue === "sim") {
    number = Number(prompt("Digite um número: "))
  }
}

/*
2. Leia um número inteiro positivo e, usando um laço while, calcule 
e exiba quantos dígitos ele possui. Trate o caso do número 
zero (que possui 1 dígito).
*/

let numberInteger = Number(prompt("Digite um número inteiro positivo: "));

let count = 0;

if (numberInteger === 0) {
  count = 1;
} else {
  while (numberInteger > 0) {
    numberInteger = Math.trunc(numberInteger / 10);
    count++;
  }
}

console.log(`Quantidade de dígitos: ${count}`);


/*
3. Peça ao usuário quantos termos da sequência de Fibonacci deseja 
ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...
*/

const quantity = Number(
  prompt("Digite quantos termos da sequência de Fibonacci: ")
);

function fib(quantity) {
  let first = 1;
  let second = 1;

  if (quantity <= 0) {
    console.log("Quantidade inválida!");
    return;
  }

  if (quantity === 1) {
    console.log("1");
    return;
  }

  let sequence = "1 1 ";

  for (let i = 3; i <= quantity; i++) {
    let next = first + second;

    sequence += `${next} `;

    first = second;
    second = next;
  }

  console.log(sequence);
}

fib(quantity);

/*
4. Defina uma senha fixa no código. Peça ao usuário que a digite e,
usando um laço do...while, permita no máximo 3 tentativas. 
Exiba se ele acertou ou se esgotou as tentativas.
*/
const currentPassword = "123456";

let password;
let attempts = 0;

do {
  password = prompt("Digite a senha: ");

  if (password === currentPassword) {
    console.log("Login com sucesso!");
    break;
  }

  attempts++;

  if (attempts < 3) {
    console.log("Senha incorreta! Tente novamente.");
  }

} while (attempts < 3);

if (password !== currentPassword) {
  console.log("Você esgotou as tentativas!");
}

/*
5. Leia um número N e exiba todos os números primos entre 2 e N 
usando laços aninhados (for dentro de for). Exiba também 
a quantidade total de primos encontrados.
*/

let totalPrimeNumber = 0;

for (let i = 2; i <= number; i++) {
  let dividers = 0;

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      dividers++;
    }
  }

  if (dividers === 2) {
    console.log("Número primo:", i);
    totalPrimeNumber++;
  }
}

console.log("Total de números primos:", totalPrimeNumber);

/*
6. Crie um array e leia via laço o nome e a nota de 5 alunos. 
Ao final, exiba: a média da turma, o nome do aluno com maior nota e o
nome do aluno com menor nota. Não use funções prontas como Math.max().
*/

const students = [
  { name: "Camile", note: 8.9 },
  { name: "João", note: 6.6 },
  { name: "Lucas", note: 7.8 },
  { name: "Anna", note: 8 },
  { name: "Luíza", note: 7 },
];

let totalNote = 0;
let highestGrade = students[0];
let lowerGrade = students[0];

for (const student of students) {
  console.log(`Nome: ${student.name}, nota ${student.note}`);

  totalNote += student.note;

  if (student.note > highestGrade.note) {
    highestGrade = student;
  }

  if (student.note < lowerGrade.note) {
    lowerGrade = student;
  }
}
let classAverage = totalNote / students.length;

console.log(`Média da turma: ${classAverage.toFixed(2)}`);
console.log(
  `aluno com maior nota: ${highestGrade.name} nota: ${highestGrade.note}`,
);
console.log(
  `aluno com menor nota: ${lowerGrade.name} nota: ${lowerGrade.note}`,
);

/*
7. Simule um carrinho de compras: leia nomes e preços de produtos em
um laço até o usuário digitar "sair". Armazene em arrays. 
Ao final, liste todos os itens, exiba o subtotal, aplique 10% de 
desconto se houver mais de 3 itens e mostre o total a pagar.
*/

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

/*
8. Leia uma palavra, armazene seus caracteres em um array e, 
percorrendo-o de trás para frente com um laço for, monte a palavra
invertida. Exiba a palavra original, a invertida e informe se ela
é um palíndromo.
*/

const word = prompt("Digite uma palavra: ").toLowerCase();

const arrayWord = [];
for (const character of word) {
  arrayWord.push(character);
}
console.log(arrayWord);

let inverseWord = "";
for (let i = arrayWord.length - 1; i >= 0; i--) {
  inverseWord += arrayWord[i];
}

console.log(`Palavra original: ${word}`);
console.log(`Palavra invertida: ${inverseWord}`);

if (word === inverseWord) {
  console.log(`A palavra ${word} é palíndroma.`);
} else {
  console.log(
    `A palavra ${word} não é palíndroma, pois é diferente de ${inverseWord}`,
  );
}

/*
9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço
do...while, peça ao usuário para adivinhar; a cada tentativa, diga
se o número é maior ou menor. Registre as tentativas em um array e, 
ao acertar, exiba o histórico e quantas tentativas foram necessárias.
*/

const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberTest = 0;

const history = [];

do {
  numberTest = Number(prompt("Digite um número: "));

  history.push(numberTest);

  if (numberTest > randomNumber) {
    console.log("O número secreto é menor!");
  } else if (numberTest < randomNumber) {
    console.log("O número secreto é maior!");
  } else {
    console.log(
      `Parabéns! Você acertou o número ${randomNumber}`
    );
  }

} while (numberTest !== randomNumber);

console.log(`Tentativas necessárias: ${history.length}`);

console.log("Histórico de tentativas:");

for (const attempt of history) {
  console.log(attempt);
}

/*
10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores
via laços aninhados. Calcule e exiba a média de cada aluno, a média
geral da turma e qual aluno teve o melhor desempenho.
*/

const classStudents = [
  ["Lucas", 5, 7, 8, 7.8],
  ["Yan", 8, 7, 9, 8.7],
  ["João", 8.5, 8.8, 9, 9.3],
];

let totalNotes = 0;
let totalValues = 0;

let bestStudent = "";
let bestAverage = 0;

for (let i = 0; i < classStudents.length; i++) {

  let sumStudent = 0;

  for (let j = 1; j < classStudents[i].length; j++) {
    sumStudent += classStudents[i][j];

    totalValues += classStudents[i][j];
    totalNotes++;
  }

  let averageStudent = sumStudent / 4;

  console.log(
    `Média do aluno ${classStudents[i][0]}: ${averageStudent.toFixed(2)}`
  );

  if (averageStudent > bestAverage) {
    bestAverage = averageStudent;
    bestStudent = classStudents[i][0];
  }
}

let classAverage = totalValues / totalNotes;

console.log(`\nMédia geral da turma: ${classAverage.toFixed(2)}`);

console.log(
  `Melhor aluno: ${bestStudent} (${bestAverage.toFixed(2)})`
);
