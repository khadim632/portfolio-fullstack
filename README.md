# 🌟 Portfolio Fullstack - Khadim Ndao

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Portfolio personnel moderne avec système d'authentification JWT et dashboard admin pour la gestion de projets.

![Portfolio Preview](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop)

---

## 📋 Table des Matières

- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [📂 Structure du Projet](#-structure-du-projet)
- [🚀 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [▶️ Démarrage](#️-démarrage)
- [🔐 Authentification](#-authentification)
- [📡 API Endpoints](#-api-endpoints)
- [🎨 Captures d'Écran](#-captures-décran)
- [🚀 Déploiement](#-déploiement)
- [👤 Auteur](#-auteur)
- [📄 Licence](#-licence)

---

## ✨ Fonctionnalités

### **Frontend**
- 🎨 Interface moderne et responsive avec **Tailwind CSS**
- 🌐 **Pages publiques** :
  - 🏠 Accueil avec présentation
  - 👤 À propos (CV, compétences, formation, expériences)
  - 📂 Projets (galerie avec filtres par technologie)
  - 📧 Contact (formulaire avec envoi d'email automatique)
- 🔐 **Espace Admin** :
  - Authentification sécurisée avec JWT
  - Dashboard de gestion de projets (CRUD complet)
  - Protection des routes avec `ProtectedRoute`
- ⚡ **Optimisations** :
  - Chargement asynchrone
  - Gestion d'états avec Context API
  - Validation des formulaires

### **Backend**
- 🚀 API RESTful avec **Express.js**
- 🔒 Authentification JWT
- 🗄️ Base de données **MongoDB** avec Mongoose
- 📧 Envoi d'emails avec **Nodemailer**
- 🛡️ Middleware de sécurité
- ✅ Validation des données
- 🔑 Hashage des mots de passe avec bcrypt

---

## 🛠️ Technologies

### **Frontend**
| Technologie | Version | Description |
|-------------|---------|-------------|
| React | 18.x | Bibliothèque UI |
| TypeScript | 5.x | Typage statique |
| React Router | 6.x | Navigation |
| Axios | 1.x | Requêtes HTTP |
| Tailwind CSS | 3.x | Framework CSS |
| Lucide React | - | Icônes |

### **Backend**
| Technologie | Version | Description |
|-------------|---------|-------------|
| Node.js | 18.x | Runtime JavaScript |
| Express | 5.x | Framework web |
| MongoDB | 6.x | Base de données NoSQL |
| Mongoose | 8.x | ODM MongoDB |
| JWT | 9.x | Authentification |
| Bcrypt | 2.x | Hashage mots de passe |
| Nodemailer | 7.x | Envoi d'emails |
| CORS | 2.x | Gestion CORS |

---

## 📂 Structure du Projet

```
portfolio_Bamba_Ndao/
│
├── backend/                  # API Node.js + Express
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js        # Configuration MongoDB
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── contactController.js
│   │   │   └── projetController.js
│   │   ├── middleware/
│   │   │   └── auth.js      # Middleware JWT
│   │   ├── models/
│   │   │   ├── Message.js
│   │   │   ├── Projet.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── contactRoutes.js
│   │   │   └── projetRoutes.js
│   │   └── index.js         # Point d'entrée
│   ├── scripts/
│   │   └── createAdmin.js   # Script création admin
│   ├── .env.example         # Template variables d'env
│   ├── .gitignore
│   └── package.json
│
└── frontend/                 # Application React
    ├── src/
    │   ├── components/
    │   │   ├── Footer.tsx
    │   │   ├── Login.tsx
    │   │   ├── Navbar.tsx
    │   │   └── ProtectedRoute.tsx
    │   ├── contexts/
    │   │   └── AuthContext.tsx
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Admin.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Home.tsx
    │   │   └── Projects.tsx
    │   ├── services/
    │   │   └── api.ts
    │   ├── App.tsx
    │   └── index.tsx
    ├── .env.example
    ├── .gitignore
    └── package.json
```

---

## 🚀 Installation

### **Prérequis**
- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)
- [Git](https://git-scm.com/)

### **1. Cloner le repository**
```bash
git clone https://github.com/khadim632/portfolio-fullstack.git
cd portfolio-fullstack
```

### **2. Installer les dépendances Backend**
```bash
cd backend
npm install
```

### **3. Installer les dépendances Frontend**
```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuration

### **Backend**

1. **Copiez `.env.example` vers `.env` :**
```bash
cd backend
cp .env.example .env
```

2. **Éditez `backend/.env` avec vos valeurs :**
```env
PORT=5000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=votre_secret_jwt_tres_long_et_aleatoire
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application_gmail
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**⚠️ Pour Gmail :**
- Activez la validation en 2 étapes
- Générez un mot de passe d'application : [Google Account](https://myaccount.google.com/apppasswords)

### **Frontend**

1. **Copiez `.env.example` vers `.env` :**
```bash
cd frontend
cp .env.example .env
```

2. **Éditez `frontend/.env` :**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## ▶️ Démarrage

### **1. Démarrer le Backend**
```bash
cd backend
npm run dev
```
✅ Serveur sur : http://localhost:5000

### **2. Démarrer le Frontend**
```bash
cd frontend
npm start
```
✅ Application sur : http://localhost:3000

### **3. Créer l'utilisateur Admin (première fois uniquement)**
```bash
cd backend
node scripts/createAdmin.js
```

**Identifiants par défaut :**
- 📧 Email : `khadimndao632@gmail.com`
- 🔑 Mot de passe : `camarades`

⚠️ **Changez ces identifiants après la première connexion !**

---

## 🔐 Authentification

### **Connexion Admin**

1. Allez sur : http://localhost:3000/login
2. Connectez-vous avec les identifiants admin
3. Accédez au dashboard : http://localhost:3000/admin

### **Protection des Routes**

- ✅ Routes publiques : `/`, `/about`, `/projects`, `/contact`
- 🔒 Routes protégées : `/admin` (nécessite authentification)
- 🚫 Redirection automatique vers `/login` si non authentifié

### **Token JWT**

- Durée de validité : **7 jours**
- Stockage : `localStorage`
- Refresh automatique à chaque requête API

---

## 📡 API Endpoints

### **Authentification**
```
POST   /api/auth/login          # Connexion admin
```

### **Projets**
```
GET    /api/projets             # Liste des projets (public)
POST   /api/projets             # Créer un projet (admin)
PUT    /api/projets/:id         # Modifier un projet (admin)
DELETE /api/projets/:id         # Supprimer un projet (admin)
```

### **Contact**
```
POST   /api/contact             # Envoyer un message
```

### **Réponses API**

**Succès :**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

**Erreur :**
```json
{
  "message": "Email ou mot de passe incorrect"
}
```

---

## 🎨 Captures d'Écran

### **Page d'Accueil**
![Home](https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Home+Page)

### **Page Projets**
![Projects](https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Projects+Page)

### **Dashboard Admin**
![Admin](https://via.placeholder.com/800x450/10B981/FFFFFF?text=Admin+Dashboard)

---

## 🚀 Déploiement

### **Frontend (Vercel)**

```bash
cd frontend
npm run build

# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### **Backend (Render)**

1. Créez un compte sur [Render](https://render.com)
2. "New Web Service" → Connectez votre repo GitHub
3. Variables d'environnement :
   - Ajoutez toutes les variables de `.env`
4. Déployez !

### **Base de données (MongoDB Atlas)**

1. Créez un cluster sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Récupérez votre connection string
3. Mettez à jour `MONGO_URL` dans `.env`

---

## 📊 Scripts Disponibles

### **Backend**
```bash
npm run dev        # Démarrage en mode développement (nodemon)
npm start          # Démarrage en mode production
```

### **Frontend**
```bash
npm start          # Démarrage en mode développement
npm run build      # Build pour production
npm test           # Lancer les tests
```

---

## 🔧 Développement

### **Ajouter une nouvelle fonctionnalité**

1. Créez une branche :
```bash
git checkout -b feature/nouvelle-fonctionnalite
```

2. Développez votre fonctionnalité

3. Commitez :
```bash
git add .
git commit -m "feat: Ajout de la nouvelle fonctionnalité"
```

4. Pushez :
```bash
git push origin feature/nouvelle-fonctionnalite
```

5. Créez une Pull Request sur GitHub

---

## 🐛 Résolution de Problèmes

### **Erreur de connexion MongoDB**
```
✅ Vérifiez votre MONGO_URL dans .env
✅ Vérifiez que votre IP est autorisée sur MongoDB Atlas
✅ Vérifiez que le mot de passe ne contient pas de caractères spéciaux non encodés
```

### **Erreur "Email ou mot de passe incorrect"**
```bash
# Recréez l'utilisateur admin
node scripts/createAdmin.js
```

### **CORS Error**
```
✅ Vérifiez FRONTEND_URL dans backend/.env
✅ Vérifiez que le backend tourne sur le bon port
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commitez (`git commit -m 'Add some AmazingFeature'`)
4. Pushez (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 👤 Auteur

**Khadim Ndao**

- 🌐 Portfolio : [khadim-portfolio.vercel.app](https://khadim-portfolio.vercel.app)
- 💼 LinkedIn : [linkedin.com/in/khadim-ndao](https://www.linkedin.com/in/khadim-ndao-b16857338)
- 🐙 GitHub : [@khadim632](https://github.com/khadim632)
- 📧 Email : khadimndao632@gmail.com
- 📍 Localisation : Dakar, Sénégal

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- [React](https://reactjs.org/) pour l'interface utilisateur
- [Node.js](https://nodejs.org/) pour le backend
- [MongoDB](https://www.mongodb.com/) pour la base de données
- [Tailwind CSS](https://tailwindcss.com/) pour le design
- [Unsplash](https://unsplash.com/) pour les images
- Tous les contributeurs open source

---

## 📞 Support

Si vous avez des questions ou besoin d'aide :

- 📧 Email : khadimndao632@gmail.com
- 💬 Issues : [GitHub Issues](https://github.com/khadim632/portfolio-fullstack/issues)

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile ! ⭐**

Made with ❤️ by [Khadim Ndao](https://github.com/khadim632)

</div>