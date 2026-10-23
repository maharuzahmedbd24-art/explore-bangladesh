import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { Language } from '../types/tour';
import { REVIEWS_DATA } from '../data/reviewsData';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  return (
    <section className="py-16 bg-[#f4f7f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#113f31] text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{language === 'bn' ? 'ভ্রমণকারীদের মন্তব্য' : 'Traveler Testimonials'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113f31] font-serif">
            {language === 'bn' ? 'আমাদের অতিথিদের বাস্তব অভিজ্ঞতা' : 'Stories from Our Happy Explorers'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {language === 'bn'
              ? 'দেশ-বিদেশের বহু পর্যটক আমাদের সাথে ঘুরেছেন এবং তাদের অবিস্মরণীয় অনুভূতির কথা জানিয়েছেন।'
              : 'Real reviews from travelers who trusted Maharuz for their private Bangladesh expeditions.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#f1c40f]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f1c40f]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-100" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 italic">
                  "{language === 'bn' ? rev.comment.bn : rev.comment.en}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-600/30"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{rev.location}</p>
                  <p className="text-[10px] text-emerald-800 font-semibold truncate">
                    {language === 'bn' ? rev.tourName.bn : rev.tourName.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
