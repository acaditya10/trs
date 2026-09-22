import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenEnquiry: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenEnquiry }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls down past the hero
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      id="mobile-floating-quick-bar"
      aria-label="Quick Contact and Booking"
      className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between p-2 bg-[#0A0A09]/92 backdrop-blur-lg border border-white/15 shadow-2xl rounded-full animate-fade-in"
    >
      {/* WhatsApp Quick Trigger */}
      <a
        href="https://wa.me/919876543210?text=Hello%20The%20Ram%20Sham%20Production%2C%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20discuss%20dates%20and%20availability."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] rounded-full text-[11px] font-sans font-medium tracking-wider uppercase transition-all active:scale-98"
      >
        <MessageCircle size={15} />
        <span>WhatsApp</span>
      </a>

      <div className="w-[1px] h-6 bg-white/10 mx-2" />

      {/* Enquire Quick Trigger */}
      <button
        onClick={onOpenEnquiry}
        className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#B49A78] hover:bg-[#F2EEE7] text-[#0A0A09] rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
      >
        <Calendar size={14} />
        <span>Check Dates</span>
      </button>
    </aside>
  );
};
