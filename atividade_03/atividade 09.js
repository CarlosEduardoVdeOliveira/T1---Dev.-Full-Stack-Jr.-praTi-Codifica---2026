/*
9. Crie um array de objetos onde cada objeto representa um contato
com nome, telefone e e-mail. Use forEach para listar todos os contatos
formatados. Permita buscar um contato pelo nome usando for...of e exiba
os dados encontrados ou uma mensagem de "não encontrado".*/
const prompt = require("prompt-sync")();

const contacts = [
  { name: "Lucas", phone: "33999195955", email: "lucas@gamail.com" },
  { name: "Rafael", phone: "11999143811", email: "raf@gamail.com" },
  { name: "Pietra", phone: "22999022231", email: "pi01@gamail.com" },
  { name: "Leonardo", phone: "21999812131", email: "leo51@gamail.com" },
  { name: "Julia", phone: "31999220011", email: "juju30a@gamail.com" },
];

contacts.forEach(({ name, phone, email }) => {
  console.log(`Nome: ${name} - Telefone: ${phone} - E-mail: ${email}`);
});

const searchContact = prompt("Pesquisar contato: ")

let found = false;

for (const contact of contacts) {
  if ((searchContact).toLowerCase() === (contact.name).toLowerCase()) {
    console.log(
      `Nome: ${contact.name} - Telefone: ${contact.phone} - E-mail: ${contact.email}`
    );
    found = true;
    break;
  }
}

if (!found) {
  console.log("Nenhum contato encontrado.");
}