import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Lock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 font-sans border-t border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-display font-black text-xl text-white shadow-lg">
                G
              </div>
              <div>
                <h3 className="font-display font-black text-xl tracking-tight text-white">
                  Greg Helpline
                </h3>
                <p className="text-xs text-blue-300">Wszystkie Oferty w UK po Polsku</p>
              </div>
            </div>

            <p className="text-xs text-blue-200/80 leading-relaxed max-w-sm">
              Niezależny, autoryzowany polski doradca w Wielkiej Brytanii. Bezpłatnie dobieramy najtańsze taryfy energii, najszybszy światłowód, elastyczne pakiety SIM, bezpieczne ubezpieczenia oraz wymarzone wakacje i wycieczki z UK.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Darmowa pomoc i brak ukrytych opłat</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider text-blue-300">
              Nasze Usługi
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/90">
              <li>
                <NavLink to="/internet" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Internet i Światłowód
                </NavLink>
              </li>
              <li>
                <NavLink to="/energia" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Energia Prąd i Gaz
                </NavLink>
              </li>
              <li>
                <NavLink to="/sim" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Karty SIM-Only
                </NavLink>
              </li>
              <li>
                <NavLink to="/telefony" className="hover:text-amber-400 transition-colors flex items-center gap-2 text-amber-300 font-semibold">
                  <span>•</span> Telefony w Abonamencie
                </NavLink>
              </li>
              <li>
                <NavLink to="/ubezpieczenia" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Ubezpieczenia Zdrowotne & Auto
                </NavLink>
              </li>
              <li>
                <NavLink to="/wakacje" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Wakacje i Wycieczki z UK
                </NavLink>
              </li>
              <li>
                <NavLink to="/vpn" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> VPN & Prywatność
                </NavLink>
              </li>
              <li>
                <NavLink to="/prawo" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>•</span> Prawo i Odszkodowania
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:text-amber-400 transition-colors flex items-center gap-2 text-amber-300 font-bold">
                  <span>•</span> Poradnik & Artykuły
                </NavLink>
              </li>
              <li>
                <NavLink to="/poradniki" className="hover:text-amber-400 transition-colors flex items-center gap-2 text-amber-300 font-bold">
                  <span>•</span> Bezpłatne Poradniki PDF
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider text-blue-300">
              Kontakt z Doradcą
            </h4>
            <ul className="space-y-3 text-xs text-blue-100/90">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+447491978400" className="hover:text-white transition-colors font-bold text-amber-300">
                  07491 978400 (Polski Doradca)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:kontakt@greghelpline.co.uk" className="hover:text-white transition-colors">
                  kontakt@greghelpline.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Londyn & Cała Wielka Brytania</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider text-blue-300">
              Informacje
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-white transition-colors underline cursor-pointer"
                >
                  Polityka Prywatności i RODO
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-[11px] font-mono transition-colors cursor-pointer border border-blue-700/50"
                  title="Panel Dostępny dla Pracowników"
                >
                  <Lock className="w-3 h-3 text-amber-400" />
                  <span>Panel CRM / Staff</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-300/70">
          <p>© {new Date().getFullYear()} Greg Helpline. Wszystkie prawa zastrzeżone.</p>
          <p className="text-center sm:text-right max-w-lg">
            Serwis doradczy. Usługi są dla klienta w 100% darmowe. Zastrzegamy prawo do otrzymania prowizji od wybranych partnerów handlowych bez wpływu na cenę końcową.
          </p>
        </div>
      </div>

      {/* PRIVACY MODAL */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-2xl relative z-10 shadow-2xl border border-gray-100 font-sans text-xs text-left max-h-[85vh] overflow-y-auto text-gray-800"
            >
              <div className="flex justify-between items-start mb-6 pb-2.5 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-mono font-medium tracking-wider text-amber-600 uppercase">
                    Informacje prawne
                  </span>
                  <h3 className="font-display font-black text-lg text-gray-900 mt-0.5">
                    Polityka Prywatności i RODO (GDPR)
                  </h3>
                </div>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-1 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
                <p>
                  Szanując Twoją prywatność oraz dbając o ochronę Twoich danych osobowych zgodnie z rozporządzeniem RODO / GDPR, przedstawiamy zasady przetwarzania danych przez Greg Helpline.
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1">1. Administrator Danych</h4>
                  <p>
                    Administratorem Twoich danych osobowych przekazywanych w celach porównania i wyboru usług (Internet, Energia, SIM, Ubezpieczenia, Wakacje) jest Greg Helpline z siedzibą w Wielkiej Brytanii (kontakt: kontakt@greghelpline.co.uk).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1">2. Cel Przetwarzania i Zgoda</h4>
                  <p>
                    Przekazane dane (imię, numer telefonu, adres e-mail, kod pocztowy, szczegóły zapytania) przetwarzane są na podstawie dobrowolnej zgody w celu przeprowadzenia bezpłatnej analizy taryf oraz telefonicznego przedstawienia dopasowanej oferty po polsku.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1">3. Bezpieczeństwo i Prawa Użytkownika</h4>
                  <p>
                    Dane są szyfrowane za pomocą protokołu SSL/TLS i przetwarzane zgodnie ze standardami UK GDPR. W każdej chwili przysługuje Ci prawo do wglądu, sprostowania lub usunięcia swoich danych.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2.5 bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold rounded-xl cursor-pointer text-xs"
                >
                  Zamknij
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
