'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/lib/data';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Solicitação de Orçamento',
    location: 'Huambo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá Genesis Grupo S.A!\n` +
      `Nome: ${formData.name || 'Cliente'}\n` +
      `Telefone: ${formData.phone}\n` +
      `Assunto: ${formData.subject}\n` +
      `Mensagem: ${formData.message}`
    );
    window.open(`https://wa.me/244923881992?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-stone-100/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B0000]">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Inicie o Seu Projeto com o Genesis Grupo S.A
          </h2>
          <p className="text-neutral-600 text-base">
            Estamos prontos para atender a sua consulta no nosso escritório no Huambo ou responder à sua mensagem digitalmente.
          </p>
        </div>

        {/* Form & Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Location Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Cards */}
            <div className="bg-neutral-900 text-white p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden border border-neutral-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B0000]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-serif font-bold text-white">
                Genesis Grupo S.A
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#8B0000] text-white shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-medium">Telefone & WhatsApp Oficial</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-white hover:text-[#8B0000] transition-colors"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#8B0000] text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-medium">Endereço da Sede Física</p>
                    <p className="font-bold text-white leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#8B0000] text-white shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-medium">Correio Eletrónico</p>
                    <p className="font-bold text-white">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-300 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-medium">Horário de Atendimento</p>
                    <p className="text-xs text-neutral-300 font-medium">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Quick Button */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar no WhatsApp Agora</span>
                </a>
              </div>
            </div>

            {/* Location Visual Map Card */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-stone-100 text-[#8B0000] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-bold text-neutral-900 block text-sm">Escritório Huambo</span>
                <p className="text-neutral-600">Cidade Alta, Rua dos Ocupadores</p>
                <p className="text-neutral-500 font-medium text-[11px]">Huambo - República de Angola</p>
              </div>
            </div>

          </div>

          {/* Right: Contact Lead Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm text-left">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-serif font-bold text-neutral-900 pb-2 border-b border-neutral-100">
                    Formulário de Captação de Projetos
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Arq. João Pedro"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+244 9XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.co.ao"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        Local da Obra em Angola
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Huambo, Luanda, Benguela..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Assunto do Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl border border-neutral-300 text-sm bg-white font-medium focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    >
                      <option value="Solicitação de Orçamento">Solicitação de Orçamento de Arquitetura</option>
                      <option value="Projeto Residencial de Luxo">Projeto Residencial de Luxo</option>
                      <option value="Projeto Comercial & Escritórios">Projeto Comercial & Escritórios</option>
                      <option value="Design de Interiores">Design de Interiores</option>
                      <option value="Fiscalização e Licenciamento">Fiscalização e Licenciamento de Obra</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Detalhes do Projeto & Mensagem
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva a sua ideia, dimensões estimadas, orçamento previsto ou dúvidas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-lg shadow-[#8B0000]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem para o Genesis Grupo</span>
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-neutral-900">
                      Mensagem Recebida com Sucesso!
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-md mx-auto">
                      Obrigado, <strong className="text-neutral-900">{formData.name}</strong>. A nossa equipa comercial entrará em contacto através do número <strong className="text-neutral-900">{formData.phone}</strong> em breve.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar atendimento no WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-xs text-neutral-700 bg-neutral-100 hover:bg-neutral-200"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
