<<<<<<< Updated upstream
// src/context/LanguageContext.js

import React, { createContext, useContext, useState } from 'react';

// Default language (English)
const defaultLanguage = 'en';
=======
import React, { createContext, useContext, useState } from "react";

// Default - English
const defaultLanguage = "en";
>>>>>>> Stashed changes

// Create a Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  // Toggle between English and Indonesian
  const toggleLanguage = lang => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
