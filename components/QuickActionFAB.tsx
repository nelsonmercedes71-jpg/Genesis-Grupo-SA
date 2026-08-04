'use client';

import React from 'react';
import { MessageSquare, Calculator, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

interface QuickActionFABProps {
  onOpenEstimateModal: () => void;
  onOpenScheduleModal: () => void;
}

export const QuickActionFAB: React.FC<QuickActionFABProps> = ({
  onOpenEstimateModal,
  onOpenScheduleModal,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-end gap-2.5">
        
        {/* Quick Schedule FAB */}
        <button
          onClick={onOpenScheduleModal}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-neutral-900 border border-neutral-200 shadow-lg hover:shadow-xl hover:bg-neutral-50 transition-all scale-95 hover:scale-100 text-xs font-bold"
        >
          <Calendar className="w-4 h-4 text-[#8B0000]" />
          <span className="hidden sm:inline">Agendar Visita</span>
        </button>

        {/* Quick Estimator FAB */}
        <button
          onClick={onOpenEstimateModal}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-neutral-900 text-white shadow-lg hover:shadow-xl hover:bg-neutral-800 transition-all scale-95 hover:scale-100 text-xs font-bold"
        >
          <Calculator className="w-4 h-4 text-[#8B0000]" />
          <span className="hidden sm:inline">Simular Orçamento</span>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 rounded-full bg-[#8B0000] text-white shadow-xl hover:bg-[#700000] transition-all hover:scale-110 active:scale-95 group"
          aria-label="Contactar no WhatsApp"
          title="WhatsApp +244 923 881 992"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

      </div>
    </div>
  );
};
