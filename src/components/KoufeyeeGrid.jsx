import React from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Composant de motif vectoriel Koufeyee (Keffieh traditionnel palestinien)
 * Reproduit la géométrie caractéristique du filet de pêche (fishnet)
 * avec les tons vert olive (#4fa27d / #00ff88) et rouge (#b85757 / #ff2b4f).
 * S'adapte dynamiquement en mode sombre et en mode clair.
 */
const KoufeyeeGrid = ({ className = "", opacity = "opacity-35", showAccents = true }) => {
  const { isDark } = useTheme();

  // Couleurs palestiniennes adaptées au thème
  const strokeColor = isDark
    ? "rgba(79, 162, 125, 0.18)"
    : "rgba(79, 162, 125, 0.22)";
  const accentRed = isDark
    ? "rgba(184, 87, 87, 0.35)"
    : "rgba(184, 87, 87, 0.4)";
  const dotColor = isDark
    ? "rgba(0, 255, 136, 0.4)"
    : "rgba(79, 162, 125, 0.5)";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-500 ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Motif géométrique central Koufeyee */}
          <pattern
            id="koufeyee-mesh"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            {/* Lignes diagonales principales formant le maillage losange */}
            <line
              x1="0"
              y1="0"
              x2="56"
              y2="56"
              stroke={strokeColor}
              strokeWidth="1.2"
            />
            <line
              x1="56"
              y1="0"
              x2="0"
              y2="56"
              stroke={strokeColor}
              strokeWidth="1.2"
            />

            {/* Deuxième trame interne entrelacée en tirets */}
            <path
              d="M28 0 L56 28 L28 56 L0 28 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.8"
              strokeDasharray="4 3"
            />

            {/* Noeuds d'intersection traditionnels */}
            <circle cx="28" cy="28" r="1.6" fill={dotColor} />
            <circle cx="0" cy="0" r="1.6" fill={dotColor} />
            <circle cx="56" cy="0" r="1.6" fill={dotColor} />
            <circle cx="0" cy="56" r="1.6" fill={dotColor} />
            <circle cx="56" cy="56" r="1.6" fill={dotColor} />

            {/* Accents rouges caractéristiques aux centres */}
            {showAccents && (
              <>
                <line
                  x1="25"
                  y1="28"
                  x2="31"
                  y2="28"
                  stroke={accentRed}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="28"
                  y1="25"
                  x2="28"
                  y2="31"
                  stroke={accentRed}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </>
            )}
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#koufeyee-mesh)" />
      </svg>
    </div>
  );
};

export default KoufeyeeGrid;
