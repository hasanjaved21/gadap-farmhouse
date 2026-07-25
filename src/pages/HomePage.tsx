import React, { useState, useEffect, useRef } from 'react';
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
  ChevronLeft,
  Play,
  ArrowRight,
  PhoneCall,
  Utensils,
  Smile,
  Heart,
  MessageSquare,
  Quote,
  Bot
} from 'lucide-react';
import { FARMHOUSES_DATA, REVIEWS_DATA, EVENTS_DATA, BRAND_INFO } from '../data/mockData';
import { Farmhouse } from '../types';
import { AIAgentModal } from '../components/AIAgentModal';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: (farmhouseId?: string) => void;
  openLightbox: (item: any) => void;
  darkMode?: boolean;
}

const CountUpNumber: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
}> = ({ end, suffix = '+', duration = 9000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // Smooth ease-out cubic
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  openBookingModal,
  openLightbox,
  darkMode = true
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'large' | 'pools'>('all');
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [aiAgentOpen, setAiAgentOpen] = useState(false);

  // Review Carousel Auto & Manual Scroll States
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const [isPausedReviews, setIsPausedReviews] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    if (isPausedReviews) return;
    const interval = setInterval(() => {
      if (reviewsScrollRef.current) {
        const container = reviewsScrollRef.current;
        const cardWidth = container.firstElementChild?.clientWidth || 380;
        const gap = 24;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + cardWidth >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setActiveReviewIndex(0);
        } else {
          const nextScroll = container.scrollLeft + cardWidth + gap;
          container.scrollTo({ left: nextScroll, behavior: 'smooth' });
          const newIdx = Math.min(
            Math.round(nextScroll / (cardWidth + gap)),
            REVIEWS_DATA.length - 1
          );
          setActiveReviewIndex(newIdx);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPausedReviews]);

  const handleManualReviewScroll = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const container = reviewsScrollRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 380;
      const gap = 24;
      const amount = cardWidth + gap;
      const targetScroll = direction === 'left' ? container.scrollLeft - amount : container.scrollLeft + amount;
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });

      const newIdx = Math.max(
        0,
        Math.min(
          Math.round(targetScroll / (cardWidth + gap)),
          REVIEWS_DATA.length - 1
        )
      );
      setActiveReviewIndex(newIdx);
    }
  };

  const scrollToReview = (index: number) => {
    if (reviewsScrollRef.current) {
      const container = reviewsScrollRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 380;
      const gap = 24;
      container.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
      setActiveReviewIndex(index);
    }
  };

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
      tag: '5-Star Resort Hospitality',
      heading: 'Escape the City. Experience Nature.',
      subheading: 'Book premium farmhouses in Gadap Town for birthdays, family gatherings, weddings, BBQ nights, corporate events, and unforgettable celebrations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80',
      tag: 'Filtered Swimming Pools',
      heading: 'Crystal Water & Private Pools',
      subheading: 'Continuous water filtration, shallow kids splash areas, night floodlighting, and poolside lounges designed for total relaxation.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80',
      tag: 'Grand Event Lawns',
      heading: 'Royal Weddings & BBQ Nights',
      subheading: 'Spacious green grounds capable of hosting 350+ guests with complete generator backup and secure gated parking.'
    }
  ];

  const whyChooseHighlights = [
    { title: 'Luxury Swimming Pools', desc: 'Deep end and shallow kids pools with continuous filtration systems and night pool lights.', icon: Waves },
    { title: 'Sports Facilities', desc: 'Floodlit cricket pitch, football turf, snooker tables, foosball, and indoor games.', icon: Trophy },
    { title: 'Beautiful Gardens', desc: 'Expansive lush green lawns surrounded by palm trees, flower beds, and shaded gazebos.', icon: Trees },
    { title: 'BBQ Setup', desc: 'Built-in brick BBQ grills, charcoal pits, skewers, and live BBQ chef options.', icon: Flame },
    { title: 'Affordable Packages', desc: 'Competitive transparent pricing for 12-hour day passes and 24-hour overnight stays.', icon: Sparkles },
    { title: 'Secure Parking', desc: 'Internal boundary wall compound parking for 20+ cars with security guard watch.', icon: Car },
    { title: 'Family Friendly', desc: 'Safe, gated, highly hygienic family atmosphere suitable for women, elders, and toddlers.', icon: Users }
  ];

  const filteredFarmhouses = FARMHOUSES_DATA.filter((farm) => {
    if (activeCategoryFilter === 'large') return farm.capacity >= 100;
    if (activeCategoryFilter === 'pools') return farm.hasKidsPool;
    return true;
  });

  return (
    <div className="space-y-20 pb-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[88vh] min-h-[580px] flex items-center justify-center overflow-hidden bg-neutral-950">
        {/* Background Image Carousel / Video Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[heroSlideIndex].image}
            alt="Luxury Gadap Farmhouse Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>
          <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/30 to-neutral-950/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-xs sm:text-sm font-bold shadow-2xl border border-red-400 animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-4 h-4 text-white" />
            <span>{heroSlides[heroSlideIndex].tag}</span>
          </div>

          <h1 className="font-serif font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight drop-shadow-lg">
            {heroSlides[heroSlideIndex].heading.split('.')[0]}.
            <span className="block text-red-500 font-serif font-light italic">
              {heroSlides[heroSlideIndex].heading.split('.')[1] || ' Experience Nature.'}
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-neutral-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            {heroSlides[heroSlideIndex].subheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-red-600 via-red-700 to-rose-800 hover:from-red-700 hover:to-rose-900 shadow-2xl shadow-red-600/40 transition-all duration-300 flex items-center space-x-2 border border-red-500/50 cursor-pointer active:scale-95"
            >
              <CalendarCheck className="w-5 h-5 text-white" />
              <span>Book Now</span>
            </button>

            <button
              onClick={() => setActiveTab('farmhouses')}
              className="px-8 py-4 rounded-2xl text-base font-bold text-red-700 bg-white hover:bg-red-50 border border-red-200 transition-all duration-300 flex items-center space-x-2 shadow-xl cursor-pointer"
            >
              <span>Explore Farmhouses</span>
              <ArrowRight className="w-5 h-5 text-red-600" />
            </button>

            <button
              onClick={() => setAiAgentOpen(true)}
              className="px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-xl shadow-red-600/30 border border-red-400/50 transition-all cursor-pointer flex items-center space-x-2.5 active:scale-95 group"
            >
              <div className="p-1 rounded-lg bg-white/20 text-white group-hover:rotate-12 transition-transform">
                <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
              </div>
              <span>Ask AI Agent</span>
              <Bot className="w-4 h-4 text-rose-200" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 pt-6">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlideIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  heroSlideIndex === idx ? 'w-8 bg-red-600' : 'w-2 bg-white/40 hover:bg-white'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-1 text-white text-xs animate-bounce">
          <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 font-bold">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-red-400 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-3xl ${darkMode ? 'bg-neutral-900 border border-red-900/60' : 'bg-white border-2 border-red-100 shadow-xl'} grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative overflow-hidden`}>
          <div className="space-y-1">
            <span className="font-serif font-black text-3xl sm:text-5xl text-red-600 block">
              <CountUpNumber end={100} suffix="+" />
            </span>
            <span className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'} uppercase tracking-wider block`}>Happy Families</span>
            <p className="text-[11px] text-slate-500">Satisfied Karachi Guests</p>
          </div>

          <div className="space-y-1">
            <span className="font-serif font-black text-3xl sm:text-5xl text-red-600 block">
              <CountUpNumber end={50} suffix="+" />
            </span>
            <span className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'} uppercase tracking-wider block`}>Luxury Farmhouses</span>
            <p className="text-[11px] text-slate-500">Curated in Gadap Town</p>
          </div>

          <div className="space-y-1">
            <span className="font-serif font-black text-3xl sm:text-5xl text-red-600 block">
              <CountUpNumber end={500} suffix="+" />
            </span>
            <span className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'} uppercase tracking-wider block`}>Successful Bookings</span>
            <p className="text-[11px] text-slate-500">Weddings, Parties & Picnics</p>
          </div>

          <div className="space-y-1">
            <span className="font-serif font-black text-3xl sm:text-5xl text-red-600 block">24/7</span>
            <span className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'} uppercase tracking-wider block`}>Customer Support</span>
            <p className="text-[11px] text-slate-500">Direct Owner Assistance</p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE GADAP FARMHOUSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200">
            Unmatched Hospitality
          </span>
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Why Choose Gadap Farmhouses?
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Gadap Town is Karachi’s premier farmhouse sanctuary. Here is why hundreds of families and businesses trust us for their special celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-neutral-900/90 border border-neutral-800 hover:border-red-500/40' : 'bg-white border border-red-100 hover:border-red-400 hover:shadow-xl hover:shadow-red-600/10'} transition-all duration-300 group hover:-translate-y-1 shadow-md`}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className={`font-serif font-bold text-lg ${darkMode ? 'text-white group-hover:text-red-400' : 'text-slate-900 group-hover:text-red-600'} transition-colors`}>
                  {item.title}
                </h3>
                <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed mt-2`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED FARMHOUSE COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">
              Handpicked Luxury Estates
            </span>
            <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Featured Farmhouse Collection
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Every venue is equipped with a swimming pool, generator backup, and lush green lawns.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={`flex items-center space-x-2 ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-200 shadow-sm'} p-1.5 rounded-2xl border`}>
            {[
              { id: 'all', label: 'All Venues' },
              { id: 'large', label: '100+ Guest Venues' },
              { id: 'pools', label: 'Kids Pool Included' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategoryFilter === tab.id
                    ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                    : darkMode ? 'text-neutral-400 hover:text-white' : 'text-slate-600 hover:text-red-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Farmhouse Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFarmhouses.map((farm) => (
            <div
              key={farm.id}
              className={`rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800 hover:border-red-500/40' : 'bg-white border-red-100 hover:border-red-400 hover:shadow-2xl hover:shadow-red-600/10'} overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                {/* Image & Badge Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={farm.heroImage}
                    alt={farm.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <span className="absolute top-4 left-4 bg-red-600/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    ⭐ {farm.rating} ({farm.reviewCount} Reviews)
                  </span>

                  <span className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-700">
                    Cap: {farm.capacity} Guests
                  </span>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif font-bold text-xl text-white drop-shadow-md">
                      {farm.name}
                    </h3>
                    <p className="text-xs text-red-200 font-medium line-clamp-1">
                      {farm.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Specs */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`flex items-center space-x-2 ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-red-50/60 border-red-100 text-slate-800'} p-2.5 rounded-xl border`}>
                      <Waves className="w-4 h-4 text-red-600 shrink-0" />
                      <span className="truncate font-medium">{farm.poolSize.split(' ')[0]} Pool</span>
                    </div>

                    <div className={`flex items-center space-x-2 ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-emerald-50/60 border-emerald-100 text-slate-800'} p-2.5 rounded-xl border`}>
                      <Trees className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate font-medium">{farm.lawnSize.split(' ')[0]} Lawn</span>
                    </div>
                  </div>

                  <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} line-clamp-2 leading-relaxed`}>
                    {farm.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {farm.amenities.slice(0, 3).map((amenity, i) => (
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

              {/* Price & Action Footer */}
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

        <div className="text-center pt-4">
          <button
            onClick={() => setActiveTab('farmhouses')}
            className="px-8 py-3.5 rounded-2xl text-sm font-bold text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-sm"
          >
            <span>View All Gadap Farmhouses</span>
            <ChevronRight className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </section>

      {/* 5. SERVICES & EVENT TYPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200">
            Tailored Celebrations
          </span>
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Services & Event Hosting
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            From intimate birthday pool parties to lavish wedding receptions and corporate tournaments, Gadap Farmhouses provides tailor-made settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS_DATA.map((evt) => (
            <div
              key={evt.id}
              className={`rounded-2xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 hover:border-red-300'} border overflow-hidden shadow-lg transition-all duration-300 group flex flex-col justify-between`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {evt.title}
                  </h3>
                  <span className="text-[10px] text-red-200 font-semibold">
                    Ideal: {evt.idealGuestCount}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                  {evt.shortDesc}
                </p>

                <div className={`pt-2 border-t ${darkMode ? 'border-neutral-800' : 'border-red-100'} flex items-center justify-between`}>
                  <button
                    onClick={() => setActiveTab('events')}
                    className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center space-x-1"
                  >
                    <span>Event Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openBookingModal()}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white bg-gradient-to-r from-red-600 to-rose-700"
                  >
                    Inquire Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 inline-block">
              Real Customer Words
            </span>
            <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              High Customer Satisfaction
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Read verified reviews from families and corporate organizations who booked Gadap Farmhouses.
            </p>
          </div>

          {/* Manual Scroll Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleManualReviewScroll('left')}
              className={`p-3 rounded-2xl ${darkMode ? 'bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-800' : 'bg-white text-slate-900 hover:bg-red-50 border-red-200'} border shadow-md transition-all active:scale-95 cursor-pointer`}
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 text-red-600" />
            </button>
            <button
              onClick={() => handleManualReviewScroll('right')}
              className={`p-3 rounded-2xl ${darkMode ? 'bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-800' : 'bg-white text-slate-900 hover:bg-red-50 border-red-200'} border shadow-md transition-all active:scale-95 cursor-pointer`}
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Reviews Container (Auto & Manual Scrollable) */}
        <div
          ref={reviewsScrollRef}
          onMouseEnter={() => setIsPausedReviews(true)}
          onMouseLeave={() => setIsPausedReviews(false)}
          onTouchStart={() => setIsPausedReviews(true)}
          onTouchEnd={() => setIsPausedReviews(false)}
          className="flex space-x-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
        >
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className={`w-[85vw] sm:w-[420px] shrink-0 snap-start p-7 rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800 hover:border-red-500/40' : 'bg-white border-red-100 shadow-xl hover:border-red-300'} border flex flex-col justify-between space-y-4 relative transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`font-serif font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{rev.author}</h3>
                    <p className="text-xs text-slate-500 font-medium">{rev.location} • {rev.eventType}</p>
                  </div>

                  <div className="flex text-red-600 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-red-600/20 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
                  <p className={`text-xs sm:text-sm ${darkMode ? 'text-neutral-300' : 'text-slate-700'} italic leading-relaxed pl-3 relative z-10`}>
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className={`pt-3 border-t ${darkMode ? 'border-neutral-800' : 'border-slate-100'} flex items-center justify-between text-[11px] text-slate-500`}>
                <span>Venue: <strong className="text-red-600 font-semibold">{rev.farmhouseName}</strong></span>
                <span className="flex items-center space-x-1 text-emerald-600 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Booking</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots Pagination */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToReview(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeReviewIndex === idx
                  ? 'w-8 bg-red-600'
                  : darkMode ? 'w-2.5 bg-neutral-800 hover:bg-neutral-700' : 'w-2.5 bg-slate-300 hover:bg-red-300'
              }`}
              title={`Go to review ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 7. QUICK CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-700 via-red-800 to-rose-950 text-white border border-red-600 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-red-200 uppercase tracking-widest block">
              Direct Owner Concierge
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Ready to Book Your Special Day?
            </h2>
            <p className="text-sm text-red-100 leading-relaxed">
              Speak directly with owner <strong>Hammad Ghaffar</strong> to lock in your date, schedule a pre-visit site tour, or customize your catering and decor package.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="px-6 py-3.5 rounded-xl font-bold text-red-700 bg-white hover:bg-red-50 flex items-center justify-center space-x-2 text-sm transition-all shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>Call +92 334 3705720</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl font-bold text-white bg-slate-950 hover:bg-slate-900 shadow-xl flex items-center justify-center space-x-2 text-sm transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Instant Reserve</span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Agent Concierge Modal */}
      <AIAgentModal
        isOpen={aiAgentOpen}
        onClose={() => setAiAgentOpen(false)}
        openBookingModal={openBookingModal}
        darkMode={darkMode}
      />
    </div>
  );
};
