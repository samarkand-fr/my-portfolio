import React from "react";
import { motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";
import HeroImage from "../assets/images/dinahero.png";
import KufiyaBackground from "./KufiyaBackground";

const HeroSection = ({ onScrollDown }) => {
  const heroLeftVariants = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const floatingImage = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <header className="relative flex items-center justify-center min-h-[92vh] px-6 md:px-12 pt-20 pb-12">
      <div className="container mx-auto max-w-6xl z-10">
        <KufiyaBackground />
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="lg:w-1/2 w-full flex gap-6"
            variants={heroLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hidden md:flex flex-col items-center select-none">
              <span
                className="text-xs tracking-[0.35em] opacity-90 font-semibold"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                FRONTEND
              </span>
              <span
                className="text-xs tracking-[0.35em] opacity-90 font-semibold mt-3"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                DEVELOPER
              </span>
            </div>

            <div className="max-w-xl space-y-5">
              <div
                className="h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg,#b85757,#4fa27d)" }}
              />
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Crafting delightful user experiences
              </h1>
              <p className="text-lg text-[#6b6b6b] dark:text-[#cfcfcf] leading-relaxed">
                Modern, calm, accessible UI with subtle motion and cultural
                pattern accents.
              </p>

              <button
                onClick={onScrollDown}
                className="relative px-6 py-3 font-medium rounded-lg text-[#0f0f0f] shadow-lg overflow-hidden group"
                style={{ background: "linear-gradient(90deg,#4fa27d,#b85757)" }}
              >
                <span className="relative z-10">View Work</span>
                <span
                  className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-white/20"
                  style={{
                    maskImage:
                      "linear-gradient(120deg, transparent 0%, white 50%, transparent 100%)",
                  }}
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <motion.div
              variants={floatingImage}
              animate="animate"
              className="relative rounded-2xl overflow-hidden group"
              style={{
                border: "2px solid rgba(229,229,229,0.08)",
                boxShadow: "0 0 22px rgba(79,162,125,0.18)",
              }}
            >
              <span
                className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[150%] transition-transform duration-[1600ms] ease-out bg-white/12 pointer-events-none"
                style={{
                  maskImage:
                    "linear-gradient(115deg, transparent 0%, white 50%, transparent 100%)",
                }}
              />
              {/* shimmer */}
              <span
                className="
                  absolute inset-0 translate-x-[-120%] group-hover:translate-x-[150%]
                  transition-transform duration-[1600ms] ease-out
                  bg-white/15 pointer-events-none
                "
                style={{
                  maskImage:
                    "linear-gradient(115deg, transparent 0%, white 50%, transparent 100%)",
                }}
              ></span>
              <img
                src={HeroImage}
                alt="Dina"
                className="w-full max-w-lg md:max-w-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className=" absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full  hover:scale-110            
            hover:shadow-[0_0_12px_rgba(79,162,125,0.55)]"
        style={{
          background: "rgba(79,162,125,0.10)",
          border: "1px solid rgba(79,162,125,0.25)",
        }}
      >
        <RiArrowDownSLine size={28} />
      </button>
    </header>
  );
};

export default HeroSection;
