import React from 'react';
import {
  Wifi,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Info,
  ChevronRight,
  Zap,
  Globe,
  Home,
  Check
} from 'lucide-react';

export default function InternetOffersGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-gray-200/80" id="oferty-internet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Aktualne Oferty Światłowodu i Internetu
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            Aktualne oferty internetu w UK
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-xs">
            Zobacz oferty i wybierz sam — albo napisz do mnie, jeśli wolisz, żebym dobrał ofertę za Ciebie.
          </p>
        </div>

        {/* 8 PROVIDER CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {/* 1. YouFibre */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  YouFibre
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-900 border border-fuchsia-200">
                  Gwarancja Ceny
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-fuchsia-600 transition-colors">
                YouFibre
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Internet światłowodowy (pełny fibre) najnowszej generacji, symetryczne prędkości pobierania i wysyłania, gwarancja stałej ceny przez cały okres umowy — bez podwyżek "z zaskoczenia".
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Pakiety (promocja 24-mies.):</span>
                  <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                    Sierpień 2026
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-700 bg-fuchsia-50/50 p-3 rounded-2xl border border-fuchsia-100">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• You 200 (200 Mb/s):</span>
                    <span className="font-extrabold text-fuchsia-900">£20/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• You 1000 (1 Gb/s):</span>
                    <span className="font-extrabold text-fuchsia-900">£25/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• You 2000 (1,8 Gb/s):</span>
                    <span className="font-extrabold text-fuchsia-900">£30/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• You 8000 (7 Gb/s):</span>
                    <span className="font-extrabold text-fuchsia-900">£50/mies.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Warunki:</strong> Umowa 24 m-ce (dostępna też opcja rolling miesięczna)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Sprzęt:</strong> Darmowy router Wi-Fi 7 w cenie</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Bonus:</strong> Wykup ze starej umowy do £300 w gotówce</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://aklam.io/iSsVvdlN"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Sprawdź dostępność pod Twoim adresem</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Airband */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  Airband
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  Obszary Wiejskie
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                Airband
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Internet światłowodowy i bezprzewodowy dla obszarów wiejskich i podmiejskich, tam gdzie inni operatorzy nie dotarli. Własna, niezależna sieć.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Zakres cenowy:</span>
                  <span className="font-extrabold text-sm text-emerald-700">£33 – £58 / mies.</span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-700 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Pakiet podstawowy (150 Mb/s):</span>
                    <span className="font-bold text-emerald-900">£33/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Pakiet najwyższy (900 Mb/s):</span>
                    <span className="font-bold text-emerald-900">£58/mies.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Umowa:</strong> 24 miesiące, brak podwyżek w trakcie umowy</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Sprzęt & Instalacja:</strong> Darmowy router Wi-Fi 6 mesh, £0 opłat instalacyjnych</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://aklam.io/aKXUQjx1"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Sprawdź czy Airband dotarł do Ciebie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. BeFibre */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  BeFibre
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-900 border border-sky-200">
                  Symetryczny Fibre
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-sky-600 transition-colors">
                BeFibre
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Niezależna sieć światłowodowa o symetrycznych prędkościach, elastyczne długości umów — od miesięcznej po 24-miesięczną.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Dostępne pakiety:</span>
                  <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                    Ceny od
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-700 bg-sky-50/50 p-3 rounded-2xl border border-sky-100">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Be200 (200 Mb/s):</span>
                    <span className="font-bold text-sky-900">od £24/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Be500 (500 Mb/s):</span>
                    <span className="font-bold text-sky-900">od £24-29/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Be900 (900 Mb/s):</span>
                    <span className="font-bold text-sky-900">od £29-34/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• Be2300 (2,3 Gb/s):</span>
                    <span className="font-bold text-sky-900">od £39/mies.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Elastyczność:</strong> Do wyboru 24-m-ce, 12-m-cy lub FlexiMonth</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Sprzęt & Gwarancja:</strong> Darmowy router Wi-Fi 7, brak podwyżek na umowach stałych</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://aklam.io/ePWfDyVv"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zobacz ofertę BeFibre</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4. Virgin Media */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  Virgin
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-900 border border-red-200">
                  Pakiet Volt + O2
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                Virgin Media
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Jeden z największych dostawców w UK, własna sieć kablowa/fibre o bardzo wysokich prędkościach. Możliwość połączenia z TV i SIM O2 (pakiet Volt).
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Zakres cenowy:</span>
                  <span className="font-extrabold text-xs text-red-700">Od £21-25 do Gig1/Gig2</span>
                </div>

                <div className="bg-red-50/50 p-3 rounded-2xl border border-red-100 text-xs text-gray-700 space-y-1">
                  <p className="font-medium text-red-950">
                    Cena zależy od adresu i promocji. Dostępne prędkości: 132 Mb/s, 264 Mb/s, 516 Mb/s, Gig1 (1,1 Gb/s) i Gig2 (2 Gb/s).
                  </p>
                </div>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Umowy:</strong> 18–24 miesiące</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Wykup starych kar:</strong> Zwrot do £300 przy przejściu do Virgin</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://aklam.io/5FrIpDHp"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Sprawdź cenę pod Twój adres</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 5. BRSK */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  BRSK
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  Darmowa Instalacja
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                BRSK (BetterNet)
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Niezależny dostawca fibre (BetterNet) — prosty cennik, symetryczne prędkości, bez podwyżek w trakcie umowy, darmowa instalacja.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Pakiety (umowa 12-mies.):</span>
                  <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                    Prosty Cennik
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-700 bg-amber-50/50 p-3 rounded-2xl border border-amber-100">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• BetterNet200 (200 Mb/s):</span>
                    <span className="font-bold text-amber-900">£24.99/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• BetterNet1000 (900 Mb/s):</span>
                    <span className="font-bold text-amber-900">£29.99/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• BetterNet2000 (2 Gb/s):</span>
                    <span className="font-bold text-amber-900">£34.99/mies.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Instalacja:</strong> Darmowa instalacja o wartości £150</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Umowa:</strong> 12 miesięcy lub rolling miesięczna (droższa)</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://brsk.uk/RULT"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zobacz ofertę BRSK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 6. Hyperoptic */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-blue-900 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  Hyper
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  Apartamenty & Bloki
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-900 transition-colors">
                Hyperoptic
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Fibre-to-the-building — głównie budynki wielorodzinne i apartamenty w większych miastach. Symetryczne prędkości od 150 Mb/s wzwyż.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Pakiety:</span>
                  <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                    Dla Miast
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• 50 Mb/s:</span>
                    <span className="font-bold text-slate-900">od £21.50 - £28.50/m</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• 150 Mb/s (symetryczne):</span>
                    <span className="font-bold text-slate-900">od £22.99 - £29/m</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• 500 Mb/s (symetryczne):</span>
                    <span className="font-bold text-slate-900">od £27 - £33/m</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Taryfa socjalna:</strong> Zniżki dla osób na Universal Credit</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Umowy:</strong> 24/12 miesięcy lub rolling</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://refer.hyperoptic.com/grzegorzm-274"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-black text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Sprawdź dostępność Hyperoptic</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 7. Three 5G Home Broadband */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  Three 5G
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200">
                  Bez Linii / Plug & Play
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-indigo-900 transition-colors">
                Three 5G Home Broadband
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Internet bez linii stacjonarnej — router 4G/5G, idealny dla najemców i osób często się przeprowadzających. Zero instalacji, działa od razu po podłączeniu do gniazdka.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Cena promocyjna:</span>
                  <span className="font-extrabold text-sm text-indigo-900">Od £15 – £19 / mies.</span>
                </div>

                <div className="bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100 text-xs text-gray-700 space-y-1">
                  <p className="font-medium text-indigo-950">
                    5G Hub w zestawie. Średnia prędkość ok. 150 Mb/s (do 1 Gb/s w dobrym zasięgu 5G).
                  </p>
                </div>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Bez technika:</strong> Włóż kartę SIM i włącz do prądu</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Gwarancja:</strong> 30-dniowa gwarancja zwrotu pieniędzy</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://aklam.io/eWtR4T58"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-indigo-800 hover:bg-indigo-900 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Sprawdź ofertę Three Home Broadband</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 8. Toob */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                  Toob
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200">
                  Summer Sale
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                Toob Broadband
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                Niezależna sieć fibre na południu Anglii (Portsmouth, Southampton, Bournemouth, Hampshire) i rozwijająca się w kolejnych miastach. Symetryczne prędkości, wysoka satysfakcja klientów.
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900">Pakiety (promocja 24-mies.):</span>
                  <span className="font-text-xs font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                    Sierpień 2026
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-gray-700 bg-purple-50/50 p-3 rounded-2xl border border-purple-100">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• home150 (150 Mb/s):</span>
                    <span className="font-bold text-purple-900">£18/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• home300 (300 Mb/s):</span>
                    <span className="font-bold text-purple-900">£19.50/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• home600 (600 Mb/s):</span>
                    <span className="font-bold text-purple-900">£21/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• home900 (900 Mb/s):</span>
                    <span className="font-bold text-purple-900">£22/mies.</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">• home2300 (2,3 Gb/s):</span>
                    <span className="font-bold text-purple-900">£25/mies.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Sprzęt:</strong> Darmowy router Wi-Fi 7 w cenie</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Socjalne:</strong> "toob essentials" od £15/mies.</span>
                </div>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 italic">
                *Ceny orientacyjne, mogą się różnić w zależności od adresu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://rewards.toob.co.uk/grzegorzm-281"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zobacz ofertę toob</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* AFFILIATE DISCLOSURE FOOTNOTE */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-sans">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Nota o linkach partnerskich:</strong> Greg Helpline może otrzymać prowizję od dostawcy za przekierowanie. Dla Ciebie cena i warunki promocji są dokładnie takie same lub tańsze!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
