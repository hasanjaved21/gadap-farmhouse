import { Farmhouse, Package, Facility, Review, EventCategory, GalleryItem, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'Gadap Farmhouses',
  tagline: 'Crafting Golden Moments',
  owner: 'Hammad Ghaffar',
  location: 'Gadap Town, Malir, Karachi, Sindh, Pakistan',
  phone: '+92 334 3705720',
  phoneClean: '923343705720',
  email: 'hammadghaffar684@email.com',
  description: 'Gadap Farmhouses provides premium farmhouse booking services in Gadap Town, Karachi. We specialize in offering beautiful farmhouses with swimming pools, BBQ facilities, spacious green lawns, sports activities, and peaceful natural surroundings for memorable family & event experiences.',
  logoUrl: 'https://lh3.googleusercontent.com/d/13ZzC15h4SoSZhmetOIf4m5-dt78-dbZW',
  logoDriveUrl: 'https://drive.google.com/file/d/13ZzC15h4SoSZhmetOIf4m5-dt78-dbZW/view?usp=sharing',
  floatingButtonImgUrl: 'https://lh3.googleusercontent.com/d/1mR8IOm4m_faHcD_c00OUcg-ddmxCWL1Q',
  floatingButtonDriveUrl: 'https://drive.google.com/file/d/1mR8IOm4m_faHcD_c00OUcg-ddmxCWL1Q/view?usp=drive_link',
  googleMapsUrl: 'https://maps.google.com/?q=Gadap+Town+Malir+Karachi+Pakistan',
  businessHours: '24/7 Booking & Inquiry Service',
};

