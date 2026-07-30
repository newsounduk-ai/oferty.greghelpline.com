import React from 'react';
import { Wifi, Zap, CheckCircle2, Phone, ShieldCheck, ArrowRight, Gauge, Sparkles, HelpCircle } from 'lucide-react';
import SpeedTestWidget from '../components/SpeedTestWidget';
import MultiStepForm from '../components/MultiStepForm';
import AffiliateGrid from '../components/AffiliateGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import { referralLinks } from '../data/reflinks';

export default function InternetPage() {

  const internetFaq = [
    {
      question: "Jakie sieci światłowodowe sprawdzacie pod moim kodem pocztowym?",
      answer: "Sprawdzamy pełny zasięg brytyjskiej infrastruktury: Openreach (BT, Sky, TalkTalk, Vodafone, Plusnet), Virgin Media (sieć kablowa i światłowodowa) oraz niezależnych dostawców superszybkiego światłowodu tzw. AltNets (Community Fibre, Hyperoptic, CityFibre)."
    },
    {
      question: "Czy po zmianie dostawcy muszę oddać stary router?",
      answer: "Większość dostawców przesyła darmową zaadresowaną kopertę zwrotną na stary router. Nowy dostawca wyśle nowoczesny router Wi-Fi 6 lub Mesh z wyprzedzeniem przed dniem aktywacji."
    },
    {
      question: "Czy muszę płacić za opłatę aktywacyjną (Activation Fee)?",
      answer: "Dzięki specjalnym umowom partnerskim Greg Helpline większość naszych ofert ma wpisaną promocyjną darmową aktywację (£0) lub zwrot gotówki (Cashback)."
    },
    {
      question: "Co zrobić, jeśli mieszkałem w wynajmowanym domu/mieszkaniu?",
      answer: "Światłowód i standardowy internet nie wymagają wiercenia nowej instalacji, jeśli w domu jest już gniazdko telefoniczne lub Openreach/Virgin. Jeśli potrzebna jest nowa linia, załatwiamy zgodę landlorda w kilka minut."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-blue-50/80 via-white to-gray-50 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <Wifi className="w-4 h-4 text-blue-600" />
                Światłowód & Internet w UK po Polsku
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.1]">
                Najszybszy światłowód w UK <span className="text-blue-600 underline decoration-amber-400 decoration-wavy decoration-2">do 1 Gbps</span> od £18/m-c.
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Sprawdzimy zasięg u wszystkich czołowych dostawców (Virgin Media, Sky, BT, Vodafone, TalkTalk, Community Fibre) pod Twoim kodem pocztowym i podłączymy internet w języku polskim!
              </p>

              {/* Benefits checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Darmowy router Wi-Fi 6 w zestawie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Gwarancja stałej prędkości (Full Fibre)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Załatwiamy rezygnację ze starego dostawcy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Polskojęzyczne wsparcie techniczne</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#formularz-sekcja"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Wifi className="w-5 h-5 text-amber-300" />
                  <span>Sprawdź swój kod pocztowy</span>
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
              <MultiStepForm service="internet" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR LOGOS */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-6">
            Porównujemy stawkę i zasięg u dostawców:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80 font-display font-black text-sm md:text-base text-gray-700">
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-red-600">Virgin Media</span>
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-blue-600">Sky Broadband</span>
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-indigo-700">BT Full Fibre</span>
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-purple-600">TalkTalk</span>
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-red-700">Vodafone</span>
            <span className="bg-gray-100 px-4 py-2 rounded-xl text-pink-600">Community Fibre</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SPEED TEST CALCULATOR */}
      <SpeedTestWidget />

      {/* AFFILIATE OFFERS GRID */}
      <AffiliateGrid
        title="Promocyjne Oferty Światłowodu — Zamów Od Razu Online"
        subtitle="Wybraliśmy najlepsze oficjalne pakiety z gwarantowanym prezentem gotówkowym lub bonem Amazon."
        links={referralLinks.internet}
        serviceTheme="internet"
      />

      {/* REVIEWS SLIDER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Co mówią nasi klienci o usłudze internetowej?
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
              Najczęściej zadawane pytania — Internet w UK
            </h2>
          </div>
          <FaqSection items={internetFaq} />
        </div>
      </section>

    </div>
  );
}
