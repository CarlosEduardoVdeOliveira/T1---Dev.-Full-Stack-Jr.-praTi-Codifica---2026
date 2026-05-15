/* 
1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). 
Exiba se o aluno foi Aprovado (nota maior ou igual a 7), 
em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).
*/

const prompt = require("prompt-sync")();
let grade = Number(prompt("Digite a nota: "));

function isTheStudentsGrade(grade){
  if (grade >= 7 && grade <=10) {
    return ("Aluno aprovado!")
  } else if (grade > 5 && grade < 7){
    return ("Aluno de recuperação!")
  }else if(grade > 0 && grade < 5){
    return ("Aluno reprovado!");
  }else{
    return ("Nota inválida!");    
  }
}
const studentGradeResult = isTheStudentsGrade(grade);
console.log(studentGradeResult);
