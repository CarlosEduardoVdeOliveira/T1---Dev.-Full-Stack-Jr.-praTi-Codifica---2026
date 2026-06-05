/*
12. Implemente uma lista ligada simples usando nós ({ valor, next }).
Crie as funções adicionar(task), remover(task) e exibir() que 
percorre todos os nós. Simule um gerenciador de tasks: adicione 4 
tasks, remova uma pelo nome e exiba a lista antes e depois.*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  adicionar(task) {
    const newNode = new Node(task);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }

  remover(task) {
    if (!this.head) return;

    if (this.head.valor === task) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.valor !== task) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.length--;
    }
  }

  exibir() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + " → ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

const tasks = new LinkedList();

tasks.adicionar("Estudar JavaScript");
tasks.adicionar("Fazer exercícios");
tasks.adicionar("Ler documentação");
tasks.adicionar("Enviar atividade");

console.log("Lista antes da remoção:");
tasks.exibir();

tasks.remover("Ler documentação");

console.log("\nLista depois da remoção:");
tasks.exibir();
