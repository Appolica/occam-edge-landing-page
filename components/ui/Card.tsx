
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-primary p-8 rounded-xl border border-brand-accent transform transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-brand-light leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
