import React from 'react';
import { Download, Users, Info, Scale, Calculator, ExternalLink } from 'lucide-react';
import { ALL_GUIDES_LIBRARY } from '../data/guidesData';

const EXTERNAL_GUIDES = [
  { title: 'Pomoc prawna w UK', description: 'Kiedy szukać pomocy, prawo pracy, najem i sprawy imigracyjne.', href: 'https://www.greghelpline.com/prawnik', icon: Scale, accent: { badgeBg: 'bg-slate-100', badgeText: 'text-slate-700' } },
  { title: 'Księgowość w UK', description: 'Sole trader czy Ltd, Self Assessment, VAT, faktury i wydatki.', href: 'https://www.greghelpline.com/ksiegowosc', icon: Calculator, accent: { badgeBg: 'bg-slate-100', badgeText: 'text-slate-700' } },
];

export default function GuidesLibraryPage() {
  return (
    <div className="bg-white min-h-screen py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">Biblioteka poradników</div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0B1F3A] tracking-tight">7 bezpłatnych poradników dla Polaków w UK</h1>
          <p className="text-sm text-gray-600">Internet, energia, ubezpieczenia, wakacje, pomoc prawna, księgowość i pierwsze kroki w UK — wszystko w jednym miejscu, do pobrania bez żadnych zobowiązań.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_GUIDES_LIBRARY.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full flex flex-col justify-between space-y-4 hover:border-gray-300 transition-colors">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                    <Icon className={`w-7 h-7 ${guide.accent.badgeText}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0B1F3A]">{guide.title}</h3>
                  <p className="text-xs text-gray-500">{guide.description}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                    <Users className="w-3.5 h-3.5" />
                    <span>Ponad {guide.downloads.toLocaleString('pl-PL')} pobrań</span>
                  </div>
                </div>
                <a href={guide.pdfPath} target="_blank" rel="noopener noreferrer" className={`w-full ${guide.accent.button} ${guide.accent.buttonHover} text-white font-sans font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer`}>
                  <Download className="w-3.5 h-3.5" />
                  <span>Pobierz PDF</span>
                </a>
              </div>
            );
          })}
          {EXTERNAL_GUIDES.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.title} className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                    <Icon className={`w-7 h-7 ${guide.accent.badgeText}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0B1F3A]">{guide.title}</h3>
                  <p className="text-xs text-gray-500">{guide.description}</p>
                  <p className="text-[11px] text-gray-400">Dostępny na greghelpline.com</p>
                </div>
                <a href={guide.href} target="_blank" rel="noopener noreferrer" className="w-full bg-[#0B1F3A] hover:bg-black text-white font-sans font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Przejdź na greghelpline.com</span>
                </a>
              </div>
            );
          })}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-500 leading-relaxed">Wszystkie poradniki mają charakter ogólnoinformacyjny i są bezpłatnym prezentem dla klientów GregHelpline. Nie zastępują indywidualnej porady — przed podjęciem decyzji skonsultuj się z bezpłatnym polskim doradcą (tel: 07491 978400).</p>
        </div>
      </div>
    </div>
  );
}
