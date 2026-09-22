import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content.ts';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onViewStories: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onViewStories }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const touchStartX = useRef<number | null>(null);

  // Auto-advance hero slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swipe Left -> Next slide
        setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      } else {
        // Swipe Right -> Prev slide
        setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[100svh] h-[100svh] flex items-center justify-between overflow-hidden bg-[#0A0A09]"
    >
      {/* Background Wedding Photograph with Smooth Transitions */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-[70%_25%] md:object-[65%_30%] scale-100 transition-transform duration-[10000ms] ease-out will-change-transform"
            style={{
              transform: idx === currentSlideIndex ? 'scale(1.04)' : 'scale(1.0)',
            }}
          />
          {/* Subtle cinematic editorial dark gradient overlays for guaranteed text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A09] via-[#0A0A09]/80 sm:via-[#0A0A09]/65 md:via-[#0A0A09]/55 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/30 to-[#0A0A09]/60 z-10" />
          <div className="absolute inset-0 bg-[#0A0A09]/20 z-10" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-20 pb-12 sm:pb-16 flex flex-col justify-between h-full">
        {/* Top Spacer */}
        <div className="hidden md:block h-6" />

        {/* Center-Left Content Area */}
        <div className="max-w-2xl my-auto text-left py-4">
          {/* Eyebrow */}
          <div className="overflow-hidden mb-3 sm:mb-4 md:mb-6">
            <span
              id="hero-eyebrow"
              className="inline-block font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B49A78] font-semibold"
            >
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1
              id="hero-main-title"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-light text-[#F2EEE7] tracking-[0.04em] sm:tracking-[0.06em] leading-[1.08] sm:leading-[1.02] uppercase"
            >
              <span className="block">{currentSlide.titleLine1}</span>
              <span className="block text-[#F2EEE7]/95 tracking-[0.05em] font-light mt-1">
                {currentSlide.titleLine2}
              </span>
            </h1>
          </div>

          {/* Subtitle & Metadata */}
          <div className="mb-6 sm:mb-8 md:mb-10 text-[#E8E2D8]/85 font-sans text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.16em] leading-relaxed space-y-1">
            <p>{currentSlide.subtitleLine1}</p>
            <p className="text-[#B49A78]/95 font-light">{currentSlide.subtitleLine2}</p>
          </div>

          {/* Action CTAs: Full touch targets on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-1">
            <button
              id="hero-view-stories-btn"
              onClick={onViewStories}
              className="group inline-flex items-center justify-center space-x-3 px-6 py-3.5 sm:py-4 bg-[#F2EEE7] hover:bg-[#B49A78] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-xl cursor-pointer min-h-[46px] active:scale-[0.98]"
            >
              <span>View Stories</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              id="hero-enquire-btn"
              onClick={onOpenEnquiry}
              className="group inline-flex items-center justify-center space-x-3 px-6 py-3.5 sm:py-4 border border-[#F2EEE7]/50 hover:border-[#B49A78] text-[#F2EEE7] hover:text-[#B49A78] font-sans text-xs font-medium tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer min-h-[46px] active:bg-white/5"
            >
              <span>Enquire</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Bottom Pagination & Mobile Touch Controls */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 sm:pt-6">
          {/* Bottom Left Pagination: 01 — 02  03 with Prev/Next chevron buttons for mobile */}
          <div id="hero-pagination" className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:hidden mr-1">
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="w-7 h-7 rounded border border-white/20 flex items-center justify-center text-white/80 active:bg-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="w-7 h-7 rounded border border-white/20 flex items-center justify-center text-white/80 active:bg-white/10"
                aria-label="Next slide"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`font-sans text-[11px] sm:text-xs tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center space-x-2 py-2 ${
                  idx === currentSlideIndex
                    ? 'text-[#F2EEE7] font-semibold scale-105'
                    : 'text-[#77736D] hover:text-[#E8E2D8]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span>0{idx + 1}</span>
                {idx < HERO_SLIDES.length - 1 && (
                  <span className="text-[#77736D]/60 select-none pl-1 sm:pl-2">—</span>
                )}
              </button>
            ))}
          </div>

          {/* Bottom Right Scroll Indicator */}
          <a
            href="#stories"
            id="hero-scroll-discover"
            className="group flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans tracking-[0.24em] text-[#77736D] hover:text-[#B49A78] uppercase transition-colors duration-300 cursor-pointer py-2"
          >
            <span className="hidden sm:inline">Scroll To Discover</span>
            <span className="sm:hidden">Explore</span>
            <ChevronDown
              size={13}
              className="animate-bounce text-[#B49A78]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
