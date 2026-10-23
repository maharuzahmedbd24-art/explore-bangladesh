import React, { useState } from 'react';
import { ShieldCheck, Award, MessageCircle, Phone, CheckCircle2, MapPin, Compass, Eye, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types/tour';
import { GuideProfile, GUIDE_DATA } from '../data/guideData';

interface AboutGuideProps {
  language: Language;
  onContactClick: () => void;
  guide?: GuideProfile;
  onOpenEdit?: () => void;
}

export const AboutGuide: React.FC<AboutGuideProps> = ({
  language,
  onContactClick,
  guide = GUIDE_DATA,
  onOpenEdit,
}) => {
  const [showFullPhotoModal, setShowFullPhotoModal] = useState(false);

  const guidePoints = [
    {
      titleBn: 'অফ-বিট ও লুকানো প্রাকৃতিক স্পট',
      titleEn: 'Hidden Viewpoints & Offbeat Trails',
      descBn: 'সাধারণ ট্রাভেল এজেন্সির ভিড় এড়িয়ে প্রকৃত নীরব ও অক্ষত সৌন্দর্য দর্শন।',
      descEn: 'Avoid crowded tourist buses and explore secret, untouched beauty spots.',
    },
    {
      titleBn: '১০০% নমনীয় ও ব্যক্তিগত সময়সূচী',
      titleEn: '100% Flexible & Custom Pace',
      descBn: 'আপনার পরিবার বা গ্রুপের গতি ও পছন্দ অনুযায়ী ভ্রমণ, কোনো তাড়া নেই।',
      descEn: 'Travel at your own comfortable pace with zero rushed commercial schedules.',
    },
    {
      titleBn: 'খাঁটি দেশি ও আঞ্চলিক খাবারের স্বাদ',
      titleEn: 'Authentic Local Farm & River Food',
      descBn: 'পদ্মার টাটকা ইলিশ, দেশি হাঁস, পাহাড়ি ব্যাম্বু চিকেন ও তাজা রস-পিঠা।',
      descEn: 'Relish fresh Hilsa, country duck, bamboo chicken and organic harvest meals.',
    },
    {
      titleBn: 'নিরাপত্তা, ফার্স্ট-এইড ও সিকিউরিটি পারমিট',
      titleEn: 'Certified Safety & Official Permits',
      descBn: 'সরকারি বন বিভাগের অনুমতি, পাহাড়ি আর্মি এসকোর্ট ও ফার্স্ট-এইড প্রস্তুতি।',
      descEn: 'Full support for official entry passes, forest guards and first aid gear.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Guide Card - Styled according to user's .about-card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100 relative overflow-hidden -mt-16 sm:-mt-24 z-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Guide Photo / Avatar Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group cursor-pointer" onClick={() => setShowFullPhotoModal(true)}>
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#113f31] relative bg-slate-100">
                  <img
                    src={guide.avatar || '/assets/maharuz_avatar.jpg'}
                    alt={language === 'bn' ? guide.name.bn : guide.name.en}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Photo tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-semibold flex items-center justify-center gap-1 bg-[#113f31]/90 backdrop-blur-sm py-1 px-2 rounded-lg">
                    <ImageIcon className="w-3 h-3 text-[#f1c40f]" />
                    <span>{language === 'bn' ? 'আসল ছবি • ক্লিক করে বড় দেখুন' : 'Original Photo • Click to Zoom'}</span>
                  </div>
                </div>

                {/* Rating floating pill */}
                <div className="absolute -top-3 -right-3 bg-[#f1c40f] text-[#113f31] font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border-2 border-white">
                  <span>★</span>
                  <span>{guide.rating} ({guide.totalTours}+ Tours)</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#113f31] mt-5">
                {language === 'bn' ? guide.name.bn : guide.name.en}
              </h3>
              <p className="text-sm font-semibold text-emerald-800 mb-2">
                {language === 'bn' ? guide.title.bn : guide.title.en}
              </p>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'bn' ? guide.contact.location.bn : guide.contact.location.en}</span>
              </div>

              {/* Spoken Languages */}
              <div className="w-full bg-emerald-50/70 rounded-xl p-3 text-xs text-slate-700 text-left border border-emerald-100 mb-4">
                <span className="font-bold text-[#113f31] block mb-1">
                  {language === 'bn' ? 'ভাষাগত দক্ষতা:' : 'Languages Spoken:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(language === 'bn' ? guide.languages.bn : guide.languages.en).map((lang, idx) => (
                    <span key={idx} className="bg-white px-2 py-0.5 rounded-md text-emerald-900 border border-emerald-200/60 font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                <a
                  href={guide.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${guide.contact.phone}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Phone className="w-4 h-4 text-[#f1c40f]" />
                  <span>{language === 'bn' ? 'কল করুন' : 'Call Guide'}</span>
                </a>
              </div>
            </div>

            {/* Guide Bio Column (Preserving user's exact words) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-[#113f31] text-xs font-bold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5 text-emerald-800" />
                <span>{language === 'bn' ? 'লোকাল এক্সপার্ট প্রোফাইল' : 'Certified Local Guide Profile'}</span>
              </div>

              {/* Exact heading from user's template */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#113f31] mb-4">
                {language === 'bn' ? 'স্বাগতম! আমি আপনার ট্যুর গাইড' : 'Welcome! I Am Your Local Tour Guide'}
              </h2>

              {/* Exact paragraph text from user's template */}
              <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  {language === 'bn' ? guide.bio.bn : guide.bio.en}
                </p>
                <p className="text-sm sm:text-base text-slate-600">
                  {language === 'bn'
                    ? 'আমার সাথে ভ্রমণের সবচেয়ে বড় সুবিধা হলো—আপনার পছন্দমতো ট্যুর কাস্টমাইজেশন, সম্পূর্ণ নিরাপদ ও পারিবারিক পরিবেশ, এবং প্রতিটি স্থানের অজানা গল্প ও আসল রোমাঞ্চ উপভোগ করার নিশ্চয়তা।'
                    : 'The biggest advantage of traveling with a dedicated local guide is zero commercial rush, genuine cultural storytelling, tailor-made schedules for your group or family, and certified wilderness safety.'}
                </p>
              </div>

              {/* Key Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                {guidePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {language === 'bn' ? point.titleBn : point.titleEn}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        {language === 'bn' ? point.descBn : point.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges strip */}
              <div className="mt-6 flex flex-wrap gap-2">
                {(language === 'bn' ? guide.badges.bn : guide.badges.en).map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#113f31] text-xs font-semibold border border-emerald-200"
                  >
                    <Award className="w-3.5 h-3.5 text-[#f1c40f]" />
                    {badge}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox for Original Photo */}
      {showFullPhotoModal && (
        <div
          onClick={() => setShowFullPhotoModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer animate-fadeIn"
        >
          <div className="max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-3 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src="/assets/maharuz_boat.jpg"
              alt="Maharuz on country boat"
              className="max-h-[75vh] w-auto mx-auto rounded-xl object-contain shadow"
            />
            <div className="p-3 text-slate-800">
              <h4 className="font-bold text-sm text-[#113f31]">
                Maharuz Ahmed • Authentic Country Boat on River
              </h4>
              <p className="text-xs text-slate-500">
                Original Photo from personal guiding expedition in Bangladesh
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
