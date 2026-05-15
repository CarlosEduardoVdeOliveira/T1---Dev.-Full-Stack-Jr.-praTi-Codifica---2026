const prompt = require("prompt-sync")();
/* 
1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). 
Exiba se o aluno foi Aprovado (nota maior ou igual a 7), 
em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
*/
let grade = Number(prompt("Digite a nota: "));

function isTheStudentsGrade(nota){
  if (nota >= 7 && nota <=10) {
    return ("Aluno aprovado!")
  } else if (nota > 5 && nota < 7){
    return ("Aluno de recuperação!")
  }else if(nota > 0 && nota < 5){
    return ("Aluno reprovado!");
  }else{
    return ("Nota invalida!");    
  }
}
const studentGradeResult = isTheStudentsGrade(grade);
//console.log(studentGradeResult);


/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
*/


/*
3. Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
*/
/*
4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().
*/
/*
5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.
*/
/*
6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque.
*/
/*
7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.
*/
/*
8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando

switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/
/*
9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
*/
/*
10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

*/
