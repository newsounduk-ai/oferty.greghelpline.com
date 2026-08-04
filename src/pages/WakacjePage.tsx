import React from 'react';
import { 
  Palmtree, CheckCircle2, ShieldCheck, Sun, Compass, MapPin, 
  Clock, HeartHandshake, PhoneCall, Sparkles, Plane, Hotel, Globe
} from 'lucide-react';
import MultiStepForm from '../components/MultiStepForm';
import AffiliateGrid from '../components/AffiliateGrid';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection, { FaqItem } from '../components/FaqSection';
import GuideDownloadCTA from '../components/GuideDownloadCTA';
import VacationBudgetCalculator from '../components/VacationBudgetCalculator';
import { referralLinks } from '../data/reflinks';

const vacationReviews = [
  {
    id: 'v_rev_1',
    name: 'Michał i Kasia Adamscy',
    city: 'Londyn (Luton)',
    rating: 5,
    text: 'Pan Grzegorz z Greg Helpline znalazł dla naszej rodziny genialne wczasy All Inclusive w Hiszpanii z wylotem z Luton. Wszystko omówiliśmy po polsku, bez żadnej prowizji i stresu. Wspaniałe wakacje!',
    initials: 'MA',
    color: 'bg-[#0B1F3A] text-white'
  },
  {
    id: 'v_rev_2',
    name: 'Dorota Jabłońska',
    city: 'Manchester',
    rating: 5,
    text: 'Szukałam wycieczki typu City Break do Rzymu na naszą rocznicę. Doradca wyszukał mi świetne połączenie lotnicze z Manchesteru i urokliwy hotel blisko Koloseum. Super doradztwo po polsku!',
    initials: 'DJ',
    color: 'bg-teal-700 text-white'
  },
  {
    id: 'v_rev_3',
    name: 'Robert i Ewa Szymańscy',
    city: 'Birmingham',
    rating: 5,
    text: 'Mieliśmy specyficzne wymagania odnośnie wakacji z dwójką dzieci i wylotu bezpośrednio z Birmingham. Zespół Greg Helpline dobrał idealną ofertę w Turcji ze zjeżdżalniami wodnymi. Gorąco polecam!',
    initials: 'RS',
    color: 'bg-amber-600 text-white'
  },
  {
    id: 'v_rev_4',
    name: 'Agnieszka Piotrowska',
    city: 'Leeds',
    rating: 5,
    text: 'Zawsze bałam się sama rezerwować zagraniczne wakacje na brytyjskich portalach ze względu na język. Greg Helpline pomógł mi wybrać piękną wyspę w Grecji i wytłumaczył wszystkie szczegóły rezerwacji. Dziękuję!',
    initials: 'AP',
    color: 'bg-indigo-600 text-white'
  },
  {
    id: 'v_rev_5',
    name: 'Piotr Wieczorek',
    city: 'Bristol',
    rating: 5,
    text: 'Skorzystałem z rekomendacji wyjazdu na stronie Greg Helpline. Rezerwacja przez Trip.com poszła błyskawicznie, a cena za hotel 5-gwiazdkowy z lotami była znacznie niższa niż gdzie indziej.',
    initials: 'PW',
    color: 'bg-emerald-600 text-white'
  },
  {
    id: 'v_rev_6',
    name: 'Tomasz i Karolina Kaczmarek',
    city: 'Southampton',
    rating: 5,
    text: 'Zorganizowali nam cudowny urlop w Egipcie w środku zimowego sezonu w UK. Słońce, świetne jedzenie i pomoc po polsku na każdym etapie. Na pewno wrócimy przy kolejnych wakacjach!',
    initials: 'TK',
    color: 'bg-[#0B1F3A] text-white'
  }
];

