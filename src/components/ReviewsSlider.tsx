/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
  color: string;
}

const reviewsList: Review[] = [
  {
    id: 'rev_1',
    name: 'Tomasz Nowicki',
    city: 'Londyn (Greenwich)',
    rating: 5,
    text: 'Szybko, konkretnie i co najważniejsze w 100% po polsku. Greg Helpline zmienił dla naszej rodziny dostawcę z British Gas na Octopus Energy na stałej taryfie. Oszczędzamy ponad £40 miesięcznie, a zmiana odbyła się bez żadnych przerw w dostawie prądu!',
    initials: 'TN',
    color: 'bg-[#0B1F3A] text-white'
  },
  {
    id: 'rev_2',
    name: 'Anna Kowalczyk',
    city: 'Manchester',
    rating: 5,
    text: 'Aż wstyd się przyznać, ale przez lata płaciliśmy astronomiczne rachunki za gaz, bo bałam się załatwiać to po angielsku przez telefon. Pan Grzegorz z Greg Helpline porównał oferty i zajął się całą dokumentacją. Usługa zupełnie darmowa. Gorąco polecam!',
    initials: 'AK',
    color: 'bg-amber-600 text-white'
  },
  {
    id: 'rev_3',
    name: 'Krzysztof Górski',
    city: 'Birmingham',
    rating: 5,
    text: 'Miałem ogromny bałagan w rachunkach po przeprowadzce do nowego domu w UK. Konsultant z Greg Helpline wytłumaczył mi wszystko po polsku, pomógł spisac liczniki i dobrał najtańszego dostawcę prądu. Prawdziwa ulga dla portfela.',
    initials: 'KG',
    color: 'bg-emerald-600 text-white'
  },
  {
    id: 'rev_4',
    name: 'Magdalena Wiśniewska',
    city: 'Southampton',
    rating: 5,
    text: 'Mój znajomy polecił mi Greg Helpline, kiedy narzekałam na rosnące ceny prądu. Zadzwonili, wyliczyli roczną oszczędność na poziomie £320 i przełączyli nas bez żadnych opłat. Świetny kontakt i rzetelna pomoc!',
    initials: 'MW',
    color: 'bg-indigo-600 text-white'
  },
  {
    id: 'rev_5',
    name: 'Paweł Zieliński',
    city: 'Leeds',
    rating: 5,
    text: 'Profesjonalne podejście "po sąsiedzku". Zero wciskana kitów, czysta analiza cyfr. Wybraliśmy taryfę E.ON Next z gwarancją stałej ceny na 12 miesięcy. Cały proces zajął dosłownie kilka minut rozmawiając po polsku.',
    initials: 'PZ',
    color: 'bg-amber-700 text-white'
  },
  {
    id: 'rev_6',
    name: 'Karolina Wójcik',
    city: 'Bristol',
    rating: 5,
    text: 'Najlepsza doradcza usługa dla Polaków w UK. Zero stresu, zero barier językowych, a w portfelu zostaje kilkaset funtów rocznie. Poleciłam już rodzinie i sąsiadom!',
    initials: 'KW',
    color: 'bg-teal-700 text-white'
  }
];

export default function ReviewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviewsList.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
  };

  // Autoplay functionality with easy hover pause
  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const currentReview = reviewsList[activeIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8" id="opinie-slider">
      {/* Background visual element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10" />

      {/* Main Review Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100/80 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
        {/* Quote watermark icon */}
        <div className="absolute top-4 right-6 text-gray-50 pointer-events-none select-none">
          <Quote className="w-24 h-24 rotate-180 text-blue-50/80" />
        </div>

        {/* Dynamic content transition */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="relative z-10 flex flex-col justify-between h-full"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed font-sans mb-8 font-normal">
              "{currentReview.text}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full font-display font-semibold ${currentReview.color} flex items-center justify-center text-sm shadow-md shrink-0 relative border border-white/20`}>
                {currentReview.initials}
                {/* UK flag badge indicator */}
                <span className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-xs border border-gray-100 text-[10px] leading-none">
                  🇬🇧
                </span>
              </div>
              <div>
                <cite className="not-italic font-display font-bold text-gray-900 text-sm block">
                  {currentReview.name}
                </cite>
                <span className="text-xs text-gray-400 font-medium">
                  {currentReview.city}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Elements */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100 relative z-20">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {reviewsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                aria-label={`Przejdź do opinii ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Button navigation */}
          <div className="flex gap-2">
            <button
              onClick={slidePrev}
              aria-label="Poprzednia opinia"
              className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              aria-label="Następna opinia"
              className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
