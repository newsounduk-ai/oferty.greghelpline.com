import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Wifi, Zap, Smartphone, ShieldCheck, Menu, X, ShieldAlert } from 'lucide-react';
import { ServiceType } from '../types';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
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
      color: 'text-amber-500',
      activeBg: 'bg-amber-50 text-amber-800',
      badge: 'Prąd & Gaz'
    },
    {
      path: '/sim',
      label: 'SIM & Telefony',
      icon: Smartphone,
      color: 'text-indigo-500',
      activeBg: 'bg-indigo-50 text-indigo-700',
      badge: 'Abonament'
    },
    {
      path: '/ubezpieczenia',
      label: 'Ubezpieczenia',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      activeBg: 'bg-emerald-50 text-emerald-800',
      badge: 'Ochrona'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand */}
          <NavLink to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#0B1F3A] flex items-center justify-center text-white font-display font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-base md:text-lg text-[#0B1F3A] tracking-tight group-hover:text-blue-900 transition-colors">
                  Greg Helpline
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Konsultanci online" />
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 font-sans tracking-wide">
                Polski Doradca w UK • Wszystkie Oferty
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-xs font-semibold font-sans transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gray-100 text-[#0B1F3A]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              Strona Główna
            </NavLink>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold font-sans transition-all cursor-pointer ${
                      isActive
                        ? item.activeBg + ' shadow-xs font-bold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Phone CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+447491978400"
              className="hidden sm:flex items-center gap-2 bg-[#0B1F3A] hover:bg-black text-white px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>07491 978400</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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

          {navItems.map((item) => {
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

          <div className="pt-3 border-t border-gray-100">
            <a
              href="tel:+447491978400"
              className="flex items-center justify-center gap-2 w-full bg-[#0B1F3A] text-white py-3 rounded-2xl font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Zadzwoń: 07491 978400</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
