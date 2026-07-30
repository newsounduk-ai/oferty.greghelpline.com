import React from 'react';
import { Smartphone, CheckCircle2, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import SimDataEstimator from '../components/SimDataEstimator';
import MultiStepForm from '../components/MultiStepForm';
import AffiliateGrid from '../components/AffiliateGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import { referralLinks } from '../data/reflinks';

export default function SimPage() {

  const simFaq = [
    {
      question: "Jak zachować swój polski lub brytyjski numer przy zmianie sieci (PAC Code)?",
      answer: "Zachowanie numeru w UK jest błyskawiczne i darmowe! Wysyłasz darmowego SMS-a o treści 'PAC' na numer 65075. Otrzymujesz 9-cyfrowy kod PAC, który przekazujesz nowej sieci. Przeniesienie trwa 24 godziny."
    },
    {
      question: "Czy dostęp do sieci 5G wymaga dodatkowych opłat?",
      answer: "Nie. Wszystkie rekomendowane przez nas oferty SIM-only w sieciach Smarty, iD Mobile, Three, EE i Vodafone posiadają superszybki dostęp do 5G bez żadnych dopłat."
    },
    {
      question: "Co zrobić, jeśli nie posiadam historii kredytowej w UK (Credit Check)?",
      answer: "Dla osób bez długiej historii w UK rekomendujemy pakiety SIM 30-dniowe (No Credit Check) np. w Smarty, giffgaff czy Lycamobile. Aktywacja karty następuje bez badania zdolności w Experian/Equifax."
    },
    {
      question: "Czy Wasze karty SIM mają darmowy roaming w Unii Europejskiej / Polsce?",
      answer: "Tak! Sieci takie jak Smarty, iD Mobile czy giffgaff oferują darmowy roaming w Polsce i całej UE (do 12 GB lub 30 GB w ramach pakietu) bez żadnych dziennych opłat."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-indigo-50/70 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4 text-indigo-600" />
                Abonamenty & Karty SIM w UK po Polsku
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.1]">
                Najtańsze karty SIM-Only i telefony <span className="text-indigo-600 underline decoration-amber-400 decoration-wavy decoration-2">od £6/miesięcznie</span>.
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Pomożemy Ci przenieść numer, wybrać nielimitowane gigabajty 5G bez badania historii kredytowej lub zamówić najnowszy smartfon w najniższej cenie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Darmowe zachowanie obecnego numeru (PAC Code)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Umowy 30-dniowe bez zobowiązań</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Darmowy roaming w Polsce i UE</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Obsługa i pomoc w aktywacji po polsku</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#formularz-sekcja"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Smartphone className="w-5 h-5 text-amber-300" />
                  <span>Wybierz idealny pakiet SIM</span>
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
              <MultiStepForm service="sim" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-6">
            Partnerzy telefonii komórkowej w UK:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-display font-black text-sm md:text-base text-gray-700">
            <span className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-xl border border-indigo-200">Smarty Mobile</span>
            <span className="bg-[#0B1F3A] text-white px-4 py-2 rounded-xl">iD Mobile</span>
            <span className="bg-purple-50 text-purple-900 px-4 py-2 rounded-xl border border-purple-200">Three UK (3)</span>
            <span className="bg-teal-50 text-teal-900 px-4 py-2 rounded-xl border border-teal-200">EE Mobile</span>
            <span className="bg-red-50 text-red-900 px-4 py-2 rounded-xl border border-red-200">Vodafone</span>
            <span className="bg-amber-50 text-amber-900 px-4 py-2 rounded-xl border border-amber-200">giffgaff</span>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <SimDataEstimator />

      {/* AFFILIATE OFFERS GRID */}
      <AffiliateGrid
        title="Promocyjne Oferty SIM-Only z Szybką Zamówieniową Wysyłką"
        subtitle="Zamów kartę SIM bezpośrednio od operatora i ciesz się darmową dostawą na brytyjski adres."
        links={referralLinks.sim}
        serviceTheme="sim"
      />

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Opinie użytkowników kart SIM
            </h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Pytania i odpowiedzi — Telefon i SIM w UK
            </h2>
          </div>
          <FaqSection items={simFaq} />
        </div>
      </section>

    </div>
  );
}
