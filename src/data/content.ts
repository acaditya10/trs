import { StoryItem, ServiceItem, GalleryPhoto, TestimonialItem, InstagramPost } from '../types.ts';

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    eyebrow: 'STORIES THAT DESERVE TO BE REMEMBERED',
    titleLine1: 'THE RAM SHAM',
    titleLine2: 'PRODUCTION',
    subtitleLine1: 'Wedding Photography & Films',
    subtitleLine2: 'Delhi · India · Worldwide',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85',
    alt: 'Cinematic luxury Indian wedding couple portrait in royal wedding attire',
    couple: 'Kabir & Meera',
    location: 'Udaipur · Rajasthan',
  },
  {
    id: 'hero-2',
    eyebrow: 'TIMELESS CINEMATOGRAPHY',
    titleLine1: 'THE RAM SHAM',
    titleLine2: 'PRODUCTION',
    subtitleLine1: 'Fine-Art Wedding Films',
    subtitleLine2: 'ITC Maurya · New Delhi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Regal Indian bride in traditional kundan jewelry and embroidered lehenga',
    couple: 'Aarav & Riya',
    location: 'The Oberoi · New Delhi',
  },
  {
    id: 'hero-3',
    eyebrow: 'DOCUMENTARY EMOTION',
    titleLine1: 'THE RAM SHAM',
    titleLine2: 'PRODUCTION',
    subtitleLine1: 'Intimate Celebrations',
    subtitleLine2: 'Jaipur · Rajasthan · Beyond',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=2000&q=85',
    alt: 'Newlywed Indian couple sharing an intimate wedding smile in warm golden light',
    couple: 'Aditi & Rahul',
    location: 'Rambagh Palace · Jaipur',
  }
];

export const SELECTED_STORIES: StoryItem[] = [
  {
    id: 'story-1',
    couple: 'AARAV × RIYA',
    venue: 'The Oberoi',
    location: 'New Delhi',
    category: 'Intimate Luxury',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    date: 'Winter 2025',
    quote: 'Under a canopy of thousands of white tuberoses and crystal chandeliers, their sacred pheras felt like quiet poetry in the heart of Delhi.',
    description: 'A two-day celebration spanning a vibrant Sufi night followed by an ethereal sunset wedding ceremony. Captured across 35mm film and 4K anamorphic cinema cameras.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'story-2',
    couple: 'KARAN × SIMRAN',
    venue: 'ITC Maurya',
    location: 'Delhi',
    category: 'Traditional Elegance',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
    date: 'Spring 2025',
    quote: 'A celebration overflowing with authentic laughter, spontaneous tears, and deep rooted family heritage.',
    description: 'From an energetic sunlit Anand Karaj under open skies to an opulent black-tie reception, every frame celebrated untamed joy.',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 'story-3',
    couple: 'ADITI × RAHUL',
    venue: 'Jaipur',
    location: 'Rajasthan',
    category: 'Royal Destination',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    date: 'Autumn 2025',
    quote: 'Against sandstone fortresses and desert sunsets, their vows resonated through centuries of royal architecture.',
    description: 'A destination royal extravaganza set across historic Jaipur palaces, featuring candlelit courtyards, folk musicians, and royal procession banquets.',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'WEDDING\nPHOTOGRAPHY',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive documentary coverage by master photographers. Capturing unscripted emotions, architectural portraits, and heritage rituals with editorial finesse.',
    deliverables: [
      'Lead photographers & crew',
      'Curated high-res colour graded gallery',
      'Editorial couple portraits',
      'Online client heirloom gallery'
    ]
  },
  {
    id: 'service-2',
    number: '02',
    title: 'WEDDING\nFILMS',
    hasPlayIcon: true,
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    description: 'Cinematic storytelling with synchronous audio capture, soulful original sound design, and bespoke narrative editing that moves you every single time.',
    deliverables: [
      '3-5 minute Cinematic Teaser Trailer',
      '15-25 minute Narrative Feature Film',
      'Full ceremony live cuts & speeches',
      'Mastered 4K Dolby Vision delivery'
    ]
  },
  {
    id: 'service-3',
    number: '03',
    title: 'CINEMATIC\nFILMS',
    hasPlayIcon: true,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    description: 'Shot on cine-grade cinema cameras with prime lenses, gimbal stabilization, and aerial drone vistas to produce an authentic Bollywood-standard wedding film.',
    deliverables: [
      'Anamorphic cinema optics',
      'Licensed orchestral & ambient scores',
      'Color graded in DaVinci Resolve',
      'Instagram vertical reel cuts'
    ]
  },
  {
    id: 'service-4',
    number: '04',
    title: 'PRE-WEDDING\nSTORIES',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    description: 'Intimate editorial sessions in majestic landscapes, historical monuments, or cherished personal spots before the bustle of the wedding celebrations begins.',
    deliverables: [
      'Styling & location curation',
      'Half-day or full-day shoot',
      'Save-The-Date visual invites',
      'Signature pre-wedding short film'
    ]
  },
  {
    id: 'service-5',
    number: '05',
    title: 'DESTINATION\nWEDDINGS',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    description: 'Specialized traveling crew equipped for multi-day weddings across Rajasthan palaces, Goa beach resorts, Kerala backwaters, Europe, and the Middle East.',
    deliverables: [
      'Multi-day logistics management',
      'Drone aerial permits & operation',
      'Next-day highlight edits for Sangeet',
      'All-inclusive travel packages'
    ]
  },
  {
    id: 'service-6',
    number: '06',
    title: 'ALBUMS &\nFINE ART PRINTS',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted luxury albums hand-bound in Italian leather or pure linen, printed on museum-grade cotton rag paper guaranteed to endure for generations.',
    deliverables: [
      'Custom layout design & curation',
      'Archival 100% cotton rag paper',
      'Handmade leather or velvet slipcase',
      'Matching parent keepsake albums'
    ]
  }
];

