export interface GuideProfile {
  name: {
    bn: string;
    en: string;
  };
  title: {
    bn: string;
    en: string;
  };
  tagline: {
    bn: string;
    en: string;
  };
  bio: {
    bn: string;
    en: string;
  };
  experienceYears: number;
  totalTours: number;
  rating: number;
  avatar: string;
  fullPhoto?: string;
  languages: {
    bn: string[];
    en: string[];
  };
  badges: {
    bn: string[];
    en: string[];
  };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappUrl: string;
    email: string;
    location: {
      bn: string;
      en: string;
    };
  };
}

export const GUIDE_DATA: GuideProfile = {
  name: {
    bn: 'মাহরুয আহমেদ',
    en: 'Maharuz Ahmed',
  },
  title: {
    bn: 'প্রফেশনাল লোকাল ট্যুর গাইড ও কালচারাল এক্সপ্লোরার',
    en: 'Certified Local Tour Guide & Cultural Explorer',
  },
  tagline: {
    bn: 'আপনার বিশ্বস্ত লোকাল এক্সপার্ট ও ব্যক্তিগত ভ্রমণ সঙ্গী',
    en: 'Your Trusted Local Expert & Private Travel Companion',
  },
  bio: {
    bn: 'আমাদের এই অপরূপ রূপসী বাংলার নদী, পাহাড়, অরণ্য আর ছায়া সুনিবিড় গ্রামের আসল সৌন্দর্য আপনাদের ঘুরিয়ে দেখানোই আমার লক্ষ্য। যান্ত্রিক জীবন থেকে দূরে প্রকৃতির কাছাকাছি কিছু সুন্দর সময় কাটাতে আমার অভিজ্ঞ গাইডেন্সে আজই আপনার ট্যুর প্ল্যান করুন। বিগত ৮ বছর ধরে দেশি ও বিদেশি ভ্রমণপিপাসুদের নিয়ে বাংলার ৬৪ জেলার আনাচে-কানাচে ঘুরেছি।',
    en: 'My mission is to reveal the untamed soul, serene riverways, emerald hills, and warm rural hospitality of my homeland. Whether you are navigating the tiger trails of Sundarbans or sleeping under Sajek’s sea of clouds, I curate safe, unforgettable and bespoke travel memories.',
  },
  experienceYears: 8,
  totalTours: 460,
  rating: 4.96,
  avatar: '/assets/maharuz_avatar.jpg',
  fullPhoto: '/assets/maharuz_boat.jpg',
  languages: {
    bn: ['বাংলা (মাতৃভাষা)', 'ইংরেজি (অনর্গল)', 'সিলেটি ও চাটগাঁইয়া উপভাষা'],
    en: ['Bengali (Native)', 'English (Fluent)', 'Regional Dialects'],
  },
  badges: {
    bn: [
      'বাংলাদেশ পর্যটন করপোরেশন প্রত্যয়িত গাইড',
      'ওয়াইল্ডারনেস ফার্স্ট-এইড ও ইমার্জেন্সি রেসকিউ সার্টিফাইড',
      'পরিবেশবান্ধব ও "Leave No Trace" প্রবক্তা',
      'কালচারাল স্টোরিটেলিং ও ট্রাভেল ফটোগ্রাফি এক্সপার্ট',
    ],
    en: [
      'Govt. Certified National Tour Guide',
      'Wilderness First Aid & CPR Certified',
      'Sustainable "Leave No Trace" Advocate',
      'Cultural Storytelling & Photography Specialist',
    ],
  },
  contact: {
    phone: '+880 1746-924292',
    whatsapp: '+880 1746-924292',
    whatsappUrl: 'https://wa.me/8801746924292?text=Hello%20Maharuz,%20I%20am%20interested%20in%20a%20tour%20in%20Bangladesh!',
    email: 'maharuzahmedbd24@gmail.com',
    location: {
      bn: 'ঢাকা ও চট্টগ্রাম, বাংলাদেশ',
      en: 'Dhaka & Chittagong, Bangladesh',
    },
  },
};
