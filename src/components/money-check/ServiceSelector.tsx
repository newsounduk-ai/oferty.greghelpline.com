import React from 'react';
import {
  Wifi,
  Zap,
  Radio,
  Smartphone,
  ShieldCheck,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { MoneyCheckServiceKey } from '../../types';

export interface ServiceCardOption {
  key: MoneyCheckServiceKey | 'all';
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  badge?: string;
}

export const AVAILABLE_SERVICES: ServiceCardOption[] = [
  {
    key: 'internet',
    label: 'Internet',
    sublabel: 'Światłowód i TV w UK',
    icon: Wifi,
    color: 'from-blue-600 to-indigo-700',
    badge: 'Popularne'
  },
  {
    key: 'energy_dual',
    label: 'Energia',
    sublabel: 'Prąd i Gaz (Dual Fuel)',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    badge: 'Oszczędność'
  },
  {
    key: 'sim',
    label: 'Karty SIM',
    sublabel: 'Dużo GB i tanie rozmowy do PL',
    icon: Radio,
    color: 'from-purple-600 to-indigo-800'
  },
  {
    key: 'phone',
    label: 'Telefony',
    sublabel: 'Abonament i nowe smartfony',
    icon: Smartphone,
    color: 'from-emerald-600 to-teal-700'
  },
  {
    key: 'insurance_car',
    label: 'Ubezpieczenia',
    sublabel: 'Auto, Van, Moto, Kurier, Life',
    icon: ShieldCheck,
    color: 'from-rose-600 to-pink-700'
  }
];

interface ServiceSelectorProps {
  selected: MoneyCheckServiceKey[];
  onChange: (services: MoneyCheckServiceKey[]) => void;
  onContinue: () => void;
}

export default function ServiceSelector({
  selected,
  onChange,
  onContinue
}: ServiceSelectorProps) {
  const allServiceKeys: MoneyCheckServiceKey[] = [
    'internet',
    'energy_dual',
    'sim',
    'phone',
    'insurance_car'
  ];

  const isAllSelected = allServiceKeys.every(k => selected.includes(k));

  const toggleService = (key: MoneyCheckServiceKey) => {
    if (selected.includes(key)) {
      onChange(selected.filter(k => k !== key));
    } else {
      onChange([...selected, key]);
    }
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange(allServiceKeys);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
          CZY PRZEPŁACASZ ZA SWOJE USŁUGI W UK?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300 font-sans">
          Sprawdź bezpłatnie swoje obecne usługi i zobacz, gdzie możemy znaleźć dla Ciebie lepszą opcję.
        </p>
        <p className="mt-1 text-xs text-amber-400 font-bold uppercase tracking-wider">
          Wybierz, co chcesz sprawdzić (możesz zaznaczyć jedną lub kilka opcji):
        </p>
      </div>

      {/* Siatka kart wyboru */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {AVAILABLE_SERVICES.map(srv => {
          const isSelected = selected.includes(srv.key as MoneyCheckServiceKey);
          const Icon = srv.icon;

          return (
            <button
              key={srv.key}
              type="button"
              onClick={() => toggleService(srv.key as MoneyCheckServiceKey)}
              className={`min-h-[96px] p-5 rounded-2xl border transition-all text-left flex items-start justify-between gap-4 cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'bg-gradient-to-r from-[#101827] to-[#0B1F3A] border-amber-400 ring-2 ring-amber-400/50 shadow-lg shadow-amber-500/10 scale-[1.02]'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                    isSelected
                      ? 'bg-amber-400 text-[#0B1F3A]'
                      : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-base text-white">
                      {srv.label}
                    </span>
                    {srv.badge && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 font-sans">
                    {srv.sublabel}
                  </p>
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 mt-1 ${
                  isSelected
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'border-slate-600 bg-slate-800'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4 fill-[#0B1F3A] text-amber-400" />}
              </div>
            </button>
          );
        })}

        {/* Przycisk Sprawdź Wszystko */}
        <button
          type="button"
          onClick={handleSelectAll}
          className={`min-h-[96px] p-5 rounded-2xl border transition-all text-left flex items-start justify-between gap-4 cursor-pointer relative overflow-hidden group ${
            isAllSelected
              ? 'bg-gradient-to-r from-amber-950/80 to-[#0B1F3A] border-amber-400 ring-2 ring-amber-400/50 shadow-lg shadow-amber-500/10 scale-[1.02]'
              : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-200'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                isAllSelected
                  ? 'bg-amber-400 text-[#0B1F3A]'
                  : 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30'
              }`}
            >
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base text-amber-300">
                  🔥 Sprawdź wszystko
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 font-sans">
                Kompleksowy audyt wszystkich rachunków
              </p>
            </div>
          </div>

          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 mt-1 ${
              isAllSelected
                ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                : 'border-slate-600 bg-slate-800'
            }`}
          >
            {isAllSelected && <CheckCircle2 className="w-4 h-4 fill-[#0B1F3A] text-amber-400" />}
          </div>
        </button>
      </div>

      {/* Podsumowanie wyboru i CTA */}
      <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-300 text-center sm:text-left font-sans">
          {selected.length === 0 ? (
            <span className="text-amber-300 font-semibold">Zaznacz co najmniej jedną usługę, aby kontynuować</span>
          ) : (
            <span>
              Wybrano: <strong className="text-amber-400">{selected.length} {selected.length === 1 ? 'usługę' : 'usługi'}</strong> do bezpłatnej analizy
            </span>
          )}
        </div>

        <button
          type="button"
          disabled={selected.length === 0}
          onClick={onContinue}
          className={`w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-2xl text-xs sm:text-sm font-extrabold font-sans flex items-center justify-center gap-2.5 transition-all shadow-xl cursor-pointer ${
            selected.length > 0
              ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] shadow-amber-500/20 transform hover:-translate-y-0.5'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
          }`}
        >
          <span>ROZPOCZNIJ BEZPŁATNE SPRAWDZENIE</span>
          <span className="text-base">→</span>
        </button>
      </div>
    </div>
  );
}
