import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connecté avec succès !");
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB :", err.message);
    process.exit(1);
  }
};

export default connectDB;