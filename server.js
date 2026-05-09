import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.GROQ_API_KEY;

app.post("/chat", async (req, res) => {
  try {

    const userMessage = req.body.message;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: `
Ты AI помощник образовательного центра Alfoz.

📌 О Alfoz:
Alfoz — это образовательный центр, который обучает языкам и IT-навыкам.

📚 Курсы Alfoz:
1. Английский язык (A1–C2)
2. Русский язык
3. Немецкий язык
4. Китайский язык
5. Детские курсы (математика, логика, развитие)
6. Компьютерные курсы (Word, Excel, базовый ПК)
7. Подготовка к экзаменам и школьным предметам

💰 Стоимость:
- от 200 до 400 сомони (в зависимости от курса)

📌 Правила:
- всегда отвечай на русском языке
- будь кратким и понятным
- если спрашивают про Alfoz — объясняй как образовательный центр
` },
            { role: "user", content: userMessage }
          ]
        })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));