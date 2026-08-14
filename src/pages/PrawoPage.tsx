import React from 'react';
import {
  Scale,
  Briefcase,
  Users,
  Banknote,
  HelpCircle,
  Languages,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  MessageSquare,
  FileText
} from 'lucide-react';
import MultiStepForm from '../components/MultiStepForm';

export default function PrawoPage() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('formularz-sekcja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#0B1F3A] via-[#112D55] to-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-700/80 text-blue-200 text-xs font-bold tracking-wide">
                <Scale className="w-4 h-4 text-blue-400" />
                <span>Polskojęzyczne Pomoc Prawna & Urzędowa w UK</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Prawo, Odszkodowania i Wsparcie Urzędowe w UK
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Nie musisz mierzyć się z brytyjskim systemem prawnym sam. Oferujemy wstępną weryfikację spraw odszkodowawczych, prawa pracy, świadczeń socjalnych i tłumaczeń przysięgłych po polsku.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Bez opłat wstępnych</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                  <Languages className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Pełna obsługa po polsku</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Sprawdzone kancelarie</span>
                </div>
              </div>
            </div>

            {/* Right Column: MultiStepForm */}
            <div className="lg:col-span-5" id="formularz-sekcja">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/30 text-gray-900">
                <MultiStepForm service="prawo" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OFFERS / SERVICES GRID */}
      <section className="py-16 md:py-24" id="oferty-prawo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider">Obszary Pomocy i Konsultacji</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            W czym możemy Ci dzisiaj pomóc?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-xs">
            Każda sprawa jest analizowana indywidualnie. Skontaktuj się z nami, opisz swoją sytuację, a skierujemy Cię bezpośrednio do wykwalifikowanego specjalisty lub polskojęzycznego doradcy.
          </p>
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. ODSZKODOWANIA */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Scale className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                  No Win No Fee
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                Odszkodowania powypadkowe
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Pomoc w uzyskaniu należnej rekompensaty za wypadki w pracy (Accidents at Work), wypadki drogowe (RTA) oraz błędy medyczne (Medical Negligence) na terenie Wielkiej Brytanii.
              </p>

              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-blue-950">
                  • Bezpłatna weryfikacja roszczenia: Oceniamy szanse na wygraną przed podjęciem jakichkolwiek kroków.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zasada No Win No Fee:</strong> Brak opłat w przypadku braku wygranej odszkodowania</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Pełne wsparcie:</strong> Organizacja polskojęzycznych badań lekarskich i rehabilitacji</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zgłoś sprawę wypadkową</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. PRAWO PRACY */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                  Employment Law
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-slate-800 transition-colors mb-2">
                Prawo pracy i konflikty w firmie
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Ochrona praw pracowniczych w UK — nieuzasadnione zwolnienia (Unfair Dismissal), dyskryminacja w miejscu pracy, mobbing oraz odzyskiwanie zaległego wynagrodzenia.
              </p>

              <div className="bg-slate-100/70 p-4 rounded-2xl border border-slate-200 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-slate-900">
                  • Konsultacja po polsku: Pomoc w sporządzeniu grievance letter oraz przygotowaniu do ACAS / Sądu Pracy (Employment Tribunal).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Bezpieczeństwo:</strong> Pełna poufność zapytania i analiza Twojej umowy o pracę</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Brak wypłaty:</strong> Skuteczne dochodzenie należnych nadgodzin i niewypłaconego urlopu</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Skonsultuj problem w pracy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. PRAWO RODZINNE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-900 border border-rose-200">
                  Family Law
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-rose-600 transition-colors mb-2">
                Prawo rodzinne i sprawy opiekuńcze
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Kompleksowa pomoc w brytyjskich sprawach rodzinnych — postępowania rozwodowe (Divorce), ustalenie opieki nad dziećmi (Child Custody) oraz podział majątku.
              </p>

              <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-rose-950">
                  • Indywidualne podejście: Zapewniamy wyrozumiałą opiekę doradczą oraz pomoc w mediacjach rodzinnych.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Rozwody w UK:</strong> Pomoc w przeprowadzeniu formalności online w brytyjskim sądzie</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Dzieci & Majątek:</strong> Porozumienia rodzicielskie (Child Arrangements Order)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o pomoc rodzinną</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4. POMOC W ZASIŁKACH */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <HelpCircle className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  DWP & Universal Credit
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                Zasiłki i świadczenia socjalne w UK
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Wsparcie w składaniu wniosków i składaniu odwołań od decyzji DWP — Universal Credit, PIP (Personal Independence Payment), Child Benefit oraz Council Tax Support.
              </p>

              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-emerald-950">
                  • Bezpłatna ocena kwalifikacji: Sprawdzamy, które świadczenia przysługują Twojej rodzinie na podstawie dochodów i sytuacji życiowej.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Mandatory Reconsideration:</strong> Pomoc w pisaniu odwołań od odmownych decyzji PIP/UC</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Sprawy urzędowe:</strong> Tłumaczenie pism z DWP, HMRC oraz lokalnego Councilu</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o pomoc w zasiłkach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5. POMOC W ZADŁUŻENIACH */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Banknote className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  Debt Management
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                Pomoc w zadłużeniach i spłacie długów
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Rozwiązania dla osób zmagających się z długami kart kredytowych, pożyczek czy rachunków — plany spłaty DMP, programy IVA, ochrona przed komornikami (Bailiffs).
              </p>

              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-amber-950">
                  • Poufna analiza budżetu: Pomagamy ustalić plan wyjścia z długów dopasowany do realnych możliwości finansowych.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Ochrona:</strong> Wstrzymanie naliczania odsetek i kontaktów ze strony firm windykacyjnych</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Konsolidacja:</strong> Jedna przystępna rata miesięczna na pokrycie zobowiązań</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zapytaj o wyjście z długów</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6. TŁUMACZENIA PR przysięgłe */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Languages className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200">
                  Certified Translations
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                Tłumaczenia przysięgłe i dokumentacja
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                Szybkie tłumaczenia certified & sworn dokumentów urzędowych (akty urodzenia, małżeństwa, wyroki sądowe, dyplomy, zaświadczenia lekarskie) akceptowane przez urzędy w UK i PL.
              </p>

              <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100 mb-4 text-xs text-gray-700 space-y-1">
                <p className="font-bold text-indigo-950">
                  • Szybka wycena po przesłaniu zdjęcia: Prześlij plik, a w kilka minut podamy bezpłatny kosztorys i termin.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700 space-y-1.5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Akceptacja:</strong> Tłumaczenia Honorowane przez Home Office, DVLA, DWP oraz Sądy w UK</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Formaty:</strong> Wersje cyfrowe PDF z pieczęcią oraz wysyłka oryginatu pocztą 1st Class</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Zamów wycenę tłumaczenia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* REGULATORY DISCLAIMER */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-xs">
          <div className="text-xs text-gray-700 font-sans leading-relaxed">
            <strong>Informacja prawna:</strong> Greg Helpline świadczy usługi informacyjne oraz kojarzy klientów z niezależnymi, autoryzowanymi polskojęzycznymi doradcami, tłumaczami przysięgłymi oraz kancelariami prawnymi działającymi zgodnie z regulacjami SRA / FCA / CIOL w Wielkiej Brytanii. Pierwszy kontakt i analiza sytuacji są bezpłatne.
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
