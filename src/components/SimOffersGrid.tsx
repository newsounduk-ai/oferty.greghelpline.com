import React from 'react';
import {
  Smartphone,
  Globe,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Info,
  ChevronRight,
  Plane,
  CreditCard,
  Zap
} from 'lucide-react';

export default function SimOffersGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-gray-200/80" id="oferty-sim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Aktualne Oferty SIM i Telefonów
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            Aktualne oferty SIM i telefonów w UK
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-indigo-100 shadow-xs">
            Wybierz sam z listy — albo napisz do mnie, jeśli wolisz, żebym dobrał ofertę pod Twoje potrzeby (np. tani kontakt z rodziną w Polsce, najtańszy internet w telefonie, czy nowy flagowiec na raty).
          </p>
        </div>

        {/* 1. TOP FEATURED CARD: JETPAC (eSIM PODRÓŻNICZE) */}
        <div className="mb-14">
          <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-purple-700/50 group">
            
            {/* Background accent ambient light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Plane className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-fuchsia-400/20 text-fuchsia-200 border border-fuchsia-400/30">
                      eSIM Podróżnicze & Wyjazdy Zagraniczne
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Jetpac Global (eSIM)
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-sans max-w-2xl">
                  Międzynarodowe cyfrowe karty eSIM do ponad 100 krajów świata (w tym cała Unia Europejska, USA, Azja i Turcja). Idealne na wyjazdy wakacyjne i służbowe bez kosztownego roaming-u.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-purple-200 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Ceny:</strong> Od $1 za pakiety danych (np. 1GB w UE od $1, 3GB od $4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Warunki:</strong> Aktywacja cyfrowa QR w 60 sekund, pakiety na 1–30 dni</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Brak umowy:</strong> Płacisz tylko za potrzebny pakiet danych</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Bez plastiku:</strong> Działa równolegle z Twoją brytyjską kartą SIM</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-stretch sm:items-end justify-center pt-4 lg:pt-0 border-t lg:border-t-0 border-purple-800/60">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 w-full text-center lg:text-right mb-4">
                  <span className="text-xs text-purple-200 uppercase font-bold tracking-wider block">Zakres cenowy</span>
                  <span className="font-display font-black text-2xl text-amber-300">Od $1 / pakiet</span>
                  <span className="text-[11px] text-purple-200 block mt-0.5">Dostępne w ponad 100 krajach</span>
                </div>

                <a
                  href="https://wbbsv.com/g/aoxs44cafqe11ab0925a122206d6c4/"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Sprawdź ofertę Jetpac eSIM</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* 2. GROUP 1: KARTY SIM-ONLY */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-sm shrink-0">
              <Smartphone className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1F3A]">
                Karty SIM-Only (Samo SIM)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Abonamenty bez telefonu na stałym, przejrzystym zakresie cenowym z elastycznymi umowami
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. SMARTY */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    SMARTY
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                    Bez Kontraktu (30 dni)
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                  SMARTY Mobile
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Działa na zaawansowanej sieci Three 5G. Możesz zrezygnować w dowolnym miesiącu bez żadnych kar i opłat.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Zakres cenowy:</span>
                    <span className="font-display font-extrabold text-sm text-indigo-700">Od £6 do £20 / mies.</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Pakiety od 4 GB do Nielimitowanych danych 5G</p>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 30 dni (pełna elastyczność)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Roaming:</strong> Darmowy w UE (do 12 GB)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Zastrzeżenia:</strong> Brak badania zdolności kredytowej (No Credit Check)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://i.smarty.co.uk/lsFkO1x"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę SMARTY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. iD Mobile */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    iD
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                    Data Rollover w cenie
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                  iD Mobile
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Zasięg sieci Three 5G w rewelacyjnych cenach z funkcją przenoszenia niewykorzystanych gigabajtów.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Zakres cenowy:</span>
                    <span className="font-display font-extrabold text-sm text-purple-700">Od £6 do £18 / mies.</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Pakiety od 8 GB do Nielimitowanego 5G</p>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 1, 12 lub 24 miesiące</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Roaming:</strong> Darmowy w UE (aż do 30 GB)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Atut:</strong> Niewykorzystane GB przechodzą na kolejny miesiąc</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://aklam.io/fBZnVtEc"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę iD Mobile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. Lycamobile */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    Lyca
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Tanie Połączenia PL
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  Lycamobile UK
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Specjalistyczna oferta dla Polaków w UK — darmowe lub super tanie minuty międzynarodowe do Polski w pakiecie.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Zakres cenowy:</span>
                    <span className="font-display font-extrabold text-sm text-blue-700">Od £5 do £15 / mies.</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Pakiety od 3 GB do Unlimited Data</p>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 30 dni (bez zobowiązań)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Minuty do PL:</strong> Pakiety z wliczonymi minutami do stacjonarnych i komórek</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Roaming:</strong> Darmowy w UE w ramach abonamentu</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://aklam.io/3fZkcCeu"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę Lycamobile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 4. Three UK */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#0B1F3A] flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    Three
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    Oficjalna Sieć 5G
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-900 transition-colors">
                  Three UK (3)
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Oficjalny operator posiadający najszybszą sieć 5G w UK z potężnymi limitami danych.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Zakres cenowy:</span>
                    <span className="font-display font-extrabold text-sm text-slate-800">Od £8 do £24 / mies.</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Pakiety od 10 GB do Unlimited 5G</p>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 12 lub 24 miesiące</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Jakość:</strong> Najwyższa przepustowość 5G do gier i streamingu</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Weryfikacja:</strong> Wymagany standardowy badany Credit Check</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://aklam.io/5FeDFRkM"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-black text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę Three UK</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 5. giffgaff */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    giffgaff
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200/70">
                    Bonus £5 na start
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                  giffgaff
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Niezwykle popularna sieć na nadajnikach O2 z elastycznymi paczkami "goodybag" i brakiem badania zdolności kredytowej.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500 font-medium">Zakres cenowy:</span>
                    <span className="font-display font-extrabold text-sm text-amber-800">Od £6 do £35 / mies.</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Pakiety od 2 GB do Nielimitowanych danych</p>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 30 dni (lub opcjonalnie 18 m-cy)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Bonus:</strong> £5 darmowego kredytu przy zamawianiu z naszego linku</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Roaming:</strong> UE do 5 GB bez dodatkowych opłat</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="http://www.giffgaff.com/orders/affiliate/newso860_1771855622237"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę giffgaff</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. GROUP 2: TELEFONY NA UMOWĘ */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
            <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-sm shrink-0">
              <CreditCard className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1F3A]">
                Telefony na umowę (Nowe Smartfony + Abonament)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Abonament ze sprzętem (iPhone, Samsung, Google Pixel) — sprawdzane na bieżąco u zaufanych dystrybutorów
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 6. FONEHOUSE */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    Fonehouse
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-orange-900 border border-orange-200">
                    Smartfony + Abonament
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                  Fonehouse
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Renomowany brytyjski dystrybutor oferujący najnowsze smartfony na raty w sieciach Three i Vodafone.
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-900">Przykładowe aktualne oferty:</span>
                    <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      Sierpień 2026
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-700 bg-orange-50/50 p-3 rounded-2xl border border-orange-100">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• iPhone 15 / 16:</span>
                      <span className="font-bold text-orange-900">od £29/mies. (£0 wkładu)</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Samsung Galaxy S24 / A55:</span>
                      <span className="font-bold text-orange-900">od £21/mies.</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Google Pixel 8a / 9:</span>
                      <span className="font-bold text-orange-900">od £19/mies.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 24 miesiące</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Warunki:</strong> Wymagany Credit Check i brytyjski adres</span>
                  </div>
                </div>

                <p className="mt-2 text-[10px] text-gray-400 italic flex items-center gap-1">
                  <Info className="w-3 h-3 text-gray-400 shrink-0" />
                  *Ceny orientacyjne, sprawdź aktualną ofertę na stronie.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://aklam.io/yvOxWyif"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę Fonehouse</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://aklam.io/yvOxWyif"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-2 px-3 text-[11px] font-semibold text-orange-700 hover:text-orange-900 text-center flex items-center justify-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Zobacz pełną ofertę Fonehouse</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 7. MOBILES.CO.UK */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    Mobiles
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
                    Opcje Cashback
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                  Mobiles.co.uk
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Największy sklep internetowy ze smartfonami w UK należący do Currys, słynący z promocji cashback.
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-900">Przykładowe aktualne oferty:</span>
                    <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-teal-500" />
                      Sierpień 2026
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-700 bg-teal-50/50 p-3 rounded-2xl border border-teal-100">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• iPhone 15:</span>
                      <span className="font-bold text-teal-900">od £26/mies. (po zwrocie)</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Samsung Galaxy S24:</span>
                      <span className="font-bold text-teal-900">od £23/mies.</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Google Pixel 8:</span>
                      <span className="font-bold text-teal-900">od £18/mies.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 24 miesiące (iD Mobile / Vodafone)</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Atut:</strong> Duże zwroty gotówki (Automatic lub Mail-in cashback)</span>
                  </div>
                </div>

                <p className="mt-2 text-[10px] text-gray-400 italic flex items-center gap-1">
                  <Info className="w-3 h-3 text-gray-400 shrink-0" />
                  *Ceny orientacyjne, sprawdź aktualną ofertę na stronie.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://aklam.io/quadgDOb"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę Mobiles.co.uk</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://aklam.io/quadgDOb"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-2 px-3 text-[11px] font-semibold text-teal-700 hover:text-teal-900 text-center flex items-center justify-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Zobacz pełną ofertę Mobiles.co.uk</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 8. CARPHONE WAREHOUSE */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-display font-black text-xs shadow-md group-hover:scale-105 transition-transform shrink-0">
                    Carphone
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                    Porównywarka Sieci
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-gray-900 group-hover:text-indigo-900 transition-colors">
                  Carphone Warehouse
                </h4>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                  Legendarny dystrybutor dający możliwość bezpośredniego porównania ofert czołowych sieci pod jednym dachem.
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-900">Przykładowe aktualne oferty:</span>
                    <span className="text-[10px] font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      Sierpień 2026
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-700 bg-blue-50/50 p-3 rounded-2xl border border-blue-100">
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• iPhone 15 Pro / 16:</span>
                      <span className="font-bold text-blue-900">od £36/mies.</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Samsung Galaxy Z Flip / Ultra:</span>
                      <span className="font-bold text-blue-900">od £38/mies.</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">• Smartfony budżetowe:</span>
                      <span className="font-bold text-blue-900">od £12/mies.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Długość umowy:</strong> 24 miesiące bezpośrednio u operatora</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Opcje dodatkowe:</strong> Trade-In (odkupienie starego telefonu)</span>
                  </div>
                </div>

                <p className="mt-2 text-[10px] text-gray-400 italic flex items-center gap-1">
                  <Info className="w-3 h-3 text-gray-400 shrink-0" />
                  *Ceny orientacyjne, sprawdź aktualną ofertę na stronie.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://aklam.io/fXZHKBn7"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-black text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Sprawdź ofertę Carphone</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://aklam.io/fXZHKBn7"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full py-2 px-3 text-[11px] font-semibold text-blue-800 hover:text-indigo-900 text-center flex items-center justify-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Zobacz pełną ofertę Carphone Warehouse</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* AFFILIATE DISCLOSURE FOOTNOTE */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-sans">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              <strong>Nota o linkach partnerskich:</strong> Greg Helpline może otrzymać prowizję od dostawcy za przekierowanie. Dla Ciebie cena i warunki promocji są dokładnie takie same lub tańsze!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
