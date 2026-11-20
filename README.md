# 🌿 Personal Portfolio — Portfolio V3

A modern, responsive and interactive developer portfolio showcasing my journey, technical expertise, and software engineering projects.

**Portfolio V3** represents a major evolution of my original portfolio, featuring a complete redesign, improved architecture, enhanced user experience, and a more structured presentation of my technical skills.

## 🚀 Latest Version

The latest version is maintained in the:
👉 **`portfolio-v3` branch**

> **Autres branches disponibles :**
>
> - `redesign` : Version refondue / modernisée précédente (UI/UX, animations, mode sombre/clair, structure de code).
> - Branche d'origine : Conservée à titre de référence et d'historique.

---

## 🛠️ Technologies

- **Frontend :** React, JavaScript (ES6+), React Router, React Context API
- **Style & UI :** Tailwind CSS, CSS3
- **Outils & Services :** Git, GitHub, npm, GetForm (formulaire de contact)

---

## 📌 Statut du déploiement

- **Déploiement en ligne :** Déployé sur **Netlify** — [Live Demo](https://portfoliov3.netlify.app)
- **État local actuel :** Compilation validée via `npm run build` (0 erreur, 0 avertissement) et développement actif en local.

---

## ✨ Nouveautés de `portfolio-v3`

- **Réorganisation des projets** : Mise en avant des réalisations les plus complexes issues de la formation, organisées par catégories et filtres interactifs.
- **Compétences techniques par piliers** : Structuration claire autour du Backend & Données, DevOps & Cloud, Sécurité & Qualité, et Frontend.
- **CV numérique interactif & PDF à jour** : Nouvelle page `/cv` au format Executive avec impression A4 optimisée, téléchargement de `resume.pdf` et intégration des projets d'ingénierie clés.

---

## 🧩 Améliorations apportées aux pages

### 🏠 Page d'Accueil (`Home.jsx`)

- **Hero Section** : Portrait (`dinahero.png`) avec animation de lévitation et effet *shimmer*, titre vertical « PYTHON DEVELOPER », séparateur dégradé et appel à l'action vers les projets.
- **Mise en page alternée** : Alternance entre citations de résilience (`QuoteBlock`) et sections de projets phares en pleine largeur (`Section.jsx`) :
  1. **Orange County Lettings** : Architecture modulaire Django, Docker multi-plateforme, CI/CD GitHub Actions, couverture Pytest supérieure à 80 %, Sentry et Sphinx sur Render.
  2. **Epic Events CRM** : Base PostgreSQL 16 normalisée, SQLAlchemy 2.0+, contrôle d'accès RBAC, Argon2id, JWT et CLI interactive (`Click` / `Rich`).
  3. **Tatreez & Kufiye Project** : Application web mettant à l'honneur la géométrie de la broderie palestinienne et du Keffieh.
  4. **GlobeTrek** : Carnet de voyage moderne développé en TypeScript & React.
- **Accès catalogue** : Bannière dédiée vers le catalogue complet des 10 projets.

### 💼 Page Portfolio (`Portfolio.jsx`)

- **10 projets de formation** : *Orange County Lettings*, *Epic Events CRM*, *SoftDesk API RESTful*, *AlgoInvest & Trade (Sac à dos 0/1)*, *Chess Tournaments Manager (MVC)*, *WealthHealth (React & package npm)*, *GlobeTrek*, *Tatreez*, *GlowUp* et *Les Petits Plats*.
- **Recherche & filtres dynamiques** : Barre de recherche par mot-clé technique (`Docker`, `Django`, `SQL`, `React`, `OWASP`...) et filtres par catégorie avec compteurs :
  - *Tous (10)*
  - *Python & Backend (4)*
  - *Algorithmique (2)*
  - *Fullstack & UI (4)*
- **Cartes projets (`PortfolioItem.jsx`)** : Badges de statut (*En production*, *CLI Ready*, *OWASP*...), tags technologiques et accès aux dépôts GitHub.

### 👩‍💻 Page À Propos (`About.jsx`)

- Typographie épurée avec soulignement bicolore signature.
- Présentation du profil **Développeuse Python & Backend**, de la méthodologie (*PEP 8*, *Flake8*, *Pytest*, *OWASP*, *Green Code*, *RGPD*) et des **4 piliers d'ingénierie logicielle**.
- Accès direct à la consultation du CV et à l'exploration des projets.

### ⚡ Page Expérience & Compétences (`Experience.jsx`)

- Grille interactive basée sur `TechnologyCard` organisée par piliers :
  - **Backend & Données** : Python 3.10+, Django, Django REST Framework, PostgreSQL 16, SQLAlchemy 2.0+, SQLite.
  - **DevOps & Cloud** : Docker, GitHub Actions (CI/CD), Git & GitHub, Sentry.io, Render.
  - **Sécurité & Qualité** : Pytest (couverture supérieure à 80 %), sécurité RBAC & Argon2id, PEP 8 / Flake8.
  - **Frontend** : React 18, Redux Toolkit, TypeScript, Tailwind CSS.
- Barre de progression au survol (`ProgressBar`) affichant le niveau de maîtrise et un lien direct vers le dépôt GitHub associé.

### 📄 Page CV (`Cv.jsx`) & Fichier `resume.pdf`

- **Format Executive interactif** : Remplace l'ancien aperçu statique par un CV adaptatif (*mobile, tablette, desktop*) compatible mode sombre / clair avec fond *Kufiye* et intégration des projets d'ingénierie clés.
- **Barre d'actions** :
  - **Imprimer / PDF** : Déclenche `window.print()` avec feuille de style `@media print` calibrée pour un rendu A4 propre sans barre de navigation.
  - **Télécharger PDF** : Téléchargement direct du fichier régénéré `resume.pdf`.
  - **Contact** : Raccourci direct vers la page de contact.
- **Informations & colonne latérale** : Coordonnées directes (LinkedIn, GitHub, disponibilité immédiate), stack technique par catégorie, atouts analytiques (licence en mathématiques) et langues.
- **Mise à jour `resume.pdf`** : Régénéré avec le parcours Python, les certifications OpenClassrooms, les projets d'ingénierie logicielle et les coordonnées actuelles.

### ✉️ Page Contact (`Contact.jsx`)

- Formulaire *glassmorphism* connecté à GetForm avec bouton dégradé et animation de balayage lumineux.
- Cartes d'accès direct (Email, LinkedIn, GitHub) et badge de disponibilité immédiate (*CDI / Freelance*).

---

## 📦 Installation & Lancement

Basculer sur la branche `portfolio-v3` puis installer et lancer le projet :

```bash
git checkout portfolio-v3
npm install
npm run dev
