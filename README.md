# APP Event

Application de gestion d'événements construite avec Next.js, Prisma et HeroUI.

## Stack Technique

- **Frontend**:
  - Next.js 15.2
  - React 19
  - TailwindCSS 3.4.17
  - HeroUI pour les composants UI
  - Framer Motion pour les animations

- **Backend**:
  - Prisma avec PostgreSQL (Neon)
  - API Routes Next.js

## Prérequis

- Node.js 18+
- Yarn
- Base de données PostgreSQL (nous utilisons Neon)

## Installation

1. **Cloner le repository**
```bash
git clone [votre-repo]
cd appevent
```

2. **Installer les dépendances**
```bash
yarn install
```

3. **Configuration de l'environnement**

Créer un fichier `.env` à la racine du projet :
```env
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
```

4. **Initialiser la base de données**
```bash
npx prisma generate
npx prisma db push
```

## Structure du Projet

```
appevent/
├── app/                    # Dossier principal Next.js 13+
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── providers.tsx      # Providers React (HeroUI, etc.)
├── prisma/
│   └── schema.prisma      # Schéma de la base de données
└── public/                # Assets statiques
```

## Configuration Tailwind et HeroUI

Le projet utilise Tailwind CSS 3.4.17 avec HeroUI pour les composants. La configuration se trouve dans :

- `tailwind.config.js` : Configuration Tailwind
- `postcss.config.js` : Configuration PostCSS
- `app/globals.css` : Styles globaux

## Développement

Pour lancer le serveur de développement :

```bash
yarn dev
```

L'application sera disponible sur `http://localhost:3000`

## Déploiement

1. **Build de l'application**
```bash
yarn build
```

2. **Démarrer en production**
```bash
yarn start
```

## Gestion des Tags

L'application utilise Zustand pour la gestion d'état des tags avec :
- Persistance localStorage
- Actions pour ajouter/supprimer/modifier les tags
- Sélection/désélection des tags

## Base de données

Nous utilisons Prisma avec une base de données PostgreSQL hébergée sur Neon. Le schéma inclut :
- Modèle Event pour les événements
- Relations et champs typés
- Migrations automatiques

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
