// src/context/AppContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

// Define el tipo del contexto
interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  changeLanguage: (lang: string) => void;
}

// Crea el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Proveedor del contexto
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  // Alternar modo oscuro/claro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  // Cambiar idioma
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, language, changeLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};
