require("dotenv").config(); // Загружаем .env
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // Используем порт 3000

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/send-mail", async (req, res) => {
    console.log("📩 Пришел запрос:", req.body); // Логируем входящие данные

    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ message: "Ошибка: заполните все поля!" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: "📩 Новая заявка с сайта!",
        text: `Имя: ${name}\nТелефон: ${phone}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Письмо отправлено!");
        res.json({ message: "Заявка успешно отправлена!" });
    } catch (error) {
        console.error("❌ Ошибка при отправке:", error);
        res.status(500).json({ message: "Ошибка при отправке заявки", error });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
