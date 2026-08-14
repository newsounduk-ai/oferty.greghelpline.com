import React from 'react';
import {
  ShieldCheck,
  Car,
  Home,
  HeartHandshake,
  Plane,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Info,
  ArrowRight,
  ShieldAlert,
  UserCheck,
  Dog,
  FileSearch
} from 'lucide-react';

export default function InsuranceOffersGrid() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('formularz-sekcja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#formularz-sekcja';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-gray-200/80" id="oferty-ubezpieczenia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">
              Bezpłatna Konsultacja & Bezpośrednia Wycena
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            Zakres ochrony, który mogę dla Ciebie sprawdzić
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-xs">
            Wybierz kategorię ubezpieczenia i wypełnij krótki formularz kontaktowy. Pomożemy Ci zrozumieć warunki i przekażemy zapytanie do licencjonowanego brytyjskiego brokera po polsku.
          </p>
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. SAMOCHÓD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Car className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                  Auto w UK
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Ubezpieczenie samochodu (OC / AC)
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Obowiązkowe ubezpieczenie OC plus opcjonalne AC — pomagam porównać oferty kilku towarzystw i dobrać zakres dopasowany do wieku auta i sposobu jeżdżenia.
              </p>

              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-blue-950">
                  • Oferta: Indywidualna wycena po rozmowie (cena zależy od samochodu, historii szkód oraz wieku kierowcy).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Warunki:</strong> Umowy roczne, płatność jednorazowa lub w miesięcznych ratach</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zniżki z Polski:</strong> Pomagamy w akceptacji zaświadczenia No Claims Bonus z PL</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o wycenę ubezpieczenia auta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. DOM / MIESZKANIE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Home className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  Buildings & Contents
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                Ubezpieczenie domu / mieszkania
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Ochrona nieruchomości i jej zawartości — od zalania po kradzież. Pomagam dobrać zakres dla właścicieli domów (Homeowners) i najemców (Tenants).
              </p>

              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-emerald-950">
                  • Oferta: Indywidualna wycena zależna od wartości budynku oraz mienia wewnątrz nieruchomości.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Warunki:</strong> Umowy roczne, opcja połączenia murów (Buildings) i wyposażenia (Contents)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Dla wynajmujących:</strong> Dedykowane pakiety ochrony dla najemców mieszkań</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o wycenę domu / mieszkania</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. UBEZPIECZENIE NA ŻYCIE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-900 border border-rose-200">
                  Ochrona Rodziny & Kredyt
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-rose-600 transition-colors mb-2">
                Ubezpieczenie na życie i chorobowe
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Zabezpieczenie finansowe rodziny na wypadek śmierci lub poważnej choroby — pomagam zrozumieć różnice między polisami i dobrać sumę ubezpieczenia.
              </p>

              <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-rose-950">
                  • Oferta: Indywidualna kalkulacja składki po krótkiej rozmowie o Waszej sytuacji rodzinnej.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Warunki:</strong> Polisy terminowe, dożywotnie lub Mortgage Protection (spłata hipoteki)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Critical Illness:</strong> Opcja wypłaty gotówki w przypadku diagnozy ciężkiej choroby</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Porozmawiajmy o ochronie Twojej rodziny</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4. UBEZPIECZENIE PODRÓŻNE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Plane className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  Wyjazdy & Urlopy
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                Ubezpieczenie podróżne (Travel Insurance)
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Ochrona na wyjazd — koszty leczenia za granicą, odwołanie podróży, zagubiony bagaż. Dobre uzupełnienie przed wakacjami i podróżami do Polski.
              </p>

              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-amber-950">
                  • Oferta: Indywidualne wyliczenie zależne od kierunku, długości pobytu i liczby podróżnych.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Warunki:</strong> Polisy jednorazowe na konkretny wyjazd lub roczne (Multi-Trip)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zdrowie & Bagaż:</strong> Pełny koszt leczenia medycznego i odszkodowanie za zagubiony bagaż</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o wycenę przed wyjazdem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5. UBEZPIECZENIE ZWIERZĄT */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Dog className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200">
                  Psy & Koty w UK
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                Ubezpieczenie zwierząt (Pet Insurance)
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Ochrona kosztów leczenia weterynaryjnego psa lub kota — pomagam porównać zakres i dobrać polisę do wieku i rasy zwierzaka.
              </p>

              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-purple-950">
                  • Oferta: Indywidualna wycena (składka uzależniona od rasy, wieku oraz wybranej sumy ubezpieczenia weterynaryjnego).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zakres:</strong> Pokrycie kosztów wizyt weterynaryjnych, operacji, leków i diagnoz</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>OC Pupil:</strong> Ochrona przed szkodami wyrządzonymi osobom trzecim przez psa</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o wycenę dla pupila</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6. RAPORT POJAZDU */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <FileSearch className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                  HPI & DVLA Check
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-slate-800 transition-colors mb-2">
                Raport pojazdu (historia auta)
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Sprawdzenie historii używanego samochodu przed zakupem — przebieg, wypadki, kredyty na pojeździe, kradzieże. Dobre uzupełnienie ubezpieczenia samochodowego.
              </p>

              <div className="bg-slate-100/70 p-4 rounded-2xl border border-slate-200 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-slate-900">
                  • Oferta: Weryfikacja w oficjalnych rejestrach przed transakcją zakupu samochodu w UK.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Bezpieczeństwo:</strong> Weryfikacja obciążeń finansowych (Outstanding Finance) i kradzieży</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Historia szkód:</strong> Sprawdzenie kategorii szkodowości (Write-off Cat N/S/A/B) oraz przebiegu MOT</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o sprawdzenie auta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* REGULATORY LEADS-ONLY DISCLOSURE FOOTNOTE */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="flex items-start justify-center gap-2 text-xs text-gray-700 font-sans leading-relaxed">
            <UserCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-left">
              <strong>Zasady doradztwa ubezpieczeniowego w UK:</strong> Greg Helpline działa w modelu bezpłatnego kojarzenia klientów z brytyjskimi autoryzowanymi brokerami posiadającymi licencję Financial Conduct Authority (FCA). Nie pobieramy żadnych opłat wstępnych ani prowizji od klientów za rozmowę i przygotowanie kalkulacji.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
