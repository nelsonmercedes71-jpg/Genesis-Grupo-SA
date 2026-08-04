'use client';

import React, { useState } from 'react';
import { Project } from '@/lib/data';
import { X, MapPin, Calendar, Layers, User, CheckCircle2, Calculator, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectEstimate: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectEstimate,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col border border-neutral-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#8B0000] text-white">
                {project.categoryLabel}
              </span>
              <h3 className="text-lg font-serif font-bold tracking-tight text-white truncate max-w-md">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="overflow-y-auto p-6 space-y-8 flex-1">
            
            {/* Main Gallery Viewer */}
            <div className="relative rounded-xl overflow-hidden bg-neutral-900 group aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={project.gallery[activeImageIndex] || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                {activeImageIndex + 1} / {project.gallery.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#8B0000] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Technical Specs Grid Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B0000]" />
                <div>
                  <p className="text-neutral-500 font-medium">Localização</p>
                  <p className="font-bold text-neutral-900">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8B0000]" />
                <div>
                  <p className="text-neutral-500 font-medium">Área Construída</p>
                  <p className="font-bold text-neutral-900">{project.area}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B0000]" />
                <div>
                  <p className="text-neutral-500 font-medium">Ano de Conclusão</p>
                  <p className="font-bold text-neutral-900">{project.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#8B0000]" />
                <div>
                  <p className="text-neutral-500 font-medium">Estado</p>
                  <p className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit">{project.status}</p>
                </div>
              </div>
            </div>

            {/* Text & Concept Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Concept Narrative */}
              <div className="md:col-span-7 space-y-4 text-left">
                <h4 className="text-xl font-serif font-bold text-neutral-900">
                  Conceito Arquitetónico & Solução
                </h4>
                <p className="text-neutral-700 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="p-4 rounded-xl bg-stone-100 border-l-4 border-[#8B0000] text-neutral-800 text-sm italic">
                  &ldquo;{project.concept}&rdquo;
                </div>
              </div>

              {/* Highlights List */}
              <div className="md:col-span-5 space-y-4 text-left">
                <h4 className="text-lg font-serif font-bold text-neutral-900">
                  Especificações do Projeto
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-700">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Modal Footer Bar */}
          <div className="px-6 py-4 bg-neutral-100 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-xs text-neutral-600">
              Interessado em um projeto semelhante em Angola?
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  onClose();
                  onSelectEstimate(project);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Simular Projeto Similar
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
