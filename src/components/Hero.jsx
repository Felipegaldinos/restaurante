import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img  class="w-full h-full object-cover" alt="Prato gourmet delicioso em uma mesa de restaurante" src="https://images.unsplash.com/photo-1560717845-968823efbee1" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Onde cada prato conta uma história
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Uma experiência gastronômica que desperta os sentidos e alimenta a alma.
          </p>
          <button
            onClick={() => scrollToSection('reservas')}
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Faça sua Reserva</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;