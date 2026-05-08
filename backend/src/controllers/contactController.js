import sgMail from "@sendgrid/mail";
import Message from "../models/Message.js";

// Configuration SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY is not set");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendContact = async (req, res) => {
  try {
    const { nom, email, message } = req.body;
    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({
        message: "SendGrid API key manquante sur le serveur.",
        error: "SENDGRID_API_KEY non configurée"
      });
    }
    if (!process.env.EMAIL_USER && !process.env.SENDGRID_FROM_EMAIL) {
      return res.status(500).json({
        message: "Aucun email expéditeur configuré.",
        error: "EMAIL_USER ou SENDGRID_FROM_EMAIL manquant"
      });
    }

    // Sauvegarder le message en base de données
    const newMessage = new Message({ nom, email, message });
    await newMessage.save();

    // Préparer l'email avec SendGrid
    const msg = {
      to: process.env.EMAIL_USER, // destinataire (ton email)
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || process.env.EMAIL_USER,
        name: "Portfolio Contact"
      },
      subject: `Nouveau message de ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nouveau contact !
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>De :</strong> ${nom} (${email})</p>
            <p style="margin: 10px 0;"><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Message :</strong></p>
            <p style="margin: 10px 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">
            Cet email a été envoyé depuis le formulaire de contact de ton portfolio.
          </p>
        </div>
      `,
      replyTo: email, // permet de répondre directement à l'expéditeur
    };

    // Envoyer l'email avec SendGrid
    await sgMail.send(msg);

    res.json({
      message: "Email envoyé avec succès !",
      success: true
    });
  } catch (err) {
    console.error("Erreur envoi email :", err);
    res.status(500).json({
      message: "Erreur lors de l'envoi de l'email. Veuillez réessayer.",
      error: process.env.NODE_ENV === 'development' ? (err.response ? err.response.body : err.message) : undefined
    });
  }
};
