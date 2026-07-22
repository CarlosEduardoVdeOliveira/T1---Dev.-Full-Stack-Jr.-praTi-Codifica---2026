// ===========================
// ViaCEP API Integration
// ===========================

const cepInput = document.getElementById("cep");
const buscarBtn = document.getElementById("buscarCep");
const cepStatus = document.getElementById("cepStatus");
const ruaInput = document.getElementById("rua");
const bairroInput = document.getElementById("bairro");
const cidadeInput = document.getElementById("cidade");
const estadoInput = document.getElementById("estado");

// Máscara de CEP
cepInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");
  if (valor.length > 5) {
    valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
  }
  this.value = valor;
});

// Buscar CEP via API
buscarBtn.addEventListener("click", buscarCep);
cepInput.addEventListener("blur", buscarCep);

async function buscarCep() {
  const cep = cepInput.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    cepStatus.textContent = "CEP deve conter 8 dígitos.";
    cepStatus.className = "cep__status error";
    limparCampos();
    return;
  }

  buscarBtn.disabled = true;
  buscarBtn.textContent = "Buscando...";
  cepStatus.textContent = "";

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      cepStatus.textContent = "CEP não encontrado.";
      cepStatus.className = "cep__status error";
      limparCampos();
    } else {
      ruaInput.value = data.logradouro || "";
      bairroInput.value = data.bairro || "";
      cidadeInput.value = data.localidade || "";
      estadoInput.value = data.uf || "";
      cepStatus.textContent = "Endereço encontrado com sucesso!";
      cepStatus.className = "cep__status success";
    }
  } catch (error) {
    cepStatus.textContent = "Erro ao buscar CEP. Tente novamente.";
    cepStatus.className = "cep__status error";
    limparCampos();
  } finally {
    buscarBtn.disabled = false;
    buscarBtn.textContent = "Buscar";
  }
}

function limparCampos() {
  ruaInput.value = "";
  bairroInput.value = "";
  cidadeInput.value = "";
  estadoInput.value = "";
}

// ===========================
// Formulário de Contato
// ===========================

const form = document.getElementById("contatoForm");
const formMensagem = document.getElementById("formMensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    formMensagem.textContent = "Por favor, preencha todos os campos obrigatórios.";
    formMensagem.className = "form-mensagem show error";
    return;
  }

  // Simular envio
  formMensagem.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
  formMensagem.className = "form-mensagem show success";

  // Limpar formulário
  form.reset();
  limparCampos();
  cepStatus.textContent = "";

  // Esconder mensagem após 5 segundos
  setTimeout(() => {
    formMensagem.className = "form-mensagem";
  }, 5000);
});
