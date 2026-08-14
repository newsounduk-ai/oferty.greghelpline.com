import React from 'react';
import { ShieldCheck, CheckCircle2, Phone, HeartPulse, Car, Home, Sparkles } from 'lucide-react';
import InsuranceChecklist from '../components/InsuranceChecklist';
import MultiStepForm from '../components/MultiStepForm';
import InsuranceOffersGrid from '../components/InsuranceOffersGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import GuideDownloadCTA from '../components/GuideDownloadCTA';

export default function UbezpieczeniaPage() {

  const ubezpieczeniaFaq = [
    {
      question: "Czy brytyjskie prywatne ubezpieczenie zdrowotne (Private Health Insurance) zastępuje NHS?",
      answer: "Nie, polisa prywatna działa równolegle z NHS. Zapewnia natychmiastowy, szybki dostęp do wybitnych specjalistów i prywatnych szpitali Bupa, AXA czy Aviva z pominięciem wielomiesięcznych kolejki oczekiwania."
    },
    {
      question: "Czy polskie zniżki za bezszkodową jazdę (No Claims Bonus) są uznawane w UK?",
      answer: "Pewni dostawcy ubezpieczeń komunikacyjnych w UK uznają zaświadczenia o bezszkodowej jazdy z Polski wydane w języku angielskim lub przetłumaczone przysięgle. Pomagamy w przekazaniu dokumentów brokerowi."
    },
    {
      question: "Co to jest ubezpieczenie spłaty kredytu hipotecznego (Mortgage Protection)?",
      answer: "Jest to polisa chroniąca Twój dom i rodzinę. W przypadku poważnego zachorowania, niezdolności do pracy lub śmierci ubezpieczyciel spłaca pozostałą kwotę kredytu hipotecznego w UK."
    },
    {
      question: "Czy porada ubezpieczeniowa Greg Helpline jest darmowa?",
      answer: "Tak, wstępna analiza i połączenie z autoryzowanym brokerem licencjonowanym przez FCA (Financial Conduct Authority) są bezpłatne."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-emerald-50/70 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Ubezpieczenia w UK po Polsku
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.1]">
                Ochrona zdrowia, auta i majątku <span className="text-emerald-600 underline decoration-amber-400 decoration-wavy decoration-2">z polskim wsparciem</span>.
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Pomożemy Ci dobrać prywatne ubezpieczenie medyczne (Bupa, AXA), ubezpieczenie samochodu OC/AC oraz polisę na życie i kredyt bez skomplikowanego żargonu finansowego.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Szybki dostęp do prywatnych lekarzy w UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Uznanie polskich zniżek No Claims Bonus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Zabezpieczenie spłaty kredytu w UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>100% Bezpłatna i poufna konsultacja</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#formularz-sekcja"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <ShieldCheck className="w-5 h-5 text-amber-300" />
                  <span>Darmowa konsultacja polisy</span>
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
              <MultiStepForm service="ubezpieczenia" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-6">
            Współpracujemy z licencjonowanymi brytyjskimi brokerami FCA:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-display font-black text-sm md:text-base text-gray-700">
            <span className="bg-blue-50 text-blue-900 px-4 py-2 rounded-xl border border-blue-200">Bupa Health</span>
            <span className="bg-emerald-50 text-emerald-900 px-4 py-2 rounded-xl border border-emerald-200">AXA Health</span>
            <span className="bg-amber-50 text-amber-900 px-4 py-2 rounded-xl border border-amber-200">Aviva UK</span>
            <span className="bg-pink-50 text-pink-900 px-4 py-2 rounded-xl border border-pink-200">Vitality</span>
            <span className="bg-[#0B1F3A] text-white px-4 py-2 rounded-xl">Legal & General</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CHECKLIST */}
      <InsuranceChecklist />

      {/* INSURANCE OFFERS GRID (LEADS-ONLY) */}
      <InsuranceOffersGrid />

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Opinie klientów o ubezpieczeniach
            </h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* BEZPŁATNY PORADNIK PDF */}
      <GuideDownloadCTA service="ubezpieczenia" />

      {/* FAQ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Pytania i odpowiedzi — Ubezpieczenia w UK
            </h2>
          </div>
          <FaqSection items={ubezpieczeniaFaq} />
        </div>
      </section>

    </div>
  );
}
