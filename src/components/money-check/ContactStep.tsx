import React from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Send,
  Lock,
  CheckCircle2
} from 'lucide-react';

export interface ContactData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  postcode: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  consent: boolean;
  marketingConsent: boolean;
}

interface ContactStepProps {
  data: ContactData;
  onChange: (data: ContactData) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  onBack: () => void;
}

export default function ContactStep({
  data,
  onChange,
  onSubmit,
  isSubmitting,
  onBack
}: ContactStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const update = (field: keyof ContactData, value: any) => {
    onChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!data.name.trim()) newErrors.name = 'Wpisz swoje imię';
    if (!data.phone.trim() || data.phone.trim().length < 9) {
      newErrors.phone = 'Wpisz poprawny brytyjski numer telefonu (np. 07491 978400)';
    }
    if (!data.email.trim() || !data.email.includes('@')) {
      newErrors.email = 'Wpisz poprawny adres e-mail';
    }
    if (!data.consent) {
      newErrors.consent = 'Wymagana jest zgoda na kontakt w celu przedstawienia wyliczenia';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit();
  };

  return (
    <form onSubmit={validateAndSubmit} className="space-y-6">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
          Gdzie mamy przesłać bezpłatną analizę?
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans">
          Podaj dane kontaktowe, aby nasz polski konsultant mógł przygotować dla Ciebie raport oszczędności.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Imię */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Imię: <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="np. Grzegorz"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              className={`w-full min-h-[48px] pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-amber-400'
              }`}
            />
          </div>
          {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
        </div>

        {/* Nazwisko */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Nazwisko:
          </label>
          <input
            type="text"
            placeholder="np. Nowak"
            value={data.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Numer telefonu (UK): <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              placeholder="np. 07491 978400"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={`w-full min-h-[48px] pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-amber-400'
              }`}
            />
          </div>
          {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
        </div>

        {/* E-mail */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Adres e-mail: <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              placeholder="twoj.email@gmail.com"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              className={`w-full min-h-[48px] pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-amber-400'
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Kod pocztowy w UK (Postcode):
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="np. PE1 1AA"
              value={data.postcode}
              onChange={(e) => update('postcode', e.target.value.toUpperCase())}
              className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none uppercase font-mono"
            />
          </div>
        </div>

        {/* Preferowany kontakt */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 font-sans">
            Preferowana forma kontaktu:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'phone', label: 'Telefon' },
              { id: 'whatsapp', label: 'WhatsApp' },
              { id: 'email', label: 'E-mail' }
            ].map(pc => (
              <button
                key={pc.id}
                type="button"
                onClick={() => update('preferredContact', pc.id)}
                className={`min-h-[48px] px-2 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                  data.preferredContact === pc.id
                    ? 'bg-amber-400 border-amber-400 text-[#0B1F3A]'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {pc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Checkboxy Zgód */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3.5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="w-5 h-5 mt-0.5 rounded-md text-amber-500 bg-slate-950 border-slate-700 focus:ring-amber-400 cursor-pointer"
          />
          <span className="text-xs text-slate-300 font-sans leading-snug">
            <strong className="text-white">Zgoda na kontakt i bezpłatną kalkulację:</strong> Wyrażam zgodę na kontakt doradcy GregHelpline w celu przedstawienia niezobowiązującej analizy i ofert dla wybranych usług w UK. <span className="text-amber-400">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-[11px] text-red-400 pl-8">{errors.consent}</p>}

        <label className="flex items-start gap-3 cursor-pointer pt-2 border-t border-slate-800/80">
          <input
            type="checkbox"
            checked={data.marketingConsent}
            onChange={(e) => update('marketingConsent', e.target.checked)}
            className="w-5 h-5 mt-0.5 rounded-md text-amber-500 bg-slate-950 border-slate-700 focus:ring-amber-400 cursor-pointer"
          />
          <span className="text-xs text-slate-400 font-sans leading-snug">
            (Opcjonalnie) Chcę otrzymywać powiadomienia o nowych promocjach, bonusach partnerskich i zmianach taryf w Wielkiej Brytanii.
          </span>
        </label>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Twoje dane są bezpieczne i nie są udostępniane podmiotom trzecim bez Twojej wiedzy.</span>
        </div>
      </div>

      {/* Przyciski Nawigacji */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-bold transition-all cursor-pointer"
        >
          ← Popraw poprzednie kroki
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-h-[48px] px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1F3A] font-extrabold text-sm font-sans flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <span>Analizowanie i wysyłanie...</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#0B1F3A]" />
              <span>WYŚLIJ ZGŁOSZENIE MONEY CHECK</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
