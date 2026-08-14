import React from 'react';
import {
  Shield,
  Lock,
  Globe,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Tv,
  Smartphone,
  Laptop,
  Check,
  Zap,
  Info,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import MultiStepForm from '../components/MultiStepForm';

export default function VpnPage() {
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
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-bold tracking-wide">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Ochrona prywatności & Dostęp do polskiej TV z UK</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Prywatny VPN dla Polaków w Wielkiej Brytanii
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Szyfruj swój ruch internetowy, chroń dane na Wi-Fi i oglądaj polskie serwisy streamingowe (TVP, Player, Polsat Box) z dowolnego miejsca w UK bez blokad geograficznych.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
                  <Tv className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Polskie VOD & TV</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Szyfrowanie 256-bit</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Serwery w PL i 80+ miastach</span>
                </div>
              </div>
            </div>

            {/* Right Column: MultiStepForm */}
            <div className="lg:col-span-5" id="formularz-sekcja">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/30 text-gray-900">
                <MultiStepForm service="vpn" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED OFFER CARD - PIA */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider">Polecany dostawca VPN</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Niezawodny VPN z serwerami w Polsce
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
            Przetestowana usługa VPN ze stabilnym polskim adresem IP i sprawdzoną polityką braku logów.
          </p>
        </div>

        {/* MAIN CARD - PRIVATE INTERNET ACCESS */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-2">
                Oficjalna Oferta VPN
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Private Internet Access (PIA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Jeden z najbardziej cenionych i bezpiecznych dostawców VPN na świecie
              </p>
            </div>

            <div className="text-left sm:text-right bg-white/10 p-4 rounded-2xl backdrop-blur-xs border border-white/10 shrink-0">
              <span className="text-xs text-slate-300 block">Już od:</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">~£1.69</span>
              <span className="text-xs text-slate-300 block">/ miesiąc przy planie 2-letnim</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">

            {/* DESCRIPTION */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Opis usługi</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Private Internet Access (PIA) to usługa VPN chroniąca prywatność online — szyfruje cały Twój ruch internetowy, ukrywa prawdziwy adres IP i umożliwia bezpieczne korzystanie z publicznych sieci Wi-Fi w kawiarniach czy na lotniskach. Dzięki szybkim polskim serwerom z łatwością uzyskasz dostęp do polskich serwisów i VOD (TVP VOD, Player, Polsat Box) podczas pobytu w UK.
              </p>
            </div>

            {/* PRICING PLANS GRID */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Plan cenowy (sprawdzony 11.08.2026)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-500 relative">
                  <span className="absolute -top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Najbardziej opłacalny
                  </span>
                  <div className="text-xs font-bold text-slate-700">Plan 2-letni (+ 2 mies. gratis)</div>
                  <div className="text-xl font-black text-emerald-900 mt-1">ok. £1.69 <span className="text-xs font-normal text-slate-600">/ mies.</span></div>
                  <p className="text-[11px] text-emerald-800 mt-1 font-medium">Oszczędzasz ponad 80% w porównaniu do stawki miesięcznej.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700">Plan 1-roczny</div>
                  <div className="text-xl font-black text-slate-900 mt-1">ok. £2.69 <span className="text-xs font-normal text-slate-600">/ mies.</span></div>
                  <p className="text-[11px] text-slate-600 mt-1">Płatność roczna z góry, stabilny opłacalny abonament.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700">Plan Miesięczny</div>
                  <div className="text-xl font-black text-slate-900 mt-1">ok. £10.99 <span className="text-xs font-normal text-slate-600">/ mies.</span></div>
                  <p className="text-[11px] text-slate-600 mt-1">Pełna elastyczność bez długoterminowych zobowiązań.</p>
                </div>

              </div>
            </div>

            {/* CONDITIONS */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Warunki i korzyści</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>30 dni gwarancji zwrotu pieniędzy:</strong> Przetestuj bez ryzyka — bezproblemowy zwrot wpłaty.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nielimitowane urządzenia:</strong> Zabezpiecz telefon, komputer, tablet i Android TV na jednym koncie.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Strict No-Logs Policy:</strong> Oficjalnie zweryfikowana w sądzie polityka braku rejestrowania aktywności.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Serwery w Polsce & 80+ krajach:</strong> Wysokie prędkości idealne do streamingów HD i 4K.</span>
                </div>
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Ceny orientacyjne, sprawdź aktualne stawki i okresy promocyjne bezpośrednio na stronie dostawcy przed zakupem.</span>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.privateinternetaccess.com/"
                target="_blank"
                rel="noopener noreferrer shadow-lg"
                className="flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm font-sans flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-xl"
              >
                <span>Przejdź do strony Private Internet Access</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToForm}
                className="py-4 px-6 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-sm font-sans flex items-center justify-center gap-2 transition-all"
              >
                <span>Zapytaj mnie o konfigurację VPN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHY USE VPN IN UK */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
              Dlaczego warto mieć VPN mieszkając w UK?
            </h2>
            <p className="mt-3 text-sm text-gray-600 font-medium">
              Proste rozwiązanie dla polskiej społeczności w Wielkiej Brytanii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Polskie vod i wydarzenia</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Oglądaj polskie transmisje sportowe, serwisy informacyjne i ulubione seriale bez komunikatów o niedostępności treści w Twoim kraju.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Szyfrowanie bankowości</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                Bezpiecznie loguj się do polskiego i brytyjskiego banku. Chroni Twoje dane logowania, numery kart i tożsamość przed przechwyceniem.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Brak spowalniania Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                Niektórzy dostawcy internetu w UK (np. Virgin, BT) ograniczają prędkości wybranych protokołów. VPN szyfruje pakiet, chroniąc przed throttlingiem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
