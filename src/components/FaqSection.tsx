import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items?: FaqItem[];
}

const defaultFaqList: FaqItem[] = [
  {
    question: "Czy usługa Greg Helpline jest całkowicie darmowa?",
    answer: "Tak, nasza pomoc dla Polaków w UK jest w 100% bezpłatna! Nie pobieramy od Ciebie żadnych opłat ani prowizji. Firma utrzymuje się z prowizji partnerskich wypłacanych bezpośrednio przez licencjonowanych dostawców energii, internetu, telefonii i ubezpieczycieli w UK."
  },
  {
    question: "Czy cała obsługa i pomoc odbywa się po polsku?",
    answer: "Oczywiście! Wszystkie formalności, porównanie ofert, wypełnienie formularzy i rozmowy z konsultantem odbywają się w języku polskim. Zapomnij o barierze językowej i trudnych brytyjskich infoliniach."
  },
  {
    question: "Czy podczas zmiany dostawcy prądu, gazu lub internetu grozi mi przerwa w usłudze?",
    answer: "Absolutnie NIE. Prąd, gaz oraz sygnał światłowodowy płyną tymi samymi kablami i łączami. Zmiana dostawcy w UK to proces czysto administracyjny — płynność dostaw i łączności jest w 100% zachowana."
  },
  {
    question: "Jak działa kontakt z polskim doradcą Greg Helpline?",
    answer: "Wypełniasz krótki, 1-minutowy formularz na stronie lub dzwonisz bezpośrednio pod numer 07491 978400. Mówimy, jakie dokumenty lub dane są potrzebne, dobieramy najtańszą taryfę na rynku i załatwiamy całą zmianę za Ciebie."
  }
];

export default function FaqSection({ items = defaultFaqList }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4" id="faq-sekcja">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-blue-200 shadow-md shadow-blue-500/5'
                : 'border-gray-100/90 hover:border-gray-200 hover:shadow-xs'
            }`}
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full px-6 py-5 flex justify-between items-center text-left font-display font-bold text-gray-900 transition-colors duration-200 focus:outline-hidden hover:text-blue-600 gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base flex items-start gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`} />
                {item.question}
              </span>
              <span className={`p-1.5 rounded-lg shrink-0 transition-colors duration-200 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 pt-1 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-50 font-sans">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
