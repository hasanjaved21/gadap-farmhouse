import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Sun, Moon, CalendarCheck, Sparkles, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingModal: (farmhouseId?: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openSeoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openBookingModal,
  darkMode,
  setDarkMode,
  openSeoModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'farmhouses', label: 'Farmhouses' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'events', label: 'Events' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappDirectUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent('Hi Hammad Ghaffar! I want to inquire about booking a farmhouse in Gadap Town.')}`;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar - Contact & Location */}
      <div className={`py-2 px-4 text-xs transition-colors duration-300 ${darkMode ? 'bg-neutral-950 text-neutral-300 border-b border-neutral-800' : 'bg-red-700 text-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <a href={`tel:${BRAND_INFO.phoneClean}`} className="flex items-center space-x-1 hover:text-red-200 transition-colors">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="font-semibold">{BRAND_INFO.phone}</span>
            </a>
            <a href={`mailto:${BRAND_INFO.email}`} className="hidden sm:flex items-center space-x-1 hover:text-red-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{BRAND_INFO.email}</span>
            </a>
            <div className="hidden md:flex items-center space-x-1 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>{BRAND_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[11px] font-semibold text-white/90">
              24/7 Booking & Inquiry
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-neutral-900/95 backdrop-blur-md border-b border-red-600/30 shadow-2xl py-3'
              : 'bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xl py-3'
            : darkMode
            ? 'bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800 py-4'
            : 'bg-white/95 backdrop-blur-sm border-b border-red-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Custom Logo Emblem */}
            <div className="relative w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={BRAND_INFO.logoUrl}
                alt={BRAND_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className={`font-serif font-bold text-xl md:text-2xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  GADAP
                </span>
                <span className="font-serif font-black text-xl md:text-2xl text-red-600">
                  FARMHOUSES
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-red-600 tracking-widest uppercase -mt-0.5">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 relative ${
                    isActive
                      ? darkMode
                        ? 'text-red-400 font-bold bg-red-950/60 border border-red-800'
                        : 'text-red-700 font-bold bg-red-50 border border-red-200/80 shadow-sm'
                      : darkMode
                      ? 'text-neutral-300 hover:text-red-400 hover:bg-neutral-800/60'
                      : 'text-slate-700 hover:text-red-600 hover:bg-red-50/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Book Now Button */}
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 via-red-700 to-rose-800 hover:from-red-700 hover:to-rose-900 transition-all duration-200 shadow-md shadow-red-600/20 flex items-center space-x-2 border border-red-500/40 cursor-pointer active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700'
                  : 'bg-red-50 border-red-200 text-slate-900 hover:bg-red-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X className="w-6 h-6 text-red-600" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with Smooth Animated Entrance & Exit */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -12 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`xl:hidden overflow-hidden border-b px-4 pt-3 pb-6 space-y-3 ${
                darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-200' : 'bg-white border-red-200 text-slate-900 shadow-2xl'
              }`}
            >
              <div className="grid grid-cols-2 gap-2 pb-2">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.2 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-red-600 text-white font-bold shadow-md'
                        : darkMode
                        ? 'hover:bg-neutral-800 text-neutral-300'
                        : 'hover:bg-red-50 text-slate-800'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="pt-3 border-t border-red-100 dark:border-neutral-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 shadow-lg flex items-center justify-center space-x-2 hover:brightness-110 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve A Farmhouse</span>
                </button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 flex items-center justify-center space-x-2 hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp (+92 334 3705720)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
