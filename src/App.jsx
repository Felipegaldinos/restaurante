import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Reservations from '@/components/Reservations';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sabor & Alma - Gastronomia com Paixão</title>
        <meta name="description" content="Descubra o Sabor & Alma, um restaurante que combina ingredientes frescos, paixão pela culinária e um ambiente acolhedor. Faça sua reserva!" />
      </Helmet>

      <div className="min-h-screen bg-beige-light text-brown-dark font-sans">
        <Header scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Menu />
          <Reservations />
          <Gallery />
          <Events />
          <Contact />
        </main>
        <Footer scrollToSection={scrollToSection} />
        <ChatWidget />
      </div>
    </>
  );
}

export default App;