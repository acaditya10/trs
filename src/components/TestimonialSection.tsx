import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content.ts';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#0A0A09] text-[#F2EEE7] border-t border-white/5 select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Intimate Bridal Portrait */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#141412] shadow-2xl">
              <img
                key={currentTestimonial.id}
                src={currentTestimonial.image}
                alt={`Wedding portrait for ${currentTestimonial.couple}`}
                className="w-full h-full object-cover object-[50%_30%] filter brightness-90 contrast-105 animate-fade-in transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/60 via-transparent to-transparent pointer-events-none" />

              {/* Mobile Quote Icon Overlay */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#0A0A09]/80 backdrop-blur-sm flex items-center justify-center text-[#B49A78] sm:hidden">
                <Quote size={14} />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Quote & Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left h-full py-1">
            <div>
              {/* Small Label */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span
                  id="testimonial-label"
                  className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#77736D] font-medium block"
                >
                  Words From Couples
                </span>
                <span className="sm:hidden font-sans text-[11px] tracking-[0.2em] text-[#B49A78]">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
              </div>

              {/* Large Serif Quote */}
              <blockquote className="mb-5 sm:mb-8">
                <p
                  id="testimonial-quote-text"
                  className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] font-light leading-[1.35] text-[#F2EEE7] tracking-[0.02em] italic"
                >
                  “{currentTestimonial.quote.replace(/[“”]/g, '')}”
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="border-l-2 border-[#B49A78] pl-3 py-0.5">
                <p
                  id="testimonial-author"
                  className="font-sans text-xs sm:text-sm text-[#F2EEE7] tracking-[0.16em] uppercase font-semibold"
                >
                  {currentTestimonial.couple}
                </p>
                <p className="font-sans text-[11px] text-[#B49A78] tracking-wider mt-0.5">
                  {currentTestimonial.location}
                </p>
              </div>
            </div>

            {/* Bottom-right Counter & Touch Arrows */}
            <div className="flex items-center justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
              <span className="hidden sm:inline font-sans text-xs tracking-[0.24em] text-[#77736D]">
                0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
              </span>

              <span className="sm:hidden text-[10px] text-[#77736D] uppercase tracking-wider">
                Swipe to read more
              </span>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  id="testimonial-prev-arrow"
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 active:bg-white/10 hover:border-[#B49A78] hover:text-[#B49A78] text-[#F2EEE7] transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  id="testimonial-next-arrow"
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 active:bg-white/10 hover:border-[#B49A78] hover:text-[#B49A78] text-[#F2EEE7] transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
