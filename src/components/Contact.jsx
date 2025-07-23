import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Inscrição realizada!",
        description: "Obrigado por se inscrever em nossa newsletter.",
      });
      setEmail('');
    } else {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contato" className="section-padding bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Entre em Contato</h2>
          <p className="text-lg text-brown-light max-w-2xl mx-auto">
            Adoraríamos ouvir de você. Visite-nos ou envie uma mensagem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-brand-red mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brown-dark">Endereço</h3>
                  <p className="text-brown-light">Rua da Gastronomia, 123, Jardim Saboroso, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-brand-red mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brown-dark">Telefone</h3>
                  <p className="text-brown-light">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-brand-red mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brown-dark">E-mail</h3>
                  <p className="text-brown-light">contato@saboralma.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-brand-red mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brown-dark">Horário de Funcionamento</h3>
                  <p className="text-brown-light">Terça a Sábado: 12h - 23h</p>
                  <p className="text-brown-light">Domingo: 12h - 16h</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-brown-dark mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-brown-dark text-white rounded-full hover:bg-brand-red transition-colors"><Instagram /></a>
                <a href="#" className="p-3 bg-brown-dark text-white rounded-full hover:bg-brand-red transition-colors"><Facebook /></a>
                <a href="#" className="p-3 bg-brown-dark text-white rounded-full hover:bg-brand-red transition-colors"><Twitter /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 lg:h-full rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6599,-23.5530,-46.6499,-23.5430&layer=mapnik&marker=-23.5480,-46.6549"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Localização do Sabor & Alma"
            ></iframe>
          </motion.div>
        </div>

        <div className="mt-20 newsletter-bg p-10 rounded-xl text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Nossa Newsletter</h3>
          <p className="max-w-xl mx-auto mb-6 opacity-80">
            Receba em primeira mão nossas novidades, eventos e promoções especiais.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input text-brown-dark w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full sm:w-auto flex-shrink-0">Inscrever-se</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;