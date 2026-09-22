import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onEnquire }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0A0A09]/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="video-player-modal"
        className="relative w-full max-w-4xl bg-[#0A0A09] border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#0A0A09]/70 border border-white/20 flex items-center justify-center text-[#F2EEE7] hover:border-[#B49A78] hover:text-[#B49A78] transition-colors active:scale-95"
          aria-label="Close film"
        >
          <X size={17} />
        </button>

        {/* Cinematic Video Player Stage */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85"
            alt="Wedding Film Cinematic Starlight Reel"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-75'
            }`}
          />

          {/* Cinematic Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-black pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-4 md:h-6 bg-black pointer-events-none" />

          {/* Film Titles Overlay */}
          <div className="absolute top-8 left-8 text-left pointer-events-none">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#B49A78] block">
              Official Teaser 4K
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#F2EEE7] tracking-wider mt-1">
              Kabir & Meera — The Udaipur Symphony
            </h3>
          </div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-[#0A0A09]/70 border border-[#B49A78] flex items-center justify-center text-[#B49A78] hover:bg-[#B49A78] hover:text-[#0A0A09] transition-all hover:scale-110 shadow-2xl cursor-pointer"
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1 fill-current" />}
          </button>

          {/* Custom Video Controls Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#F2EEE7]/80 bg-[#0A0A09]/80 backdrop-blur-md px-4 py-2.5 border border-white/10">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#B49A78] transition-colors"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              </button>
              <span className="font-mono text-[11px] text-[#77736D]">
                {isPlaying ? '02:44' : '00:00'} / 04:30
              </span>
            </div>

            {/* Simulated Timeline bar */}
            <div className="hidden sm:block flex-1 mx-6 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B49A78] transition-all duration-300"
                style={{ width: isPlaying ? '62%' : '0%' }}
              />
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-[#B49A78] transition-colors"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <Maximize size={14} className="hover:text-[#B49A78] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Film Details & Booking */}
        <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div>
            <h4 className="font-serif text-lg text-[#F2EEE7]">
              Mastered in Anamorphic 4K · DaVinci Resolve Master Grade
            </h4>
            <p className="font-sans text-xs text-[#77736D] mt-1">
              Shot on location at Jagmandir Island Palace, Udaipur · Directed by The Ram Sham Production
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnquire();
            }}
            className="px-5 py-2.5 bg-[#B49A78] hover:bg-[#F2EEE7] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            Commission A Film
          </button>
        </div>
      </div>
    </div>
  );
};
