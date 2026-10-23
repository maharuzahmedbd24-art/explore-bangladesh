import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Language } from '../types/tour';
import { FAQ_DATA } from '../data/reviewsData';

interface TravelFAQProps {
  language: Language;
}

export const TravelFAQ: React.FC<TravelFAQProps> = ({ language }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#113f31] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#f1c40f]" />
            <span>{language === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113f31] font-serif">
            {language === 'bn' ? 'ভ্রমণ সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নোত্তর' : 'Everything You Need to Know'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {language === 'bn'
              ? 'নিরাপত্তা, আবাসন, বুকিং পদ্ধতি ও পারমিট নিয়ে ভ্রমণকারীদের সচরাচর প্রশ্ন।'
              : 'Answers to common questions regarding logistics, safety, bookings, and permits.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {language === 'bn' ? faq.question.bn : faq.question.en}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-800 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {language === 'bn' ? faq.answer.bn : faq.answer.en}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
