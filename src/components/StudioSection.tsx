import React from 'react';
import { ArrowRight, Award, Camera, HeartHandshake } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface StudioSectionProps {
  onMeetTeam: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ onMeetTeam }) => {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#F2EEE7] text-[#0A0A09] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: B&W Team Photograph */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[5/3.8] bg-[#0A0A09] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="The Ram Sham Production team of professional wedding photographers and cinematographers with cameras"
                className="w-full h-full object-cover object-center filter grayscale contrast-115 hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              {/* Subtle inner border frame */}
              <div className="absolute inset-0 border border-[#0A0A09]/10 pointer-events-none" />

              {/* Mobile badge */}
              <div className="absolute bottom-3 left-3 bg-[#0A0A09]/90 backdrop-blur-sm px-3 py-1.5 border border-white/10 sm:hidden">
                <span className="font-sans text-[9px] tracking-[0.2em] text-[#B49A78] uppercase">
                  Est. 2005 · New Delhi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Narrative & Editorial Script */}
          <div className="lg:col-span-6 relative flex flex-col justify-center text-left">
            {/* Small Label & Logo */}
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <Logo variant="dark" size="sm" className="h-8 sm:h-9 w-auto" />
              <div className="h-[1px] w-6 bg-[#B49A78]" />
              <span
                id="studio-label"
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#77736D] font-medium"
              >
                The Studio
              </span>
            </div>

            {/* Main Heading */}
            <h2
              id="studio-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-[0.05em] leading-[1.12] uppercase text-[#0A0A09] mb-4 sm:mb-6"
            >
              People. Places.
              <br />
              Moments.
            </h2>

            {/* Body Narrative */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#77736D] leading-[1.8] font-normal max-w-xl mb-6 sm:mb-8">
              We document weddings as they unfold — the quiet moments, the chaos, the laughter
              and everything in between. For us, it's not just about photography or film,
              it's about people and their stories.
            </p>

            {/* Key Pillars on Mobile */}
            <div className="grid grid-cols-2 gap-3 mb-7 pb-6 border-b border-[#0A0A09]/10">
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-sans text-[#0A0A09]">
                <Camera size={14} className="text-[#B49A78] shrink-0" />
                <span>35mm & Medium Format</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-sans text-[#0A0A09]">
                <Award size={14} className="text-[#B49A78] shrink-0" />
                <span>21+ Years of Heritage</span>
              </div>
            </div>

            {/* Meet The Team CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="studio-meet-team-btn"
                onClick={onMeetTeam}
                className="group inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#0A0A09] hover:bg-[#0A0A09] hover:text-[#F2EEE7] text-[#0A0A09] font-sans text-xs tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer min-h-[44px] w-full sm:w-auto active:bg-[#0A0A09] active:text-[#F2EEE7]"
              >
                <span>Meet The Team</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <span className="font-script text-2xl sm:text-3xl text-[#B49A78] transform -rotate-3 pl-1 sm:pl-4">
                More than just weddings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
