import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-brown-dark text-beige-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="w-8 h-8 text-brand-red" />
              <span className="font-serif text-2xl font-bold">Sabor & Alma</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs">
              Gastronomia com paixão, criando memórias inesquecíveis desde 2015.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('sobre')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Sobre Nós</button>
              <button onClick={() => scrollToSection('cardapio')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Cardápio</button>
              <button onClick={() => scrollToSection('reservas')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Reservas</button>
              <button onClick={() => scrollToSection('contato')} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Contato</button>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="p-2 border border-beige-light/50 rounded-full hover:bg-brand-red hover:border-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 border border-beige-light/50 rounded-full hover:bg-brand-red hover:border-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 border border-beige-light/50 rounded-full hover:bg-brand-red hover:border-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-beige-light/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Sabor & Alma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;