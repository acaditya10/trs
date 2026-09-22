import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SELECTED_STORIES } from '../data/content.ts';
import { StoryItem } from '../types.ts';

interface StoriesSectionProps {
  onSelectStory: (story: StoryItem) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onSelectStory }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const nextIdx = activeStoryIndex === 0 ? SELECTED_STORIES.length - 1 : activeStoryIndex - 1;
    setActiveStoryIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeStoryIndex === SELECTED_STORIES.length - 1 ? 0 : activeStoryIndex + 1;
    setActiveStoryIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section
      id="stories"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#F2EEE7] text-[#0A0A09]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-5 sm:pb-6 border-b border-[#0A0A09]/10 gap-3">
          <div>
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#B49A78] font-semibold block mb-1">
              Real Weddings
            </span>
            <h2
              id="selected-stories-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] uppercase text-[#0A0A09]"
            >
              Selected Stories
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-8 mt-2 sm:mt-0">
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#77736D] font-medium">
              Real People. Authentic Love.
            </span>

            {/* Slider arrows with comfortable touch size */}
            <div className="flex items-center space-x-2">
              <button
                id="stories-prev-btn"
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center border border-[#0A0A09]/20 hover:border-[#0A0A09] active:bg-[#0A0A09] active:text-[#F2EEE7] text-[#0A0A09] hover:bg-[#0A0A09] hover:text-[#F2EEE7] transition-all duration-300 cursor-pointer"
                aria-label="Previous story"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                id="stories-next-btn"
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center border border-[#0A0A09]/20 hover:border-[#0A0A09] active:bg-[#0A0A09] active:text-[#F2EEE7] text-[#0A0A09] hover:bg-[#0A0A09] hover:text-[#F2EEE7] transition-all duration-300 cursor-pointer"
                aria-label="Next story"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Editorial Cards: Responsive Grid with horizontal touch-scroll option on mobile */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {SELECTED_STORIES.map((story) => (
            <article
              key={story.id}
              id={`story-card-${story.id}`}
              onClick={() => onSelectStory(story)}
              className="editorial-card group relative cursor-pointer overflow-hidden aspect-[3/4.2] sm:aspect-[3/4.2] bg-[#0A0A09] select-none shadow-md transition-all duration-500 hover:shadow-2xl active:scale-[0.99]"
            >
              {/* Image */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={story.image}
                  alt={`${story.couple} wedding chronicle at ${story.venue}`}
                  className="editorial-image-hover w-full h-full object-cover object-center filter brightness-[0.92] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay for Text Legibility on all mobile screens */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/95 via-[#0A0A09]/40 to-transparent transition-opacity duration-300" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-left z-10">
                <div className="flex items-end justify-between">
                  <div className="space-y-1 sm:space-y-1.5 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#B49A78] font-medium block">
                      {story.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-2xl lg:text-3xl text-[#F2EEE7] tracking-[0.06em] font-light">
                      {story.couple}
                    </h3>
                    <p className="font-sans text-[11px] lg:text-xs text-[#E8E2D8]/75 tracking-[0.16em]">
                      {story.venue}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-[#F2EEE7] group-hover:border-[#B49A78] group-hover:text-[#B49A78] group-hover:bg-[#B49A78]/10 group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-[10px] font-sans text-[#77736D] tracking-widest uppercase mt-4">
          Tap any story to view full ceremony gallery
        </p>
      </div>
    </section>
  );
};
