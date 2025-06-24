
import React from 'react';

interface BioProps {
  language: 'pt' | 'en';
}

const Bio: React.FC<BioProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Sobre Mim",
      text: "Sou um desenvolvedor apaixonado por criar soluções web rápidas, responsivas e escaláveis. Tenho experiência em projetos com React, Node.js, TypeScript, Next.js e bancos de dados relacionais e NoSQL. Gosto de transformar ideias em código funcional com foco em performance e experiência do usuário."
    },
    en: {
      title: "About Me",
      text: "I'm a developer passionate about creating fast, responsive and scalable web solutions. I have experience in projects with React, Node.js, TypeScript, Next.js and relational and NoSQL databases. I enjoy transforming ideas into functional code with focus on performance and user experience."
    }
  };

  return (
    <section className="py-20 bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {content[language].text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
