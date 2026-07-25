# Site de CV Premium - Bouafia Rehabi

Ce projet est un site de CV professionnel en une seule page (Single Page Application), entièrement responsive, doté d'un mode sombre/clair automatique et mémorisé, de transitions fluides et de micro-animations de survol de qualité supérieure (scroll reveals et card lifts).

## 📁 Structure du Projet

```text
├── index.html       # Structure HTML5, métadonnées SEO, scripts Alpine.js et CSS personnalisé
└── assets/
    └── me.jpeg      # Photo de profil de Bouafia Rehabi (30+ ans d'impact technologique)
```

---

## 🚀 Déploiement

Ce site étant entièrement statique (HTML/CSS/JS sans compilation), il est extrêmement rapide et facile à déployer gratuitement.

### Option 1 : Déploiement sur GitHub Pages (Recommandé pour sa gratuité et simplicité)

1. Créez un nouveau dépôt public ou privé sur votre compte GitHub (ex: `site-cv`).
2. Poussez les fichiers de ce dossier vers votre dépôt :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CV Premium"
   git branch -M main
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/site-cv.git
   git push -u origin main
   ```
3. Sur GitHub, allez dans les **Settings** (Paramètres) de votre dépôt.
4. Dans le menu de gauche, cliquez sur **Pages**.
5. Sous **Build and deployment** (Build et déploiement), définissez la source sur **Deploy from a branch** (Déployer depuis une branche).
6. Sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
7. Votre site sera publié dans les minutes qui suivent à l'adresse : `https://VOTRE_NOM_UTILISATEUR.github.io/site-cv/`.

### Option 2 : Déploiement sur Vercel (Idéal pour des performances mondiales et des domaines personnalisés)

#### Via l'interface web de Vercel (Recommandé)
1. Poussez votre code sur GitHub (comme décrit ci-dessus).
2. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
3. Cliquez sur **Add New...** -> **Project**.
4. Importez votre dépôt `site-cv`.
5. Laissez les configurations par défaut (Vercel détectera automatiquement qu'il s'agit d'un projet HTML statique) et cliquez sur **Deploy**.
6. Votre site est en ligne en quelques secondes avec une URL fournie par Vercel (ex: `site-cv.vercel.app`).

---

## ✉️ Formulaire de Contact (Formspree)

Le formulaire de contact actuel utilise le service gratuit **Formspree** pour envoyer les messages.
Il pointe actuellement vers l'identifiant temporaire : `https://formspree.io/f/xvonzndg`.

Pour recevoir les messages sur votre propre boîte mail :
1. Créez un compte gratuit sur [Formspree.io](https://formspree.io).
2. Créez un nouveau formulaire et copiez l'URL de l'action fournie (qui ressemble à `https://formspree.io/f/votre_id`).
3. Ouvrez le fichier `index.html`.
4. Recherchez la balise `<form action="https://formspree.io/f/xvonzndg"` (aux alentours de la ligne 1040).
5. Remplacez `xvonzndg` par votre nouvel identifiant Formspree.
