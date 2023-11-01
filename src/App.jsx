import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import CV from "./components/Cv";

function App() {
  return (
    <Router>
      <div>
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
        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;
