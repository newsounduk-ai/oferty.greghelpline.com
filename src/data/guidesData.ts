import { ServiceType } from '../types';
import { Wifi, Zap, ShieldCheck, Palmtree, LucideIcon, Lock, Scale } from 'lucide-react';

export interface GuideMeta {
  title: string;
  description: string;
  pdfPath: string;
  icon: LucideIcon;
  downloads: number;
  accent: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    button: string;
    buttonHover: string;
  };
}

export const GUIDES_BY_SERVICE: Record<ServiceType, GuideMeta> = {
  internet: {
    title: 'Internet i SIM w UK',
    description: 'Internet domowy, mobilny/SIM, przenoszenie numeru (PAC), telefony na abonament.',
    pdfPath: '/guides/Internet_i_SIM_w_UK_GregHelpline.pdf',
    icon: Wifi,
    downloads: 890,
    accent: { badgeBg: 'bg-blue-50', badgeText: 'text-blue-700', badgeBorder: 'border-blue-200', button: 'bg-blue-600', buttonHover: 'hover:bg-blue-700' },
  },
  energia: {
    title: 'Energia w UK',
    description: 'Rynek energii, taryfy, liczniki i zmiana dostawcy krok po kroku.',
    pdfPath: '/guides/Energia_w_UK_GregHelpline.pdf',
    icon: Zap,
    downloads: 705,
    accent: { badgeBg: 'bg-amber-50', badgeText: 'text-amber-800', badgeBorder: 'border-amber-200', button: 'bg-amber-500', buttonHover: 'hover:bg-amber-600' },
  },
  sim: {
    title: 'Internet i SIM w UK',
    description: 'Internet domowy, mobilny/SIM, przenoszenie numeru (PAC), telefony na abonament.',
    pdfPath: '/guides/Internet_i_SIM_w_UK_GregHelpline.pdf',
    icon: Wifi,
    downloads: 890,
    accent: { badgeBg: 'bg-indigo-50', badgeText: 'text-indigo-700', badgeBorder: 'border-indigo-200', button: 'bg-indigo-600', buttonHover: 'hover:bg-indigo-700' },
  },
  ubezpieczenia: {
    title: 'Ubezpieczenia w UK',
    description: 'Dom, życie, samochód i podróż — przegląd najważniejszych typów ubezpieczeń.',
    pdfPath: '/guides/Ubezpieczenia_w_UK_GregHelpline.pdf',
    icon: ShieldCheck,
    downloads: 512,
    accent: { badgeBg: 'bg-emerald-50', badgeText: 'text-emerald-800', badgeBorder: 'border-emerald-200', button: 'bg-emerald-600', buttonHover: 'hover:bg-emerald-700' },
  },
  wakacje: {
    title: 'Wakacje i podróże',
    description: 'Planowanie wyjazdu, dokumenty podróżne, bagaż i tanie linie, ubezpieczenie podróżne.',
    pdfPath: '/guides/Wakacje_i_Podroze_GregHelpline.pdf',
    icon: Palmtree,
    downloads: 468,
    accent: { badgeBg: 'bg-teal-50', badgeText: 'text-teal-800', badgeBorder: 'border-teal-200', button: 'bg-teal-600', buttonHover: 'hover:bg-teal-700' },
  },
  vpn: {
    title: 'VPN i Bezpieczeństwo w UK',
    description: 'Ochrona prywatności, polskie serwisy VOD za granicą i szyfrowanie połączenia.',
    pdfPath: '/guides/Pierwsze_kroki_w_UK_GregHelpline.pdf',
    icon: Lock,
    downloads: 320,
    accent: { badgeBg: 'bg-slate-100', badgeText: 'text-slate-900', badgeBorder: 'border-slate-300', button: 'bg-slate-900', buttonHover: 'hover:bg-black' },
  },
  prawo: {
    title: 'Prawo i Pomoc Urzędowa',
    description: 'Odszkodowania, prawo pracy, zasiłki, pomoc w zadłużeniach i tłumaczenia.',
    pdfPath: '/guides/Pierwsze_kroki_w_UK_GregHelpline.pdf',
    icon: Scale,
    downloads: 410,
    accent: { badgeBg: 'bg-indigo-50', badgeText: 'text-indigo-900', badgeBorder: 'border-indigo-200', button: 'bg-[#0B1F3A]', buttonHover: 'hover:bg-black' },
  },
};

export const GENERAL_GUIDE: GuideMeta = {
  title: 'Pierwsze kroki w UK',
  description: 'Formalności na start, zakwaterowanie, praca i podatki, codzienne życie — dla nowoprzybyłych.',
  pdfPath: '/guides/Pierwsze_kroki_w_UK_GregHelpline.pdf',
  icon: ShieldCheck,
  downloads: 640,
  accent: { badgeBg: 'bg-gray-100', badgeText: 'text-[#0B1F3A]', badgeBorder: 'border-gray-300', button: 'bg-[#0B1F3A]', buttonHover: 'hover:bg-black' },
};

export const ALL_GUIDES_LIBRARY = [
  { ...GENERAL_GUIDE, external: false as const },
  { ...GUIDES_BY_SERVICE.internet, external: false as const },
  { ...GUIDES_BY_SERVICE.energia, external: false as const },
  { ...GUIDES_BY_SERVICE.ubezpieczenia, external: false as const },
  { ...GUIDES_BY_SERVICE.wakacje, external: false as const },
];

export function serviceFromPath(pathname: string): ServiceType | null {
  if (pathname.startsWith('/internet')) return 'internet';
  if (pathname.startsWith('/energia')) return 'energia';
  if (pathname.startsWith('/sim')) return 'sim';
  if (pathname.startsWith('/ubezpieczenia')) return 'ubezpieczenia';
  if (pathname.startsWith('/wakacje')) return 'wakacje';
  if (pathname.startsWith('/vpn')) return 'vpn';
  if (pathname.startsWith('/prawo')) return 'prawo';
  return null;
}
