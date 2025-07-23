import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5", alt: "Ambiente interno do restaurante com clientes" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", alt: "Mesa posta com pratos e talheres" },
  { src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88", alt: "Detalhe da decoração rústica do restaurante" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9", alt: "Visão geral do salão principal do restaurante" },
  { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d", alt: "Área externa do restaurante à noite" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de", alt: "Chef preparando um prato na cozinha" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Nossa Galeria</h2>
          <p className="text-lg text-brown-light max-w-2xl mx-auto">
            Um vislumbre do nosso ambiente, nossos pratos e os momentos que criamos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500 cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;