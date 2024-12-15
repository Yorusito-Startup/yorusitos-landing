"use client";

import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext"; // Importa el contexto global

export default function Hero() {
  const { language, isDarkMode } = useAppContext(); // Consumo del contexto

  return (
    <div
      className={`relative ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900"
          : "bg-gradient-to-r from-blue-500 to-purple-600"
      } text-white h-screen px-10 overflow-hidden`}
    >
      {/* Fondo Suave Animado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute ${
            isDarkMode ? "bg-gray-500" : "bg-blue-300"
          } rounded-full opacity-20`}
          style={{ width: 300, height: 300 }}
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute ${
            isDarkMode ? "bg-gray-600" : "bg-purple-300"
          } rounded-full opacity-20`}
          style={{ width: 400, height: 400 }}
          animate={{
            x: [-100, 0, -100],
            y: [100, 0, 100],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          {language === "es" ? "¡Impulsa tu negocio con " : "Boost your business with "}
          <span className="text-yellow-300">Yorusitos!</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          {language === "es"
            ? "Diseñamos y desarrollamos "
            : "We design and develop "}
          <span className="font-bold">
            {language === "es" ? "páginas web" : "websites"}
          </span>{" "}
          {language === "es" ? "y " : "and "}
          <span className="font-bold">
            {language === "es" ? "aplicaciones espectaculares" : "amazing applications"}
          </span>{" "}
          {language === "es"
            ? "que llevarán tu empresa al siguiente nivel."
            : "to take your business to the next level."}
        </p>
      </div>
    </div>
  );
}
