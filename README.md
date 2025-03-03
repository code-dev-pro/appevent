# APP Event

Application de gestion d'événements construite avec Next.js, Prisma et Neon Database.

## 🛠 Stack Technique

- **Framework**: [Next.js](https://nextjs.org)
- **Base de données**: [Neon (PostgreSQL serverless)](https://neon.tech)
- **ORM**: [Prisma](https://prisma.io)
- **Langage**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## 📋 Prérequis

- Node.js 18+ 
- Yarn ou npm
- Un compte [Neon](https://neon.tech) pour la base de données

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone git@github.com:code-dev-pro/appevent.git
cd appevent
```

2. **Installer les dépendances**
```bash
yarn install
```

3. **Configuration de l'environnement**

Créer un fichier `.env` à la racine du projet :
```env
DATABASE_URL="postgresql://user:password@ep-xxx-xxx.region.aws.neon.tech/neondb?sslmode=require"
```

4. **Initialiser la base de données**
```bash
# Générer le client Prisma
yarn prisma generate

# Appliquer les migrations
yarn prisma migrate dev
```

## 📝 Structure de la Base de Données

### Model Event
```prisma
model Event {
  id         String   @id @default(uuid())
  name       String
  desc       String
  picture    String
  address    Json?    
  startAt    DateTime
  endAt      DateTime
  createdAt  DateTime @default(now())
}
```

## 🔄 Workflow Prisma

1. **Modifier le schéma**
   - Éditer `prisma/schema.prisma`
   - Ajouter/modifier les modèles selon vos besoins

2. **Créer une migration**
```bash
yarn prisma migrate dev --name nom_de_la_migration
```

3. **Appliquer les migrations en production**
```bash
yarn prisma migrate deploy
```

## 🌩 Configuration Neon

1. Créer un projet sur [Neon](https://neon.tech)
2. Dans les paramètres du projet, récupérer l'URL de connexion
3. Configurer la variable `DATABASE_URL` dans `.env`
4. Activer le "Connection Pooling" pour de meilleures performances

## 💻 Développement

```bash
# Lancer le serveur de développement
yarn dev

# Ouvrir Prisma Studio (interface d'administration de la BDD)
yarn prisma studio
```

## 🚀 Déploiement

1. **Préparer la base de données**
```bash
yarn prisma migrate deploy
```

2. **Construire l'application**
```bash
yarn build
```

## 📚 Ressources Utiles

- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Neon](https://neon.tech/docs)
- [Documentation Next.js](https://nextjs.org/docs)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.
