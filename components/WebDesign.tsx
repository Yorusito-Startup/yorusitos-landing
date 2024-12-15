"use client";

import { useAppContext } from "@/context/AppContext";

const WebDesign = () => {
  const { language } = useAppContext();

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-800 dark:to-blue-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          {language === "es" ? "Diseño Web" : "Web Design"}
        </h2>
        <p className="text-lg">
          {language === "es"
            ? "Creamos sitios web modernos, responsivos y optimizados para SEO."
            : "We create modern, responsive, and SEO-optimized websites."}
        </p>
      </div>
    </section>
  );
};

export default WebDesign;
