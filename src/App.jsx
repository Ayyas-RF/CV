import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Stack from "./components/Stack";
import Card from "./components/Card";
import "./components/css/app.css";

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
