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
