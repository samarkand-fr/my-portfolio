// Données complètes et vérifiées des projets pour le portfolio de Dina Jannoun
// Basé sur les dépôts réels de https://github.com/samarkand-fr

// Import des images existantes dans le projet
import fishEye from "../assets/images/portfolio/fishEye.png";
import dashboard from "../assets/images/portfolio/dashboard.png";
import hrnet from "../assets/images/portfolio/hrnet.png";
import softdesk from "../assets/images/portfolio/softDeskSupport.png";
import tatreez from "../assets/images/portfolio/tatreez.png";

export const projectsData = [
  {
    id: "oc-lettings",
    title: "Orange County Lettings",
    subtitle: "Architecture modulaire, Docker & Pipeline CI/CD",
    category: "backend",
    featured: true,
    image: hrnet, // placeholder visuel optimisé
    description:
      "Démantèlement d'un monolithe Django vers une architecture modulaire découplée. Mise en place d'un pipeline complet CI/CD avec tests automatisés, conteneurisation Docker multi-plateforme, monitoring d'erreurs en production et documentation technique complète.",
    problemSolved:
      "Modernisation d'une application existante avec dette technique : réduction du couplage, automatisation des déploiements et fiabilisation continue.",
    technicalHighlights: [
      "Architecture modulaire Django (découplage en apps indépendantes)",
      "Pipeline CI/CD complet via GitHub Actions (Linting, Tests, Build Docker, Déploiement)",
      "Conteneurisation Docker multi-plateforme publiée sur Docker Hub",
      "Suite de tests unitaires et d'intégration Pytest avec couverture > 80%",
      "Surveillance en direct des performances et tracking d'exceptions avec Sentry.io",
      "Documentation technique automatisée générée avec Sphinx & ReadTheDocs",
    ],
    tags: [
      "Python 3.10+",
      "Django",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "Pytest",
      "Sphinx",
      "Render",
    ],
    github: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    liveDemo: "https://python-oc-lettings-fr-omgd.onrender.com",
    dockerHub: "https://hub.docker.com/r/hebanour1998/oc-lettings",
    statusBadge: "En production (Render)",
  },
  {
    id: "epic-events-crm",
    title: "Epic Events CRM",
    subtitle: "Système CRM sécurisé, BDD PostgreSQL & Sécurité RBAC",
    category: "backend",
    featured: true,
    image: dashboard,
    description:
      "Application CLI d'entreprise pour la gestion de la relation client, des contrats commerciaux et de la logistique d'événements. Implémente un modèle relationnel strict avec contrôle d'accès basé sur les rôles (RBAC) pour 3 départements : Gestion, Commercial et Support.",
    problemSolved:
      "Centralisation et sécurisation des données commerciales avec application stricte du principe du moindre privilège et audit trail.",
    technicalHighlights: [
      "Schéma de base de données relationnelle PostgreSQL normalisé (5 entités clés)",
      "Architecture logicielle en couches découplées via SQLAlchemy ORM 2.0+",
      "Sécurité RBAC stricte : restrictions d'accès par rôle (Gestion / Vente / Support)",
      "Hachage sécurisé des mots de passe avec Argon2id et authentification par tokens JWT",
      "Interface utilisateur CLI interactive et dynamique avec Click et Rich (tableaux, panels)",
      "Logging d'audit et remédiation des exceptions critiques via Sentry.io SDK",
      "Suite de tests unitaires et fonctionnels avec Pytest et Pytest-Cov",
    ],
    tags: [
      "Python 3.10+",
      "PostgreSQL 16",
      "SQLAlchemy 2.0",
      "Click",
      "Rich",
      "PyJWT",
      "Argon2id",
      "Sentry",
      "Pytest",
    ],
    github: "https://github.com/samarkand-fr/CRM-epic-events",
    liveDemo: null,
    dockerHub: null,
    statusBadge: "Production-ready CLI",
  },
  {
    id: "softdesk-api",
    title: "SoftDesk Support RESTful API",
    subtitle: "API REST sécurisée, Django REST Framework, OWASP & RGPD",
    category: "backend",
    featured: true,
    image: softdesk,
    description:
      "API RESTful collaborative pour la gestion et le suivi des projets, issues et commentaires de développeurs. Conçue selon les standards de sécurité OWASP, la conformité européenne RGPD et les principes d'éco-conception logicielle (Green Code).",
    problemSolved:
      "Mise à disposition d'une API backend hautement sécurisée avec gestion granulaire des permissions d'auteurs et de contributeurs.",
    technicalHighlights: [
      "Authentification stateless basée sur JSON Web Tokens (JWT)",
      "Permissions granulaires au niveau de l'objet (Object-level permissions DRF)",
      "Conformité RGPD : vérification d'âge légal (≥ 15 ans), recueil du consentement explicite, droit à l'oubli (cascade deletion)",
      "Optimisation SQL : élimination des requêtes N+1 via select_related et prefetch_related",
      "Pagination globale pour réduire la charge réseau et l'empreinte serveur",
      "Gestion moderne des dépendances du projet avec Poetry et Dependabot",
    ],
    tags: [
      "Python",
      "Django REST Framework",
      "JWT",
      "Poetry",
      "OWASP",
      "RGPD",
      "PostgreSQL",
    ],
    github: "https://github.com/samarkand-fr/SoftDesk_API-RESTful",
    liveDemo: null,
    dockerHub: null,
    statusBadge: "Conforme OWASP & RGPD",
  },
  {
    id: "algoinvest",
    title: "AlgoInvest & Trade",
    subtitle: "Algorithmique d'optimisation financière & Programmation Dynamique",
    category: "algo",
    featured: true,
    image: dashboard,
    description:
      "Solution logicielle d'optimisation de portefeuille d'investissement pour maximiser les profits sous contrainte de budget fixe (500 € par client). Analyse comparative rigoureuse entre une approche naïve de Force Brute et un algorithme optimisé en programmation dynamique.",
    problemSolved:
      "Résolution du problème du Sac à dos (Knapsack Problem) appliqué aux marchés financiers pour passer d'une complexité impraticable à un temps d'exécution quasi-instantané.",
    technicalHighlights: [
      "Algorithme glouton et analyse de Force Brute en complexité exponentielle O(2^n)",
      "Implémentation de la Programmation Dynamique (0/1 Knapsack) en pseudo-polynomial O(n × W)",
      "Pipeline d'ingestion, filtrage et nettoyage de données réelles (fichiers CSV de 1000+ actions)",
      "Calculs matriciels vectorisés haute performance avec NumPy",
      "Benchmarking exhaustif : gain de temps d'exécution (secondes vs heures) et consommation mémoire",
    ],
    tags: [
      "Python 3.10",
      "NumPy",
      "Programmation Dynamique",
      "Knapsack 0/1",
      "Big-O Analysis",
      "CSV Data",
    ],
    github: "https://github.com/samarkand-fr/AlgoInvest",
    liveDemo: null,
    dockerHub: null,
    statusBadge: "Benchmark Big-O",
  },
  {
    id: "chess-tournaments",
    title: "Chess Tournaments Manager",
    subtitle: "Architecture MVC & Programmation Orientée Objet pure",
    category: "backend",
    featured: false,
    image: fishEye,
    description:
      "Logiciel de gestion et d'arbitrage de tournois d'échecs en mode hors-ligne selon le système d'appariement suisse. Développé avec une architecture MVC stricte garantissant une séparation nette entre modèles métiers, contrôleurs et affichage.",
    problemSolved:
      "Gestion autonome de tournois sans connexion internet avec sauvegarde continue et intégrité des scores et classements.",
    technicalHighlights: [
      "Conception architecturale MVC (Model-View-Controller) rigoureusement découplée",
      "Programmation Orientée Objet (POO) avancée (Joueurs, Tournois, Rondes, Matchs)",
      "Algorithme d'appariement suisse garantissant l'équité des confrontations sans répétition",
      "Persistance légère des données et sérialisation JSON sans dépendre d'un ORM externe",
      "Respect strict des standards de qualité PEP 8 audité par Flake8 avec rapport sans warning",
    ],
    tags: [
      "Python",
      "Architecture MVC",
      "POO Avancée",
      "Système Suisse",
      "Flake8 (PEP 8)",
      "JSON",
    ],
    github: "https://github.com/samarkand-fr/chess-tournaments-manager",
    liveDemo: null,
    dockerHub: null,
    statusBadge: "Architecture MVC",
  },
  {
    id: "wealth-health",
    title: "WealthHealth (HRNet)",
    subtitle: "Migration technologique React, Redux & Package npm autonome",
    category: "fullstack",
    featured: true,
    image: hrnet,
    description:
      "Refonte complète d'une application interne d'entreprise de gestion RH. Migration d'un socle historique jQuery lourd vers une architecture moderne React 18 avec Redux Toolkit. Création, packaging et publication sur npm d'une librairie de fenêtre modale performante.",
    problemSolved:
      "Élimination d'une dette technique critique (plugins jQuery obsolètes), réduction drastique du temps de chargement et amélioration de la maintenabilité.",
    technicalHighlights: [
      "Migration complète d'une application monolithique jQuery vers React 18",
      "Gestion d'état global centralisée avec Redux Toolkit",
      "Développement, typage et publication d'un package npm réutilisable (modal_plugin_p14)",
      "Audit de performance Lighthouse : gain significatif sur le First Contentful Paint (FCP)",
    ],
    tags: [
      "React 18",
      "Redux Toolkit",
      "Package npm",
      "Lighthouse",
      "Web Performance",
    ],
    github: "https://github.com/samarkand-fr/wealth-health",
    liveDemo: "https://jadina-hrnet.netlify.app/",
    dockerHub: null,
    statusBadge: "Package npm publié",
  },
  {
    id: "sportsee-dashboard",
    title: "SportSee Dashboard",
    subtitle: "Tableau de bord d'analytique sportive & Data Visualisation",
    category: "fullstack",
    featured: false,
    image: dashboard,
    description:
      "Application analytique de suivi de performances pour athlètes de haut niveau. Intègre des visualisations de données complexes (radars, graphiques en barres, courbes d'activité) alimentées par une API REST avec support de mode dégradé (mock data).",
    problemSolved:
      "Restitution claire et intuitive de volumes de données physiologiques complexes en temps réel.",
    technicalHighlights: [
      "Visualisation de données responsive et dynamique avec la librairie Recharts",
      "Formatage, modélisation et normalisation des flux de données API asynchrones",
      "Architecture résiliente supportant données réelles (API backend) et données de simulation (mock)",
    ],
    tags: [
      "React",
      "Recharts",
      "API REST",
      "JavaScript ES6+",
      "Axios",
    ],
    github: "https://github.com/samarkand-fr/P12-front-end-dashboard-",
    liveDemo: "https://samarkand-fr.github.io/P12-front-end-dashboard-/",
    dockerHub: null,
    statusBadge: "Data Viz Recharts",
  },
  {
    id: "tatreez-heritage",
    title: "Tatreez & Koufeyee Heritage",
    subtitle: "Plateforme culturelle & géométrie traditionnelle interactive",
    category: "frontend",
    featured: false,
    image: tatreez,
    description:
      "Site web interactif célébrant l'art ancestral de la broderie palestinienne (Tatreez) et le symbolisme du motif Koufeyee. Réalisé avec un accent marqué sur l'animation fluide, le design responsive et la mise en valeur des motifs géométriques traditionnels.",
    problemSolved:
      "Transmission et mise en valeur patrimoniale à travers une expérience web interactive moderne et élégante.",
    technicalHighlights: [
      "Conception graphique soignée basée sur les motifs géométriques et la grille de broderie",
      "Animations interactives pilotées par l'API Intersection Observer et Alpine.js",
      "Feuilles de style optimisées et modulaires avec Tailwind CSS",
    ],
    tags: [
      "HTML5",
      "Tailwind CSS",
      "Alpine.js",
      "CSS Grid",
      "Cultural Tech",
    ],
    github: "https://github.com/samarkand-fr/tatreez",
    liveDemo: "https://tatreez.netlify.app/",
    dockerHub: null,
    statusBadge: "Culture & Design",
  },
];
