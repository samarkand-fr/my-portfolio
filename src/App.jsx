import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import CV from "./components/Cv";
import KufiyaBackground from "./components/KufiyaBackground";
import "./index.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 selection:bg-[#ff2b4f] selection:text-white ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-[#e5e5e5]"
          : "bg-[#f9f9f9] text-[#111]"
      }`}
    >
      {/* Global Kufiya Background across all pages */}
      <KufiyaBackground className="fixed inset-0" />

      {/* Main Application Container */}
      <div className="relative z-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        <Footer />
      </div>

      <SocialLinks />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
