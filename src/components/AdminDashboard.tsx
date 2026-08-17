import React, { useState, useEffect } from 'react';
import { 
  Users, UserCheck, Inbox, CheckCircle, XCircle, Search, 
  Download, RefreshCw, Trash2, Lock, Key,
  Activity, ArrowRightLeft, Radio, BellRing, ChevronRight, Save, Play,
  Wifi, Zap, Smartphone, ShieldCheck, Palmtree, Edit2, X, Sparkles, Flame,
  Clock, Calendar, AlertCircle, PhoneCall, Mail, MessageSquare, Star, CheckSquare
} from 'lucide-react';
import { Lead, LeadStatus, ActivityLog, WebhookConfig, CRMStats, ServiceType, LeadScore, CustomerValueScore } from '../types';

interface AdminDashboardProps {
  onClose?: () => void;
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [stats, setStats] = useState<CRMStats | null>(null);
  const [webhook, setWebhook] = useState<WebhookConfig>({ url: '', enabled: false });
  const [loading, setLoading] = useState(true);
  
  // Filtering and Searching State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [scoreFilter, setScoreFilter] = useState<string>('all');
  const [valueFilter, setValueFilter] = useState<string>('all');
  const [renewalFilter, setRenewalFilter] = useState<string>('all');
  
  // Selected Lead for Editing
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editForm, setEditForm] = useState({
    status: 'NEW' as LeadStatus,
    notes: '',
    newSupplier: '',
    tariff: '',
    savings: '',
    currentSupplier: '',
    monthlyBill: '',
    contractEndDate: '',
    renewalReminderDate: ''
  });

  // Webhook form states
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookEnabled, setWebhookEnabled] = useState(false);
  const [webhookTesting, setWebhookTesting] = useState(false);
  const [webhookTestResult, setWebhookTestResult] = useState<{ success?: boolean; error?: string; message?: string } | null>(null);

  const [savingLeadId, setSavingLeadId] = useState<string | null>(null);
  const [savingWebhook, setSavingWebhook] = useState(false);

  // Authenticate user
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'greg2026') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Nieprawidłowe hasło. Wprowadź: greg2026');
    }
  };

  // Fetch all administrative data
  const fetchData = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({
        status: statusFilter,
        service: serviceFilter,
        search: searchTerm,
        leadScore: scoreFilter,
        customerValueScore: valueFilter,
        renewalFilter: renewalFilter
      });

      const leadsRes = await fetch(`/api/leads?${params.toString()}`);
      const leadsData = await leadsRes.json();
      setLeads(leadsData);

      const logsRes = await fetch('/api/logs');
      const logsData = await logsRes.json();
      setLogs(logsData);

      const statsRes = await fetch('/api/stats');
      const statsData = await statsRes.json();
      setStats(statsData);

      const webhookRes = await fetch('/api/webhook');
      const webhookData = await webhookRes.json();
      setWebhook(webhookData);
      setWebhookUrl(webhookData.url);
      setWebhookEnabled(webhookData.enabled);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, statusFilter, serviceFilter, scoreFilter, valueFilter, renewalFilter, searchTerm]);

  // Handle lead select for editing
  const selectLeadForEdit = (lead: Lead) => {
    setEditingLead(lead);
    setEditForm({
      status: lead.status,
      notes: lead.notes || '',
      newSupplier: lead.newSupplier || '',
      tariff: lead.tariff || '',
      savings: lead.savings || '',
      currentSupplier: lead.currentSupplier || '',
      monthlyBill: lead.monthlyBill || '',
      contractEndDate: lead.contractEndDate || '',
      renewalReminderDate: lead.renewalReminderDate || ''
    });
  };

  // Save edited lead details
  const saveLeadDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLead) return;

    setSavingLeadId(editingLead.id);
    try {
      const response = await fetch(`/api/leads/${editingLead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });

      if (response.ok) {
        const resData = await response.json();
        setEditingLead(resData.lead || null);
        await fetchData();
      }
    } catch (error) {
      console.error('Error saving lead details:', error);
    } finally {
      setSavingLeadId(null);
    }
  };

  // Delete lead
  const deleteLead = async (id: string) => {
    if (!window.confirm('Czy na pewno chcesz usunąć tego leada?')) return;

    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        if (editingLead?.id === id) setEditingLead(null);
        await fetchData();
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  // Save webhook config
  const handleSaveWebhook = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingWebhook(true);
    setWebhookTestResult(null);

    try {
      const response = await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: webhookUrl, enabled: webhookEnabled })
      });

      if (response.ok) {
        const data = await response.json();
        setWebhook(data.config);
        await fetchData();
      }
    } catch (error) {
      console.error('Error saving webhook:', error);
    } finally {
      setSavingWebhook(false);
    }
  };

  // Test webhook endpoint in real time
  const testWebhook = async () => {
    setWebhookTesting(true);
    setWebhookTestResult(null);

    try {
      const response = await fetch('/api/webhook/test', {
        method: 'POST'
      });
      const data = await response.json();

      if (response.ok) {
        setWebhookTestResult({ success: true, message: data.message });
      } else {
        setWebhookTestResult({ success: false, error: data.error });
      }
    } catch (error: any) {
      setWebhookTestResult({ success: false, error: error.message || 'Błąd połączenia z serwerem.' });
    } finally {
      setWebhookTesting(false);
      fetchData();
    }
  };

  const allStatuses: { key: LeadStatus; label: string; color: string }[] = [
    { key: 'NEW', label: 'Nowy (NEW)', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { key: 'CONTACTED', label: 'Skontaktowano', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { key: 'QUALIFIED', label: 'Zakwalifikowany', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { key: 'QUOTE', label: 'Oferta wysłana', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { key: 'SOLD', label: 'Sfinalizowano (SOLD)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
    { key: 'CROSS-SELL', label: 'Cross-Sell w toku', color: 'bg-teal-100 text-teal-800 border-teal-200' },
    { key: 'RENEWAL', label: 'Odnowienie umowy', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
    { key: 'FOLLOW-UP', label: 'Wymaga kontaktu', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { key: 'LOST', label: 'Odrzucony (LOST)', color: 'bg-rose-100 text-rose-800 border-rose-200' },
  ];

  const getStatusBadgeClass = (status: LeadStatus) => {
    const s = String(status).toUpperCase();
    if (s === 'NEW') return 'bg-blue-50 text-blue-700 border-blue-200';
    if (s === 'CONTACTED') return 'bg-amber-50 text-amber-700 border-amber-200';
    if (s === 'QUALIFIED') return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    if (s === 'QUOTE') return 'bg-purple-50 text-purple-700 border-purple-200';
    if (s === 'SOLD' || s === 'FINALIZED') return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (s === 'CROSS-SELL') return 'bg-teal-50 text-teal-700 border-teal-200';
    if (s === 'RENEWAL') return 'bg-cyan-50 text-cyan-700 border-cyan-200';
    if (s === 'FOLLOW-UP') return 'bg-orange-50 text-orange-700 border-orange-200';
    if (s === 'LOST' || s === 'REJECTED') return 'bg-rose-50 text-rose-700 border-rose-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getStatusLabel = (status: LeadStatus) => {
    const found = allStatuses.find(st => st.key === status);
    if (found) return found.label;
    if (status === 'new') return 'Nowy';
    if (status === 'contacted') return 'W kontakcie';
    if (status === 'finalized') return 'Sfinalizowany';
    if (status === 'rejected') return 'Odrzucony';
    return status;
  };

  const getLeadScoreBadge = (score?: LeadScore, reason?: string) => {
    if (score === 'HOT') {
      return (
        <span 
          title={reason || 'Wysoki priorytet kontaktu'}
          className="inline-flex items-center gap-1 bg-red-100 text-red-800 border border-red-300 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs"
        >
          <Flame className="w-3 h-3 text-red-600 fill-red-500 animate-pulse" />
          HOT LEAD
        </span>
      );
    }
    if (score === 'WARM') {
      return (
        <span 
          title={reason || 'Średni priorytet kontaktu'}
          className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full"
        >
          <Zap className="w-3 h-3 text-amber-600" />
          WARM
        </span>
      );
    }
    if (score === 'COLD') {
      return (
        <span 
          title={reason || 'Dalszy termin lub brak pilnej potrzeby'}
          className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 border border-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-full"
        >
          ❄️ COLD
        </span>
      );
    }
    return null;
  };

  const getCustomerValueBadge = (val?: CustomerValueScore) => {
    if (val === 'VIP') {
      return <span className="bg-purple-100 text-purple-900 border border-purple-300 text-[9px] font-black px-1.5 py-0.5 rounded-md">💎 VIP</span>;
    }
    if (val === 'HIGH') {
      return <span className="bg-blue-100 text-blue-900 border border-blue-300 text-[9px] font-bold px-1.5 py-0.5 rounded-md">⭐ HIGH</span>;
    }
    if (val === 'MEDIUM') {
      return <span className="bg-gray-100 text-gray-800 text-[9px] font-semibold px-1.5 py-0.5 rounded-md">MEDIUM</span>;
    }
    return null;
  };

  const getServiceBadge = (service?: ServiceType, isMoneyCheck?: boolean) => {
    if (service === 'money_check' || isMoneyCheck) {
      return (
        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B1F3A] text-[10px] font-black px-2.5 py-0.5 rounded-md shadow-xs">
          <Sparkles className="w-3 h-3 text-[#0B1F3A]" /> Money Check
        </span>
      );
    }
    switch (service) {
      case 'internet':
        return <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-md"><Wifi className="w-3 h-3" /> Internet</span>;
      case 'energia':
        return <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md"><Zap className="w-3 h-3" /> Energia</span>;
      case 'sim':
        return <span className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-md"><Smartphone className="w-3 h-3" /> SIM</span>;
      case 'ubezpieczenia':
        return <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md"><ShieldCheck className="w-3 h-3" /> Ubezpieczenia</span>;
      case 'wakacje':
        return <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-md"><Palmtree className="w-3 h-3" /> Wakacje</span>;
      default:
        return <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-md">Ogólne</span>;
    }
  };

  const formatUKDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLogIcon = (type: ActivityLog['type']) => {
    switch (type) {
      case 'lead_create': return <Inbox className="w-3.5 h-3.5 text-blue-500" />;
      case 'status_change': return <ArrowRightLeft className="w-3.5 h-3.5 text-amber-500" />;
      case 'note_add': return <Edit2 className="w-3.5 h-3.5 text-indigo-500" />;
      case 'webhook_trigger': return <Radio className="w-3.5 h-3.5 text-purple-500 animate-pulse" />;
      case 'email_sim': return <BellRing className="w-3.5 h-3.5 text-emerald-500" />;
      case 'csv_export': return <Download className="w-3.5 h-3.5 text-gray-500" />;
    }
  };

  // PASSCODE AUTH SCREEN
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-[#0B1F3A]/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 font-sans text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-900 border border-blue-100">
            <Lock className="w-8 h-8 text-blue-900" />
          </div>

          <h2 className="font-display font-black text-2xl text-[#0B1F3A] mb-1">
            Greg Helpline CRM
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            Dostęp tylko dla upoważnionych pracowników i doradców.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <Key className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  placeholder="Hasło dostępowe..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-mono font-bold text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
              {authError && (
                <p className="text-xs text-rose-500 mt-2 font-medium">{authError}</p>
              )}
            </div>

            <div className="flex gap-2">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl text-xs cursor-pointer"
                >
                  Zamknij
                </button>
              )}
              <button
                type="submit"
                className="flex-1 py-3 bg-[#0B1F3A] hover:bg-black text-white font-bold rounded-2xl text-xs shadow-md cursor-pointer"
              >
                Zaloguj do Panelu
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen py-6 px-4 md:px-8 border-t border-gray-100 font-sans" id="crm-panel-nadrzedny">
      
      {/* Header Panelu */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider text-gray-500 uppercase">
              Greg Helpline Centrala CRM • Money Check Hub
            </span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            System Zarządzania Leadami & Money Check
          </h1>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
              setServiceFilter('all');
              setScoreFilter('all');
              setValueFilter('all');
              setRenewalFilter('all');
              fetchData();
            }}
            className="p-3 bg-white hover:bg-gray-50 text-gray-600 rounded-xl border border-gray-200 transition-all cursor-pointer active:scale-95 shadow-xs"
            title="Odśwież dane"
          >
            <RefreshCw className="w-4.5 h-4.5" />
          </button>
          
          <a
            href="/api/export"
            className="p-3 bg-white hover:bg-gray-50 text-gray-700 font-sans font-semibold text-xs border border-gray-200 rounded-xl flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-xs"
            title="Eksportuj wszystkich leadów do Excel/CSV"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>Eksport CSV</span>
          </a>

          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-[#0B1F3A] hover:bg-black text-white font-sans font-semibold text-xs rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
            >
              Zamknij Panel
            </button>
          )}
        </div>
      </div>

      {/* Service Tabs */}
      <div className="max-w-7xl mx-auto mb-6 flex gap-2 overflow-x-auto pb-2">
        {[
          { key: 'all', label: 'Wszystkie Zgłoszenia', icon: Users, count: stats?.totalLeads },
          { key: 'money_check', label: '🔥 Money Check', icon: Sparkles, count: stats?.moneyCheckLeadsCount, isHot: true },
          { key: 'energia', label: 'Energia', icon: Zap, count: stats?.byService?.energia },
          { key: 'internet', label: 'Internet', icon: Wifi, count: stats?.byService?.internet },
          { key: 'sim', label: 'SIM & Telefony', icon: Smartphone, count: stats?.byService?.sim },
          { key: 'ubezpieczenia', label: 'Ubezpieczenia', icon: ShieldCheck, count: stats?.byService?.ubezpieczenia },
          { key: 'wakacje', label: 'Wakacje', icon: Palmtree, count: stats?.byService?.wakacje },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = serviceFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setServiceFilter(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                isActive
                  ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                  : tab.isHot
                  ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 font-extrabold'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-4 h-4 ${tab.isHot && !isActive ? 'text-amber-600' : ''}`} />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Analytics Statistics Block */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-6">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Baza leadów</span>
            <Users className="w-4.5 h-4.5 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              {stats?.totalLeads ?? 0}
            </div>
            <span className="text-[10px] text-gray-400 font-medium">Wszystkie usługi</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-red-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-red-400 mb-2">
            <span className="text-xs font-bold text-red-700">🔥 HOT LEADS</span>
            <Flame className="w-4.5 h-4.5 text-red-500 fill-red-500 animate-pulse" />
          </div>
          <div>
            <div className="text-2xl font-black text-red-600 tracking-tight">
              {stats?.scoringBreakdown?.HOT ?? 0}
            </div>
            <span className="text-[10px] text-red-600 font-bold bg-red-50 px-1.5 py-0.5 rounded-sm">Priorytet 24h</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Nowe zgłoszenia</span>
            <Inbox className="w-4.5 h-4.5 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 tracking-tight">
              {stats?.newLeads ?? 0}
            </div>
            <span className="text-[10px] text-blue-500 font-semibold bg-blue-50 px-1.5 py-0.5 rounded-sm">Oczekujące</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Odnowienia umów</span>
            <Calendar className="w-4.5 h-4.5 text-cyan-600" />
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-700 tracking-tight">
              {stats?.renewalsUpcomingCount ?? 0}
            </div>
            <span className="text-[10px] text-cyan-700 font-semibold bg-cyan-50 px-1.5 py-0.5 rounded-sm">Najbliższe 60 dni</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Sfinalizowane</span>
            <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600 tracking-tight">
              {stats?.finalizedLeads ?? 0}
            </div>
            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-sm">Zamówione</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0B1F3A] to-blue-900 text-white p-4 rounded-2xl shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-blue-200 mb-2">
            <span className="text-xs font-medium">Skuteczność</span>
            <Activity className="w-4.5 h-4.5 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-400 tracking-tight">
              {stats?.conversionRate ?? 0}%
            </div>
            <span className="text-[10px] text-blue-200 font-medium">Wskaźnik sukcesu</span>
          </div>
        </div>
      </div>

      {/* Main CRM Workspace Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Leads Search, Filters, and List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            
            {/* Filtering toolbar */}
            <div className="space-y-3 mb-5">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Szukaj po nazwisku, telefonie, kodzie, mailu lub notatkach..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              {/* Status pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap border ${
                    statusFilter === 'all'
                      ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Wszystkie statusy ({leads.length})
                </button>
                {allStatuses.map((st) => (
                  <button
                    key={st.key}
                    onClick={() => setStatusFilter(st.key)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap border ${
                      statusFilter === st.key
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Priority & Renewal quick toggles */}
              <div className="flex gap-2 flex-wrap text-xs pt-1">
                <span className="text-[11px] font-bold text-gray-400 self-center uppercase">Priorytet:</span>
                {['all', 'HOT', 'WARM', 'COLD'].map((sc) => (
                  <button
                    key={sc}
                    onClick={() => setScoreFilter(sc)}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold cursor-pointer transition-all ${
                      scoreFilter === sc
                        ? sc === 'HOT' ? 'bg-red-500 text-white border-red-600' : 'bg-gray-800 text-white border-gray-800'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {sc === 'all' ? 'Wszystkie' : sc === 'HOT' ? '🔥 HOT' : sc === 'WARM' ? '⚡ WARM' : '❄️ COLD'}
                  </button>
                ))}

                <button
                  onClick={() => setRenewalFilter(renewalFilter === 'upcoming' ? 'all' : 'upcoming')}
                  className={`ml-auto px-3 py-1 rounded-lg border text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1 ${
                    renewalFilter === 'upcoming'
                      ? 'bg-cyan-600 text-white border-cyan-700 shadow-xs'
                      : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>Odnowienia &lt; 60 dni</span>
                </button>
              </div>
            </div>

            {/* Leads Table / List */}
            <div className="overflow-x-auto -mx-5 px-5">
              {loading ? (
                <div className="py-20 text-center text-gray-400 flex flex-col items-center justify-center gap-2">
                  <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
                  <span className="text-xs font-medium font-sans">Wczytywanie bazy leadów...</span>
                </div>
              ) : leads.length === 0 ? (
                <div className="py-16 text-center text-gray-400 font-sans">
                  <Inbox className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                  <p className="text-sm font-bold text-gray-600 mb-1">Brak pasujących leadów</p>
                  <p className="text-xs">Zmień filtry lub wyszukaj inne hasło.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {leads.map((lead) => {
                    const isSelected = editingLead?.id === lead.id;
                    const isHot = lead.leadScore === 'HOT';
                    return (
                      <div
                        key={lead.id}
                        onClick={() => selectLeadForEdit(lead)}
                        className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ${
                          isSelected
                            ? 'bg-blue-50/60 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                            : isHot
                            ? 'bg-red-50/30 border-red-200 hover:border-red-400 hover:shadow-sm'
                            : 'bg-white border-gray-200/80 hover:border-gray-300 hover:shadow-xs'
                        }`}
                      >
                        <div className="space-y-1.5 flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            {getServiceBadge(lead.service, lead.isMoneyCheck)}
                            {getLeadScoreBadge(lead.leadScore, lead.leadScoreReason)}
                            {getCustomerValueBadge(lead.customerValueScore)}

                            <h4 className="font-display font-extrabold text-sm text-gray-900">
                              {lead.name} {lead.lastName || ''}
                            </h4>

                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${getStatusBadgeClass(lead.status)}`}>
                              {getStatusLabel(lead.status)}
                            </span>
                          </div>

                          <div className="flex items-center gap-x-4 gap-y-1 text-[11px] text-gray-600 flex-wrap font-sans">
                            {lead.postcode && <span className="font-semibold text-gray-800">📍 {lead.postcode}</span>}
                            {lead.phone && <span className="font-mono">📞 {lead.phone}</span>}
                            {lead.email && <span>✉️ {lead.email}</span>}
                            {lead.monthlyBill && <span>💰 {lead.monthlyBill}</span>}
                            {lead.contractEndDate && (
                              <span className="font-semibold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-sm">
                                📅 Koniec umowy: {lead.contractEndDate}
                              </span>
                            )}
                          </div>

                          {lead.isMoneyCheck && lead.moneyCheckAnswers?.selectedServices && (
                            <div className="text-[10px] text-slate-500 font-medium">
                              Usługi do audytu: <span className="text-slate-800 font-bold">{lead.moneyCheckAnswers.selectedServices.join(', ')}</span>
                            </div>
                          )}

                          {lead.notes && (
                            <p className="text-[11px] text-gray-500 italic line-clamp-1">
                              💬 {lead.notes}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 shrink-0 pt-2 md:pt-0 border-t border-gray-100 md:border-0">
                          <span className="text-[10px] font-mono text-gray-400">
                            {formatUKDate(lead.createdAt)}
                          </span>
                          
                          <div className="flex gap-1 items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteLead(lead.id);
                              }}
                              className="p-1.5 hover:bg-rose-50 text-gray-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                              title="Usuń leada"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                            <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-gray-300'}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Lead Detail & Edit Form, Webhook & Activity Log */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Edit / Detail Card */}
          {editingLead ? (
            <div className="bg-white rounded-3xl p-5 border border-blue-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0B1F3A]" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase">
                      Szczegóły & Edycja Zgłoszenia
                    </span>
                    {getLeadScoreBadge(editingLead.leadScore, editingLead.leadScoreReason)}
                    {getCustomerValueBadge(editingLead.customerValueScore)}
                  </div>
                  <h3 className="font-display font-black text-lg text-gray-900 mt-0.5">
                    {editingLead.name} {editingLead.lastName || ''}
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center gap-3 mt-1">
                    <a href={`tel:${editingLead.phone}`} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                      <PhoneCall className="w-3 h-3" /> {editingLead.phone}
                    </a>
                    <a href={`mailto:${editingLead.email}`} className="text-blue-600 hover:underline flex items-center gap-1">
                      <Mail className="w-3 h-3" /> {editingLead.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setEditingLead(null)}
                  className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* AI Lead Summary / Analysis if available */}
              {editingLead.aiSummary && (
                <div className="p-3.5 mb-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 font-sans space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 text-[11px] uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Gemini AI Podsumowanie dla Grega:</span>
                  </div>
                  <p className="leading-relaxed">{editingLead.aiSummary}</p>
                </div>
              )}

              {/* Detailed Money Check Answers */}
              {editingLead.moneyCheckAnswers && (
                <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>Odpowiedzi z audytu Money Check:</span>
                  </div>
                  
                  <div className="space-y-1.5 text-[11px] text-slate-700">
                    {editingLead.moneyCheckAnswers.internet && (
                      <div className="bg-white p-2 rounded-lg border border-slate-100">
                        <span className="font-bold text-blue-700">Internet:</span> Dostawca: {editingLead.moneyCheckAnswers.internet.currentSupplier || 'Brak'} • Rachunek: {editingLead.moneyCheckAnswers.internet.monthlyCost || 'Brak'} • Koniec umowy: {editingLead.moneyCheckAnswers.internet.contractEndDate || 'Brak'}
                      </div>
                    )}
                    {editingLead.moneyCheckAnswers.energy && (
                      <div className="bg-white p-2 rounded-lg border border-slate-100">
                        <span className="font-bold text-amber-700">Energia:</span> Dostawca: {editingLead.moneyCheckAnswers.energy.currentSupplier || 'Brak'} • Typ: {editingLead.moneyCheckAnswers.energy.energyType || 'Brak'} • Rachunek: {editingLead.moneyCheckAnswers.energy.monthlyCost || 'Brak'}
                      </div>
                    )}
                    {editingLead.moneyCheckAnswers.sim && (
                      <div className="bg-white p-2 rounded-lg border border-slate-100">
                        <span className="font-bold text-indigo-700">SIM:</span> Sieć: {editingLead.moneyCheckAnswers.sim.currentNetwork || 'Brak'} • Karty: {editingLead.moneyCheckAnswers.sim.simCount || '1'} • Koszt: {editingLead.moneyCheckAnswers.sim.monthlyCost || 'Brak'}
                      </div>
                    )}
                    {editingLead.moneyCheckAnswers.phone && (
                      <div className="bg-white p-2 rounded-lg border border-slate-100">
                        <span className="font-bold text-purple-700">Telefony:</span> Preferencja: {editingLead.moneyCheckAnswers.phone.preferredBrand || ''} {editingLead.moneyCheckAnswers.phone.preferredModel || ''} • Budżet: {editingLead.moneyCheckAnswers.phone.monthlyBudget || 'Brak'}
                      </div>
                    )}
                    {editingLead.moneyCheckAnswers.insurance && (
                      <div className="bg-white p-2 rounded-lg border border-slate-100">
                        <span className="font-bold text-emerald-700">Ubezpieczenia:</span> Polisy: {editingLead.moneyCheckAnswers.insurance.insuranceTypes?.join(', ') || 'Brak'} • Odnowienie: {editingLead.moneyCheckAnswers.insurance.renewalDate || 'Brak'}
                      </div>
                    )}
                  </div>

                  {editingLead.crossSellOpportunities && editingLead.crossSellOpportunities.length > 0 && (
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-teal-900">
                      <span className="font-bold">Potencjał Cross-Sell:</span> {editingLead.crossSellOpportunities.join(' • ')}
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={saveLeadDetails} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                    Etap / Status w procesie CRM
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {allStatuses.map((st) => {
                      const isCurr = editForm.status === st.key;
                      return (
                        <button
                          type="button"
                          key={st.key}
                          onClick={() => setEditForm({ ...editForm, status: st.key })}
                          className={`py-1.5 px-2 text-left rounded-lg text-[10px] font-bold border transition-all cursor-pointer truncate ${
                            isCurr
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {st.label.split(' ')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                      Data końca obecnej umowy
                    </label>
                    <input
                      type="date"
                      value={editForm.contractEndDate}
                      onChange={(e) => setEditForm({ ...editForm, contractEndDate: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                      Przypomnienie (Renewal Date)
                    </label>
                    <input
                      type="date"
                      value={editForm.renewalReminderDate}
                      onChange={(e) => setEditForm({ ...editForm, renewalReminderDate: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                    Notatki doradcy (ustalenia, zaproponowane taryfy, termin kontaktu)
                  </label>
                  <textarea
                    rows={3}
                    value={editForm.notes}
                    onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                    placeholder="Wpisz np. klient zainteresowany Octopus Fixed 12M, kontakt w czwartek po 17:00..."
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingLeadId !== null}
                  className="w-full py-3 bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4 text-amber-400" />
                  {savingLeadId ? 'Zapisywanie...' : 'Zapisz zmiany w CRM'}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center py-10 font-sans">
              <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-gray-700 mb-1">Wybierz leada z listy po lewej</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Kliknij dowolne zgłoszenie, aby przejrzeć szczegóły Money Check, zmienić status, zapisać notatki lub ustawić odnowienie.
              </p>
            </div>
          )}

          {/* Webhook Integrator Setup */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
            <div>
              <span className="text-[10px] font-mono font-medium tracking-wider text-purple-600 uppercase">
                Zewnętrzne Integracje CRM & Webhook
              </span>
              <h3 className="font-display font-extrabold text-sm text-gray-900 mt-0.5 flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-purple-600 animate-pulse" />
                Automatyczny Webhook Zdarzeń
              </h3>
            </div>

            <form onSubmit={handleSaveWebhook} className="space-y-3 font-sans text-xs">
              <div>
                <input
                  type="url"
                  placeholder="https://twoj-crm.pl/webhook-endpoint"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={webhookEnabled}
                    onChange={(e) => setWebhookEnabled(e.target.checked)}
                    className="rounded-sm border-gray-300 text-purple-600"
                  />
                  <span className="text-xs font-medium text-gray-700">Włącz powiadomienia</span>
                </label>

                <button
                  type="submit"
                  disabled={savingWebhook}
                  className="px-3.5 py-1.5 bg-gray-900 hover:bg-black text-white font-semibold text-xs rounded-xl cursor-pointer"
                >
                  {savingWebhook ? 'Zapis...' : 'Zapisz'}
                </button>
              </div>
            </form>

            {webhook.url && (
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray-400">Diagnostyka połączenia</span>
                <button
                  onClick={testWebhook}
                  disabled={webhookTesting}
                  className="py-1 px-3 bg-purple-50 text-purple-700 font-bold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  {webhookTesting ? 'Testowanie...' : 'Wyślij testowy pakiet'}
                </button>
              </div>
            )}
            
            {webhookTestResult && (
              <p className={`text-xs ${webhookTestResult.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                {webhookTestResult.message || webhookTestResult.error}
              </p>
            )}
          </div>

          {/* Dynamic Live Activity Log */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3">
            <h3 className="font-display font-extrabold text-sm text-gray-900 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
              Dziennik Aktywności CRM
            </h3>
            
            <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
              {logs.length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-6 font-sans">Brak zdarzeń.</p>
              ) : (
                logs.map((log) => (
                  <div key={log.id} className="text-[11px] leading-relaxed font-sans border-b border-gray-50 pb-2 flex gap-2">
                    <span className="shrink-0 mt-0.5">{getLogIcon(log.type)}</span>
                    <div className="space-y-0.5">
                      <p className="text-gray-700">{log.message}</p>
                      <span className="text-[9px] font-mono text-gray-400">
                        {formatUKDate(log.timestamp)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
