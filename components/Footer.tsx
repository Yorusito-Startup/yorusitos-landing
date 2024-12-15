"use client";

import { useAppContext } from "@/context/AppContext"; // Para idioma y modo oscuro
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const { language, isDarkMode } = useAppContext();

  return (
    <footer
      className={`py-10 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Redes sociales y créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h3
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              } mb-2`}
            >
              Yorusitos
            </h3>
            <p className="text-sm">
              {language === "es"
                ? `© ${new Date().getFullYear()} Yorusitos. Todos los derechos reservados.`
                : `© ${new Date().getFullYear()} Yorusitos. All rights reserved.`}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-blue-500 transition duration-300`}
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-blue-500 transition duration-300`}
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-blue-500 transition duration-300`}
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              } hover:text-blue-500 transition duration-300`}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          <div>
            <h4
              className={`font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "es" ? "Sobre Nosotros" : "About Us"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Nuestra Historia" : "Our History"}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Equipo" : "Team"}
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Valores" : "Values"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "es" ? "Servicios" : "Services"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#web-design"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Diseño Web" : "Web Design"}
                </a>
              </li>
              <li>
                <a
                  href="#app-development"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es"
                    ? "Desarrollo de Apps"
                    : "App Development"}
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Soporte" : "Support"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "es" ? "Recursos" : "Resources"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#faq"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Preguntas Frecuentes" : "FAQ"}
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Blog" : "Blog"}
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Guías" : "Guides"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {language === "es" ? "Contáctanos" : "Contact Us"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es"
                    ? "Soporte Técnico"
                    : "Technical Support"}
                </a>
              </li>
              <li>
                <a
                  href="#quote"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es"
                    ? "Solicitar Cotización"
                    : "Request a Quote"}
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className={`hover:underline ${
                    isDarkMode ? "hover:text-white" : "hover:text-gray-600"
                  } transition duration-300`}
                >
                  {language === "es" ? "Enviar Feedback" : "Send Feedback"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-12 text-sm">
          <p>
            {language === "es"
              ? "Hecho con ❤️ por estudiantes peruanos de Ingeniería de Software."
              : "Made with ❤️ by Peruvian Software Engineering students."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
