import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Loader2, Search, Zap, Wifi, Smartphone, ShieldCheck, User, Phone, Mail, Sparkles } from 'lucide-react';
import { ServiceType } from '../types';

interface MultiStepFormProps {
  service?: ServiceType;
  onSuccess?: () => void;
  inline?: boolean;
}

export default function MultiStepForm({ service = 'energia', onSuccess, inline = false }: MultiStepFormProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [loading, setLoading] = useState(false);

  // Form State covering all service attributes
  const [formData, setFormData] = useState({
    service,
    // Internet & Energia
    postcode: '',
    houseNumber: '',
    // Energia
    currentSupplier: '',
    monthlyBill: '',
    // SIM
    simNeed: 'sim_only' as 'sim_only' | 'phone_plan' | 'mobile_broadband',
    currentNetwork: '',
    dataUsage: '10GB - 50GB',
    // Ubezpieczenia
    insuranceType: 'health' as 'health' | 'car' | 'life' | 'travel',
    insuranceDetailsStr: '',
    // Contact
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Theme Config per Service
  const serviceConfig = {
    internet: {
      title: 'Światłowód i Internet',
      icon: Wifi,
      accentColor: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20',
      badgeColor: 'text-blue-600',
      barColor: 'bg-blue-600',
      step1Title: 'Krok 1: Kod pocztowy',
      step1Subtitle: 'Sprawdzimy dostępność światłowodu (Openreach, Virgin, Community Fibre, CityFibre) pod Twoim adresem.',
      step2Title: 'Krok 2: Numer domu / mieszkania',
      step2Subtitle: 'Potrzebny do dokładnej weryfikacji linii telefonicznej / gniazdka światłowodowego.',
    },
    energia: {
      title: 'Energia Prąd i Gaz',
      icon: Zap,
      accentColor: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20',
      badgeColor: 'text-amber-600',
      barColor: 'bg-amber-500',
      step1Title: 'Krok 1: Kod pocztowy',
      step1Subtitle: 'Sprawdzimy strefę energetyczną i najtańsze taryfy dostawców prądu i gazu w UK.',
      step2Title: 'Krok 2: Obecny dostawca i rachunki',
      step2Subtitle: 'Podaj dostawcę oraz średni kwotę miesięczną, by wyliczyć Twoją oszczędność.',
    },
    sim: {
      title: 'SIM i Telefony na Abonament',
      icon: Smartphone,
      accentColor: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20',
      badgeColor: 'text-indigo-600',
      barColor: 'bg-indigo-600',
      step1Title: 'Krok 1: Czego szukasz?',
      step1Subtitle: 'Wybierz rodzaj usługi komórkowej, która Cię interesuje.',
      step2Title: 'Krok 2: Obecna sieć i dane',
      step2Subtitle: 'Wybierz obecnego operatora oraz szacowane zapotrzebowanie na gigabajty.',
    },
    ubezpieczenia: {
      title: 'Ubezpieczenia w UK',
      icon: ShieldCheck,
      accentColor: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20',
      badgeColor: 'text-emerald-600',
      barColor: 'bg-emerald-600',
      step1Title: 'Krok 1: Rodzaj ubezpieczenia',
      step1Subtitle: 'Wybierz polisę, o której chcesz porozmawiać z polskim doradcą.',
      step2Title: 'Krok 2: Podstawowe informacje',
      step2Subtitle: 'Krótki opis sytuacji pomoże nam dobrać najlepszego licencjonowanego ubezpieczyciela.',
    }
  }[service];

  const ServiceIcon = serviceConfig.icon;

  // Real-time validation
  const validatePostcode = (code: string) => {
    const ukPostcodeRegex = /^[A-Z]{1,2}[0-9R][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;
    if (!code.trim()) {
      return 'Wpisz kod pocztowy (np. SW1A 1AA, M1 1AE).';
    }
    if (!ukPostcodeRegex.test(code.trim())) {
      return 'Wprowadź poprawny brytyjski kod pocztowy.';
    }
    return '';
  };

  const handleNextStep1 = () => {
    if (service === 'internet' || service === 'energia') {
      const err = validatePostcode(formData.postcode);
      if (err) {
        setErrors({ postcode: err });
        return;
      }
    }
    setErrors({});
    setStep(2);
  };

  const handleNextStep2 = () => {
    const errs: Record<string, string> = {};
    if (service === 'internet' && !formData.houseNumber.trim()) {
      errs.houseNumber = 'Wpisz numer domu lub mieszkania.';
    }
    if (service === 'energia' && !formData.monthlyBill.trim()) {
      errs.monthlyBill = 'Podaj szacunkowy rachunek w £.';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setErrors({});
      setStep(3);
    }
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = 'Wpisz imię i nazwisko (min. 3 znaki).';
    }

    const phoneClean = formData.phone.replace(/\s+/g, '');
    if (!phoneClean) {
      errs.phone = 'Wpisz numer telefonu.';
    } else if (phoneClean.length < 8) {
      errs.phone = 'Numer telefonu jest za krótki.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Wpisz adres e-mail.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Wprowadź poprawny adres e-mail.';
    }

    if (!formData.consent) {
      errs.consent = 'Musisz wyrazić zgodę na kontakt, abyśmy mogli przetworzyć zapytanie.';
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const step3Errors = validateStep3();
    if (Object.keys(step3Errors).length > 0) {
      setErrors(step3Errors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const payload = {
        service,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        consent: formData.consent,
        postcode: formData.postcode,
        houseNumber: formData.houseNumber,
        currentSupplier: formData.currentSupplier,
        monthlyBill: formData.monthlyBill,
        simNeed: formData.simNeed,
        currentNetwork: formData.currentNetwork,
        dataUsage: formData.dataUsage,
        insuranceType: formData.insuranceType,
        insuranceDetails: formData.insuranceDetailsStr
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania formularza.');
      }

      setStep('success');
      if (onSuccess) onSuccess();
    } catch (error: any) {
      setErrors({ form: error.message || 'Błąd połączenia. Spróbuj ponownie.' });
    } finally {
      setLoading(false);
    }
  };

  const progressPercentage = {
    1: 33,
    2: 66,
    3: 100,
    success: 100,
  }[step];

  const resetForm = () => {
    setFormData({
      service,
      postcode: '',
      houseNumber: '',
      currentSupplier: '',
      monthlyBill: '',
      simNeed: 'sim_only',
      currentNetwork: '',
      dataUsage: '10GB - 50GB',
      insuranceType: 'health',
      insuranceDetailsStr: '',
      name: '',
      phone: '',
      email: '',
      consent: false,
    });
    setErrors({});
    setStep(1);
  };

  if (step === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="text-center py-10 px-6 flex flex-col items-center justify-center h-full min-h-[400px]"
        id="formularz-sukces"
      >
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-5 shadow-sm border border-emerald-100">
          <Check className="w-8 h-8" strokeWidth={3} />
        </div>

        <h3 className="font-display text-2xl font-black text-[#0B1F3A] mb-2 tracking-tight">
          Zgłoszenie Przyjęte!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6 leading-relaxed text-xs md:text-sm">
          Dziękujemy, <strong className="text-gray-900">{formData.name}</strong>! Twój wniosek trafił do naszego polskiego konsultanta. Oddzwonimy w ciągu kilku godzin z gotowym zestawieniem ofert.
        </p>

        <button
          onClick={resetForm}
          className="px-6 py-2.5 font-sans font-semibold text-xs text-blue-700 hover:bg-blue-50 border border-blue-200 rounded-xl transition-all cursor-pointer"
        >
          Wypełnij nowy formularz
        </button>
      </motion.div>
    );
  }

  return (
    <div className={`w-full ${inline ? '' : 'bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100/80'}`} id="formularz-kontener">
      
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 ${serviceConfig.badgeColor}`}>
            <ServiceIcon className="w-4 h-4" />
            {serviceConfig.title}
          </span>
          <span className="text-xs font-mono font-semibold text-gray-400">
            Krok {step} z 3
          </span>
        </div>
        
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${serviceConfig.barColor} rounded-full`}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <div className="mb-5">
              <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-1">
                {serviceConfig.step1Title}
              </h3>
              <p className="text-xs text-gray-500">
                {serviceConfig.step1Subtitle}
              </p>
            </div>

            <div className="space-y-4 flex-grow">
              
              {/* Internet & Energia: Postcode */}
              {(service === 'internet' || service === 'energia') && (
                <div>
                  <label htmlFor="postcode" className="block text-xs font-bold text-gray-700 mb-1.5">
                    Kod pocztowy w UK (UK Postcode)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="postcode"
                      value={formData.postcode}
                      onChange={(e) => {
                        setFormData({ ...formData, postcode: e.target.value });
                        if (errors.postcode) setErrors({ ...errors, postcode: '' });
                      }}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleNextStep1(); }}
                      placeholder="np. SW1A 1AA, M1 1AE, E1 6AN"
                      className={`w-full px-4 py-3 bg-gray-50/50 border ${
                        errors.postcode ? 'border-rose-500' : 'border-gray-200 focus:border-blue-500'
                      } rounded-2xl text-gray-900 text-sm font-bold uppercase`}
                      autoFocus
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-400">UK 🇬🇧</span>
                  </div>
                  {errors.postcode && <p className="text-xs text-rose-500 mt-1">{errors.postcode}</p>}
                </div>
              )}

              {/* SIM: Need Type Selection */}
              {service === 'sim' && (
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-gray-700">Czego potrzebujesz?</label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { id: 'sim_only', title: 'Karta SIM-only', desc: 'Sam abonament / elastyczna karta SIM' },
                      { id: 'phone_plan', title: 'Smartfon z abonamentem', desc: 'Nowy iPhone, Samsung lub Pixel w ratach' },
                      { id: 'mobile_broadband', title: 'Internet mobilny / Router 5G', desc: 'Szybki internet na kartę lub do domu' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, simNeed: item.id as any })}
                        className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                          formData.simNeed === item.id
                            ? 'bg-indigo-50/80 border-indigo-500 text-indigo-900 shadow-xs'
                            : 'bg-gray-50/50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.title}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Insurance: Insurance Type Selection */}
              {service === 'ubezpieczenia' && (
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-gray-700">Wybierz typ ubezpieczenia</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'health', title: 'Prywatne Zdrowotne', desc: 'Szybki dostęp do lekarzy i szpitali w UK' },
                      { id: 'car', title: 'Samochód OC/AC', desc: 'Ubezpieczenie auta i motocykla' },
                      { id: 'life', title: 'Na Życie & Rachunki', desc: 'Zabezpieczenie finansowe rodziny' },
                      { id: 'travel', title: 'Podróżne & Zagraniczne', desc: 'Ochrona podczas wyjazdów' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, insuranceType: item.id as any })}
                        className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                          formData.insuranceType === item.id
                            ? 'bg-emerald-50/80 border-emerald-500 text-emerald-900 shadow-xs'
                            : 'bg-gray-50/50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.title}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleNextStep1}
                className={`w-full py-3.5 px-6 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${serviceConfig.accentColor}`}
              >
                <span>Przejdź do kroku 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <div className="mb-5 flex justify-between items-start">
              <div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-1">
                  {serviceConfig.step2Title}
                </h3>
                <p className="text-xs text-gray-500">
                  {serviceConfig.step2Subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-blue-600 hover:underline shrink-0"
              >
                Wstecz
              </button>
            </div>

            <div className="space-y-4 flex-grow">
              
              {/* Internet Step 2: House Number */}
              {service === 'internet' && (
                <div>
                  <label htmlFor="houseNumber" className="block text-xs font-bold text-gray-700 mb-1.5">
                    Numer budynku lub mieszkania
                  </label>
                  <input
                    type="text"
                    id="houseNumber"
                    value={formData.houseNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, houseNumber: e.target.value });
                      if (errors.houseNumber) setErrors({ ...errors, houseNumber: '' });
                    }}
                    placeholder="np. Flat 12, 45 High Street"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold"
                    autoFocus
                  />
                  {errors.houseNumber && <p className="text-xs text-rose-500 mt-1">{errors.houseNumber}</p>}
                </div>
              )}

              {/* Energia Step 2: Supplier & Monthly bill */}
              {service === 'energia' && (
                <>
                  <div>
                    <label htmlFor="currentSupplier" className="block text-xs font-bold text-gray-700 mb-1.5">
                      Obecny dostawca (opcjonalnie)
                    </label>
                    <input
                      type="text"
                      id="currentSupplier"
                      value={formData.currentSupplier}
                      onChange={(e) => setFormData({ ...formData, currentSupplier: e.target.value })}
                      placeholder="np. British Gas, Octopus, E.ON"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthlyBill" className="block text-xs font-bold text-gray-700 mb-1.5">
                      Orientacyjny rachunek miesięczny (£) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-500">£</span>
                      <input
                        type="text"
                        id="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={(e) => {
                          setFormData({ ...formData, monthlyBill: e.target.value });
                          if (errors.monthlyBill) setErrors({ ...errors, monthlyBill: '' });
                        }}
                        placeholder="np. 150"
                        className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold"
                        autoFocus
                      />
                    </div>
                    {errors.monthlyBill && <p className="text-xs text-rose-500 mt-1">{errors.monthlyBill}</p>}
                  </div>
                </>
              )}

              {/* SIM Step 2: Network & Data */}
              {service === 'sim' && (
                <>
                  <div>
                    <label htmlFor="currentNetwork" className="block text-xs font-bold text-gray-700 mb-1.5">
                      Obecna sieć / operator
                    </label>
                    <input
                      type="text"
                      id="currentNetwork"
                      value={formData.currentNetwork}
                      onChange={(e) => setFormData({ ...formData, currentNetwork: e.target.value })}
                      placeholder="np. giffgaff, EE, Vodafone, Three, O2"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Ile gigabajtów (GB) zużywasz miesięcznie?
                    </label>
                    <select
                      value={formData.dataUsage}
                      onChange={(e) => setFormData({ ...formData, dataUsage: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-medium"
                    >
                      <option value="1GB - 10GB">Do 10 GB (Standard)</option>
                      <option value="10GB - 50GB">10 GB - 50 GB (Umiarkowane)</option>
                      <option value="50GB - 100GB">50 GB - 100 GB (Częsty streaming)</option>
                      <option value="UNLIMITED">Nielimitowane GB (Unlimited 5G)</option>
                    </select>
                  </div>
                </>
              )}

              {/* Insurance Step 2: Dynamic details */}
              {service === 'ubezpieczenia' && (
                <div>
                  <label htmlFor="insuranceDetailsStr" className="block text-xs font-bold text-gray-700 mb-1.5">
                    Opisz w kilku słowach swoje potrzeby
                  </label>
                  <textarea
                    id="insuranceDetailsStr"
                    value={formData.insuranceDetailsStr}
                    onChange={(e) => setFormData({ ...formData, insuranceDetailsStr: e.target.value })}
                    rows={3}
                    placeholder="np. Szukam ubezpieczenia zdrowotnego dla rodziny 2+1 lub ubezpieczenia auta Ford Focus 2020."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs"
                  />
                </div>
              )}

            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-2xl border border-gray-200"
              >
                Wstecz
              </button>
              <button
                type="button"
                onClick={handleNextStep2}
                className={`w-2/3 py-3.5 px-6 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${serviceConfig.accentColor}`}
              >
                <span>Przejdź do kroku 3</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <div className="mb-4">
              <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-1">
                Krok 3: Dane kontaktowe
              </h3>
              <p className="text-xs text-gray-500">
                Podaj imię, telefon i e-mail, aby nasz polski konsultant mógł przedstawić bezpłatne zestawienie.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 flex-grow">
              
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">
                  Imię i Nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="np. Jan Kowalski"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-medium"
                />
                {errors.name && <p className="text-xs text-rose-500 mt-0.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">
                  Numer telefonu (UK/PL) *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="np. 07491 978400 lub +44 7491 978400"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-medium"
                />
                {errors.phone && <p className="text-xs text-rose-500 mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">
                  Adres e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan.kowalski@gmail.com"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-medium"
                />
                {errors.email && <p className="text-xs text-rose-500 mt-0.5">{errors.email}</p>}
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded-sm text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[10px] text-gray-500 leading-tight">
                    Wyrażam zgodę na kontakt po polsku ze strony doradcy Greg Helpline. Pomoc jest darmowa i niezobowiązująca.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-500 mt-0.5">{errors.consent}</p>}
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-2xl border border-gray-200"
                  disabled={loading}
                >
                  Wstecz
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-2/3 py-3.5 px-5 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${serviceConfig.accentColor}`}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Wyślij zgłoszenie</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
