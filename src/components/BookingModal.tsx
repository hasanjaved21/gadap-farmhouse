import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Calculator, Sparkles, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { FARMHOUSES_DATA, PACKAGES_DATA, BRAND_INFO } from '../data/mockData';
import { BookingRequest } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedFarmhouseId?: string;
  darkMode?: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedFarmhouseId,
  darkMode = true,
}) => {
  const defaultFarmhouse = FARMHOUSES_DATA.find((f) => f.id === preselectedFarmhouseId) || FARMHOUSES_DATA[0];

  const [selectedFarmhouse, setSelectedFarmhouse] = useState(defaultFarmhouse);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [duration, setDuration] = useState<'12_hours' | '24_hours' | 'multi_day'>('12_hours');
  const [eventType, setEventType] = useState('Family Picnic');
  const [guests, setGuests] = useState(25);
  const [addons, setAddons] = useState({
    generatorBackup: true,
    djSoundSystem: false,
    decorations: false,
    cateringSetup: false,
    liveBBQChef: false,
  });
  const [specialReqs, setSpecialReqs] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate estimated price
  const basePrice = duration === '24_hours' ? selectedFarmhouse.startingPrice24Hr : selectedFarmhouse.startingPrice12Hr;
  let addonTotal = 0;
  if (addons.djSoundSystem) addonTotal += 5000;
  if (addons.decorations) addonTotal += 12000;
  if (addons.cateringSetup) addonTotal += guests * 850; // PKR 850/head estimate
  if (addons.liveBBQChef) addonTotal += 4000;

  const totalEstimatedPrice = basePrice + addonTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsAppBooking = () => {
    const summaryMsg = `*NEW GADAP FARMHOUSE BOOKING INQUIRY*
---------------------------------------
*Farmhouse:* ${selectedFarmhouse.name}
*Customer Name:* ${customerName}
*Phone:* ${phone}
*Email:* ${email || 'N/A'}
*Date:* ${bookingDate}
*Shift:* ${duration === '24_hours' ? '24 Hours Overnight' : '12 Hours Day/Night Pass'}
*Event Type:* ${eventType}
*Guest Count:* ${guests} Persons
*Add-ons:*
- Generator Backup: ${addons.generatorBackup ? 'Yes' : 'No'}
- Sound System: ${addons.djSoundSystem ? 'Yes' : 'No'}
- Decor: ${addons.decorations ? 'Yes' : 'No'}
- Catering: ${addons.cateringSetup ? `Yes (${guests} heads)` : 'No'}
- Live BBQ Chef: ${addons.liveBBQChef ? 'Yes' : 'No'}
*Special Notes:* ${specialReqs || 'None'}
*Estimated Quote:* PKR ${totalEstimatedPrice.toLocaleString()}
---------------------------------------
Please confirm availability and booking deposit instructions.`;

    const url = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(summaryMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
          darkMode ? 'bg-neutral-900 border-amber-500/30 text-white' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-red-700 via-red-800 to-rose-950 border-b border-red-500/30 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-red-200 text-xs font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-white" />
            <span>VIP Reservation & Direct Quote</span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-white">
            Book Gadap Farmhouse
          </h2>
          <p className="text-xs text-red-100 mt-1">
            Fill in your preferred date and event details for an instant rate estimate & direct confirmation from owner {BRAND_INFO.owner}.
          </p>
        </div>

        {/* Modal Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-amber-400">Inquiry Generated Successfully!</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mt-2">
                Thank you <strong>{customerName}</strong>. Your estimated quote for <strong>{selectedFarmhouse.name}</strong> is <strong>PKR {totalEstimatedPrice.toLocaleString()}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-left space-y-2 max-w-md mx-auto">
              <p className="font-bold text-amber-400 border-b border-neutral-800 pb-1">Booking Summary:</p>
              <p>📍 <strong>Venue:</strong> {selectedFarmhouse.name}</p>
              <p>📅 <strong>Date:</strong> {bookingDate}</p>
              <p>⏰ <strong>Duration:</strong> {duration === '24_hours' ? '24 Hours Overnight' : '12 Hours Pass'}</p>
              <p>👥 <strong>Guests:</strong> {guests} Persons</p>
              <p>💰 <strong>Estimated Total:</strong> PKR {totalEstimatedPrice.toLocaleString()}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={sendWhatsAppBooking}
                className="px-6 py-3 rounded-xl font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm via WhatsApp Now</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm"
              >
                Close Modal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Farmhouse Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                1. Select Gadap Farmhouse
              </label>
              <select
                value={selectedFarmhouse.id}
                onChange={(e) => {
                  const found = FARMHOUSES_DATA.find((f) => f.id === e.target.value);
                  if (found) setSelectedFarmhouse(found);
                }}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold border ${
                  darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                } focus:outline-none focus:border-amber-500`}
              >
                {FARMHOUSES_DATA.map((farm) => (
                  <option key={farm.id} value={farm.id}>
                    {farm.name} (Cap: {farm.capacity} guests • From PKR {farm.startingPrice12Hr.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preferred Booking Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Duration / Shift</span>
                </label>
                <select
                  value={duration}
                  onChange={(e: any) => setDuration(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                  }`}
                >
                  <option value="12_hours">12 Hours (Day or Night Shift)</option>
                  <option value="24_hours">24 Hours (Overnight Full Stay)</option>
                </select>
              </div>
            </div>

            {/* Event Type & Guest Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300">Event Category</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                  }`}
                >
                  <option value="Family Picnic">Family Picnic & Gathering</option>
                  <option value="Birthday Party">Birthday Celebration</option>
                  <option value="Wedding / Mehndi">Wedding / Mehndi Function</option>
                  <option value="Corporate Retreat">Corporate Outing / Tournament</option>
                  <option value="BBQ & Bonfire Night">BBQ & Bonfire Night</option>
                  <option value="Friends Get Together">Friends Reunion</option>
                  <option value="Photoshoot / Shoot">Photoshoot / Filming</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300 flex justify-between">
                  <span className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Guest Count</span>
                  </span>
                  <span className="text-amber-400 font-mono font-bold">{guests} Persons</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max={selectedFarmhouse.capacity}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Add-ons Checkboxes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                2. Event Add-ons & Extra Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                  <input
                    type="checkbox"
                    checked={addons.generatorBackup}
                    onChange={(e) => setAddons({ ...addons, generatorBackup: e.target.checked })}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span>100% Generator Backup (Included)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                  <input
                    type="checkbox"
                    checked={addons.djSoundSystem}
                    onChange={(e) => setAddons({ ...addons, djSoundSystem: e.target.checked })}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span>Bluetooth Party Sound System (+PKR 5,000)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                  <input
                    type="checkbox"
                    checked={addons.decorations}
                    onChange={(e) => setAddons({ ...addons, decorations: e.target.checked })}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span>Floral / Balloon Theme Decor (+PKR 12,000)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                  <input
                    type="checkbox"
                    checked={addons.liveBBQChef}
                    onChange={(e) => setAddons({ ...addons, liveBBQChef: e.target.checked })}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span>Live BBQ Chef Assistance (+PKR 4,000)</span>
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                3. Your Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                  }`}
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                    darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                  }`}
                />
              </div>

              <textarea
                placeholder="Any special requests? (e.g. Catering preference, pre-visit inspection time)"
                rows={2}
                value={specialReqs}
                onChange={(e) => setSpecialReqs(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs border ${
                  darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                }`}
              ></textarea>
            </div>

            {/* Quote Estimation Display */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950 via-neutral-900 to-red-950 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-red-300 font-bold uppercase tracking-wider block">Estimated Quote Total</span>
                <span className="font-serif font-black text-2xl text-white">
                  PKR {totalEstimatedPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-neutral-400 block">*Subject to date availability & final advance payment.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 via-red-700 to-rose-800 hover:from-red-700 hover:to-rose-900 shadow-xl flex items-center justify-center space-x-2 border border-red-500/50 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-white" />
                <span>Calculate & Review Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