export const MASONRY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'masonry-a',
    title: 'The Bridal Gaze',
    caption: 'Intricate kundan matha patti, henna hands, and timeless anticipation before the varmala.',
    location: 'The Oberoi Amarvilas · Agra',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85',
    orientation: 'tall'
  },
  {
    id: 'masonry-b',
    title: 'Unfiltered Joy',
    caption: 'Spontaneous laughter between the bride and groom during golden hour pheras.',
    location: 'ITC Maurya · New Delhi',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
    orientation: 'square'
  },
  {
    id: 'masonry-c',
    title: 'The Sacred Aisle',
    caption: 'Lush floral mandap pathway flanked by hundreds of lit candles and blessings.',
    location: 'Taj Falaknuma Palace · Hyderabad',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85',
    orientation: 'wide'
  },
  {
    id: 'masonry-d',
    title: 'Baraat Euphoria',
    caption: 'Rose petals and confetti shower as the groom enters surrounded by his closest clan.',
    location: 'The Leela Palace · New Delhi',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=85',
    orientation: 'tall'
  },
  {
    id: 'masonry-e',
    title: 'Sangeet Symphony',
    caption: 'Energy, rhythm, and midnight celebrations under royal chandeliers.',
    location: 'Umaid Bhawan Palace · Jodhpur',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    orientation: 'wide'
  },
  {
    id: 'masonry-f',
    title: 'Golden Radiance',
    caption: 'A glowing candid moment capturing the warmth of family blessings.',
    location: 'The Lodhi · New Delhi',
    image: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1000&q=85',
    orientation: 'square'
  },
  {
    id: 'masonry-g',
    title: 'Heritage Silhouette',
    caption: 'Aditi and Rahul framed by the ancient stone arches of Nahargarh Fort at dusk.',
    location: 'Nahargarh Fort · Jaipur',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    orientation: 'wide'
  },
  {
    id: 'masonry-h',
    title: 'Sacred Tears',
    caption: 'An unscripted father-daughter farewell that words could never completely describe.',
    location: 'Suryagarh · Jaisalmer',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85',
    orientation: 'square'
  },
  {
    id: 'masonry-i',
    title: 'Starlight Vows',
    caption: 'The couple surrounded by hanging jasmine garlands and floating diyas.',
    location: 'Rambagh Palace · Jaipur',
    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1000&q=85',
    orientation: 'tall'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'They captured moments we didn\'t even realise were happening.',
    couple: 'Riya & Aarav',
    location: 'The Oberoi · New Delhi',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
    weddingDate: 'December 2025',
    storyExcerpt: 'From the quiet tension of the bridal morning to the wild chaos of our 3 AM afterparty, The Ram Sham Production team felt like trusted friends who happened to hold world-class cameras.'
  },
  {
    id: 'test-2',
    quote: 'Our wedding film feels like an international cinema release. Pure poetry and goosebumps.',
    couple: 'Simran & Karan',
    location: 'ITC Maurya · Delhi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    weddingDate: 'February 2025',
    storyExcerpt: 'Every guest who watched our teaser cried. They didn\'t just record the events—they somehow captured the exact atmosphere and heart of our families coming together.'
  },
  {
    id: 'test-3',
    quote: 'The visual poise and editorial eye is second to none. Worth every single penny.',
    couple: 'Aditi & Rahul',
    location: 'Jaipur · Rajasthan',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    weddingDate: 'November 2025',
    storyExcerpt: 'We wanted fine-art imagery rather than generic posey photos. They delivered breathtaking framed art that currently hangs proudly in our home.'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
    likes: '4,892',
    caption: 'Elegance etched in gold and crimson. Shradha on her wedding morning.',
    url: 'https://www.instagram.com/theramsham_production/'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    likes: '6,210',
    caption: 'Black & white simplicity. When words pause and laughter takes over.',
    url: 'https://www.instagram.com/theramsham_production/'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    likes: '5,431',
    caption: 'The art of bridal poise. Kundan, velvet, and heritage details.',
    url: 'https://www.instagram.com/theramsham_production/'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
    likes: '7,104',
    caption: 'Varmala energy at peak celebration. Smoke, florals, and cheers!',
    url: 'https://www.instagram.com/theramsham_production/'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80',
    likes: '3,950',
    caption: 'Royal groom portrait in traditional Lucknowi chikankari and pagri.',
    url: 'https://www.instagram.com/theramsham_production/'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    likes: '8,420',
    caption: 'The grand mandap reveal under thousands of starry ceiling lights.',
    url: 'https://www.instagram.com/theramsham_production/'
  }
];
