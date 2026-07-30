import React, { useState } from 'react';
import { Wifi, Gauge, ArrowRight, Laptop, Gamepad2, Tv, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpeedTestWidgetProps {
  onCtaClick?: () => void;
}

export default function SpeedTestWidget({ onCtaClick }: SpeedTestWidgetProps) {
  const [activePreset, setActivePreset] = useState<'basic' | 'medium' | 'gamer' | 'pro'>('medium');

  const presets = {
    basic: {
      title: 'Podstawowe Użytkowanie',
      subtitle: '1-2 osoby • Przeglądanie stron & Netflix Full HD',
      recommendedSpeed: '100 Mbps - 150 Mbps',
      priceEstimate: 'od £20/mies.',
      description: 'Idealny wybór do małych mieszkań. Płynne oglądanie filmów HD i przeglądanie mediów społecznościowych.',
      icon: Tv,
      color: 'border-blue-200 bg-blue-50/50'
    },
    medium: {
      title: 'Standardowa Rodzina',
      subtitle: '3-4 osoby • Praca z domu & Streaming 4K',
      recommendedSpeed: '300 Mbps - 500 Mbps',
      priceEstimate: 'od £24/mies.',
      description: 'Najpopularniejszy pakiet w UK. Płynne wideokonferencje Teams/Zoom, gdy dzieci oglądają filmy na YouTube.',
      icon: Laptop,
      color: 'border-blue-500 bg-blue-50 text-blue-900'
    },
    gamer: {
      title: 'Gracze & Dom Smart',
      subtitle: 'Wielu użytkowników • Pobieranie wielkich gier & Low Ping',
      recommendedSpeed: '900 Mbps - 1000 Mbps (1 Gbps)',
      priceEstimate: 'od £28/mies.',
      description: 'Symetryczny światłowód (Full Fibre). Błyskawiczne pobieranie aktualizacji PS5/Xbox/PC w kilkadziesiąt sekund.',
      icon: Gamepad2,
      color: 'border-purple-200 bg-purple-50/50'
    },
    pro: {
      title: 'Praca Zdalna & Biznes',
      subtitle: 'Duże pliki w chmurze • 10+ urządzeń jednocześnie',
      recommendedSpeed: '1000 Mbps + Wi-Fi 6 Mesh',
      priceEstimate: 'od £32/mies.',
      description: 'Maksymalny zasięg w całym domu bez martwych stref dzięki wsparciu wzmacniaczy Wi-Fi 6 Mesh.',
      icon: Sparkles,
      color: 'border-emerald-200 bg-emerald-50/50'
    }
  };

  const current = presets[activePreset];

  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    const el = document.getElementById('formularz-kontener');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Gauge className="w-4 h-4 text-blue-600" />
            Interaktywny Dobór Prędkości
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-black text-[#0B1F3A] tracking-tight">
            Jaka prędkość światłowodu jest odpowiednia dla Twojego domu?
          </h2>
          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
            Wybierz styl korzystania z sieci, a nasz kalkulator dobierze rekomendowaną przepustowość z gwarancją najniższej ceny.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Preset Buttons */}
          <div className="lg:col-span-7 space-y-3">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Wybierz profil domowników:
            </label>

            {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => {
              const p = presets[key];
              const Icon = p.icon;
              const isActive = activePreset === key;

              return (
                <button
                  key={key}
                  onClick={() => setActivePreset(key)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? 'border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-500/20'
                      : 'border-gray-200/80 bg-gray-50/50 hover:bg-gray-100/80 text-gray-800'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#0B1F3A]">
                      {p.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {p.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommendation Box */}
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full font-bold">
                  Rekomendowana Opcja
                </span>
                <Wifi className="w-5 h-5 text-blue-400 animate-pulse" />
              </div>

              <div className="text-2xl md:text-3xl font-black font-display text-amber-400 mb-1">
                {current.recommendedSpeed}
              </div>

              <div className="text-xs text-blue-200 font-mono font-bold mb-4">
                Ceny rynkowe: <span className="text-white">{current.priceEstimate}</span>
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed font-sans mb-6">
                {current.description}
              </p>

              <div className="space-y-2 text-xs text-blue-200 pt-3 border-t border-blue-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Darmowy router Wi-Fi w zestawie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Brak wzrostu cen w trakcie trwania kontraktu</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCta}
              className="mt-8 w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Sprawdź dostępność pod kodem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
