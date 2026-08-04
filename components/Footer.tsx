'use client';

import React from 'react';
import { GenesisLogo } from './GenesisLogo';
import { COMPANY_INFO } from '@/lib/data';
import { Phone, MapPin, Mail, ArrowUp, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-[#8B0000]">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <GenesisLogo size="lg" variant="white" showText={true} />
            <p className="text-xs text-neutral-400 leading-relaxed">
              Empresa de referência em arquitetura contemporânea, engenharia e design de interiores em Angola. Concebemos edifícios icónicos com um compromisso inabalável com o rigor, estética e sustentabilidade.
            </p>
            
            {/* Direct Contact Highlights */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <Phone className="w-4 h-4 text-[#8B0000]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#8B0000] transition-colors font-bold">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfólio de Obras</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">Simulador de Orçamentos</a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors">Agendamento de Consulta</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Blog & Tendências 2026</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contactar a Empresa</a>
              </li>
            </ul>
          </div>

          {/* Services Offered (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>• Arquitetura Residencial de Alto Padrão</li>
              <li>• Edifícios Comercial & Corporativos</li>
              <li>• Design de Interiores & Marcenaria</li>
              <li>• Masterplan & Planeamento Urbano</li>
              <li>• Maquetes 3D & Animação Fotorrealista</li>
              <li>• Licenciamento Municipal no Huambo</li>
              <li>• Fiscalização e Gestão Técnica de Obra</li>
            </ul>
          </div>

          {/* WhatsApp Action Card (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
              WhatsApp Direto
            </h4>
            <p className="text-xs text-neutral-400">
              Atendimento prioritário para novos clientes e investidores.
            </p>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>+244 923 881 992</span>
            </a>
          </div>

        </div>
      </div>

      {/* Sub Footer Bar */}
      <div className="bg-neutral-950 py-6 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} <strong className="text-neutral-300">Genesis Grupo S.A</strong>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span>Angola • Huambo - Cidade Alta, Rua dos Ocupadores</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
