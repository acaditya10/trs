import React, { useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../types.ts';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onPrev,
  onNext
}) => {
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onPrev, onNext]);

  // Touch Swipe for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        onNext(); // Swipe left -> Next photo
      } else {
        onPrev(); // Swipe right -> Previous photo
      }
    }
    touchStartX.current = null;
  };

  if (!photo) return null;

  return (
    <div
      id="lightbox-modal-backdrop"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A0A09]/95 backdrop-blur-md select-none"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-[#F2EEE7] z-20">
        <div className="flex flex-col text-left pr-4">
          <span className="font-serif text-base sm:text-xl font-light tracking-wide text-[#F2EEE7] line-clamp-1">
            {photo.title}
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] text-[#B49A78] flex items-center gap-1 mt-0.5">
            <MapPin size={11} />
            {photo.location}
          </span>
        </div>

        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#F2EEE7] hover:border-[#B49A78] hover:text-[#B49A78] bg-[#0A0A09]/60 transition-colors shrink-0"
          aria-label="Close lightbox"
        >
          <X size={18} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-w-5xl w-full max-h-[72vh] sm:max-h-[78vh] flex items-center justify-center px-2 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.image}
          alt={photo.title}
          className="max-w-full max-h-[70vh] sm:max-h-[76vh] object-contain shadow-2xl select-none"
        />
      </div>

      {/* Navigation Arrows (Touch targets 44px+) */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 hover:border-[#B49A78] bg-[#0A0A09]/70 backdrop-blur-xs flex items-center justify-center text-[#F2EEE7] hover:text-[#B49A78] transition-all cursor-pointer z-20 active:scale-95"
        aria-label="Previous photo"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 hover:border-[#B49A78] bg-[#0A0A09]/70 backdrop-blur-xs flex items-center justify-center text-[#F2EEE7] hover:text-[#B49A78] transition-all cursor-pointer z-20 active:scale-95"
        aria-label="Next photo"
      >
        <ArrowRight size={18} />
      </button>

      {/* Bottom Caption and Swipe indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-center text-[#77736D] text-[11px] sm:text-xs font-sans max-w-2xl mx-auto space-y-1">
        <p className="line-clamp-2">{photo.caption}</p>
        <p className="text-[9px] uppercase tracking-widest text-[#B49A78]/70 sm:hidden">
          Swipe left or right to browse photos
        </p>
      </div>
    </div>
  );
};
