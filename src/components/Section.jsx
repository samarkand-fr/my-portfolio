import React from "react";
import KufiyaBackground from "./KufiyaBackground";

const Section = ({
  refProp,
  imageUrl,
  className,
  title,
  content,
  githubLink,
  siteLink,
  reverse = false,
  githubText = "GITHUB",
  demoText = "LIVE DEMO",
}) => {
  return (
    <section
      ref={refProp}
      className={`
        min-h-screen flex items-center justify-center py-16 px-6 
        relative overflow-hidden transition-colors duration-500
        ${className}
      `}
    >
      <KufiyaBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-12 
            ${reverse ? "lg:flex-row-reverse" : ""}
          `}
        >
          {/* IMAGE SECTION */}
          <div className="lg:w-1/2 w-full relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded-xl transform transition-all duration-700 group-hover:scale-[1.05]"
            />

            {/* Overlay applied only to image */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent 0 18px,
                    rgba(0,0,0,0.08) 18px 20px
                  )
                `,
              }}
            />

            {/* Glow and reveals */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(79,162,125,0.22), rgba(184,87,87,0.18), transparent 70%)",
              }}
            ></div>
          </div>

          {/* TEXT SECTION */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6 text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors duration-500">
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{
                background: "linear-gradient(90deg,#4fa27d,#b85757)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#333] dark:text-[#cfcfcf]">
              {content}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md font-semibold text-white dark:text-[#0f0f0f] transition-transform duration-300"
                style={{
                  background: "linear-gradient(90deg,#4fa27d,#b85757)",
                  boxShadow: "0 6px 18px rgba(79,162,125,0.22)",
                }}
              >
                {githubText}
              </a>
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md font-semibold transition-all duration-300 border border-black/20 dark:border-white/20 text-[#1a1a1a] dark:text-[#e5e5e5] hover:bg-[#4fa27d] hover:text-white"
              >
                {demoText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
