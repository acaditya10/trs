import React, { useState } from 'react';
import { X, Check, MessageSquare, Send } from 'lucide-react';
import { EnquiryFormData } from '../types.ts';
import { Logo } from './Logo.tsx';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledService
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    partnerName: '',
    email: '',
    phone: '',
    weddingDate: '',
    weddingLocation: '',
    weddingType: 'Traditional Multi-Day',
    services: prefilledService ? [prefilledService] : ['Wedding Photography', 'Wedding Films'],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate booking reservation
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A0A09]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="enquiry-modal-container"
        className="relative w-full max-w-2xl bg-[#0A0A09] border border-white/15 p-5 sm:p-10 text-[#F2EEE7] my-auto max-h-[92vh] overflow-y-auto shadow-2xl rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="enquiry-modal-close"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-[#0A0A09]/70 border border-white/20 flex items-center justify-center text-[#F2EEE7] hover:border-[#B49A78] hover:text-[#B49A78] transition-colors active:scale-95"
          aria-label="Close modal"
        >
          <X size={17} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 sm:py-10 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#B49A78]/20 border border-[#B49A78] flex items-center justify-center text-[#B49A78]">
              <Check size={28} />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#B49A78]">
                Enquiry Received
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#F2EEE7] font-light">
                Thank You, {formData.fullName || 'Friends'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#77736D] max-w-md mx-auto leading-relaxed pt-2">
                We review every wedding celebration intimately to ensure our visual aesthetic matches
                your vision. Our studio director will reach out within 24 hours.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/919818033484?text=Hello%20The%20Ram%20Sham%20Production%2C%20this%20is%20${encodeURIComponent(
                  formData.fullName
                )}.%20We%20just%20submitted%20an%20enquiry%20for%20our%20wedding%20on%20${encodeURIComponent(
                  formData.weddingDate || 'upcoming date'
                )}%20in%20${encodeURIComponent(formData.weddingLocation || 'India')}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-[#25D366] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.2em] uppercase min-h-[46px]"
              >
                <MessageSquare size={15} />
                <span>Chat On WhatsApp</span>
              </a>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-4 border border-white/20 text-[#F2EEE7] font-sans text-xs tracking-[0.2em] uppercase hover:border-[#B49A78] hover:text-[#B49A78] transition-colors min-h-[46px]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 sm:mb-8 text-left">
              <Logo variant="light" size="sm" className="h-8 sm:h-9 w-auto mb-2" />
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#B49A78] block mb-1">
                Direct Studio Booking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F2EEE7] font-light tracking-[0.04em] uppercase">
                Begin Your Story
              </h2>
              <p className="font-sans text-xs text-[#77736D] mt-1">
                Delhi · India · Available Worldwide
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
              {/* Couple Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Riya Sharma"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    Partner's Name
                  </label>
                  <input
                    type="text"
                    value={formData.partnerName}
                    onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                    placeholder="e.g. Aarav Kapoor"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="riya@example.com"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    Wedding Date(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    placeholder="e.g. 14–16 November 2026"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                    City / Venue *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weddingLocation}
                    onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                    placeholder="e.g. Udaipur / New Delhi"
                    className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] px-3.5 py-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Services Multi-Select */}
              <div>
                <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-2">
                  Services Desired
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Wedding Photography',
                    'Wedding Films',
                    'Cinematic Teasers',
                    'Pre-Wedding Story',
                    'Drone & Aerials',
                    'Fine Art Albums'
                  ].map((service) => (
                    <label
                      key={service}
                      className={`flex items-center space-x-2 px-3 py-2.5 border text-xs cursor-pointer transition-all ${
                        formData.services.includes(service)
                          ? 'border-[#B49A78] bg-[#B49A78]/15 text-[#F2EEE7]'
                          : 'border-white/10 text-[#77736D] hover:border-white/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="hidden"
                      />
                      <span className="truncate">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-[#E8E2D8]/80 mb-1.5">
                  About Your Wedding & Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us a little about your ceremonies, guest count, vibe, or any questions..."
                  className="w-full bg-[#141412] border border-white/10 focus:border-[#B49A78] p-3 text-base sm:text-xs text-[#F2EEE7] outline-none transition-colors resize-none placeholder:text-[#555]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center space-x-3 py-4 bg-[#B49A78] hover:bg-[#F2EEE7] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-xl cursor-pointer min-h-[48px] active:scale-[0.99]"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
