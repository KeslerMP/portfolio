
import React from 'react';
import { Languages } from 'lucide-react';

interface HeaderProps {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Kesler Miranda Pereira
        </div>
        
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white"
        >
          <Languages size={16} />
          <span className="text-sm font-medium">
            {language === 'pt' ? '🇧🇷 PT / 🇺🇸 EN' : '🇺🇸 EN / 🇧🇷 PT'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
