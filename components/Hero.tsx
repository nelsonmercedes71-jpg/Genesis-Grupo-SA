'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calculator, Calendar, Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

interface HeroProps {
  onOpenEstimateModal: () => void;
  onOpenScheduleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEstimateModal,
  onOpenScheduleModal,
}) => {
  return (
    <section id="inicio" className="relative bg-stone-50 overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-neutral-200">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 text-[#8B0000] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Genesis Grupo S.A • Huambo, Angola</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Arquitetura Contemporânea com <span className="text-[#8B0000] underline decoration-[#8B0000]/30 underline-offset-8">Propósito & Elegância</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-600 font-normal max-w-2xl leading-relaxed">
              Concebemos residências de luxo, edifícios corporativos e projetos urbanísticos no Planalto Central e por toda Angola. Unimos design minimalista, rigor técnico e excelência bioclimática.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenEstimateModal}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-all shadow-lg shadow-[#8B0000]/20 group"
              >
                <Calculator className="w-4 h-4" />
                <span>Simular Orçamento Rápido</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenScheduleModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-neutral-800 bg-white hover:bg-neutral-100 transition-all border border-neutral-300 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#8B0000]" />
                <span>Agendar Consulta</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Garantia & Licenciamento</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>120+ Obras Concluídas</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Sede em Cidade Alta, Huambo</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Arquitetura de Luxo Genesis Grupo S.A"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

              {/* Floating Highlight Card 1 - Location */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 max-w-[220px]">
                <div className="p-2 rounded-lg bg-[#8B0000] text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">Localização Sede</p>
                  <p className="text-xs font-bold text-neutral-900 leading-tight">Huambo - Cidade Alta</p>
                </div>
              </div>

              {/* Floating Highlight Card 2 - Stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-[#8B0000]">120+</span>
                  <p className="text-xs font-medium text-neutral-600">Projetos Executados</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <span className="text-2xl font-serif font-bold text-neutral-900">14 Anos</span>
                  <p className="text-xs font-medium text-neutral-600">Tradição em Angola</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <span className="text-2xl font-serif font-bold text-[#8B0000]">100%</span>
                  <p className="text-xs font-medium text-neutral-600">Rigor Técnico</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