const vacationFaq: FaqItem[] = [
  {
    question: "Czy usługa doradztwa wakacyjnego Greg Helpline jest całkowicie darmowa?",
    answer: "Tak! Nasza pomoc w wyszukiwaniu, porównywaniu i planowaniu wakacji z lotami z UK jest w 100% bezpłatna. Nie pobieramy żadnych ukrytych opłat ani prowizji od klientów."
  },
  {
    question: "Czy organizujecie wyloty ze wszystkich głównych lotnisk w Wielkiej Brytanii?",
    answer: "Tak! Pomożemy Ci znaleźć i dobrać połączenia z dowolnego lotniska w UK, m.in. London Stansted, Luton, Heathrow, Gatwick, Manchester, Birmingham, Bristol, East Midlands, Edinburgh i innych."
  },
  {
    question: "Czy cała obsługa i pomoc w wyborze wakacji odbywa się po polsku?",
    answer: "Absolutnie tak. Rozmawiamy i korespondujemy wyłącznie po polsku. Wytłumaczymy szczegóły dotyczące hoteli, wyżywienia, transferów lotniskowych i polityki bagażowej bez barier językowych."
  },
  {
    question: "Czy pomagacie również w rezerwacji ofert Last Minute?",
    answer: "Oczywiście! Jeśli planujesz wylot w ciągu najbliższych kilku dni lub tygodni, nasz doradca sprawdzi aktualne promocje wyprzedażowe u partnerów rezerwacyjnych i doradzi najkorzystniejszą opcję."
  }
];

