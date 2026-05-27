/*
  Para rodar os programas instale o prompt-sync na mesma pasta do arquivo;
 * npm install prompt-sync ou npm i prompt-sync
*/
/*
Link do repositório no GitHub: 
 * https://github.com/CarlosEduardoVdeOliveira/T1---Dev.-Full-Stack-Jr.-praTi-Codifica---2026/tree/main/atividade_01
*/

const prompt = require("prompt-sync")();
/* 
1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). 
Exiba se o aluno foi Aprovado (nota maior ou igual a 7), 
em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
*/

let grade = Number(prompt("Digite a nota: "));

function isTheStudentsGrade(grade) {
  if (grade < 0 || grade > 10) {
    return "Nota inválida!";
  } else if (grade >= 7) {
    return "Aluno aprovado!";
  } else if (grade >= 5) {
    return "Aluno de recuperação!";
  } else {
    return "Aluno reprovado!";
  }
}
const studentGradeResult = isTheStudentsGrade(grade);
console.log(studentGradeResult);

/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e 
calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos),
adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa 
(60 anos ou mais).
*/

const currentYear = new Date().getFullYear();

let yearOfBirth = Number(prompt("Digite seu ano de nascimento: "));

function calculateAge(yearOfBirth) {
  const age = currentYear - yearOfBirth;

  if (age < 0) {
    return "Ano inválido!";
  } else if (age <= 12) {
    return "Você é criança!";
  } else if (age <= 17) {
    return "Você é adolescente!";
  } else if (age <= 59) {
    return "Você é adulto!";
  } else {
    return "Você é idoso!";
  }
}

console.log(calculateAge(yearOfBirth));

/*
3. Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
*/

const monthlySalary = Number(prompt("Qual atual salário: "));
const percentageIncrease = Number(
  prompt("Qual percentual de aumento (ex: 5, 10, 20): "),
);

function calculateTheNewSalary(monthlySalary, percentageIncrease) {
  let convertToPercentage = percentageIncrease / 100;
  if (monthlySalary <= 1500) {
    convertToPercentage *= 2;
  }
  let newSalary = monthlySalary + monthlySalary * convertToPercentage;
  return newSalary;
}
console.log(calculateTheNewSalary(monthlySalary, percentageIncrease));

/*
4. Crie um programa que leia três números inteiros e exiba o maior deles, sem
utilizar funções prontas como Math.max().
*/

const firstNumber = Number(prompt("Digite primeiro número: "));
const secondNumber = Number(prompt("Digite segundo número: "));
const thirdNumber = Number(prompt("Digite terceiro número: "));

function whichIsTheLargestNumber(firstNumber, secondNumber, thirdNumber) {
  let larger = firstNumber;
  if (secondNumber >= larger) {
    larger = secondNumber;
  }
  if (thirdNumber >= larger) {
    larger = thirdNumber;
  }

  return larger;
}

const largerNumber = whichIsTheLargestNumber(
  firstNumber,
  secondNumber,
  thirdNumber,
);

console.log("O maior número é: ", largerNumber);

/*
5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.
*/
const totalPurchaseValue = Number(prompt("Digite o valor total da compra: "));

function calculateTheFinalPurchasePrice(totalPurchaseValue) {
  let percent = 0;
  if (totalPurchaseValue >= 100 && totalPurchaseValue < 300) {
    percent = 10;
  } else if (totalPurchaseValue >= 300 && totalPurchaseValue < 500) {
    percent = 15;
  } else if (totalPurchaseValue >= 500) {
    percent = 20;
  }
  const discount = totalPurchaseValue * (percent / 100);
  const totalValue = totalPurchaseValue - discount;

  return `Valor da compra: R$ ${totalPurchaseValue.toFixed(2)} \nDesconto: ${percent}% \nValor com desconto: R$ ${totalValue.toFixed(2)}`;
}

console.log(calculateTheFinalPurchasePrice(totalPurchaseValue));

/*
6. Crie um programa de caixa eletrônico simplificado. O usuário informa o 
valor que deseja sacar (múltiplo de 10). O programa deve calcular e 
exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 
e R$ 10 necessárias para compor o saque.
*/

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

/*
7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.
*/

const numberFirst = Number(prompt("Digite um número: "));
const numberSecond = Number(prompt("Digite um número: "));
const operation = prompt("Escolha a operação (+, -, *, /): ");

let result = 0;

switch (operation) {
  case "+":
    result = numberFirst + numberSecond;
    console.log(result);
    break;

  case "-":
    result = numberFirst - numberSecond;
    console.log(result);
    break;

  case "*":
    result = numberFirst * numberSecond;
    console.log(result);
    break;

  case "/":
    if (numberSecond === 0) {
      console.log("Não é possível dividir por zero.");
    } else {
      result = numberFirst / numberSecond;
      console.log(result);
    }
    break;

  default:
    console.log("Operação inválida!");
}

/*
8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando

switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/

const typePizza = prompt(
  "Digite o tamanho da pizza (P, M ou G): ",
).toUpperCase();
const typeEdge = prompt(
  "Digite o tipo de borda (tradicional ou recheada): ",
).toLowerCase();

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

/*
9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
*/

const numberMonth = Number(prompt("Digite o numero do mês: "));
let bissexto = "";

switch (numberMonth) {
  case 1:
    console.log("Janeiro, 31 dias");
    break;
  case 2:
    bissexto = prompt("O ano é bissexto? (sim ou não) ").toLowerCase();
    if (bissexto === "sim") {
      console.log("Fevereiro, 29 dias");
    } else if (bissexto === "não") {
      console.log("Fevereiro, 28 dias");
    } else {
      console.log("Operação inválida!");
    }
    break;
  case 3:
    console.log("Março, 31 dias");
    break;
  case 4:
    console.log("Abril, 30 dias");
    break;
  case 5:
    console.log("Maio, 31 dias");
    break;
  case 6:
    console.log("Junho, 30 dias");
    break;
  case 7:
    console.log("Julho, 31 dias");
    break;
  case 8:
    console.log("Agosto, 31 dias");
    break;
  case 9:
    console.log("Setembro, 30 dias");
    break;
  case 10:
    console.log("Outubro, 31 dias");
    break;
  case 11:
    console.log("Novembro, 30 dias");
    break;
  case 12:
    console.log("Dezembro, 31 dias");
    break;

  default:
    console.log("Operação inválida!");

    break;
}

/*
10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

*/

const hours = Number(prompt("Digite a quantidade de horas: "));
let total = 0;
switch (hours) {
  case 1:
    total = 8;
    break;
  case 2:
    total = 8 + 6;
    break;
  case 3:
    total = 8 + 6 + 4;
    break;
  default:
    if (hours > 3) {
      total = 18 + (hours - 3) * 2;
    } else {
      console.log("Operação inválida!");
    }
    break;
}
console.log(`Tempo total: ${hours} hora(s)`);
console.log(`Valor a pagar: R$ ${total.toFixed(2)}`);
