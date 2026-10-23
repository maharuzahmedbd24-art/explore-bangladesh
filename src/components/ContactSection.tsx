import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { Language } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#113f31] text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1c40f]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#f1c40f] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'সরাসরি যোগাযোগ' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            {language === 'bn' ? 'আপনার পরবর্তী বাংলাদেশ ভ্রমণ নিয়ে কথা বলুন' : 'Start Planning Your Bangladesh Journey'}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200 mt-2">
            {language === 'bn'
              ? 'যেকোনো প্রশ্ন, কাস্টম ট্যুর রুট বা পরামর্শের জন্য নির্দ্বিধায় আমাকে কল বা বার্তা পাঠান।'
              : 'Have questions, need permit advice, or want a custom quote? Reach out directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Guide Quick Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href={`tel:${GUIDE_DATA.contact.phone}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f1c40f] text-[#113f31] flex items-center justify-center shrink-0 shadow">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs text-emerald-200 uppercase font-semibold">
                  {language === 'bn' ? 'সরাসরি কল করুন' : 'Direct Phone Call'}
                </span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#f1c40f] transition">
                  {GUIDE_DATA.contact.phone}
                </span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={GUIDE_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/20 backdrop-blur-md border border-[#25D366]/40 hover:bg-[#25D366]/30 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <span className="block text-xs text-emerald-200 uppercase font-semibold">
                  {language === 'bn' ? 'হোয়াটসঅ্যাপ বার্তা (২৪/৭ দ্রুত উত্তর)' : 'WhatsApp (Fastest 24/7 Response)'}
                </span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-200 transition">
                  {GUIDE_DATA.contact.whatsapp}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GUIDE_DATA.contact.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs text-emerald-200 uppercase font-semibold">
                  {language === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Email Address'}
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#f1c40f] transition truncate block">
                  {GUIDE_DATA.contact.email}
                </span>
              </div>
            </a>

            {/* Base Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#f1c40f] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs text-emerald-200 uppercase font-semibold">
                  {language === 'bn' ? 'মিটিং পয়েন্ট ও হাব' : 'Guide Base & Meeting Hub'}
                </span>
                <span className="text-sm font-bold text-white">
                  {language === 'bn' ? 'ঢাকা বিমানবন্দর, উত্তরা ও ধানমন্ডি' : 'Dhaka Airport, Uttara & Dhanmondi'}
                </span>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
            {sent ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-[#113f31]">
                  {language === 'bn' ? 'বার্তাটি সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  {language === 'bn'
                    ? 'ধন্যবাদ! ট্যুর গাইড মাহরুয আহমেদ দ্রুত আপনার দেওয়া ফোন বা WhatsApp নম্বরে যোগাযোগ করবেন।'
                    : 'Thank you! Guide Maharuz Ahmed will respond to your inquiry shortly.'}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-[#113f31] text-white font-bold text-xs"
                >
                  {language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#113f31] mb-1">
                  {language === 'bn' ? 'অনলাইন ইনকোয়ারি ফর্ম' : 'Quick Inquiry Form'}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {language === 'bn'
                    ? 'ফর্মটি পূরণ করুন, আমরা অল্প সময়ের মধ্যে আপনার সাথে যোগাযোগ করবো।'
                    : 'Fill this out and we will contact you with all tour details.'}
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'bn' ? 'আপনার পূর্ণ নাম লিখুন' : 'Enter full name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'মোবাইল / WhatsApp নম্বর *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'আপনার বার্তা বা ভ্রমণ পরিকল্পনা' : 'Your Message or Tour Ideas'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      language === 'bn'
                        ? 'আপনার আগ্রহের জায়গা, আনুমানিক তারিখ ও সদস্য সংখ্যা জানাতে পারেন...'
                        : 'Share desired destinations, travel dates, or group details...'
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#f1c40f]" />
                  <span>{language === 'bn' ? 'বার্তা পাঠান' : 'Submit Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
