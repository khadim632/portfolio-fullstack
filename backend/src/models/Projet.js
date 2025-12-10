import mongoose from "mongoose";

const projetSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  lienGithub: { type: String },
  lienDemo: { type: String },
  technologies: [String],
  dateCreation: { type: Date, default: Date.now }
});

export default mongoose.model("Projet", projetSchema);
