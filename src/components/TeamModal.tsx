import React from 'react';
import { X, Award, ShieldCheck, Heart } from 'lucide-react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, onEnquire }) => {
  if (!isOpen) return null;

  return (
    <div
      id="team-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0A0A09]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="team-modal-container"
        className="relative w-full max-w-3xl bg-[#0A0A09] border border-white/15 text-[#F2EEE7] my-8 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#F2EEE7] hover:border-[#B49A78] hover:text-[#B49A78] transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        <div className="text-left space-y-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-[#B49A78] block mb-1">
              About The Ram Sham Production
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F2EEE7] font-light uppercase tracking-wide">
              The People Behind The Lens
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#77736D] mt-2 leading-relaxed">
              Established in Delhi, The Ram Sham Production is an elite collective of visual storytellers,
              cinematographers, and editorial colorists dedicated exclusively to authentic Indian wedding chronicles.
            </p>
          </div>

          {/* Philosophy Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 bg-[#141412] border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B49A78]/20 flex items-center justify-center text-[#B49A78]">
                <Heart size={16} />
              </div>
              <h4 className="font-serif text-lg text-[#F2EEE7]">Pure Authenticity</h4>
              <p className="font-sans text-xs text-[#77736D] leading-relaxed">
                Zero stiff poses or artificial scripting. We record real smiles, unforced family glances, and sacred ritual dignity.
              </p>
            </div>

            <div className="p-4 bg-[#141412] border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B49A78]/20 flex items-center justify-center text-[#B49A78]">
                <Award size={16} />
              </div>
              <h4 className="font-serif text-lg text-[#F2EEE7]">Fine-Art Precision</h4>
              <p className="font-sans text-xs text-[#77736D] leading-relaxed">
                35mm full frame & medium format portraiture paired with cinema prime optics and bespoke heirloom printing.
              </p>
            </div>

            <div className="p-4 bg-[#141412] border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B49A78]/20 flex items-center justify-center text-[#B49A78]">
                <ShieldCheck size={16} />
              </div>
              <h4 className="font-serif text-lg text-[#F2EEE7]">21+ Years Heritage</h4>
              <p className="font-sans text-xs text-[#77736D] leading-relaxed">
                Over three thousand celebrations documented across India, Udaipur, Jaipur, Goa, Europe, and the Middle East.
              </p>
            </div>
          </div>

          {/* Studio Location & Booking */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-sans text-xs text-[#E8E2D8]">
                Studio: Defence Colony & Aerocity, New Delhi, India
              </p>
              <p className="font-sans text-[11px] text-[#77736D]">
                Consultations by appointment only for upcoming wedding seasons.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="px-6 py-3 bg-[#B49A78] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F2EEE7] transition-colors shrink-0"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
