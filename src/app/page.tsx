"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero"; // Hero Component
import AboutUs from "../../components/AboutUs"; // Componente modular
import ServicesSection from "../../components/ServicesSection"; // Componente modular para servicios
import ContactSection from "../../components/ContactSection"; // Nuevo componente de contacto
import FAQSection from "../../components/FAQSection";
import CallToAction from "../../components/CallToAction";
import TeamSection from "../../components/TeamSection";

export default function Services() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-all">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutUs />
      <TeamSection />
      <ContactSection /> {/* Aquí se incluye la nueva sección modular */}
      <FAQSection /> {/* Preguntas Frecuentes */}
      <CallToAction /> {/* Llamado a la acción */}
      <Footer />
    </div>
  );
}
