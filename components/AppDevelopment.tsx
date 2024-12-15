"use client";

import { useAppContext } from "@/context/AppContext";

const AppDevelopment = () => {
  const { language } = useAppContext();

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          {language === "es" ? "Desarrollo de Apps" : "App Development"}
        </h2>
        <p className="text-lg">
          {language === "es"
            ? "Construimos aplicaciones escalables con tecnologías modernas."
            : "We build scalable applications using modern technologies."}
        </p>
      </div>
    </section>
  );
};

export default AppDevelopment;
