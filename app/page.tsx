'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PortfolioSection } from '@/components/PortfolioSection';
import { EstimatorSection } from '@/components/EstimatorSection';
import { SchedulerSection } from '@/components/SchedulerSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { QuickActionFAB } from '@/components/QuickActionFAB';
import { Project } from '@/lib/data';

export default function Home() {
  const [schedulerSubject, setSchedulerSubject] = useState<string>('');

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForEstimate = (project: Project) => {
    setSchedulerSubject(`Interesse no Projeto: ${project.title}`);
    handleScrollToSection('orcamento');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-[#8B0000] selection:text-white relative">
      {/* Sticky Header */}
      <Header
        onOpenEstimateModal={() => handleScrollToSection('orcamento')}
        onOpenScheduleModal={() => handleScrollToSection('agendamento')}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenEstimateModal={() => handleScrollToSection('orcamento')}
          onOpenScheduleModal={() => handleScrollToSection('agendamento')}
        />

        {/* Portfolio Section */}
        <PortfolioSection
          onSelectEstimate={handleSelectProjectForEstimate}
        />

        {/* Interactive Estimator Section (Orçamentos Rápidos) */}
        <EstimatorSection />

        {/* Online Scheduling System (Agendamento Online) */}
        <SchedulerSection initialSubject={schedulerSubject} />

        {/* Client Testimonials (Depoimentos) */}
        <TestimonialsSection />

        {/* Architecture & Design Blog */}
        <BlogSection />

        {/* Contact Form & Company Details */}
        <ContactSection />
      </main>

      {/* Footer with mandatory Genesis info */}
      <Footer />

      {/* Quick Action FAB for mobile and desktop */}
      <QuickActionFAB
        onOpenEstimateModal={() => handleScrollToSection('orcamento')}
        onOpenScheduleModal={() => handleScrollToSection('agendamento')}
      />
    </div>
  );
}
