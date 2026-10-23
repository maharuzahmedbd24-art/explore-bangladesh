import React, { useState } from 'react';
import { TourVisualMap } from './TourVisualMap';
import { Map, X, Clock, Users, Calendar, Check, AlertCircle, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { TourPackage, Language, Currency } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onBookNow: (tour: TourPackage) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  language,
  currency,
  onBookNow,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'map' | 'overview' | 'includes'>('itinerary');

  if (!tour) return null;

  const priceDisplay =
    currency === 'BDT'
      ? `৳ ${tour.priceBDT.toLocaleString('bn-BD')}`
      : `$ ${tour.priceUSD}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col border border-slate-100">
        
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-80 shrink-0">
          <img
            src={tour.imageUrl}
            alt={language === 'bn' ? tour.title.bn : tour.title.en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header content overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            {tour.badge && (
              <span className="inline-block bg-[#f1c40f] text-[#113f31] font-bold text-xs px-3 py-1 rounded-md mb-2 uppercase">
                {language === 'bn' ? tour.badge.bn : tour.badge.en}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif mb-2 text-white">
              {language === 'bn' ? tour.title.bn : tour.title.en}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#f1c40f]" />
                {language === 'bn' ? tour.duration.bn : tour.duration.en}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-[#f1c40f]" />
                {language === 'bn' ? tour.groupSize.bn : tour.groupSize.en}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#f1c40f]" />
                {language === 'bn' ? tour.pickupLocation.bn : tour.pickupLocation.en}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 px-4 font-bold text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'itinerary'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {language === 'bn' ? 'ট্যুর প্ল্যান ও শিডিউল' : 'Day-by-Day Itinerary'}
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`py-3.5 px-4 font-bold text-sm border-b-2 transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'map'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Map className="w-4 h-4 text-emerald-700" />
            <span>{language === 'bn' ? 'রুট ও ম্যাপ মার্কার' : 'Visual Map & Route'}</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 font-bold text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {language === 'bn' ? 'ট্যুর বিবরণ ও বৈশিষ্ট্য' : 'Overview & Highlights'}
          </button>
          <button
            onClick={() => setActiveTab('includes')}
            className={`py-3.5 px-4 font-bold text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'includes'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {language === 'bn' ? 'যা অন্তর্ভুক্ত ও বর্জিত' : 'Includes & Excludes'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {activeTab === 'map' && (
            <div className="space-y-4">
              <TourVisualMap
                mapConfig={tour.mapConfig}
                mapPoints={tour.mapPoints || []}
                language={language}
                tourTitle={language === 'bn' ? tour.title.bn : tour.title.en}
              />
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#113f31] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-700" />
                <span>{language === 'bn' ? 'প্রতিদিনের বিস্তারিত ভ্রমণসূচী' : 'Detailed Day-by-Day Schedule'}</span>
              </h3>

              <div className="relative pl-6 border-l-2 border-emerald-600/30 space-y-8">
                {tour.itinerary.map((day, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle icon on timeline */}
                    <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#113f31] text-[#f1c40f] flex items-center justify-center text-xs font-bold shadow-md">
                      {day.dayNumber}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {language === 'bn' ? day.title.bn : day.title.en}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {language === 'bn' ? day.description.bn : day.description.en}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {(language === 'bn' ? day.highlights.bn : day.highlights.en).map((h, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#113f31] mb-2">
                  {language === 'bn' ? 'ট্যুর সম্পর্কিত তথ্য' : 'About This Experience'}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {language === 'bn' ? tour.fullDesc.bn : tour.fullDesc.en}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#113f31] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f1c40f]" />
                  <span>{language === 'bn' ? 'ট্যুরের বিশেষ আকর্ষণসমূহ' : 'Key Tour Highlights'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'bn' ? tour.highlights.bn : tour.highlights.en).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <span className="font-bold block mb-1">
                  {language === 'bn' ? 'ভ্রমণের সেরা সময়:' : 'Best Season to Visit:'}
                </span>
                {language === 'bn' ? tour.bestSeason.bn : tour.bestSeason.en}
              </div>
            </div>
          )}

          {activeTab === 'includes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Includes */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <h4 className="font-bold text-[#113f31] text-base mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>{language === 'bn' ? 'প্যাকেজে যা অন্তর্ভুক্ত' : 'Included in Package'}</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {(language === 'bn' ? tour.includes.bn : tour.includes.en).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes */}
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                <h4 className="font-bold text-rose-900 text-base mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>{language === 'bn' ? 'প্যাকেজে যা অন্তর্ভুক্ত নয়' : 'Not Included'}</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {(language === 'bn' ? tour.excludes.bn : tour.excludes.en).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="block text-xs text-slate-600 uppercase font-semibold">
              {language === 'bn' ? 'প্যাকেজ রেট' : 'Tour Package Rate'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-[#113f31]">
              {priceDisplay}
              <span className="text-xs font-normal text-slate-500">
                {language === 'bn' ? ' / জনপ্রতি' : ' / person'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/8801712345678?text=Hello%20Maharuz,%20I%20want%20to%20ask%20about%20${encodeURIComponent(tour.title.en)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookNow(tour);
              }}
              className="flex-1 sm:flex-initial px-8 py-3 rounded-xl bg-[#113f31] hover:bg-[#f1c40f] hover:text-[#113f31] text-white font-bold text-sm sm:text-base shadow-lg transition duration-200 cursor-pointer"
            >
              {language === 'bn' ? 'এখনই বুক করুন' : 'Book This Tour'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
