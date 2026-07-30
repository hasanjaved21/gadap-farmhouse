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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden shrink-0 border-2 border-red-500/30">
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

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-block text-xs font-semibold text-red-300 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full">
                👑 Owner: {BRAND_INFO.owner}
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center space-x-3">
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-rose-400 transition-all duration-200 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-neutral-800 hover:border-pink-500 transition-all duration-200 shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-.86-.43z"/>
                  </svg>
                </a>
              </div>
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
                { id: 'facilities', label: 'All 22+ Facilities' },
                { id: 'events', label: 'Weddings & Events' },
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
