import mongoose from "mongoose";
import User from "../src/models/User.js"; 
import dotenv from "dotenv";

dotenv.config();

const createAdmin = async () => {
  try {
    console.log("🔄 Connexion à MongoDB...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connecté à MongoDB avec succès !");

    const adminEmail = process.env.ADMIN_EMAIL;      // depuis .env
    const adminPassword = process.env.ADMIN_PASSWORD; // depuis .env

    console.log("\n🔍 Vérification de l'existence d'un admin...");
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      console.log("⚠️  Un utilisateur admin existe déjà !");
      await User.findByIdAndDelete(existingAdmin._id);
      console.log("✅ Ancien admin supprimé !");
    }

    console.log("\n🔨 Création du nouvel admin...");
    const admin = new User({
      email: adminEmail,
      password: adminPassword, // hashé dans le model
      role: "admin"
    });

    await admin.save();
    console.log("\n✅ Admin créé avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("❌ ERREUR:", error);
    process.exit(1);
  }
};

createAdmin();
