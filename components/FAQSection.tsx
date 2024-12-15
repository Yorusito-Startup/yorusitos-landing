"use client";

import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

const FAQSection = () => {
  const { language } = useAppContext();

  const faqs = [
    {
      question: language === "es" ? "¿Qué servicios ofrecen?" : "What services do you offer?",
      answer: language === "es"
        ? "Ofrecemos diseño web, desarrollo de aplicaciones y mantenimiento."
        : "We offer web design, application development, and maintenance.",
    },
    {
      question: language === "es" ? "¿Cuánto tiempo toma un proyecto?" : "How long does a project take?",
      answer: language === "es"
        ? "Depende del alcance, pero típicamente entre 2 y 6 semanas."
        : "It depends on the scope, but typically between 2 and 6 weeks.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          {language === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </motion.h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
