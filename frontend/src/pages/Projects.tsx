import React, { useEffect, useState } from "react";
import { getProjets } from "../services/api";

interface Projet {
  _id: string;
  titre: string;
  description: string;
  imageUrl?: string;
  lienGithub?: string;
  lienDemo?: string;
  technologies?: string[];
  dateCreation: string;
}

const Projects: React.FC = () => {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchProjets();
  }, []);

  const fetchProjets = async () => {
    try {
      const res = await getProjets();
      setProjets(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des projets:", err);
    } finally {
      setLoading(false);
    }
  };

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projets.flatMap((p) => p.technologies || []))
  );

  // Filtrer les projets
  const filteredProjets =
    filter === "all"
      ? projets
      : projets.filter((p) => p.technologies?.includes(filter));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des projets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez mes réalisations et explorez le code source
          </p>
        </div>

        {/* Filtres */}
        {allTechnologies.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Tous ({projets.length})
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === tech
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Projets Grid */}
        {filteredProjets.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Aucun projet disponible
            </h3>
            <p className="text-gray-600">
              Les projets seront bientôt ajoutés !
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjets.map((projet) => (
              <div
                key={projet._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                  {projet.imageUrl ? (
                    <img
                      src={projet.imageUrl}
                      alt={projet.titre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                      💻
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  {projet.technologies && projet.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projet.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {projet.lienGithub && (
                      <a
                        href={projet.lienGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-center hover:bg-gray-900 transition-all font-medium"
                      >
                        <span className="mr-1">📂</span>
                        GitHub
                      </a>
                    )}
                    {projet.lienDemo && (
                      <a
                        href={projet.lienDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-all font-medium"
                      >
                        <span className="mr-1">🚀</span>
                        Démo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">{projets.length}</div>
            <div className="text-blue-100">Projets réalisés</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">
              {allTechnologies.length}
            </div>
            <div className="text-purple-100">Technologies utilisées</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-pink-100">Passion & Dévouement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;