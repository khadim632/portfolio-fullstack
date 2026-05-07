import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true", // false pour le port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendContact = async (req, res) => {
  try {
    const { nom, email, message } = req.body;

    // Sauvegarder le message en base de données
    const newMessage = new Message({ nom, email, message });
    await newMessage.save();

    // Envoyer l'email avec Nodemailer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // tu peux aussi mettre un autre destinataire
      subject: `Nouveau message de ${nom}`,
      html: `
        <h2>Nouveau contact !</h2>
        <p><strong>De :</strong> ${nom} (${email})</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ message: "Email envoyé avec succès !" });
  } catch (err) {
    console.error("Erreur envoi email :", err);
    res.status(500).json({ message: err.message });
  }
};
