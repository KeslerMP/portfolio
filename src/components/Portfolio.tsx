import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  language: 'pt' | 'en';
}

const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 4;
  
  const content = {
    pt: {
      title: "Meus Projetos",
      viewMore: "Ver mais",
      viewLess: "Ver menos",
      projects: [
        {
          name: "Albion Builds",
          description: "React, Tailwind CSS, TypeScript, Node.js, Supabase",
          tech: "Frontend performatico, site focado em builds de Albion Online",
          link: "https://www.albionbuilds.online/",
          imgLink: "/images/albion-builds.png"
        },
        {
          name: "My Basic",
          description: "React, Sass, TypeScript, Vtex",
          tech: "E-commerce completo com integração Vtex",
          link: "https://www.mybasic.com.br/",
          imgLink: "/images/my-basic.png"
        },
        {
          name: "Pretty New",
          description: "React, Sass, TypeScript, Vtex, Node.js",
          tech: "E-commerce com integração Vtex e app de controle de vendas no painel de admin",
          link: "https://www.prettynew.com.br/",
          imgLink:"/images/pretty-new.png"
        },
        {
          name: "AACD",
          description: "React, Sass, TypeScript, Vtex, Node.js",
          tech: "Site de doação para a AACD, com integração Vtex.",
          link: "https://doe.aacd.org.br/",
          imgLink: "/images/AACD.png"
        },
        {
          name: "GO3",
          description: "Liquid, CSS, JavaScript, Shopify",
          tech: "E-commerce feito na plataforma Shopify com tema padronizado",
          link: "https://www.go3.com.br/",
          imgLink:"/images/go3.png"
        },
      ]
    },
    en: {
      title: "My Projects",
      viewMore: "View more",
      viewLess: "View less",
      projects: [
        {
          name: "Albion Builds",
          description: "React, Tailwind CSS, TypeScript, Node.js, Supabase",
          tech: "High-performance frontend, site focused on Albion Online builds",
          link: "https://www.albionbuilds.online/",
          imgLink: "/images/albion-builds.png"
        },
        {
          name: "My Basic",
          description: "React, Sass, TypeScript, Vtex",
          tech: "E-commerce with complete Vtex integration",
          link: "https://www.mybasic.com.br/",
          imgLink: "/images/my-basic.png"
        },
        {
          name: "Pretty New",
          description: "React, Sass, TypeScript, Vtex, Node.js",
          tech: "E-commerce with Vtex integration and sales control app in the admin panel",
          link: "https://www.prettynew.com.br/",
          imgLink: "/images/pretty-new.png"
        },
        {
          name: "AACD",
          description: "React, Sass, TypeScript, Vtex, Node.js",
          tech: "Donation site for AACD, with Vtex integration.",
          link: "https://doe.aacd.org.br/",
          imgLink: "/images/AACD.png"
        },
        {
          name: "GO3",
          description: "Liquid, CSS, JavaScript, Shopify",
          tech: "E-commerce built on Shopify with a standardized theme",
          link: "https://www.go3.com.br/",
          imgLink: "/images/go3.png"
        },
      ]
    }
  };

  const visibleProjects = showAll 
    ? content[language].projects 
    : content[language].projects.slice(0, itemsPerPage);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {content[language].title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="h-48 rounded-lg mb-6 overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.imgLink})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </div>
              </a>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-blue-400 text-sm mb-2 font-medium">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              
              <a
                href={project.link}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Ver projeto</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {content[language].projects.length > itemsPerPage && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              {showAll ? content[language].viewLess : content[language].viewMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
