import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(json);

const PORT = process.env.PORT;

app.get("/", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`O servidor está ligado na porta ${PORT}`);
});
