import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(json());
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);

const PORT = 3333;
const API_KEY = process.env.API_KEY;

app.get("/clima/:cidade", async (req, res) => {
  const { cidade } = req.params;
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&aqi=yes`;

  try {
    const resultado = await fetch(url);
    const dados = await resultado.json();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar clima" });
  }
});

app.listen(PORT, () => {
  console.log(`O servidor está ligado na porta ${PORT}`);
});
