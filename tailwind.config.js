/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        /* Modern Palestinian Soft Theme */
        palestineRedSoft: "#b85757",
        palestineGreenSoft: "#4fa27d",
        palestineWhiteSoft: "#e5e5e5",
        palestineBlackMatte: "#0f0f0f",

        /* Neon Accents (used for glow UI) */
        neonRed: "#ff4d6d",
        neonGreen: "#00ffbf",
        neonMint: "#9efac9",

        /* Compatibility tokens */
        rust: "#b85757",
        vanilla: "#D3C2B0",
        cement: "#84755F",
        cementClaire: "#aca1a3",
      },

      fontFamily: {
        signature: ["Great Vibes", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        greatvibes: ["Great Vibes", "cursive"],
        grotesk: ["Space Grotesk", "Raleway", "sans-serif"],
      },

      boxShadow: {
        glowRed: "0 0 12px #b85757",
        glowGreen: "0 0 12px #4fa27d",
        glowSoft: "0 0 18px rgba(255,255,255,0.12)",
      },
    },
  },

  plugins: [],
};
