import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wifi, Zap, Smartphone, ShieldCheck, Palmtree, Phone, ArrowRight, CheckCircle2, Sparkles, Star, Users } from 'lucide-react';
import MultiStepForm from '../components/MultiStepForm';
import AffiliateGrid from '../components/AffiliateGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import { referralLinks } from '../data/reflinks';
import { ServiceType } from '../types';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceType>('energia');

  const services = [
    {
      id: 'internet' as ServiceType,
      path: '/internet',
      title: 'Internet & Światłowód',
      subtitle: 'Szybki światłowód do 1 Gbps od £18/m-c',
      icon: Wifi,
      color: 'bg-blue-600 text-white',
      badge: 'Brak aktywacji'
    },
    {
      id: 'energia' as ServiceType,
      path: '/energia',
      title: 'Prąd & Gaz',
      subtitle: 'Tanie taryfy stałe i dynamiczne w UK',
      icon: Zap,
      color: 'bg-amber-500 text-white',
      badge: 'Oszczędność do £350'
    },
    {
      id: 'sim' as ServiceType,
      path: '/sim',
      title: 'SIM & Telefony',
      subtitle: 'Karty SIM-only od £6/m-c bez umowy',
      icon: Smartphone,
      color: 'bg-indigo-600 text-white',
      badge: 'Nielimitowane 5G'
    },
    {
      id: 'ubezpieczenia' as ServiceType,
      path: '/ubezpieczenia',
      title: 'Ubezpieczenia w UK',
      subtitle: 'Zdrowotne, Auto OC/AC, Na Życie',
      icon: ShieldCheck,
      color: 'bg-emerald-600 text-white',
      badge: 'Polscy doradcy'
    },
    {
      id: 'wakacje' as ServiceType,
      path: '/wakacje',
      title: 'Wakacje & Podróże',
      subtitle: 'Wczasy, City Break, All Inclusive z UK',
      icon: Palmtree,
      color: 'bg-teal-600 text-white',
      badge: 'Najlepsze ceny'
    }
  ];

  // Combine referral links for home page overview
  const allLinks = [
    ...referralLinks.internet.slice(0, 2),
    ...referralLinks.sim.slice(0, 2),
    ...referralLinks.energia.slice(0, 1),
    ...referralLinks.wakacje.slice(0, 1)
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-gray-50 overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-200/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Main Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Polski Doradca w UK • 100% Bezpłatna Pomoc
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-xs">
                  <img
                    src="/41242265-adb5-402b-8aff-f8d0bfb77511.jpg"
                    alt="Grzegorz (Greg)"
                    className="w-6 h-6 rounded-full object-cover border-2 border-amber-400 shrink-0"
                  />
                  <span>Grzegorz (Greg)</span>
                </div>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.1]">
                Porównaj i zmień rachunki w UK <span className="text-blue-600 underline decoration-amber-400 decoration-wavy decoration-2">całkowicie za darmo</span>.
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Pomagamy Polakom w Wielkiej Brytanii w wyborze najtańszego internetu, energii (prąd i gaz), kart SIM/abonamentów, bezpiecznych ubezpieczeń oraz wymarzonych wakacji i wycieczek z UK. Cała obsługa w języku polskim!
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Obsługa po polsku</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero ukrytych opłat</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Oficjalni partnerzy</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Szybka realizacja</span>
                </div>
              </div>

              {/* Call CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+447491978400"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0B1F3A] hover:bg-black text-white font-bold rounded-2xl text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
                  <span>Zadzwoń: 07491 978400</span>
                </a>
                
                <a
                  href="#formularz-sekcja"
                  className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-gray-50 text-[#0B1F3A] font-bold rounded-2xl text-sm transition-all border border-gray-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Wypełnij formularz</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </a>
              </div>

            </div>

            {/* Right Col: Interactive Multi-Service Card Selection */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 relative">
                <div className="text-xs font-mono font-bold uppercase text-amber-600 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Wybierz usługę, którą chcesz porównać:
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {services.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedService === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedService(item.id)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 shadow-md ring-2 ring-blue-500/20'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center mb-2 shadow-xs`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="font-display font-bold text-xs text-[#0B1F3A]">{item.title}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{item.subtitle}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Embedded Form for selected service */}
                <div id="formularz-sekcja">
                  <MultiStepForm service={selectedService} inline />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED BANNER: GREGHELPLINE MONEY CHECK */}
      <section className="py-10 bg-gradient-to-r from-[#0B1F3A] via-[#101827] to-[#0B1F3A] text-white border-y border-amber-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-700/80 shadow-2xl">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>GŁÓWNY SYSTEM AUDYTU KOSZTÓW</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                Sprawdź, czy nie przepłacasz za swoje usługi w UK
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl">
                Internet • Energia (Prąd & Gaz) • Karty SIM • Telefony • Ubezpieczenia. Wybierz dowolne usługi i odbierz bezpłatny raport oszczędności po polsku.
              </p>
            </div>

            <NavLink
              to="/money-check"
              className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold text-sm rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 shrink-0 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>ROZPOCZNIJ MONEY CHECK</span>
              <ArrowRight className="w-5 h-5 text-[#0B1F3A]" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SERVICE NAVIGATION CARDS */}
      <section className="py-16 md:py-20 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Zobacz szczegóły naszych głównych usług
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
              Kliknij w wybraną zakładkę, aby poznać aktualne promocje i wyliczyć oszczędności.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((serv) => {
              const Icon = serv.icon;
              return (
                <NavLink
                  key={serv.id}
                  to={serv.path}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${serv.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {serv.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                      {serv.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                      {serv.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Otwórz stronę usługi</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </NavLink>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROMO SECTION: TELEFONY W ABONAMENCIE */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#101827] via-[#0B1F3A] to-slate-900 text-white relative overflow-hidden">
        {/* Decorative background lights */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Nowość • Telefony i Smartfony w UK</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                📱 Telefony w abonamencie przez <span className="text-amber-400 underline decoration-amber-400/60 decoration-wavy decoration-2">GregHelpline</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
                Dobierzemy dla Ciebie najlepszy telefon i abonament w UK — szybko, bezpiecznie i po polsku. Zamów online z dostawą do domu: flagowe modele Apple iPhone, Samsung Galaxy, Google Pixel 11 oraz odnowione smartfony z 12-miesięczną gwarancją.
              </p>

              {/* Fast perks list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Wsparcie i doradztwo po polsku</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Pixel 11, Galaxy Z & iPhone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Darmowa i szybka dostawa w UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bezpieczne zamówienia online</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <NavLink
                  to="/telefony"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Smartphone className="w-5 h-5 text-[#0B1F3A]" />
                  <span>Sprawdź Ofertę Telefonów</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
                </NavLink>

                <a
                  href="tel:+447491978400"
                  className="w-full sm:w-auto px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm transition-all border border-slate-700 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>07491 978400</span>
                </a>
              </div>
            </div>

            {/* Right Cards Showcase */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature 1 */}
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                    Flagowiec
                  </span>
                  <Smartphone className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Google Pixel 11 Family</h4>
                <p className="text-xs text-slate-300 mt-1">Najnowsze modele Pixel z asystentem AI w abonamencie.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                    Składane Ekrany
                  </span>
                  <Smartphone className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Samsung Galaxy Z Series</h4>
                <p className="text-xs text-slate-300 mt-1">Galaxy Z Flip8, Galaxy Z Fold8 oraz Z Fold8 Ultra.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                    Przedłużenie
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Vodafone Upgrade</h4>
                <p className="text-xs text-slate-300 mt-1">Przedłuż umowę Vodafone i wymień telefon na nowszy.</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                    Eko & Oszczędność
                  </span>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Refurbished Handset</h4>
                <p className="text-xs text-slate-300 mt-1">Odnowione smartfony z 12-miesięczną gwarancją.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* AFFILIATE OFFERS OVERVIEW */}
      <AffiliateGrid
        title="Polecane Szybkie Oferty Online Partnerów"
        subtitle="Zaoszczędź czas — zamów internet lub kartę SIM bezpośrednio przez nasze oficjalne linki referencyjne z naliczoną zniżką."
        links={allLinks}
        serviceTheme="internet"
      />

      {/* REVIEWS SLIDER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              Ponad 2500 zadowolonych Polaków w UK
            </div>
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Opinie naszych klientów
            </h2>
          </div>

          <ReviewsSlider />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl md:text-4xl text-[#0B1F3A] tracking-tight">
              Często Zadawane Pytania (FAQ)
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
              Wszystko, co musisz wiedzieć o bezpłatnej pomocy Greg Helpline w UK.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

    </div>
  );
}
