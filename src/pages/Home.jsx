import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import QuoteBlock from "../components/QuoteBlock";
import ScrollButton from "../components/ScrollButton";
import KufiyaBackground from "../components/KufiyaBackground";

// Images des projets phares
import letting from "../assets/images/portfolio/letting.png";
import dashboard from "../assets/images/portfolio/dashboard.png";
import Tatreez from "../assets/images/portfolio/tatreez.png";
import GlobeTrek from "../assets/images/portfolio/globetrek.png";

const Home = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const scrollTo = (ref) =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      name="home"
      className="
        relative min-h-screen overflow-x-hidden 
        bg-[#f9f9f9] text-[#111]
        dark:bg-[#0f0f0f] dark:text-[#e5e5e5]
        transition-colors duration-500
      "
    >
      <KufiyaBackground />

      {/* 1. HERO SECTION */}
      <HeroSection onScrollDown={() => scrollTo(firstSectionRef)} />

      {/* QUOTE 1 */}
      <QuoteBlock
        text="We rise not because the world is easy, but because our hearts are strong."
        author="Stories of the People"
        accentColor="#4fa27d"
      />

      {/* SECTION 1 : Orange County Lettings (Python / Django / Docker / CI-CD) */}
      <div ref={firstSectionRef} className="pt-4">
        <Section
          imageUrl={letting}
          title="Orange County Lettings"
          content="Refonte complète d'un monolithe vers une architecture modulaire Django découplée. Pipeline CI/CD automatisé avec GitHub Actions, conteneurisation Docker multi-plateforme, couverture de tests Pytest > 80%, tracking d'erreurs en production avec Sentry et documentation technique Sphinx. Déployé sur Render."
          githubLink="https://github.com/samarkand-fr/Python-OC-Lettings-FR"
          siteLink="https://python-oc-lettings-fr-omgd.onrender.com"
          githubText="GITHUB"
          demoText="LIVE DEMO"
          className="
            border-t 
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-[#fafafa] dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      {/* QUOTE 2 */}
      <QuoteBlock
        text="Even in the darkest times, our stories carry the light of resilience and hope."
        author="Voices for Freedom"
        accentColor="#b85757"
      />

      {/* SECTION 2 : Epic Events CRM (PostgreSQL / SQLAlchemy / RBAC / Argon2id) */}
      <div ref={secondSectionRef} className="pt-4 pb-8">
        <Section
          imageUrl={dashboard}
          title="Epic Events CRM"
          content="Système CRM sécurisé d'entreprise pour la gestion commerciale et logistique d'événements. Modélisation relationnelle avancée sur PostgreSQL 16 avec SQLAlchemy 2.0+, contrôle d'accès granulaire basé sur les rôles (RBAC), hachage sécurisé Argon2id, gestion de sessions par tokens JWT et interface CLI interactive développée avec Click et Rich."
          githubLink="https://github.com/samarkand-fr/CRM-epic-events"
          siteLink="https://github.com/samarkand-fr/CRM-epic-events#readme"
          githubText="GITHUB"
          demoText="DOCS & CLI"
          reverse
          className="
            border-y
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-white dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      {/* QUOTE 3 */}
      <QuoteBlock
        text="Where words are forbidden, stories persist."
        author="Palestinian Proverb"
        accentColor="#4fa27d"
      />

      {/* SECTION 3 : Tatreez & Kufiye Project (Heritage & Web App) */}
      <div className="pt-4 pb-8">
        <Section
          imageUrl={Tatreez}
          title="Tatreez & Kufiye Project"
          content="Application web culturelle interactive célébrant la géométrie traditionnelle de la broderie palestinienne (Tatreez) et le symbolisme des motifs du Keffieh. Une interface épurée mariant géométrie culturelle, animations fluides et design réactif moderne."
          githubLink="https://github.com/samarkand-fr/tatreez"
          siteLink="https://tatreez.netlify.app/"
          githubText="GITHUB"
          demoText="LIVE DEMO"
          className="
            border-y
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-[#fafafa] dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      {/* QUOTE 4 */}
      <QuoteBlock
        text="Our narratives are our resistance; every story is a step toward freedom."
        author="Inspired by Generations of Hope"
        accentColor="#b85757"
      />

      {/* SECTION 4 : GlobeTrek (TypeScript & React) */}
      <div className="pt-4 pb-8">
        <Section
          imageUrl={GlobeTrek}
          title="GlobeTrek"
          content="Plateforme moderne de carnet de voyage conçue en TypeScript et React. Rendu ultra-rapide, typage strict, architecture modulaire et animations subtiles inspirées des paysages méditerranéens."
          githubLink="https://github.com/samarkand-fr/GlobeTrek"
          siteLink="https://dina-globetrek.netlify.app/"
          githubText="GITHUB"
          demoText="LIVE DEMO"
          reverse
          className="
            border-b
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-white dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      {/* QUOTE 5 */}
      <QuoteBlock
        text="Code with purpose, engineer with resilience."
        author="Dina Jannoun — Développeuse Python"
        accentColor="#4fa27d"
      />

      {/* CALL TO ACTION : EXPLORE FULL PORTFOLIO */}
      <section className="py-20 px-6 relative overflow-hidden text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div
            className="h-1 w-20 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#4fa27d,#b85757)" }}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] dark:text-white">
            Découvrez Tous Mes Projets & Réalisations
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-100 font-medium leading-relaxed max-w-2xl mx-auto">
            SoftDesk RESTful API (DRF & OWASP), AlgoInvest (Knapsack 0/1 & Big-O),
            Chess Tournaments Manager (MVC hors-ligne), WealthHealth (React & Redux Toolkit) et bien plus.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Link
              to="/portfolio"
              className="
                inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white shadow-xl
                hover:scale-105 transition-all
              "
              style={{
                background: "linear-gradient(90deg,#4fa27d,#b85757)",
                boxShadow: "0 6px 20px rgba(79,162,125,0.35)",
              }}
            >
              <span>Voir le Portfolio Complet (10 projets)</span>
              <MdOutlineKeyboardArrowRight size={22} />
            </Link>
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold
                border border-[#4fa27d]/40 text-[#111] dark:text-white
                hover:bg-[#4fa27d]/15 transition-all
              "
            >
              Me Contacter
            </Link>
          </div>
        </motion.div>
      </section>

      <ScrollButton />
    </div>
  );
};

export default Home;