import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'cardapio', label: 'Cardápio' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'contato', label: 'Contato' },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <UtensilsCrossed className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-brand-red' : 'text-white'}`} />
            <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-brown-dark' : 'text-white'}`}>
              Sabor & Alma
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-brown-dark hover:text-brand-red' : 'text-white hover:text-beige-dark'}`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('reservas')} className="btn btn-primary">
              Reservar
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={`w-8 h-8 ${isScrolled ? 'text-brown-dark' : 'text-white'}`} /> : <Menu className={`w-8 h-8 ${isScrolled ? 'text-brown-dark' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-24 left-0 right-0"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map(link => (
                <motion.button
                  key={link.id}
                  variants={mobileLinkVariants}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown-dark hover:text-brand-red p-3 rounded-md transition-colors font-semibold"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                variants={mobileLinkVariants}
                onClick={() => {
                  scrollToSection('reservas');
                  setMobileMenuOpen(false);
                }}
                className="btn btn-primary w-full mt-4"
              >
                Faça sua Reserva
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;