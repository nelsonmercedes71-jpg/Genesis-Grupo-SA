'use client';

import React, { useState } from 'react';
import { ESTIMATE_TYPES, FINISH_LEVELS, EXTRA_SERVICES, COMPANY_INFO } from '@/lib/data';
import { Calculator, Check, ArrowRight, MessageSquare, Send, RefreshCw, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export const EstimatorSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('residencial');
  const [areaM2, setAreaM2] = useState<number>(250);
  const [selectedFinish, setSelectedFinish] = useState<string>('superior');
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['render3d', 'licenciamento']);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculate pricing
  const currentType = ESTIMATE_TYPES.find((t) => t.id === selectedType) || ESTIMATE_TYPES[0];
  const currentFinish = FINISH_LEVELS.find((f) => f.id === selectedFinish) || FINISH_LEVELS[1];
  
  const baseArchitecturalCost = areaM2 * (currentType.baseRateAOA / 25) * currentFinish.multiplier;
  
  const extrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRA_SERVICES.find((s) => s.id === extraId);
    return sum + (extra ? extra.rate : 0);
  }, 0);

  const totalEstimateAOA = Math.round(baseArchitecturalCost + extrasCost);
  // Approx rate for reference (e.g. 1 USD ~ 920 AOA)
  const totalEstimateUSD = Math.round(totalEstimateAOA / 920);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatCurrencyAOA = (val: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatCurrencyUSD = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Genesis Grupo S.A! Gostaria de um orçamento formal com base na simulação:\n` +
      `• Tipo: ${currentType.title}\n` +
      `• Área: ${areaM2} m²\n` +
      `• Acabamento: ${currentFinish.title}\n` +
      `• Valor Estimado: ${formatCurrencyAOA(totalEstimateAOA)} (~${formatCurrencyUSD(totalEstimateUSD)})\n` +
      `• Localização: Huambo / Angola`
    );
    window.open(`https://wa.me/244923881992?text=${text}`, '_blank');
  };

  return (
    <section id="orcamento" className="py-20 bg-stone-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta de Orçamento Instantâneo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Simulador de Orçamento Rápido
          </h2>
          <p className="text-neutral-600 text-base">
            Calcule uma estimativa preliminar para o seu projeto de arquitetura no Huambo ou qualquer província de Angola em menos de 1 minuto.
          </p>
        </div>

        {/* Main Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-8 text-left">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="block text-sm font-bold uppercase tracking-wider text-neutral-800">
                1. Selecione o Tipo de Projeto
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedType === type.id
                        ? 'border-[#8B0000] bg-[#8B0000]/5 shadow-sm text-neutral-900 font-bold'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{type.title}</span>
                      {selectedType === type.id && (
                        <Check className="w-4 h-4 text-[#8B0000]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold uppercase tracking-wider text-neutral-800">
                  2. Área Estimada do Terreno / Obra
                </label>
                <span className="text-lg font-serif font-bold text-[#8B0000] bg-[#8B0000]/10 px-3 py-1 rounded-lg">
                  {areaM2} m²
                </span>
              </div>
              
              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={areaM2}
                onChange={(e) => setAreaM2(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#8B0000]"
              />

              <div className="flex justify-between text-xs text-neutral-500 font-medium">
                <span>50 m² (Pequeno porte)</span>
                <span>500 m² (Médio porte)</span>
                <span>1.500 m² (Grande porte)</span>
              </div>
            </div>

            {/* Step 3: Finish Quality */}
            <div className="space-y-3">
              <label className="block text-sm font-bold uppercase tracking-wider text-neutral-800">
                3. Padrão de Acabamento & Especificações
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FINISH_LEVELS.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedFinish === finish.id
                        ? 'border-[#8B0000] bg-[#8B0000]/5 text-neutral-900 font-bold'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <p className="text-sm font-bold">{finish.title}</p>
                    <p className="text-[11px] text-neutral-500 mt-1 font-normal leading-snug">
                      {finish.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Extra Services */}
            <div className="space-y-3 pt-2">
              <label className="block text-sm font-bold uppercase tracking-wider text-neutral-800">
                4. Serviços Complementares Incluídos
              </label>
              <div className="space-y-2">
                {EXTRA_SERVICES.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <label
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#8B0000] bg-[#8B0000]/5 text-neutral-900'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{extra.title}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                        isChecked ? 'bg-[#8B0000] border-[#8B0000] text-white' : 'border-neutral-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 text-left border border-neutral-800 sticky top-28">
            <div className="border-b border-neutral-800 pb-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B0000] bg-[#8B0000]/20 px-2.5 py-1 rounded">
                Resumo da Estimativa
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-2">
                Genesis Grupo S.A
              </h3>
              <p className="text-xs text-neutral-400">
                Estudo preliminar para {areaM2} m² ({currentType.title})
              </p>
            </div>

            {/* Total Display */}
            <div className="space-y-1">
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                Valor Estimado de Honorários de Projeto
              </p>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {formatCurrencyAOA(totalEstimateAOA)}
              </div>
              <p className="text-xs text-neutral-400">
                Equivalente aproximado: <span className="text-neutral-200 font-semibold">{formatCurrencyUSD(totalEstimateUSD)}</span>
              </p>
            </div>

            {/* Included Highlights */}
            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60 space-y-2 text-xs text-neutral-300">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
                O que está contemplado:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-neutral-400">
                <li>Estudo Prévio & Anteprojeto Arquitetónico</li>
                <li>Padrão de Qualidade: {currentFinish.title}</li>
                {selectedExtras.map((eId) => {
                  const ex = EXTRA_SERVICES.find((s) => s.id === eId);
                  return ex ? <li key={eId} className="text-white font-medium">{ex.title}</li> : null;
                })}
              </ul>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#8B0000] hover:bg-[#700000] transition-colors shadow-lg shadow-[#8B0000]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Orçamento para WhatsApp</span>
              </button>

              <a
                href="#contacto"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-xs text-neutral-300 bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700"
              >
                <FileText className="w-4 h-4 text-[#8B0000]" />
                <span>Solicitar Proposta Formal Completa</span>
              </a>
            </div>

            <p className="text-[11px] text-neutral-500 text-center leading-snug">
              *Valores indicativos sujeitos a confirmação após visita técnica no local (Huambo ou província).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
