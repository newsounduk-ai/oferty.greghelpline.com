import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  MoneyCheckServiceKey,
  MoneyCheckAnswers,
  MoneyCheckInternetAnswers,
  MoneyCheckEnergyAnswers,
  MoneyCheckSimAnswers,
  MoneyCheckPhoneAnswers,
  MoneyCheckInsuranceAnswers,
  Lead
} from '../../types';
import ServiceSelector from './ServiceSelector';
import {
  InternetQuestions,
  EnergyQuestions,
  SimQuestions,
  PhoneQuestions,
  InsuranceQuestions
} from './DynamicServiceQuestions';
import CrossSellStep from './CrossSellStep';
import ContactStep, { ContactData } from './ContactStep';
import { calculateMoneyCheckScoring } from '../../utils/moneyCheckScoring';

export default function MoneyCheckWizard() {
  const [selectedServices, setSelectedServices] = useState<MoneyCheckServiceKey[]>(['internet']);
  
  // Dane modułów pytań
  const [internetData, setInternetData] = useState<MoneyCheckInternetAnswers>({
    isInContract: 'no',
    interestedInTv: 'no'
  });
  const [energyData, setEnergyData] = useState<MoneyCheckEnergyAnswers>({
    energyType: 'dual_fuel',
    tariffType: 'variable',
    hasSmartMeter: 'yes'
  });
  const [simData, setSimData] = useState<MoneyCheckSimAnswers>({
    simCount: '1',
    dataAllowance: 'unlimited',
    needsPolandCalling: 'yes',
    needsRoaming: 'yes'
  });
  const [phoneData, setPhoneData] = useState<MoneyCheckPhoneAnswers>({
    preferredBrand: 'Apple iPhone',
    contractType: 'new',
    monthlyBudget: '35_50',
    tradeInInterest: 'no'
  });
  const [insuranceData, setInsuranceData] = useState<MoneyCheckInsuranceAnswers>({
    insuranceTypes: ['car'],
    noClaimsYears: '3',
    vehicleUsage: 'commuting'
  });

  // Dane kontaktowe
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    postcode: '',
    preferredContact: 'phone',
    consent: false,
    marketingConsent: false
  });

  // Krok w kreatorze (0 = wybór usług, 1..N = pytania, N+1 = cross-sell, N+2 = kontakt, N+3 = sukces)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  // Ustalanie dynamicznych kroków pytań na podstawie wybranych usług
  const activeQuestionKeys: Array<'internet' | 'energy' | 'sim' | 'phone' | 'insurance'> = [];
  if (selectedServices.includes('internet')) activeQuestionKeys.push('internet');
  if (selectedServices.some(s => s.startsWith('energy'))) activeQuestionKeys.push('energy');
  if (selectedServices.includes('sim')) activeQuestionKeys.push('sim');
  if (selectedServices.includes('phone')) activeQuestionKeys.push('phone');
  if (selectedServices.some(s => s.startsWith('insurance'))) activeQuestionKeys.push('insurance');

  // Łączna liczba kroków:
  // Step 0: Wybór usług
  // Steps 1 .. activeQuestionKeys.length: Pytania
  // Step activeQuestionKeys.length + 1: Cross-sell
  // Step activeQuestionKeys.length + 2: Kontakt
  const totalSteps = 1 + activeQuestionKeys.length + 2; // Selector + Questions + CrossSell + Contact

  const handleServiceSelectContinue = () => {
    if (selectedServices.length === 0) return;
    setCurrentStepIndex(1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleNextStep = () => {
    setCurrentStepIndex(prev => Math.min(prev + 1, totalSteps - 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStepIndex(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleAddCrossSellService = (serviceKey: MoneyCheckServiceKey) => {
    if (!selectedServices.includes(serviceKey)) {
      setSelectedServices(prev => [...prev, serviceKey]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const answersPayload: MoneyCheckAnswers = {
      selectedServices,
      internet: selectedServices.includes('internet') ? internetData : undefined,
      energy: selectedServices.some(s => s.startsWith('energy')) ? energyData : undefined,
      sim: selectedServices.includes('sim') ? simData : undefined,
      phone: selectedServices.includes('phone') ? phoneData : undefined,
      insurance: selectedServices.some(s => s.startsWith('insurance')) ? insuranceData : undefined
    };

    const scoring = calculateMoneyCheckScoring(answersPayload);

    const newLeadPayload: Partial<Lead> = {
      service: 'money_check',
      name: contactData.name,
      lastName: contactData.lastName,
      phone: contactData.phone,
      email: contactData.email,
      postcode: contactData.postcode || internetData.postcode || '',
      houseNumber: internetData.houseNumber || '',
      consent: contactData.consent,
      marketingConsent: contactData.marketingConsent,
      status: 'NEW',
      preferredContact: contactData.preferredContact,
      source: 'Money Check Wizard',
      isMoneyCheck: true,
      leadScore: scoring.leadScore,
      leadScoreReason: scoring.leadScoreReason,
      customerValueScore: scoring.customerValueScore,
      customerValueReason: scoring.customerValueReason,
      crossSellOpportunities: scoring.crossSellOpportunities,
      contractEndDate: scoring.contractEndDate,
      renewalReminderDate: scoring.renewalReminderDate,
      moneyCheckAnswers: answersPayload
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeadPayload)
      });

      if (!res.ok) {
        throw new Error('Błąd zapisu zgłoszenia.');
      }

      const result = await res.json();
      setSubmittedLead(result.lead || (newLeadPayload as Lead));
      setCurrentStepIndex(totalSteps); // Ekran sukcesu
    } catch (err) {
      console.error('Błąd zapisu Money Check:', err);
      alert('Wystąpił problem z wysłaniem zgłoszenia. Prosimy o kontakt telefoniczny pod numerem 07491 978400.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset formularza
  const handleReset = () => {
    setCurrentStepIndex(0);
    setSubmittedLead(null);
    setSelectedServices(['internet']);
  };

  // Obliczenie etykiety kroku
  const currentStepNumber = currentStepIndex + 1;
  const progressPercent = Math.round((currentStepIndex / (totalSteps - 1)) * 100);

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#101827] via-[#0B1F3A] to-[#101827] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden text-white">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Progress Bar (jeśli nie na ekranie sukcesu) */}
      {currentStepIndex < totalSteps && (
        <div className="mb-8 relative z-10">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2 font-sans">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Krok {currentStepNumber} z {totalSteps}</span>
            </span>
            <span className="text-amber-400 font-mono">{progressPercent}% ukończono</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>
        </div>
      )}

      {/* CONTENT SWITCHER */}
      <div className="relative z-10">
        {/* KROK 0: Wybór usług */}
        {currentStepIndex === 0 && (
          <ServiceSelector
            selected={selectedServices}
            onChange={setSelectedServices}
            onContinue={handleServiceSelectContinue}
          />
        )}

        {/* KROKI 1..N: Pytania do wybranych usług */}
        {currentStepIndex > 0 && currentStepIndex <= activeQuestionKeys.length && (
          <div className="space-y-6">
            {activeQuestionKeys[currentStepIndex - 1] === 'internet' && (
              <InternetQuestions data={internetData} onChange={setInternetData} />
            )}
            {activeQuestionKeys[currentStepIndex - 1] === 'energy' && (
              <EnergyQuestions data={energyData} onChange={setEnergyData} />
            )}
            {activeQuestionKeys[currentStepIndex - 1] === 'sim' && (
              <SimQuestions data={simData} onChange={setSimData} />
            )}
            {activeQuestionKeys[currentStepIndex - 1] === 'phone' && (
              <PhoneQuestions data={phoneData} onChange={setPhoneData} />
            )}
            {activeQuestionKeys[currentStepIndex - 1] === 'insurance' && (
              <InsuranceQuestions data={insuranceData} onChange={setInsuranceData} />
            )}

            {/* Dolny pasek nawigacji pytań */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="min-h-[48px] px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Wstecz</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="min-h-[48px] px-8 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] text-xs sm:text-sm font-extrabold font-sans flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Dalej</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* KROK N+1: Cross-Sell */}
        {currentStepIndex === activeQuestionKeys.length + 1 && (
          <CrossSellStep
            currentSelected={selectedServices}
            onAddService={handleAddCrossSellService}
            onContinue={handleNextStep}
          />
        )}

        {/* KROK N+2: Dane kontaktowe */}
        {currentStepIndex === activeQuestionKeys.length + 2 && (
          <ContactStep
            data={contactData}
            onChange={setContactData}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onBack={handlePrevStep}
          />
        )}

        {/* EKRAN SUKCESU */}
        {currentStepIndex >= totalSteps && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zgłoszenie zarejestrowane w CRM</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
                Dziękujemy, {contactData.name}!
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans">
                Otrzymaliśmy Twoje zgłoszenie <strong>GregHelpline Money Check</strong>. Nasz polski doradca przystąpił do analizy i skontaktuje się z Tobą w wybranej formie.
              </p>
            </div>

            {/* Szybkie podsumowanie */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 max-w-lg mx-auto text-left text-xs text-slate-300 space-y-2 font-sans">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Wybrane usługi:</span>
                <span className="font-bold text-amber-400 capitalize">
                  {selectedServices.map(s => s.replace('_', ' ')).join(', ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Preferowany kontakt:</span>
                <span className="font-bold text-white capitalize">{contactData.preferredContact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Numer kontaktowy:</span>
                <span className="font-bold text-white font-mono">{contactData.phone}</span>
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+447491978400"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#0B1F3A]" />
                <span>Zadzwoń teraz: 07491 978400</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Nowe sprawdzenie</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
