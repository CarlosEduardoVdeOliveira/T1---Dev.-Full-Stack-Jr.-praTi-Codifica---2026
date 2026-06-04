/*
10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e 
paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2
vezes e exiba a página atual a cada operação.*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop() ?? null;
  }
  peek() {
    return this.items[this.items.length - 1] ?? null;
  }
  tamanho() {
    return this.items.length;
  }
}

const history = new Stack();

function visit(page) {
  history.push(page);
  console.log(`Visitando: ${page}`);
  console.log(`Página atual: ${currentPage()}\n`);
}

function goBack() {
  const removed = history.pop();

  if (removed) {
    console.log(`Voltando da página: ${removed}`);
  } else {
    console.log("Nenhuma página para voltar.");
  }

  console.log(`Página atual: ${currentPage()}\n`);
}

function currentPage() {
  return history.peek() ?? "Nenhuma página";
}

// Simulação

visit("Google");
visit("YouTube");
visit("GitHub");
visit("Stack Overflow");

goBack();
goBack();