import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Wine } from 'lucide-react';

const events = [
  {
    icon: <Music className="w-8 h-8 text-brand-red" />,
    title: "Noite de Jazz ao Vivo",
    date: "Toda Quinta-feira",
    description: "Desfrute de uma noite sofisticada com o melhor do jazz ao vivo, acompanhado de nosso cardápio especial.",
  },
  {
    icon: <Wine className="w-8 h-8 text-brand-red" />,
    title: "Degustação de Vinhos",
    date: "Última Sexta do Mês",
    description: "Uma viagem sensorial com vinhos selecionados pelo nosso sommelier e harmonizados com petiscos exclusivos.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-brand-red" />,
    title: "Jantar Temático Italiano",
    date: "15 de Agosto",
    description: "Celebre a culinária italiana com um menu exclusivo de 4 tempos, trazendo os sabores da Toscana para sua mesa.",
  },
];

const Events = () => {
  return (
    <section id="eventos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Eventos & Promoções</h2>
          <p className="text-lg text-brown-light max-w-2xl mx-auto">
            Fique por dentro da nossa programação especial e aproveite momentos únicos no Sabor & Alma.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{event.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-2">{event.title}</h3>
              <p className="font-semibold text-brand-red mb-4">{event.date}</p>
              <p className="text-brown-light">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;