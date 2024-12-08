<<<<<<< Updated upstream
import { useState } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Stack from "./components/Stack";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./components/css/app.css";
import Card from "./components/Card";
// import ParallaxRocket from "./components/ParallaxRocket";
=======
import { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Stack from "./components/Stack";
import Card from "./components/Card";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Blockquote from "./components/Blockquote";
import "./components/css/app.css";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> Stashed changes

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Navbar />
        <Jumbotron />
        <Stack />
        <Card />
        <Experience />
        <Blockquote />
        <Footer />
      </LanguageProvider>
    </DarkModeProvider>
  );
};

export default App;
