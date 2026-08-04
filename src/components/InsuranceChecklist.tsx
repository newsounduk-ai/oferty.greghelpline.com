import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, PhoneCall, Sparkles, HeartPulse, Car, Home } from 'lucide-react';

interface InsuranceChecklistProps {
  onCtaClick?: () => void;
}

export default function InsuranceChecklist({ onCtaClick }: InsuranceChecklistProps) {
  const [activeTab, setActiveTab] = useState<'health' | 'car' | 'life'>('health');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'h1': true,
    'c1': true,
    'l1': true
  });

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistData = {
    health: {
      title: 'Prywatne Ubezpieczenie Zdrowotne w UK (Private Health Insurance)',
      subtitle: 'Omiń wielomiesięczne kolejki do NHS i zyskaj natychmiastowy dostęp do prywatnych szpitali Bupa, AXA, Aviva, Vitality.',
      items: [
        { id: 'h1', label: 'Liczba osób w rodzinie objętych polisą (Ty, współmałżonek, dzieci)' },
        { id: 'h2', label: 'Wiek najstarszego członka rodziny' },
        { id: 'h3', label: 'Czy posiadasz przewlekłe schorzenia zdiagnozowane w ciągu ostatnich 5 lat?' },
        { id: 'h4', label: 'Czy zależy Ci na pokryciu kosztów prywatnych konsultacji u lekarzy specjalistów?' },
      ]
    },
    car: {
      title: 'Ubezpieczenie Samochodu i Motocykla (UK Car Insurance)',
      subtitle: 'Znajdziemy polskie wsparcie i uznanie zniżek za bezszkodową jazdę z Polski (No Claims Bonus - NCB).',
      items: [
        { id: 'c1', label: 'Numer rejestracyjny pojazdu w UK (Registration plate)' },
        { id: 'c2', label: 'Liczba lat bezszkodowej jazdy (No Claims Discount/Bonus w UK lub PL)' },
        { id: 'c3', label: 'Rodzaj prawa jazdy (UK Full / EU Polish Full) oraz rok wydania' },
        { id: 'c4', label: 'Szacowany roczny przebieg w milach (Annual Mileage)' },
      ]
    },
    life: {
      title: 'Ubezpieczenie na Życie i Spłatę Kredytu (Life & Mortgage Protection)',
      subtitle: 'Zabezpiecz swoją rodzinę i dom na wypadek choroby, niezdolności do pracy lub utraty dochodu w UK.',
      items: [
        { id: 'l1', label: 'Kwota pozostałego do spłaty kredytu hipotecznego (Mortgage) lub docelowa suma ubezpieczenia' },
        { id: 'l2', label: 'Status palacza (czy paliłeś wyroby tytoniowe/vape w ciągu ostatnich 12 miesięcy)' },
        { id: 'l3', label: 'Czy potrzebujesz ochrony od poważnych zachorowań (Critical Illness Cover)?' },
        { id: 'l4', label: 'Zabezpieczenie stałych rachunków na wypadek zwolnienia lekarskiego (Income Protection)' },
      ]
    }
  };

  const current = checklistData[activeTab];

  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    const el = document.getElementById('formularz-kontener');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Poradnik & Lista Przygotowawcza
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-black text-[#0B1F3A] tracking-tight">
            Co warto przygotować przed bezpłatną konsultacją?
          </h2>
          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
            Sprawdź listę pytań, które zada licencjonowany brytyjski broker ubezpieczeniowy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {[
            { key: 'health', label: 'Ubezpieczenie Zdrowotne', icon: HeartPulse },
            { key: 'car', label: 'Auto OC/AC', icon: Car },
            { key: 'life', label: 'Na Życie & Kredyt', icon: Home },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Checklist Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-bold text-lg text-[#0B1F3A]">
              {current.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              {current.subtitle}
            </p>

            <div className="space-y-2.5 pt-3">
              {current.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300 text-emerald-900'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs font-medium leading-relaxed">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Bezpłatna Porada po Polsku</span>
              </div>

              <h4 className="font-display font-black text-xl text-white mb-3">
                Nie wiesz jak rozmawiać z ubezpieczycielem w UK?
              </h4>

              <p className="text-xs text-emerald-100/80 leading-relaxed font-sans mb-6">
                Nasz polskojęzyczny konsultant wyjaśni wszystkie trudne pojęcia prawne (Deductible, Excess, Pre-existing conditions, Underwriting) w prosty sposób.
              </p>

              <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-2xl p-4 text-xs text-emerald-200 space-y-2 font-sans mb-6">
                <div className="font-bold text-white">Dlaczego warto?</div>
                <div>✓ 100% Darmowa pomoc i brak prowizji pobieranej od klienta</div>
                <div>✓ Porównanie autoryzowanych brytyjskich brokerów FCA</div>
              </div>
            </div>

            <button
              onClick={handleCta}
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Zamów bezpłatną konsultację</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
