import React, { useState } from 'react';
import { Compass, Sparkles, Send, Check, Calendar, Users, MapPin, MessageCircle } from 'lucide-react';
import { Language, Currency } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface CustomTourPlannerProps {
  language: Language;
  currency: Currency;
}

export const CustomTourPlanner: React.FC<CustomTourPlannerProps> = ({
  language,
  currency,
}) => {
  const [destinations, setDestinations] = useState<string[]>(['sylhet']);
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [travelStyle, setTravelStyle] = useState<'budget' | 'family' | 'adventure' | 'luxury'>('family');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const destinationOptions = [
    { id: 'sundarbans', bn: 'সুন্দরবন ম্যানগ্রোভ বন', en: 'Sundarbans Mangrove', basePrice: 2800 },
    { id: 'sylhet', bn: 'শ্রীমঙ্গল ও রাতারগুল', en: 'Sreemangal & Ratargul', basePrice: 2000 },
    { id: 'sajek', bn: 'সাজেক ভ্যালি ও খাগড়াছড়ি', en: 'Sajek Valley & Hills', basePrice: 2400 },
    { id: 'beach', bn: 'কক্সবাজার ও সেন্টমার্টিন', en: 'Cox’s Bazar & Coral Island', basePrice: 2600 },
    { id: 'village', bn: 'গ্রামীণ নদী ও হোমস্টে', en: 'Rural River Village Homestay', basePrice: 1600 },
    { id: 'heritage', bn: 'সোনারগাঁ ও পুরাতন ঢাকা ঐতিহ্য', en: 'Sonargaon & Old Dhaka Heritage', basePrice: 1400 },
  ];

  const styleMultiplier = {
    budget: 0.85,
    family: 1.0,
    adventure: 1.15,
    luxury: 1.5,
  };

  const toggleDestination = (id: string) => {
    if (destinations.includes(id)) {
      if (destinations.length > 1) {
        setDestinations(destinations.filter((d) => d !== id));
      }
    } else {
      setDestinations([...destinations, id]);
    }
  };

  // Calculate estimated price per person per day
  const avgDestPrice =
    destinations.reduce((acc, id) => {
      const match = destinationOptions.find((d) => d.id === id);
      return acc + (match ? match.basePrice : 2000);
    }, 0) / destinations.length;

  const estimatedTotalBDT = Math.round(
    avgDestPrice * days * travelers * styleMultiplier[travelStyle]
  );
  const estimatedTotalUSD = Math.round(estimatedTotalBDT / 110);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestPhone) return;
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const destNames = destinations
      .map((id) => destinationOptions.find((d) => d.id === id)?.en)
      .join(', ');
    const msg = `Hello Maharuz! I planned a custom tour on Explore Bangladesh:
📍 Destinations: ${destNames}
⏱️ Duration: ${days} Days
👥 Group: ${travelers} Persons
💼 Style: ${travelStyle}
💰 Approx Budget: ${currency === 'BDT' ? `৳ ${estimatedTotalBDT.toLocaleString()}` : `$ ${estimatedTotalUSD}`}
👤 Name: ${guestName || 'Guest'}
📞 Phone: ${guestPhone}
📝 Notes: ${notes || 'None'}`;
    return `https://wa.me/8801712345678?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="planner" className="py-16 bg-gradient-to-b from-white to-[#f4f7f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#113f31] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#f1c40f]" />
            <span>{language === 'bn' ? 'ব্যক্তিগত ট্যুর ক্যালকুলেটর' : 'Interactive Itinerary Planner'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113f31] font-serif">
            {language === 'bn' ? 'আপনার মনমতো কাস্টম ট্যুর প্ল্যান সাজান' : 'Design Your Bespoke Custom Journey'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {language === 'bn'
              ? 'আপনার পছন্দের স্থান, দিন ও ভ্রমণ ধরন নির্বাচন করুন এবং তাৎক্ষণিক আনুমানিক খরচ দেখে গাইড মাহরুযের সাথে কথা বলুন।'
              : 'Select your dream destinations, duration, and travel style to get an instant tailored quote and discuss with Maharuz.'}
          </p>
        </div>

        {/* Planner Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#113f31]">
                {language === 'bn' ? 'ধন্যবাদ! আপনার ট্যুর পরিকল্পনা গৃহীত হয়েছে।' : 'Thank You! Custom Plan Received.'}
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                {language === 'bn'
                  ? 'গাইড মাহরুয আহমেদ আপনার পছন্দ অনুযায়ী একটি পূর্ণাঙ্গ ডে-বাই-ডে রুট প্ল্যান প্রস্তুত করে দ্রুত আপনার সাথে যোগাযোগ করবেন।'
                  : 'Guide Maharuz Ahmed will review your selections and connect with you with a detailed itinerary.'}
              </p>
              <div className="pt-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#20ba5a] transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{language === 'bn' ? 'WhatsApp-এ প্ল্যানটি পাঠান' : 'Send Plan via WhatsApp'}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Destination selector */}
              <div>
                <label className="block text-sm font-bold text-[#113f31] mb-3">
                  ১. {language === 'bn' ? 'কোন কোন স্থান ঘুরতে চান? (একাধিক নির্বাচন করুন):' : '1. Which regions would you like to visit?'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {destinationOptions.map((opt) => {
                    const isSelected = destinations.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleDestination(opt.id)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-semibold border text-left transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#113f31] text-white border-[#113f31] shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span>{language === 'bn' ? opt.bn : opt.en}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#f1c40f]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration and Travelers sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-[#113f31] mb-2">
                    <span>২. {language === 'bn' ? 'ভ্রমণের দিন সংখ্যা:' : '2. Tour Duration:'}</span>
                    <span className="text-emerald-800 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200">
                      {days} {language === 'bn' ? 'দিন' : 'Days'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-[#113f31] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                    <span>১ দিন (ডে ট্যুর)</span>
                    <span>৪ দিন</span>
                    <span>৭ দিন (গ্র্যান্ড ট্যুর)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-[#113f31] mb-2">
                    <span>৩. {language === 'bn' ? 'ভ্রমণকারী সদস্য:' : '3. Group Size:'}</span>
                    <span className="text-emerald-800 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200">
                      {travelers} {language === 'bn' ? 'জন' : 'Travelers'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full accent-[#113f31] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                    <span>১ জন (সোলো)</span>
                    <span>৪ জন (পরিবার)</span>
                    <span>১২ জন (বড় গ্রুপ)</span>
                  </div>
                </div>
              </div>

              {/* Travel Style Selector */}
              <div>
                <label className="block text-sm font-bold text-[#113f31] mb-3">
                  ৪. {language === 'bn' ? 'ভ্রমণের ধরন ও কমফোর্ট লেভেল:' : '4. Travel Style & Comfort:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'budget', bn: 'বাজেট ব্যাকপ্যাকার', en: 'Backpacker Eco' },
                    { id: 'family', bn: 'ফ্যামিলি কমফোর্ট', en: 'Family Comfort' },
                    { id: 'adventure', bn: 'অ্যাডভেঞ্চার ও ট্র্যাকিং', en: 'Adventure Trek' },
                    { id: 'luxury', bn: 'প্রিমিয়াম প্রাইভেট', en: 'Premium Luxury' },
                  ].map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setTravelStyle(style.id as any)}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-bold border text-center transition cursor-pointer ${
                        travelStyle === style.id
                          ? 'bg-[#113f31] text-white border-[#113f31] shadow'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {language === 'bn' ? style.bn : style.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Cost Estimation Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#113f31] text-white flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg">
                <div>
                  <span className="text-xs text-emerald-200 uppercase font-semibold">
                    {language === 'bn' ? 'মোট আনুমানিক বাজেট (সকল সদস্যের জন্য)' : 'Estimated Total Group Budget'}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#f1c40f]">
                    {currency === 'BDT'
                      ? `৳ ${estimatedTotalBDT.toLocaleString('bn-BD')}`
                      : `$ ${estimatedTotalUSD}`}
                    <span className="text-xs font-normal text-emerald-200 ml-2">
                      ({travelers} {language === 'bn' ? 'জনের' : 'persons'}, {days} {language === 'bn' ? 'দিন' : 'days'})
                    </span>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{language === 'bn' ? 'WhatsApp-এ প্ল্যান পাঠান' : 'Send via WhatsApp'}</span>
                </a>
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'আপনার নাম' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'bn' ? 'নাম লিখুন' : 'Full Name'}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'মোবাইল বা WhatsApp নম্বর *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1..."
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'অন্য কোনো বিশেষ ইচ্ছা বা পরামর্শ?' : 'Any Specific Preferences or Questions?'}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    language === 'bn'
                      ? 'যেমন: ট্রেন ভ্রমণের অভিজ্ঞতা চাই, ঐতিহ্যবাহী খাবার বেশি পছন্দ...'
                      : 'e.g. Prefer scenic train journey, focus on heritage and street food...'
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#113f31] hover:bg-[#f1c40f] hover:text-[#113f31] text-white font-bold text-base shadow transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'bn' ? 'কাস্টম প্ল্যান জমা দিন' : 'Submit Custom Tour Request'}</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
