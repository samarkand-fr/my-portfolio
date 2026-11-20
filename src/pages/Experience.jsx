import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";

import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiGithubactions,
  SiSentry,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiPytest,
  SiRender,
} from "react-icons/si";
import { FaGitAlt, FaShieldAlt, FaDatabase } from "react-icons/fa";

// ------------------- PROGRESS BAR -------------------
const ProgressBar = ({ progress, theme }) => (
  <div
    className={`absolute bottom-0 left-0 w-full rounded-b-xl overflow-hidden ${
      theme === "dark" ? "bg-[#1b1b1b]" : "bg-[#e5e5e5]"
    }`}
  >
    <div
      className="h-2 rounded-b-xl transition-all duration-500"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #4fa27d, #b85757)",
        boxShadow: "0 0 8px rgba(79, 162, 125, 0.6)",
      }}
    />
  </div>
);

// ------------------- TECHNOLOGY CARD -------------------
const TechnologyCard = ({ icon, title, category, progress, link, delay }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`
        relative cursor-pointer rounded-2xl p-5 transition-all duration-300
        flex flex-col items-center justify-center border text-center group
        ${
          theme === "dark"
            ? "bg-[#0f0f0f]/80 border-[#1f1f1f] text-white hover:border-[#4fa27d]/60 hover:shadow-[0_0_22px_rgba(79,162,125,0.35)]"
            : "bg-white/90 border-gray-200 text-[#0f0f0f] hover:border-[#4fa27d]/60 hover:shadow-[0_8px_24px_rgba(79,162,125,0.2)]"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && window.open(link, "_blank")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* ICON */}
      <div className="w-14 h-14 mb-3 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* TITLE */}
      <p className="font-bold text-sm md:text-base mb-1">{title}</p>
      <span className="text-[11px] font-medium text-gray-600 dark:text-gray-200 mb-2">
        {category}
      </span>

      {/* HOVER DETAILS */}
      <div className="h-5 flex items-center justify-center">
        {isHovered ? (
          <span className="text-xs font-bold text-[#4fa27d] dark:text-[#00ff88]">
            {progress}% Maîtrise
          </span>
        ) : (
          <span className="text-[11px] text-gray-500 dark:text-gray-300 font-medium">
            Voir projet ↗
          </span>
        )}
      </div>

      {/* PROGRESS BAR */}
      <ProgressBar progress={progress} theme={theme} />
    </motion.div>
  );
};

// ------------------- EXPERIENCE SECTION -------------------
const Experience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const techs = [
    {
      id: "python",
      icon: <SiPython className="text-[#3776AB]" />,
      title: "Python 3.10+",
      category: "Backend & POO",
      tab: "backend",
      progress: 90,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "django",
      icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />,
      title: "Django",
      category: "Architecture Modulaire",
      tab: "backend",
      progress: 88,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "drf",
      icon: <SiDjango className="text-[#b85757]" />,
      title: "Django REST Framework",
      category: "APIs & Permissions",
      tab: "backend",
      progress: 85,
      link: "https://github.com/samarkand-fr/SoftDesk_API-RESTful",
    },
    {
      id: "postgresql",
      icon: <SiPostgresql className="text-[#336791]" />,
      title: "PostgreSQL 16",
      category: "SGBD Relationnel",
      tab: "backend",
      progress: 85,
      link: "https://github.com/samarkand-fr/CRM-epic-events",
    },
    {
      id: "sqlalchemy",
      icon: <FaDatabase className="text-[#e28743]" />,
      title: "SQLAlchemy 2.0+",
      category: "ORM & Modélisation",
      tab: "backend",
      progress: 82,
      link: "https://github.com/samarkand-fr/CRM-epic-events",
    },
    {
      id: "docker",
      icon: <SiDocker className="text-[#2496ED]" />,
      title: "Docker",
      category: "Conteneurisation",
      tab: "devops",
      progress: 82,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "githubactions",
      icon: <SiGithubactions className="text-[#2088FF]" />,
      title: "GitHub Actions",
      category: "CI/CD & Automatisation",
      tab: "devops",
      progress: 85,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "pytest",
      icon: <SiPytest className="text-[#0A9EDC]" />,
      title: "Pytest & Pytest-Cov",
      category: "Tests (>80% couv.)",
      tab: "quality",
      progress: 88,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "security",
      icon: <FaShieldAlt className="text-[#b85757]" />,
      title: "RBAC & Argon2id",
      category: "Sécurité & OWASP",
      tab: "quality",
      progress: 84,
      link: "https://github.com/samarkand-fr/CRM-epic-events",
    },
    {
      id: "sentry",
      icon: <SiSentry className="text-[#362D59] dark:text-[#9B87F5]" />,
      title: "Sentry.io",
      category: "Monitoring d'erreurs",
      tab: "devops",
      progress: 80,
      link: "https://github.com/samarkand-fr/Python-OC-Lettings-FR",
    },
    {
      id: "git",
      icon: <FaGitAlt className="text-[#F05032]" />,
      title: "Git & GitHub",
      category: "Versioning & Reviews",
      tab: "devops",
      progress: 88,
      link: "https://github.com/samarkand-fr",
    },
    {
      id: "sqlite",
      icon: <SiSqlite className="text-[#003B57]" />,
      title: "SQLite",
      category: "Persistance locale",
      tab: "backend",
      progress: 85,
      link: "https://github.com/samarkand-fr/chess-tournaments-manager",
    },
    {
      id: "render",
      icon: <SiRender className="text-[#46E3B7]" />,
      title: "Render Cloud",
      category: "Hébergement Prod",
      tab: "devops",
      progress: 80,
      link: "https://python-oc-lettings-fr-omgd.onrender.com",
    },
    {
      id: "react",
      icon: <SiJavascript className="text-[#61DAFB]" />,
      title: "React 18",
      category: "Composants & SPA",
      tab: "frontend",
      progress: 82,
      link: "https://github.com/samarkand-fr/wealth-health",
    },
    {
      id: "redux",
      icon: <SiRedux className="text-[#764ABC]" />,
      title: "Redux Toolkit",
      category: "State Management",
      tab: "frontend",
      progress: 80,
      link: "https://github.com/samarkand-fr/wealth-health",
    },
    {
      id: "typescript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      title: "TypeScript",
      category: "Typage statique",
      tab: "frontend",
      progress: 75,
      link: "https://github.com/samarkand-fr/GlobeTrek",
    },
    {
      id: "tailwind",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      title: "Tailwind CSS",
      category: "UI & Kufiye Styling",
      tab: "frontend",
      progress: 88,
      link: "https://github.com/samarkand-fr/tatreez",
    },
  ];

  const filteredTechs =
    activeTab === "all" ? techs : techs.filter((t) => t.tab === activeTab);

  return (
    <div
      name="experience"
      className={`
        relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24
        transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-[#0f0f0f] text-[#e5e5e5]"
            : "bg-white text-[#0f0f0f]"
        }
      `}
    >
      <KufiyaBackground />

      <div className="relative max-w-6xl w-full z-10">
        {/* EN-TÊTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-6 text-center mt-8 md:mt-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold inline-block border-b-4 pb-2"
            style={{
              borderColor: theme === "dark" ? "#b85757" : "#4fa27d",
            }}
          >
            Experience & Stack
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-100 font-medium max-w-2xl mx-auto">
            Technologies maîtrisées et mises en pratique sur des architectures réelles : Python, Django, PostgreSQL, Docker, CI/CD et React.
          </p>
        </motion.div>

        {/* ONGLETS DE FILTRAGE */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { key: "all", label: "Toutes les technologies" },
            { key: "backend", label: "Python & Backend" },
            { key: "devops", label: "DevOps & Cloud" },
            { key: "quality", label: "Qualité & Sécurité" },
            { key: "frontend", label: "Frontend & UI" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-[#b85757] to-[#4fa27d] text-white shadow-md scale-105"
                    : "bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white hover:border-[#4fa27d]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRILLE DES TECHNOLOGIES */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-4">
          {filteredTechs.map((tech, index) => (
            <TechnologyCard
              key={tech.id}
              icon={tech.icon}
              title={tech.title}
              category={tech.category}
              progress={tech.progress}
              link={tech.link}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