export const FARMHOUSES_DATA: Farmhouse[] = [
  {
    id: 'gadap-royal-palms',
    name: 'Royal Palms Grand Estate',
    tagline: '5-Star Resort Experience with Mega Pool & Event Lawn',
    rating: 4.9,
    reviewCount: 128,
    capacity: 120,
    bedrooms: 5,
    washrooms: 6,
    poolSize: '45ft x 25ft Deep Water Pool + Filtered Kids Pool',
    hasKidsPool: true,
    lawnSize: '20,000 sq ft Lush Velvet Lawn',
    startingPrice12Hr: 35000,
    startingPrice24Hr: 60000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Main Gadap Road, Near Super Highway, Gadap Town, Karachi',
    amenities: [
      'Filtered Swimming Pool',
      'Dedicated Kids Pool',
      'Heavy Duty Generator Backup',
      'Built-in BBQ Grill Station',
      'Mini Cricket pitch & Snooker Table',
      'Air Conditioned Executive Lounges',
      'Commercial Kitchen & Freezer',
      'CCTV Secured Gated Boundary',
      'Valet & Private Parking (30+ Cars)'
    ],
    suitedEvents: ['Weddings & Mehndi', 'Corporate Retreats', 'Large Family Picnics', 'Birthday Celebrations', 'BBQ Nights'],
    description: 'Royal Palms Grand Estate is the crown jewel of Gadap Town. Featuring a sprawling 20,000 sq ft manicured lawn, a resort-style illuminated swimming pool, and opulent air-conditioned suites, it provides an unparalleled luxury backdrop for dream weddings, corporate galas, and high-profile family get-togethers.',
    rules: [
      'Advance booking confirmation required via phone or WhatsApp.',
      'Sound system cutoff at 11:00 PM as per municipal regulations.',
      'Swimming pool safety rules strictly enforced for children.',
      'Security verification required upon entry.'
    ]
  },
  {
    id: 'al-ghaffar-resort',
    name: 'Al-Ghaffar Oasis Resort',
    tagline: 'Serene Nature Hideaway with Private Pool & Cricket Net',
    rating: 4.85,
    reviewCount: 94,
    capacity: 80,
    bedrooms: 4,
    washrooms: 5,
    poolSize: '40ft x 20ft Crystal Clear Pool',
    hasKidsPool: true,
    lawnSize: '12,000 sq ft Garden with Evening Fairy Lighting',
    startingPrice12Hr: 28000,
    startingPrice24Hr: 48000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Sector 3, Gadap Town, Malir, Karachi',
    amenities: [
      'Continuous Filtration Pool',
      'Cricket Practice Net with Floodlights',
      'Table Tennis & Foosball Table',
      'Brick BBQ & Sheesha Corner',
      'Full Kitchen & Ice Box',
      'Uninterrupted Power Backup',
      'Outdoor Dining Pavilions',
      'Family Changing Rooms & Showers'
    ],
    suitedEvents: ['Family Gatherings', 'Friends Get Together', 'Birthday Parties', 'School Reunions', 'BBQ Dinners'],
    description: 'Owned and operated under the strict hospitality standards of Hammad Ghaffar, Al-Ghaffar Oasis Resort offers a peaceful green sanctuary away from Karachi’s noise. Perfectly designed for daytime swimming picnics and night-time BBQ parties under ambient string lights.',
    rules: [
      'Cleanliness deposit collected on check-in and refunded on departure.',
      'No glassware allowed directly inside the swimming pool water.',
      'Decorations allowed with non-damaging adhesive fixtures.'
    ]
  },
  {
    id: 'gadap-emerald-lawn',
    name: 'Emerald Haven Farmhouse',
    tagline: 'Modern Architectural Villa with Infinity-Style Pool & Bonfire Ring',
    rating: 4.9,
    reviewCount: 112,
    capacity: 100,
    bedrooms: 4,
    washrooms: 5,
    poolSize: '38ft x 22ft Deep Blue Pool',
    hasKidsPool: true,
    lawnSize: '15,000 sq ft Open Lawn & Fruit Orchard',
    startingPrice12Hr: 32000,
    startingPrice24Hr: 52000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Gadap Green Valley Road, Malir, Karachi',
    amenities: [
      'Infinity Edge Swimming Pool',
      'Open Air Cinema Projection Screen',
      'Stone Firepit / Bonfire Circle',
      'Volleyball & Badminton Court',
      'High Speed WiFi & Surround Sound',
      'Modern Kitchen & Microwave',
      'Guarded Parking Precinct'
    ],
    suitedEvents: ['Youth Reunions', 'Engagement Ceremonies', 'Birthday bashes', 'Photoshoots', 'Weekend Stays'],
    description: 'Emerald Haven merges contemporary Scandinavian minimalism with tropical Karachi palm flora. Its infinity-inspired swimming pool, custom stone bonfire circle, and outdoor sports lawn make it a viral favorite for photoshoots, birthday galas, and weekend getaways.',
    rules: [
      'Prior approval required for professional drone video equipment.',
      'Pets allowed in outdoor lawn area only.',
      'Respectful noise levels after midnight.'
    ]
  },
  {
    id: 'sunset-valley-gadap',
    name: 'Sunset Valley Retreat',
    tagline: 'Cozy Family Farmhouse with Covered Gazebo & Kids Water Slides',
    rating: 4.8,
    reviewCount: 76,
    capacity: 50,
    bedrooms: 3,
    washrooms: 4,
    poolSize: '30ft x 18ft Swimming Pool with Slide',
    hasKidsPool: true,
    lawnSize: '8,000 sq ft Shaded Garden',
    startingPrice12Hr: 22000,
    startingPrice24Hr: 38000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Block B, Gadap Farmhouses Enclave, Karachi',
    amenities: [
      'Kids Water Slide & Splash Pool',
      'Traditional Charpai & Cushion Gazebos',
      'Lawn Swing Set & Carrom Board',
      'Built-in Charcoal BBQ Pit',
      'Standby Generator Unit',
      'Fully Furnished Air-Conditioned Rooms'
    ],
    suitedEvents: ['Family Picnics', 'Kids Birthday Parties', 'Weekend Family Relaxation', 'Friends Get Together'],
    description: 'Ideal for intimate family picnics and kids’ birthday celebrations. Features a safe pool with fun water slide, shaded charpai lounge spots, and a cozy green lawn designed for relaxing Sunday afternoons in Gadap Town.',
    rules: [
      'Maximum 50 guests allowed for standard rate.',
      'Lifeguard oversight encouraged for kids pool activities.'
    ]
  },
  {
    id: 'paradise-cove-gadap',
    name: 'Paradise Cove Event Estate',
    tagline: 'Grand Destination Venue for 300+ Guest Weddings & Corporate Galas',
    rating: 4.95,
    reviewCount: 145,
    capacity: 350,
    bedrooms: 6,
    washrooms: 8,
    poolSize: '50ft x 30ft Olympic Style Swimming Pool',
    hasKidsPool: true,
    lawnSize: '35,000 sq ft Double Event Lawns',
    startingPrice12Hr: 65000,
    startingPrice24Hr: 110000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Avenue 1, Gadap Town, Malir, Karachi',
    amenities: [
      'Mega Dual Lawns for Stage & Catering Setups',
      'Bridal & Groom Dressing Suites',
      'Industrial Power Generator',
      'Catering Kitchen Facilities',
      'Illuminated Swimming Pool Deck',
      'Dedicated Security Guards & Valet Bay'
    ],
    suitedEvents: ['Grand Weddings', 'Mehndi & Baraat', 'Corporate Conventions', 'Commercial Shoots', 'Large Reunions'],
    description: 'Gadap Town’s premier event venue. Paradise Cove boasts massive lawns capable of hosting elaborate wedding stages, banquet dining tables, and light displays alongside a majestic illuminated swimming pool backdrop.',
    rules: [
      'Catering vendors must coordinate with site management 24 hours prior.',
      'Generators provided with full fuel backup.'
    ]
  },
  {
    id: 'palm-riviera-gadap',
    name: 'Palm Riviera Luxury Villa',
    tagline: 'Mediterranean Style Luxury Villa with Indoor Games & Jacuzzi Spa',
    rating: 4.88,
    reviewCount: 88,
    capacity: 70,
    bedrooms: 4,
    washrooms: 5,
    poolSize: '35ft x 20ft Temperature Controlled Pool',
    hasKidsPool: true,
    lawnSize: '10,000 sq ft Tropical Palm Garden',
    startingPrice12Hr: 30000,
    startingPrice24Hr: 50000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    locationDetail: 'Gadap Main Boulevard, Malir, Karachi',
    amenities: [
      'Resort Jacuzzi Jet Spa',
      'Snooker Room & PlayStation VR Corner',
      'Lush Date Palm Landscaping',
      'Outdoor BBQ Canopy',
      'Super Silent Diesel Generator',
      'Modern Open-plan Kitchen'
    ],
    suitedEvents: ['Friends Reunions', 'VIP Stays', 'Photoshoots', 'Barbeque Parties', 'Eid Get-togethers'],
    description: 'Crafted with Mediterranean arches, tall date palms, and a heated Jacuzzi section, Palm Riviera offers an executive level retreat for guests seeking privacy, indoor gaming, and opulent poolside relaxation.',
    rules: [
      'Family & verified group bookings preferred.',
      'No swimming immediately after meals.'
    ]
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-pool',
    title: 'Swimming Pool',
    description: 'Cleaned continuously with automated filtration systems, shallow to 7ft deep ends, and night lighting.',
    category: 'water',
    iconName: 'Waves',
    featuredImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    highlight: 'Crystal Clear Water'
  },
  {
    id: 'fac-kids-pool',
    title: 'Kids Pool',
    description: 'Shallow 1.5ft to 2ft safe water splash zones designed specifically for toddlers and young children.',
    category: 'water',
    iconName: 'Smile',
    featuredImage: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80',
    highlight: 'Safety Assured'
  },
  {
    id: 'fac-bbq',
    title: 'BBQ Area',
    description: 'Dedicated brick BBQ grill setups with charcoal pits, exhaust covers, and outdoor skewers ready for use.',
    category: 'services',
    iconName: 'Flame',
    featuredImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    highlight: 'Grill Ready'
  },
  {
    id: 'fac-cricket',
    title: 'Cricket Ground',
    description: 'Cemented practice pitch with floodlights for day-and-night tape-ball or hard-ball cricket matches.',
    category: 'sports',
    iconName: 'Trophy',
    featuredImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    highlight: 'Floodlit Pitch'
  },
  {
    id: 'fac-football',
    title: 'Football Area',
    description: 'Spacious grassy mini pitch with goalposts for energetic friendly matches and team activities.',
    category: 'sports',
    iconName: 'Activity',
    featuredImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    highlight: 'Grass Pitch'
  },
  {
    id: 'fac-indoor-games',
    title: 'Indoor Games',
    description: 'Snooker tables, foosball, table tennis, carrom boards, and ludo stations inside air-conditioned rooms.',
    category: 'sports',
    iconName: 'Gamepad2',
    featuredImage: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80',
    highlight: 'AC Gaming Lounge'
  },
  {
    id: 'fac-outdoor-sitting',
    title: 'Outdoor Sitting',
    description: 'Traditional Punjabi charpais, luxury patio rattan furniture, shaded pergolas, and garden benches.',
    category: 'comfort',
    iconName: 'Armchair',
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    highlight: 'Scenic Relaxing'
  },
  {
    id: 'fac-luxury-rooms',
    title: 'Luxury Rooms',
    description: 'Air-conditioned master suites with plush king beds, attached modern bathrooms, and garden views.',
    category: 'comfort',
    iconName: 'Bed',
    featuredImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    highlight: 'AC Master Suites'
  },
  {
    id: 'fac-kitchen',
    title: 'Fully Equipped Kitchen',
    description: 'Gas stoves, deep freezers, microwave ovens, large cooking utensils, and food prep counters.',
    category: 'services',
    iconName: 'Utensils',
    featuredImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    highlight: 'Deep Freezers Included'
  },
  {
    id: 'fac-generator',
    title: 'Generator Backup',
    description: 'Heavy duty automatic standby generators ensuring uninterrupted electricity for ACs, pumps, and lights.',
    category: 'services',
    iconName: 'Zap',
    featuredImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    highlight: '24/7 Power Assurance'
  },
  {
    id: 'fac-family-hall',
    title: 'Family Hall',
    description: 'Spacious indoor carpeted or tiled halls with comfortable sofas and dining space for indoor gatherings.',
    category: 'events',
    iconName: 'Users',
    featuredImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    highlight: 'Spacious Seating'
  },
  {
    id: 'fac-garden',
    title: 'Lush Gardens',
    description: 'Freshly mowed Bermuda grass lawns surrounded by flowering plants, palm trees, and fruit orchards.',
    category: 'comfort',
    iconName: 'Trees',
    featuredImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    highlight: 'Fresh Natural Air'
  },
  {
    id: 'fac-photography',
    title: 'Photography Spots',
    description: 'Aesthetic photo booths, decorative archways, poolside night lighting, and green backdrops for photoshoots.',
    category: 'events',
    iconName: 'Camera',
    featuredImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    highlight: 'Instagram Ready'
  },
  {
    id: 'fac-bonfire',
    title: 'Bonfire Area',
    description: 'Dedicated stone pit for winter night bonfires, acoustic music circles, and marshmallow roasting.',
    category: 'events',
    iconName: 'Sun',
    featuredImage: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
    highlight: 'Cozy Winter Nights'
  },
  {
    id: 'fac-wifi',
    title: 'High Speed WiFi',
    description: 'High-speed wireless internet covering main lounges, poolside, and garden areas for uninterrupted sharing.',
    category: 'services',
    iconName: 'Wifi',
    featuredImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    highlight: 'Seamless Connectivity'
  },
  {
    id: 'fac-music',
    title: 'Music System',
    description: 'Bluetooth sound speakers with wireless mics available for party tunes, announcements, and karaoke.',
    category: 'events',
    iconName: 'Music',
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    highlight: 'Party Sound Ready'
  },
  {
    id: 'fac-washrooms',
    title: 'Clean Washrooms',
    description: 'Hygienic tiled western & asian washrooms equipped with geysers and instant water pressure.',
    category: 'comfort',
    iconName: 'CheckCircle',
    featuredImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    highlight: 'Sanitized Daily'
  },
  {
    id: 'fac-changing-rooms',
    title: 'Changing Rooms',
    description: 'Separate poolside changing rooms for ladies and gents with clothes hooks and mirrors.',
    category: 'comfort',
    iconName: 'DoorClosed',
    featuredImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    highlight: 'Poolside Privacy'
  },
  {
    id: 'fac-parking',
    title: 'Secure Parking',
    description: 'Internal boundary wall parking area for 20 to 50 vehicles with night floodlights and security guard post.',
    category: 'services',
    iconName: 'Car',
    featuredImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    highlight: 'Inside Gated Compound'
  },
  {
    id: 'fac-security',
    title: 'Security Staff & CCTV',
    description: 'Round-the-clock armed security personnel, high boundary walls, and entrance monitoring for peace of mind.',
    category: 'services',
    iconName: 'ShieldCheck',
    featuredImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    highlight: '100% Safe Family Environment'
  },
  {
    id: 'fac-cleaning',
    title: 'On-site Cleaning Staff',
    description: 'Dedicated caretakers to assist with pool maintenance, trash clearance, and general housekeeping on demand.',
    category: 'services',
    iconName: 'Sparkles',
    featuredImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    highlight: 'Attentive Caretakers'
  }
];

