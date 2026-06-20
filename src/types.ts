export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Gallery = 'gallery',
  Contact = 'contact'
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'interior' | 'equipment' | 'workout' | 'sessions';
  title: string;
}
