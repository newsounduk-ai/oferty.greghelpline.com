import React, { useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
  Wifi,
  Radio,
  Smartphone,
  Car,
  Clock,
  ThumbsUp,
  Award,
  HelpCircle
} from 'lucide-react';
import MoneyCheckWizard from '../components/money-check/MoneyCheckWizard';
import ReviewsSlider from '../components/ReviewsSlider';
import FaqSection from '../components/FaqSection';
import GuideDownloadCTA from '../components/GuideDownloadCTA';

export default function MoneyCheckPage() {
  useEffect(() => {
    document.title = 'GregHelpline Money Check — Sprawdź czy nie przepłacasz za usługi w UK';
  }, []);

  const benefits = [
    {
      icon: Award,
      title: '100% Bezpłatna Analiza',
      desc: 'Weryfikacja Twoich obecnych rachunków jest całkowicie darmowa i niezobowiązująca.'
    },
    {
      icon: ShieldCheck,
      title: 'Pomoc w 100% po polsku',
      desc: 'Wszystkie zawiłości umów, kruczki prawne i taryfy w UK wyjaśniamy prosto w ojczystym języku.'
    },
    {
      icon: Zap,
      title: 'Dostęp do ekskluzywnych ofert',
      desc: 'Porównujemy taryfy niedostępne bezpośrednio w wyszukiwarkach, w tym pakiety z bonusami cashback.'
    },
    {
      icon: Clock,
      title: 'Oszczędność czasu i formalności',
      desc: 'Pomożemy w procedurze przełączenia dostawcy (Switching) bez przestojów w dostawie usług.'
    }
  ];

  const moneyCheckFaq = [
    {
      question: 'Jak działa GregHelpline Money Check?',
      answer: 'Wypełniasz krótki, dynamiczny formularz, wybierając usługi, które chcesz sprawdzić (np. Internet, Prąd/Gaz, Karty SIM, Telefon czy Ubezpieczenie). Nasz polski doradca analizuje Twoje obecne stawki i weryfikuje bazę brytyjskich operatorów, przedstawiając zestawienie korzystniejszych taryf.'
    },
    {
      question: 'Czy sprawdzenie rachunków do czegoś mnie zobowiązuje?',
      answer: 'Absolutnie nie! Usługa Money Check jest w 100% bezpłatna i niezobowiązująca. To Ty decydujesz, czy chcesz skorzystać ze znalezionej oferty, czy pozostać przy obecnym dostawcy.'
    },
    {
      question: 'Co jeśli nadal trwa moja obecna umowa?',
      answer: 'W formularzu możesz podać orientacyjną datę zakończenia umowy. Dzięki temu nie tylko sprawdzimy obecne możliwości, ale również zapiszemy termin bezpłatnego przypomnienia (Renewal Reminder), aby zmienić umowę na tańszą dokładnie wtedy, gdy wygasną opłaty karne za wcześniejsze rozwiązanie.'
    },
    {
      question: 'Czy muszę wysyłać rachunki lub dokumenty?',
      answer: 'Załączenie rachunku (np. za prąd/gaz) jest całkowicie opcjonalne, choć pozwala nam na precyzyjne odczytanie numeru MPAN/MPRN i dokładnych stawek za kWh. Możesz jednak po prostu podać szacunkowy koszt miesięczny.'
    },
    {
      question: 'Ile czasu trwa przygotowanie analizy?',
      answer: 'W większości przypadków polski doradca kontaktuje się z gotowym wyliczeniem w ciągu kilku godzin roboczych (telefonicznie, przez WhatsApp lub e-mail — zależnie od Twoich preferencji).'
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-900 via-[#101827] to-[#0B1F3A] text-white overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header text */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>GREGHELPLINE MONEY CHECK • AUDYT RACHUNKÓW W UK</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Sprawdź, czy nie przepłacasz za swoje usługi w UK
            </h1>

            <p className="text-sm sm:text-lg text-amber-300 font-bold uppercase tracking-wider font-mono">
              Internet • Energia • SIM • Telefony • Ubezpieczenia
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Wybierz poniżej usługi, które chcesz sprawdzić. Nasz system i dedykowany polski doradca znajdą dla Ciebie najkorzystniejsze taryfy i zoptymalizują koszty życia w Wielkiej Brytanii.
            </p>
          </div>

          {/* MONEY CHECK WIZARD COMPONENT */}
          <div className="mt-8">
            <MoneyCheckWizard />
          </div>

        </div>
      </section>

      {/* 4 BENEFITY MONEY CHECK */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
              Dlaczego warto wykonać Money Check?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 font-sans">
              Przejrzystość, bezpieczeństwo i realne wsparcie dla Polaków mieszkających w UK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-amber-400 flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#0B1F3A] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPINIE KLIENTÓW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
              Co mówią o nas Klienci w Wielkiej Brytanii
            </h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* PORADNIK PDF CTA */}
      <GuideDownloadCTA service="internet" />

      {/* FAQ SECTION */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
              Najczęściej zadawane pytania o Money Check
            </h2>
          </div>
          <FaqSection items={moneyCheckFaq} />
        </div>
      </section>

    </div>
  );
}
