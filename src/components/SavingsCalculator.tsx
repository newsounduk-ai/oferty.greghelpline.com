/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, ArrowRight, TrendingDown, Sparkles, CheckCircle2 } from 'lucide-react';

interface SavingsCalculatorProps {
  onCalculateClick?: () => void;
  onCtaClick?: () => void;
}

export default function SavingsCalculator({ onCalculateClick, onCtaClick }: SavingsCalculatorProps) {
  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    else if (onCalculateClick) onCalculateClick();
  };
  const [monthlyBill, setMonthlyBill] = useState<number>(150);

  // Presets
  const presets = [
    { label: 'Mieszkanie 1-osobowe', value: 90 },
    { label: 'Para (2-bed)', value: 140 },
    { label: 'Rodzina (3-4 osoby)', value: 200 },
    { label: 'Duży dom', value: 280 },
  ];

  // Dynamic calculations (avg savings ~18% in UK standard tariffs vs cheapest market tariffs)
  const savingsPercent = monthlyBill > 200 ? 22 : monthlyBill > 120 ? 18 : 15;
  const monthlySavings = Math.round((monthlyBill * savingsPercent) / 100);
  const yearlySavings = monthlySavings * 12;
  const newMonthlyBill = monthlyBill - monthlySavings;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyBill(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      if (val > 1000) setMonthlyBill(1000);
      else setMonthlyBill(val);
    }
  };

  const scrollToForm = () => {
    handleCta();
    const el = document.getElementById('formularz-kontener') || document.getElementById('formularz-sekcja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-amber-50/20 to-white relative overflow-hidden" id="kalkulator">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Kalkulator Oszczędności Energii
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-[#0B1F3A] tracking-tight mb-4">
            Ile możesz zaoszczędzić na prądzie i gazie w UK?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Przesuń suwak lub wybierz profil swojego gospodarstwa domowego, aby sprawdzić szacunkowe oszczędności po zmianie dostawcy z Greg Helpline.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                Szybki wybór gospodarstwa:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setMonthlyBill(p.value)}
                    className={`px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-pointer text-center border ${
                      monthlyBill === p.value
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md shadow-[#0B1F3A]/10 scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200/80'
                    }`}
                  >
                    <div>{p.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">£{p.value}/m-c</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider & Input */}
            <div className="bg-amber-50/40 p-5 rounded-2xl border border-amber-100/80 space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="billInput" className="text-sm font-bold text-[#0B1F3A] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                  Miesięczny rachunek (prąd + gaz):
                </label>
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-amber-200 shadow-2xs">
                  <span className="text-gray-500 font-bold text-sm">£</span>
                  <input
                    type="number"
                    id="billInput"
                    min={10}
                    max={1000}
                    value={monthlyBill}
                    onChange={handleInputChange}
                    className="w-16 text-right font-bold text-base text-[#0B1F3A] focus:outline-hidden"
                  />
                  <span className="text-xs text-gray-400 font-medium">/m-c</span>
                </div>
              </div>

              {/* Custom Slider */}
              <div className="relative pt-2">
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={monthlyBill > 500 ? 500 : monthlyBill}
                  onChange={handleSliderChange}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] font-mono font-medium text-gray-400 mt-1">
                  <span>£10/m-c</span>
                  <span>£250/m-c</span>
                  <span>£500+/m-c</span>
                </div>
              </div>
            </div>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-600 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bez przerw w dostawie energii</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Gwarancja stałej taryfy bez podwyżek</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Załatwiamy wymianę licznika i papierologię</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Obsługa w 100% po polsku</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1F3A] to-[#152e50] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 font-bold">
                Wysoki potencjał oszczędności
              </span>
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>

            {/* Highlight Numbers */}
            <div className="space-y-4 my-2">
              <div>
                <span className="text-xs text-blue-200 block font-medium mb-1">
                  Szacowana oszczędność roczna:
                </span>
                <div className="text-4xl md:text-5xl font-black text-amber-400 font-display tracking-tight flex items-baseline gap-2">
                  £{yearlySavings}
                  <span className="text-sm font-sans font-normal text-amber-200/80">/ rok</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-blue-200/80 block">Nowy rachunek:</span>
                  <span className="text-xl font-bold text-white font-mono">£{newMonthlyBill} <span className="text-xs text-blue-200 font-sans font-normal">/m-c</span></span>
                </div>
                <div>
                  <span className="text-[11px] text-blue-200/80 block">Oszczędzasz ok.:</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">~{savingsPercent}%</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-blue-200/70 mt-4 mb-6 leading-relaxed">
              * Wyliczenie ma charakter orientacyjny. Ostateczna kwota zależy od aktualnego zużycia kWh oraz taryfy lokalnej w Twojej strefie kodowej.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-[#0B1F3A] font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.98]"
              id="btn-calc-cta"
            >
              <TrendingDown className="w-5 h-5" />
              <span>Obniż ten rachunek z Gregiem</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
