# ☁️ APICLIMA: Aplicação de Clima com Arquitetura Híbrida

Este é um projeto simples, ideal para portfólio, que demonstra o consumo de uma API externa (WeatherAPI) em uma arquitetura separada (Front-end e Back-end), focada na **segurança e boas práticas**.

O **Back-end** (Node.js/Express) é usado para ocultar a chave de API, garantindo que a informação sensível nunca seja exposta no Front-end ou no navegador do usuário.

---

## ⭐ Destaques do Projeto (Portfólio)

- **Segurança de Chaves (Back-end):** Implementação de um servidor Node.js/Express para atuar como _proxy_, garantindo que a chave de API (armazenada em um arquivo `.env`) não seja versionada no GitHub e permaneça oculta.
- **Requisições Assíncronas:** Uso da API nativa `fetch` do JavaScript, manipulando Promessas (`async/await`) para consumir a API externa via back-end.
- **Manipulação do DOM:** Atualização dinâmica da interface (HTML) com base nos dados meteorológicos recebidos.
- **Design e Responsividade:** Interface funcional criada com HTML e CSS puro.
- **Tratamento de Erros:** Lógica de tratamento de erros no servidor para lidar com falhas na API ou cidades não encontradas.

---

## 🛠️ Tecnologias Utilizadas

| Camada           | Tecnologia                   | Função                                                     |
| :--------------- | :--------------------------- | :--------------------------------------------------------- |
| **Front-end**    | `HTML5`, `CSS3`              | Estrutura da página e estilização da interface.            |
| **Front-end**    | `JavaScript (ES6+)`          | Lógica de busca e manipulação de dados (DOM e `fetch`).    |
| **Back-end**     | `Node.js`, `Express`         | Criação do servidor para a rota `/clima/:cidade`.          |
| **Back-end**     | `dotenv`                     | Gerenciamento seguro de variáveis de ambiente (`API_KEY`). |
| **Configuração** | `.gitignore`, `.env.example` | Boas práticas de segurança para não expor a chave de API.  |

---

## ⚙️ Configuração e Execução (Passo a Passo)

Para rodar este projeto, você precisará de um ambiente com **Node.js** e o **npm** instalados.

### 1. Clonar o Repositório e Instalar Dependências

```bash
# Clone o repositório
git clone "https://github.com/BreninDevv/consumo-api-clima"
cd apiclima/back-end

# Instale as dependências do Back-end (Express, dotenv, cors)
npm install
2. Configurar a Chave da API (Crucial!)
O projeto usa a WeatherAPI.

Obtenha uma Chave Gratuita no site da WeatherAPI.

Crie um novo arquivo chamado .env dentro da pasta back-end.

Copie e cole a linha abaixo no seu arquivo .env, substituindo SUA_CHAVE_AQUI pela chave real que você obteve.

# back-end/.env
API_KEY="SUA_CHAVE_AQUI"

3. Execução do Projeto
Este projeto requer que o Back-end e o Front-end rodem em paralelo.

A. Iniciar o Servidor (Back-end)
Na pasta back-end, inicie o servidor Node.js:

Bash

npm start
# Alternativamente: node server.js
O servidor iniciará na porta 3333 e estará pronto para receber requisições do Front-end.

B. Iniciar o Front-end
Abra o arquivo front-end/index.html no seu navegador.

Recomendação: Para evitar problemas de CORS ou requisições locais, utilize uma extensão como Live Server (VS Code) para abrir o index.html. As requisições JavaScript (script.js) esperam que o Front-end esteja rodando em http://localhost:5500 ou http://127.0.0.1:5500.

```
