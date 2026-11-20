import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";
import { FaSearch } from "react-icons/fa";

// Images portfolio
import letting from "../assets/images/portfolio/letting.png";
import dashboard from "../assets/images/portfolio/dashboard.png";
import softDesk from "../assets/images/portfolio/softDesk.png";
import chess from "../assets/images/portfolio/chess.png";
import tatreez from "../assets/images/portfolio/tatreez.png";
import globetrek from "../assets/images/portfolio/globetrek.png";
import glowup from "../assets/images/portfolio/glowup.png";
import petitplat from "../assets/images/portfolio/petitplats.png";
import algo from "../assets/images/portfolio/algo.png";
import hrnet from "../assets/images/portfolio/hrnet.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();

  // Projets réels les plus complexes démontrant les compétences de formation
  const portfolios = useMemo(
    () => [
      {
        id: "oc-lettings",
        title: "Orange County Lettings",
        subtitle: "Architecture modulaire & CI/CD",
        category: "backend",
        src: letting,
        expandedText:
          "Refonte d'un monolithe vers une architecture modulaire Django découplée. Pipeline CI/CD complet (GitHub Actions), conteneurisation Docker multi-plateforme, couverture Pytest > 80%, tracking d'erreurs Sentry et documentation Sphinx.",
        tags: ["Python", "Django", "Docker", "CI/CD", "Pytest", "Sentry"],
        statusBadge: "En production (Render)",
        link: "https://python-oc-lettings-fr-omgd.onrender.com",
        repo: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
      },
      {
        id: "epic-events",
        title: "Epic Events CRM",
        subtitle: "PostgreSQL & Sécurité RBAC",
        category: "backend",
        src: dashboard,
        expandedText:
          "Système CRM d'entreprise sécurisé pour gestion commerciale et logistique d'événements. Base PostgreSQL 16 normalisée, ORM SQLAlchemy 2.0+, contrôle d'accès basé sur les rôles (RBAC), mots de passe Argon2id, tokens JWT et CLI interactive avec Rich/Click.",
        tags: ["Python", "PostgreSQL", "SQLAlchemy", "RBAC", "Argon2id", "Click"],
        statusBadge: "CLI Production-ready",
        link: null,
        repo: "https://github.com/samarkand-fr/CRM-epic-events",
      },
      {
        id: "softdesk-api",
        title: "SoftDesk Support RESTful API",
        subtitle: "DRF, Sécurité OWASP & RGPD",
        category: "backend",
        src: softDesk,
        expandedText:
          "API RESTful collaborative pour suivi d'issues et projets. Implémente des permissions granulaires au niveau objet, conformité stricte RGPD (droit à l'oubli, vérification d'âge), sécurité OWASP, optimisation SQL (zéro requête N+1) et gestion Poetry.",
        tags: ["Python", "Django REST Framework", "JWT", "Poetry", "OWASP", "RGPD"],
        statusBadge: "Conforme OWASP",
        link: null,
        repo: "https://github.com/samarkand-fr/SoftDesk_API-RESTful",
      },
      {
        id: "algoinvest",
        title: "AlgoInvest & Trade",
        subtitle: "Algorithmique & Sac à dos 0/1",
        category: "algo",
        src: algo,
        expandedText:
          "Solution logicielle d'optimisation de portefeuille financier sous contrainte de budget. Analyse comparative : Force Brute O(2^n) versus Programmation Dynamique (Knapsack 0/1) en O(n×W). Traitement de gros volumes de données CSV avec calculs NumPy.",
        tags: ["Python", "NumPy", "Knapsack 0/1", "Programmation Dynamique", "Big-O"],
        statusBadge: "Benchmark Big-O",
        link: null,
        repo: "https://github.com/samarkand-fr/AlgoInvest",
      },
      {
        id: "chess-tournaments",
        title: "Chess Tournaments Manager",
        subtitle: "Architecture MVC pure & POO",
        category: "backend",
        src: chess,
        expandedText:
          "Application de gestion et d'arbitrage de tournois d'échecs (système d'appariement suisse) en mode hors-ligne. Architecture MVC stricte, programmation orientée objet avancée, persistance JSON et respect rigoureux de la PEP 8 validé par Flake8.",
        tags: ["Python", "Architecture MVC", "POO", "Système Suisse", "Flake8"],
        statusBadge: "Architecture MVC",
        link: null,
        repo: "https://github.com/samarkand-fr/chess-tournaments-manager",
      },
      {
        id: "wealth-health",
        title: "WealthHealth (HRNet)",
        subtitle: "Migration React & Package npm",
        category: "fullstack",
        src: hrnet,
        expandedText:
          "Migration d'une application interne d'entreprise de gestion RH. Remplacement de plugins jQuery vieillissants par des composants React modernes et Redux Toolkit. Publication d'un composant modal autonome sous forme de package npm réutilisable.",
        tags: ["React", "Redux Toolkit", "Package npm", "Web Performance"],
        statusBadge: "Package npm publié",
        link: "https://jadina-hrnet.netlify.app/",
        repo: "https://github.com/samarkand-fr/wealth-health",
      },
      {
        id: "globetrek",
        title: "GlobeTrek Blog",
        subtitle: "Application voyage TypeScript",
        category: "fullstack",
        src: globetrek,
        expandedText:
          "Blog de voyage moderne et réactif développé en TypeScript avec rendu performant, filtres dynamiques et design immersif inspiré du voyage.",
        tags: ["TypeScript", "React", "Tailwind CSS", "Netlify"],
        statusBadge: "TypeScript",
        link: "https://dina-globetrek.netlify.app/",
        repo: "https://github.com/samarkand-fr/GlobeTrek",
      },
      {
        id: "tatreez",
        title: "Tatreez & Kufiye Project",
        subtitle: "Géométrie & Patrimoine interactif",
        category: "fullstack",
        src: tatreez,
        expandedText:
          "Application web culturelle célébrant l'art de la broderie palestinienne traditionnelle et le symbolisme des motifs géométriques du Keffieh. Développée avec Tailwind CSS, Alpine.js et animations fluides.",
        tags: ["HTML5", "Tailwind CSS", "Alpine.js", "Kufiye Design"],
        statusBadge: "Culture & Design",
        link: "https://tatreez.netlify.app/",
        repo: "https://github.com/samarkand-fr/tatreez",
      },
      {
        id: "glowup",
        title: "GlowUp App",
        subtitle: "Application React & Animations",
        category: "fullstack",
        src: glowup,
        expandedText:
          "Application web moderne avec animations CSS pures créant une expérience visuelle et tactile élégante.",
        tags: ["React", "CSS Animations", "Vercel"],
        statusBadge: "UI Motion",
        link: "https://glowup-fk3w.vercel.app/",
        repo: "https://github.com/samarkand-fr/glowup",
      },
      {
        id: "petitplats",
        title: "Les Petits Plats",
        subtitle: "Moteur de recherche JavaScript",
        category: "algo",
        src: petitplat,
        expandedText:
          "Moteur de recherche de recettes avec algorithme de filtrage rapide optimisé comparant boucles natives et méthodes fonctionnelles.",
        tags: ["JavaScript ES6", "Algorithme", "Bootstrap"],
        statusBadge: "Algorithme JS",
        link: "https://jadina-petitplats.netlify.app/",
        repo: "https://github.com/samarkand-fr/P7-front-end-search-engine",
      },
    ],
    []
  );

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((p) => {
      const matchesCategory = filter === "all" || p.category === filter;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.subtitle.toLowerCase().includes(term) ||
        p.expandedText.toLowerCase().includes(term) ||
        p.tags.some((tag) => tag.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [portfolios, filter, searchTerm]);

  const container = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="portfolio"
      className={`
        relative min-h-screen w-full px-6 md:px-12 py-24
        transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-[#0f0f0f] text-[#e5e5e5]"
            : "bg-[#f9f9f9] text-[#0f0f0f]"
        }
      `}
    >
      <KufiyaBackground />

      {/* EN-TÊTE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10 mt-8 md:mt-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-[#b85757] pb-2">
          Portfolio
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-800 dark:text-gray-100 font-medium max-w-2xl mx-auto">
          Sélection des projets les plus complexes de mon parcours : architectures modulaires, sécurité des données, algorithmique et déploiement continu.
        </p>
      </motion.div>

      {/* RECHERCHE ET FILTRES */}
      <div className="max-w-4xl mx-auto mb-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* BARRE DE RECHERCHE DE COMPÉTENCE */}
        <div className="relative w-full md:w-72">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher (Docker, Django, SQL...)"
            className={`
              w-full pl-9 pr-3 py-2 rounded-full text-xs md:text-sm outline-none transition-all
              ${
                theme === "dark"
                  ? "bg-[#181818] border border-white/20 text-white placeholder-gray-400 focus:border-[#4fa27d]"
                  : "bg-white border border-gray-300 text-black focus:border-[#4fa27d]"
              }
            `}
          />
        </div>

        {/* ONGLETS DE FILTRAGE PAR CATÉGORIE */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { key: "all", label: "Tous (10)" },
            { key: "backend", label: "Python & Backend (4)" },
            { key: "algo", label: "Algorithmique (2)" },
            { key: "fullstack", label: "Fullstack & UI (4)" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`
                px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300
                ${
                  filter === cat.key
                    ? "bg-gradient-to-r from-[#b85757] to-[#4fa27d] text-white shadow-md scale-105"
                    : "bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-[#4fa27d]"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRILLE DES PROJETS (2 colonnes spacieuses) */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 
          gap-8 md:gap-10           
          max-w-5xl mx-auto
          relative z-10
        "
      >
        {filteredPortfolios.map((project) => (
          <motion.div key={project.id} variants={item}>
            <PortfolioItem
              src={project.src}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
              repo={project.repo}
              expandedText={project.expandedText}
              tags={project.tags}
              statusBadge={project.statusBadge}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ÉTAT VIDE SI RECHERCHE SANS RÉSULTAT */}
      {filteredPortfolios.length === 0 && (
        <div className="text-center py-16 relative z-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Aucun projet ne correspond à votre recherche "{searchTerm}".
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilter("all");
            }}
            className="mt-3 text-xs font-bold text-[#4fa27d] hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
