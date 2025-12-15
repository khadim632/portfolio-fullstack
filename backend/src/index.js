import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import projetRoutes from "./routes/projetRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://portfolio-khadim-ndao-pi.vercel.app/",
  credentials: true
}));

app.use(express.json({ limit: "5mb" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projets", projetRoutes);
app.use("/api/contact", contactRoutes);

// Route de santé
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "API Portfolio Khadim Ndao"
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));