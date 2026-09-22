import React from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { MASONRY_PHOTOS } from '../data/content.ts';
import { GalleryPhoto } from '../types.ts';

interface MasonryGridSectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
  onViewFullPortfolio: () => void;
}

export const MasonryGridSection: React.FC<MasonryGridSectionProps> = ({
  onPhotoClick,
  onViewFullPortfolio
}) => {
  return (
    <section
      id="from-the-stories"
      className="relative w-full py-24 md:py-32 bg-[#F2EEE7] text-[#0A0A09]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-5 sm:pb-6 border-b border-[#0A0A09]/10 gap-3">
          <h2
            id="from-the-stories-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.08em] uppercase text-[#0A0A09]"
          >
            From The Stories
          </h2>

          <button
            id="stories-view-full-portfolio-btn"
            onClick={onViewFullPortfolio}
            className="group inline-flex items-center space-x-2 text-[11px] md:text-xs font-sans tracking-[0.24em] uppercase text-[#0A0A09] hover:text-[#B49A78] transition-colors cursor-pointer"
          >
            <span>View Full Portfolio</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Asymmetrical Editorial Magazine Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5">
          {/* Column 1 (Left): 2 stacked images (Span 3 on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Image A: Extreme close-up bridal portrait */}
            <div
              id="photo-masonry-a"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[0])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/3.8] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[0].image}
                alt={MASONRY_PHOTOS[0].title}
                className="w-full h-full object-cover object-[50%_35%] filter brightness-95 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[0].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>

            {/* Image F: Candid Smiling Bride */}
            <div
              id="photo-masonry-f"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[5])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/2.4] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[5].image}
                alt={MASONRY_PHOTOS[5].title}
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[5].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Column 2: B&W couple & Mandap (Span 3 on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Image B: B&W intimate couple portrait */}
            <div
              id="photo-masonry-b"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[1])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/2.5] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[1].image}
                alt={MASONRY_PHOTOS[1].title}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[1].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>

            {/* Image I: Mandap floral night starlight */}
            <div
              id="photo-masonry-i"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[8])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/3.7] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[8].image}
                alt={MASONRY_PHOTOS[8].title}
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[8].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Column 3 (Center-Right): Split row + Wide Sunset fort (Span 3.5 on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Top row split: Image C (Aisle) & Image D (Baraat) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 aspect-[3/2.2]">
              <div
                id="photo-masonry-c"
                onClick={() => onPhotoClick(MASONRY_PHOTOS[2])}
                className="group relative cursor-pointer overflow-hidden bg-[#0A0A09]"
              >
                <img
                  src={MASONRY_PHOTOS[2].image}
                  alt={MASONRY_PHOTOS[2].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div
                id="photo-masonry-d"
                onClick={() => onPhotoClick(MASONRY_PHOTOS[3])}
                className="group relative cursor-pointer overflow-hidden bg-[#0A0A09]"
              >
                <img
                  src={MASONRY_PHOTOS[3].image}
                  alt={MASONRY_PHOTOS[3].title}
                  className="w-full h-full object-cover object-[50%_25%] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom: Image G (Heritage Sunset Fort Silhouette - Wide) */}
            <div
              id="photo-masonry-g"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[6])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/2.4] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[6].image}
                alt={MASONRY_PHOTOS[6].title}
                className="w-full h-full object-cover object-[50%_40%] group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[6].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Column 4 (Right): Reception dance & Emotional bride (Span 2.5 on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Image E: Sangeet Symphony / Reception */}
            <div
              id="photo-masonry-e"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[4])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/2.2] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[4].image}
                alt={MASONRY_PHOTOS[4].title}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-base tracking-wider">
                  {MASONRY_PHOTOS[4].title}
                </span>
              </div>
            </div>

            {/* Image H: Emotional B&W Bridal moment */}
            <div
              id="photo-masonry-h"
              onClick={() => onPhotoClick(MASONRY_PHOTOS[7])}
              className="group relative cursor-pointer overflow-hidden aspect-[3/3.7] bg-[#0A0A09] shadow-sm"
            >
              <img
                src={MASONRY_PHOTOS[7].image}
                alt={MASONRY_PHOTOS[7].title}
                className="w-full h-full object-cover object-[50%_25%] filter grayscale contrast-110 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <span className="text-[#F2EEE7] font-serif text-sm sm:text-lg tracking-wider">
                  {MASONRY_PHOTOS[7].title}
                </span>
                <Maximize2 size={14} className="text-[#B49A78] ml-auto hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
