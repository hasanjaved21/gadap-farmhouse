import React, { useState } from 'react';
import {
  Sparkles,
  CalendarCheck,
  Building2,
  Users,
  CheckCircle2,
  ShieldCheck,
  Waves,
  Trophy,
  Flame,
  Trees,
  Car,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Search,
  Check,
  Mail,
  MapPin,
  ExternalLink,
  HelpCircle,
  Tag,
  Gamepad2,
  Utensils,
  Zap,
  Camera,
  Sun,
  Wifi,
  Music,
  Heart,
  Smile,
  Activity,
  Armchair,
  Bed,
  DoorClosed
} from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BookingModal } from './components/BookingModal';
import { SEOModal } from './components/SEOModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import {
  BRAND_INFO,
  FARMHOUSES_DATA,
  FACILITIES_DATA,
  EVENTS_DATA,
  PACKAGES_DATA,
  GALLERY_DATA,
  FAQ_DATA
} from './data/mockData';
import { GalleryItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedFarmhouseId, setPreselectedFarmhouseId] = useState<string | undefined>(undefined);
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filters state for sub-views
  const [farmhouseSearch, setFarmhouseSearch] = useState('');
  const [farmhouseCapacityFilter, setFarmhouseCapacityFilter] = useState<number>(0);
  const [facilityCategoryFilter, setFacilityCategoryFilter] = useState('all');
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState('all');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');

  const openBookingModal = (farmhouseId?: string) => {
    setPreselectedFarmhouseId(farmhouseId);
    setBookingModalOpen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper icon mapper for facilities
  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-6 h-6" />;
      case 'Smile': return <Smile className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6" />;
      case 'Armchair': return <Armchair className="w-6 h-6" />;
      case 'Bed': return <Bed className="w-6 h-6" />;
      case 'Utensils': return <Utensils className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      case 'Camera': return <Camera className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Wifi': return <Wifi className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      case 'DoorClosed': return <DoorClosed className="w-6 h-6" />;
      case 'Car': return <Car className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  // Filtered lists
  const filteredFarmhouses = FARMHOUSES_DATA.filter((farm) => {
    const matchesSearch = farm.name.toLowerCase().includes(farmhouseSearch.toLowerCase()) ||
      farm.description.toLowerCase().includes(farmhouseSearch.toLowerCase()) ||
      farm.tagline.toLowerCase().includes(farmhouseSearch.toLowerCase());
    const matchesCapacity = farm.capacity >= farmhouseCapacityFilter;
    return matchesSearch && matchesCapacity;
  });

  const filteredFacilities = FACILITIES_DATA.filter((fac) => {
    if (facilityCategoryFilter === 'all') return true;
    return fac.category === facilityCategoryFilter;
  });

  const galleryCategories = ['all', ...Array.from(new Set(GALLERY_DATA.map(g => g.category)))];
  const filteredGallery = GALLERY_DATA.filter((item) => {
    if (galleryCategoryFilter === 'all') return true;
    return item.category === galleryCategoryFilter;
  });

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = faqCategoryFilter === 'all' || faq.category === faqCategoryFilter;
    const matchesSearch = faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'bg-neutral-950 text-white' : 'bg-red-50/20 text-slate-900'}`}>
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        openBookingModal={openBookingModal}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openSeoModal={() => setSeoModalOpen(true)}
      />

      {/* Main Content Router View */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={handleTabChange}
            openBookingModal={openBookingModal}
            openLightbox={(item) => setLightboxItem(item)}
            darkMode={darkMode}
          />
        )}

        {/* FARMHOUSES CATALOG PAGE */}
        {activeTab === 'farmhouses' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Header Banner */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200">
                Exclusive Gadap Town Estates
              </span>
              <h1 className={`font-serif font-extrabold text-4xl sm:text-5xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Luxury Farmhouse Collection
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore fully verified farmhouses featuring private filtered swimming pools, 100% generator backup, manicured event lawns, and 24/7 security in Gadap Town, Karachi.
              </p>
            </div>

            {/* Search & Filter Control Bar */}
            <div className={`p-6 rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 shadow-xl'} border flex flex-col md:flex-row items-center justify-between gap-4`}>
              <div className="relative w-full md:w-1/2">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by farmhouse name, pool features, or amenities..."
                  value={farmhouseSearch}
                  onChange={(e) => setFarmhouseSearch(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-2xl ${darkMode ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'} border text-sm focus:outline-none focus:border-red-500`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <span className="text-xs text-slate-500 font-bold">Min Capacity:</span>
                {[0, 50, 100, 200].map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setFarmhouseCapacityFilter(cap)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      farmhouseCapacityFilter === cap
                        ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                        : darkMode
                        ? 'bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-red-500/40'
                        : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-red-50'
                    }`}
                  >
                    {cap === 0 ? 'Any Capacity' : `${cap}+ Guests`}
                  </button>
                ))}
              </div>
            </div>

            {/* Farmhouses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFarmhouses.map((farm) => (
                <div
                  key={farm.id}
                  className={`rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800 hover:border-red-500/50' : 'bg-white border-red-100 hover:border-red-300 hover:shadow-2xl shadow-xl'} border overflow-hidden transition-all duration-300 group flex flex-col justify-between`}
                >
                  <div>
                    {/* Hero Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={farm.heroImage}
                        alt={farm.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                      <span className="absolute top-4 left-4 bg-red-600/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        ⭐ {farm.rating} ({farm.reviewCount} Reviews)
                      </span>

                      <span className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
                        Cap: {farm.capacity} Guests
                      </span>

                      <div className="absolute bottom-3 left-4 right-4">
                        <h2 className="font-serif font-bold text-2xl text-white drop-shadow-md">
                          {farm.name}
                        </h2>
                        <p className="text-xs text-red-200 font-medium line-clamp-1">
                          {farm.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className={`flex items-center space-x-2 ${darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-300' : 'bg-red-50/60 border-red-100 text-slate-800'} p-2.5 rounded-xl border`}>
                          <Waves className="w-4 h-4 text-red-600 shrink-0" />
                          <span className="truncate font-medium">{farm.poolSize.split(' ')[0]} Pool</span>
                        </div>

                        <div className={`flex items-center space-x-2 ${darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-300' : 'bg-emerald-50/60 border-emerald-100 text-slate-800'} p-2.5 rounded-xl border`}>
                          <Trees className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate font-medium">{farm.lawnSize.split(' ')[0]} Lawn</span>
                        </div>
                      </div>

                      <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed line-clamp-3`}>
                        {farm.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider block">Key Amenities:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {farm.amenities.slice(0, 4).map((amenity, i) => (
                            <span
                              key={i}
                              className={`text-[10px] ${darkMode ? 'bg-neutral-950 text-neutral-300 border-neutral-800' : 'bg-slate-100 text-slate-700 border-slate-200'} border px-2.5 py-1 rounded-lg font-medium`}
                            >
                              ✓ {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Footer */}
                  <div className={`p-6 pt-0 ${darkMode ? 'border-neutral-800/80' : 'border-red-100'} border-t flex items-center justify-between gap-4 mt-4`}>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">12-Hr Shift From</span>
                      <span className="font-serif font-bold text-xl text-red-600">
                        PKR {farm.startingPrice12Hr.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => openBookingModal(farm.id)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 hover:brightness-110 shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95"
                    >
                      <CalendarCheck className="w-4 h-4 text-white" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FACILITIES PAGE */}
        {activeTab === 'facilities' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                5-Star Amenities
              </span>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
                Resort Facilities & Amenities
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Every Gadap Town farmhouse is packed with resort-quality features including filtered pools, heavy generator backup, sports pitches, and AC master suites.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'all', label: 'All 22+ Facilities' },
                { id: 'water', label: 'Swimming Pools' },
                { id: 'sports', label: 'Sports & Games' },
                { id: 'comfort', label: 'Rooms & Lounges' },
                { id: 'services', label: 'Power & Support' },
                { id: 'events', label: 'Events & Bonfire' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFacilityCategoryFilter(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    facilityCategoryFilter === cat.id
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                      : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFacilities.map((fac) => (
                <div
                  key={fac.id}
                  className="rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 overflow-hidden shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={fac.featuredImage}
                      alt={fac.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/30">
                      {fac.highlight}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                          {renderFacilityIcon(fac.iconName)}
                        </div>
                        <h3 className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                          {fac.title}
                        </h3>
                      </div>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {fac.description}
                      </p>
                    </div>

                    <button
                      onClick={() => openBookingModal()}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-md flex items-center justify-center space-x-1 mt-3"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Inquire Facility</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTS PAGE */}
        {activeTab === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                Memorable Gatherings
              </span>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
                Event Hosting & Celebrations
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether hosting 350+ guest grand weddings or intimate 20-person pool parties, Gadap Farmhouses provides tailored venues and event setups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EVENTS_DATA.map((evt) => (
                <div
                  key={evt.id}
                  className="rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 overflow-hidden shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>

                    <span className="absolute top-4 right-4 bg-amber-500 text-neutral-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                      {evt.idealGuestCount}
                    </span>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h2 className="font-serif font-bold text-2xl text-white drop-shadow-md">
                        {evt.title}
                      </h2>
                      <p className="text-xs text-amber-300 font-medium">
                        {evt.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {evt.fullDesc}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Key Event Features:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {evt.highlights.map((h, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-xs text-neutral-300 bg-neutral-950 p-2 rounded-xl border border-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                      <div className="text-[11px] text-neutral-400">
                        <span>Top Venues: </span>
                        <strong className="text-amber-300">{evt.recommendedFarmhouses.join(', ')}</strong>
                      </div>

                      <button
                        onClick={() => openBookingModal()}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-lg flex items-center space-x-1 shrink-0"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>Reserve Event</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PACKAGES PAGE */}
        {activeTab === 'packages' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                Transparent All-Inclusive Rates
              </span>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
                Luxury Booking Packages
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Choose from 12-hour day/night shift packages or full 24-hour overnight stay deals with generator fuel, water filtration, and caretaker support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PACKAGES_DATA.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl bg-neutral-900 border overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between relative ${
                    pkg.popular ? 'border-amber-500 ring-2 ring-amber-500/20 scale-102' : 'border-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-amber-500 text-neutral-950 text-center text-xs font-bold py-1.5 uppercase tracking-widest">
                      ⭐ Most Popular Choice
                    </div>
                  )}

                  <div className="p-8 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-500/30 px-3 py-1 rounded-full">
                        {pkg.badge}
                      </span>
                      <h2 className="font-serif font-bold text-2xl text-white mt-3">
                        {pkg.title}
                      </h2>
                      <p className="text-xs text-neutral-400 mt-1">
                        Suitable: {pkg.suitableFor} • {pkg.guestLimit}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-neutral-400 font-bold uppercase">12-Hour Shift:</span>
                        <span className="font-serif font-bold text-2xl text-amber-400">
                          PKR {pkg.price12hr.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline border-t border-neutral-800/80 pt-2">
                        <span className="text-xs text-neutral-400 font-bold uppercase">24-Hour Stay:</span>
                        <span className="font-serif font-bold text-lg text-amber-300">
                          PKR {pkg.price24hr.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Package Highlights:</span>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <button
                      onClick={() => openBookingModal()}
                      className="w-full py-3.5 rounded-2xl text-sm font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-xl flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Reserve Package</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY PAGE */}
        {activeTab === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                Visual Showcase
              </span>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
                Photo & Video Gallery
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Take a virtual tour of our swimming pools, luxury suites, illuminated event lawns, and BBQ pits across Gadap Town.
              </p>
            </div>

            {/* Gallery Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                    galleryCategoryFilter === cat
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                      : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  {cat === 'all' ? 'All Gallery Photos' : cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 overflow-hidden shadow-xl group cursor-pointer relative"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
                      {item.category}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <h3 className="font-serif font-bold text-sm text-white drop-shadow-md">
                        {item.title}
                      </h3>
                      {item.farmhouseName && (
                        <p className="text-[10px] text-amber-300/90 truncate">
                          📍 {item.farmhouseName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {activeTab === 'contact' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                24/7 Helpline & Location
              </span>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
                Contact Gadap Farmhouses
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Reach out directly to owner Hammad Ghaffar for instant date confirmation, pre-visit inspections, or customized package inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Direct Info Card */}
              <div className="p-8 rounded-3xl bg-neutral-900 border border-amber-500/30 space-y-6 shadow-2xl">
                <h2 className="font-serif font-bold text-2xl text-white border-b border-neutral-800 pb-3">
                  Direct Owner Concierge
                </h2>

                <div className="space-y-4 text-sm text-neutral-300">
                  <a href={`tel:${BRAND_INFO.phoneClean}`} className="flex items-start space-x-3 p-3 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-colors">
                    <PhoneCall className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400">Direct Phone Hotline</p>
                      <p className="font-bold text-white text-base">{BRAND_INFO.phone}</p>
                    </div>
                  </a>

                  <a href={`https://wa.me/${BRAND_INFO.phoneClean}`} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 p-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors">
                    <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-emerald-300">WhatsApp 24/7 Response</p>
                      <p className="font-bold text-emerald-400 text-base">{BRAND_INFO.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${BRAND_INFO.email}`} className="flex items-start space-x-3 p-3 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-colors">
                    <Mail className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400">Email Inquiry</p>
                      <p className="font-medium text-white text-xs break-all">{BRAND_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3 p-3 rounded-2xl bg-neutral-950 border border-neutral-800">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400">Main Office / Address</p>
                      <p className="text-xs text-neutral-300">{BRAND_INFO.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openBookingModal()}
                    className="w-full py-3.5 rounded-2xl text-sm font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-xl flex items-center justify-center space-x-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Instant Reserve Request</span>
                  </button>
                </div>
              </div>

              {/* Quick Message Form */}
              <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4 shadow-2xl">
                <h2 className="font-serif font-bold text-2xl text-white border-b border-neutral-800 pb-3">
                  Send Quick Inquiry
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    openBookingModal();
                  }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="text-neutral-400 font-bold block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hammad Ahmed"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 font-bold block mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 font-bold block mb-1">Your Event / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us your preferred date, guest count, or event type..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-lg text-xs uppercase tracking-wider"
                  >
                    Submit Booking Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Component */}
      <Footer
        setActiveTab={handleTabChange}
        openBookingModal={openBookingModal}
        openSeoModal={() => setSeoModalOpen(true)}
      />

      {/* Floating Action WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedFarmhouseId={preselectedFarmhouseId}
        darkMode={darkMode}
      />

      <SEOModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        openBookingModal={openBookingModal}
      />
    </div>
  );
}
