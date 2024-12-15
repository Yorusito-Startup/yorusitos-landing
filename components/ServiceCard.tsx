import { FC } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 opacity-30 pointer-events-none"></div>
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="bg-blue-600 dark:bg-blue-500 text-white p-5 rounded-full shadow-md mb-6">
          <span className="text-5xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
