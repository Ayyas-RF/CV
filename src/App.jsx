import { useState } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Stack from "./components/Stack";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./components/css/app.css";
import Card from "./components/Card";
// import ParallaxRocket from "./components/ParallaxRocket";

const App = () => {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Navbar />
        <Jumbotron />
        <Stack />
        <Card />
      </LanguageProvider>
    </DarkModeProvider>
  );
};

export default App;
