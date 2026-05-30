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
