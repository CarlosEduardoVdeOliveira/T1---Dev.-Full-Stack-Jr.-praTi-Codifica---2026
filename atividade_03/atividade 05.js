
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