import React from 'react';
import { X, ArrowRight, MapPin, Calendar, Camera } from 'lucide-react';
import { StoryItem } from '../types.ts';

interface StoryDetailModalProps {
  story: StoryItem | null;
  onClose: () => void;
  onEnquireForDate: () => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  story,
  onClose,
  onEnquireForDate
}) => {
  if (!story) return null;

  return (
    <div
      id="story-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0A0A09]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="story-modal-container"
        className="relative w-full max-w-4xl bg-[#0A0A09] border border-white/15 text-[#F2EEE7] my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="story-modal-close"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#0A0A09]/70 border border-white/20 flex items-center justify-center text-[#F2EEE7] hover:border-[#B49A78] hover:text-[#B49A78] transition-colors active:scale-95"
          aria-label="Close story"
        >
          <X size={17} />
        </button>

        {/* Hero banner */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#141412]">
          <img
            src={story.image}
            alt={story.couple}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 md:left-10 text-left">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B49A78] block mb-1">
              {story.category}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F2EEE7] tracking-[0.06em]">
              {story.couple}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#77736D] mt-2">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#B49A78]" />
                {story.venue} · {story.location}
              </span>
              {story.date && (
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#B49A78]" />
                  {story.date}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Narrative & Excerpt */}
        <div className="p-6 md:p-10 text-left space-y-6">
          {story.quote && (
            <blockquote className="border-l-2 border-[#B49A78] pl-4 py-1">
              <p className="font-serif text-lg md:text-xl text-[#F2EEE7]/90 italic font-light">
                “{story.quote}”
              </p>
            </blockquote>
          )}

          {story.description && (
            <p className="font-sans text-xs md:text-sm text-[#77736D] leading-relaxed">
              {story.description}
            </p>
          )}

          {/* Photo Gallery Grid */}
          {story.gallery && story.gallery.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-[10px] font-sans tracking-[0.24em] uppercase text-[#B49A78] mb-4">
                <Camera size={12} />
                <span>Selected Frames From This Wedding</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {story.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden bg-[#181816] border border-white/10 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${story.couple} moment ${i + 1}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <span className="text-[11px] font-sans text-[#77736D] tracking-wider">
              Documented on 35mm & Cinema Optics by The Ram Sham Production
            </span>
            <button
              onClick={() => {
                onClose();
                onEnquireForDate();
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B49A78] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F2EEE7] transition-colors"
            >
              <span>Enquire For Your Date</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
