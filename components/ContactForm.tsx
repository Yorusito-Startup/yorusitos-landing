"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext"; // Contexto para idioma

export default function ContactForm() {
  const { language } = useAppContext(); // Acceso al idioma global
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      language === "es"
        ? "¡Mensaje enviado con éxito!"
        : "Message sent successfully!"
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-500 opacity-10 blur-xl pointer-events-none"></div>

      {/* Encabezado dinámico */}
      <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        {formData.name
          ? `${language === "es" ? `Hola, ${formData.name}!` : `Hello, ${formData.name}!`}`
          : `${language === "es" ? "Escríbenos" : "Get in Touch"}`}
      </h3>

      {/* Campos de entrada */}
      <div className="space-y-6">
        <div className="relative">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            {language === "es" ? "Nombre" : "Name"}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "es" ? "Tu nombre" : "Your name"}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            {language === "es" ? "Correo Electrónico" : "Email"}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === "es" ? "Tu correo" : "Your email"}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            {language === "es" ? "Teléfono" : "Phone"}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={language === "es" ? "Tu teléfono" : "Your phone"}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            {language === "es" ? "Categoría del Mensaje" : "Message Category"}
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              {language === "es" ? "Selecciona una opción" : "Select an option"}
            </option>
            <option value="support">
              {language === "es" ? "Soporte" : "Support"}
            </option>
            <option value="quote">
              {language === "es" ? "Presupuesto" : "Quote"}
            </option>
            <option value="general">
              {language === "es" ? "Preguntas Generales" : "General Questions"}
            </option>
          </select>
        </div>
        <div className="relative">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            {language === "es" ? "Mensaje" : "Message"}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={language === "es" ? "Escribe tu mensaje aquí" : "Write your message here"}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          ></textarea>
        </div>
      </div>

      {/* Botón de envío */}
      <motion.button
        type="submit"
        className="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
        whileHover={{ scale: 1.05 }}
      >
        {formData.name
          ? `${language === "es" ? `Enviar como ${formData.name}` : `Send as ${formData.name}`}`
          : `${language === "es" ? "Enviar Mensaje" : "Send Message"}`}
      </motion.button>
    </motion.form>
  );
}
