import { useState } from 'react';
import logo from '../assets/piazalogo0.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FUNÇÃO CORRIGIDA: Agora recebe o sectionId e calcula o offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // Altura do seu header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false); // Fecha o menu mobile após o clique
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} className='w-[4rem]' alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('projetos')} className="cursor-pointer hover:opacity-60 transition-opacity">
              PROJETOS
            </button>

            <button onClick={() => scrollToSection('contato')} className="cursor-pointer hover:opacity-60 transition-opacity">
              CONTATO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('projetos')} className="hover:opacity-60 transition-opacity text-left">
                PROJETOS
              </button>
              <button onClick={() => scrollToSection('contato')} className="hover:opacity-60 transition-opacity text-left">
                CONTATO
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}