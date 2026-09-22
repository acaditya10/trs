import React from 'react';

export const CredibilitySection: React.FC = () => {
  return (
    <section
      id="credibility"
      className="relative w-full py-20 md:py-28 bg-[#F2EEE7] text-[#0A0A09] border-t border-[#0A0A09]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        {/* Small Eyebrow Label */}
        <span
          id="credibility-label"
          className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#77736D] font-medium block mb-10 sm:mb-12 md:mb-16"
        >
          Years Of Stories
        </span>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-0">
          {/* Metric 1 */}
          <div className="flex flex-col items-center justify-center md:border-r border-[#0A0A09]/10 px-6">
            <span
              id="stat-years-num"
              className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-light text-[#0A0A09] tracking-tight leading-none mb-3"
            >
              21<span className="font-light text-[#B49A78] text-4xl sm:text-5xl">+</span>
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.24em] uppercase text-[#77736D] font-medium">
              Years
            </span>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center justify-center md:border-r border-[#0A0A09]/10 px-6">
            <span
              id="stat-events-num"
              className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-light text-[#0A0A09] tracking-tight leading-none mb-3"
            >
              3,000<span className="font-light text-[#B49A78] text-4xl sm:text-5xl">+</span>
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.24em] uppercase text-[#77736D] font-medium">
              Events
            </span>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center justify-center px-6">
            <span
              id="stat-coverage-title"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.6rem] font-light text-[#0A0A09] tracking-[0.06em] uppercase leading-tight mb-3"
            >
              India + Worldwide
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.24em] uppercase text-[#77736D] font-medium">
              Destination Coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
