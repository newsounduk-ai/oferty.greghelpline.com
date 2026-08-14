import React from 'react';
import {
  Zap,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Flame,
  Award,
  Check,
  ArrowRight,
  Info
} from 'lucide-react';

export default function EnergyOffersGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-gray-200/80" id="oferty-energia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Twoja Energia w UK — Wszystko w Jednym Miejscu
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            Prąd i gaz w UK: Stałe stawki i gwarancja oszczędności
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-amber-100 shadow-xs">
            Sprawdź naszą rekomendowaną ofertę energii z gwarancją stawek poniżej limitu cenowego Ofgem — albo wypełnij formularz powyżej, a bezpłatnie przełączymy Cię na tańszą taryfę.
          </p>
        </div>

        {/* FEATURED UW CARD */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            
            {/* Top Highlight Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-700 to-indigo-900 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Rekomendacja #1 w UK</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
              
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center text-white font-display font-black text-base shadow-lg shrink-0">
                      UW
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-purple-700 transition-colors">
                        Utility Warehouse (UW)
                      </h3>
                      <p className="text-xs text-purple-700 font-bold font-sans">
                        Jeden dostawca, jeden rachunek za prąd i gaz
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    Jeden dostawca, jeden rachunek za prąd i gaz — Utility Warehouse gwarantuje stawki poniżej limitu cenowego Ofgem na taryfie zmiennej, bez opłat za wyjście z umowy. Dostępna też opcja stałej ceny, jeśli chcesz zablokować stawkę na dłużej.
                  </p>

                  <div className="mt-5 bg-purple-50/70 p-4 rounded-2xl border border-purple-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-950">Wartość oferty & Limit Ofgem:</span>
                      <span className="text-[10px] font-mono font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                        Stan na sierpień 2026
                      </span>
                    </div>
                    <p className="text-xs text-purple-900 font-sans leading-relaxed">
                      • Taryfa zmienna: <strong>zawsze poniżej aktualnego limitu Ofgem</strong> (limit od lipca 2026: £1 663/rok dla typowego gospodarstwa dual-fuel).<br/>
                      • Taryfa stała (Fixed): zablokuj niezmienną stawkę za 1 kWh na 12 miesięcy.<br/>
                      • Bonusy: "Darmowe dni energii" przy połączeniu z innymi usługami (np. internet).
                    </p>
                  </div>
                </div>

                <div className="space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Umowa:</strong> Taryfa zmienna bez opłat za wyjście | Taryfa stała £75/paliwo opłaty za wcześniejsze zerwanie</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Licznik:</strong> Darmowa instalacja inteligentnego licznika Smart Meter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Eko:</strong> Opcja 100% zielonej energii z odnawialnych źródeł</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Box & Action */}
              <div className="lg:col-span-5 bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-purple-500/30 shadow-inner">
                <div>
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
                    <Flame className="w-4 h-4" />
                    <span>Gwarancja Poniżej Price Cap</span>
                  </div>
                  <h4 className="font-display font-black text-lg text-white mb-2">
                    Ile możesz zaoszczędzić?
                  </h4>
                  <p className="text-xs text-purple-200 leading-relaxed font-sans mb-4">
                    Stawki za kWh różnią się w zależności od Twojego kodu pocztowego, rocznego zużycia i typu licznika (Dual Fuel / Single Fuel / Economy 7).
                  </p>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-xs space-y-1.5 border border-white/10">
                    <div className="flex justify-between items-center text-gray-200">
                      <span>Limit cenowy Ofgem:</span>
                      <span className="font-mono line-through text-gray-400">£1,663/rok</span>
                    </div>
                    <div className="flex justify-between items-center text-white font-bold">
                      <span>Stawki Utility Warehouse:</span>
                      <span className="text-emerald-400 font-mono">Poniżej limitu!</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <a
                    href="https://uw.co.uk/ref/v2/partner/AC2637"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-black font-sans flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-purple-950 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <span>Sprawdź swoją oszczędność</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-purple-200 text-center italic">
                    *Dokładna wycena nastąpi po podaniu Twojego kodu pocztowego na stronie UW.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* AFFILIATE DISCLOSURE FOOTNOTE */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-sans">
            <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
            <span>
              <strong>Nota o linkach partnerskich:</strong> Greg Helpline jest niezależnym partnerem Utility Warehouse (ref AC2637). Przejście przez link nie zmienia Twojej stawki, a gwarantuje najlepsze promocje!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
