import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X, Check, Phone } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

import HomePage from './pages/HomePage';
import InternetPage from './pages/InternetPage';
import EnergiaPage from './pages/EnergiaPage';
import SimPage from './pages/SimPage';
import TelefonyPage from './pages/TelefonyPage';
import UbezpieczeniaPage from './pages/UbezpieczeniaPage';
import WakacjePage from './pages/WakacjePage';
import VpnPage from './pages/VpnPage';
import PrawoPage from './pages/PrawoPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import GuidesLibraryPage from './pages/GuidesLibraryPage';
import MoneyCheckPage from './pages/MoneyCheckPage';
import ExitIntentGuidePopup from './components/ExitIntentGuidePopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function ScrollToTop() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Quick Mobile Callback Modal State
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [callbackError, setCallbackError] = useState('');

  const handleQuickCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim() || callbackPhone.replace(/\s+/g, '').length < 9) {
      setCallbackError('Wprowadź poprawny numer telefonu.');
      return;
    }
    if (!callbackName.trim()) {
      setCallbackError('Wprowadź swoje imię.');
      return;
    }

    setCallbackLoading(true);
    setCallbackError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: 'internet',
          postcode: 'QUICK_CALL',
          houseNumber: 'MOBILE_CTA',
          name: callbackName.trim(),
          phone: callbackPhone.trim(),
          email: 'quick-callback@greghelpline.co.uk',
          currentSupplier: 'Szybki Kontakt',
          monthlyBill: 'Do wyliczenia',
          consent: true
        })
      });

      if (response.ok) {
        setCallbackSuccess(true);
        setTimeout(() => {
          setShowCallbackModal(false);
          setCallbackSuccess(false);
          setCallbackName('');
          setCallbackPhone('');
        }, 3500);
      } else {
        throw new Error('Błąd serwera. Spróbuj ponownie.');
      }
    } catch (err: any) {
      setCallbackError(err.message || 'Wystąpił błąd połączenia.');
    } finally {
      setCallbackLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between font-sans bg-white text-gray-900 selection:bg-amber-100 selection:text-amber-900">
        
        {/* Main Sticky Header */}
        <Header onOpenAdmin={() => setShowAdminModal(true)} />

        {/* Dynamic Page Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/money-check" element={<MoneyCheckPage />} />
            <Route path="/sprawdz-rachunki" element={<MoneyCheckPage />} />
            <Route path="/internet" element={<InternetPage />} />
            <Route path="/energia" element={<EnergiaPage />} />
            <Route path="/sim" element={<SimPage />} />
            <Route path="/telefony" element={<TelefonyPage />} />
            <Route path="/ubezpieczenia" element={<UbezpieczeniaPage />} />
            <Route path="/wakacje" element={<WakacjePage />} />
            <Route path="/vpn" element={<VpnPage />} />
            <Route path="/prawo" element={<PrawoPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/poradniki" element={<GuidesLibraryPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenAdmin={() => setShowAdminModal(true)} />

        {/* Exit Intent Popup & Floating WhatsApp Button */}
        <ExitIntentGuidePopup />
        <FloatingWhatsApp />

        {/* Mobile Floating Sticky CTA */}
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md py-3 px-4 border-t border-gray-200 z-40 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-bold text-gray-400 tracking-wide uppercase leading-none">Greg Helpline</span>
            <span className="text-xs font-bold text-[#0B1F3A] mt-0.5">Porównaj oferty za darmo</span>
          </div>
          <button
            onClick={() => setShowCallbackModal(true)}
            className="py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-[#0B1F3A] font-sans font-extrabold text-xs rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Darmowy Kontakt PL</span>
          </button>
        </div>

        {/* ADMIN CRM OVERLAY */}
        {showAdminModal && (
          <div className="fixed inset-0 bg-[#0B1F3A]/90 backdrop-blur-md z-50 overflow-y-auto">
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <div className="bg-[#0B1F3A] text-white py-3 px-6 flex justify-between items-center border-b border-blue-900">
                <span className="font-display font-extrabold text-sm tracking-wide">
                  GH CRM • System Obsługi Klientów w UK
                </span>
                <button
                  onClick={() => setShowAdminModal(false)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-lg cursor-pointer transition-colors"
                >
                  ← Powrót do Strony
                </button>
              </div>

              <div className="flex-grow">
                <AdminDashboard onClose={() => setShowAdminModal(false)} />
              </div>
            </div>
          </div>
        )}

        {/* QUICK CALLBACK MODAL */}
        <AnimatePresence>
          {showCallbackModal && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { if (!callbackLoading) setShowCallbackModal(false); }}
                className="absolute inset-0 bg-transparent"
              />

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-md relative z-10 shadow-2xl border border-gray-100 text-left"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-medium tracking-wider text-amber-600 uppercase">
                      Infolinia Po Polsku
                    </span>
                    <h3 className="font-display font-extrabold text-base text-gray-900 mt-0.5">
                      Zamów darmowy telefon doradcy
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowCallbackModal(false)}
                    className="p-1 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer"
                    disabled={callbackLoading}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {callbackSuccess ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto">
                      <Check className="w-6 h-6" strokeWidth={3} />
                    </div>
                    <h4 className="font-display font-bold text-sm text-gray-900">Dziękujemy za zgłoszenie!</h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Oddzwonimy pod podany numer w ciągu kilkunastu minut.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickCallbackSubmit} className="space-y-4 font-sans text-xs">
                    <p className="text-[11px] text-gray-500">
                      Wpisz imię oraz numer telefonu w UK lub PL. Usługa jest w 100% darmowa.
                    </p>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Imię
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Marek"
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Numer telefonu
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="np. 07491 978400"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                      />
                    </div>

                    {callbackError && (
                      <p className="text-[11px] text-rose-600 font-medium">{callbackError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={callbackLoading}
                      className="w-full py-3.5 bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
                    >
                      {callbackLoading ? 'Wysyłanie...' : 'Oddzwoń do mnie'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </BrowserRouter>
  );
}
