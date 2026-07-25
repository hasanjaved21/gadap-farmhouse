import React, { useState } from 'react';
import { MessageSquare, X, Phone, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (msgText?: string) => {
    const finalMsg = msgText || customMsg || 'Hi Hammad Ghaffar! I want to inquire about booking a farmhouse in Gadap Town.';
    const url = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
  };

  const presetMessages = [
    'Family Picnic Inquiry for Gadap Farmhouse',
    'Birthday Party Package & Swimming Pool Rates',
    'Wedding / Mehndi Venue Availability',
    'Corporate Team Retreat Inquiry'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="w-80 sm:w-88 rounded-2xl bg-neutral-900 border border-amber-500/30 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-950 via-neutral-900 to-red-950 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 overflow-hidden flex items-center justify-center font-bold text-white text-base shadow-md border-2 border-emerald-400">
                  <img
                    src={BRAND_INFO.floatingButtonImgUrl}
                    alt={BRAND_INFO.owner}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-bold">HG</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-neutral-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm flex items-center space-x-1">
                  <span>{BRAND_INFO.owner}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                </h4>
                <p className="text-[11px] text-emerald-300">Owner & Concierge • Gadap Farmhouses</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-neutral-950 space-y-3 text-xs">
            {/* Owner Greeting bubble */}
            <div className="p-3 rounded-2xl rounded-tl-none bg-neutral-900 border border-neutral-800 text-neutral-200 leading-relaxed">
              <p className="font-semibold text-amber-400 mb-1 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Assalam-o-Alaikum!</span>
              </p>
              Welcome to <strong>{BRAND_INFO.name}</strong>. How can I help you plan your event or weekend getaway in Gadap Town today?
            </div>

            {/* Quick Preset Buttons */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Quick Inquiry Prompts:</p>
              {presetMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => sendWhatsApp(msg)}
                  className="w-full text-left p-2 rounded-xl bg-neutral-900/80 hover:bg-emerald-950/80 hover:text-emerald-300 text-neutral-300 border border-neutral-800 hover:border-emerald-500/40 transition-all text-xs flex items-center justify-between group"
                >
                  <span className="truncate">{msg}</span>
                  <Send className="w-3 h-3 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Direct Call Button */}
            <a
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="w-full py-2 px-3 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-500/30 text-red-200 font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Direct Phone Call: {BRAND_INFO.phone}</span>
            </a>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type custom message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp()}
              className="flex-1 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => sendWhatsApp()}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-1.5 sm:p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-emerald-300 cursor-pointer active:scale-95 overflow-visible"
        title="Chat on WhatsApp (+92 334 3705720)"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
        <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-900 border border-white/20 flex items-center justify-center">
          <img
            src={BRAND_INFO.floatingButtonImgUrl}
            alt="WhatsApp Chat"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // fallback if image fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
        <span className="hidden group-hover:inline-block ml-2 text-xs font-bold pr-2 text-white">
          Chat with Owner
        </span>
      </button>
    </div>
  );
};
