"use client";

import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

const AboutUs = () => {
  const { language } = useAppContext();

  return (
    <section className="py-48 px-8 bg-gradient-to-tr from-blue-500 to-indigo-800 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 left-16 w-72 h-72 bg-indigo-600 dark:bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-blue-400 dark:bg-blue-600 opacity-30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative text-center z-10">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-extrabold">
            {language === "es" ? "Quiénes Somos" : "Who We Are"}
          </h2>
          <p className="mt-8 text-xl max-w-3xl mx-auto">
            {language === "es"
              ? "Nuestra misión es convertir tus ideas en soluciones digitales extraordinarias."
              : "Our mission is to turn your ideas into extraordinary digital solutions."}
          </p>
        </motion.div>
      </div>

      {/* Sección visual y narrativa */}
      <div className="relative mt-28 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto z-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl p-12 shadow-lg relative"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center rounded-full text-3xl shadow-lg">
            🚀
          </div>
          <h3 className="text-3xl font-bold mt-16 mb-6 text-center">
            {language === "es" ? "Nuestra Misión" : "Our Mission"}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Ayudamos a las empresas a crecer mediante el desarrollo de soluciones digitales personalizadas."
              : "We help businesses grow by developing tailored digital solutions."}
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl p-12 shadow-lg relative"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-indigo-500 dark:bg-indigo-400 text-white flex items-center justify-center rounded-full text-3xl shadow-lg">
            🌍
          </div>
          <h3 className="text-3xl font-bold mt-16 mb-6 text-center">
            {language === "es" ? "Nuestro Impacto" : "Our Impact"}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Hemos colaborado con empresas de diferentes industrias, alcanzando resultados significativos."
              : "We have partnered with businesses across industries, achieving meaningful results."}
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl p-12 shadow-lg relative"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-500 dark:bg-purple-400 text-white flex items-center justify-center rounded-full text-3xl shadow-lg">
            🤝
          </div>
          <h3 className="text-3xl font-bold mt-16 mb-6 text-center">
            {language === "es" ? "Nuestro Compromiso" : "Our Commitment"}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Construimos relaciones duraderas con nuestros clientes basadas en la confianza y la excelencia."
              : "We build lasting relationships with our clients based on trust and excellence."}
          </p>
        </motion.div>
      </div>

      {/* Cierre visual */}
      <div className="relative mt-24 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl max-w-4xl mx-auto text-gray-200 dark:text-gray-300"
        >
          {language === "es"
            ? "En Yorusitos, no solo desarrollamos soluciones digitales; transformamos sueños en realidades impactantes."
            : "At Yorusitos, we don't just develop digital solutions; we turn dreams into impactful realities."}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
