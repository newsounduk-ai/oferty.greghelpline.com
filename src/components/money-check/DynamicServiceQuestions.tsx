import React from 'react';
import {
  Wifi,
  Zap,
  Radio,
  Smartphone,
  ShieldCheck,
  Upload,
  FileText,
  CheckCircle2,
  Calendar,
  HelpCircle,
  Car,
  Truck,
  Bike,
  Package,
  HeartHandshake,
  AlertCircle
} from 'lucide-react';
import {
  MoneyCheckInternetAnswers,
  MoneyCheckEnergyAnswers,
  MoneyCheckSimAnswers,
  MoneyCheckPhoneAnswers,
  MoneyCheckInsuranceAnswers
} from '../../types';

/* =========================================================
   1. MODUŁ INTERNET
========================================================= */
interface InternetModuleProps {
  data: MoneyCheckInternetAnswers;
  onChange: (data: MoneyCheckInternetAnswers) => void;
}

const INTERNET_PROVIDERS = [
  'Virgin Media',
  'BT Broadband',
  'Sky Broadband',
  'TalkTalk',
  'Vodafone',
  'EE Broadband',
  'YouFibre',
  'Hyperoptic',
  'Toob',
  'Airband',
  'Plusnet',
  'Community Fibre',
  'Inny',
  'Nie wiem'
];

