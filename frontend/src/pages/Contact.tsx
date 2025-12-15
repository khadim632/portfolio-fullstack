import React, { useState } from "react";
import { sendContact } from "../services/api"; // <--- Ajoute cette ligne

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // <--- État de chargement
  const [error, setError] = useState(""); // <--- Gestion d'erreur

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      await sendContact(formData); // <--- Envoi réel au backend

      setSubmitted(true);
      setFormData({ nom: "", email: "", message: "" }); // Réinitialise le formulaire

      // Réinitialise le message de succès après 3 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err: any) {
      console.error("Erreur envoi contact:", err);
      setError("Une erreur est survenue. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-600">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Envoyez-moi un message
            </h2>

            {/* Message de succès */}
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6">
                <div className="text-5xl mb-4">Message envoyé !</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Merci {formData.nom || "vous"} !
                </h3>
                <p className="text-green-600">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}

            {/* Message d'erreur */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center mb-6 text-red-700">
                {error}
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
          </div>

          {/* --- Partie droite (infos) --- */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">Email</div>
              </div>
              <p className="text-gray-300 mb-3">
                Contactez-moi directement par email
              </p>
              <a
                href="mailto:khadimndao@example.com"
                className="text-white font-medium hover:underline"
              >
                khadimndao632@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">GitHub</div>
              </div>
              <p className="text-gray-300 mb-3">
                Consultez mon code et mes projets
              </p>
              <a
                href="https://github.com/khadim632"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:underline"
              >
                github.com/khadim632
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <h3 className="text-xl font-bold text-gray-800">
                  Disponible pour des projets
                </h3>
              </div>
              <p className="text-gray-600">
                Je suis actuellement disponible pour des missions freelance et
                des opportunités professionnelles. N'hésitez pas à me contacter !
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Délai de réponse
              </h3>
              <p className="text-gray-600">
                Je réponds généralement sous 24-48 heures
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Tarifs
              </h3>
              <p className="text-gray-600">
                Sur devis selon la complexité du projet
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Localisation
              </h3>
              <p className="text-gray-600">
                Travail à distance et sur site possible
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Disponibilité
              </h3>
              <p className="text-gray-600">
                Actuellement disponible pour nouveaux projets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;