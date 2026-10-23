import React from 'react';
import { Compass, Phone, Mail, ShieldAlert, Heart, MessageCircle } from 'lucide-react';
import { Language } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-[#0b2920] text-slate-300 pt-12 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#f1c40f] text-[#113f31] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Explore <span className="text-[#f1c40f]">Bangladesh</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {language === 'bn'
                ? 'আপনার বিশ্বস্ত লোকাল এক্সপার্ট ও ব্যক্তিগত ট্যুর গাইডের সাথে রূপসী বাংলার নদী, পাহাড় ও অরণ্যের অনবদ্য অভিজ্ঞতা।'
                : 'Experience authentic Bangladesh with certified local expert & private storyteller Maharuz Ahmed.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#f1c40f]">
              <span>★ ৪.৯৬/৫ রেটিং</span>
              <span>•</span>
              <span>৪৬০+ সফল ট্যুর</span>
            </div>
          </div>

          {/* Col 2: Top Destinations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {language === 'bn' ? 'প্রধান পর্যটন স্পট' : 'Top Destinations'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">সুন্দরবন ম্যানগ্রোভ বন (Sundarbans)</a></li>
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">শ্রীমঙ্গল চা বাগান ও রাতারগুল (Sylhet)</a></li>
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">সাজেক ভ্যালি ও মেঘের রাজ্য (Sajek)</a></li>
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">কক্সবাজার ও সেন্টমার্টিন দ্বীপ (Coral Beach)</a></li>
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">ছায়া সুনিবিড় গ্রাম ও ঐতিহ্যবাহী হোমস্টে</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {language === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-[#f1c40f] transition">{language === 'bn' ? 'হোম পেইজ' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-[#f1c40f] transition">{language === 'bn' ? 'আমার সম্পর্কে (গাইড প্রোফাইল)' : 'About Guide'}</a></li>
              <li><a href="#packages" className="hover:text-[#f1c40f] transition">{language === 'bn' ? 'ট্যুর প্যাকেজসমূহ' : 'Tour Packages'}</a></li>
              <li><a href="#planner" className="hover:text-[#f1c40f] transition">{language === 'bn' ? 'কাস্টম ট্যুর ক্যালকুলেটর' : 'Custom Planner'}</a></li>
              <li><a href="#contact" className="hover:text-[#f1c40f] transition">{language === 'bn' ? 'যোগাযোগ ও বুকিং' : 'Contact & Booking'}</a></li>
            </ul>
          </div>

          {/* Col 4: Safety & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {language === 'bn' ? 'ট্যুরিস্ট সহায়তা ও হেল্পলাইন' : 'Tourist Help & Emergency'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <span className="block font-bold text-white">ট্যুরিস্ট পুলিশ বাংলাদেশ:</span>
                  <span className="text-slate-300">০১৩২০-১৬৩৫৯৯ / 999</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-[#f1c40f] shrink-0" />
                <div>
                  <span className="block font-bold text-white">গাইডের সাথে ২৪/৭ হটলাইন:</span>
                  <span className="text-slate-300">{GUIDE_DATA.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright strip - exact text from user's template */}
        <div className="pt-8 text-center text-xs sm:text-sm text-slate-300">
          <p>&copy; ২০২৬ Explore Bangladesh. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-xs text-slate-400 mt-1">
            Personal Tour Guide & Local Expert | Developed with pride for authentic Bangladesh tourism
          </p>
        </div>

      </div>
    </footer>
  );
};
