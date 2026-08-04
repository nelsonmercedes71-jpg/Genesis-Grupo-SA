'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/lib/data';
import { Calendar as CalendarIcon, Clock, MapPin, Video, CheckCircle2, User, Phone, Mail, FileText, Download, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SchedulerSectionProps {
  initialSubject?: string;
}

export const SchedulerSection: React.FC<SchedulerSectionProps> = ({ initialSubject = '' }) => {
  const [meetingType, setMeetingType] = useState<'presencial' | 'virtual'>('presencial');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject || 'Novo Projeto Residencial');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-05');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00');
  
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isBooked, setIsBooked] = useState<boolean>(false);

  const timeSlots = [
    '08:30', '09:30', '10:30', '11:30',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const subjects = [
    'Novo Projeto Residencial de Alto Padrão',
    'Projeto Comercial / Edifício de Escritórios',
    'Design de Interiores & Remodelação',
    'Planeamento Urbano / Loteamento',
    'Consultoria Técnica & Fiscalização de Obra'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone) return;
    setIsBooked(true);
  };

  const handleSendBookingWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Genesis Grupo S.A! Gostaria de confirmar o agendamento da reunião:\n` +
      `• Tipo: ${meetingType === 'presencial' ? 'Presencial (Escritório Huambo - Cidade Alta)' : 'Virtual (Videochamada Online)'}\n` +
      `• Assunto: ${selectedSubject}\n` +
      `• Data: ${selectedDate} às ${selectedSlot}\n` +
      `• Nome: ${clientInfo.name}\n` +
      `• Telefone: ${clientInfo.phone}`
    );
    window.open(`https://wa.me/244923881992?text=${text}`, '_blank');
  };

  const downloadICS = () => {
    const icsData = 
      `BEGIN:VCALENDAR\n` +
      `VERSION:2.0\n` +
      `PRODID:-//Genesis Grupo S.A//Agendamento//PT\n` +
      `BEGIN:VEVENT\n` +
      `SUMMARY:Reunião Arquitetura - Genesis Grupo S.A\n` +
      `DESCRIPTION:${selectedSubject} - Reunião com a equipa de arquitetura do Genesis Grupo S.A.\n` +
      `LOCATION:${meetingType === 'presencial' ? COMPANY_INFO.address : 'Videochamada Google Meet'}\n` +
      `DTSTART:${selectedDate.replace(/-/g, '')}T${selectedSlot.replace(':', '')}00Z\n` +
      `DTEND:${selectedDate.replace(/-/g, '')}T${(parseInt(selectedSlot) + 1).toString().padStart(2, '0')}0000Z\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Agendamento-Genesis-${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="agendamento" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B0000]">
            Atendimento Personalizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Agende uma Reunião com a Nossa Equipa
          </h2>
          <p className="text-neutral-600 text-base">
            Escolha o melhor dia e horário para conversar sobre o seu projeto presencialmente no nosso escritório na Cidade Alta do Huambo ou por videochamada.
          </p>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto bg-stone-50 rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isBooked ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleBooking}
                className="p-6 sm:p-10 space-y-8 text-left"
              >
                
                {/* 1. Select Meeting Type */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    1. Formato da Reunião
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setMeetingType('presencial')}
                      className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                        meetingType === 'presencial'
                          ? 'border-[#8B0000] bg-[#8B0000]/5 text-neutral-900 font-bold shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      <div className="p-2.5 rounded-lg bg-[#8B0000] text-white">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm">Presencial no Escritório</p>
                        <p className="text-[11px] text-neutral-500 font-normal">Huambo - Cidade Alta, Rua dos Ocupadores</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType('virtual')}
                      className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                        meetingType === 'virtual'
                          ? 'border-[#8B0000] bg-[#8B0000]/5 text-neutral-900 font-bold shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                        <Video className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm">Reunião Virtual Online</p>
                        <p className="text-[11px] text-neutral-500 font-normal">Via Google Meet / Zoom com o Arquiteto</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Select Subject */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    2. Assunto Principal
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-neutral-300 bg-white text-sm font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  >
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                      3. Escolha a Data
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3.5 rounded-xl border border-neutral-300 bg-white text-sm font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                      4. Horário Disponível
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-1 rounded-lg text-xs font-bold transition-all ${
                            selectedSlot === slot
                              ? 'bg-[#8B0000] text-white shadow'
                              : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Contact Inputs */}
                <div className="pt-4 border-t border-neutral-200 space-y-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    5. Seus Dados de Contacto
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Seu Nome Completo"
                        value={clientInfo.name}
                        onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="Telefone / WhatsApp (+244)"
                        value={clientInfo.phone}
                        onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="Endereço de E-mail (Opcional)"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-lg shadow-[#8B0000]/20"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirmar Agendamento</span>
                </button>

              </motion.form>
            ) : (
              /* Booking Success Confirmation State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Agendamento Efetuado com Sucesso!
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    A equipa do Genesis Grupo S.A reservou a sua reunião para <strong className="text-neutral-900">{selectedDate} às {selectedSlot}</strong> ({meetingType === 'presencial' ? 'Escritório Huambo Cidade Alta' : 'Virtual Online'}).
                  </p>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-white border border-neutral-200 text-left text-xs space-y-2">
                  <p><strong className="text-neutral-800">Cliente:</strong> {clientInfo.name}</p>
                  <p><strong className="text-neutral-800">Contacto:</strong> {clientInfo.phone}</p>
                  <p><strong className="text-neutral-800">Assunto:</strong> {selectedSubject}</p>
                  <p><strong className="text-neutral-800">Endereço Genesis:</strong> {COMPANY_INFO.address}</p>
                </div>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleSendBookingWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmar via WhatsApp (+244 923 881 992)</span>
                  </button>

                  <button
                    onClick={downloadICS}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#8B0000]" />
                    <span>Baixar Evento (.ICS)</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsBooked(false)}
                    className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 underline"
                  >
                    Fazer outro agendamento
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
