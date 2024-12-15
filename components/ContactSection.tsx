"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm"; // Importa el formulario de contacto
import { useAppContext } from "@/context/AppContext"; // Contexto para idioma

const ContactSection = () => {
  const { language } = useAppContext(); // Obtenemos el idioma

  return (
    <section className="py-48 px-8 bg-gray-100 dark:bg-gray-800 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 pointer-events-none"></div>
      
      {/* Contenido del encabezado */}
      <div className="relative max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            {language === "es" ? "Contáctanos" : "Contact Us"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {language === "es"
              ? "Estamos aquí para ayudarte a alcanzar tus objetivos digitales."
              : "We are here to help you achieve your digital goals."}
          </p>
        </motion.div>
      </div>

      {/* Formulario */}
      <div className="relative max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
