import React from 'react';
import { X, ZoomIn, CalendarCheck, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  openBookingModal: (farmhouseId?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, openBookingModal }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-neutral-900 border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="md:w-2/3 bg-black flex items-center justify-center relative overflow-hidden group min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-neutral-300 flex items-center space-x-1.5 border border-neutral-700">
            <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
            <span>Click to View HD Lightbox</span>
          </div>
        </div>

        {/* Info Column */}
        <div className="md:w-1/3 p-6 flex flex-col justify-between bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 space-y-4">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-1 text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-500/30 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              <span>{item.category}</span>
            </span>

            <h3 className="font-serif font-bold text-xl text-white">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {item.caption}
            </p>

            {item.farmhouseName && (
              <div className="flex items-center space-x-2 text-xs text-amber-300 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Featured at <strong>{item.farmhouseName}</strong> (Gadap Town, Malir)</span>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                onClose();
                openBookingModal(item.farmhouseName);
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-lg flex items-center justify-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Inquire / Book This Spot</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
