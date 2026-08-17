import {
  MoneyCheckAnswers,
  LeadScore,
  CustomerValueScore,
  MoneyCheckServiceKey
} from '../types';

export interface ScoringResult {
  leadScore: LeadScore;
  leadScoreReason: string;
  customerValueScore: CustomerValueScore;
  customerValueReason: string;
  crossSellOpportunities: string[];
  contractEndDate?: string;
  renewalReminderDate?: string;
}

export function calculateMoneyCheckScoring(answers: MoneyCheckAnswers): ScoringResult {
  const { selectedServices = [], internet, energy, sim, phone, insurance } = answers;
  const count = selectedServices.length;

  let hotSignals = 0;
  let warmSignals = 0;
  let coldSignals = 0;
  const scoreReasons: string[] = [];

  let earliestEndDate: Date | null = null;

  const checkDate = (dateStr?: string) => {
    if (!dateStr) return;
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      if (!earliestEndDate || d < earliestEndDate) {
        earliestEndDate = d;
      }
    }
  };

  // 1. Analiza Internetu
  if (selectedServices.includes('internet') && internet) {
    checkDate(internet.contractEndDate);
    if (internet.isInContract === 'no') {
      hotSignals += 2;
      scoreReasons.push('Internet: Poza umową — gotowość do natychmiastowej zmiany dostawcy');
    } else if (internet.isInContract === 'yes' && internet.contractEndDate) {
      const diffDays = Math.round((new Date(internet.contractEndDate).getTime() - Date.now()) / (1000 * 3600 * 24));
      if (diffDays <= 35 && diffDays >= -30) {
        hotSignals += 2;
        scoreReasons.push(`Internet: Umowa wygasa w ciągu ${Math.max(0, diffDays)} dni`);
      } else if (diffDays <= 90) {
        warmSignals += 1;
        scoreReasons.push(`Internet: Umowa wygasa za ok. ${Math.round(diffDays / 30)} mies.`);
      } else {
        coldSignals += 1;
        scoreReasons.push('Internet: Długi okres do końca obecnej umowy');
      }
    }
    const cost = parseFloat(internet.monthlyCost || '0');
    if (cost >= 45) {
      hotSignals += 1;
      scoreReasons.push(`Internet: Wysoki obecny rachunek (£${cost}/m)`);
    }
  }

  // 2. Analiza Energii
  if (
    (selectedServices.includes('energy_electricity') ||
     selectedServices.includes('energy_gas') ||
     selectedServices.includes('energy_dual')) && energy
  ) {
    const energyCost = parseFloat(energy.monthlyCost || '0');
    if (energyCost >= 160) {
      hotSignals += 2;
      scoreReasons.push(`Energia: Bardzo wysoki rachunek miesięczny (£${energyCost}/m)`);
    } else if (energyCost > 0) {
      warmSignals += 1;
    }
    if (energy.tariffType === 'variable') {
      hotSignals += 1;
      scoreReasons.push('Energia: Taryfa zmienna (Standard Variable / Price Cap)');
    }
    if (energy.billAttachment?.fileName) {
      hotSignals += 1;
      scoreReasons.push('Energia: Klient załączył rachunek do natychmiastowej weryfikacji');
    }
  }

  // 3. Analiza SIM
  if (selectedServices.includes('sim') && sim) {
    const simCountNum = parseInt(sim.simCount || '1', 10);
    if (simCountNum >= 3) {
      hotSignals += 1;
      scoreReasons.push(`SIM: Zapotrzebowanie na ${simCountNum} kart (pakiet rodzinny/firmowy)`);
    }
    if (sim.needsPolandCalling === 'yes') {
      warmSignals += 1;
      scoreReasons.push('SIM: Wymóg tanich połączeń do Polski');
    }
  }

  // 4. Analiza Telefonu
  if (selectedServices.includes('phone') && phone) {
    if (phone.contractType === 'new' || phone.contractType === 'upgrade') {
      hotSignals += 1;
      scoreReasons.push(`Telefon: Zamiar zakupu nowego urządzenia (${phone.preferredBrand || 'smartfon'})`);
    }
  }

  // 5. Analiza Ubezpieczeń
  if (
    (selectedServices.includes('insurance_car') ||
     selectedServices.includes('insurance_van') ||
     selectedServices.includes('insurance_motorcycle') ||
     selectedServices.includes('insurance_courier') ||
     selectedServices.includes('insurance_life')) && insurance
  ) {
    checkDate(insurance.renewalDate);
    if (insurance.renewalDate) {
      const diffDays = Math.round((new Date(insurance.renewalDate).getTime() - Date.now()) / (1000 * 3600 * 24));
      if (diffDays <= 30 && diffDays >= -5) {
        hotSignals += 2;
        scoreReasons.push(`Ubezpieczenie: Data odnowienia polisy za ${Math.max(0, diffDays)} dni`);
      } else if (diffDays <= 60) {
        warmSignals += 1;
        scoreReasons.push('Ubezpieczenie: Odnowienie polisy w ciągu 60 dni');
      }
    }
    if (insurance.insuranceTypes?.includes('courier') || insurance.vehicleUsage === 'hire_and_reward') {
      hotSignals += 2;
      scoreReasons.push('Ubezpieczenie: Komercyjne / Kurier Hire & Reward');
    }
  }

  // Ustalenie LeadScore
  let leadScore: LeadScore = 'WARM';
  if (hotSignals >= 2 || (hotSignals >= 1 && count >= 2)) {
    leadScore = 'HOT';
  } else if (coldSignals > warmSignals && hotSignals === 0) {
    leadScore = 'COLD';
  } else {
    leadScore = 'WARM';
  }

  const leadScoreReason = scoreReasons.length > 0 
    ? scoreReasons.slice(0, 3).join(' • ') 
    : 'Standardowe zgłoszenie porównania cen w UK';

  // Ustalenie CustomerValueScore
  let customerValueScore: CustomerValueScore = 'BASIC';
  let customerValueReason = 'Pojedyncza usługa';

  const isBusiness = 
    selectedServices.includes('insurance_courier') || 
    selectedServices.includes('insurance_van') ||
    insurance?.vehicleUsage === 'hire_and_reward' ||
    insurance?.vehicleUsage === 'business';

  const simCountNum = parseInt(sim?.simCount || '1', 10);

  if (isBusiness) {
    customerValueScore = 'BUSINESS';
    customerValueReason = 'Klient komercyjny / ubezpieczenie kurierskie / van';
  } else if (count >= 4 || simCountNum >= 3) {
    customerValueScore = 'FAMILY';
    customerValueReason = `Wysoki potencjał pakietowy (${count} usług, ${simCountNum} użytkowników)`;
  } else if (count >= 2) {
    customerValueScore = 'MULTI';
    customerValueReason = `Pakiet multi-usług (${count} zaznaczone obszary)`;
  } else {
    customerValueScore = 'BASIC';
    customerValueReason = 'Pojedynczy obszar weryfikacji';
  }

  // Wykrywanie Cross-Sell
  const crossSell: string[] = [];
  const hasInternet = selectedServices.includes('internet');
  const hasEnergy = selectedServices.some(s => s.startsWith('energy'));
  const hasSim = selectedServices.includes('sim');
  const hasPhone = selectedServices.includes('phone');
  const hasInsurance = selectedServices.some(s => s.startsWith('insurance'));

  if (!hasInternet) crossSell.push('Światłowód i szerokopasmowy Internet do domu');
  if (!hasEnergy) crossSell.push('Taryfa energii prąd/gaz z bonusem partnerskim');
  if (!hasSim && !hasPhone) crossSell.push('Karty SIM z roamingiem i połączeniami do PL');
  if (!hasPhone) crossSell.push('Smartfon w abonamencie (iPhone / Samsung / Pixel)');
  if (!hasInsurance) crossSell.push('Ubezpieczenie samochodu / vana / polisa na życie');

  // Renewal dates
  let contractEndDateFormatted: string | undefined = undefined;
  let renewalReminderDateFormatted: string | undefined = undefined;

  if (earliestEndDate) {
    contractEndDateFormatted = earliestEndDate.toISOString().split('T')[0];
    const reminder = new Date(earliestEndDate);
    reminder.setDate(reminder.getDate() - 30); // 30 dni przed końcem
    renewalReminderDateFormatted = reminder.toISOString().split('T')[0];
  }

  return {
    leadScore,
    leadScoreReason,
    customerValueScore,
    customerValueReason,
    crossSellOpportunities: crossSell.slice(0, 3),
    contractEndDate: contractEndDateFormatted,
    renewalReminderDate: renewalReminderDateFormatted
  };
}
