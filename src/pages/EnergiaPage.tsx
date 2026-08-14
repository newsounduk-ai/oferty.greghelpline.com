import React from 'react';
import { Zap, CheckCircle2, Phone, ArrowRight, TrendingDown, Sparkles } from 'lucide-react';
import SavingsCalculator from '../components/SavingsCalculator';
import MultiStepForm from '../components/MultiStepForm';
import EnergyOffersGrid from '../components/EnergyOffersGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import GuideDownloadCTA from '../components/GuideDownloadCTA';
import { referralLinks } from '../data/reflinks';

export default function EnergiaPage() {

  const energiaFaq = [
    {
      question: "Czy podczas zmiany dostawcy energii grozi mi odcięcie prądu lub gazu?",
      answer: "Nigdy. Prąd i gaz płyną tymi samymi rurami i przewodami. Zmiana odbywa się w tle, na poziomie administracyjnym w rejestrze Ofgem."
    },
    {
      question: "Czy muszę sam dzwonić do British Gas / starych firm, by anulować umowę?",
      answer: "Nie! Twój nowy dostawca automatycznie powiadamia starego dostawcę. W dniu przełączenia podajesz nam tylko aktualny stan licznika."
    },
    {
      question: "Czym różni się taryfa stała (Fixed Tariff) od zmiennej (Variable Tariff)?",
      answer: "Taryfa stała gwarantuje niezmienną cenę za 1 kWh i stałą opłatę dzienną (standing charge) przez 12 lub 24 miesiące. Taryfa zmienna zależy od aktualnego limitu cenowego (Price Cap)."
    },
    {
      question: "Czy licznik Smart Meter działa po zmianie dostawcy?",
      answer: "Tak, nowoczesne liczniki SMETS2 przesyłają odczyty automatycznie do każdego nowego dostawcy w UK bez potrzeby wymieniania urządzenia."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-amber-50/70 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-600" />
                Porównywarka Prądu i Gazu w UK
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.1]">
                Obniżymy Twoje rachunki za energię w UK <span className="text-amber-500 underline decoration-blue-600 decoration-wavy decoration-2">całkowicie za darmo</span>.
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Płacisz zbyt wysokie rachunki za prąd i gaz w UK? Greg Helpline porówna oferty wszystkich czołowych dostawców i przełączy Cię na tańszą taryfę po polsku.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Gwarancja stałej stawki za kWh</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Średnia oszczędność £200 - £400 rocznie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Bez kaucji i opłat wstępnych</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Obsługa w 100% po polsku</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#formularz-sekcja"
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <TrendingDown className="w-5 h-5 text-amber-100" />
                  <span>Oblicz swoje oszczędności</span>
                </a>

                <a
                  href="tel:+447491978400"
                  className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-gray-50 text-[#0B1F3A] font-bold rounded-2xl text-sm transition-all border border-gray-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>07491 978400</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5" id="formularz-sekcja">
              <MultiStepForm service="energia" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-6">
            Dostawcy prądu i gazu w Wielkiej Brytanii:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-display font-black text-sm md:text-base text-gray-700">
            <span className="bg-amber-50 text-amber-900 px-4 py-2 rounded-xl border border-amber-200">Octopus Energy</span>
            <span className="bg-blue-50 text-blue-900 px-4 py-2 rounded-xl border border-blue-200">British Gas</span>
            <span className="bg-red-50 text-red-900 px-4 py-2 rounded-xl border border-red-200">E.ON Next</span>
            <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-xl border border-blue-200">EDF Energy</span>
            <span className="bg-emerald-50 text-emerald-900 px-4 py-2 rounded-xl border border-emerald-200">OVO Energy</span>
            <span className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-xl border border-indigo-200">Scottish Power</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR */}
      <SavingsCalculator />

      {/* ENERGY OFFERS GRID */}
      <EnergyOffersGrid />

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Opinie klientów, którzy zmienili rachunki za prąd
            </h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* BEZPALTNY PORADNIK PDF */}
      <GuideDownloadCTA service="energia" />

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Pytania i odpowiedzi — Energia w UK
            </h2>
          </div>
          <FaqSection items={energiaFaq} />
        </div>
      </section>

    </div>
  );
}
