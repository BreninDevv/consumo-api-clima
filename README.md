🌩️ README do Projeto: Weather Finder Simples
Este é um projeto simples e puramente frontend desenvolvido para demonstrar a habilidade de realizar requisições assíncronas (via fetch) a uma API externa e manipular o DOM (Document Object Model) em JavaScript. É uma prova de conceito ideal para portfólio.

🌟 Destaques do Projeto (Portfólio)
Requisições Assíncronas: Uso da API fetch do JavaScript, manipulando Promessas (.then() ou async/await) e tratando o formato JSON.

Manipulação do DOM: Atualização dinâmica da interface (HTML) baseada nos dados recebidos da API.

Design Simples e Responsivo: Criação de uma interface de usuário funcional com HTML e CSS.

Tratamento de Erros: Implementação básica de lógica para lidar com cidades não encontradas ou falhas na API.

🛠️ Tecnologias Utilizadas
Tecnologia Função Principal
HTML5 Estrutura e marcação da página.
CSS3 Estilização da interface.
JavaScript (ES6+) Lógica de busca e manipulação de dados (fetch).

Exportar para as Planilhas

🚀 Configuração e Execução
Como este é um projeto estático (frontend), a execução é muito simples.

1. Pré-requisitos (Chave da API)
   Você precisará de uma chave de API de um serviço de clima.

2. Configurando sua Chave
   Clone o repositório:

Bash

git clone: "https://github.com/BreninDevv/consumo-api-clima.git"
cd APICLIMA
Abra o arquivo de JavaScript (ex: script.js).

Substitua o placeholder pela sua chave real, conforme o exemplo abaixo:

JavaScript

// No arquivo script.js
const API_KEY = "Sua chave Api!!"; // <-- insira sua chave!
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=SUA_CHAVE&q=São+Paulo&lang=pt
";
Atenção: Mantenha a chave apenas para fins de demonstração neste projeto simples.

3. Execução
   Basta abrir o arquivo index.html em qualquer navegador moderno.

📄 Estrutura de Arquivos
.
├── index.html # Interface do usuário (Input, Display, etc.)
├── css/
│ └── style.css # Estilização
├── js/
│ └── script.js # Lógica do projeto (fetch e DOM)
└── README.md
