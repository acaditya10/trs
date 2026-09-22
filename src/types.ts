export interface StoryItem {
  id: string;
  couple: string;
  venue: string;
  location: string;
  image: string;
  category: string;
  date?: string;
  quote?: string;
  description?: string;
  gallery?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  image: string;
  hasPlayIcon?: boolean;
  description: string;
  deliverables: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  location: string;
  image: string;
  orientation: 'tall' | 'wide' | 'square';
  colSpan?: string;
  rowSpan?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  couple: string;
  location: string;
  image: string;
  weddingDate: string;
  storyExcerpt: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  caption: string;
  url: string;
}

export interface EnquiryFormData {
  fullName: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string;
  weddingLocation: string;
  weddingType: string;
  services: string[];
  message: string;
}
