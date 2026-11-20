import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaPrint,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaShieldAlt,
  FaReact,
  FaChalkboardTeacher,
  FaLanguage,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "./KufiyaBackground";
import dinaPhoto from "../assets/images/dina.jpeg";
import resumePdf from "../assets/resume.pdf";

function Cv() {
  const { theme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      name="cv"
      className={`
        relative min-h-screen py-24 px-4 sm:px-6 md:px-12 transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-[#0f0f0f] text-[#e5e5e5]"
            : "bg-[#f9f9f9] text-[#111]"
        }
      `}
    >
      {/* Background Kufiye (masqué lors de l'impression) */}
      <div className="print:hidden">
        <KufiyaBackground />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* BARRE D'ACTIONS DU HAUT (Masquée à l'impression) */}
        <div className="print:hidden mb-8 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#111] dark:text-white">
              Curriculum Vitae
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-200 font-medium">
              Développeuse d'Applications Python | Backend & Full-Stack
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 items-center">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border border-gray-300 dark:border-white/20 text-[#111] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all cursor-pointer"
              title="Imprimer ou enregistrer au format PDF via votre navigateur"
            >
              <FaPrint size={14} className="text-[#4fa27d]" />
              <span>Imprimer / PDF</span>
            </button>

            <a
              href={resumePdf}
              download="CV_Dina_Jannoun_Python_Backend.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white shadow-md hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(90deg, #4fa27d, #b85757)",
              }}
            >
              <FaDownload size={13} />
              <span>Télécharger PDF (1 page)</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border border-[#4fa27d]/40 text-[#4fa27d] hover:bg-[#4fa27d]/10 transition-all"
            >
              <FaEnvelope size={13} />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* ========================================================
            DOCUMENT CV NUMÉRIQUE MODERNE
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            w-full rounded-2xl border shadow-xl overflow-hidden print:shadow-none print:border-none print:rounded-none
            ${
              theme === "dark"
                ? "bg-[#121212] border-white/10 text-[#e5e5e5]"
                : "bg-white border-gray-200 text-[#1a1a1a]"
            }
          `}
        >
          {/* EN-TÊTE DU CV */}
          <div className="relative p-6 sm:p-8 border-b border-gray-200 dark:border-white/10 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-[#161616] dark:via-[#131313] dark:to-[#161616]">
            {/* Ligne décorative supérieure Kufiye */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ background: "linear-gradient(90deg, #4fa27d, #b85757)" }}
            />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Photo de profil */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#4fa27d] shadow-lg">
                  <img
                    src={dinaPhoto}
                    alt="Dina Jannoun"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Titre & Statut */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111] dark:text-white">
                    DINA JANNOUN
                  </h2>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#4fa27d]/15 text-[#4fa27d] border border-[#4fa27d]/30 self-center sm:self-auto">
                    Disponible immédiatement
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold mt-1 text-[#b85757] dark:text-[#4fa27d] tracking-wide">
                  DÉVELOPPEUSE D'APPLICATIONS PYTHON | BACKEND & FULL-STACK
                </p>

                <p className="text-xs font-semibold text-gray-600 dark:text-gray-200 mt-1">
                  Python · Django · API REST · PostgreSQL · React · Docker · CI/CD
                </p>

                {/* Coordonnées & Liens */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3.5 text-xs">
                  <span className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium">
                    <FaMapMarkerAlt className="text-[#b85757]" /> Paris, France
                  </span>
                  <a
                    href="tel:0767986830"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium hover:text-[#4fa27d]"
                  >
                    <FaPhoneAlt className="text-[#4fa27d]" /> 07 67 98 68 30
                  </a>
                  <a
                    href="mailto:jdina2004@gmail.com"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium hover:text-[#4fa27d]"
                  >
                    <FaEnvelope className="text-[#4fa27d]" /> jdina2004@gmail.com
                  </a>
                  <a
                    href="https://github.com/samarkand-fr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium hover:text-[#b85757]"
                  >
                    <FaGithub className="text-[#b85757]" /> github.com/samarkand-fr
                  </a>
                  <a
                    href="https://linkedin.com/in/dinajannoun"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium hover:text-[#4fa27d]"
                  >
                    <FaLinkedin className="text-[#4fa27d]" /> linkedin.com/in/dinajannoun
                  </a>
                  <a
                    href="https://samarkand-fr.github.io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 font-medium hover:text-[#4fa27d]"
                  >
                    <FaGlobe className="text-[#4fa27d]" /> samarkand-fr.github.io
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* 1. PROFIL PROFESSIONNEL */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-3 border-b-2 border-[#b85757]">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#b85757] dark:text-[#4fa27d]">
                  Profil Professionnel
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                <p>
                  Développeuse d'applications spécialisée en Python et développement backend, avec une formation scientifique en mathématiques et informatique et un parcours complémentaire en développement frontend.
                </p>
                <p>
                  Compétences en conception d'applications, architecture logicielle, développement d'API REST, modélisation de bases de données et automatisation des déploiements. Expérience pratique acquise à travers plusieurs projets couvrant Django, SQLAlchemy, PostgreSQL, React, Docker et les pipelines CI/CD.
                </p>
                <p>
                  Rigoureuse, autonome et orientée qualité, je souhaite contribuer au développement d'applications fiables, maintenables et évolutives.
                </p>
              </div>
            </section>

            {/* 2. COMPÉTENCES TECHNIQUES */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b-2 border-[#4fa27d]">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111] dark:text-white">
                  Compétences Techniques
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Backend */}
                <div className="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                    <FaServer className="text-[#4fa27d]" />
                    <h4>Backend & développement</h4>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                    Python 3 · Programmation orientée objet · MVC<br />
                    Django · Django REST Framework<br />
                    SQLAlchemy 2 · API RESTful<br />
                    JavaScript ES6+ · TypeScript
                  </p>
                </div>

                {/* Bases de données */}
                <div className="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                    <FaDatabase className="text-[#b85757]" />
                    <h4>Bases de données</h4>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                    PostgreSQL · SQLite<br />
                    SQL · Modélisation relationnelle · Normalisation<br />
                    ORM · Jointures · Transactions · Indexation<br />
                    Optimisation des requêtes
                  </p>
                </div>

                {/* Frontend */}
                <div className="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                    <FaReact className="text-[#4fa27d]" />
                    <h4>Frontend</h4>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                    React 18 · Hooks · Redux Toolkit<br />
                    HTML5 · CSS3 · SASS · Tailwind CSS<br />
                    Interfaces responsives · Accessibilité web
                  </p>
                </div>

                {/* DevOps & Outils */}
                <div className="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                    <FaTools className="text-[#b85757]" />
                    <h4>DevOps & outils</h4>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                    Docker · Dockerfiles · Multi-architecture<br />
                    Git · GitHub · GitHub Actions · CI/CD<br />
                    Render · Déploiement cloud<br />
                    Sentry · Supervision des erreurs · Poetry · Pipenv
                  </p>
                </div>

                {/* Qualité & Sécurité (Pleine largeur) */}
                <div className="md:col-span-2 p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3">
                  <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                    <FaShieldAlt className="text-[#4fa27d]" />
                    <h4>Qualité & sécurité</h4>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium leading-relaxed">
                    Pytest · Pytest-Cov · Flake8 · PEP 8 · Tests automatisés · Couverture de code · JWT · RBAC · Argon2id · Bonnes pratiques OWASP · Documentation technique Sphinx
                  </p>
                </div>
              </div>
            </section>

            {/* 3. PROJETS & RÉALISATIONS LOGICIELLES */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b-2 border-[#b85757]">
                <FaLaptopCode className="text-[#b85757]" size={18} />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111] dark:text-white">
                  Projets & Réalisations Logicielles
                </h3>
              </div>

              <div className="space-y-4">
                {/* ORANGE COUNTY LETTINGS */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      ORANGE COUNTY LETTINGS <span className="font-normal text-gray-500 dark:text-gray-300">| Application web Django</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    Python · Django · Docker · GitHub Actions · Pytest · Sentry · Render
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Modernisation d'une application Django existante et réorganisation du code en architecture modulaire. Mise en place d'une chaîne CI/CD avec GitHub Actions, conteneurisation Docker multi-architecture, tests automatisés (25 tests réussis, couverture de 94 %), suivi des erreurs avec Sentry et déploiement sur Render.
                  </p>
                </div>

                {/* EPIC EVENTS CRM */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      EPIC EVENTS CRM <span className="font-normal text-gray-500 dark:text-gray-300">| Application de gestion commerciale</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    Python · PostgreSQL · SQLAlchemy 2 · RBAC · JWT · Argon2id · Click · Rich
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Conception d'un CRM sécurisé en ligne de commande pour la gestion des clients, contrats et événements. Modélisation d'une base relationnelle, gestion des permissions par rôles (RBAC), authentification JWT et sécurisation des mots de passe avec Argon2id.
                  </p>
                </div>

                {/* SOFTDESK */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      SOFTDESK <span className="font-normal text-gray-500 dark:text-gray-300">| API REST de gestion collaborative</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    Python · Django REST Framework · JWT · SQLite · Poetry
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Développement d'une API REST pour la gestion de projets et le suivi d'incidents. Implémentation de permissions granulaires par objet, authentification JWT, optimisation des requêtes et prise en compte des exigences de sécurité et de protection des données.
                  </p>
                </div>

                {/* ALGOINVEST & TRADE */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      ALGOINVEST & TRADE <span className="font-normal text-gray-500 dark:text-gray-300">| Optimisation algorithmique</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    Python · Algorithmique · Programmation dynamique · Complexité Big-O
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Développement d'un algorithme d'optimisation de portefeuille sous contrainte budgétaire. Comparaison de la force brute et de la programmation dynamique à travers l'analyse de leur complexité algorithmique.
                  </p>
                </div>

                {/* CHESS TOURNAMENTS MANAGER */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      CHESS TOURNAMENTS MANAGER <span className="font-normal text-gray-500 dark:text-gray-300">| Application Python</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    Python · POO · Architecture MVC · JSON · Flake8
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Développement d'une application de gestion de tournois d'échecs. Mise en œuvre d'une architecture MVC, de la programmation orientée objet et de la persistance des données au format JSON.
                  </p>
                </div>

                {/* WEALTHHEALTH HRNET */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      WEALTHHEALTH HRNET <span className="font-normal text-gray-500 dark:text-gray-300">| Application React</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    React 18 · Redux Toolkit · JavaScript · npm
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Migration d'une application RH de jQuery vers React. Développement de composants réutilisables, gestion centralisée de l'état avec Redux Toolkit et création d'un composant modal autonome publié sous forme de package npm.
                  </p>
                </div>

                {/* PROJETS PERSONNELS */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/40 dark:bg-white/2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      PROJETS PERSONNELS <span className="font-normal text-gray-500 dark:text-gray-300">| Développement web</span>
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-[#4fa27d] mt-0.5">
                    TypeScript · React · HTML · CSS · JavaScript
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1.5 leading-relaxed">
                    Conception et amélioration continue de plusieurs applications web, notamment GlobeTrek, Tatreez et GlowUp. Travail sur l'interface utilisateur, l'organisation du code, l'expérience utilisateur et la cohérence visuelle.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. FORMATION */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b-2 border-[#4fa27d]">
                <FaGraduationCap className="text-[#4fa27d]" size={18} />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111] dark:text-white">
                  Formation
                </h3>
              </div>

              <div className="space-y-4">
                {/* DÉVELOPPEUR PYTHON */}
                <div className="relative pl-4 border-l-2 border-[#4fa27d]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      DÉVELOPPEUR D'APPLICATION PYTHON | OpenClassrooms
                    </h4>
                    <span className="text-xs font-bold text-[#4fa27d]">2025–2026</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-200 font-medium mt-0.5">
                    Formation diplômante – Niveau 6 (Bac+3/4)
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1">
                    Développement Python, programmation orientée objet, architecture logicielle, Django, API REST, bases de données relationnelles, tests, sécurité et déploiement.
                  </p>
                </div>

                {/* DÉVELOPPEUR REACT */}
                <div className="relative pl-4 border-l-2 border-gray-300 dark:border-white/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      DÉVELOPPEUR D'APPLICATION JAVASCRIPT / REACT | OpenClassrooms
                    </h4>
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-200 font-medium">2022–2023</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-200 font-medium mt-0.5">
                    Formation en développement frontend
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1">
                    Développement d'applications React, gestion d'état avec Redux Toolkit, composants réutilisables et modernisation d'applications web.
                  </p>
                </div>

                {/* LICENCE SCIENTIFIQUE LAU */}
                <div className="relative pl-4 border-l-2 border-gray-300 dark:border-white/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      LICENCE SCIENTIFIQUE – MATHÉMATIQUES & INFORMATIQUE | Lebanese American University (LAU)
                    </h4>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-200 font-medium">1988–1991</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-100 font-medium mt-1">
                    Algorithmique, structures de données, mathématiques appliquées, calcul matriciel et logique.
                  </p>
                </div>

                {/* BACCALAURÉAT S */}
                <div className="relative pl-4 border-l-2 border-gray-300 dark:border-white/20">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                      BACCALAURÉAT SCIENTIFIQUE – MENTION TRÈS BIEN
                    </h4>
                    <span className="text-xs text-gray-600 dark:text-gray-200 font-medium">1988</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. EXPÉRIENCE PROFESSIONNELLE ANTÉRIEURE */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b-2 border-gray-300 dark:border-white/20">
                <FaChalkboardTeacher className="text-[#4fa27d]" size={18} />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111] dark:text-white">
                  Expérience Professionnelle Antérieure
                </h3>
              </div>

              <div className="relative pl-4 border-l-2 border-gray-300 dark:border-white/20">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs sm:text-sm font-bold text-[#111] dark:text-white">
                    ENSEIGNEMENT – MATHÉMATIQUES & SCIENCES
                  </h4>
                  <span className="text-xs text-gray-600 dark:text-gray-200 font-medium">2001–2019</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-gray-700 dark:text-gray-100 font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fa27d] shrink-0 mt-1.5" />
                    <span>Transmission de connaissances scientifiques et accompagnement pédagogique.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fa27d] shrink-0 mt-1.5" />
                    <span>Développement de méthodes d'analyse et de résolution de problèmes.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fa27d] shrink-0 mt-1.5" />
                    <span>Organisation, rigueur et adaptation aux différents interlocuteurs.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. LANGUES */}
            <section>
              <div className="flex items-center gap-2.5 pb-2 mb-3 border-b-2 border-[#b85757]">
                <FaLanguage className="text-[#b85757]" size={18} />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111] dark:text-white">
                  Langues
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3 flex items-center justify-between">
                  <span className="font-bold text-gray-800 dark:text-white">Français</span>
                  <span className="text-gray-600 dark:text-gray-200 font-medium">courant / bilingue</span>
                </div>
                <div className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3 flex items-center justify-between">
                  <span className="font-bold text-gray-800 dark:text-white">Anglais</span>
                  <span className="text-gray-600 dark:text-gray-200 font-medium">professionnel</span>
                </div>
                <div className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/3 flex items-center justify-between">
                  <span className="font-bold text-gray-800 dark:text-white">Arabe</span>
                  <span className="text-gray-600 dark:text-gray-200 font-medium">langue maternelle</span>
                </div>
              </div>
            </section>
          </div>

          {/* PIED DE PAGE DU CV */}
          <div className="p-4 text-center border-t border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-gray-200 font-medium bg-gray-50/50 dark:bg-white/1">
            DINA JANNOUN — DÉVELOPPEUSE D'APPLICATIONS PYTHON | BACKEND & FULL-STACK • Portfolio :{" "}
            <a
              href="https://samarkand-fr.github.io"
              target="_blank"
              rel="noreferrer"
              className="text-[#4fa27d] font-semibold hover:underline"
            >
              samarkand-fr.github.io
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cv;
