"use client";

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";

const TeamSection = () => {
  const { language } = useAppContext();

  const teamMembers = [
    {
      name: "Sebastián Ramírez",
      role: language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
      description:
        language === "es"
          ? "Sebastián cuenta con experiencia en desarrollo web moderno, trabajando en proyectos que abarcan desde aplicaciones empresariales hasta soluciones de comercio electrónico."
          : "Sebastián has experience in modern web development, working on projects ranging from enterprise applications to e-commerce solutions.",
      image: "/images/sebastian.jpg", // Ruta de la foto de Sebastián
      linkedin: "https://www.linkedin.com/in/sebastian-ramirez",
      github: "https://github.com/sebastian-ramirez",
      detailsPage: "/team/sebastian", // Página de detalles
    },
    {
      name: "George Galván",
      role: language === "es" ? "Ingeniero de Software" : "Software Engineer",
      description:
        language === "es"
          ? "George tiene experiencia en diseñar sistemas distribuidos, mejorando el rendimiento y la escalabilidad de aplicaciones críticas."
          : "George has experience designing distributed systems, improving the performance and scalability of critical applications.",
      image: "/images/george.jpg", // Ruta de la foto de George
      linkedin: "https://www.linkedin.com/in/george-galvan",
      github: "https://github.com/george-galvan",
      detailsPage: "/team/george", // Página de detalles
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === "es" ? "Nuestro Equipo" : "Our Team"}
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Conoce a los expertos detrás de nuestras soluciones digitales innovadoras."
              : "Meet the experts behind our innovative digital solutions."}
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-t from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fondo Decorativo */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-xl"></div>

              {/* Foto de Perfil */}
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mt-6 object-cover border-4 border-white dark:border-gray-800 shadow-lg z-10 relative"
              />

              {/* Contenido */}
              <div className="p-6 text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {member.description}
                </p>

                {/* Botones */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 transition duration-300"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href={member.detailsPage}
                    className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 transition-opacity duration-300 hover:opacity-100"
                      aria-hidden="true"
                    ></span>
                    <span className="relative z-10">
                      {language === "es" ? "Ver Más" : "Learn More"}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
