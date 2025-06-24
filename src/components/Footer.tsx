
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
  language: 'pt' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    pt: {
      contact: "Vamos trabalhar juntos?",
      email: "Entre em contato",
      rights: "Todos os direitos reservados"
    },
    en: {
      contact: "Let's work together?",
      email: "Get in touch",
      rights: "All rights reserved"
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">{content[language].contact}</h3>
          <a
            href="mailto:kesler@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            {content[language].email}
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://linkedin.com/in/kesler-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
          >
            <Linkedin className="text-white" size={20} />
          </a>
          <a
            href="https://github.com/kesler-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
          >
            <Github className="text-white" size={20} />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Kesler Miranda Pereira. {content[language].rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
