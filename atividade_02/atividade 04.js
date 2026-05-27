
/*
4. Defina uma senha fixa no código. Peça ao usuário que a digite e,
usando um laço do...while, permita no máximo 3 tentativas. 
Exiba se ele acertou ou se esgotou as tentativas.
*/

const prompt = require("prompt-sync")();

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