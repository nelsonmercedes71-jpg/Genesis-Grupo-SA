'use client';

import React, { useState, useEffect } from 'react';
import { GenesisLogo } from './GenesisLogo';
import { COMPANY_INFO } from '@/lib/data';
import { Phone, MapPin, Calendar, Calculator, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenEstimateModal?: () => void;
  onOpenScheduleModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEstimateModal,
  onOpenScheduleModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Orçamento Rápido', href: '#orcamento' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Blog & Tendências', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-neutral-100">
      {/* Top Bar for Direct Contact */}
      <div className="bg-neutral-900 text-neutral-300 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B0000]" />
              <span className="font-medium text-white">{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <span className="hidden md:inline text-neutral-600">|</span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-neutral-400">{COMPANY_INFO.hours}</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#8B0000] hover:bg-[#700000] text-white px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp Direto
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <GenesisLogo size="md" variant="badge" showText={true} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-[#8B0000] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8B0000] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition-colors border border-neutral-200"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8B0000]" />
              Simular Orçamento
            </button>
            <button
              onClick={onOpenScheduleModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar Visita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenScheduleModal}
              className="p-2 rounded-lg bg-[#8B0000] text-white"
              title="Agendar"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-50 hover:text-[#8B0000] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEstimateModal) onOpenEstimateModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200"
                >
                  <Calculator className="w-4 h-4 text-[#8B0000]" />
                  Simular Orçamento Rápido
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenScheduleModal) onOpenScheduleModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#8B0000]"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Reunião Online
                </button>
                
                <div className="mt-2 p-3 rounded-lg bg-neutral-50 border border-neutral-100 text-xs text-neutral-600 space-y-1">
                  <p className="font-semibold text-neutral-900">{COMPANY_INFO.name}</p>
                  <p>📍 {COMPANY_INFO.address}</p>
                  <p>📞 {COMPANY_INFO.phoneFormatted}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
