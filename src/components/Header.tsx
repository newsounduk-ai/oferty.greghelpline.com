import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, Wifi, Zap, Smartphone, ShieldCheck, Palmtree, 
  BookOpen, Menu, X, FileText, Lock, Scale, Radio, Sparkles 
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmin?: () => void;
}

export default function Header({ onOpenAdmin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open on small screens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mainNavItems = [
    {
      path: '/money-check',
      label: 'Money Check',
      icon: Sparkles,
      color: 'text-amber-500',
      activeBg: 'bg-amber-400 text-[#0B1F3A] font-black shadow-xs ring-1 ring-amber-500/50',
      isFeatured: true,
      badge: 'Audyt UK'
    },
    {
      path: '/internet',
      label: 'Internet',
      icon: Wifi,
      color: 'text-blue-500',
      activeBg: 'bg-blue-50 text-blue-800 border-blue-200 font-extrabold',
      badge: 'Światłowód'
    },
    {
      path: '/energia',
      label: 'Energia',
      icon: Zap,
      color: 'text-amber-500',
      activeBg: 'bg-amber-50 text-amber-900 border-amber-200 font-extrabold',
      badge: 'Prąd & Gaz'
    },
    {
      path: '/sim',
      label: 'SIM',
      icon: Radio,
      color: 'text-purple-500',
      activeBg: 'bg-purple-50 text-purple-900 border-purple-200 font-extrabold',
      badge: 'Karty SIM'
    },
    {
      path: '/telefony',
      label: 'Telefony',
      icon: Smartphone,
      color: 'text-amber-600',
      activeBg: 'bg-amber-50 text-amber-950 border-amber-300 font-extrabold',
      badge: 'Abonament'
    },
    {
      path: '/ubezpieczenia',
      label: 'Ubezpieczenia',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      activeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200 font-extrabold',
      badge: 'Ochrona'
    },
    {
      path: '/wakacje',
      label: 'Wakacje',
      icon: Palmtree,
      color: 'text-teal-500',
      activeBg: 'bg-teal-50 text-teal-900 border-teal-200 font-extrabold',
      badge: 'Podróże'
    },
    {
      path: '/vpn',
      label: 'VPN',
      icon: Lock,
      color: 'text-slate-600',
      activeBg: 'bg-slate-100 text-slate-900 border-slate-300 font-extrabold',
      badge: 'Ochrona'
    },
    {
      path: '/prawo',
      label: 'Prawo',
      icon: Scale,
      color: 'text-indigo-600',
      activeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200 font-extrabold',
      badge: 'Wsparcie'
    },
    {
      path: '/blog',
      label: 'Poradnik',
      icon: BookOpen,
      color: 'text-purple-500',
      activeBg: 'bg-purple-50 text-purple-900 border-purple-200 font-extrabold',
      badge: 'Artykuły'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs font-sans w-full">
      
      {/* Top Info Bar */}
      <div className="bg-[#1E293B] text-gray-300 text-[11px] font-medium py-1 px-3 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-white font-bold">Konsultanci online</span>
            <span className="text-slate-400 hidden sm:inline truncate">• Bezpłatna pomoc i doradztwo po polsku w UK</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 shrink-0 text-[10px] sm:text-[11px]">
            <span>Pon – Sob: 8:00 – 20:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 xl:h-[72px] gap-2">
          
          {/* Logo Section */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
            aria-label="Greg Helpline - Strona Główna"
          >
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-display font-black text-lg xl:text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              G
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-display font-black text-base xl:text-lg text-[#0B1F3A] tracking-tight group-hover:text-blue-900 transition-colors">
                Greg Helpline
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Doradcy online" />
            </div>
          </NavLink>

          {/* Desktop Navigation (XL screens: 1280px, 1440px, 1920px) */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 shrink-0 flex-nowrap" aria-label="Główna nawigacja">
            {/* Strona Główna */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2.5 2xl:px-3 py-1.5 rounded-xl text-[11px] 2xl:text-xs font-bold font-sans transition-all whitespace-nowrap cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-slate-100 border-slate-300 text-[#0B1F3A] font-black shadow-xs'
                    : 'bg-transparent border-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              Strona Główna
            </NavLink>

            {/* All Category Links in exact requested order */}
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isMoneyCheck = item.path === '/money-check';

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => {
                    if (isMoneyCheck) {
                      return `flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-xl text-[11px] 2xl:text-xs transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                        isActive
                          ? 'bg-amber-400 text-[#0B1F3A] font-black border-amber-500 shadow-sm'
                          : 'bg-amber-50 text-[#0B1F3A] font-extrabold border-amber-300/80 hover:bg-amber-100 hover:border-amber-400'
                      }`;
                    }

                    return `flex items-center gap-1 2xl:gap-1.5 px-2 2xl:px-2.5 py-1.5 rounded-xl text-[11px] 2xl:text-xs font-bold font-sans transition-all whitespace-nowrap cursor-pointer border shrink-0 ${
                      isActive
                        ? item.activeBg + ' shadow-xs'
                        : 'border-transparent text-gray-700 hover:text-gray-950 hover:bg-gray-100/80'
                    }`;
                  }}
                >
                  <Icon className={`w-3.5 h-3.5 2xl:w-4 2xl:h-4 ${item.color} shrink-0`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Section */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Quick Money Check Badge on Tablet / Mobile */}
            <NavLink
              to="/money-check"
              className="xl:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0B1F3A] font-black text-xs transition-all shadow-xs border border-amber-500/30 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span className="hidden xs:inline">Money Check</span>
              <span className="xs:hidden">Audyt</span>
            </NavLink>

            {/* PDF-y Button (Large screens) */}
            <NavLink
              to="/poradniki"
              className={({ isActive }) =>
                `hidden 2xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-bold font-sans transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-amber-100 border-amber-300 text-amber-900 font-black'
                    : 'bg-amber-50/70 border-amber-200 text-amber-800 hover:bg-amber-100'
                }`
              }
            >
              <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>PDF-y</span>
            </NavLink>

            {/* Telephone Button */}
            <a
              href="tel:+447491978400"
              className="hidden sm:flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-black text-white px-3.5 xl:px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              title="Zadzwoń do polskiego doradcy w UK"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
              <span className="tracking-wide whitespace-nowrap">07491 978400</span>
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200 shadow-xs"
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu nawigacji'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0B1F3A]" /> : <Menu className="w-5 h-5 text-[#0B1F3A]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-x-0 top-[calc(64px+29px)] bottom-0 z-50 bg-slate-900/60 backdrop-blur-xs flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white border-b border-gray-200 shadow-2xl px-4 py-5 space-y-2 max-h-[82vh] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500">
                Menu Usług & Doradztwa UK
              </span>
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Doradca Online
              </span>
            </div>

            {/* Strona Główna */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between min-h-[48px] px-4 py-3 rounded-2xl text-sm font-bold font-sans transition-colors border ${
                  isActive ? 'bg-slate-100 border-slate-300 text-[#0B1F3A]' : 'bg-gray-50/50 border-gray-100 text-gray-800 hover:bg-gray-100'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-base">🏠</span>
                <span>Strona Główna</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Główna</span>
            </NavLink>

            {/* All Service Items */}
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isMoneyCheck = item.path === '/money-check';

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between min-h-[48px] px-4 py-3 rounded-2xl text-sm font-bold font-sans transition-colors border ${
                      isMoneyCheck
                        ? isActive
                          ? 'bg-amber-400 text-[#0B1F3A] border-amber-500 font-black shadow-xs'
                          : 'bg-amber-50 text-[#0B1F3A] border-amber-300 font-extrabold hover:bg-amber-100'
                        : isActive
                        ? item.activeBg
                        : 'bg-white border-gray-100 text-gray-800 hover:bg-gray-50'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span className={isMoneyCheck ? 'text-[#0B1F3A] font-extrabold' : ''}>{item.label}</span>
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-bold ${
                    isMoneyCheck 
                      ? 'bg-amber-200 text-[#0B1F3A]' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.badge}
                  </span>
                </NavLink>
              );
            })}

            {/* Poradniki PDF */}
            <NavLink
              to="/poradniki"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between min-h-[48px] px-4 py-3 rounded-2xl text-sm font-bold text-amber-950 bg-amber-50/80 border border-amber-200 hover:bg-amber-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>Poradniki PDF</span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md font-bold">
                7 PDF
              </span>
            </NavLink>

            {/* Direct Telephone Call Button in Mobile Menu */}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="tel:+447491978400"
                className="flex items-center justify-center gap-2.5 w-full bg-[#0B1F3A] hover:bg-black text-white min-h-[50px] py-3.5 rounded-2xl font-extrabold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Zadzwoń: 07491 978400 (Bezpłatnie)</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}


