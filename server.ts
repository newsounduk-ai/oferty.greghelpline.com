/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { Lead, LeadStatus, ActivityLog, WebhookConfig, CRMStats, ServiceType, LeadScore, CustomerValueScore } from './src/types';

const PORT = 3000;
const app = express();

app.use(express.json({ limit: '10mb' }));

// Lazy Google Gemini AI initialization
let aiClient: GoogleGenAI | null = null;
function getGeminiAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.warn('Gemini AI initialization skipped:', e);
    }
  }
  return aiClient;
}

// Generate concise AI lead summary for Greg
async function generateLeadAISummary(lead: Lead): Promise<string | undefined> {
  const ai = getGeminiAI();
  if (!ai) return undefined;

  try {
    const prompt = `Jesteś analitykiem CRM dla GregHelpline (polski serwis doradztwa w UK).
Otrzymałeś nowe zgłoszenie z systemu Money Check.
Dane klienta:
- Imię: ${lead.name} ${lead.lastName || ''}
- Telefon: ${lead.phone}, E-mail: ${lead.email}
- Postcode: ${lead.postcode || 'Brak'}
- Wybrane usługi: ${lead.moneyCheckAnswers?.selectedServices?.join(', ') || lead.service}
- Lead Score: ${lead.leadScore || 'Nieokreślony'} (${lead.leadScoreReason || ''})
- Customer Value Score: ${lead.customerValueScore || 'BASIC'}
- Odpowiedzi szczegółowe: ${JSON.stringify(lead.moneyCheckAnswers || {})}

Zadanie: W 2-3 zwięzłych zdaniach po polsku przygotuj dla Grega podsumowanie priorytetu kontaktu, kluczowych potrzeb klienta i sugerowanych oszczędności / ofert. Nie wymyślaj nieistniejących cen ani fałszywych gwarancji.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim();
  } catch (err) {
    console.warn('Gemini summary generation warning:', err);
    return undefined;
  }
}

// Ensure data folder exists
const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const LOGS_FILE = path.join(DATA_DIR, 'logs.json');
const WEBHOOK_FILE = path.join(DATA_DIR, 'webhook.json');

// Pre-seeded mock data for an immediate high-fidelity experience in Admin Panel
const defaultLeads: Lead[] = [
  {
    id: 'lead_1',
    service: 'energia',
    name: 'Jan Kowalski',
    phone: '07491 978400',
    email: 'jan.kowalski@gmail.com',
    postcode: 'W1D 1AN',
    currentSupplier: 'British Gas',
    monthlyBill: '£180',
    consent: true,
    status: 'finalized',
    newSupplier: 'Octopus Energy',
    tariff: 'Fixed 12M Green Energy',
    savings: '£360/rok',
    finalizedOffer: {
      operatorOrSupplier: 'Octopus Energy',
      planOrTariff: 'Fixed 12M Green Energy',
      priceOrSavings: '£360/rok oszczędności',
      additionalNotes: 'Sfinalizowano przeniesienie energii.'
    },
    notes: 'Przełączono z British Gas na Octopus Energy. Roczne oszczędności wyliczone na £360.',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_2',
    service: 'internet',
    name: 'Marek Wiśniewski',
    phone: '07700 900123',
    email: 'm.wisniewski@outlook.com',
    postcode: 'M1 2WD',
    houseNumber: 'Flat 4B',
    consent: true,
    status: 'contacted',
    finalizedOffer: {
      operatorOrSupplier: 'YouFibre',
      planOrTariff: 'YouFibre 1000 Mbps',
      priceOrSavings: '£29.99/mies.',
      additionalNotes: 'Sprawdzono zasięg, rezerwacja inżyniera na wtorek.'
    },
    notes: 'Klient szuka szybkiego światłowodu do gier i pracy zdalnej. Wybrano YouFibre 1 Gbps.',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_3',
    service: 'sim',
    name: 'Anna Nowak',
    phone: '07911 555221',
    email: 'anna.nowak@onet.pl',
    simNeed: 'sim_only',
    currentNetwork: 'giffgaff',
    dataUsage: '50GB+',
    consent: true,
    status: 'new',
    notes: 'Potrzebuje nielimitowanego pakietu danych SIM-only z darmowym roamingiem do Polski.',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_4',
    service: 'ubezpieczenia',
    name: 'Piotr Wójcik',
    phone: '07890 654321',
    email: 'piotr.wojcik@poczta.fm',
    insuranceType: 'health',
    insuranceDetails: { familyMembers: '2 dorosłych + 1 dziecko', budget: 'do £100/mies.' },
    consent: true,
    status: 'new',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_5',
    service: 'energia',
    name: 'Katarzyna Zielińska',
    phone: '07722 888999',
    email: 'kasia.z@yahoo.com',
    postcode: 'G1 1QX',
    currentSupplier: 'Scottish Power',
    monthlyBill: '£95',
    consent: true,
    status: 'rejected',
    notes: 'Niski rachunek, na ten moment jej obecna taryfa socjalna jest wystarczająca.',
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_6',
    service: 'internet',
    name: 'Tomasz Kamiński',
    phone: '07555 999111',
    email: 't.kaminski@gmail.com',
    postcode: 'E1 6AN',
    houseNumber: '12',
    consent: true,
    status: 'finalized',
    finalizedOffer: {
      operatorOrSupplier: 'Hyperoptic',
      planOrTariff: 'Hyperoptic 500 Mbps',
      priceOrSavings: '£25/mies.',
      additionalNotes: 'Podłączono światłowód do mieszkania.'
    },
    notes: 'Przejście z powolnego VDSL na pełny światłowód Hyperoptic.',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'lead_7',
    service: 'wakacje',
    name: 'Michał Adamski',
    phone: '07491 978400',
    email: 'm.adamski@gmail.com',
    vacationType: 'all_inclusive',
    vacationTerm: 'Lato / Wakacje 2026',
    travelersCount: 'Rodzina 2+2',
    budgetPerPerson: '£600 - £1000',
    consent: true,
    status: 'contacted',
    finalizedOffer: {
      operatorOrSupplier: 'Trip.com / TUI',
      planOrTariff: 'All Inclusive Costa del Sol (Hiszpania)',
      priceOrSavings: '£2,800 za całą rodzinę',
      additionalNotes: 'Propozycja przesłana na email, wylot z Luton.'
    },
    notes: 'Zapytanie o wakacje w Hiszpanii z lotami z Luton dla rodziny 2+2.',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const defaultLogs: ActivityLog[] = [
  {
    id: 'log_1',
    type: 'lead_create',
    message: 'Zainicjalizowano system CRM Greg Helpline - Wszystkie Oferty. Wczytano bazy danych.',
    timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const defaultWebhook: WebhookConfig = {
  url: '',
  enabled: false
};

// Helper database loaders
function getLeads(): Lead[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
    } else {
      fs.writeFileSync(LEADS_FILE, JSON.stringify(defaultLeads, null, 2));
      return defaultLeads;
    }
  } catch (error) {
    console.error('Error reading leads file:', error);
    return defaultLeads;
  }
}

function saveLeads(leads: Lead[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('Error writing leads file:', error);
  }
}

function getLogs(): ActivityLog[] {
  try {
    if (fs.existsSync(LOGS_FILE)) {
      return JSON.parse(fs.readFileSync(LOGS_FILE, 'utf-8'));
    } else {
      fs.writeFileSync(LOGS_FILE, JSON.stringify(defaultLogs, null, 2));
      return defaultLogs;
    }
  } catch (error) {
    console.error('Error reading logs file:', error);
    return defaultLogs;
  }
}

function saveLogs(logs: ActivityLog[]) {
  try {
    fs.writeFileSync(LOGS_FILE, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Error writing logs file:', error);
  }
}

function addLog(type: ActivityLog['type'], message: string, leadId?: string, service?: ServiceType) {
  const logs = getLogs();
  const newLog: ActivityLog = {
    id: 'log_' + Math.random().toString(36).substr(2, 9),
    type,
    message,
    timestamp: new Date().toISOString(),
    leadId,
    service
  };
  logs.unshift(newLog);
  if (logs.length > 200) {
    logs.pop();
  }
  saveLogs(logs);
}

function getWebhook(): WebhookConfig {
  try {
    if (fs.existsSync(WEBHOOK_FILE)) {
      return JSON.parse(fs.readFileSync(WEBHOOK_FILE, 'utf-8'));
    } else {
      fs.writeFileSync(WEBHOOK_FILE, JSON.stringify(defaultWebhook, null, 2));
      return defaultWebhook;
    }
  } catch (error) {
    console.error('Error reading webhook config:', error);
    return defaultWebhook;
  }
}

function saveWebhook(config: WebhookConfig) {
  try {
    fs.writeFileSync(WEBHOOK_FILE, JSON.stringify(config, null, 2));
  } catch (error) {
    console.error('Error writing webhook config:', error);
  }
}

// REST API ROUTES
app.get('/api/leads', (req, res) => {
  const leads = getLeads();
  const { status, search, service, leadScore, customerValueScore, renewalFilter } = req.query;

  let filteredLeads = [...leads];

  if (service && service !== 'all') {
    if (service === 'money_check') {
      filteredLeads = filteredLeads.filter(lead => lead.service === 'money_check' || lead.isMoneyCheck);
    } else {
      filteredLeads = filteredLeads.filter(lead => lead.service === service);
    }
  }

  if (status && status !== 'all') {
    filteredLeads = filteredLeads.filter(lead => {
      if (status === 'NEW') return lead.status === 'NEW' || lead.status === 'new';
      if (status === 'CONTACTED') return lead.status === 'CONTACTED' || lead.status === 'contacted';
      if (status === 'SOLD') return lead.status === 'SOLD' || lead.status === 'finalized';
      if (status === 'LOST') return lead.status === 'LOST' || lead.status === 'rejected';
      return lead.status === status;
    });
  }

  if (leadScore && leadScore !== 'all') {
    filteredLeads = filteredLeads.filter(lead => lead.leadScore === leadScore);
  }

  if (customerValueScore && customerValueScore !== 'all') {
    filteredLeads = filteredLeads.filter(lead => lead.customerValueScore === customerValueScore);
  }

  if (renewalFilter === 'upcoming') {
    const now = Date.now();
    const in60Days = now + 60 * 24 * 60 * 60 * 1000;
    filteredLeads = filteredLeads.filter(lead => {
      if (!lead.contractEndDate) return false;
      const end = new Date(lead.contractEndDate).getTime();
      return !isNaN(end) && end >= now - 7 * 24 * 3600 * 1000 && end <= in60Days;
    });
  }

  if (search) {
    const s = String(search).toLowerCase();
    filteredLeads = filteredLeads.filter(
      lead =>
        lead.name.toLowerCase().includes(s) ||
        (lead.lastName && lead.lastName.toLowerCase().includes(s)) ||
        lead.email.toLowerCase().includes(s) ||
        lead.phone.includes(s) ||
        (lead.postcode && lead.postcode.toLowerCase().includes(s)) ||
        (lead.currentSupplier && lead.currentSupplier.toLowerCase().includes(s)) ||
        (lead.currentNetwork && lead.currentNetwork.toLowerCase().includes(s)) ||
        (lead.insuranceType && lead.insuranceType.toLowerCase().includes(s)) ||
        (lead.notes && lead.notes.toLowerCase().includes(s)) ||
        (lead.aiSummary && lead.aiSummary.toLowerCase().includes(s)) ||
        (lead.leadScoreReason && lead.leadScoreReason.toLowerCase().includes(s))
    );
  }

  // Sort by newest first
  filteredLeads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  res.json(filteredLeads);
});

app.post('/api/leads', async (req, res) => {
  try {
    const { 
      service, 
      name, 
      lastName,
      phone, 
      email, 
      consent, 
      marketingConsent,
      postcode, 
      houseNumber, 
      preferredContact,
      source,
      isMoneyCheck,
      leadScore,
      leadScoreReason,
      customerValueScore,
      customerValueReason,
      crossSellOpportunities,
      contractEndDate,
      renewalReminderDate,
      moneyCheckAnswers,
      currentSupplier, 
      monthlyBill,
      simNeed,
      currentNetwork,
      dataUsage,
      insuranceType,
      insuranceDetails,
      vacationType,
      vacationTerm,
      travelersCount,
      budgetPerPerson
    } = req.body;

    const chosenService: ServiceType = service || (isMoneyCheck ? 'money_check' : 'energia');

    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Proszę wypełnić wymagane dane kontaktowe (imię, telefon, email).' });
    }

    const leads = getLeads();
    const newLead: Lead = {
      id: 'lead_' + Math.random().toString(36).substr(2, 9),
      service: chosenService,
      name: name.trim(),
      ...(lastName && { lastName: lastName.trim() }),
      phone: phone.trim(),
      email: email.trim(),
      consent: !!consent,
      ...(marketingConsent !== undefined && { marketingConsent: !!marketingConsent }),
      status: (chosenService === 'money_check' || isMoneyCheck) ? 'NEW' : 'new',
      createdAt: new Date().toISOString(),
      ...(preferredContact && { preferredContact }),
      ...(source && { source }),
      ...(isMoneyCheck !== undefined && { isMoneyCheck: !!isMoneyCheck }),
      ...(leadScore && { leadScore }),
      ...(leadScoreReason && { leadScoreReason }),
      ...(customerValueScore && { customerValueScore }),
      ...(customerValueReason && { customerValueReason }),
      ...(crossSellOpportunities && { crossSellOpportunities }),
      ...(contractEndDate && { contractEndDate }),
      ...(renewalReminderDate && { renewalReminderDate }),
      ...(moneyCheckAnswers && { moneyCheckAnswers }),
      ...(postcode && { postcode: postcode.toUpperCase().trim() }),
      ...(houseNumber && { houseNumber: houseNumber.trim() }),
      ...(currentSupplier && { currentSupplier: currentSupplier.trim() }),
      ...(monthlyBill && { monthlyBill: monthlyBill.trim() }),
      ...(simNeed && { simNeed }),
      ...(currentNetwork && { currentNetwork: currentNetwork.trim() }),
      ...(dataUsage && { dataUsage: dataUsage.trim() }),
      ...(insuranceType && { insuranceType }),
      ...(insuranceDetails && { insuranceDetails }),
      ...(vacationType && { vacationType }),
      ...(vacationTerm && { vacationTerm: vacationTerm.trim() }),
      ...(travelersCount && { travelersCount: travelersCount.trim() }),
      ...(budgetPerPerson && { budgetPerPerson: budgetPerPerson.trim() })
    };

    // Opcjonalna asysta Gemini AI do podsumowania leada dla Grega
    if (isMoneyCheck || chosenService === 'money_check') {
      const summary = await generateLeadAISummary(newLead);
      if (summary) {
        newLead.aiSummary = summary;
      }
    }

    leads.push(newLead);
    saveLeads(leads);

    const serviceNames: Record<ServiceType, string> = {
      money_check: 'Money Check (Audyt UK)',
      internet: 'Internet',
      energia: 'Energia',
      sim: 'SIM i Telefony',
      ubezpieczenia: 'Ubezpieczenia',
      wakacje: 'Wakacje i Podróże',
      vpn: 'VPN i Bezpieczeństwo',
      prawo: 'Prawo i Wsparcie'
    };

    // 1. Log activity
    const logDetails = newLead.leadScore 
      ? `Nowy lead Money Check [${newLead.leadScore} • ${newLead.customerValueScore}]: ${newLead.name} ${newLead.lastName || ''} (${newLead.phone})`
      : `Nowy lead [${serviceNames[chosenService] || chosenService}]: ${newLead.name} (${newLead.phone})`;

    addLog('lead_create', logDetails, newLead.id, chosenService);

    // 2. Simulated email confirmation
    addLog(
      'email_sim',
      `[SIMULATED EMAIL] Wysłano potwierdzenie do ${newLead.name} (${newLead.email}) dla: ${serviceNames[chosenService] || chosenService}`,
      newLead.id,
      chosenService
    );

    // 3. Webhook integration
    const webhookConfig = getWebhook();
    if (webhookConfig.enabled && webhookConfig.url) {
      try {
        addLog('webhook_trigger', `Wysyłanie webhooka do: ${webhookConfig.url}`, newLead.id, chosenService);
        
        fetch(webhookConfig.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-GregHelpline-Signature': 'greg_helpline_secret_2026'
          },
          body: JSON.stringify({
            event: 'lead.created',
            timestamp: new Date().toISOString(),
            service: chosenService,
            isMoneyCheck: !!newLead.isMoneyCheck,
            leadScore: newLead.leadScore,
            customerValueScore: newLead.customerValueScore,
            data: newLead
          })
        }).then(response => {
          if (response.ok) {
            addLog('webhook_trigger', `Webhook wysłany pomyślnie. Status: ${response.status}`, newLead.id, chosenService);
          } else {
            addLog('webhook_trigger', `Błąd webhooka. Serwer docelowy zwrócił status: ${response.status}`, newLead.id, chosenService);
          }
        }).catch((err: any) => {
          addLog('webhook_trigger', `Błąd sieci podczas wysyłania webhooka: ${err.message}`, newLead.id, chosenService);
        });
      } catch (err: any) {
        console.error('Webhook trigger issue:', err);
      }
    }

    res.status(201).json({ success: true, lead: newLead });
  } catch (error: any) {
    res.status(500).json({ error: 'Błąd serwera podczas zapisywania leada: ' + error.message });
  }
});

// Alias for Money Check direct submission
app.post('/api/money-check', (req, res) => {
  req.body.isMoneyCheck = true;
  req.body.service = 'money_check';
  // Forward to /api/leads logic
  app._router.handle(req, res, () => {});
});

app.patch('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes, finalizedOffer, newSupplier, tariff, savings, operator, speed, price } = req.body;

  const leads = getLeads();
  const leadIndex = leads.findIndex(l => l.id === id);

  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Nie znaleziono leada.' });
  }

  const oldLead = leads[leadIndex];
  const updatedLead: Lead = {
    ...oldLead,
    ...(status && { status: status as LeadStatus }),
    ...(notes !== undefined && { notes }),
    ...(finalizedOffer !== undefined && { finalizedOffer }),
    ...(newSupplier !== undefined && { newSupplier }),
    ...(tariff !== undefined && { tariff }),
    ...(savings !== undefined && { savings }),
    ...(operator !== undefined && { operator }),
    ...(speed !== undefined && { speed }),
    ...(price !== undefined && { price })
  };

  leads[leadIndex] = updatedLead;
  saveLeads(leads);

  if (status && status !== oldLead.status) {
    addLog(
      'status_change',
      `Status leada ${updatedLead.name} zmieniony z '${oldLead.status}' na '${status}'`,
      id,
      updatedLead.service
    );
  } else {
    addLog(
      'note_add',
      `Zaktualizowano dane/notatki dla leada ${updatedLead.name}`,
      id,
      updatedLead.service
    );
  }

  res.json({ success: true, lead: updatedLead });
});

app.delete('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const leads = getLeads();
  const leadIndex = leads.findIndex(l => l.id === id);

  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Nie znaleziono leada.' });
  }

  const deletedLead = leads[leadIndex];
  leads.splice(leadIndex, 1);
  saveLeads(leads);

  addLog('status_change', `Usunięto leada z bazy danych: ${deletedLead.name} (${deletedLead.email})`, undefined, deletedLead.service);

  res.json({ success: true, message: 'Lead usunięty pomyślnie.' });
});

app.get('/api/logs', (req, res) => {
  const logs = getLogs();
  res.json(logs);
});

app.get('/api/stats', (req, res) => {
  const leads = getLeads();
  const { service } = req.query;

  let activeLeads = leads;
  if (service && service !== 'all') {
    if (service === 'money_check') {
      activeLeads = leads.filter(l => l.service === 'money_check' || l.isMoneyCheck);
    } else {
      activeLeads = leads.filter(l => l.service === service);
    }
  }

  const total = activeLeads.length;
  
  // Status counts (supporting both uppercase extended and lowercase legacy)
  const newCount = activeLeads.filter(l => l.status === 'NEW' || l.status === 'new').length;
  const contacted = activeLeads.filter(l => l.status === 'CONTACTED' || l.status === 'contacted').length;
  const qualified = activeLeads.filter(l => l.status === 'QUALIFIED').length;
  const quote = activeLeads.filter(l => l.status === 'QUOTE').length;
  const sold = activeLeads.filter(l => l.status === 'SOLD' || l.status === 'finalized').length;
  const crossSell = activeLeads.filter(l => l.status === 'CROSS-SELL').length;
  const renewal = activeLeads.filter(l => l.status === 'RENEWAL').length;
  const followUp = activeLeads.filter(l => l.status === 'FOLLOW-UP').length;
  const rejected = activeLeads.filter(l => l.status === 'LOST' || l.status === 'rejected').length;

  const conversion = total > 0 ? Math.round((sold / total) * 100) : 0;

  // Lead scoring breakdown
  const hotLeads = activeLeads.filter(l => l.leadScore === 'HOT').length;
  const warmLeads = activeLeads.filter(l => l.leadScore === 'WARM').length;
  const coldLeads = activeLeads.filter(l => l.leadScore === 'COLD').length;

  // Upcoming renewals count (within next 60 days)
  const now = Date.now();
  const in60Days = now + 60 * 24 * 60 * 60 * 1000;
  const renewalUpcoming = activeLeads.filter(lead => {
    if (!lead.contractEndDate) return false;
    const end = new Date(lead.contractEndDate).getTime();
    return !isNaN(end) && end >= now - 7 * 24 * 3600 * 1000 && end <= in60Days;
  }).length;

  const byService = {
    money_check: leads.filter(l => l.service === 'money_check' || l.isMoneyCheck).length,
    internet: leads.filter(l => l.service === 'internet').length,
    energia: leads.filter(l => l.service === 'energia').length,
    sim: leads.filter(l => l.service === 'sim').length,
    ubezpieczenia: leads.filter(l => l.service === 'ubezpieczenia').length,
    wakacje: leads.filter(l => l.service === 'wakacje').length,
    vpn: leads.filter(l => l.service === 'vpn').length,
    prawo: leads.filter(l => l.service === 'prawo').length,
  };

  const stats: CRMStats = {
    totalLeads: total,
    newLeads: newCount,
    contactedLeads: contacted,
    finalizedLeads: sold,
    rejectedLeads: rejected,
    conversionRate: conversion,
    byService,
    // Extended CRM stats
    statusBreakdown: {
      NEW: newCount,
      CONTACTED: contacted,
      QUALIFIED: qualified,
      QUOTE: quote,
      SOLD: sold,
      'CROSS-SELL': crossSell,
      RENEWAL: renewal,
      'FOLLOW-UP': followUp,
      LOST: rejected,
    },
    scoringBreakdown: {
      HOT: hotLeads,
      WARM: warmLeads,
      COLD: coldLeads,
    },
    renewalsUpcomingCount: renewalUpcoming,
    moneyCheckLeadsCount: byService.money_check
  };

  res.json(stats);
});

app.get('/api/webhook', (req, res) => {
  res.json(getWebhook());
});

app.post('/api/webhook', (req, res) => {
  const { url, enabled } = req.body;
  if (url === undefined || enabled === undefined) {
    return res.status(400).json({ error: 'Brakujące parametry webhooka.' });
  }

  const config: WebhookConfig = { url: String(url).trim(), enabled: !!enabled };
  saveWebhook(config);

  addLog(
    'webhook_trigger',
    `Zaktualizowano konfigurację webhooka. Status: ${config.enabled ? 'Włączony' : 'Wyłączony'}, URL: ${config.url || 'brak'}`
  );

  res.json({ success: true, config });
});

app.post('/api/webhook/test', async (req, res) => {
  const config = getWebhook();
  if (!config.url) {
    return res.status(400).json({ error: 'Brak skonfigurowanego adresu URL webhooka.' });
  }

  try {
    addLog('webhook_trigger', `Rozpoczęto wysyłanie webhooka testowego do: ${config.url}`);
    
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GregHelpline-Signature': 'greg_helpline_test_secret_2026'
      },
      body: JSON.stringify({
        event: 'test.connection',
        timestamp: new Date().toISOString(),
        message: 'To jest testowy pakiet wysłany z panelu administracyjnego Greg Helpline.',
        sampleLead: {
          service: 'internet',
          name: 'Jan Testowy',
          phone: '07491 978400',
          email: 'jan.testowy@greghelpline.pl',
          postcode: 'SW1A 1AA',
          houseNumber: '10 Downing St'
        }
      })
    });

    if (response.ok) {
      addLog('webhook_trigger', `Webhook testowy dostarczony pomyślnie. Status: ${response.status}`);
      return res.json({ success: true, status: response.status, message: 'Webhook testowy wysłany pomyślnie!' });
    } else {
      addLog('webhook_trigger', `Błąd webhooka testowego. Serwer docelowy zwrócił status: ${response.status}`);
      return res.status(400).json({ error: `Błąd serwera webhooka. Status: ${response.status}` });
    }
  } catch (err: any) {
    addLog('webhook_trigger', `Błąd sieci podczas wysyłania webhooka testowego: ${err.message}`);
    return res.status(500).json({ error: `Błąd sieci webhooka: ${err.message}` });
  }
});

// CSV Export route
app.get('/api/export', (req, res) => {
  const leads = getLeads();

  addLog('csv_export', 'Wyeksportowano listę wszystkich leadów do pliku CSV.');

  const headers = ['ID', 'Uslugi / Usloga', 'Imie i Nazwisko', 'Telefon', 'Email', 'Kod Pocztowy / Adres', 'Obecny Dostawca / Siec', 'Rachunek / Pakiet / Typ', 'Status', 'Data Utworzenia', 'Finalna Oferta / Dostawca', 'Plan / Taryfa', 'Cena / Oszczednosci', 'Notatki'];
  
  const escapeCsv = (str: string | undefined | null) => {
    if (!str) return '""';
    const escaped = str.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const serviceNames: Record<ServiceType, string> = {
    money_check: 'Money Check (Audyt UK)',
    internet: 'Internet',
    energia: 'Energia',
    sim: 'SIM i Telefony',
    ubezpieczenia: 'Ubezpieczenia',
    wakacje: 'Wakacje i Podróże',
    vpn: 'VPN i Bezpieczeństwo',
    prawo: 'Prawo i Wsparcie'
  };

  const rows = leads.map(lead => [
    lead.id,
    serviceNames[lead.service] || lead.service,
    lead.name,
    lead.phone,
    lead.email,
    [lead.postcode, lead.houseNumber].filter(Boolean).join(' '),
    lead.currentSupplier || lead.currentNetwork || '',
    lead.monthlyBill || lead.dataUsage || lead.insuranceType || lead.vacationType || '',
    lead.status,
    lead.createdAt,
    lead.finalizedOffer?.operatorOrSupplier || lead.newSupplier || lead.operator || '',
    lead.finalizedOffer?.planOrTariff || lead.tariff || lead.speed || '',
    lead.finalizedOffer?.priceOrSavings || lead.savings || lead.price || '',
    lead.notes || ''
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(escapeCsv).join(','))
  ].join('\r\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename=greg_helpline_all_leads_' + new Date().toISOString().split('T')[0] + '.csv');
  res.status(200).send(Buffer.from('\uFEFF' + csvContent, 'utf-8'));
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
