import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#0A0A09] text-[#F2EEE7] pt-16 sm:pt-20 pb-12 border-t border-white/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Left with Logo */}
          <div className="flex flex-col items-start text-left">
            <Logo variant="light" size="md" className="h-11 sm:h-14 w-auto mb-2" />
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#77736D]">
              Fine-Art Indian Wedding Chronicles & Cinema
            </p>
          </div>

          {/* Center Motto */}
          <div className="text-left md:text-center">
            <p className="font-serif text-lg sm:text-xl text-[#F2EEE7] font-light">
              Weddings Today. Memories Forever.
            </p>
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-[#B49A78] uppercase mt-1">
              Documenting Love Across Continents
            </p>
          </div>

          {/* Right Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-sans tracking-[0.22em] text-[#77736D] uppercase">
            <a
              id="footer-instagram"
              href="https://www.instagram.com/theramsham_production/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#B49A78] transition-colors py-1"
            >
              <Instagram size={14} className="text-[#B49A78]" />
              <span>Instagram</span>
            </a>
            <span className="text-white/20 hidden sm:inline">·</span>
            <a
              id="footer-whatsapp"
              href="https://wa.me/919876543210?text=Hello%20The%20Ram%20Sham%20Production%2C%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20discuss%20dates%20and%20coverage."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#25D366] transition-colors py-1"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <span className="text-white/20 hidden sm:inline">·</span>
            <button
              id="footer-email-btn"
              onClick={onOpenEnquiry}
              className="flex items-center space-x-1.5 hover:text-[#B49A78] transition-colors cursor-pointer py-1"
            >
              <Mail size={14} className="text-[#B49A78]" />
              <span>Enquire</span>
            </button>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-[11px] font-sans text-[#77736D] tracking-wider">
          <p>© 2026 The Ram Sham Production. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Defence Colony & Aerocity · New Delhi · Worldwide</p>
        </div>
      </div>
    </footer>
  );
};
