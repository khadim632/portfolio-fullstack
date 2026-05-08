# SendGrid Setup pour le Backend

## 1. Installer @sendgrid/mail
Dans le dossier `backend`, exécute :
```powershell
npm install @sendgrid/mail
```

## 2. Ajouter les variables d'environnement
Dans Render, ajoute :
- `SENDGRID_API_KEY` : ta clé SendGrid commençant par `SG.`
- `SENDGRID_FROM_EMAIL` : `khadimndao632@gmail.com`

## 3. Vérifier le bon fonctionnement
- Redéploie ton service backend sur Render
- Vérifie les logs au démarrage :
  - `SENDGRID_API_KEY loaded: true`
  - `SENDGRID_FROM_EMAIL loaded: true`

## 4. Si en échec
- Vérifie que la clé API est valide
- Vérifie que l'email expéditeur est vérifié dans SendGrid
- Vérifie les logs Render et l'erreur détaillée renvoyée
