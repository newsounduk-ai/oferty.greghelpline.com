import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Download, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GUIDES_BY_SERVICE, serviceFromPath } from '../data/guidesData';

const SESSION_KEY = 'gh_guide_popup_shown';
const SCROLL_TRIGGER_RATIO = 0.5;
const TIME_TRIGGER_MS = 45000;
const MIN_TIME_ON_PAGE_MS = 4000;

export default function ExitIntentGuidePopup() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const hasFiredRef = useRef(false);
  const mountTimeRef = useRef(Date.now());

  const service = serviceFromPath(location.pathname);
  const guide = service ? GUIDES_BY_SERVICE[service] : null;

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, [location.pathname]);

  useEffect(() => {
    if (!guide) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const fire = () => {
      if (hasFiredRef.current) return;
      if (Date.now() - mountTimeRef.current < MIN_TIME_ON_PAGE_MS) return;
      hasFiredRef.current = true;
      sessionStorage.setItem(SESSION_KEY, '1');
      setVisible(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) fire();
    };

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const ratio = window.scrollY / scrollableHeight;
      if (ratio >= SCROLL_TRIGGER_RATIO) fire();
    };

    const timer = setTimeout(fire, TIME_TRIGGER_MS);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, guide]);

  if (!guide) return null;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVisible(false)} className="absolute inset-0 bg-black/60" />
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 350 }} className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-md relative z-10 shadow-2xl border border-gray-100 text-left">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl ${guide.accent.badgeBg} flex items-center justify-center shrink-0`}>
                  <guide.icon className={`w-5 h-5 ${guide.accent.badgeText}`} />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-medium tracking-wider ${guide.accent.badgeText} uppercase`}>Zanim pójdziesz — to jest bezpłatne</span>
                  <h3 className="font-display font-extrabold text-base text-gray-900 mt-0.5">{guide.title}</h3>
                </div>
              </div>
              <button onClick={() => setVisible(false)} aria-label="Zamknij" className="p-1 text-gray-400 hover:bg-gray-100 rounded-lg cursor-pointer shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-5">{guide.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={guide.pdfPath} target="_blank" rel="noopener noreferrer" className={`flex-1 ${guide.accent.button} ${guide.accent.buttonHover} text-white font-sans font-bold px-5 py-3 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer`}>
                <Download className="w-4 h-4" />
                <span>Pobierz PDF</span>
              </a>
              <a href="tel:07491978400" className="flex-1 bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold px-5 py-3 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                <PhoneCall className="w-4 h-4" />
                <span>Zadzwoń teraz</span>
              </a>
            </div>
            <p className="text-[11px] text-gray-400 text-center pt-3">100% bezpłatnie, bez zobowiązań &middot; 07491 978400</p>
            <p className="text-[10px] text-gray-400 text-center">Materiał ma charakter informacyjny</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
