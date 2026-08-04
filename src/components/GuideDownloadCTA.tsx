import React from 'react';
import { Download, Users } from 'lucide-react';
import { ServiceType } from '../types';
import { GUIDES_BY_SERVICE, GuideMeta } from '../data/guidesData';

interface GuideDownloadCTAProps {
  service?: ServiceType;
  guide?: GuideMeta;
}

export default function GuideDownloadCTA({ service, guide: guideProp }: GuideDownloadCTAProps) {
  const guide = guideProp ?? (service ? GUIDES_BY_SERVICE[service] : undefined);
  if (!guide) return null;
  const Icon = guide.icon;

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="shrink-0 w-16 h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <Icon className={`w-8 h-8 ${guide.accent.badgeText}`} />
          </div>
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${guide.accent.badgeBg} ${guide.accent.badgeBorder} border ${guide.accent.badgeText} text-xs font-bold uppercase tracking-wider`}>
              Bezpłatny poradnik PDF
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#0B1F3A]">{guide.title}</h3>
            <p className="text-sm text-gray-600">{guide.description}</p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-400 text-xs pt-1">
              <Users className="w-3.5 h-3.5" />
              <span>Ponad {guide.downloads.toLocaleString('pl-PL')} pobrań</span>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto flex flex-col items-center gap-2">
            <a href={guide.pdfPath} target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto ${guide.accent.button} ${guide.accent.buttonHover} text-white font-sans font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer`}>
              <Download className="w-4 h-4" />
              <span>Pobierz bezpłatny PDF</span>
            </a>
            <p className="text-[10px] text-gray-400 text-center">Materiał ma charakter informacyjny</p>
          </div>
        </div>
      </div>
    </section>
  );
}
