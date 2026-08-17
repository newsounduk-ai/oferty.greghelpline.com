import React from 'react';
import {
  PlusCircle,
  CheckCircle2,
  Sparkles,
  Wifi,
  Zap,
  Radio,
  Smartphone,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { MoneyCheckServiceKey } from '../../types';

interface CrossSellStepProps {
  currentSelected: MoneyCheckServiceKey[];
  onAddService: (serviceKey: MoneyCheckServiceKey) => void;
  onContinue: () => void;
}

const ALL_CROSS_SERVICES = [
  {
    key: 'internet' as MoneyCheckServiceKey,
    title: 'Internet i Światłowód',
    desc: 'Sprawdź tańszy Full Fibre do domu i pakiety TV',
    icon: Wifi,
    color: 'text-blue-400 bg-blue-500/20'
  },
  {
    key: 'energy_dual' as MoneyCheckServiceKey,
    title: 'Prąd i Gaz (Energia)',
    desc: 'Oszczędź na taryfie ze stałą stawką i bonusem',
    icon: Zap,
    color: 'text-amber-400 bg-amber-500/20'
  },
  {
    key: 'sim' as MoneyCheckServiceKey,
    title: 'Karty SIM i Roaming',
    desc: 'Tanie pakiety z darmowymi minutami do Polski',
    icon: Radio,
    color: 'text-purple-400 bg-purple-500/20'
  },
  {
    key: 'phone' as MoneyCheckServiceKey,
    title: 'Smartfony i Abonament',
    desc: 'Nowe iPhone, Samsung, Pixel od £0 wkładu',
    icon: Smartphone,
    color: 'text-emerald-400 bg-emerald-500/20'
  },
  {
    key: 'insurance_car' as MoneyCheckServiceKey,
    title: 'Ubezpieczenia UK',
    desc: 'Auto, Van, Kurier Hire & Reward, Życie',
    icon: ShieldCheck,
    color: 'text-rose-400 bg-rose-500/20'
  }
];

export default function CrossSellStep({
  currentSelected,
  onAddService,
  onContinue
}: CrossSellStepProps) {
  // Filtrujemy tylko usługi, których użytkownik jeszcze nie zaznaczył
  const unselectedServices = ALL_CROSS_SERVICES.filter(
    s => !currentSelected.includes(s.key) &&
         !(s.key === 'energy_dual' && currentSelected.some(c => c.startsWith('energy'))) &&
         !(s.key === 'insurance_car' && currentSelected.some(c => c.startsWith('insurance')))
  );

  return (
    <div className="space-y-6">
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Więcej oszczędności w jednym pakiecie</span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
          CHCESZ SPRAWDZIĆ COŚ JESZCZE?
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Skoro już sprawdzamy Twoje koszty, możemy również bezpłatnie sprawdzić inne usługi GregHelpline i przygotować dla Ciebie pakiet oszczędności.
        </p>
      </div>

      {unselectedServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {unselectedServices.map(srv => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.key}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 rounded-2xl p-4 flex items-center justify-between gap-3 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${srv.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{srv.title}</h4>
                    <p className="text-[11px] text-slate-400 font-sans mt-0.5">{srv.desc}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onAddService(srv.key)}
                  className="min-h-[48px] px-3.5 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-[#0B1F3A] border border-amber-400/40 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Dodaj</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
          <h4 className="font-display font-bold text-base text-white">
            Świetnie! Sprawdzasz już kompletny pakiet usług.
          </h4>
          <p className="text-xs text-slate-300 font-sans">
            Wszystkie wybrane obszary zostaną poddane dokładnej analizie przez polskiego doradcę.
          </p>
        </div>
      )}

      <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 font-sans">
          Możesz pominąć ten krok lub dodać dodatkową usługę jednym kliknięciem.
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold text-xs sm:text-sm font-sans flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          <span>Przejdź do danych kontaktowych</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
