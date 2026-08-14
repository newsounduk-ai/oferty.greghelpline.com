import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Wifi, Zap, Smartphone, ShieldCheck, Palmtree, BookOpen, Menu, X, FileText, Lock, Scale } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin?: () => void;
}

export default function Header({ onOpenAdmin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    {
      path: '/internet',
      label: 'Internet',
      icon: Wifi,
      color: 'text-blue-500',
      activeBg: 'bg-blue-50 text-blue-700',
      badge: 'Światłowód'
    },
    {
      path: '/energia',
      label: 'Energia',
      icon: Zap,
      color: 'text-amber-500', // Yellow lightning bolt
      activeBg: 'bg-amber-50 text-amber-800',
      badge: 'Prąd & Gaz'
    },
    {
      path: '/sim',
      label: 'SIM & Telefony',
      icon: Smartphone,
      color: 'text-purple-500',
      activeBg: 'bg-purple-50 text-purple-700',
      badge: 'Abonament'
    },
    {
      path: '/ubezpieczenia',
      label: 'Ubezpieczenia',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      activeBg: 'bg-emerald-50 text-emerald-800',
      badge: 'Ochrona'
    },
    {
      path: '/wakacje',
      label: 'Wakacje',
      icon: Palmtree,
      color: 'text-teal-500',
      activeBg: 'bg-teal-50 text-teal-800',
      badge: 'Podróże'
    },
    {
      path: '/vpn',
      label: 'VPN',
      icon: Lock,
      color: 'text-slate-700',
      activeBg: 'bg-slate-100 text-slate-900',
      badge: 'Ochrona'
    },
    {
      path: '/prawo',
      label: 'Prawo',
      icon: Scale,
      color: 'text-indigo-600',
      activeBg: 'bg-indigo-50 text-indigo-900',
      badge: 'Wsparcie'
    },
    {
      path: '/blog',
      label: 'Poradnik',
      icon: BookOpen,
      color: 'text-purple-500',
      activeBg: 'bg-purple-50 text-purple-800',
      badge: 'Artykuły'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs font-sans">
      
      {/* Top Dark Bar */}
      <div className="bg-[#1E293B] text-gray-300 text-[11px] font-medium py-1 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">Konsultanci online</span>
            <span className="text-slate-400 hidden sm:inline">• Bezpłatna pomoc i doradztwo w języku polskim w UK</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span>Pon – Sob: 8:00 – 20:00</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-2 sm:gap-4">
          
          {/* Left Section: Dark blue circular logo + Single line brand text */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-display font-black text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              G
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-display font-black text-base md:text-lg text-[#0B1F3A] tracking-tight group-hover:text-blue-900 transition-colors">
                Greg Helpline
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Online" />
              <span className="hidden lg:inline text-xs text-gray-500 font-medium">
                Polski Doradca w UK • Wszystkie Oferty
              </span>
            </div>
          </NavLink>

          {/* Central Section (Flattened Menu): All items in one horizontal row */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-xs font-bold font-sans transition-all whitespace-nowrap cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-gray-100 border-gray-200 text-[#0B1F3A]'
                    : 'bg-gray-50/80 border-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <span className="whitespace-nowrap">Strona Główna</span>
            </NavLink>

            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-xl text-xs font-bold font-sans transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? item.activeBg + ' shadow-xs font-black'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Section: Orange PDF-y Icon + Widened Telephone Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <NavLink
              to="/poradniki"
              className={({ isActive }) =>
                `hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold font-sans transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-amber-100 text-amber-900 font-black'
                    : 'text-amber-700 hover:text-amber-900 hover:bg-amber-50'
                }`
              }
            >
              <FileText className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="whitespace-nowrap">PDF-y</span>
            </NavLink>

            <a
              href="tel:+447491978400"
              className="hidden sm:flex items-center justify-center gap-2.5 bg-[#0B1F3A] hover:bg-black text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer whitespace-nowrap min-w-[170px] shrink-0"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <span className="tracking-wide whitespace-nowrap">07491 978400</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-2xl text-sm font-bold font-sans transition-colors ${
                isActive ? 'bg-gray-100 text-[#0B1F3A]' : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            🏠 Strona Główna
          </NavLink>

          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold font-sans transition-colors ${
                    isActive ? item.activeBg : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-gray-100 px-2 py-0.5 rounded-md text-gray-600">
                  {item.badge}
                </span>
              </NavLink>
            );
          })}

          <NavLink
            to="/poradniki"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold text-amber-900 bg-amber-50"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-amber-500" />
              <span>Poradniki PDF</span>
            </div>
            <span className="text-[10px] font-mono uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md font-bold">
              7 PDF
            </span>
          </NavLink>

          <div className="pt-3 border-t border-gray-100">
            <a
              href="tel:+447491978400"
              className="flex items-center justify-center gap-2.5 w-full bg-[#0B1F3A] text-white py-3 rounded-2xl font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>07491 978400</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

