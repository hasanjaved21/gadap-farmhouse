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
  Bot,
  Gamepad2,
  BedDouble,
  Zap,
  Moon
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
      image: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/753361657_122188669130873533_4792060991179590151_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9wB4C-iuDhMQ7kNvwEjyUME&_nc_oc=AdqBKEkIa82CZ7HFXRI11hV3vJ8pVoASf7-2pq3KBlkb-rsEmUbl7h-PyCRpLF4J6RA&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=TOWYmDFKJMHndBBMckMlTw&_nc_ss=7b2a8&oh=00_AQDtGy3_s6FGo4cKHvUogkoK-layOd5cUZx_w-_yHHXdNQ&oe=6A6D4A21',
      tag: '5-Star Resort & Farmhouses',
      heading: 'Escape the City. Discover Luxury.',
      subheading: 'Book premium farmhouses in Gadap Town for birthdays, family gatherings, weddings, BBQ nights, corporate events, and unforgettable celebrations.'
    },
    {
      image: 'https://lh3.googleusercontent.com/d/140lTiQV9NCrn5rHAfLy8XxK8TtiMwtH_',
      tag: 'Filtered Swimming Pools',
      heading: 'Crystal Water & Private Pools',
      subheading: 'Continuous water filtration, shallow kids splash areas, night floodlighting, and poolside lounges designed for total relaxation.'
    },
    {
      image: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/752497548_122188669970873533_2773057153196852196_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TCeb-O7ziVoQ7kNvwGXduU-&_nc_oc=Adqb5OLXFaNEcnBZLSFhx4d2PSdrHVFMUxDkPJLsGqyeB0y8l9WeBTU91Ros1HjDLvPAlxu9jkJEva4BbKrDHHVR&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=1JxizQdmw0ONyFy2rtrCJA&_nc_ss=7b2a8&oh=00_AQGazbQGQqqz3GVcOEEdU8phafxwTgHywkoNf480i8misw&oe=6A715240',
      tag: 'Grand Event Lawns',
      heading: 'Grand Event Grounds & Celebrations',
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

  const amenitiesList = [
    {
      id: 'pools',
      title: 'Filtered Swimming Pools & Waterfalls',
      badge: 'Continuous Filtration',
      description: 'Adult deep-end pools & shallow splash pools for toddlers with continuous water filtration, cascading waterfalls, and night LED lighting.',
      image: 'https://lh3.googleusercontent.com/d/140lTiQV9NCrn5rHAfLy8XxK8TtiMwtH_',
      icon: Waves
    },
    {
      id: 'cricket',
      title: 'Floodlit Turf Cricket Pitch & Sports Turf',
      badge: 'Night Tournaments',
      description: 'Full-length turf cricket pitches equipped with high-power LED floodlights for night matches, football, and team tournaments.',
      image: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/749315193_122188669226873533_785521168422915001_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LV2LLdbvJvAQ7kNvwFxkMwU&_nc_oc=AdppGEMNEtz_fFVePJyOqr5HGTVJ1R_spJowJ7wy6OUZ1X-ZqSOO0vCCHVOPvkBehz90lyR9syNUvvba7nWOT1HD&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=T7ri_NAwDsh7qkdg86r_Lw&_nc_ss=7b2a8&oh=00_AQCfu7gE6ZvLVzSLwQ6HviLhrPFpF9Xo3GVKbsE-OF0O8w&oe=6A6D410B',
      icon: Trophy
    },
    {
      id: 'gaming',
      title: 'Indoor Gaming Lounge',
      badge: 'Snooker & Indoor Games',
      description: 'Escape into spacious indoor gaming lounges featuring full-size snooker tables, foosball, table tennis, and carrom.',
      image: 'https://lh3.googleusercontent.com/d/1VWijYPPI9a5wblQ4JMSgwsV862pT_evL',
      icon: Gamepad2
    },
    {
      id: 'bedrooms',
      title: 'Comfortable Rooms',
      badge: 'Air-Conditioned Comfort',
      description: 'Spacious air-conditioned bedrooms with attached modern washrooms, clean fresh bedding, vanity mirrors, and comfortable seating.',
      image: 'https://lh3.googleusercontent.com/d/17ErQVZs_MqgpfPQTqWD6oT91YZh1wuEE',
      icon: BedDouble
    },
    {
      id: 'bbq',
      title: 'Built-in Live BBQ Pits & Dining Gazebos',
      badge: 'Live Grill Setup',
      description: 'Built-in brick charcoal BBQ grills, skewers, preparation counters, and shaded outdoor dining gazebos under ambient garden string lights.',
      image: 'https://lh3.googleusercontent.com/d/18sR8eGjFiEdUNYTFVDdN9vaOYlB1veNd',
      icon: Flame
    },
    {
      id: 'nightlife',
      title: 'Night Life',
      badge: 'Evening & Night Ambiance',
      description: 'Illuminated night pool decks, ambient outdoor garden lights, music arrangements, and magical night celebrations.',
      image: 'https://lh3.googleusercontent.com/d/14nJrh1OYJsxq01uVbdkmcqr0k2PaR7vH',
      icon: Moon
    },
    {
      id: 'lawns',
      title: 'Expansive Lush Lawns & Event Grounds',
      badge: 'Up to 500+ Capacity',
      description: 'Immaculately manicured green grounds surrounded by tall date palm trees, flower beds, and romantic string lighting for grand events.',
      image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/753503103_122188670018873533_196524260830104006_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pEjH5_Y-hVoQ7kNvwEHv7D4&_nc_oc=Adr0H92iq6Dd6xPeqal_C4dVvD8yphjp0Krv6Ho18d7AQBfPI-xK6uiRAtC7u8vife8&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=NKyUxvHjSOEbdP-TMSwPVg&_nc_ss=7b2a8&oh=00_AQDfpRjTlOmSkDKBq-jeGIExnX_c5Kicbb1ry7Jj0G8BNw&oe=6A6D3346',
      icon: Trees
    },
    {
      id: 'kids',
      title: 'Kids Splash Slides & Family Play Zone',
      badge: 'Family Safe & Private',
      description: 'Safe water slides, shallow splash pools, garden swings, and fully enclosed boundary walls ensuring 100% privacy for families.',
      image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/752807453_122188670306873533_4165723509216842957_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-9TUGoAGLfAQ7kNvwHCwRor&_nc_oc=AdoYOfPHZiAa5K9GnaqVzB-jkDo7xgyI5KMHpZJBVkMsPJhaQvaOsDz1frDu2K9BH68&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=D2Gs1QfG4oJQhvjiJt1wMg&_nc_ss=7b2a8&oh=00_AQD1up4JvsxAaxA87ahkzhqia3vg97p3ZU2JjdH-l5EECA&oe=6A6D7CDD',
      icon: Smile
    },
    {
      id: 'kids-play',
      title: 'Kids Play Area & Swings',
      badge: 'Children Outdoor Fun',
      description: 'Dedicated safe outdoor play area featuring colorful slides, swings, activity frames, and play zones for children and toddlers.',
      image: 'https://lh3.googleusercontent.com/d/1StWeo0n077soANW0PZ8H463jqVRx3btw',
      icon: Smile
    }
  ];

  const handleDirectWhatsAppBooking = () => {
    const msg = 'Hi Hammad Ghaffar! I want to inquire about booking a farmhouse in Gadap Town.';
    const url = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

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
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-black/15"></div>
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-neutral-950/50"></div>
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
              onClick={handleDirectWhatsAppBooking}
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
              <span>Gadap Farmhouses AI</span>
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

      {/* 4. OUR AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200">
            Resort-Style Comforts
          </span>
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Amenities
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Every Gadap Town farmhouse is curated with premier resort amenities designed for maximum luxury, comfort, and entertainment for all age groups.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-3xl ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-800 hover:border-red-500/50'
                    : 'bg-white border-red-100 hover:border-red-400 hover:shadow-2xl hover:shadow-red-600/10'
                } border overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    {/* Badge */}
                    <span className="absolute top-3 right-3 bg-red-600/95 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>

                    {/* Icon floating */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className={`font-serif font-bold text-lg leading-snug ${darkMode ? 'text-white group-hover:text-red-400' : 'text-slate-900 group-hover:text-red-600'} transition-colors`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. EASY 3-STEP WHATSAPP DIRECT BOOKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-red-700 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200">
            Hassle-Free Reservation
          </span>
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How To Book Your Farmhouse
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Book directly with owner {BRAND_INFO.owner} in 3 simple steps with 100% deposit transparency and date confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className={`p-8 rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 shadow-xl'} border relative space-y-4 flex flex-col justify-between group hover:border-red-500/50 transition-all`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  01
                </div>
                <Building2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className={`font-serif font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Select Your Farmhouse
              </h3>
              <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                Explore our portfolio of luxury Gadap Town farmhouses featuring filtered swimming pools, AC master bedrooms, and floodlit grounds.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('farmhouses')}
              className="pt-4 border-t border-red-500/10 text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center space-x-1"
            >
              <span>View All Farmhouses</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 2 */}
          <div className={`p-8 rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 shadow-xl'} border relative space-y-4 flex flex-col justify-between group hover:border-red-500/50 transition-all`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  02
                </div>
                <MessageSquare className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className={`font-serif font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Check Date Availability
              </h3>
              <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                Click any "Book Now" or "Inquire" button on the website to connect instantly with {BRAND_INFO.owner} on WhatsApp with your preferred slot date.
              </p>
            </div>
            <button
              onClick={() => openBookingModal()}
              className="pt-4 border-t border-red-500/10 text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center space-x-1"
            >
              <span>Instant WhatsApp Inquiry</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3 */}
          <div className={`p-8 rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 shadow-xl'} border relative space-y-4 flex flex-col justify-between group hover:border-red-500/50 transition-all`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  03
                </div>
                <CheckCircle2 className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className={`font-serif font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Lock In Deposit & Confirmation
              </h3>
              <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                Transfer your advance deposit via Online Bank Transfer, JazzCash, or EasyPaisa to secure your guaranteed venue date.
              </p>
            </div>
            <div className="pt-4 border-t border-red-500/10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-500">100% Guaranteed Spot</span>
              <button
                onClick={() => openBookingModal()}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
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
