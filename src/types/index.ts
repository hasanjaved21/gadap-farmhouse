export interface Farmhouse {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  capacity: number; // Max guests
  bedrooms: number;
  washrooms: number;
  poolSize: string;
  hasKidsPool: boolean;
  lawnSize: string;
  startingPrice12Hr: number; // PKR
  startingPrice24Hr: number; // PKR
  featured: boolean;
  heroImage: string;
  gallery: string[];
  locationDetail: string;
  amenities: string[];
  suitedEvents: string[];
  description: string;
  rules: string[];
}

export interface Package {
  id: string;
  title: string;
  badge?: string;
  suitableFor: string;
  guestLimit: string;
  duration: string; // e.g. "12 Hours (Day Pass)" or "24 Hours (Overnight)"
  price12hr: number;
  price24hr: number;
  features: string[];
  includedFacilities: string[];
  popular?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  category: 'water' | 'sports' | 'comfort' | 'events' | 'services';
  iconName: string;
  featuredImage: string;
  highlight: string;
}

export interface Review {
  id: string;
  author: string;
  eventDate: string;
  eventType: string;
  rating: number;
  farmhouseName: string;
  comment: string;
  avatar: string;
  location: string;
  verifiedBooking: boolean;
}

export interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  recommendedFarmhouses: string[];
  image: string;
  highlights: string[];
  idealGuestCount: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Swimming Pool' | 'Farmhouses' | 'Gardens' | 'Rooms' | 'BBQ Area' | 'Night View' | 'Birthday Events' | 'Wedding Events' | 'Outdoor Dining' | 'Sports Activities' | 'Drone Shots';
  imageUrl: string;
  caption: string;
  farmhouseName?: string;
}

export interface BookingRequest {
  farmhouseId?: string;
  farmhouseName?: string;
  packageId?: string;
  customerName: string;
  phone: string;
  email: string;
  bookingDate: string;
  duration: '12_hours' | '24_hours' | 'multi_day';
  eventType: string;
  estimatedGuests: number;
  addons: {
    generatorBackup: boolean;
    djSoundSystem: boolean;
    decorations: boolean;
    cateringSetup: boolean;
    liveBBQChef: boolean;
  };
  specialRequirements?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'facilities' | 'events';
}

export interface FilterState {
  search: string;
  capacityRange: 'all' | 'small' | 'medium' | 'large' | 'vips'; // small: <20, med: 20-50, large: 50-100, vips: >100
  poolType: 'all' | 'large' | 'kids_included' | 'covered';
  priceMax: number;
  eventType: string;
  sort: 'featured' | 'price_low' | 'price_high' | 'rating' | 'capacity';
}
