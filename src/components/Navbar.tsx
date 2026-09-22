import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Phone, Instagram } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'STORIES', href: '#stories' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#contact') {
      onOpenEnquiry();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A09]/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A09]/90 via-[#0A0A09]/40 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Official Vector Silhouette */}
          <a
            id="brand-logo"
            href="#home"
            className="group flex items-center transition-opacity hover:opacity-90 py-1"
            aria-label="The Ram Sham Wedding Photography"
          >
            <Logo
              variant="light"
              size="sm"
              className="h-9 sm:h-11 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] lg:text-[12px] font-sans font-medium tracking-[0.24em] text-[#F2EEE7]/85 hover:text-[#B49A78] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B49A78] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/919818033484?text=Hello%20The%20Ram%20Sham%20Production%2C%20I%20would%20like%20to%20enquire%20about%20wedding%20photography%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EEE7]/70 hover:text-[#25D366] transition-colors p-2"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <button
              id="nav-enquire-btn"
              onClick={onOpenEnquiry}
              className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase px-5 py-2.5 border border-[#F2EEE7]/50 hover:border-[#B49A78] text-[#F2EEE7] hover:text-[#0A0A09] hover:bg-[#B49A78] transition-all duration-300 cursor-pointer"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp Icon + Quick Enquire + Hamburger */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://wa.me/919818033484?text=Hello%20The%20Ram%20Sham%20Production%2C%20I%20would%20like%20to%20enquire%20about%20wedding%20photography%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Direct WhatsApp Message"
            >
              <MessageCircle size={16} />
            </a>

            <button
              id="mobile-enquire-pill"
              onClick={onOpenEnquiry}
              className="text-[10px] font-sans font-medium tracking-[0.18em] uppercase px-3 py-2 border border-[#B49A78] text-[#B49A78] active:bg-[#B49A78] active:text-[#0A0A09] transition-colors min-h-[38px] flex items-center"
            >
              Enquire
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#F2EEE7] hover:text-[#B49A78] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Fullscreen Drawer with Enhanced Touch Experience */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-[#0A0A09] flex flex-col justify-between px-6 sm:px-8 pt-24 pb-8 md:hidden overflow-y-auto"
        >
          {/* Top Brand & Links */}
          <div className="flex flex-col space-y-5">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <Logo variant="light" size="sm" className="h-8 w-auto" />
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#B49A78]">
                Delhi · Global
              </span>
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Menu Links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl sm:text-3xl text-[#F2EEE7] active:text-[#B49A78] transition-colors flex items-center justify-between py-3.5 border-b border-white/5"
                >
                  <span className="tracking-wide">{link.label}</span>
                  <ArrowUpRight size={18} className="text-[#B49A78]/70" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Action Area: Direct WhatsApp + Phone + Enquire Button */}
          <div className="flex flex-col space-y-4 pt-6 border-t border-white/10 mt-6">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919818033484?text=Hello%20The%20Ram%20Sham%20Production%2C%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20discuss%20dates%20and%20coverage."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-sans font-medium tracking-wider uppercase min-h-[44px]"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919818033484"
                className="flex items-center justify-center space-x-2 py-3 bg-white/5 border border-white/15 text-[#F2EEE7] text-xs font-sans font-medium tracking-wider uppercase min-h-[44px]"
              >
                <Phone size={15} className="text-[#B49A78]" />
                <span>Call Studio</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full text-center py-4 bg-[#B49A78] text-[#0A0A09] font-sans font-semibold tracking-[0.2em] text-xs uppercase shadow-xl min-h-[48px] active:bg-[#F2EEE7] transition-colors"
            >
              Start An Enquiry
            </button>

            <div className="flex items-center justify-between pt-2 text-[10px] font-sans text-[#77736D] tracking-wider uppercase">
              <span>Delhi · India · Worldwide</span>
              <a
                href="https://www.instagram.com/theramsham_production/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[#B49A78] hover:text-[#F2EEE7]"
              >
                <Instagram size={12} />
                <span>@theramsham_production</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
