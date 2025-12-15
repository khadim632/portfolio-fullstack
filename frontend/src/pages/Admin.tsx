import React, { useState, useEffect } from "react";
import {
  getProjets,
  createProjet,
  updateProjet,
  deleteProjet,
} from "../services/api";

interface Projet {
  _id?: string;
  titre: string;
  description: string;
  imageUrl?: string;
  lienGithub?: string;
  lienDemo?: string;
  technologies?: string[];
}

const Admin: React.FC = () => {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjet, setCurrentProjet] = useState<Projet | null>(null);
  const [formData, setFormData] = useState<Projet>({
    titre: "",
    description: "",
    imageUrl: "",
    lienGithub: "",
    lienDemo: "",
    technologies: [],
  });
  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjets();
  }, []);

  const fetchProjets = async () => {
    try {
      setLoading(true);
      const res = await getProjets();
      setProjets(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des projets");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEditing && currentProjet?._id) {
        await updateProjet(currentProjet._id, formData);
        alert("✅ Projet mis à jour !");
      } else {
        await createProjet(formData);
        alert("✅ Projet créé !");
      }
      resetForm();
      fetchProjets();
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "❌ Erreur lors de l'enregistrement");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (projet: Projet) => {
    setCurrentProjet(projet);
    setFormData(projet);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      try {
        setLoading(true);
        await deleteProjet(id);
        alert("✅ Projet supprimé !");
        fetchProjets();
        setError(null);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || "❌ Erreur lors de la suppression");
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      titre: "",
      description: "",
      imageUrl: "",
      lienGithub: "",
      lienDemo: "",
      technologies: [],
    });
    setCurrentProjet(null);
    setIsEditing(false);
    setTechInput("");
  };

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies?.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...(formData.technologies || []), techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies?.filter((t) => t !== tech),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">📊 Dashboard Admin</h1>
          <p className="text-blue-100">
            Gérez vos projets : créer, modifier, supprimer
          </p>
        </div>

        {/* Message d'erreur global */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {isEditing ? "✏️ Modifier" : "➕ Ajouter"} un projet
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titre *
                  </label>
                  <input
                    type="text"
                    value={formData.titre}
                    onChange={(e) =>
                      setFormData({ ...formData, titre: e.target.value })
                    }
                    required
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Nom du projet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                    disabled={loading}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Description du projet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lien GitHub
                  </label>
                  <input
                    type="url"
                    value={formData.lienGithub}
                    onChange={(e) =>
                      setFormData({ ...formData, lienGithub: e.target.value })
                    }
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lien Démo
                  </label>
                  <input
                    type="url"
                    value={formData.lienDemo}
                    onChange={(e) =>
                      setFormData({ ...formData, lienDemo: e.target.value })
                    }
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Technologies
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTechnology();
                        }
                      }}
                      disabled={loading}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="React, Node.js..."
                    />
                    <button
                      type="button"
                      onClick={addTechnology}
                      disabled={loading}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-1"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeTechnology(tech)}
                          disabled={loading}
                          className="text-blue-800 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Enregistrement...
                      </span>
                    ) : isEditing ? (
                      "💾 Mettre à jour"
                    ) : (
                      "➕ Ajouter"
                    )}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      disabled={loading}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Liste des projets */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                📂 Mes Projets ({projets.length})
              </h2>

              {loading && projets.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Chargement des projets...</p>
                </div>
              ) : projets.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔭</div>
                  <p className="text-gray-600">Aucun projet pour le moment</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Utilisez le formulaire à gauche pour ajouter votre premier projet
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {projets.map((projet) => (
                    <div
                      key={projet._id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
                    >
                      <div className="flex gap-4">
                        {/* Image miniature */}
                        <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden">
                          {projet.imageUrl ? (
                            <img
                              src={projet.imageUrl}
                              alt={projet.titre}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white text-3xl">
                              💻
                            </div>
                          )}
                        </div>

                        {/* Contenu */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {projet.titre}
                          </h3>
                          <p className="text-gray-600 mb-2 line-clamp-2">
                            {projet.description}
                          </p>
                          {projet.technologies &&
                            projet.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {projet.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          <div className="flex gap-2">
                            {projet.lienGithub && (
                              <a
                                href={projet.lienGithub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline"
                              >
                                GitHub
                              </a>
                            )}
                            {projet.lienDemo && (
                              <a
                                href={projet.lienDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline"
                              >
                                Démo
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleEdit(projet)}
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            ✏️ Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(projet._id!)}
                            disabled={loading}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            🗑️ Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;