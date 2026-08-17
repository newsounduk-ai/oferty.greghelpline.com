/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ServiceType = 'internet' | 'energia' | 'sim' | 'ubezpieczenia' | 'wakacje' | 'vpn' | 'prawo' | 'money_check';

export type LeadScore = 'HOT' | 'WARM' | 'COLD';
export type CustomerValueScore = 'BASIC' | 'MULTI' | 'FAMILY' | 'BUSINESS' | 'VIP' | 'HIGH' | 'MEDIUM';

export type LeadStatus = 
  | 'new' 
  | 'contacted' 
  | 'finalized' 
  | 'rejected'
  | 'NEW' 
  | 'CONTACTED' 
  | 'QUALIFIED' 
  | 'QUOTE' 
  | 'SOLD' 
  | 'CROSS-SELL' 
  | 'RENEWAL' 
  | 'FOLLOW-UP' 
  | 'LOST';

export type MoneyCheckServiceKey =
  | 'internet'
  | 'energy_electricity'
  | 'energy_gas'
  | 'energy_dual'
  | 'sim'
  | 'phone'
  | 'insurance_car'
  | 'insurance_van'
  | 'insurance_motorcycle'
  | 'insurance_courier'
  | 'insurance_life';

export interface MoneyCheckInternetAnswers {
  currentSupplier?: string;
  monthlyCost?: string;
  currentSpeed?: string;
  isInContract?: 'yes' | 'no' | 'dont_know' | string;
  contractEndDate?: string;
  postcode?: string;
  houseNumber?: string;
  interestedInTv?: 'yes' | 'no' | 'maybe' | string;
}

export interface MoneyCheckEnergyAnswers {
  energyType?: 'electricity' | 'gas' | 'dual_fuel' | string;
  currentSupplier?: string;
  monthlyCost?: string;
  tariffType?: 'fixed' | 'variable' | 'dont_know' | string;
  hasSmartMeter?: 'yes' | 'no' | 'dont_know' | string;
  billAttachment?: {
    fileName: string;
    fileData?: string; // base64 / dataUrl
    fileType?: string;
  };
}

export interface MoneyCheckSimAnswers {
  simCount?: string;
  currentNetwork?: string;
  monthlyCost?: string;
  dataAllowance?: string;
  needsRoaming?: 'yes' | 'no' | 'dont_know' | string;
  needsPolandCalling?: 'yes' | 'no' | 'dont_know' | string;
  otherCountries?: string;
}

export interface MoneyCheckPhoneAnswers {
  preferredBrand?: string;
  preferredModel?: string;
  contractType?: 'new' | 'upgrade' | 'handset_only' | string;
  monthlyBudget?: string;
  needsSimPlan?: 'yes' | 'no' | 'dont_know' | string;
  tradeInInterest?: 'yes' | 'no' | 'dont_know' | string;
}

export interface MoneyCheckInsuranceAnswers {
  insuranceTypes?: Array<'car' | 'van' | 'motorcycle' | 'courier' | 'life'>;
  currentSupplier?: string;
  renewalDate?: string;
  vehicleRegistration?: string;
  noClaimsYears?: string;
  vehicleUsage?: 'social' | 'commuting' | 'business' | 'hire_and_reward' | string;
  lifeCoverageType?: 'mortgage' | 'family_protection' | 'critical_illness' | 'income_protection' | string;
  monthlyBudget?: string;
  additionalDetails?: string;
}

export interface MoneyCheckAnswers {
  selectedServices: MoneyCheckServiceKey[];
  internet?: MoneyCheckInternetAnswers;
  energy?: MoneyCheckEnergyAnswers;
  sim?: MoneyCheckSimAnswers;
  phone?: MoneyCheckPhoneAnswers;
  insurance?: MoneyCheckInsuranceAnswers;
  crossSellOptIn?: MoneyCheckServiceKey[];
}

export interface Lead {
  id: string;
  service: ServiceType;
  name: string;
  lastName?: string;
  phone: string;
  email: string;
  consent: boolean;
  marketingConsent?: boolean;
  status: LeadStatus;
  createdAt: string;
  notes?: string;
  preferredContact?: 'phone' | 'whatsapp' | 'email';
  source?: string;

  // Money Check Intelligence
  isMoneyCheck?: boolean;
  leadScore?: LeadScore;
  leadScoreReason?: string;
  customerValueScore?: CustomerValueScore;
  customerValueReason?: string;
  crossSellOpportunities?: string[];
  contractEndDate?: string;
  renewalReminderDate?: string;
  moneyCheckAnswers?: MoneyCheckAnswers;
  aiSummary?: string;
  
  // Internet specific
  postcode?: string;
  houseNumber?: string;
  
  // Energy specific
  currentSupplier?: string;
  monthlyBill?: string;
  
  // SIM & Mobile specific
  simNeed?: 'sim_only' | 'phone_plan' | 'mobile_broadband';
  currentNetwork?: string;
  dataUsage?: string;
  
  // Insurance specific
  insuranceType?: 'health' | 'car' | 'life' | 'travel';
  insuranceDetails?: Record<string, any> | string;

  // Vacation / Travel specific
  vacationType?: 'all_inclusive' | 'city_break' | 'tour' | 'need_advice' | string;
  vacationTerm?: string;
  travelersCount?: string;
  budgetPerPerson?: string;
  
  // Finalized offer details
  finalizedOffer?: {
    operatorOrSupplier?: string;
    planOrTariff?: string;
    priceOrSavings?: string;
    additionalNotes?: string;
  };
  
  // Backward compatibility fields
  newSupplier?: string;
  tariff?: string;
  savings?: string;
  operator?: string;
  speed?: string;
  price?: string;
}

export type LogType = 
  | 'lead_create' 
  | 'status_change' 
  | 'note_add' 
  | 'webhook_trigger' 
  | 'csv_export' 
  | 'email_sim';

export interface ActivityLog {
  id: string;
  type: LogType;
  message: string;
  timestamp: string;
  leadId?: string;
  service?: ServiceType;
}

export interface WebhookConfig {
  url: string;
  enabled: boolean;
}

export interface CRMStats {
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  finalizedLeads: number;
  rejectedLeads: number;
  conversionRate: number; // percentage
  byService?: Record<ServiceType, number>;
  statusBreakdown?: Record<string, number>;
  scoringBreakdown?: {
    HOT: number;
    WARM: number;
    COLD: number;
  };
  renewalsUpcomingCount?: number;
  moneyCheckLeadsCount?: number;
}

export interface ReferralLink {
  id: string;
  name: string;
  url: string;
  service: 'internet' | 'energia' | 'sim' | 'wakacje';
  badge?: string;
  description: string;
  logoText?: string;
  color?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: ServiceType | 'porady';
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  content: string;
  ctaUrl: string;
  ctaText: string;
  ctaButtonText: string;
  externalLink?: string;
}

