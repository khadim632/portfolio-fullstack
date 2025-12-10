import express from "express";
import { getProjets, createProjet, deleteProjet, updateProjet } from "../controllers/projetController.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js"; // Ajoute ça
const router = express.Router();

// GET reste public
router.get("/", getProjets);

// POST, PUT, DELETE protégés
router.post("/", requireAuth, requireAdmin, createProjet);
router.put("/:id", requireAuth, requireAdmin, updateProjet);
router.delete("/:id", requireAuth, requireAdmin, deleteProjet);

export default router;