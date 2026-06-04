/*
11. Implemente uma fila usando um array para simular o atendimento de 
uma clínica. Crie as funções chegarPaciente(nome) (enqueue), 
chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 
pacientes e o atendimento de 3, exibindo o estado da fila a cada operação
.*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(nome) {
    this.items.push(nome);
  }

  dequeue() {
    return this.items.shift() ?? null;
  }

  exibirFila() {
    console.log("Fila:", this.items);
  }
}

const fila = new Queue();

function chegarPaciente(nome) {
  fila.enqueue(nome);
  console.log(`${nome} chegou.`);
  fila.exibirFila();
}

function chamarProximo() {
  const paciente = fila.dequeue();

  if (paciente) {
    console.log(`Chamando: ${paciente}`);
  } else {
    console.log("Não há pacientes na fila.");
  }

  fila.exibirFila();
}


chegarPaciente("Douglas");
chegarPaciente("Jean");
chegarPaciente("Lucas");
chegarPaciente("Daniela");
chegarPaciente("Eduarda");

chamarProximo();
chamarProximo();
chamarProximo();