export const EVENTS_DATA: EventCategory[] = [
  {
    id: 'wedding-functions',
    title: 'Wedding Functions',
    subtitle: 'Royal Open-Air Weddings under Starry Gadap Skies',
    shortDesc: 'Create magical Baraat & Walima memories with expansive stage areas, fairy lights, and grand entrance walkways.',
    fullDesc: 'Host a fairytale wedding amidst lush palm trees and shimmering water features. Our Gadap Town venues offer double lawns that accommodate grand stage backdrops, separate catering sections for 300+ guests, VIP air-conditioned bride suites, and secure parking.',
    recommendedFarmhouses: ['Paradise Cove Event Estate', 'Royal Palms Grand Estate'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    highlights: ['300+ Capacity Lawns', 'Bridal Suite with AC', 'Stage & Light Fixture Setup', 'Valet & Guarded Gate'],
    idealGuestCount: '100 - 400 Guests'
  },
  {
    id: 'birthday-parties',
    title: 'Birthday Celebrations',
    subtitle: 'Poolside Cake Cutting & Vibrant Outdoor Music',
    shortDesc: 'Unforgettable birthday bashes with pool splash activities, custom theme balloons, live BBQ, and sound system.',
    fullDesc: 'Whether it is a milestone 1st birthday or an energetic 25th pool party, Gadap Farmhouses deliver high energy and complete privacy. Enjoy poolside cake cutting, floaties, BBQ smoke grills, and late-night music under the stars.',
    recommendedFarmhouses: ['Al-Ghaffar Oasis Resort', 'Emerald Haven Farmhouse'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Poolside Cake Table Area', 'Bluetooth Sound Setup', 'Balloons & Light Decor space', 'Kids Water Slide'],
    idealGuestCount: '30 - 100 Guests'
  },
  {
    id: 'mehndi-nights',
    title: 'Mehndi & Mayun Events',
    subtitle: 'Vibrant Colors, Dholak Beats & Festive Pool Lighting',
    shortDesc: 'Celebrate pre-wedding rituals with traditional charpais, marigold flower decor, and dholak circles.',
    fullDesc: 'Bring your family together for colorful Mehndi nights filled with dancing, dholak sessions, and fragrant flower arrangements surrounding illuminated pools and garden lounges.',
    recommendedFarmhouses: ['Al-Ghaffar Oasis Resort', 'Royal Palms Grand Estate'],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Traditional Lounge Decor', 'Sound System Setup', 'Dance Floor Lawn Area', 'Private Changing Rooms'],
    idealGuestCount: '50 - 150 Guests'
  },
  {
    id: 'family-gatherings',
    title: 'Family Picnics & Gatherings',
    subtitle: 'Wholesome Fun for Grandparents, Parents & Kids',
    shortDesc: 'Safe, gated environments with clean pools, indoor games, shaded charpais, and fresh open air.',
    fullDesc: 'Reconnect with loved ones in complete safety and comfort. Gadap Town provides fresh breeze, clean water pools with separate kids areas, and spacious kitchens for family cooking or live BBQ.',
    recommendedFarmhouses: ['Sunset Valley Retreat', 'Al-Ghaffar Oasis Resort'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['100% Gated & Secure', 'Filtered Water Pools', 'Indoor Sofa Lounges', 'Kitchen & Deep Freezer'],
    idealGuestCount: '20 - 80 Guests'
  },
  {
    id: 'bbq-nights',
    title: 'BBQ & Bonfire Nights',
    subtitle: 'Sizzling Seekh Kababs & Warm Bonfire Circles',
    shortDesc: 'Cold Karachi winter evenings elevated with hot charcoal grills and cozy fireside music.',
    fullDesc: 'Enjoy winter in Karachi the right way. Gadap Farmhouses provides full BBQ setups, charcoal supply assistance, outdoor seating, and rustic bonfire firepits.',
    recommendedFarmhouses: ['Al-Ghaffar Oasis Resort', 'Emerald Haven Farmhouse'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Brick BBQ Station', 'Stone Bonfire Pit', 'Outdoor Dining Tables', 'Live BBQ Chef option'],
    idealGuestCount: '20 - 70 Guests'
  }
];

export const PACKAGES_DATA: Package[] = [
  {
    id: 'pkg-family',
    title: 'Family Day Out Package',
    badge: 'Most Popular for Families',
    suitableFor: 'Families, Relatives & Kids',
    guestLimit: 'Up to 30 Guests',
    duration: '12 Hours (Day Pass or Night Shift)',
    price12hr: 25000,
    price24hr: 42000,
    features: [
      'Exclusive Private Access (No sharing)',
      'Filtered Main Pool + Kids Splash Area',
      '2 Air-Conditioned Bedrooms + Attached Baths',
      'Fully Functional Kitchen with Deep Freezer',
      'Built-in BBQ Grill Station (Charcoal ready)',
      'Indoor Games (Carrom, Table Tennis)',
      '100% Standby Generator Backup',
      'Complimentary Tea Kettle Setup'
    ],
    includedFacilities: ['Swimming Pool', 'Kids Pool', 'BBQ Area', 'AC Rooms', 'Generator Backup', 'Security'],
    popular: true
  },
  {
    id: 'pkg-friends',
    title: 'Friends Overnighter Package',
    badge: '24-Hour Night Party',
    suitableFor: 'Friend Groups & Alumni Reunions',
    guestLimit: 'Up to 25 Guests',
    duration: '24 Hours Full Stay',
    price12hr: 28000,
    price24hr: 45000,
    features: [
      '24-Hour Complete Farmhouse Reservation',
      'All-Night Pool Access with Night Floodlights',
      'Snooker Table & Foosball Lounge',
      'Cricket Ground with Floodlights',
      'Stone Bonfire Pit & Charcoal BBQ Corner',
      'High-Power Bluetooth Speaker System',
      'Uninterrupted Diesel Power Generator',
      'Late Checkout Flexibility'
    ],
    includedFacilities: ['Pool Night Light', 'Snooker Room', 'Cricket Ground', 'BBQ Pit', 'Music System', 'WiFi']
  },
  {
    id: 'pkg-birthday',
    title: 'Luxury Birthday Gala',
    badge: 'Celebration Special',
    suitableFor: 'Birthday Parties & Anniversaries',
    guestLimit: 'Up to 60 Guests',
    duration: '12 Hours Reservation',
    price12hr: 35000,
    price24hr: 58000,
    features: [
      'Poolside Decorated Cake Cutting Lawn Area',
      'Ambient Fairy Light Garden Setup Space',
      'Exclusive Access to Main Villa & Pool',
      '3 AC Lounges for Guest Comfort',
      'Sound System with Mic Setup',
      'Dedicated On-site Caretaker for Assistance',
      'Private Valet Parking Area',
      'Optional Catering & Decor Add-ons'
    ],
    includedFacilities: ['Decor Space', 'Sound System', '3 AC Lounges', 'Swimming Pool', 'Caretaker', 'BBQ'],
    popular: false
  },
  {
    id: 'pkg-wedding',
    title: 'Royal Destination Wedding',
    badge: 'Grand Celebration',
    suitableFor: 'Weddings, Baraat, Walima & Mehndi',
    guestLimit: 'Up to 250 Guests',
    duration: '14 Hours Function Duration',
    price12hr: 65000,
    price24hr: 110000,
    features: [
      'Sprawling 20,000+ sq ft Double Event Lawn',
      'Illuminated Swimming Pool Backdrop',
      'Bridal Dressing Suite with AC & Private Bath',
      'Groom Suite & VIP Family Lounge',
      'Heavy Commercial Generator Unit with Fuel',
      'Guarded Entrance with Security Guards',
      'Commercial Catering Kitchen Bay',
      'Ample Inside Compound Parking (40+ Cars)'
    ],
    includedFacilities: ['Mega Lawns', 'Bridal Suite', 'Heavy Generator', 'Catering Bay', 'Security Guards', 'Valet'],
    popular: true
  },
  {
    id: 'pkg-corporate',
    title: 'Corporate Team Retreat',
    badge: 'Business & Team Building',
    suitableFor: 'Offices, Companies & Agencies',
    guestLimit: 'Up to 100 Guests',
    duration: '12 Hours Day Out',
    price12hr: 45000,
    price24hr: 75000,
    features: [
      'Access to Cricket Ground & Volleyball Court',
      'Air-Conditioned Indoor Meeting & Dining Hall',
      'Projector / Screen Placement Space',
      'High Speed WiFi Coverage',
      'Continuous Swimming Pool Access',
      'Full Generator Backup Guarantee',
      'Live BBQ Setup Assistance',
      'Formal Invoice & GST Billing Available'
    ],
    includedFacilities: ['Cricket Pitch', 'AC Hall', 'WiFi', 'Swimming Pool', 'Power Generator', 'Invoice']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-amenity-1',
    title: 'Filtered Swimming Pools & Waterfalls',
    category: 'Swimming Pool',
    imageUrl: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/731366317_122185235084873533_954250061520681854_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1600&ctp=s1200x1600&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7gBr3Q4zt-0Q7kNvwGZtICT&_nc_oc=AdqjIp2cHtyhbswEYATDVtGtChOipcMzfPhu0_GbdPJTkWKBJnBsVQCYU9v5FEU5XNl-bWrNQw0rRlRl0KwVFcdr&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=9MJ182IROdSpz02B5G_h6w&_nc_ss=7b2a8&oh=00_AQCTF7lh9AgRLdQMzomeeuaWLqL8AjPnBabjx_ZtYnNEdQ&oe=6A6D3C00',
    caption: 'Adult deep-end pool & shallow splash pools with continuous water filtration and cascading waterfalls.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-2',
    title: 'Floodlit Turf Cricket Pitch & Sports Turf',
    category: 'Sports Activities',
    imageUrl: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/749315193_122188669226873533_785521168422915001_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LV2LLdbvJvAQ7kNvwFxkMwU&_nc_oc=AdppGEMNEtz_fFVePJyOqr5HGTVJ1R_spJowJ7wy6OUZ1X-ZqSOO0vCCHVOPvkBehz90lyR9syNUvvba7nWOT1HD&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=T7ri_NAwDsh7qkdg86r_Lw&_nc_ss=7b2a8&oh=00_AQCfu7gE6ZvLVzSLwQ6HviLhrPFpF9Xo3GVKbsE-OF0O8w&oe=6A6D410B',
    caption: 'Full-length turf cricket pitch equipped with high-power LED floodlights for night matches.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-3',
    title: 'Indoor Gaming Lounge',
    category: 'Indoor Games',
    imageUrl: 'https://lh3.googleusercontent.com/d/1LP3fy-fupaDEJBer5t8yjRWFl4xLgU04',
    caption: 'Spacious indoor gaming lounge featuring full-size snooker tables, foosball, table tennis, and carrom.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-4',
    title: 'Executive Bedrooms & Suites',
    category: 'Rooms',
    imageUrl: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/753241586_122188669688873533_5485373068986998170_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1htThUruZsoQ7kNvwGGRrBD&_nc_oc=Adqp6vwgfMSsJFsTXFCRNMxJsJxvH-gVDfgHnfmDDf7arNRYZDbmwC2hKzozaHkMzkDBUMJObkJhYHztBovJf7b6&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=it9OKhO5oSDoeyKFrRhjeA&_nc_ss=7b2a8&oh=00_AQAPgdPW_fneGoNaMcPR7ti6gbmrDGxGkFgU3DjMAH1Rrg&oe=6A6D5B55',
    caption: 'Master bedrooms with attached modern washrooms, clean fresh bedding, vanity mirrors, and comfortable seating.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-5',
    title: 'Built-in Live BBQ Pits & Dining Gazebos',
    category: 'BBQ Area',
    imageUrl: 'https://lh3.googleusercontent.com/d/1mHdR0SPca5hLzn0rRoUuDCRSP0D6PrsD',
    caption: 'Built-in brick charcoal BBQ grills, skewers, preparation counters, and shaded outdoor dining gazebos.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-6',
    title: 'Expansive Lush Lawns & Event Grounds',
    category: 'Gardens',
    imageUrl: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/753503103_122188670018873533_196524260830104006_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pEjH5_Y-hVoQ7kNvwEHv7D4&_nc_oc=Adr0H92iq6Dd6xPeqal_C4dVvD8yphjp0Krv6Ho18d7AQBfPI-xK6uiRAtC7u8vife8&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=NKyUxvHjSOEbdP-TMSwPVg&_nc_ss=7b2a8&oh=00_AQDfpRjTlOmSkDKBq-jeGIExnX_c5Kicbb1ry7Jj0G8BNw&oe=6A6D3346',
    caption: 'Immaculately manicured green grounds surrounded by tall date palm trees and ambient lighting for events.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-amenity-7',
    title: 'Kids Splash Slides & Family Play Zone',
    category: 'Swimming Pool',
    imageUrl: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/752807453_122188670306873533_4165723509216842957_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-9TUGoAGLfAQ7kNvwHCwRor&_nc_oc=AdoYOfPHZiAa5K9GnaqVzB-jkDo7xgyI5KMHpZJBVkMsPJhaQvaOsDz1frDu2K9BH68&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=D2Gs1QfG4oJQhvjiJt1wMg&_nc_ss=7b2a8&oh=00_AQD1up4JvsxAaxA87ahkzhqia3vg97p3ZU2JjdH-l5EECA&oe=6A6D7CDD',
    caption: 'Safe water slides, shallow splash pools, garden swings, and fully enclosed boundary walls.',
    farmhouseName: 'Gadap Farmhouses'
  },
  {
    id: 'gal-1',
    title: 'Illuminated Night Pool Deck',
    category: 'Swimming Pool',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crystal clear illuminated pool for nighttime swimming in Gadap Town.',
    farmhouseName: 'Royal Palms Grand Estate'
  },
  {
    id: 'gal-3',
    title: 'Manicured Event Lawn',
    category: 'Gardens',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush green velvet grass ideal for outdoor weddings and sports.',
    farmhouseName: 'Paradise Cove Event Estate'
  },
  {
    id: 'gal-6',
    title: 'Gadap Sunset Horizon',
    category: 'Night View',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Breathtaking golden evening sky over Gadap Town farmhouses.',
    farmhouseName: 'Sunset Valley Retreat'
  },
  {
    id: 'gal-7',
    title: 'Poolside Birthday Stage',
    category: 'Birthday Events',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Colorful birthday balloon arch and cake cutting table setup.',
    farmhouseName: 'Royal Palms Grand Estate'
  },
  {
    id: 'gal-8',
    title: 'Fairy Light Wedding Banquet',
    category: 'Wedding Events',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Royal outdoor wedding dinner arrangement for 300 guests.',
    farmhouseName: 'Paradise Cove Event Estate'
  },
  {
    id: 'gal-9',
    title: 'Outdoor Garden Dining',
    category: 'Outdoor Dining',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Under-the-stars seating arrangements surrounded by nature.',
    farmhouseName: 'Palm Riviera Luxury Villa'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Syed Tariq Hashmi',
    eventDate: 'June 2026',
    eventType: 'Family Birthday Picnic',
    rating: 5,
    farmhouseName: 'Royal Palms Grand Estate',
    comment: 'We booked Royal Palms for my daughter’s 10th birthday party. The pool was crystal clean, the generator ran without a single hiccup, and Hammad Ghaffar bhai personally made sure everything was top notch. Highly recommended for families in Karachi!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    location: 'Gulshan-e-Iqbal, Karachi',
    verifiedBooking: true
  },
  {
    id: 'rev-2',
    author: 'Zainab Fatima',
    eventDate: 'May 2026',
    eventType: 'Mehndi Night',
    rating: 5,
    farmhouseName: 'Al-Ghaffar Oasis Resort',
    comment: 'Al-Ghaffar Oasis was the perfect venue for our cousin’s Mehndi night. The evening lighting around the pool looked surreal in photos. Safe boundary walls, courteous staff, and very clean washrooms!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'DHA Phase 6, Karachi',
    verifiedBooking: true
  },
  {
    id: 'rev-3',
    author: 'Muhammad Fahad Khan',
    eventDate: 'July 2026',
    eventType: 'Corporate Annual Picnic',
    rating: 5,
    farmhouseName: 'Paradise Cove Event Estate',
    comment: 'Our tech firm organized our annual retreat at Paradise Cove for 150 employees. The cricket ground with floodlights was a huge hit! Booking through Hammad Ghaffar was smooth and transparent.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    location: 'PECHS, Karachi',
    verifiedBooking: true
  },
  {
    id: 'rev-4',
    author: 'Dr. Shahbaz Ahmed',
    eventDate: 'April 2026',
    eventType: 'Weekend Family Getaway',
    rating: 5,
    farmhouseName: 'Emerald Haven Farmhouse',
    comment: 'The bonfire pit and infinity-style pool were magnificent. Being in Gadap Town gave us a genuine escape from the city hustle while staying completely secure. 10/10 hospitality!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    location: 'Askari 4, Karachi',
    verifiedBooking: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What facilities are available at Gadap Farmhouses?',
    answer: 'Our farmhouses feature filtered swimming pools, dedicated shallow kids pools, lush green lawns, brick BBQ grill setups, air-conditioned master bedrooms, indoor games (snooker, foosball, table tennis), cricket grounds with floodlights, 100% standby generator backup, commercial kitchens with deep freezers, high-speed WiFi, secure gated parking, and round-the-clock security guards.',
    category: 'facilities'
  },
  {
    id: 'faq-2',
    question: 'Can I book for one day (Day Pass or Night Shift)?',
    answer: 'Yes! We offer flexible booking slots including 12-Hour Day Pass (e.g. 9:00 AM to 9:00 PM), 12-Hour Night Shift (e.g. 10:00 PM to 10:00 AM), and 24-Hour Full Overnight stays. Custom multi-day booking packages are also available.',
    category: 'booking'
  },
  {
    id: 'faq-3',
    question: 'Is BBQ allowed and do you provide charcoal/skewers?',
    answer: 'Absolutely! BBQ is one of our most popular attractions. Each farmhouse has a dedicated brick BBQ pit and grill setup. We can also arrange charcoal, marinade assistance, or a professional live BBQ chef upon request.',
    category: 'facilities'
  },
  {
    id: 'faq-4',
    question: 'Do you provide event decorations and stage setups?',
    answer: 'Yes, we collaborate with top event planners in Karachi to provide customized floral backdrops, fairy light canopy tunnels, balloon arches, theme stage setups, and ambient lighting for weddings, birthdays, and corporate events.',
    category: 'events'
  },
  {
    id: 'faq-5',
    question: 'Can I arrange my own catering vendor or bring homemade food?',
    answer: 'Yes, you have complete freedom! You can bring your own cooked food, hire third-party catering services, or request our in-house buffet catering menu (Pakistani, Chinese, Live BBQ, Biryani, Halwa Puri breakfast).',
    category: 'events'
  },
  {
    id: 'faq-6',
    question: 'Is music allowed at the farmhouses?',
    answer: 'Yes, music and sound systems are allowed! We provide Bluetooth party speakers at select venues. Out of respect for neighboring properties, outdoor music volume must be moderated after 11:00 PM as per local regulations.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'Is parking available and is it secure?',
    answer: 'Yes, every farmhouse features an internal gated compound capable of securely parking 20 to 50+ cars and buses with night lighting and 24/7 security guard posts.',
    category: 'facilities'
  },
  {
    id: 'faq-8',
    question: 'Can I visit the farmhouse before making a booking payment?',
    answer: 'Yes! We warmly encourage pre-visit site inspections. Please call or message owner Hammad Ghaffar at +92 334 3705720 to schedule a convenient inspection slot before finalizing your date.',
    category: 'booking'
  },
  {
    id: 'faq-9',
    question: 'How do I confirm my booking?',
    answer: 'You can easily confirm your booking by contacting us via phone or WhatsApp at +92 334 3705720. A advance booking deposit (via Bank Transfer, JazzCash, or EasyPaisa) locks in your chosen date and venue.',
    category: 'booking'
  }
];
