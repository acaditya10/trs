import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/content.ts';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="relative w-full py-20 md:py-28 bg-[#F2EEE7] text-[#0A0A09] border-t border-[#0A0A09]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 md:mb-14 pb-5 border-b border-[#0A0A09]/10 gap-3">
          <h2
            id="instagram-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.08em] uppercase text-[#0A0A09]"
          >
            On Instagram
          </h2>

          <a
            id="instagram-profile-link"
            href="https://www.instagram.com/theramsham_production/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-[11px] md:text-xs font-sans tracking-[0.24em] lowercase text-[#0A0A09] hover:text-[#B49A78] transition-colors cursor-pointer"
          >
            <span>@theramsham_production</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              id={`instagram-post-${post.id}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[1/1] overflow-hidden bg-[#181816] shadow-sm select-none"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />

              {/* Instagram Icon Badge in Top Right */}
              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#0A0A09]/60 backdrop-blur-xs flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                <Instagram size={12} />
              </div>

              {/* Hover Dark Overlay with Likes/Caption preview */}
              <div className="absolute inset-0 bg-[#0A0A09]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <span className="font-sans text-[10px] text-[#B49A78] tracking-widest uppercase font-semibold">
                  {post.likes} likes
                </span>
                <p className="font-sans text-[10px] text-[#F2EEE7]/90 line-clamp-2 mt-0.5 leading-snug">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
