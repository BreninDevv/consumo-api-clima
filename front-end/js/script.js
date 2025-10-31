"user strict";
// variáveis
const cidade = document.getElementById("cidade");
const pesquisa = document.getElementById("input-clima");
const icone = document.getElementById("imagem");
const temperatura = document.getElementById("temperatura");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");

function alterarCores(graus) {
  let cor = "";
  if (graus < 15) {
    cor = "#00FFFF";
  } else if (graus <= 20) {
    cor = "#191970";
  } else if (graus < 30) {
    cor = "#FFFF00";
  } else {
    cor = "#FF6347";
  }
  document.documentElement.style.setProperty("--bg-color", cor);

  document.documentElement.style.setProperty("--text-color", "#000");

  document.documentElement.style.setProperty("--body-color", `${cor}55`);
}

async function buscarClima() {
  const pesquisa = document.getElementById("input-clima").value;
  const resp = await fetch(
    `https://consumo-api-clima.onrender.com/clima/${pesquisa}`
  );
  const dados = await resp.json();

  cidade.innerHTML = `
  <span>${dados.location.name}</span>
  `;
  temperatura.innerHTML = `
  <span>${Math.floor(dados.current.temp_c)}° C</span>
  `;
  umidade.innerHTML = `
  <p>${dados.current.humidity}%</p>`;

  vento.innerHTML = `
  <p>${dados.current.wind_kph}Km/h</p>`;

  icone.src = `${dados.current.condition.icon}`;

  alterarCores(dados.current.temp_c);
}

async function pesquisar(e) {
  if (e.key === "Enter") {
    console.log(e.target.value);
    await buscarClima();
  }
}

pesquisa.addEventListener("keydown", pesquisar);
