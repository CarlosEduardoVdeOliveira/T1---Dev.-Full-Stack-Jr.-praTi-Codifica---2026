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