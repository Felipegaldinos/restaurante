import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ChefHat, HeartHandshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-brand-red" />,
      title: "Ingredientes Frescos",
      description: "Selecionamos diariamente os melhores ingredientes locais e sazonais para garantir pratos cheios de sabor e frescor."
    },
    {
      icon: <ChefHat className="w-10 h-10 text-brand-red" />,
      title: "Chef Premiado",
      description: "Nossa cozinha é liderada pelo Chef Lucas Ferreira, cuja paixão e criatividade transformam cada refeição em uma obra de arte."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-brand-red" />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe se dedica a proporcionar uma experiência acolhedora e inesquecível, cuidando de cada detalhe."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Nossa História</h2>
          <p className="text-lg text-brown-light max-w-3xl mx-auto">
            O Sabor & Alma nasceu do sonho de criar um lugar onde a boa comida e as boas companhias se encontram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img  class="w-full h-auto object-cover rounded-xl shadow-lg" alt="Interior aconchegante do restaurante Sabor & Alma" src="https://images.unsplash.com/photo-1689147459899-48a09d4856d4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif font-bold text-brown-dark mb-6">Paixão que vem de família</h3>
            <p className="text-brown-light mb-4 leading-relaxed">
              Desde 2015, nossa família se dedica a transformar ingredientes de alta qualidade em pratos que aquecem o coração. Nossa filosofia é simples: comida de verdade, feita com amor, para ser compartilhada.
            </p>
            <p className="text-brown-light leading-relaxed">
              Cada receita carrega um pouco da nossa história e da nossa paixão pela gastronomia. Queremos que cada visita ao Sabor & Alma seja mais do que uma refeição, mas uma memória feliz.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">{feature.title}</h3>
              <p className="text-brown-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;