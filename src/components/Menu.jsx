import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, GlassWater, CakeSlice } from 'lucide-react';

const menuData = {
  entradas: [
    { name: "Bruschetta Clássica", description: "Pão italiano tostado com tomates frescos, alho, manjericão e azeite.", price: "R$ 32,00" },
    { name: "Carpaccio de Filé Mignon", description: "Finas fatias de filé mignon com molho de alcaparras, mostarda e parmesão.", price: "R$ 45,00" },
    { name: "Dadinho de Tapioca", description: "Com queijo coalho e geleia de pimenta agridoce.", price: "R$ 28,00" },
  ],
  principais: [
    { name: "Risoto de Camarão", description: "Arroz arbóreo cremoso com camarões, limão siciliano e um toque de açafrão.", price: "R$ 78,00" },
    { name: "Bife de Chorizo", description: "Corte nobre grelhado, acompanhado de batatas rústicas e chimichurri da casa.", price: "R$ 89,00" },
    { name: "Salmão ao Molho de Maracujá", description: "Posta de salmão grelhada com purê de mandioquinha e molho de maracujá.", price: "R$ 82,00" },
  ],
  sobremesas: [
    { name: "Petit Gâteau", description: "Bolo de chocolate com interior cremoso, servido com sorvete de creme.", price: "R$ 29,00" },
    { name: "Pudim de Leite da Vovó", description: "Receita de família, cremoso e com calda de caramelo perfeita.", price: "R$ 22,00" },
    { name: "Torta de Limão Desconstruída", description: "Creme de limão, farofa de biscoito e merengue suíço maçaricado.", price: "R$ 26,00" },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('principais');

  const tabs = [
    { id: 'entradas', label: 'Entradas', icon: <Utensils className="w-5 h-5 mr-2" /> },
    { id: 'principais', label: 'Pratos Principais', icon: <Utensils className="w-5 h-5 mr-2" /> },
    { id: 'sobremesas', label: 'Sobremesas', icon: <CakeSlice className="w-5 h-5 mr-2" /> },
  ];

  return (
    <section id="cardapio" className="section-padding bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Nosso Cardápio</h2>
          <p className="text-lg text-brown-light max-w-2xl mx-auto">
            Uma seleção de pratos preparados com os melhores ingredientes e muito carinho.
          </p>
        </div>

        <div className="flex justify-center mb-10 border-b-2 border-beige-dark">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 font-semibold text-lg transition-colors duration-300 relative ${activeTab === tab.id ? 'text-brand-red' : 'text-brown-light hover:text-brown-dark'}`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeTab].map((item, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-bold text-brown-dark">{item.name}</h3>
                <span className="text-xl font-semibold text-brand-red whitespace-nowrap ml-4">{item.price}</span>
              </div>
              <p className="text-brown-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;