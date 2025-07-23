import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Nome é obrigatório.';
    if (!formData.email) errors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'E-mail inválido.';
    if (!formData.date) errors.date = 'Data é obrigatória.';
    if (!formData.time) errors.time = 'Horário é obrigatório.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
    
    toast({
      title: "Reserva Solicitada!",
      description: "Sua solicitação de reserva foi enviada. Entraremos em contato para confirmar.",
    });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="reservas" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-dark mb-6">Faça sua Reserva</h2>
            <p className="text-lg text-brown-light mb-8 leading-relaxed">
              Garanta seu lugar em nossa casa! Preencha o formulário e aguarde nossa confirmação. Para grupos maiores de 8 pessoas, por favor, entre em contato por telefone.
            </p>
            <img  class="w-full h-auto object-cover rounded-xl shadow-lg" alt="Mesa de restaurante elegantemente posta para uma reserva" src="https://images.unsplash.com/photo-1564979005350-b66153628aa8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
                  {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                  {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="form-label">Telefone (Opcional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="form-label">Data</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="form-input" required />
                  {formErrors.date && <p className="form-error">{formErrors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="form-label">Horário</label>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="form-input" required />
                  {formErrors.time && <p className="form-error">{formErrors.time}</p>}
                </div>
                <div>
                  <label htmlFor="guests" className="form-label">Pessoas</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="form-select">
                    {[...Array(8)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full">Solicitar Reserva</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;