
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  language: 'pt' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    pt: {
      greeting: "Olá, sou",
      role: "Desenvolvedor Fullstack",
      specialization: "especializado em React e tecnologias modernas",
      cta: "Conheça meu trabalho"
    },
    en: {
      greeting: "Hello, I'm",
      role: "Fullstack Developer",
      specialization: "specialized in React and modern technologies",
      cta: "Explore my work"
    }
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles with parallax */}
        <div className="parallax absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="parallax absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Additional parallax elements */}
        <div className="parallax absolute top-20 left-20 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
        <div className="parallax absolute bottom-32 right-32 w-48 h-48 bg-purple-400/5 rounded-full blur-2xl"></div>
        <div className="parallax absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="parallax absolute bottom-1/3 left-1/4 w-36 h-36 bg-indigo-400/8 rounded-full blur-xl"></div>
        
        {/* Geometric shapes with parallax */}
        <div className="parallax absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rotate-45 blur-sm"></div>
        <div className="parallax absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rotate-12 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-lg text-gray-300 mb-4">{content[language].greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kesler Miranda Pereira
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {content[language].role}
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {content[language].specialization}
          </p>
          
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span>{content[language].cta}</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
      
      {/* Enhanced parallax image placeholder */}
      <div className="parallax absolute right-10 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
