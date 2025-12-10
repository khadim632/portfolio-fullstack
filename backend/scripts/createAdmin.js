// backend/scripts/createAdmin.js

import mongoose from "mongoose";
import User from "../src/models/User.js"; // ✅ Corrigé : ajout de /src/
import dotenv from "dotenv";

dotenv.config();

const createAdmin = async () => {
  try {
    console.log("🔄 Connexion à MongoDB...");
    
    // Connexion à MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connecté à MongoDB avec succès !");

    // Email et mot de passe
    const adminEmail = "khadimndao632@gmail.com";
    const adminPassword = "camarades";

    console.log("\n🔍 Vérification de l'existence d'un admin...");
    
    // Vérifier si un admin existe déjà
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      console.log("⚠️  Un utilisateur admin existe déjà !");
      console.log("📧 Email: " + adminEmail);
      console.log("\n🗑️  Suppression de l'ancien admin...");
      
      await User.findByIdAndDelete(existingAdmin._id);
      console.log("✅ Ancien admin supprimé !");
    }

    // Créer le nouvel admin
    console.log("\n🔨 Création du nouvel admin...");
    const admin = new User({
      email: adminEmail,
      password: adminPassword, // Sera hashé automatiquement
      role: "admin"
    });

    await admin.save();

    console.log("\n✅ ✅ ✅ Utilisateur admin créé avec succès ! ✅ ✅ ✅\n");
    console.log("╔════════════════════════════════════════╗");
    console.log("║   INFORMATIONS DE CONNEXION ADMIN     ║");
    console.log("╠════════════════════════════════════════╣");
    console.log("║  📧 Email:        khadimndao632@gmail.com ║");
    console.log("║  🔑 Mot de passe: camarades            ║");
    console.log("╚════════════════════════════════════════╝");
    console.log("\n🌐 Connectez-vous sur: http://localhost:3000/login\n");

    process.exit(0);
  } catch (error) {
    console.error("\n❌ ERREUR:", error.message);
    console.error("\n📋 Détails complets:");
    console.error(error);
    process.exit(1);
  }
};

console.log("🚀 Démarrage du script de création d'admin...\n");
createAdmin();