export default function WakacjePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-teal-50/70 via-white to-gray-50/30 pt-8 md:pt-12 pb-16 overflow-hidden border-b border-gray-100" id="formularz-wakacje">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 shadow-xs">
                <Palmtree className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-xs font-bold font-sans">
                  Wakacje & Wycieczki z UK po Polsku
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] leading-[1.15] tracking-tight">
                Zaplanujemy Twoje wakacje i znajdziemy najlepszą ofertę — <span className="text-teal-600 underline decoration-teal-300 decoration-wavy decoration-2">po polsku, bez prowizji</span>
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl">
                Szukasz wczasów All-Inclusive, romantycznego City Break czy słonecznych wakacji z dziećmi? Zorganizujemy cały proces, porównamy ceny i znajdziemy loty z dogodnego dla Ciebie lotniska w UK.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Darmowa pomoc w doborze oferty z lotami z UK',
                  'Rezerwacja hoteli, przelotów i atrakcji po polsku',
                  'Najlepsze promocje z lotnisk w UK (Londyn, Manchester, Bham...)',
                  '100% Bezpłatne doradztwo i brak prowizji'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-gray-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-gray-800 leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Phone Direct Call Badge */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="tel:07491978400"
                  className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0B1F3A] hover:bg-black text-white font-bold text-xs shadow-lg transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Zadzwoń do doradcy: 07491 978400</span>
                </a>
                <span className="text-xs text-gray-500 font-sans">
                  Pn-Sb 9:00 - 18:00 • Zawsze po polsku
                </span>
              </div>
            </div>

            {/* Right MultiStep Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-teal-100 relative">
                <div className="absolute -top-3 right-6 bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Darmowa Wycena
                </div>
                <MultiStepForm service="wakacje" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TRUST BAR / PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50/80 rounded-3xl p-6 md:p-8 border border-gray-100 text-center">
          <p className="text-xs font-bold text-gray-500 font-sans uppercase tracking-wider mb-6">
            Współpracujemy z licencjonowanymi biurami podróży i sprawdzonymi platformami rezerwacyjnymi
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-display font-black text-lg text-teal-800">Trip.com</span>
            <span className="font-display font-black text-lg text-blue-900">Booking.com</span>
            <span className="font-display font-black text-lg text-red-600">TUI UK</span>
            <span className="font-display font-black text-lg text-sky-600">Jet2holidays</span>
            <span className="font-display font-black text-lg text-orange-600">easyJet holidays</span>
            <span className="font-display font-black text-lg text-[#0B1F3A]">Expedia</span>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS (6 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Dlaczego Warto Z Nami Wakacjować?
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A]">
            Bezstresowe wakacje szyte na miarę Twoich potrzeb
          </h2>
          <p className="mt-3 text-xs md:text-sm text-gray-600 font-sans">
            Zapomnij o męczącym porównywaniu setek stron i niejasnych warunkach po angielsku. Pomożemy Ci wybrać najlepszą opcję.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: HeartHandshake,
              title: '1. Darmowa pomoc w doborze',
              desc: 'Nie płacisz ani grosza za naszą pracę i doradztwo. Pomożemy wybrać najlepszy kierunek i hotel.'
            },
            {
              icon: Globe,
              title: '2. Porównanie wielu dostawców',
              desc: 'Przeszukujemy liczne sprawdzony bazy i portale turystyczne, by znaleźć najniższą cenę za wyjazd.'
            },
            {
              icon: ShieldCheck,
              title: '3. Wszystko po polsku',
              desc: 'Pełne wsparcie po polsku. Wytłumaczymy kwestie bagażu, wyżywienia, ubezpieczenia i transferu.'
            },
            {
              icon: Sun,
              title: '4. Najnowsze okazje sezonowe',
              desc: 'Mamy dostęp do aktualnych ofert promocyjnych, zniżek dla rodzin z dziećmi oraz opcji Last Minute.'
            },
            {
              icon: Plane,
              title: '5. Loty z Twojego lotniska w UK',
              desc: 'Dobieramy wyloty bezpośrednio z najbliższego lotniska (Stansted, Luton, Bham, Manchester itd.).'
            },
            {
              icon: Clock,
              title: '6. Szybki i przyjazny kontakt',
              desc: 'Odbieramy telefony i oddzwaniamy sprawnie, by nie przegapić najlepszych i szybko znikających promocji.'
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1F3A] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HOW IT WORKS (4 STEPS) */}
      <section className="bg-gray-50/60 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A]">
              Jak wygląda rezerwacja wakacji krok po kroku?
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
              Prosty, 4-etapowy proces rezerwacji idealnego wypoczynku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Wypełniasz formularz',
                desc: 'Podajesz preferencje: typ wyjazdu, termin, budżet oraz dane do kontaktu.'
              },
              {
                num: '02',
                title: 'Kontakt doradcy',
                desc: 'Kontaktujemy się telefonicznie po polsku, by doprecyzować szczegóły wyjazdu.'
              },
              {
                num: '03',
                title: 'Porównanie ofert',
                desc: 'Przeszukujemy bazę i przedstawiamy najatrakcyjniejsze cenowo opcje.'
              },
              {
                num: '04',
                title: 'Rezerwacja i wyjazd',
                desc: 'Wyborze towarzyszy spokój i pewność. Pakujesz walizki i lecisz na wakacje!'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative">
                <span className="font-display font-black text-3xl text-teal-500/30 block mb-2">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-sm text-[#0B1F3A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VACATION BUDGET CALCULATOR WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VacationBudgetCalculator />
      </section>

      {/* 6. AFFILIATE SECTION */}
      <AffiliateGrid
        links={referralLinks.wakacje}
        serviceTheme="wakacje"
        title="Rezerwujesz sam? Oferty naszych sprawdzonych partnerów"
        subtitle="Kliknij poniżej, aby przejść do oficjalnego portalu Trip.com i zarezerwować loty oraz hotele z rabatem."
      />

      {/* 7. REVIEWS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Opinie Polaków w UK o wakacjach z Greg Helpline
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
            Zobacz, jak nasi rodacy oceniają pomoc w organizacji wyjazdów i wczasów.
          </p>
        </div>
        <ReviewsSlider reviews={vacationReviews} />
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Najczęściej zadawane pytania (FAQ)
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-600 font-sans">
            Masz pytania odnośnie organizacji wyjazdu? Odpowiadamy!
          </p>
        </div>
        <FaqSection items={vacationFaq} />
      </section>

      <GuideDownloadCTA service="wakacje" />

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B1F3A] to-teal-950 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl border border-teal-800/50 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white">
              Gotowy na niezapomniane wakacje?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans">
              Zostaw dane w formularzu lub zadzwoń pod numer 07491 978400. Pomożemy wybrać najlepszą ofertę bez opłat i prowizji!
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('formularz-wakacje');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-8 bg-amber-400 hover:bg-amber-500 text-[#0B1F3A] font-sans font-black text-xs rounded-2xl transition-all shadow-lg cursor-pointer"
              >
                Zamów darmową wycenę wakacji
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
