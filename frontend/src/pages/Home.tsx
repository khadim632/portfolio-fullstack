import React from "react";
import { useNavigate } from "react-router-dom";
import { Code2, Palette, Database, Globe } from "lucide-react";
// Importez votre photo ici (ajustez le chemin selon votre fichier)
import profileImage from "../assets/profile.jpg"; // ou profile.png

const Home: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "3+", label: "Années d'expérience" },
    { number: "10+", label: "Projets réalisés" },
    { number: "5+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Satisfaction client" }
  ];

  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Développement Web",
      description: "Création de sites web modernes et responsives avec React, Node.js et TypeScript"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles performantes et intuitives"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Design Graphique",
      description: "Conception d'identités visuelles et création de designs attractifs"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Full Stack",
      description: "Développement complet de solutions web avec gestion de bases de données"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Photo de profil */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Khadim Ndao"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-contain bg-white border-4 border-white shadow-2xl"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Khadim Ndao
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              Développeur Full Stack & Designer Graphique
            </p>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Passionné par la création d'expériences web modernes et performantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/projects")}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                À propos de moi
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Étudiant en Licence de Génie Informatique à l'Univers Professionnelles (UNIPRO) 
                de Dakar, je me spécialise dans le développement web et mobile.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Avec une formation certifiée en Intelligence Artificielle et une expérience 
                en graphisme, je combine créativité technique et vision stratégique pour 
                créer des solutions numériques innovantes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Basé à Dakar - Ouakam, je suis passionné par les nouvelles technologies 
                et toujours à la recherche de nouveaux défis à relever.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                En savoir plus
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                      <p className="text-sm text-gray-600">React • Node.js • MongoDB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Designer Graphique</h3>
                      <p className="text-sm text-gray-600">UI/UX • Identité Visuelle</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Intelligence Artificielle</h3>
                      <p className="text-sm text-gray-600">Formation certifiée FORCE-N</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mes Services
            </h2>
            <p className="text-xl text-gray-600">
              Ce que je peux faire pour vous
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Travaillons ensemble pour créer quelque chose d'extraordinaire
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Démarrer un projet
          </button>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;