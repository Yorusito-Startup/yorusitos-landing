"use client";

import { use } from "react"; // React hook para manejar promesas
import { useAppContext } from "@/context/AppContext";
import { notFound } from "next/navigation";

// Información del equipo
const teamData = {
  sebastian: {
    name: "Sebastián Ramírez",
    role: "Full Stack Developer / Desarrollador Full Stack",
    description: {
      en: "Sebastián has experience in modern web development, working on projects ranging from enterprise applications to e-commerce solutions.",
      es: "Sebastián cuenta con experiencia en desarrollo web moderno, trabajando en proyectos que abarcan desde aplicaciones empresariales hasta soluciones de comercio electrónico.",
    },
    image: "/images/sebastian.jpg",
  },
  george: {
    name: "George Galván",
    role: "Software Engineer / Ingeniero de Software",
    description: {
      en: "George has experience designing distributed systems, improving the performance and scalability of critical applications.",
      es: "George tiene experiencia en diseñar sistemas distribuidos, mejorando el rendimiento y la escalabilidad de aplicaciones críticas.",
    },
    image: "/images/george.jpg",
  },
};

export default function TeamMemberPage({ params }: { params: Promise<{ name: string }> }) {
  const { language } = useAppContext();

  // Desempaqueta `params` como promesa
  const { name } = use(params);

  // Encuentra al miembro del equipo
  const member = teamData[name as keyof typeof teamData];

  // Si no se encuentra, redirige a 404
  if (!member) {
    notFound();
  }

  // Renderiza la página del miembro
  return (
    <section className="py-24 px-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">{member.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {language === "es" ? member.role.split(" / ")[1] : member.role.split(" / ")[0]}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === "es" ? member.description.es : member.description.en}
        </p>
      </div>
    </section>
  );
}
