export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'barber' | 'salon' | string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}

export interface SocialMedia {
  name: string;
  url: string;
}