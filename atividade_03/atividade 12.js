/*
12. Implemente uma lista ligada simples usando nós ({ valor, proximo }).
Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que 
percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 
tarefas, remova uma pelo nome e exiba a lista antes e depois.*/

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  adicionar(tarefa) {
    const novoNo = new Node(tarefa);

    if (!this.head) {
      this.head = novoNo;
    } else {
      let atual = this.head;

      while (atual.proximo) {
        atual = atual.proximo;
      }

      atual.proximo = novoNo;
    }

    this.length++;
  }

  remover(tarefa) {
    if (!this.head) return;

    if (this.head.valor === tarefa) {
      this.head = this.head.proximo;
      this.length--;
      return;
    }

    let atual = this.head;

    while (atual.proximo && atual.proximo.valor !== tarefa) {
      atual = atual.proximo;
    }

    if (atual.proximo) {
      atual.proximo = atual.proximo.proximo;
      this.length--;
    }
  }

  exibir() {
    let atual = this.head;
    let resultado = "";

    while (atual) {
      resultado += atual.valor + " → ";
      atual = atual.proximo;
    }

    console.log(resultado + "null");
  }
}

const tarefas = new LinkedList();

tarefas.adicionar("Estudar JavaScript");
tarefas.adicionar("Fazer exercícios");
tarefas.adicionar("Ler documentação");
tarefas.adicionar("Enviar atividade");

console.log("Lista antes da remoção:");
tarefas.exibir();

tarefas.remover("Ler documentação");

console.log("\nLista depois da remoção:");
tarefas.exibir();
