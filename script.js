const mascaras = {
  cpf(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  },
  tel(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(\d{4})(\d)/, "$1$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
  cep(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(\d{3})(\d)/, "$1$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  },
};

const botaoCep = document.querySelector(".btn-cep");
const campos = document.querySelectorAll("[data-js]");

function atualizaCampo() {
  campos.forEach((campo) => {
    const obj = campo.dataset.js;
    campo.addEventListener("input", (event) => {
      event.target.value = mascaras[obj](event.target.value);
    });
  });
}

atualizaCampo();

function fetcCep() {
  const campoCep = document.querySelector("[data-js='cep']").value;
  const formataCep = campoCep.replace("-", "");
  const cidade = document.querySelector("#cidade");
  const bairro = document.querySelector("#bairro");
  const estado = document.querySelector("#estado");
  const logradouro = document.querySelector("#logradouro");

  fetch(`https://viacep.com.br/ws/${formataCep}/json/`)
    .then((response) => response.json())
    .then((dados) => {
      cidade.value = dados.localidade;
      bairro.value = dados.bairro;
      estado.value = dados.uf;
      logradouro.value = dados.logradouro;
    });
}

botaoCep.addEventListener("click", (e) => {
  e.preventDefault();
  fetcCep();
});
