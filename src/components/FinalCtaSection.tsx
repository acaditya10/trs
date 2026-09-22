import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FinalCtaSectionProps {
  onStartEnquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onStartEnquiry }) => {
  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#0A0A09] text-[#F2EEE7] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Intimate Couple Facing Each Other */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#141412] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85"
                alt="Newlywed Indian bride and groom facing each other with deep warmth and emotion"
                className="w-full h-full object-cover object-[65%_30%] filter brightness-90 contrast-105 hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: CTA Headline & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Logo Emblem */}
            <div className="mb-4 sm:mb-6">
              <Logo variant="light" size="sm" className="h-9 sm:h-11 w-auto" />
            </div>

            <h2
              id="final-cta-heading"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-light tracking-[0.05em] leading-[1.1] uppercase text-[#F2EEE7] mb-4 sm:mb-6"
            >
              Your Story
              <br />
              Starts Here.
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-[#77736D] tracking-wide mb-8 sm:mb-10 max-w-md leading-relaxed">
              Tell us a little about your wedding. We would love to be there to capture every heartbeat,
              unscripted smile, and sacred ritual.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                id="final-cta-start-btn"
                onClick={onStartEnquiry}
                className="group inline-flex items-center justify-center space-x-3 px-7 py-4 bg-[#B49A78] hover:bg-[#F2EEE7] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer shadow-lg min-h-[48px] active:scale-[0.99]"
              >
                <span>Start An Enquiry</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href="https://wa.me/919818033484?text=Hello%20The%20Ram%20Sham%20Production%2C%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20discuss%20dates%20and%20coverage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-4 border border-white/20 hover:border-[#25D366] text-[#F2EEE7] hover:text-[#25D366] font-sans text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 min-h-[48px] active:bg-white/5"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
