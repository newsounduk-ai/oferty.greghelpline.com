import React, { useState } from 'react';
import { Calculator, Palmtree, Users, Calendar, Plane, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VacationBudgetCalculator() {
  const [tripType, setTripType] = useState<'all_inclusive' | 'city_break' | 'tour'>('all_inclusive');
  const [region, setRegion] = useState<'south_europe' | 'capital' | 'exotic'>('south_europe');
  const [travelers, setTravelers] = useState<number>(2);
  const [duration, setDuration] = useState<number>(7);

  // Base estimate calculation per person per day based on parameters
  const calculateEstimate = () => {
    let basePerDay = 65; // GBP per person per day base

    if (tripType === 'all_inclusive') basePerDay = 75;
    if (tripType === 'city_break') basePerDay = 85;
    if (tripType === 'tour') basePerDay = 95;

    if (region === 'south_europe') basePerDay *= 1.0;
    if (region === 'capital') basePerDay *= 1.25;
    if (region === 'exotic') basePerDay *= 1.4;

    if (duration === 3) basePerDay *= 1.1; // shorter trips have higher fixed flight costs
    if (duration >= 10) basePerDay *= 0.9; // longer stay discount

    const perPersonTotal = Math.round(basePerDay * duration);
    const familyTotal = perPersonTotal * travelers;

    return { perPersonTotal, familyTotal };
  };

  const { perPersonTotal, familyTotal } = calculateEstimate();

  const scrollToForm = () => {
    const el = document.getElementById('formularz-wakacje');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0B1F3A] to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-teal-800/40">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 w-fit mb-4">
          <Calculator className="w-4 h-4 text-teal-300" />
          <span className="text-xs font-bold font-sans uppercase tracking-wider">
            Interaktywny Kalkulator Budżetu
          </span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
          Ile kosztują wymarzone wakacje z lotami z UK?
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 font-sans mb-8 max-w-2xl">
          Skorzystaj z kalkulatora orientacyjnych kosztów i zobacz szacunkowy budżet wyjazdu. Pomożemy Ci znaleźć opcję mieszczącą się dokładnie w Twoich założeniach!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-5 text-left font-sans text-xs">
            
            {/* Trip Type */}
            <div>
              <label className="block font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Palmtree className="w-4 h-4 text-teal-400" />
                <span>Typ wyjazdu</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'all_inclusive', label: 'All Inclusive' },
                  { id: 'city_break', label: 'City Break' },
                  { id: 'tour', label: 'Objazdowa' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTripType(t.id as any)}
                    className={`py-2.5 px-3 rounded-xl font-bold transition-all cursor-pointer text-center border ${
                      tripType === t.id
                        ? 'bg-teal-500 text-[#0B1F3A] border-teal-400 shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Region */}
            <div>
              <label className="block font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Plane className="w-4 h-4 text-teal-400" />
                <span>Kierunek wyjazdu</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'south_europe', label: 'Hiszpania / Grecja / Turcja' },
                  { id: 'capital', label: 'Stolica Europy (Rzym / Paryż)' },
                  { id: 'exotic', label: 'Egzotyka (Egipt / Dubaj)' }
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRegion(r.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer text-center border leading-tight ${
                      region === r.id
                        ? 'bg-teal-500 text-[#0B1F3A] border-teal-400 shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Długość pobytu</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { days: 3, label: '3-4 dni' },
                  { days: 7, label: '7 dni (tydzień)' },
                  { days: 10, label: '10 dni' },
                  { days: 14, label: '14 dni (2 tyg.)' }
                ].map((d) => (
                  <button
                    key={d.days}
                    type="button"
                    onClick={() => setDuration(d.days)}
                    className={`py-2.5 px-2 rounded-xl font-bold transition-all cursor-pointer text-center text-[11px] border ${
                      duration === d.days
                        ? 'bg-teal-500 text-[#0B1F3A] border-teal-400 shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Travelers Count */}
            <div>
              <label className="block font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Liczba osób</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTravelers(num)}
                    className={`py-2.5 rounded-xl font-bold transition-all cursor-pointer text-center border ${
                      travelers === num
                        ? 'bg-teal-500 text-[#0B1F3A] border-teal-400 shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    {num} {num === 1 ? 'osoba' : 'osoby'}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 flex flex-col justify-between text-center space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-teal-300 uppercase block mb-1">
                Szacowany budżet całkowity
              </span>
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-display tracking-tight my-2">
                £{familyTotal.toLocaleString('en-GB')}
              </div>
              <p className="text-xs text-gray-300 font-sans">
                ok. <strong>£{perPersonTotal}</strong> / osoba za {duration} dni wyjazdu z lotami z UK.
              </p>
            </div>

            <div className="bg-black/20 rounded-2xl p-3.5 text-left text-[11px] space-y-2 font-sans border border-white/10">
              <div className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Przeloty z lotniska w UK i powrót</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Zakwaterowanie w wybranym standardzie</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Obsługa rezerwacyjna po polsku</span>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0B1F3A] font-sans font-black text-xs rounded-2xl transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Zapytaj o tę ofertę po polsku</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
