import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types.ts';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div
      id="service-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0A0A09]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-container"
        className="relative w-full max-w-2xl bg-[#0A0A09] border border-white/15 text-[#F2EEE7] my-8 shadow-2xl p-6 sm:p-10"
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
          <div className="flex items-center space-x-3">
            <span className="font-serif text-2xl text-[#B49A78] font-light">
              {service.number}
            </span>
            <div className="h-[1px] w-8 bg-[#B49A78]/50" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#77736D]">
              Studio Offering
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#F2EEE7] font-light uppercase tracking-wide whitespace-pre-line leading-tight">
            {service.title}
          </h2>

          <div className="aspect-[16/9] w-full overflow-hidden bg-[#181816] shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#77736D] leading-relaxed">
            {service.description}
          </p>

          <div className="pt-2">
            <h4 className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#B49A78] uppercase mb-3">
              Included Deliverables & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-[#E8E2D8]">
                  <CheckCircle size={14} className="text-[#B49A78] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[11px] font-sans text-[#77736D]">
              Custom tailored to single-day or multi-day destination itineraries
            </span>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title.replace('\n', ' '));
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B49A78] text-[#0A0A09] font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F2EEE7] transition-colors shrink-0"
            >
              <span>Enquire For This Service</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
