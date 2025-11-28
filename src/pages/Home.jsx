import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SocialLinks from "../components/SocialLinks";
import Section from "../components/Section";
import ScrollButton from "../components/ScrollButton";
import NavBar from "../components/NavBar";
import QuoteBlock from "../components/QuoteBlock";

import Tatreez from "../assets/images/portfolio/tatreez.png";
import Glowup from "../assets/images/portfolio/glowup.png";
import GlobeTrek from "../assets/images/portfolio/globetrek.png";

const Home = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const scrollTo = (ref) =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="
        min-h-screen overflow-x-hidden 
        bg-[#f9f9f9] text-[#111]
        dark:bg-[#0f0f0f] dark:text-[#e5e5e5]
        transition-colors duration-500
      "
    >
      <NavBar />
      <SocialLinks />

      <HeroSection onScrollDown={() => scrollTo(firstSectionRef)} />

      <QuoteBlock
        text="We rise not because the world is easy, but because our hearts are strong."
        author="Stories of the People"
        accentColor="#4fa27d"
      />
      {/* SECTION 1 */}
      <div ref={firstSectionRef} className="pt-6">
        <Section
          imageUrl={Tatreez}
          title="Tatreez Project"
          content="A cultural web app blending modern UI with tatreez-inspired geometry."
          githubLink="https://github.com/samarkand-fr/tatreez"
          siteLink="https://tatreez.netlify.app/"
          className="
            border-t 
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-[#fafafa] dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      <QuoteBlock
        text="Even in the darkest times, our stories carry the light of resilience and hope."
        author="Voices for Freedom"
        accentColor="#b85757"
      />

      {/* SECTION 2 */}
      <div ref={secondSectionRef} className="pt-4 pb-8">
        <Section
          imageUrl={Glowup}
          title="GlowUp"
          content="A modern React experience with soft color accents and elegant motion."
          githubLink="https://github.com/samarkand-fr/glowup"
          siteLink="https://glowup-fk3w.vercel.app/"
          reverse
          className="
            border-y
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-white dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      <QuoteBlock
        text="Where words are forbidden, stories persist."
        author="proverb"
        accentColor="#4fa27d"
      />

      {/* SECTION 3 */}
      <div className="pt-4 pb-8">
        <Section
          imageUrl={GlobeTrek}
          title="GlobeTrek"
          content="A modern travel blog built with TypeScript."
          githubLink="https://github.com/samarkand-fr/GlobeTrek"
          siteLink="https://dina-globetrek.netlify.app/"
          reverse
          className="
            border-b
            border-[#e0e0e0] dark:border-[#1b1b1b]
            bg-white dark:bg-[#0f0f0f]
            transition-colors duration-500
          "
        />
      </div>

      <QuoteBlock
        text="Our narratives are our resistance; every story is a step toward freedom."
        author="Inspired by Generations of Hope"
        accentColor="#b85757"
      />

      <ScrollButton />
    </div>
  );
};

export default Home;
