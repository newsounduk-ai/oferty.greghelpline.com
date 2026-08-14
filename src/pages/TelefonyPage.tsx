import React from 'react';
import {
  Smartphone,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  Truck,
  Tag,
  Headphones,
  Award,
  Zap,
  ArrowRight,
  ExternalLink,
  Lock,
  ChevronRight,
  Clock,
  ThumbsUp
} from 'lucide-react';
import PhoneOffersGrid from '../components/PhoneOffersGrid';
import MultiStepForm from '../components/MultiStepForm';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import GuideDownloadCTA from '../components/GuideDownloadCTA';

export default function TelefonyPage() {
  const brands = [
    {
      name: 'Apple',
      badge: 'iPhone 16 / 15 Pro',
      desc: 'Najnowsze generacje iOS z nielimitowanymi pakietami 5G',
      color: 'from-slate-800 to-slate-950',
      textColor: 'text-white'
    },
    {
      name: 'Samsung',
      badge: 'Galaxy S25 / Z Fold',
      desc: 'Topowe flagowce z ekranami Dynamic AMOLED i technologią AI',
      color: 'from-blue-900 to-indigo-950',
      textColor: 'text-blue-200'
    },
    {
      name: 'Google Pixel',
      badge: 'Pixel 11 & Pixel 9',
      desc: 'Czysty Android, niesamowity aparat i wbudowany asystent Gemini',
      color: 'from-amber-950 to-slate-900',
      textColor: 'text-amber-200'
    },
    {
      name: 'Vodafone',
      badge: 'Sieć & Kontrakty',
      desc: 'Elastyczne plany wymiany telefonu, roaming i stały zasięg',
      color: 'from-red-950 to-slate-900',
      textColor: 'text-red-200'
    }
  ];

  const benefits = [
    {
      icon: Headphones,
      title: 'Pomoc po polsku',
      description: 'Pełne wsparcie doradcy w języku ojczystym — od wyboru modelu po procedurę zamówienia i aktywację.'
    },
    {
      icon: Smartphone,
      title: 'Najnowsze modele telefonów',
      description: 'Dostęp do premierowych flagowców Apple iPhone, Samsung Galaxy i Google Pixel od oficjalnych dystrybutorów.'
    },
    {
      icon: Tag,
      title: 'Atrakcyjne ceny i promocje',
      description: 'Dostęp do taryf z £0 wpłaty początkowej (Upfront Cost), zwrotów cashback i promocyjnych rat abonamentowych.'
    },
    {
      icon: Truck,
      title: 'Szybka dostawa w UK',
      description: 'Bezpieczna przesyłka kurierska prosto pod Twój brytyjski adres domowy z możliwością śledzenia paczki.'
    },
    {
      icon: ShieldCheck,
      title: 'Bezpieczne zamówienie online',
      description: 'Wszystkie zakupy realizowane są bezpośrednio u autoryzowanych brytyjskich operatorów z pełną gwarancją.'
    }
  ];

  const telefonyFaq = [
    {
      question: "Jakie warunki trzeba spełnić, aby wziąć telefon w abonamencie w UK?",
      answer: "Większość brytyjskich sieci wymaga: wieku min. 18 lat, stałego brytyjskiego adresu zamieszkania (min. 3 lata w UK lub potwierdzenia adresu) oraz brytyjskiego konta bankowego z kartą debetową. Każde zamówienie ze sprzętem przechodzi standardowy Credit Check."
    },
    {
      question: "Co jeśli nie mam wystarczającej historii kredytowej na nowy telefon?",
      answer: "W takiej sytuacji rekomendujemy: telefony odnowione (Refurbished) o niższym progu weryfikacji, kartę SIM-Only na 30 dni (która buduje historię punktową w UK) lub zakup samego urządzenia (Handset Only) bez wiążącej umowy."
    },
    {
      question: "Czy mogę zachować swój dotychczasowy numer telefonu?",
      answer: "Oczywiście! Wystarczy wysłać darmowy SMS o treści 'PAC' na numer 65075 ze swojej obecnej sieci. Otrzymany 9-cyfrowy kod PAC wpisujesz podczas zamawiania nowego abonamentu, a numer zostanie bezpłatnie przeniesiony."
    },
    {
      question: "Czy telefony kupione w UK posiadają polskie menu i brak blokady SIM-lock?",
      answer: "Tak, wszystkie współczesne smartfony w UK są fabrycznie odblokowane (bez SIM-locka) i posiadają pełne wsparcie dla języka polskiego w ustawieniach systemowych."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-900 via-[#101827] to-[#0B1F3A] text-white overflow-hidden">
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Oficjalne Oferty i Doradztwo PL w UK</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                📱 Telefony w abonamencie przez <span className="text-amber-400 underline decoration-amber-400/60 decoration-wavy decoration-2">GregHelpline</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-medium">
                Dobierzemy dla Ciebie najlepszy telefon i abonament w UK — szybko, bezpiecznie i po polsku. Zamów online z dostawą do domu.
              </p>

              {/* Fast Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span>Nowe iPhone, Samsung Galaxy & Google Pixel</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span>Oferty od £0 wkładu własnego (Upfront)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span>Telefony odnowione (Refurbished) z gwarancją</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span>100% bezpłatna pomoc i doradztwo po polsku</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#oferty-telefony"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Smartphone className="w-5 h-5 text-[#0B1F3A]" />
                  <span>Zobacz Promocje Telefonów</span>
                </a>

                <a
                  href="tel:+447491978400"
                  className="w-full sm:w-auto px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm transition-all border border-slate-700 flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Zadzwoń: 07491 978400</span>
                </a>
              </div>

            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5" id="formularz-sekcja">
              <MultiStepForm service="sim" />
            </div>

          </div>
        </div>
      </section>

      {/* BRANDS SECTION: Apple, Samsung, Google Pixel, Vodafone */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Główne Marki i Operatorzy
            </p>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white mt-1">
              Topowe smartfony i zaufane sieci w UK
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${brand.color} p-6 rounded-3xl border border-slate-800 shadow-lg hover:border-amber-400/40 transition-all group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-black text-xl text-white">
                    {brand.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {brand.badge}
                  </span>
                </div>
                <p className={`text-xs ${brand.textColor} font-sans leading-relaxed`}>
                  {brand.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHONE OFFERS GRID COMPONENT */}
      <PhoneOffersGrid />

      {/* BENEFITS SECTION: 5 Key Benefits */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Dlaczego warto zamawiać przez GregHelpline</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0B1F3A] tracking-tight">
              Korzyści zamawiania telefonu w UK
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              Zapewniamy pełen komfort, bezpieczeństwo i przejrzystość na każdym etapie doboru abonamentu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50/80 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] group-hover:bg-amber-500 text-amber-400 group-hover:text-[#0B1F3A] flex items-center justify-center mb-6 shadow-md transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#0B1F3A] group-hover:text-blue-950 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-amber-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Gwarancja jakości i bezpieczeństwa</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION: office@greghelpline.com & 07491 978400 */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0B1F3A] via-[#101827] to-slate-950 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dedykowany Konsultant Telefonii</span>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                  Potrzebujesz pomocy w wyborze telefonu lub taryfy?
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                  Skontaktuj się z nami bezpośrednio. Wyjaśnimy kwestie formalne, sprawdzimy najlepsze promocje i pomożemy złożyć zamówienie w 100% po polsku.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                {/* Phone CTA Card */}
                <a
                  href="tel:+447491978400"
                  className="flex-1 p-5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] shadow-xl hover:shadow-2xl transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A]/80 block">Zadzwoń teraz</span>
                    <span className="font-display font-black text-lg sm:text-xl text-[#0B1F3A] block">07491 978400</span>
                  </div>
                </a>

                {/* Email CTA Card */}
                <a
                  href="mailto:office@greghelpline.com"
                  className="flex-1 p-5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 shadow-md transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-700 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Napisz e-mail</span>
                    <span className="font-display font-bold text-sm sm:text-base text-white truncate block">office@greghelpline.com</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SLIDER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Opinie klientów o telefonach i abonamentach
            </h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* BEZPŁATNY PORADNIK PDF */}
      <GuideDownloadCTA service="sim" />

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Pytania i odpowiedzi — Telefony w UK
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
              Najważniejsze informacje o zamówieniach smartfonów i umowach abonamentowych w Wielkiej Brytanii.
            </p>
          </div>
          <FaqSection items={telefonyFaq} />
        </div>
      </section>

    </div>
  );
}