export function InternetQuestions({ data, onChange }: InternetModuleProps) {
  const update = (field: keyof MoneyCheckInternetAnswers, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
          <Wifi className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white">
            Pytania o Twój domowy Internet
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Sprawdzimy dostępność światłowodu Full Fibre i tańszych pakietów pod Twoim adresem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Obecny dostawca */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Obecny dostawca Internetu:
          </label>
          <select
            value={data.currentSupplier || ''}
            onChange={(e) => update('currentSupplier', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          >
            <option value="">-- Wybierz operatora --</option>
            {INTERNET_PROVIDERS.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Miesięczny koszt */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Obecny koszt miesięczny (£):
          </label>
          <input
            type="number"
            placeholder="np. 38"
            value={data.monthlyCost || ''}
            onChange={(e) => update('monthlyCost', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Czy jest w umowie */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy nadal trwa umowa (Contract)?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'no', label: 'Nie (po umowie)' },
              { id: 'yes', label: 'Tak (w trakcie)' },
              { id: 'dont_know', label: 'Nie wiem' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('isInContract', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  data.isInContract === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Data zakończenia umowy */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Orientacyjny koniec umowy (jeśli znasz):
          </label>
          <div className="relative">
            <input
              type="date"
              value={data.contractEndDate || ''}
              onChange={(e) => update('contractEndDate', e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Postcode i Nr domu */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Kod pocztowy w UK (Postcode):
          </label>
          <input
            type="text"
            placeholder="np. PE1 1AA lub B1 1BB"
            value={data.postcode || ''}
            onChange={(e) => update('postcode', e.target.value.toUpperCase())}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none uppercase font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Numer / Nazwa domu:
          </label>
          <input
            type="text"
            placeholder="np. Flat 4, 12 High Street"
            value={data.houseNumber || ''}
            onChange={(e) => update('houseNumber', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Pakiety TV */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy interesuje Cię również pakiet Telewizji (np. Sky TV, TNT Sports, Netflix w cenie)?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'no', label: 'Sam Internet' },
              { id: 'yes', label: 'Internet + TV' },
              { id: 'maybe', label: 'Zależy od ceny' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('interestedInTv', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  data.interestedInTv === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   2. MODUŁ ENERGY
========================================================= */
interface EnergyModuleProps {
  data: MoneyCheckEnergyAnswers;
  onChange: (data: MoneyCheckEnergyAnswers) => void;
}

const ENERGY_SUPPLIERS = [
  'Octopus Energy',
  'British Gas',
  'E.ON Next',
  'OVO Energy',
  'EDF Energy',
  'Scottish Power',
  'Outfox the Market',
  'So Energy',
  'Utilita',
  'Inny',
  'Nie wiem'
];

export function EnergyQuestions({ data, onChange }: EnergyModuleProps) {
  const [fileLoading, setFileLoading] = React.useState(false);

  const update = (field: keyof MoneyCheckEnergyAnswers, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Limit 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert('Plik jest za duży (maksymalny rozmiar to 5MB).');
      return;
    }

    setFileLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      update('billAttachment', {
        fileName: file.name,
        fileData: reader.result as string,
        fileType: file.type
      });
      setFileLoading(false);
    };
    reader.onerror = () => {
      alert('Wystąpił błąd podczas odczytu pliku.');
      setFileLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white">
            Pytania o Energię (Prąd i Gaz)
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Sprawdzimy, czy nie płacisz zawyżonych stawek za kWh lub standing charge.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Rodzaj mediów */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Co zasilasz w nieruchomości?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'dual_fuel', label: 'Prąd + Gaz (Dual)' },
              { id: 'electricity', label: 'Tylko Prąd (Electric)' },
              { id: 'gas', label: 'Tylko Gaz' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('energyType', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.energyType || 'dual_fuel') === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Obecny dostawca energii */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Obecna firma energetyczna:
          </label>
          <select
            value={data.currentSupplier || ''}
            onChange={(e) => update('currentSupplier', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          >
            <option value="">-- Wybierz dostawcę --</option>
            {ENERGY_SUPPLIERS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Średni miesięczny koszt */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Średni miesięczny rachunek (£/mies.):
          </label>
          <input
            type="number"
            placeholder="np. 140"
            value={data.monthlyCost || ''}
            onChange={(e) => update('monthlyCost', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Rodzaj taryfy */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Rodzaj taryfy:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'variable', label: 'Zmienna (Variable)' },
              { id: 'fixed', label: 'Stała (Fixed)' },
              { id: 'dont_know', label: 'Nie wiem' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('tariffType', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  data.tariffType === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Smart Meter */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy masz licznik Smart Meter?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'yes', label: 'Tak' },
              { id: 'no', label: 'Nie' },
              { id: 'dont_know', label: 'Nie wiem' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('hasSmartMeter', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  data.hasSmartMeter === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Upload rachunku (Opcjonalny) */}
        <div className="sm:col-span-2 pt-2">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Opcjonalnie: Załącz zdjęcie lub PDF ostatniego rachunku (ułatwi dokładną kalkulację):
          </label>
          <div className="border-2 border-dashed border-slate-700 hover:border-amber-400/60 rounded-2xl p-4 bg-slate-900/60 transition-colors text-center relative">
            <input
              type="file"
              accept=".pdf,image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {data.billAttachment?.fileName ? (
              <div className="flex items-center justify-center gap-3 text-emerald-400 text-xs sm:text-sm font-semibold">
                <FileText className="w-5 h-5" />
                <span className="truncate max-w-xs">{data.billAttachment.fileName}</span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Zmień</span>
              </div>
            ) : (
              <div className="space-y-1">
                <Upload className="w-6 h-6 text-amber-400 mx-auto" />
                <p className="text-xs text-slate-300 font-sans">
                  {fileLoading ? 'Wczytywanie pliku...' : 'Kliknij lub przeciągnij plik (PDF, JPG, PNG do 5MB)'}
                </p>
                <p className="text-[10px] text-slate-500">
                  Bezpieczne przetwarzanie wyłącznie do celów wyceny
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   3. MODUŁ SIM
========================================================= */
interface SimModuleProps {
  data: MoneyCheckSimAnswers;
  onChange: (data: MoneyCheckSimAnswers) => void;
}

const NETWORKS = [
  'Three (3)',
  'EE',
  'Vodafone',
  'O2',
  'VOXI',
  'SMARTY',
  'giffgaff',
  'Lebara',
  'Lycamobile',
  'Tesco Mobile',
  'Sky Mobile',
  'Inna'
];

export function SimQuestions({ data, onChange }: SimModuleProps) {
  const update = (field: keyof MoneyCheckSimAnswers, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
          <Radio className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white">
            Pytania o Karty SIM
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Sprawdzimy plany SIM-Only z nielimitowanymi GB, roamingiem w UE i darmowymi minutami do Polski.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Liczba kart */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Ile kart SIM chcesz sprawdzić?
          </label>
          <div className="grid grid-cols-4 gap-2">
            {['1', '2', '3', '4+'].map(c => (
              <button
                key={c}
                type="button"
                onClick={() => update('simCount', c)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.simCount || '1') === c
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {c} {c === '1' ? 'karta' : 'karty'}
              </button>
            ))}
          </div>
        </div>

        {/* Obecna sieć */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Obecna sieć komórkowa:
          </label>
          <select
            value={data.currentNetwork || ''}
            onChange={(e) => update('currentNetwork', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          >
            <option value="">-- Wybierz sieć --</option>
            {NETWORKS.map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Miesięczny koszt */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Obecny koszt miesięczny na numer (£):
          </label>
          <input
            type="number"
            placeholder="np. 15"
            value={data.monthlyCost || ''}
            onChange={(e) => update('monthlyCost', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Pakiet danych */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Preferowany pakiet Internetu:
          </label>
          <select
            value={data.dataAllowance || 'unlimited'}
            onChange={(e) => update('dataAllowance', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          >
            <option value="10gb">Ok. 10–20 GB</option>
            <option value="50gb">Ok. 50–100 GB</option>
            <option value="unlimited">Bez limitu (Unlimited 5G)</option>
          </select>
        </div>

        {/* Dzwonienie do Polski */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy potrzebujesz darmowych minut do Polski?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'yes', label: 'Tak (Polska w cenie)' },
              { id: 'no', label: 'Niepotrzebne' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('needsPolandCalling', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.needsPolandCalling || 'yes') === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roaming w UE */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy korzystasz z telefonu podczas urlopu w UE?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'yes', label: 'Tak (Darmowy roaming)' },
              { id: 'no', label: 'Rzadko / Nie' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('needsRoaming', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.needsRoaming || 'yes') === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4. MODUŁ TELEFON
========================================================= */
interface PhoneModuleProps {
  data: MoneyCheckPhoneAnswers;
  onChange: (data: MoneyCheckPhoneAnswers) => void;
}

export function PhoneQuestions({ data, onChange }: PhoneModuleProps) {
  const update = (field: keyof MoneyCheckPhoneAnswers, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white">
            Pytania o Telefon i Nowy Abonament
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Wyszukamy oferty z £0 wpłaty wstępnej i korzystnymi ratami w UK.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Marka */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Preferowana marka smartfona:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'Apple iPhone', label: 'Apple' },
              { id: 'Samsung Galaxy', label: 'Samsung' },
              { id: 'Google Pixel', label: 'Pixel' },
              { id: 'Dowolna', label: 'Dowolna' }
            ].map(b => (
              <button
                key={b.id}
                type="button"
                onClick={() => update('preferredBrand', b.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.preferredBrand || 'Apple iPhone') === b.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Model */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Konkretny model (opcjonalnie):
          </label>
          <input
            type="text"
            placeholder="np. iPhone 16 Pro, S25 Ultra, Pixel 11..."
            value={data.preferredModel || ''}
            onChange={(e) => update('preferredModel', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Rodzaj umowy */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Cel zgłoszenia:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'new', label: 'Nowy abonament' },
              { id: 'upgrade', label: 'Przedłużenie' },
              { id: 'handset_only', label: 'Sam telefon' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('contractType', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.contractType || 'new') === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budżet miesięczny */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Maksymalny miesięczny budżet (£/mies.):
          </label>
          <select
            value={data.monthlyBudget || '35_50'}
            onChange={(e) => update('monthlyBudget', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          >
            <option value="under_35">Do £35 / mies.</option>
            <option value="35_50">£35 – £50 / mies.</option>
            <option value="50_70">£50 – £70 / mies.</option>
            <option value="over_70">Powyżej £70 (Flagowce)</option>
          </select>
        </div>

        {/* Trade-In */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Czy chcesz oddać stary smartfon w rozliczeniu (Trade-In)?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'yes', label: 'Tak, chcę wycenę' },
              { id: 'no', label: 'Nie, zostawiam' },
              { id: 'dont_know', label: 'Zależy od oferty' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => update('tradeInInterest', opt.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  (data.tradeInInterest || 'no') === opt.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   5. MODUŁ UBEZPIECZENIA
========================================================= */
interface InsuranceModuleProps {
  data: MoneyCheckInsuranceAnswers;
  onChange: (data: MoneyCheckInsuranceAnswers) => void;
}

const INSURANCE_SUBTYPES = [
  { id: 'car', label: 'Samochód (Car)', icon: Car },
  { id: 'van', label: 'Samochód dostawczy (Van)', icon: Truck },
  { id: 'motorcycle', label: 'Motocykl (Motorbike)', icon: Bike },
  { id: 'courier', label: 'Kurier / Hire & Reward', icon: Package },
  { id: 'life', label: 'Polisa na życie (Life Insurance)', icon: HeartHandshake }
] as const;

export function InsuranceQuestions({ data, onChange }: InsuranceModuleProps) {
  const selectedTypes = data.insuranceTypes || ['car'];

  const toggleType = (t: 'car' | 'van' | 'motorcycle' | 'courier' | 'life') => {
    if (selectedTypes.includes(t)) {
      if (selectedTypes.length > 1) {
        onChange({ ...data, insuranceTypes: selectedTypes.filter(x => x !== t) });
      }
    } else {
      onChange({ ...data, insuranceTypes: [...selectedTypes, t] });
    }
  };

  const update = (field: keyof MoneyCheckInsuranceAnswers, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const isVehicleSelected = selectedTypes.some(t => ['car', 'van', 'motorcycle', 'courier'].includes(t));
  const isLifeSelected = selectedTypes.includes('life');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white">
            Pytania o Ubezpieczenia w UK
          </h3>
          <p className="text-xs text-slate-300 font-sans">
            Wybierz interesujące Cię polisy — doradzimy najtańszą składkę i właściwe pokrycie.
          </p>
        </div>
      </div>

      {/* Sub-rodzaje ubezpieczeń */}
      <div>
        <label className="block text-xs font-bold text-slate-300 mb-2 font-sans">
          Zaznacz rodzaj polisy (możesz wybrać kilka):
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {INSURANCE_SUBTYPES.map(st => {
            const isSelected = selectedTypes.includes(st.id);
            const Icon = st.icon;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => toggleType(st.id)}
                className={`min-h-[48px] p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-[#0B1F3A] border-amber-400 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-xs">{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pola dla pojazdów */}
      {isVehicleSelected && (
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <Car className="w-4 h-4" />
            <span>Dane pojazdu i polisy</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
                Numer rejestracyjny (Reg Plate - opcjonalnie):
              </label>
              <input
                type="text"
                placeholder="np. AB12 CDE"
                value={data.vehicleRegistration || ''}
                onChange={(e) => update('vehicleRegistration', e.target.value.toUpperCase())}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 uppercase font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
                Zniżki za bezszkodowość (NCD):
              </label>
              <select
                value={data.noClaimsYears || '3'}
                onChange={(e) => update('noClaimsYears', e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400"
              >
                <option value="0">0 lat (Brak zniżek)</option>
                <option value="1">1 rok</option>
                <option value="2">2 lata</option>
                <option value="3">3 lata</option>
                <option value="4">4 lata</option>
                <option value="5_plus">5+ lat (Maksymalne NCD)</option>
                <option value="pl_ncd">Zniżki z Polski do przetłumaczenia</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
                Orientacyjna data odnowienia ubezpieczenia:
              </label>
              <input
                type="date"
                value={data.renewalDate || ''}
                onChange={(e) => update('renewalDate', e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
                Przeznaczenie pojazdu:
              </label>
              <select
                value={data.vehicleUsage || 'commuting'}
                onChange={(e) => update('vehicleUsage', e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400"
              >
                <option value="social">Tylko prywatnie (Social & Domestic)</option>
                <option value="commuting">Dojazd do pracy (Commuting)</option>
                <option value="business">Działalność gospodarcza (Business Use)</option>
                <option value="hire_and_reward">Kurier / Przewóz osób (Hire & Reward)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Pola dla Life Insurance */}
      {isLifeSelected && (
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Ubezpieczenie na życie (Life Insurance)</span>
          </h4>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
              Cel ochrony:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'family_protection', label: 'Zabezpieczenie rodziny' },
                { id: 'mortgage', label: 'Kredyt hipoteczny (Mortgage)' },
                { id: 'critical_illness', label: 'Poważne zachorowanie' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => update('lifeCoverageType', opt.id)}
                  className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                    (data.lifeCoverageType || 'family_protection') === opt.id
                      ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                      : 'bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
