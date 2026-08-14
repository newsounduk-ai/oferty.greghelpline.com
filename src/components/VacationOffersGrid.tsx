import React from 'react';
import {
  Plane,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Hotel,
  Coins,
  Award,
  Compass,
  MapPin
} from 'lucide-react';

export default function VacationOffersGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-gray-200/80" id="oferty-wakacje">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Oficjalne Promocje Partnera Rezerwacyjnego
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            Zaplanuj podróż i oszczędzaj na lotach oraz hotelach
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-teal-100 shadow-xs">
            Możesz zarezerwować loty i hotele samodzielnie przez naszego sprawdzonego partnera Trip.com z rabatami — lub napisz do mnie, jeśli wolisz, żebym wyszukał idealną ofertę dla Ciebie.
          </p>
        </div>

        {/* FEATURED TRIP.COM CARD */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-600 to-cyan-700 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Partner Globalny</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
              
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white font-display font-black text-lg shadow-lg shrink-0">
                      Trip
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-teal-600 transition-colors">
                        Trip.com — Loty, Hotele & Wycieczki
                      </h3>
                      <p className="text-xs text-teal-700 font-bold font-sans">
                        Jedna platforma na wszystkie rezerwacje wakacyjne
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Jedna platforma na loty, hotele, wynajem aut i atrakcje na całym świecie — wygodna opcja, gdy planujesz wyjazd do Polski lub gdziekolwiek indziej, z regularnymi promocjami sezonowymi.
                  </p>

                  <div className="mt-5 bg-teal-50/70 p-4 rounded-2xl border border-teal-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-950">Mechanizm Oszczędzania:</span>
                      <span className="text-[10px] font-mono font-semibold bg-teal-100 text-teal-800 px-2 py-0.5 rounded">
                        Sierpień 2026
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-teal-900 font-sans">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold">• Rabaty sezonowe:</span> Do 50% zniżki na wybrane hotele i pakiety (promocje zmieniają się co miesiąc).
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold">• Trip Coins:</span> Program lojalnościowy zbierający punkty wymienialne na zniżki przy kolejnych rezerwacjach.
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold">• Poziomy członkostwa:</span> Dedykowane zniżki dla użytkowników Silver, Gold, Platinum i Diamond.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Gwarancja:</strong> Rezerwacja bez ukrytych opłat, bezpośrednie potwierdzenie biletów i rezerwacji hotelowych</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Anulowanie:</strong> Elastyczne opcje darmowego odwołania rezerwacji w wybranych obiektach</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Box & Action */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1F3A] via-teal-950 to-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-teal-500/30 shadow-inner">
                <div>
                  <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider mb-2">
                    <Globe className="w-4 h-4" />
                    <span>Przeloty z UK & Cały Świat</span>
                  </div>
                  <h4 className="font-display font-black text-lg text-white mb-2">
                    Loty do Polski i na wakacje
                  </h4>
                  <p className="text-xs text-teal-200 leading-relaxed font-sans mb-4">
                    Porównaj bezpośrednie przeloty ze wszystkich lotnisk w UK (Luton, Stansted, Manchester, Bham) i zarezerwuj sprawdzony hotel.
                  </p>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-xs space-y-2 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold">
                      <Coins className="w-4 h-4 shrink-0" />
                      <span>Zbieraj Trip Coins przy każdym locie</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                      <Hotel className="w-4 h-4 shrink-0" />
                      <span>Zniżki członkowskie na hotele</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <a
                    href="https://www.trip.com/?Allianceid=8628698&SID=318760044&trip_sub1=&trip_sub3=D17794457"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-black font-sans flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <span>Sprawdź aktualne promocje na Trip.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-teal-200 text-center italic">
                    *Ceny i dostępność zmieniają się dynamicznie na stronie partnera.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* AFFILIATE DISCLOSURE FOOTNOTE */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-sans">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Nota o partnerze:</strong> Rezerwując przez powyższy link wspierasz bezpłatne doradztwo Greg Helpline. Dla Ciebie cena pozostaje bez zmian lub jest niższa dzięki dedykowanym kodom rabatowym!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
