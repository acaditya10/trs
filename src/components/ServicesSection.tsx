import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { SERVICES_LIST } from '../data/content.ts';
import { ServiceItem } from '../types.ts';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAllServices
}) => {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#0A0A09] text-[#F2EEE7]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-5 sm:pb-6 border-b border-white/10">
          <div>
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#B49A78] font-semibold block mb-1">
              What We Do
            </span>
            <h2
              id="services-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] uppercase text-[#F2EEE7]"
            >
              Our Craft
            </h2>
          </div>

          <button
            id="services-view-all-btn"
            onClick={onViewAllServices}
            className="group inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase text-[#B49A78] hover:text-[#F2EEE7] transition-colors cursor-pointer py-1"
          >
            <span>All Services</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* 6 Service Blocks Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-item-${service.id}`}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer flex flex-col select-none p-2 sm:p-0 rounded-sm active:bg-white/[0.03] transition-colors"
            >
              {/* Number Label */}
              <div className="mb-2 sm:mb-3 text-left flex items-center justify-between">
                <span className="font-serif text-base sm:text-lg md:text-xl text-[#F2EEE7]/80 group-hover:text-[#B49A78] transition-colors duration-300">
                  {service.number}
                </span>
                <span className="text-[10px] font-sans text-[#77736D] uppercase sm:hidden group-hover:text-[#B49A78]">
                  Explore
                </span>
              </div>

              {/* Photographic Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181816] mb-3 sm:mb-4 shadow-md border border-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Video Play badge on Film services */}
                {(service.title.includes('Film') || service.title.includes('Cinematic')) && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0A0A09]/80 backdrop-blur-sm flex items-center justify-center text-[#B49A78]">
                    <Play size={9} fill="#B49A78" />
                  </div>
                )}
              </div>

              {/* Service Title */}
              <div className="text-left mt-auto">
                <h3 className="font-serif text-xs sm:text-sm md:text-base font-normal uppercase tracking-wide text-[#F2EEE7] group-hover:text-[#B49A78] transition-colors duration-300 line-clamp-2">
                  {service.title.replace('\n', ' ')}
                </h3>
                <span className="inline-flex items-center space-x-1 text-[10px] sm:text-[11px] font-sans tracking-[0.16em] uppercase text-[#77736D] mt-1 group-hover:text-[#F2EEE7] transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
