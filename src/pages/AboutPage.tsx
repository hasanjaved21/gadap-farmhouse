import React from 'react';
import {
  ShieldCheck,
  Waves,
  Zap,
  Users,
  Award,
  Phone,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck,
  Star,
  Building2,
  TreePine,
  Gamepad2
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: (farmhouseId?: string) => void;
  darkMode: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setActiveTab,
  openBookingModal,
  darkMode
}) => {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent('Hi Hammad Ghaffar! I want to know more about Gadap Farmhouses and check venue availability.')}`;

  const pillars = [
    {
      icon: Waves,
      title: 'Continuous Filtered Water',
      desc: 'All swimming pools feature automated continuous water filtration systems with crystal clear hygienic water for adult and shallow kids splash areas.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: '100% Standby Heavy Generator',
      desc: 'Zero load-shedding interruptions. Heavy-duty standby diesel generators keep ACs, floodlights, water pumps, and sound systems running seamlessly.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: ShieldCheck,
      title: 'Private & Gated Security',
      desc: 'Family-safe environment featuring high boundary walls, gated entries, private parking lots, and 24/7 dedicated security personnel.',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      icon: HeartHandshake,
      title: 'Hammad Ghaffar Hospitality',
      desc: 'Personalized management by Hammad Ghaffar and on-site attendants ensuring seamless check-ins, clean premises, and prompt guest support.',
      color: 'from-red-600 to-rose-700'
    }
  ];

  const highlights = [
    { title: 'Prime Location', desc: 'Situated in peaceful Gadap Town, Karachi — easily accessible via M-9 Super Highway.' },
    { title: 'AC Master Suites', desc: 'Fully furnished, air-conditioned bedrooms with attached modern washrooms and lounges.' },
    { title: 'Sports & Games', desc: 'Snooker tables, foosball, table tennis, badminton, and floodlit cricket pitches.' },
    { title: 'BBQ & Open Kitchen', desc: 'Traditional brick BBQ grills, deep freezers, commercial gas stoves, and dining setups.' }
  ];

  const stats = [
    { number: '500+', label: 'Events & Family Picnics' },
    { number: '100%', label: 'Generator Backup' },
    { number: '24/7', label: 'On-Site Staff Support' },
    { number: '4.9/5', label: 'Guest Satisfaction Rating' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. HERO HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 inline-flex items-center space-x-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>Hospitality & Excellence</span>
        </span>
        <h1 className={`font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          About <span className="text-red-600">Gadap Farmhouses</span>
        </h1>
        <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-slate-600'} leading-relaxed font-normal`}>
          Karachi's premier destination for private luxury farmhouses, crystal swimming pools, and unforgettable family celebrations in peaceful Gadap Town.
        </p>
      </div>

      {/* 2. MAIN IMAGE & OVERVIEW BANNER */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-red-900/30 group">
        <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden">
          <img
            src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/753361657_122188669130873533_4792060991179590151_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9wB4C-iuDhMQ7kNvwEjyUME&_nc_oc=AdqBKEkIa82CZ7HFXRI11hV3vJ8pVoASf7-2pq3KBlkb-rsEmUbl7h-PyCRpLF4J6RA&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=TOWYmDFKJMHndBBMckMlTw&_nc_ss=7b2a8&oh=00_AQDtGy3_s6FGo4cKHvUogkoK-layOd5cUZx_w-_yHHXdNQ&oe=6A6D4A21"
            alt="Gadap Farmhouses Resort"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-red-600/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <Building2 className="w-4 h-4" />
              <span>Managed by {BRAND_INFO.owner}</span>
            </div>
            <h2 className="font-serif font-extrabold text-2xl sm:text-4xl text-white drop-shadow-md">
              A Sanctuary of Comfort, Joy & Celebration
            </h2>
            <p className="text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed hidden sm:block">
              Designed specifically to cater to families, corporate teams, and event hosts seeking high standards of hygiene, generator reliability, and absolute privacy.
            </p>
          </div>
        </div>
      </div>

      {/* 3. OWNER / FOUNDER HIGHLIGHT */}
      <div className={`rounded-3xl ${darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100'} border p-8 sm:p-10 shadow-xl relative overflow-hidden`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4 md:col-span-2">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
              Personalized Hospitality
            </span>
            <h3 className={`font-serif font-bold text-2xl sm:text-3xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Supervised & Managed by <span className="text-red-600">{BRAND_INFO.owner}</span>
            </h3>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-neutral-300' : 'text-slate-600'} leading-relaxed`}>
              "At Gadap Farmhouses, we believe every guest deserves a completely worry-free experience. From ensuring crystal-clear continuous pool water to maintaining 100% generator backup during your stay, my team and I personally oversee every detail so your family can focus on creating unforgettable memories."
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${BRAND_INFO.phoneClean}`}
                className="px-5 py-3 rounded-2xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center space-x-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BRAND_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-red-50/50 border-red-100'} border text-center space-y-4`}>
            <div className="w-20 h-20 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center font-serif font-black text-2xl shadow-xl">
              HG
            </div>
            <div>
              <h4 className={`font-serif font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {BRAND_INFO.owner}
              </h4>
              <p className="text-xs text-red-500 font-medium">Owner & Director</p>
            </div>
            <div className="pt-2 border-t border-red-500/20 text-xs text-neutral-400 space-y-1">
              <p>📍 Gadap Town, Karachi</p>
              <p>⏰ 24/7 Direct Availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOUR CORE PILLARS */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className={`font-serif font-extrabold text-3xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Why Choose <span className="text-red-600">Gadap Farmhouses</span>?
          </h2>
          <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
            Our core commitments that set us apart from standard picnic rentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-800 hover:border-red-600/40'
                    : 'bg-white border-red-100 hover:border-red-300 shadow-lg'
                } border transition-all duration-300 space-y-4 flex flex-col justify-between group`}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${p.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {p.title}
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. STATS COUNTER BAR */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1 px-2">
              <span className="font-serif font-black text-3xl sm:text-4xl text-white tracking-tight block">
                {s.number}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-red-100 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FACILITY HIGHLIGHTS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              Unmatched Amenities
            </span>
            <h2 className={`font-serif font-extrabold text-3xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Everything You Need for a Perfect Day
            </h2>
            <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-slate-600'} leading-relaxed`}>
              Whether hosting a 350+ guest event or a relaxing day pass with family, our farmhouses are fully equipped with top-tier amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-red-100 shadow-md'
                } border space-y-1`}
              >
                <div className="flex items-center space-x-2 text-red-600 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{h.title}</span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab('facilities')}
              className="px-6 py-3 rounded-2xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg"
            >
              Explore All Facilities
            </button>
            <button
              onClick={() => setActiveTab('farmhouses')}
              className={`px-6 py-3 rounded-2xl text-xs font-bold ${
                darkMode ? 'bg-neutral-800 text-white hover:bg-neutral-700' : 'bg-red-100 text-red-800 hover:bg-red-200'
              } transition-all`}
            >
              View Farmhouses
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-red-500/20 h-80 sm:h-96">
          <img
            src="https://lh3.googleusercontent.com/d/140lTiQV9NCrn5rHAfLy8XxK8TtiMwtH_"
            alt="Swimming Pool"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              Continuous Water Filtration
            </span>
            <h3 className="font-serif font-bold text-2xl text-white">
              Crystal Clear Swimming Pools
            </h3>
            <p className="text-xs text-slate-200 mt-1">
              Maintained with automated filtration systems for total hygiene and safety.
            </p>
          </div>
        </div>
      </div>

      {/* 7. WHATSAPP CTA BANNER */}
      <div className="rounded-3xl bg-neutral-900 border border-red-600/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-950 border border-red-800 inline-block">
            Direct WhatsApp Inquiries
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
            Ready to Plan Your Next Gathering?
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Contact Hammad Ghaffar directly to inquire about dates, pricing, or custom packages for family picnics, birthdays, and weddings.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl flex items-center space-x-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contact via WhatsApp (+92 334 3705720)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
