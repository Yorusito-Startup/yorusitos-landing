"use client";

import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

const CallToAction = () => {
  const { language } = useAppContext();

  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-6">
          {language === "es" ? "¿Listo para comenzar?" : "Ready to get started?"}
        </h2>
        <p className="text-lg mb-8">
          {language === "es"
            ? "Transforma tus ideas en realidades con nuestros servicios digitales."
            : "Transform your ideas into realities with our digital services."}
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          {language === "es" ? "Contáctanos" : "Contact Us"}
        </a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
