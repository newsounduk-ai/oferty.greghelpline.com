import React, { useState, useEffect } from 'react';
import { 
  Users, UserCheck, Inbox, CheckCircle, XCircle, Search, 
  Download, RefreshCw, Trash2, Lock, Key,
  Activity, ArrowRightLeft, Radio, BellRing, ChevronRight, Save, Play,
  Wifi, Zap, Smartphone, ShieldCheck, Palmtree, Edit2, X
} from 'lucide-react';
import { Lead, LeadStatus, ActivityLog, WebhookConfig, CRMStats, ServiceType } from '../types';

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
  
  // Selected Lead for Editing
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editForm, setEditForm] = useState({
    status: 'new' as LeadStatus,
    notes: '',
    newSupplier: '',
    tariff: '',
    savings: '',
    currentSupplier: '',
    monthlyBill: ''
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
      // Fetch leads with status and service params
      const url = `/api/leads?status=${statusFilter}&service=${serviceFilter}&search=${encodeURIComponent(searchTerm)}`;
      const leadsRes = await fetch(url);
      const leadsData = await leadsRes.json();
      setLeads(leadsData);

      // Fetch logs
      const logsRes = await fetch('/api/logs');
      const logsData = await logsRes.json();
      setLogs(logsData);

      // Fetch stats
      const statsRes = await fetch('/api/stats');
      const statsData = await statsRes.json();
      setStats(statsData);

      // Fetch webhook config
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
  }, [isAuthenticated, statusFilter, serviceFilter, searchTerm]);

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
      monthlyBill: lead.monthlyBill || ''
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
        setEditingLead(null);
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

  const getStatusBadgeClass = (status: LeadStatus) => {
    switch (status) {
      case 'new': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'contacted': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'finalized': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'rejected': return 'bg-rose-50 text-rose-700 border-rose-100';
    }
  };

  const getStatusLabel = (status: LeadStatus) => {
    switch (status) {
      case 'new': return 'Nowy';
      case 'contacted': return 'W kontakcie';
      case 'finalized': return 'Sfinalizowany';
      case 'rejected': return 'Odrzucony';
    }
  };

  const getServiceBadge = (service?: ServiceType) => {
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
    <div className="w-full bg-gray-50/50 min-h-screen py-6 px-4 md:px-8 border-t border-gray-100 font-sans" id="crm-panel-nadrzedny">
      
      {/* Header Panelu */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider text-gray-400 uppercase">
              Greg Helpline Centrala CRM
            </span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            Panel Zarządzania Leadami
          </h1>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
              setServiceFilter('all');
              fetchData();
            }}
            className="p-3 bg-white hover:bg-gray-50 text-gray-600 rounded-xl border border-gray-200 transition-all cursor-pointer active:scale-95"
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
            Eksport CSV
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
          { key: 'all', label: 'Wszystkie Usługi', icon: Users },
          { key: 'internet', label: 'Internet', icon: Wifi },
          { key: 'energia', label: 'Energia', icon: Zap },
          { key: 'sim', label: 'SIM & Telefony', icon: Smartphone },
          { key: 'ubezpieczenia', label: 'Ubezpieczenia', icon: ShieldCheck },
          { key: 'wakacje', label: 'Wakacje & Podróże', icon: Palmtree },
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
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Analytics Statistics Block */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-3.5 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Suma leadów</span>
            <Users className="w-4.5 h-4.5 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              {stats?.totalLeads ?? 0}
            </div>
            <span className="text-[10px] text-gray-400 font-medium">Wszystkie usługi</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Nowe zgłoszenia</span>
            <Inbox className="w-4.5 h-4.5 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 tracking-tight">
              {stats?.newLeads ?? 0}
            </div>
            <span className="text-[10px] text-blue-400 font-semibold bg-blue-50 px-1.5 py-0.5 rounded-sm">Oczekujące</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">W kontakcie</span>
            <UserCheck className="w-4.5 h-4.5 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 tracking-tight">
              {stats?.contactedLeads ?? 0}
            </div>
            <span className="text-[10px] text-amber-500 font-semibold bg-amber-50 px-1.5 py-0.5 rounded-sm">W toku</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Zamówione</span>
            <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600 tracking-tight">
              {stats?.finalizedLeads ?? 0}
            </div>
            <span className="text-[10px] text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-sm">Sukces ⚡</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-start text-gray-400 mb-2">
            <span className="text-xs font-medium">Odrzucone</span>
            <XCircle className="w-4.5 h-4.5 text-rose-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-500 tracking-tight">
              {stats?.rejectedLeads ?? 0}
            </div>
            <span className="text-[10px] text-rose-500 font-semibold bg-rose-50 px-1.5 py-0.5 rounded-sm">Nieaktywne</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between bg-gradient-to-br from-[#0B1F3A] to-blue-900 text-white">
          <div className="flex justify-between items-start text-blue-200 mb-2">
            <span className="text-xs font-medium">Konwersja</span>
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Middle Column: Leads Search, Filters, and List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            
            {/* Filtering bar */}
            <div className="flex flex-col md:flex-row gap-3 mb-5">
              <div className="relative flex-grow">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Szukaj po nazwisku, mailu, kodzie, telefonie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div className="flex gap-1 overflow-x-auto pb-1 md:pb-0 shrink-0">
                {['all', 'new', 'contacted', 'finalized', 'rejected'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap border ${
                      statusFilter === st
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {st === 'all' ? 'Wszystkie' : getStatusLabel(st as LeadStatus)}
                  </button>
                ))}
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
                <div className="py-20 text-center text-gray-400 font-sans">
                  <p className="text-sm font-bold text-gray-600 mb-1">Brak leadów</p>
                  <p className="text-xs">Brak zgłoszeń spełniających wybrane kryteria.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => selectLeadForEdit(lead)}
                      className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ${
                        editingLead?.id === lead.id
                          ? 'bg-blue-50/40 border-blue-400 shadow-md ring-1 ring-blue-400'
                          : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-xs hover:translate-x-0.5'
                      }`}
                    >
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex items-center gap-2 flex-wrap">
                          {getServiceBadge(lead.service)}
                          <h4 className="font-display font-extrabold text-sm text-gray-900">
                            {lead.name}
                          </h4>
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${getStatusBadgeClass(lead.status)}`}>
                            {getStatusLabel(lead.status)}
                          </span>
                        </div>

                        <div className="flex items-center gap-x-4 gap-y-1 text-[11px] text-gray-500 flex-wrap font-sans">
                          {lead.postcode && <span className="font-semibold text-gray-700">📍 {lead.postcode}</span>}
                          {lead.phone && <span>📞 {lead.phone}</span>}
                          {lead.email && <span>✉️ {lead.email}</span>}
                          {lead.monthlyBill && <span>💰 {lead.monthlyBill}</span>}
                          {lead.simNeed && <span>📱 {lead.simNeed}</span>}
                          {lead.insuranceType && <span>🛡️ {lead.insuranceType}</span>}
                          {lead.vacationType && <span>🌴 {lead.vacationType} ({lead.vacationTerm || ''})</span>}
                          {lead.travelersCount && <span>👥 {lead.travelersCount}</span>}
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 shrink-0 pt-2.5 md:pt-0 border-t border-gray-100/50 md:border-0">
                        <span className="text-[10px] font-mono text-gray-400">
                          {formatUKDate(lead.createdAt)}
                        </span>
                        
                        <div className="flex gap-1">
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
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Edit Details & Webhook Integrator */}
        <div className="space-y-6">
          
          {/* Edit Lead Card */}
          {editingLead ? (
            <div className="bg-white rounded-3xl p-5 border border-blue-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0B1F3A]" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono font-medium tracking-wider text-blue-600 uppercase">
                    Karta Edycji Leada
                  </span>
                  <h3 className="font-display font-extrabold text-base text-gray-900 mt-0.5">
                    {editingLead.name}
                  </h3>
                </div>
                <button
                  onClick={() => setEditingLead(null)}
                  className="p-1 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <form onSubmit={saveLeadDetails} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                    Zmień status leada
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(['new', 'contacted', 'finalized', 'rejected'] as LeadStatus[]).map((st) => (
                      <button
                        type="button"
                        key={st}
                        onClick={() => setEditForm({ ...editForm, status: st })}
                        className={`py-1.5 px-2 text-left rounded-lg font-medium border transition-all cursor-pointer ${
                          editForm.status === st
                            ? 'bg-gray-50 border-gray-900 font-bold'
                            : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
                          st === 'new' ? 'bg-blue-500' :
                          st === 'contacted' ? 'bg-amber-500' :
                          st === 'finalized' ? 'bg-emerald-500' : 'bg-rose-500'
                        }`} />
                        {getStatusLabel(st)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                    Notatki i uwagi doradcy
                  </label>
                  <textarea
                    rows={4}
                    value={editForm.notes}
                    onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                    placeholder="Wpisz np. ustalenia z rozmowy, preferowane godziny ponownego kontaktu..."
                    className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingLeadId !== null}
                  className="w-full py-3 bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  {savingLeadId ? 'Zapisywanie...' : 'Zapisz dane leada'}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center py-8 font-sans">
              <Inbox className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-xs font-bold text-gray-600 mb-0.5">Wybierz leada z listy</p>
              <p className="text-[11px] text-gray-400 max-w-[200px] mx-auto">Kliknij zgłoszenie na liście po lewej, aby edytować notatki lub status.</p>
            </div>
          )}

          {/* Webhook Integrator Setup */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
            <div>
              <span className="text-[10px] font-mono font-medium tracking-wider text-purple-600 uppercase">
                Zewnętrzne Integracje CRM
              </span>
              <h3 className="font-display font-extrabold text-sm text-gray-900 mt-0.5 flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-purple-600 animate-pulse" />
                Webhook Powiadomień API
              </h3>
            </div>

            <form onSubmit={handleSaveWebhook} className="space-y-3.5 font-sans text-xs">
              <div>
                <input
                  type="url"
                  placeholder="https://twoj-crm.pl/webhook-endpoint"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-lg placeholder:text-gray-400"
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
                  <span className="text-xs font-medium text-gray-700">Włącz Webhook</span>
                </label>

                <button
                  type="submit"
                  disabled={savingWebhook}
                  className="px-3 py-1.5 bg-gray-900 hover:bg-black text-white font-semibold text-[10px] rounded-lg cursor-pointer"
                >
                  {savingWebhook ? 'Zapis...' : 'Zapisz'}
                </button>
              </div>
            </form>

            {webhook.url && (
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray-400">Diagnostyka</span>
                <button
                  onClick={testWebhook}
                  disabled={webhookTesting}
                  className="py-1 px-2.5 bg-purple-50 text-purple-700 font-bold text-[10px] rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  {webhookTesting ? 'Testowanie...' : 'Wyślij test'}
                </button>
              </div>
            )}
          </div>

          {/* Dynamic Live Activity Log */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3.5">
            <h3 className="font-display font-extrabold text-sm text-gray-900 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
              Log Aktywności Systemu
            </h3>
            
            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
              {logs.length === 0 ? (
                <p className="text-[11px] text-gray-400 text-center py-6 font-sans">Brak zdarzeń.</p>
              ) : (
                logs.map((log) => (
                  <div key={log.id} className="text-[10px] leading-relaxed font-sans border-b border-gray-50 pb-2 flex gap-2">
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
