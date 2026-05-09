import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 API ключ берётся из Render (НЕ пишем в коде!)
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
            {
              role: "system",
              content: "Ты AI помощник"
            },
            {
              role: "user",
              content: userMessage
            }
          ]
        })
      }
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "server error"
    });
  }
});

// Render сам даёт порт
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});