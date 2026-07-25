import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: (farmhouseId?: string) => void;
  openSeoModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openBookingModal, openSeoModal }) => {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent('Hi Hammad Ghaffar, I am reaching out from your website for a Gadap Farmhouse booking inquiry.')}`;

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-red-900/40 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Red Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt={BRAND_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tight">GADAP </span>
                <span className="font-serif font-light text-xl text-red-500">FARMHOUSES</span>
                <p className="text-[10px] text-red-400 tracking-widest uppercase">{BRAND_INFO.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Gadap Town’s premier luxury farmhouse booking and event venue service in Karachi. Offering crystal swimming pools, private green lawns, BBQ pits, and unmatched hospitality.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-red-300 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full">
                👑 Owner: {BRAND_INFO.owner}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base tracking-wide flex items-center space-x-2">
              <span className="text-red-500">Quick Navigation</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'farmhouses', label: 'Explore Farmhouses' },
                { id: 'facilities', label: 'All 22+ Facilities' },
                { id: 'events', label: 'Weddings & Events' },
                { id: 'packages', label: 'Luxury Packages' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center space-x-2 hover:text-red-400 transition-colors group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Services */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base tracking-wide text-red-500">
              Popular Event Types
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                'Family Picnics & Reunions',
                'Birthday Pool Parties',
                'Open-Air Weddings & Mehndi',
                'Corporate Outings & Tournaments',
                'Winter BBQ & Bonfire Nights',
                'Friends Overnighters',
                'Bridal & Brand Photoshoots',
                'School & College Trips'
              ].map((service, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Direct Booking */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-white text-base tracking-wide text-red-500">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a href={`tel:${BRAND_INFO.phoneClean}`} className="flex items-start space-x-3 hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Direct Call / Helpline</p>
                  <p className="font-bold text-white">{BRAND_INFO.phone}</p>
                </div>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">WhatsApp 24/7</p>
                  <p className="font-bold text-emerald-400">{BRAND_INFO.phone}</p>
                </div>
              </a>

              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-start space-x-3 hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Email Inquiry</p>
                  <p className="font-medium text-slate-200 text-xs break-all">{BRAND_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-xs text-slate-300">{BRAND_INFO.location}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openBookingModal()}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Instant Booking Request</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Footer Links */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>in Karachi.</span>
          </p>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleNavClick('contact')} className="hover:text-red-400 transition-colors">Contact Us</button>
            {openSeoModal && (
              <button onClick={openSeoModal} className="hover:text-red-300 text-red-500 underline font-mono">
                SEO & Schema
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
