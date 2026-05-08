// Script de test SendGrid local
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Test SendGrid local");
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? "✅ Présent" : "❌ Manquant");
console.log("SENDGRID_FROM_EMAIL:", process.env.SENDGRID_FROM_EMAIL ? "✅ Présent" : "❌ Manquant");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✅ Présent" : "❌ Manquant");

if (!process.env.SENDGRID_API_KEY) {
  console.error("❌ SENDGRID_API_KEY non configuré");
  process.exit(1);
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const testMsg = {
  to: process.env.EMAIL_USER,
  from: {
    email: process.env.SENDGRID_FROM_EMAIL || process.env.EMAIL_USER,
    name: "Test Portfolio"
  },
  subject: "Test SendGrid - Portfolio",
  html: `
    <h2>Test réussi !</h2>
    <p>Si tu reçois cet email, SendGrid fonctionne correctement.</p>
    <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
  `,
};

try {
  console.log("📤 Envoi de l'email de test...");
  await sgMail.send(testMsg);
  console.log("✅ Email envoyé avec succès !");
  console.log("📧 Vérifie ta boîte mail:", process.env.EMAIL_USER);
} catch (error) {
  console.error("❌ Erreur SendGrid:", error.response ? error.response.body : error.message);
}