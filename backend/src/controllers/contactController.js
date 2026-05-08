import nodemailer from "nodemailer";
import Message from "../models/Message.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContact = async (req, res) => {
  try {
    const { nom, email, message } = req.body;

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ EMAIL_USER ou EMAIL_PASS manquant");
      return res.status(500).json({ 
        message: "Configuration email manquante sur le serveur" 
      });
    }

    // Sauvegarder le message en base de données
    const newMessage = new Message({ nom, email, message });
    await newMessage.save();

    // Envoyer l'email avec Nodemailer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Vous recevez l'email
      replyTo: email, // Pour répondre directement à l'expéditeur
      subject: `Nouveau message de ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📬 Nouveau contact !
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>De :</strong> ${nom}</p>
            <p style="margin: 10px 0;"><strong>Email :</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Message :</strong></p>
            <p style="margin: 10px 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            Cet email a été envoyé depuis le formulaire de contact de votre portfolio.
          </p>
        </div>
      `,
    });

    console.log("✅ Email envoyé avec succès !");
    res.json({ 
      message: "Email envoyé avec succès !",
      success: true
    });
  } catch (err) {
    console.error("❌ Erreur envoi email :", err);
    res.status(500).json({ 
      message: "Erreur lors de l'envoi de l'email. Veuillez réessayer.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};