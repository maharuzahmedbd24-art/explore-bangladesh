import React from 'react';
import { Clock, Users, Star, ArrowUpRight, Check, MapPin } from 'lucide-react';
import { TourPackage, Language, Currency } from '../types/tour';

interface TourCardProps {
  tour: TourPackage;
  language: Language;
  currency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  language,
  currency,
  onSelectTour,
  onBookTour,
}) => {
  const priceDisplay =
    currency === 'BDT'
      ? `৳ ${tour.priceBDT.toLocaleString('bn-BD')}`
      : `$ ${tour.priceUSD}`;

  const priceSuffix = language === 'bn' ? ' / জনপ্রতি' : ' / person';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 group">
      {/* Tour Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectTour(tour)}>
        <img
          src={tour.imageUrl}
          alt={language === 'bn' ? tour.title.bn : tour.title.en}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Badge - matching user's template .tour-badge */}
        {tour.badge && (
          <span className="absolute top-3 left-3 bg-[#f1c40f] text-[#113f31] px-3 py-1 font-bold text-xs rounded-md shadow-md uppercase tracking-wider">
            {language === 'bn' ? tour.badge.bn : tour.badge.en}
          </span>
        )}

        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#f1c40f]" />
          <span>{language === 'bn' ? tour.duration.bn : tour.duration.en}</span>
        </div>

        {/* Rating overlay at bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-bold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
          <Star className="w-3.5 h-3.5 fill-[#f1c40f] text-[#f1c40f]" />
          <span>{tour.rating}</span>
          <span className="text-slate-300 font-normal">({tour.reviewsCount})</span>
        </div>
      </div>

      {/* Tour Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Pickup location indicator */}
          <div className="flex items-center gap-1 text-xs text-emerald-800 font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{language === 'bn' ? tour.pickupLocation.bn : tour.pickupLocation.en}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectTour(tour)}
            className="text-lg font-bold text-[#113f31] mb-2 group-hover:text-emerald-700 transition cursor-pointer line-clamp-1"
          >
            {language === 'bn' ? tour.title.bn : tour.title.en}
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {language === 'bn' ? tour.shortDesc.bn : tour.shortDesc.en}
          </p>

          {/* Key highlights preview matching user HTML list */}
          {tour.highlights && (
            <div className="space-y-1.5 mb-4 pt-2 border-t border-slate-100">
              {(language === 'bn' ? tour.highlights.bn : tour.highlights.en).slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tour Meta (Price & Action) - matching user's template .tour-meta */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="block text-[11px] text-slate-600 font-medium uppercase tracking-wider">
              {language === 'bn' ? 'ট্যুর প্যাকেজ ফি' : 'Starting From'}
            </span>
            <div className="text-base sm:text-lg font-extrabold text-[#113f31]">
              {priceDisplay}
              <span className="text-xs font-normal text-slate-500">{priceSuffix}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTour(tour)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#113f31] text-xs font-semibold transition cursor-pointer"
              title={language === 'bn' ? 'বিস্তারিত তথ্য' : 'Tour Details'}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onBookTour(tour)}
              className="px-4 py-2 bg-[#113f31] hover:bg-[#f1c40f] hover:text-[#113f31] text-white rounded-lg text-xs sm:text-sm font-bold shadow transition duration-200 cursor-pointer"
            >
              {language === 'bn' ? 'বুক করুন' : 'Book Now'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
