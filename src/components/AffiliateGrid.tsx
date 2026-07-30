import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { ReferralLink } from '../types';

interface AffiliateGridProps {
  title?: string;
  subtitle?: string;
  links: ReferralLink[];
  serviceTheme?: 'internet' | 'energia' | 'sim' | 'ubezpieczenia';
}

export default function AffiliateGrid({
  title = "Wolisz zamówić od razu sam? Oto aktualne promocje naszych partnerów",
  subtitle = "Kliknij w wybraną ofertę, aby przejść bezpośrednio na stronę dostawcy z zaliczonym rabatem partnerskim.",
  links,
  serviceTheme = 'internet'
}: AffiliateGridProps) {

  const themeClasses = {
    internet: 'bg-blue-50/50 border-blue-100 text-blue-900',
    energia: 'bg-amber-50/50 border-amber-100 text-amber-900',
    sim: 'bg-purple-50/50 border-purple-100 text-purple-900',
    ubezpieczenia: 'bg-emerald-50/50 border-emerald-100 text-emerald-900'
  };

  const buttonGradient = {
    internet: 'bg-blue-600 hover:bg-blue-700 text-white',
    energia: 'bg-amber-500 hover:bg-amber-600 text-white',
    sim: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    ubezpieczenia: 'bg-emerald-600 hover:bg-emerald-700 text-white'
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50/60 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold font-sans text-gray-800">
              Szybkie Zamówienie Online
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight">
            {title}
          </h2>

          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        {/* Affiliate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {links.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color || 'from-[#0B1F3A] to-blue-900'} flex items-center justify-center text-white font-display font-black text-sm shadow-md group-hover:scale-105 transition-transform`}>
                    {item.logoText || item.name.substring(0, 2).toUpperCase()}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200/60">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-900 transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`w-full py-3 px-4 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer ${buttonGradient[serviceTheme]}`}
                >
                  <span>Sprawdź ofertę</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-gray-200/70 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-sans">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Nota o linkach partnerskich:</strong> Greg Helpline może otrzymać prowizję od dostawcy za przekierowanie. Dla Ciebie cena i warunki promocji są dokładnie takie same lub tańsze!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
