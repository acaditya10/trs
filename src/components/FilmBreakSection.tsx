import React from 'react';
import { Play } from 'lucide-react';

interface FilmBreakSectionProps {
  onWatchFilm: () => void;
}

export const FilmBreakSection: React.FC<FilmBreakSectionProps> = ({ onWatchFilm }) => {
  return (
    <section
      id="film-break"
      className="relative w-full h-[65vh] min-h-[460px] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#0A0A09]"
    >
      {/* Background Cinematic Still */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85"
          alt="Cinematic Indian wedding couple beneath grand hanging floral canopy of starlight"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-105 scale-100 hover:scale-105 transition-transform duration-[12000ms] ease-out"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-[#0A0A09]/45 backdrop-brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-[#0A0A09]/70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Poetic Quote */}
        <blockquote className="mb-8 md:mb-10 max-w-3xl">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light text-[#F2EEE7] tracking-[0.05em] leading-[1.3] italic">
            “Some moments don't need direction.
            <br className="hidden sm:inline" /> They just need to be remembered.”
          </p>
        </blockquote>

        {/* Watch Film CTA with Circular Play Icon */}
        <button
          id="film-break-watch-btn"
          onClick={onWatchFilm}
          className="group inline-flex items-center space-x-4 text-xs md:text-sm font-sans tracking-[0.26em] uppercase text-[#F2EEE7] hover:text-[#B49A78] transition-all duration-300 cursor-pointer"
        >
          <span className="font-medium">Watch Our Film</span>
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#F2EEE7]/40 group-hover:border-[#B49A78] group-hover:bg-[#B49A78] text-[#F2EEE7] group-hover:text-[#0A0A09] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-lg">
            <Play size={15} className="ml-0.5 fill-current" />
          </div>
        </button>
      </div>
    </section>
  );
};
