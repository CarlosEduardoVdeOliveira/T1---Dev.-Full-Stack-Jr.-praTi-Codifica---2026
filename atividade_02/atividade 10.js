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