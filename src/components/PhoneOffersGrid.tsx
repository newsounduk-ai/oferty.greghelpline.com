import React, { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Radio,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Tag,
  ArrowUpRight
} from 'lucide-react';
import { phoneOffers, PhoneOfferItem } from '../data/reflinks';

interface PhoneOffersGridProps {
  showFilter?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export default function PhoneOffersGrid({
  showFilter = true,
  limit,
  title = "Telefony w abonamencie przez GregHelpline",
  subtitle = "Oficjalne oferty odnowionych i najnowszych modeli smartfonów, tabletów oraz elastycznych planów w UK."
}: PhoneOffersGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');

  const categories = ['Wszystkie', 'Telefony', 'SIM', 'Tablet'];

  const filteredOffers = phoneOffers.filter((offer) => {
    if (selectedCategory === 'Wszystkie') return true;
    return offer.category === selectedCategory;
  });

  const displayedOffers = limit ? filteredOffers.slice(0, limit) : filteredOffers;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tablet':
        return <Tablet className="w-5 h-5 text-amber-400" />;
      case 'SIM':
        return <Radio className="w-5 h-5 text-amber-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="oferty-telefony">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Smartfony • Tablety • Abonamenty UK
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
            {subtitle}
          </p>

          {/* Filter Pills */}
          {showFilter && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-[#0B1F3A] shadow-md shadow-amber-400/20 scale-105'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  {cat === 'Wszystkie' ? 'Wszystkie oferty (8)' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* OFFERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedOffers.map((offer: PhoneOfferItem, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#101827] to-[#0B1F3A] rounded-3xl p-6 border border-slate-700/70 hover:border-amber-400/60 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon and Category Badge */}
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                    {getCategoryIcon(offer.category)}
                  </div>
                  {offer.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {offer.badge}
                    </span>
                  )}
                </div>

                {/* Offer Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {offer.title}
                </h3>

                {/* Offer Description */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {offer.description}
                </p>

                {/* Features List */}
                <div className="mt-5 pt-4 border-t border-slate-800 space-y-2 text-[11px] text-slate-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dostawa kurierem w całej Wielkiej Brytanii</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Gwarancja producenta lub 12 mies. dystrybutora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold text-amber-200">Kategoria: {offer.category}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] transition-all shadow-md hover:shadow-lg shadow-amber-500/20 cursor-pointer transform group-hover:-translate-y-0.5"
                >
                  <span>Sprawdź ofertę</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* AFFILIATE DISCLOSURE FOOTNOTE */}
        <div className="mt-14 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 text-center shadow-md">
          <div className="flex items-center justify-center gap-2.5 text-xs text-slate-300 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Bezpieczne zakupy online:</strong> Klikając „Sprawdź ofertę”, przechodzisz bezpośrednio do autoryzowanego brytyjskiego sklepu lub operatora sieci z naliczonym rabatem partnerskim.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
