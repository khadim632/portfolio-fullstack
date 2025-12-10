import Projet from "../models/Projet.js";

export const getProjets = async (req, res) => {
  try {
    const projets = await Projet.find().sort({ dateCreation: -1 });
    res.json(projets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProjet = async (req, res) => {
  try {
    const projet = new Projet(req.body);
    await projet.save();
    res.status(201).json(projet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProjet = async (req, res) => {
  try {
    const { id } = req.params;
    await Projet.findByIdAndDelete(id);
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProjet = async (req, res) => {
  try {
    const updated = await Projet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
