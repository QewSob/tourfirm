const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Метод не разрешен" });
    }

    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ message: "Ошибка: не все поля заполнены" });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "nanebetrip@mail.ru",
            pass: "EjXBZpn6Rpa6bqMEccMJ"
        }
    });

    try {
        await transporter.sendMail({
            from: "nanebetrip@mail.ru",
            to: "nanebetrip@mail.ru",
            subject: "Новая заявка с сайта",
            text: `Имя: ${name}\nТелефон: ${phone}`
        });

        res.status(200).json({ message: "Заявка отправлена!" });
    } catch (error) {
        console.error("Ошибка при отправке:", error);
        res.status(500).json({ message: "Ошибка при отправке заявки", error });
    }
}
