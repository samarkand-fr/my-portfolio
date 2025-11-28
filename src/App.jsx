import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import KufiyaBackground from "./components/KufiyaBackground";

import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import CV from "./components/Cv";

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Full-screen relative container */}
        <div className="relative min-h-screen">
          {/* Global animated background */}
          <KufiyaBackground />

          {/* All app content */}
          <div className="relative z-10 transition-colors duration-300">
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
