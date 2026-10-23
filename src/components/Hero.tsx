import React from 'react';
import { Search, MapPin, Calendar, Award, ShieldCheck, Users, Star, ArrowRight } from 'lucide-react';
import { Language, TourCategory } from '../types/tour';
import { GuideProfile, GUIDE_DATA } from '../data/guideData';

interface HeroProps {
  language: Language;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: TourCategory;
  setSelectedCategory: (cat: TourCategory) => void;
  onExploreClick: () => void;
  onOpenPlanner: () => void;
  customHero?: {
    title: string;
    subtitle: string;
    description: string;
  };
  guide?: GuideProfile;
  onOpenEdit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  onExploreClick,
  onOpenPlanner,
  customHero,
  guide = GUIDE_DATA,
  onOpenEdit,
}) => {
  const displayTitle = customHero?.title || (language === 'bn' ? 'সবুজ শ্যামল বাংলাদেশ ভ্রমণ' : 'Explore Lush & Beautiful Bangladesh');
  const displaySubtitle = customHero?.subtitle || (language === 'bn' ? 'আপনার বিশ্বস্ত লোকাল এক্সপার্ট ও ব্যক্তিগত ট্যুর গাইডের সাথে' : 'With Your Trusted Local Expert & Private Tour Guide');
  const displayDescription = customHero?.description || (language === 'bn' 
    ? 'সুন্দরবনের বাঘের ট্রেইল, সিলেটের চা বাগান, সাজেকের মেঘের রাজ্য থেকে নদীর ছায়াঘেরা গ্রামীণ জীবন — আপনার পছন্দমতো কাস্টমাইজড নিরাপদ ভ্রমণ।' 
    : 'From deep mangrove trails in Sundarbans and floating mist of Sajek, to serene tea hills and traditional river villages. Tailored, authentic, and safe journeys.');

  return (
    <section id="home" className="relative min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background with real Bangladesh scenery & deep green gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 63, 49, 0.88), rgba(11, 41, 32, 0.92)), url('/assets/maharuz_boat.jpg')`,
        }}
      />

      {/* Decorative leaf / water pattern subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(241,196,15,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
        
        {/* Verification badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f1c40f] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#f1c40f]" />
          <span>
            {language === 'bn' 
              ? 'বাংলাদেশ সরকার অনুমোদিত ও অভিজ্ঞ ব্যক্তিগত ট্যুর গাইড' 
              : 'Govt. Certified & Verified Private Local Tour Guide'}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-4 drop-shadow-sm font-serif">
          {displayTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-medium text-[#f1c40f] max-w-3xl mx-auto mb-8 drop-shadow-sm leading-relaxed">
          {displaySubtitle}
        </p>

        {/* Description intro */}
        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed hidden sm:block">
          {displayDescription}
        </p>

        {/* Interactive Search & Quick Filter Bar */}
        <div className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl max-w-3xl mx-auto text-slate-800 border border-white/40 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-800" />
              <input
                type="text"
                placeholder={
                  language === 'bn'
                    ? 'গন্তব্য বা অভিজ্ঞতা খুঁজুন (যেমন: সুন্দরবন, সিলেট, গ্রাম, সাজেক...)'
                    : 'Search destination or experience (e.g. Sundarbans, Sajek, Village, Tea...)'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#113f31] text-sm text-slate-800 placeholder-slate-400 font-medium"
              />
            </div>
            
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-6 py-3 bg-[#113f31] hover:bg-[#0b2920] text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>{language === 'bn' ? 'প্যাকেজ দেখুন' : 'View Tours'}</span>
              <ArrowRight className="w-4 h-4 text-[#f1c40f]" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="px-6 py-3 rounded-xl bg-[#f1c40f] hover:bg-[#e2b70b] text-[#113f31] font-bold text-sm sm:text-base shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            {language === 'bn' ? 'আকর্ষণীয় ট্যুর প্যাকেজসমূহ' : 'Explore Featured Packages'}
          </a>
          <button
            onClick={onOpenPlanner}
            className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-bold text-sm sm:text-base transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#f1c40f]" />
            <span>{language === 'bn' ? 'কাস্টম ট্যুর প্ল্যানার' : 'Build Custom Itinerary'}</span>
          </button>
        </div>

        {/* Trust Badges / Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/15">
          <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Award className="w-6 h-6 text-[#f1c40f] shrink-0" />
            <div className="text-left">
              <span className="block text-lg font-bold leading-none">{guide.experienceYears}+ {language === 'bn' ? 'বছর' : 'Years'}</span>
              <span className="text-[11px] text-emerald-200">{language === 'bn' ? 'মাঠপর্যায়ের অভিজ্ঞতা' : 'Guiding Experience'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Users className="w-6 h-6 text-[#f1c40f] shrink-0" />
            <div className="text-left">
              <span className="block text-lg font-bold leading-none">{guide.totalTours}+</span>
              <span className="text-[11px] text-emerald-200">{language === 'bn' ? 'সফল ট্যুর সম্পন্ন' : 'Happy Tours Completed'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Star className="w-6 h-6 text-[#f1c40f] fill-[#f1c40f] shrink-0" />
            <div className="text-left">
              <span className="block text-lg font-bold leading-none">{guide.rating} / 5</span>
              <span className="text-[11px] text-emerald-200">{language === 'bn' ? 'পর্যটকদের রেটিং' : 'Guest Rating'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-[#f1c40f] shrink-0" />
            <div className="text-left">
              <span className="block text-lg font-bold leading-none">১০০%</span>
              <span className="text-[11px] text-emerald-200">{language === 'bn' ? 'নিরাপদ ও কাস্টমাইজড' : 'Safe & Tailored'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
