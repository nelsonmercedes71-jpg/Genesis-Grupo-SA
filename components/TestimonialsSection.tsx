'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-stone-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B0000]">
            Reconhecimento & Confiança
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            O Que Dizem Nossos Clientes Satisfeitos
          </h2>
          <p className="text-neutral-600 text-base">
            Depoimentos de investidores imobiliários, empresários e proprietários residenciais que confiaram o seu sonho ao Genesis Grupo S.A.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm relative flex flex-col justify-between text-left hover:border-[#8B0000]/30 transition-all duration-300"
            >
              {/* Quote Mark */}
              <Quote className="w-10 h-10 text-[#8B0000]/15 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-neutral-700 text-sm leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Project Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-100 text-[11px] font-semibold text-neutral-800">
                  <CheckCircle className="w-3.5 h-3.5 text-[#8B0000]" />
                  <span>Projeto: {t.projectRef}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <h4 className="font-serif font-bold text-neutral-900 text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
                    {t.role} • <span className="text-neutral-700 font-semibold">{t.company}</span> ({t.location})
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
