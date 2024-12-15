"use client";

import { FC, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ServicesSection: FC = () => {
  const { language } = useAppContext();

  const services = [
    {
      title: language === "es" ? "Diseño de Páginas Web" : "Web Design",
      description:
        language === "es"
          ? "Creamos páginas modernas, responsivas y optimizadas para SEO."
          : "We create modern, responsive, and SEO-optimized websites.",
      icon: "🌐",
      highlights: language === "es"
        ? [
            "Diseños personalizados para tu marca",
            "Incrementa tu visibilidad en línea",
            "100% adaptables a dispositivos móviles",
          ]
        : [
            "Custom designs tailored to your brand",
            "Boost your online visibility",
            "100% mobile-friendly layouts",
          ],
    },
    {
      title: language === "es" ? "Desarrollo de Aplicaciones Web" : "Web Application Development",
      description:
        language === "es"
          ? "Construimos aplicaciones escalables con tecnologías modernas."
          : "We build scalable applications with modern technologies.",
      icon: "💻",
      highlights: language === "es"
        ? [
            "Arquitectura escalable",
            "Integraciones API seguras",
            "Tecnologías de última generación",
          ]
        : [
            "Scalable architecture",
            "Secure API integrations",
            "Latest cutting-edge technologies",
          ],
    },
    {
      title: language === "es" ? "Mantenimiento y Soporte" : "Maintenance & Support",
      description:
        language === "es"
          ? "Ofrecemos soporte continuo y actualizaciones para tus proyectos."
          : "We provide continuous support and updates for your projects.",
      icon: "🛠️",
      highlights: language === "es"
        ? [
            "Soporte técnico 24/7",
            "Monitoreo de rendimiento continuo",
            "Actualizaciones periódicas",
          ]
        : [
            "24/7 technical support",
            "Continuous performance monitoring",
            "Regular updates",
          ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section className="py-48 px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Fondo de partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" }, opacity: 0.1 },
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 },
            color: { value: "#00FF00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 4, random: true },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120 },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="text-center mb-20 z-10 relative">
        <h2 className="text-6xl font-extrabold text-gray-800 dark:text-white">
          {language === "es" ? "Nuestros Servicios" : "Our Services"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
          {language === "es"
            ? "Explora nuestras soluciones personalizadas y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales."
            : "Explore our tailored solutions and see how we can help you achieve your digital goals."}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center z-10">
        {/* Indicadores */}
        <div className="absolute top-5 right-5 flex space-x-2">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-transform ${
                currentIndex === index
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Botón Anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-5 p-4 bg-blue-500 dark:bg-blue-700 text-white rounded-full hover:scale-110 transition-transform z-10"
        >
          ⬅️
        </button>

        {/* Contenedor Animado */}
        <div className="w-full h-[28rem] overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-10 relative"
            >
              {/* Icono */}
              <div className="text-6xl mb-6">{services[currentIndex].icon}</div>

              {/* Título */}
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {services[currentIndex].title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 dark:text-gray-300 text-lg text-center mb-6">
                {services[currentIndex].description}
              </p>

              {/* Beneficios Destacados */}
              <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                {services[currentIndex].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-5 p-4 bg-blue-500 dark:bg-blue-700 text-white rounded-full hover:scale-110 transition-transform z-10"
        >
          ➡️
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
