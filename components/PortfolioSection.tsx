'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/lib/data';
import { ProjectModal } from './ProjectModal';
import { MapPin, ArrowUpRight, Layers, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioSectionProps {
  onSelectEstimate: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectEstimate }) => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'residencial', label: 'Residencial Luxo' },
    { id: 'comercial', label: 'Comercial & Corporativo' },
    { id: 'interiores', label: 'Interiores' },
    { id: 'urbanismo', label: 'Planeamento Urbano' },
  ];

  const filteredProjects = activeTab === 'todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B0000]">
            Portfólio de Obras & Renders
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Projetos Futuristas
          </h2>
          <p className="text-neutral-600 text-base">
            Uma seleção criteriosa de residências unifamiliares, sedes corporativas e planos urbanos desenvolvidos pelo Genesis Grupo S.A em Huambo e pelas principais províncias de Angola.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-[#8B0000] text-white shadow-md shadow-[#8B0000]/20 scale-105'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge Category */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  {project.categoryLabel}
                </div>

                {/* View Project Floating Action */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 bg-[#8B0000] text-white p-3 rounded-full shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all flex items-center justify-center"
                  aria-label="Ver detalhes do projeto"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Project Info Footer */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8B0000] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-neutral-900 group-hover:text-[#8B0000] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-neutral-400" />
                    {project.area}
                  </span>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 font-bold text-[#8B0000] hover:underline"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectEstimate={onSelectEstimate}
      />
    </section>
  );
};
