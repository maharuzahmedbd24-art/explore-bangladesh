import React, { useState } from 'react';
import { Compass, Globe, DollarSign, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Language, Currency } from '../types/tour';
import { GUIDE_DATA } from '../data/guideData';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  onOpenCustomPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  currency,
  setCurrency,
  onOpenCustomPlanner,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', labelBn: 'হোম', labelEn: 'Home' },
    { href: '#about', labelBn: 'আমার সম্পর্কে', labelEn: 'About Guide' },
    { href: '#packages', labelBn: 'ট্যুর প্যাকেজ', labelEn: 'Tour Packages' },
    { href: '#planner', labelBn: 'কাস্টম প্ল্যানার', labelEn: 'Custom Planner', action: onOpenCustomPlanner },
    { href: '#gallery', labelBn: 'গ্যালারি', labelEn: 'Gallery' },
    { href: '#contact', labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <>
      {/* Top micro bar for emergency / direct contact */}
      <div className="bg-[#0b2920] text-emerald-100 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-emerald-900/60">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {language === 'bn' ? 'সরাসরি লোকাল গাইড সার্ভিস' : 'Direct Licensed Local Guide Service'}
          </span>
          <span className="hidden md:inline-block text-emerald-300/60">|</span>
          <span className="hidden md:flex items-center gap-1 text-emerald-200">
            <Phone className="w-3 h-3 text-[#f1c40f]" />
            {GUIDE_DATA.contact.phone}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            onClick={() => setCurrency(currency === 'BDT' ? 'USD' : 'BDT')}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-900/80 hover:bg-emerald-800 text-amber-300 font-medium transition cursor-pointer"
            title="Change Currency"
          >
            <DollarSign className="w-3 h-3" />
            <span>{currency === 'BDT' ? '৳ BDT' : '$ USD'}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium transition cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3 h-3 text-[#f1c40f]" />
            <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-[#113f31] text-white shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f1c40f] to-amber-600 flex items-center justify-center text-[#113f31] shadow-md group-hover:scale-105 transition transform">
                <Compass className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Explore <span className="text-[#f1c40f]">Bangladesh</span>
                </span>
                <span className="block text-[11px] font-medium text-emerald-200 tracking-wider uppercase">
                  {language === 'bn' ? 'লোকাল এক্সপার্ট ও ট্যুর গাইড' : 'Personal Guide & Local Expert'}
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                    }}
                    className="text-white hover:text-[#f1c40f] font-semibold text-[15px] transition-colors py-2 relative group"
                  >
                    {language === 'bn' ? item.labelBn : item.labelEn}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f1c40f] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Call to action & WhatsApp quick button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={GUIDE_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2 rounded-lg text-sm font-semibold shadow-md transition hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#packages"
                className="bg-[#f1c40f] hover:bg-[#e2b70b] text-[#113f31] px-5 py-2 rounded-lg text-sm font-bold shadow-md transition hover:-translate-y-0.5"
              >
                {language === 'bn' ? 'ট্যুর বুকিং' : 'Book a Tour'}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={GUIDE_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#25D366] text-white"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/80 transition"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e3529] border-t border-emerald-800/80 px-4 pt-4 pb-6 space-y-3">
            <ul className="space-y-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                    }}
                    className="block px-3 py-2.5 rounded-lg text-white hover:bg-emerald-800 hover:text-[#f1c40f] font-semibold text-base transition"
                  >
                    {language === 'bn' ? item.labelBn : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-emerald-800 flex flex-col gap-2">
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#f1c40f] text-[#113f31] py-2.5 rounded-lg font-bold shadow"
              >
                {language === 'bn' ? 'ট্যুর প্যাকেজ বুকিং' : 'Book Tour Package'}
              </a>
              <div className="flex justify-between items-center px-2 pt-2 text-xs text-emerald-200">
                <span>{language === 'bn' ? 'মুদ্রা:' : 'Currency:'} {currency}</span>
                <span>{language === 'bn' ? 'ভাষা:' : 'Language:'} {language === 'bn' ? 'বাংলা' : 'English'}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
