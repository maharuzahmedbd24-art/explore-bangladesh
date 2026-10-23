import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle, ShieldCheck, Phone, Mail, User, MessageCircle, Printer, Download } from 'lucide-react';
import { TourPackage, Language, Currency, BookingDetails } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface BookingModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  language: Language;
  currency: Currency;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  tour,
  onClose,
  language,
  currency,
}) => {
  const [travelDate, setTravelDate] = useState('');
  const [travelersCount, setTravelersCount] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  if (!tour) return null;

  const basePricePerPerson = currency === 'BDT' ? tour.priceBDT : tour.priceUSD;
  const addonOptions = [
    {
      id: 'private_vehicle',
      nameBn: 'প্রাইভেট এসি নোয়া/হাইস গাড়ি পিকআপ ও ড্রপ',
      nameEn: 'Private Dedicated AC HiAce/Noah Vehicle',
      priceBDT: 3000,
      priceUSD: 28,
    },
    {
      id: 'food_upgrade',
      nameBn: 'ঐতিহ্যবাহী স্পেশাল ইলিশ ও দেশি হাঁসের ভূরিভোজ',
      nameEn: 'Gourmet Feast (Fresh Hilsa Fish & Country Duck)',
      priceBDT: 1200,
      priceUSD: 12,
    },
    {
      id: 'photography',
      nameBn: 'ডিএসএলআর ফটোগ্রাফি ও ড্রোন ভিডিওগ্রাফি কাভারেজ',
      nameEn: 'Professional DSLR Photography & Drone Footage',
      priceBDT: 2500,
      priceUSD: 25,
    },
  ];

  const addonsTotalBDT = selectedAddons.reduce((sum, addonId) => {
    const addon = addonOptions.find((a) => a.id === addonId);
    return sum + (addon ? addon.priceBDT : 0);
  }, 0);

  const addonsTotalUSD = selectedAddons.reduce((sum, addonId) => {
    const addon = addonOptions.find((a) => a.id === addonId);
    return sum + (addon ? addon.priceUSD : 0);
  }, 0);

  const totalBDT = tour.priceBDT * travelersCount + addonsTotalBDT;
  const totalUSD = tour.priceUSD * travelersCount + addonsTotalUSD;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !travelDate) return;

    const booking: BookingDetails = {
      bookingId: 'BD-' + Math.floor(100000 + Math.random() * 900000),
      tourId: tour.id,
      tourTitle: language === 'bn' ? tour.title.bn : tour.title.en,
      travelerName: name,
      phone,
      email: email || 'N/A',
      travelDate,
      travelersCount,
      specialRequests,
      addOns: selectedAddons,
      totalPriceBDT: totalBDT,
      totalPriceUSD: totalUSD,
      currency,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString(),
    };

    setConfirmedBooking(booking);
  };

  const getWhatsAppMessage = (booking: BookingDetails) => {
    const msg = `নমস্কার / Hello Maharuz, I have placed a tour booking on Explore Bangladesh!
📌 Booking Ref: ${booking.bookingId}
🗺️ Tour: ${booking.tourTitle}
📅 Date: ${booking.travelDate}
👥 Travelers: ${booking.travelersCount} persons
💰 Estimated Total: ${currency === 'BDT' ? `৳ ${booking.totalPriceBDT.toLocaleString()}` : `$ ${booking.totalPriceUSD}`}
👤 Name: ${booking.travelerName}
📞 Phone: ${booking.phone}`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#113f31] text-white p-6 relative flex justify-between items-start shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#f1c40f] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'সরাসরি গাইড বুকিং' : 'Direct Guide Reservation'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif">
              {confirmedBooking 
                ? (language === 'bn' ? '🎉 বুকিং সফল হয়েছে!' : '🎉 Reservation Confirmed!')
                : (language === 'bn' ? 'ট্যুর প্যাকেজ বুকিং' : 'Book Your Tour Package')}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              {language === 'bn' ? tour.title.bn : tour.title.en}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {confirmedBooking ? (
            /* Booking Confirmation Voucher */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-dashed border-emerald-300 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[#113f31]">
                  {language === 'bn' ? 'আপনার বুকিং সফলভাবে গ্রহণ করা হয়েছে!' : 'Booking Request Received!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {language === 'bn'
                    ? 'আপনার রেফারেন্স নম্বর সংরক্ষণ করুন। গাইড মাহরুয আহমেদ শীঘ্রই আপনার সাথে ফোনে যোগাযোগ করবেন।'
                    : 'Save your booking reference. Guide Maharuz Ahmed will contact you shortly to coordinate.'}
                </p>

                <div className="inline-block mt-4 px-4 py-2 bg-white rounded-xl shadow-sm border border-emerald-200 font-mono text-base font-bold text-emerald-800">
                  {language === 'bn' ? 'বুকিং আইডি:' : 'Reference ID:'} {confirmedBooking.bookingId}
                </div>
              </div>

              {/* Summary Details Table */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'প্যাকেজের নাম:' : 'Tour:'}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.tourTitle}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'ভ্রমণকারী:' : 'Guest Name:'}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.travelerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'ভ্রমণের তারিখ:' : 'Travel Date:'}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.travelDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'সদস্য সংখ্যা:' : 'Travelers:'}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.travelersCount} জন / Persons</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-700 font-bold">{language === 'bn' ? 'মোট আনুমানিক ফি:' : 'Estimated Total:'}</span>
                  <span className="font-extrabold text-base text-[#113f31]">
                    {currency === 'BDT'
                      ? `৳ ${confirmedBooking.totalPriceBDT.toLocaleString('bn-BD')}`
                      : `$ ${confirmedBooking.totalPriceUSD}`}
                  </span>
                </div>
              </div>

              {/* Action: Direct WhatsApp Confirmation */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/8801712345678?text=${getWhatsAppMessage(confirmedBooking)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>
                    {language === 'bn' 
                      ? 'WhatsApp-এ তাৎক্ষণিক কনফার্মেশন পাঠান' 
                      : 'Send Instant Confirmation via WhatsApp'}
                  </span>
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{language === 'bn' ? 'রিসিপ্ট প্রিন্ট করুন' : 'Print Voucher'}</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#113f31] text-white font-semibold text-xs transition cursor-pointer"
                  >
                    {language === 'bn' ? 'সম্পন্ন' : 'Done'}
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Date & Travelers Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {language === 'bn' ? 'ভ্রমণ শুরুর কাঙ্ক্ষিত তারিখ *' : 'Desired Travel Date *'}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {language === 'bn' ? 'ভ্রমণকারী সদস্য সংখ্যা *' : 'Number of Travelers *'}
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center font-bold text-sm text-slate-800">
                      {travelersCount} {language === 'bn' ? 'জন' : 'Travelers'}
                    </div>
                    <button
                      type="button"
                      onClick={() => setTravelersCount(travelersCount + 1)}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'আপনার নাম *' : 'Your Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800" />
                    <input
                      type="text"
                      required
                      placeholder={language === 'bn' ? 'যেমন: তানভীর হাসান' : 'e.g. Tanvir Hasan'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'মোবাইল / WhatsApp নম্বর *' : 'Mobile / WhatsApp Number *'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800" />
                      <input
                        type="tel"
                        required
                        placeholder="+880 17..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'bn' ? 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)' : 'Email Address (Optional)'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Add-ons */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {language === 'bn' ? 'প্রয়োজনীয় অতিরিক্ত সুবিধাসমূহ (অপশনাল):' : 'Optional Extra Add-ons:'}
                </label>
                <div className="space-y-2">
                  {addonOptions.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    const addonPrice = currency === 'BDT' ? `+৳ ${addon.priceBDT}` : `+$ ${addon.priceUSD}`;
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition text-xs sm:text-sm ${
                          isChecked
                            ? 'bg-emerald-50/80 border-emerald-400 text-emerald-900 font-medium'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 text-emerald-700 rounded border-slate-300"
                          />
                          <span>{language === 'bn' ? addon.nameBn : addon.nameEn}</span>
                        </div>
                        <span className="font-bold text-[#113f31]">{addonPrice}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'বিশেষ কোনো চাহিদা বা নির্দেশনা (খাবার, পিকআপ ইত্যাদি)' : 'Special Requests / Notes'}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    language === 'bn'
                      ? 'যেমন: খাবারে কম ঝাল দরকার, ঢাকার ধানমন্ডি থেকে পিকআপ...'
                      : 'e.g. Mild spice food required, hotel pickup from Gulshan...'
                  }
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                />
              </div>

              {/* Live Cost Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 block">
                    {language === 'bn' ? 'মোট আনুমানিক বাজেট' : 'Estimated Total Budget'}
                  </span>
                  <span className="text-xs text-slate-600">
                    ({travelersCount} × {currency === 'BDT' ? `৳ ${tour.priceBDT}` : `$ ${tour.priceUSD}`}
                    {selectedAddons.length > 0 ? (language === 'bn' ? ' + অ্যাড-অন' : ' + Add-ons') : ''})
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#113f31]">
                  {currency === 'BDT' ? `৳ ${totalBDT.toLocaleString('bn-BD')}` : `$ ${totalUSD}`}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#113f31] hover:bg-[#f1c40f] hover:text-[#113f31] text-white font-bold text-sm sm:text-base shadow-lg transition duration-200 cursor-pointer"
              >
                {language === 'bn' ? 'বুকিং আবেদন নিশ্চিত করুন' : 'Confirm & Request Booking'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
