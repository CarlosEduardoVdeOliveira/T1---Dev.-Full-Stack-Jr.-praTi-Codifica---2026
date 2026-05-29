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
