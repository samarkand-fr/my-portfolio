import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaRocket, FaTasks } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";

const pillars = [
  {
    icon: <FaCode className="text-[#4fa27d]" size={22} />,
    title: "Architecture & Code Propre",
    desc: "Découplage modulaire Django, respect strict des normes PEP 8 avec Flake8, typage et architecture logicielle maintenable.",
  },
  {
    icon: <FaShieldAlt className="text-[#b85757]" size={22} />,
    title: "Sécurité & Robustesse",
    desc: "Contrôle d'accès basé sur les rôles (RBAC), hachage sécurisé Argon2id, tokens JWT et conformité européenne RGPD.",
  },
  {
    icon: <FaRocket className="text-[#4fa27d]" size={22} />,
    title: "Performance & Optimisation",
    desc: "Élimination des requêtes N+1, programmation dynamique (sac à dos 0/1), profiling mémoire et calculs avec NumPy.",
  },
  {
    icon: <FaTasks className="text-[#b85757]" size={22} />,
    title: "Automatisation CI/CD & Tests",
    desc: "Suites de tests unitaires et d'intégration Pytest (>80% couverture), conteneurs Docker et pipelines GitHub Actions.",
  },
];

const About = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div
      name="about"
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-[#e5e5e5]"
          : "bg-white text-[#0f0f0f]"
      }`}
    >
      <KufiyaBackground />

      <div className="relative max-w-4xl w-full z-10">
        {/* TITRE PRINCIPAL */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="pb-8 text-center mt-8 md:mt-12"
        >
          <h2
            className="
              text-4xl md:text-5xl font-bold inline-block border-b-4
              border-[#4fa27d] 
              dark:border-[#b85757]
              pb-2
            "
          >
            About Me
          </h2>
        </motion.div>

        {/* PARAGRAPHE 1 : PROFIL & PARCOURS */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="
            text-base md:text-lg mb-5 leading-relaxed text-center max-w-3xl mx-auto
            text-gray-800 dark:text-gray-100 font-medium
          "
        >
          Développeuse logicielle spécialisée en <strong className="font-semibold text-[#111] dark:text-white">Python et ingénierie backend</strong>.
          Après avoir consolidé une solide expertise sur l'écosystème web moderne et les composants réactifs (React 18, TypeScript, Tailwind CSS),
          j'ai orienté mes compétences vers la conception d'architectures applicatives robustes, la modélisation de bases relationnelles (PostgreSQL 16, SQLAlchemy 2.0+) et l'automatisation des déploiements conteneurisés avec Docker.
        </motion.p>

        {/* PARAGRAPHE 2 : DÉMARCHE QUALITÉ */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="
            text-base md:text-lg mb-8 leading-relaxed text-center max-w-3xl mx-auto
            text-gray-800 dark:text-gray-100 font-medium
          "
        >
          Ma démarche technique est guidée par l'exigence logicielle : découpage modulaire, respect rigoureux des conventions PEP 8 validé par Flake8,
          couverture de tests automatisés avec <strong className="font-semibold text-[#111] dark:text-white">Pytest (&gt; 80%)</strong>, sécurisation proactive selon les standards <strong className="font-semibold text-[#111] dark:text-white">OWASP</strong> et intégration d'un audit trail en production avec <strong className="font-semibold text-[#111] dark:text-white">Sentry</strong>.
        </motion.p>

        {/* GRILLE DES 4 PILIERS TECHNIQUES */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`
                p-5 rounded-xl border transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-[#141414]/90 border-white/10 hover:border-[#4fa27d]/50 hover:shadow-[0_0_15px_rgba(79,162,125,0.2)]"
                    : "bg-gray-50/90 border-gray-200 hover:border-[#4fa27d]/50 hover:shadow-md"
                }
              `}
            >
              <div className="mb-2.5">{pillar.icon}</div>
              <h3 className="font-bold text-base text-[#111] dark:text-white mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-100 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* BOUTONS D'ACTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={4}
          className="text-center flex flex-wrap gap-4 justify-center pt-4"
        >
          <Link
            to="/cv"
            className="
              inline-flex items-center px-7 py-3 rounded-md font-semibold 
              text-white shadow-lg hover:scale-105 transition-all
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(79,162,125,0.95), rgba(184,87,87,0.95))",
              boxShadow: "0 6px 18px rgba(79,162,125,0.25)",
            }}
          >
            View My CV
            <span className="ml-2 transition-transform duration-300 group-hover:rotate-90">
              <MdOutlineKeyboardArrowRight size={24} />
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="
              inline-flex items-center px-7 py-3 rounded-md font-semibold 
              border border-[#4fa27d]/40 text-[#111] dark:text-white
              hover:bg-[#4fa27d]/10 transition-all
            "
          >
            Explore Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
