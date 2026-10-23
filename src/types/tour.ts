export type Language = 'bn' | 'en';
export type Currency = 'BDT' | 'USD';

export type TourCategory = 'all' | 'village' | 'tea_nature' | 'wildlife' | 'hills' | 'beach' | 'heritage';

export interface ItineraryDay {
  dayNumber: number;
  title: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  highlights: {
    bn: string[];
    en: string[];
  };
}

export interface MapPoint {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  type: 'pickup' | 'highlight' | 'stay' | 'nature';
  lat: number;
  lng: number;
  description: {
    bn: string;
    en: string;
  };
}

export interface MapConfig {
  centerLat: number;
  centerLng: number;
  zoom: number;
  regionName: {
    bn: string;
    en: string;
  };
}

export interface TourPackage {
  id: string;
  mapConfig: MapConfig;
  mapPoints: MapPoint[];
  title: {
    bn: string;
    en: string;
  };
  badge?: {
    bn: string;
    en: string;
  };
  category: TourCategory;
  shortDesc: {
    bn: string;
    en: string;
  };
  fullDesc: {
    bn: string;
    en: string;
  };
  priceBDT: number;
  priceUSD: number;
  duration: {
    bn: string;
    en: string;
  };
  groupSize: {
    bn: string;
    en: string;
  };
  imageUrl: string;
  additionalImages?: string[];
  highlights: {
    bn: string[];
    en: string[];
  };
  itinerary: ItineraryDay[];
  includes: {
    bn: string[];
    en: string[];
  };
  excludes: {
    bn: string[];
    en: string[];
  };
  pickupLocation: {
    bn: string;
    en: string;
  };
  bestSeason: {
    bn: string;
    en: string;
  };
  rating: number;
  reviewsCount: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tourName: {
    bn: string;
    en: string;
  };
  comment: {
    bn: string;
    en: string;
  };
}

export interface BookingDetails {
  bookingId: string;
  tourId: string;
  tourTitle: string;
  travelerName: string;
  phone: string;
  email: string;
  travelDate: string;
  travelersCount: number;
  specialRequests?: string;
  addOns: string[];
  totalPriceBDT: number;
  totalPriceUSD: number;
  currency: Currency;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: {
    bn: string;
    en: string;
  };
  answer: {
    bn: string;
    en: string;
  };
  category: string;
}
