const fields = document.querySelectorAll("[data-valida]");

function validaNome() {
  const nome = document.querySelector("#nome");
  const nomeValor = nome.value;
  const regex =
    /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!regex.test(nomeValor)) {
    nome.classList.add("input-erro");
    nome.classList.remove("input-valido");
  } else {
    nome.classList.remove("input-erro");
    nome.classList.add("input-valido");
  }
}

function validaSenha() {
  const senha = document.querySelector("#senha");
  const senhaValor = senha.value;

  if (senhaValor.length <= 8) {
    senha.classList.add("input-erro");
    senha.classList.remove("input-valido");
  } else {
    senha.classList.remove("input-erro");
    senha.classList.add("input-valido");
  }
}

function validaCpf() {
  const cpf = document.querySelector("#cpf");
  const cpfValor = cpf.value.length;

  if (cpfValor != 14) {
    cpf.classList.add("input-erro");
    cpf.classList.remove("input-valido");
  } else {
    cpf.classList.remove("input-erro");
    cpf.classList.add("input-valido");
  }
}

function validaTelefone() {
  const telefone = document.querySelector("#tel");
  const telefoneValor = telefone.value.length;
  console.log(telefoneValor);
  if (telefoneValor != 15) {
    telefone.classList.add("input-erro");
    telefone.classList.remove("input-valido");
  } else {
    telefone.classList.remove("input-erro");
    telefone.classList.add("input-valido");
  }
}

function validaCep() {
  const cep = document.querySelector("#cep");
  const cepValor = cep.value.length;

  if (cepValor != 9) {
    cep.classList.add("input-erro");
    cep.classList.remove("input-valido");
  } else {
    cep.classList.remove("input-erro");
    cep.classList.add("input-valido");
  }
}

fields.forEach((campo) => {
  campo.addEventListener("blur", () => {
    validaNome();
    validaSenha();
    validaCpf();
    validaTelefone();
    validaCep();
  });
});
