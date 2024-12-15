"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import Image from "next/image";

// Cargar la fuente Inter desde Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Header() {
  const { isDarkMode, toggleDarkMode, language, changeLanguage } = useAppContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white dark:from-gray-800 dark:to-gray-900 transition-all duration-500 ${inter.variable}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider hover:text-yellow-300 transition-all">
          Yorusitos
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
              >
                {language === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
              >
                {language === "es" ? "Servicios" : "Services"}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
              >
                {language === "es" ? "Nosotros" : "About Us"}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
              >
                {language === "es" ? "Contacto" : "Contact"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Opciones */}
        <div className="flex items-center space-x-4">
          {/* Alternar Modo Oscuro */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110 transition-all"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* Selector de Idioma Tipo Interruptor */}
          <button
            onClick={() => changeLanguage(language === "es" ? "en" : "es")}
            className="p-2 rounded-full hover:scale-110 transition-all bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <Image
              src={language === "es" ? "/flags/gb.png" : "/flags/es.png"}
              alt={language === "es" ? "English" : "Español"}
              width={24}
              height={24}
              className="rounded-full"
            />
          </button>

          {/* Botón del Menú Móvil */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110 transition-all"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-500 dark:bg-gray-800 text-white dark:text-gray-200 transition-all">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                href="/"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                {language === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                {language === "es" ? "Servicios" : "Services"}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                {language === "es" ? "Nosotros" : "About Us"}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-yellow-300 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                {language === "es" ? "Contacto" : "Contact"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
