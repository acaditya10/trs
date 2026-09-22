import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StoriesSection } from './components/StoriesSection.tsx';
import { FilmBreakSection } from './components/FilmBreakSection.tsx';
import { StudioSection } from './components/StudioSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { MasonryGridSection } from './components/MasonryGridSection.tsx';
import { TestimonialSection } from './components/TestimonialSection.tsx';
import { CredibilitySection } from './components/CredibilitySection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';

import { EnquiryModal } from './components/EnquiryModal.tsx';
import { StoryDetailModal } from './components/StoryDetailModal.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';
import { VideoModal } from './components/VideoModal.tsx';
import { TeamModal } from './components/TeamModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';

import { StoryItem, ServiceItem, GalleryPhoto } from './types.ts';
import { MASONRY_PHOTOS, SERVICES_LIST } from './data/content.ts';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Modal States
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Smooth entrance reveals via GSAP on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle entrance fade for the page
      gsap.from('#hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('#hero-main-title', {
        opacity: 0,
        y: 35,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.4
      });

      gsap.from('#hero-view-stories-btn, #hero-enquire-btn', {
        opacity: 0,
        y: 25,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.7
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handlers
  const handleOpenEnquiry = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setEnquiryOpen(true);
  };

  const handleScrollToStories = () => {
    const elem = document.querySelector('#stories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    const elem = document.querySelector('#from-the-stories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox Next/Prev
  const handleLightboxPrev = () => {
    if (!activePhoto) return;
    const currentIndex = MASONRY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = currentIndex === 0 ? MASONRY_PHOTOS.length - 1 : currentIndex - 1;
    setActivePhoto(MASONRY_PHOTOS[prevIndex]);
  };

  const handleLightboxNext = () => {
    if (!activePhoto) return;
    const currentIndex = MASONRY_PHOTOS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = currentIndex === MASONRY_PHOTOS.length - 1 ? 0 : currentIndex + 1;
    setActivePhoto(MASONRY_PHOTOS[nextIndex]);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-[#0A0A09] text-[#F2EEE7] selection:bg-[#B49A78] selection:text-[#0A0A09]"
    >
      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections matching reference layout */}
      <main>
        {/* Section 01: Hero */}
        <HeroSection
          onOpenEnquiry={() => handleOpenEnquiry()}
          onViewStories={handleScrollToStories}
        />

        {/* Section 02: Selected Stories (Warm Ivory) */}
        <StoriesSection onSelectStory={(story) => setSelectedStory(story)} />

        {/* Section 03: Cinematic Film Break (Dark Full-bleed) */}
        <FilmBreakSection onWatchFilm={() => setVideoModalOpen(true)} />

        {/* Section 04: The Studio (Warm Ivory) */}
        <StudioSection onMeetTeam={() => setTeamModalOpen(true)} />

        {/* Section 05: What We Do (Dark Horizontal Service Blocks) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onViewAllServices={() => setSelectedService(SERVICES_LIST[0])}
        />

        {/* Section 06: From The Stories (Warm Ivory Asymmetrical Masonry Grid) */}
        <MasonryGridSection
          onPhotoClick={(photo) => setActivePhoto(photo)}
          onViewFullPortfolio={handleScrollToPortfolio}
        />

        {/* Section 07: Testimonial (Dark 2-column) */}
        <TestimonialSection />

        {/* Section 08: Credibility / Years Of Stories (Warm Ivory) */}
        <CredibilitySection />

        {/* Section 09: On Instagram (Warm Ivory 6-grid) */}
        <InstagramSection />

        {/* Section 10: Final CTA / Your Story Starts Here (Dark Cinematic) */}
        <FinalCtaSection onStartEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Mobile Floating Quick Bar for Instant WhatsApp & Date Enquiries */}
      <MobileQuickBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Modals & Overlays */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledService={prefilledService}
      />

      <StoryDetailModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onEnquireForDate={() => {
          setSelectedStory(null);
          handleOpenEnquiry();
        }}
      />

      <LightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onEnquire={() => {
          setVideoModalOpen(false);
          handleOpenEnquiry('Wedding Films');
        }}
      />

      <TeamModal
        isOpen={teamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        onEnquire={() => {
          setTeamModalOpen(false);
          handleOpenEnquiry();
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => {
          setSelectedService(null);
          handleOpenEnquiry(name);
        }}
      />
    </div>
  );
}
