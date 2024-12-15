/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // Habilita el modo oscuro mediante la clase "dark
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Para proyectos con App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Para proyectos con Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Para los componentes reutilizables
    "./src/**/*.{js,ts,jsx,tsx}", // Si estás utilizando una carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
