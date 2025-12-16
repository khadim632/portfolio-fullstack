import React from "react";
// Importez votre photo ici (ajustez le chemin selon votre fichier)
import profileImage from "../assets/profile.jpg"; // ou profile.png

const About: React.FC = () => {
  const experiences = [
    {
      period: "Juin - Décembre 2024",
      role: "Agent de billetterie et service transfert d'argent",
      company: "Dija Service",
      location: "Dakar"
    },
    {
      period: "12 Février - 8 Mars 2024",
      role: "Stagiaire en Maintenance et Multimédia",
      company: "GROUPE ADAMARIE TGI",
      location: "Dakar"
    },
    {
      period: "8 Juin 2023 - 15 Juin 2023",
      role: "Stage en graphisme",
      company: "KAKATAR GRAPHIC",
      location: "Dakar"
    }
  ];

  const formations = [
    {
      year: "2022 - 2025",
      degree: "Licence en Génie Informatique",
      specialization: "Développement web/mobile",
      school: "Univers Professionnelles (UNIPRO)",
      location: "Dakar"
    },
    {
      year: "Mai 2025",
      degree: "Certificat en Intelligence Artificielle pour tous",
      school: "FORCE-N",
      location: "Dakar"
    },
    {
      year: "2020 - 2021",
      degree: "Baccalauréat Série S2",
      school: "Lycée Amath Dansakho de Ouakam",
      location: "Dakar"
    }
  ];

  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Développement Full Stack",
      description: "Conception et réalisation de sites et applications web/mobile",
      technologies: ["React", "Node.js", "Laravel", "MongoDB", "Python"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Design & Graphisme",
      description: "Conception et création d'identités visuelles",
      technologies: ["Figma", "Adobe", "UI/UX Design"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Outils Bureautiques",
      description: "Maîtrise des outils de productivité",
      technologies: ["Word", "PowerPoint", "Excel"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Intelligence Artificielle",
      description: "Formation certifiée en IA",
      technologies: ["Les bases de l'intelligence artificielle", "AI Fundamentals"]
    }
  ];

  const learningSkills = [
    {
      name: "Flutter & Dart",
      progress: 30,
      description: "Développement d'applications mobiles cross-platform"
    },
    {
      name: "React Native",
      progress: 50,
      description: "Applications mobiles avec JavaScript/React"
    },
    {
      name: "GraphQL",
      progress: 20,
      description: "API modernes et requêtes optimisées"
    },
   
    {
      name: "Next.js",
      progress: 70,
      description: "Framework React pour applications performantes"
    }
  
  ];

  const languages = [
    { name: "Français", level: "Lu, écrit et parlé" },
    { name: "Anglais", level: "Lu et écrit" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec photo */}
        <div className="text-center mb-16">
          {/* Photo de profil */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75"></div>
              <img
                src={profileImage}
                alt="Khadim Ndao"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-contain bg-white border-4 border-white shadow-2xl"
              />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développeur Full Stack passionné, basé à Dakar - Ouakam
          </p>
        </div>

        {/* Présentation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Qui suis-je ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Je m'appelle <span className="font-semibold text-gray-800">Khadim Ndao</span>, 
                né le 23 février 2000 à Dakar. Je suis titulaire d'une Licence en 
                Génie Informatique avec une spécialisation en développement web et mobile 
                à l'Univers Professionnelles (UNIPRO).
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Passionné par le développement Full Stack et le design graphique, je combine 
                créativité et compétences techniques pour créer des expériences numériques 
                modernes et performantes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Informations de contact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="font-medium">📍 Adresse:</span> Dakar - Ouakam
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">📞 Téléphone:</span> 78 127 22 49
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">✉️ Email:</span> khadimndao632@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Mes Compétences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Formation & Diplômes
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{formation.degree}</h3>
                    <span className="text-blue-600 font-semibold">{formation.year}</span>
                  </div>
                  {formation.specialization && (
                    <p className="text-gray-600 font-medium mb-1">{formation.specialization}</p>
                  )}
                  <p className="text-gray-500">
                    {formation.school} - {formation.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expériences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Expériences Professionnelles
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-purple-600 pl-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    <span className="text-purple-600 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-gray-500">
                    {exp.company} - {exp.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compétences Techniques */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  React & Vue.js (TypeScript)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Responsive Design
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Node.js & Express / JavaScript
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Python (Django, Flask, FastAPI)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  PHP & Laravel
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  MySQL, MongoDB & PostgreSQL
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  REST API
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Authentication (JWT, OAuth2)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Sécurité & Architecture MVC
                </li>
              </ul>
            </div>

            {/* Outils */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Outils
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  VS Code
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Docker & Postman
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  npm & yarn
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compétences en Apprentissage */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🎯 Compétences en Apprentissage
            </h2>
            <p className="text-gray-600">
              Technologies et frameworks que je suis actuellement en train de maîtriser
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                  <span className="text-orange-600 font-bold text-lg">{skill.progress}%</span>
                </div>
                
                {/* Barre de progression */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm">
              💡 <span className="font-semibold">En constante évolution :</span> Je consacre régulièrement du temps à l'apprentissage de nouvelles technologies pour rester à jour avec les dernières tendances du développement.
            </p>
          </div>
        </div>

        {/* Langues */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Compétences Linguistiques
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{lang.name}</h3>
                <p className="text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;