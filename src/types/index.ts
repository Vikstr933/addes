export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[]
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  service?: string
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: OpeningHours
}

export interface OpeningHours {
  weekdays: string;
  saturday: string;
  sunday: string
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  location: string;
  completedDate: string
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string
}

export interface QuoteRequest extends ContactFormData {
  projectType: string;
  area: string;
  timeline: string
}