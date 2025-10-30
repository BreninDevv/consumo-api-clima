"user strict";
// variáveis
const pesquisa = document.getElementById("input-clima");
const icone = document.getElementById("imagem");
const temperatura = document.getElementById("temperatura");
const cidade = document.getElementById("cidade");
const humidade = document.getElementById("humidade");
const vento = document.getElementById("vento");

function pesquisar(e) {
  if (e.key === "Enter") {
    console.log("Teste", e.target.value);
  }
}

pesquisa.addEventListener("keydown", pesquisar);
