/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ServiceType = 'internet' | 'energia' | 'sim' | 'ubezpieczenia';

export type LeadStatus = 'new' | 'contacted' | 'finalized' | 'rejected';

export interface Lead {
  id: string;
  service: ServiceType;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
  status: LeadStatus;
  createdAt: string;
  notes?: string;
  
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
}

export interface ReferralLink {
  id: string;
  name: string;
  url: string;
  service: 'internet' | 'energia' | 'sim';
  badge?: string;
  description: string;
  logoText?: string;
  color?: string;
}
