import React, { useState } from 'react';
import { Smartphone, Zap, ArrowRight, ShieldCheck, CheckCircle2, Wifi } from 'lucide-react';

interface SimDataEstimatorProps {
  onCtaClick?: () => void;
}

export default function SimDataEstimator({ onCtaClick }: SimDataEstimatorProps) {
  const [videoHours, setVideoHours] = useState<number>(2);
  const [musicHours, setMusicHours] = useState<number>(1);
  const [hotspotUsed, setHotspotUsed] = useState<boolean>(false);

  // Calculate estimated GB per month
  // Video ~1.5 GB / hr, Music ~0.1 GB / hr, Hotspot add 20 GB
  const estimatedGb = Math.round((videoHours * 1.5 + musicHours * 0.1) * 30 + (hotspotUsed ? 25 : 0));

  let recommendedPlan = '15 GB - 30 GB';
  let priceRange = '£6 - £8 / mies.';
  let badge = 'Szybkie Wi-Fi & Social Media';

  if (estimatedGb > 80) {
    recommendedPlan = 'Nielimitowane 5G (Unlimited Data)';
    priceRange = '£12 - £18 / mies.';
    badge = 'Maksymalne Pobieranie & Hotspot Bez Limitów';
  } else if (estimatedGb > 35) {
    recommendedPlan = '50 GB - 80 GB';
    priceRange = '£9 - £12 / mies.';
    badge = 'Idealny Zapas dla Aktywnych';
  }

  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    const el = document.getElementById('formularz-kontener');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            Kalkulator Zużycia Danych (GB)
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-black text-[#0B1F3A] tracking-tight">
            Ile gigabajtów danych naprawdę potrzebujesz na smartfonie?
          </h2>
          <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
            Nie przepłacaj za nielimitowany internet, jeśli zużywasz kilkanaście gigabajtów. Oblicz swój idealny pakiet w UK.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Video slider */}
            <div className="bg-indigo-50/40 p-4.5 rounded-2xl border border-indigo-100">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-800">
                  Oglądanie wideo (YouTube, TikTok, Netflix) dziennie:
                </label>
                <span className="font-bold text-xs text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-indigo-200">
                  {videoHours} godz. / dzień
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={8}
                step={0.5}
                value={videoHours}
                onChange={(e) => setVideoHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Music slider */}
            <div className="bg-indigo-50/40 p-4.5 rounded-2xl border border-indigo-100">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-800">
                  Muzyka & Podcasty (Spotify) dziennie:
                </label>
                <span className="font-bold text-xs text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-indigo-200">
                  {musicHours} godz. / dzień
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={musicHours}
                onChange={(e) => setMusicHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Hotspot Toggle */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-gray-900">Udostępniasz internet z telefonu (Hotspot/Tethering)?</div>
                <div className="text-[11px] text-gray-500">Używanie telefonu jako routera dla laptopa lub tabletu</div>
              </div>
              <button
                type="button"
                onClick={() => setHotspotUsed(!hotspotUsed)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  hotspotUsed ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {hotspotUsed ? 'TAK' : 'NIE'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bez sprawdzania zdolności kredytowej</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Darmowe rozmowy i SMS-y w UK</span>
              </div>
            </div>

          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <span className="text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-3 py-1 rounded-full font-bold inline-block mb-4">
                {badge}
              </span>

              <div className="text-xs text-indigo-200">Szacowane zużycie:</div>
              <div className="text-3xl font-black font-display text-white mb-2">
                ok. {estimatedGb} GB <span className="text-xs font-normal text-indigo-300">/ mies.</span>
              </div>

              <div className="pt-3 border-t border-indigo-900/80 mb-4">
                <div className="text-xs text-indigo-200">Rekomendowany pakiet SIM:</div>
                <div className="text-xl font-bold text-amber-400 font-display">
                  {recommendedPlan}
                </div>
                <div className="text-xs text-gray-300 mt-1 font-mono">
                  Orientacyjny koszt: <strong>{priceRange}</strong>
                </div>
              </div>

              <p className="text-[11px] text-indigo-200/80 leading-relaxed font-sans">
                Współpracujemy z sieciami <strong>Smarty, iD Mobile, Three, giffgaff i Lycamobile</strong>, gwarantując najtańsze karty SIM w UK.
              </p>
            </div>

            <button
              onClick={handleCta}
              className="mt-6 w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Dobierz kartę SIM z doradcą</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
