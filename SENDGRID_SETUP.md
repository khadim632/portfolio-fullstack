# Configuration SendGrid pour le Portfolio

## 🚀 Migration vers SendGrid

Ton backend utilise maintenant SendGrid au lieu de Nodemailer pour éviter les problèmes de connexion SMTP sur Render.

## 📋 Étapes à suivre

### 1. Créer un compte SendGrid
- Va sur [https://sendgrid.com](https://sendgrid.com)
- Crée un compte gratuit
- Vérifie ton email

### 2. Générer une clé API
- Dans le dashboard SendGrid, va dans "Settings" > "API Keys"
- Clique "Create API Key"
- Donne un nom (ex: "Portfolio Contact")
- Sélectionne "Full Access" ou "Restricted Access" avec "Mail Send"
- Copie la clé API générée

### 3. Configurer l'expéditeur
- Dans SendGrid, va dans "Settings" > "Sender Authentication"
- Vérifie ton email `khadimndao632@gmail.com` comme expéditeur
- Si nécessaire, configure un domaine (mais l'email simple fonctionne)

### 4. Mettre à jour les variables d'environnement sur Render
- Va dans ton service Render
- "Environment" > "Environment"
- Ajoute/modifie ces variables :
  ```
  SENDGRID_API_KEY=SG.xxxxxxxx.xxxxxxxxxxx  # Ta clé API SendGrid
  SENDGRID_FROM_EMAIL=khadimndao632@gmail.com
  ```

### 5. Redéployer
- Render redéploiera automatiquement après la sauvegarde des variables
- Teste le formulaire de contact

## 🎯 Avantages de SendGrid

- ✅ Fonctionne sur toutes les plateformes cloud (Render, Vercel, etc.)
- ✅ Fiable et rapide
- ✅ 100 emails gratuits par jour
- ✅ Interface de monitoring des emails
- ✅ Support professionnel

## 🔧 Fichiers modifiés

- `backend/package.json` : Ajout de `@sendgrid/mail`
- `backend/src/controllers/contactController.js` : Migration vers SendGrid
- `backend/.env` : Variables SendGrid ajoutées

## 🧪 Test

Après configuration, teste le formulaire de contact sur ton site. Tu devrais recevoir les emails sans erreur 500.