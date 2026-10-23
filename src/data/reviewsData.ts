import { Review, FAQItem } from '../types/tour';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'তানভীর হাসান ও পরিবার',
    location: 'উত্তরা, ঢাকা',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '২০২৬ সালের জানুয়ারি',
    tourName: {
      bn: 'ছায়া সুনিবিড় গ্রামীন জীবন',
      en: 'Tranquil Village Life & River Homestay',
    },
    comment: {
      bn: 'মাহরুয ভাইয়ের সাথে আমাদের পরিবারের গ্রামের ট্যুরটি ছিল জীবনের অন্যতম সেরা অভিজ্ঞতা। বাচ্চারা প্রথমবারের মতো মাটির ঘরে থেকেছে, বিলে নৌকা চালিয়েছে। খাবারের স্বাদ আজও মুখে লেগে আছে।',
      en: 'Our family trip with Maharuz to the village was truly memorable. The kids loved riding wooden boats through water lilies and sleeping in traditional cottages. Food was delicious and authentic.',
    },
  },
  {
    id: 'rev-2',
    author: 'Alexander Wright',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'February 2026',
    tourName: {
      bn: 'সুন্দরবনের গহীন অরণ্যে',
      en: 'Deep Into Sundarbans Mangrove Wilderness',
    },
    comment: {
      bn: 'বাংলাদেশে একা ভ্রমণ করা নিয়ে শুরুতে একটু দ্বিধায় ছিলাম। কিন্তু মাহরুয ভাই আমাকে নিরাপদ ও চমৎকার গাইডেন্স দিয়েছেন। আমরা বনের খালে বাঘের তাজা পায়ের ছাপ ও চিত্রা হরিণ দেখেছি!',
      en: 'As a solo foreigner visiting Bangladesh, hiring Maharuz was the best decision. His knowledge of wildlife, armed guard arrangements, and boat crew were first class. Saw fresh tiger pugmarks!',
    },
  },
  {
    id: 'rev-3',
    author: 'সাদিয়া ও ফারহান',
    location: 'চট্টগ্রাম',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'ডিসেম্বর ২০২৫',
    tourName: {
      bn: 'সাজেক ভ্যালি ও মেঘের রাজ্য',
      en: 'Sajek Valley - The Kingdom of Clouds',
    },
    comment: {
      bn: 'সাজেকে ভোরবেলায় মেঘের সমুদ্র দেখার অনুভূতি ভাষায় প্রকাশ করার মতো নয়। চাঁদের গাড়ি ও কটেজ বুকিং সবকিছু নিখুঁত ছিল। কোনো প্রকার ভোগান্তি ছাড়া ট্যুর শেষ হলো।',
      en: 'Waking up above a sea of clouds in Sajek was surreal. Maharuz handled the military convoy passes, 4x4 jeep, and resort seamlessly.',
    },
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova',
    location: 'Berlin, Germany',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'January 2026',
    tourName: {
      bn: 'শ্রীমঙ্গল ও রাতারগুল অ্যাডভেঞ্চার',
      en: 'Sreemangal Tea Capital & Ratargul Swamp Forest',
    },
    comment: {
      bn: 'রাতারগুলের সবুজ সোয়াম্প ফরেস্টে ডিঙি নৌকায় ভ্রমণ যেন রূপকথার মতো। চা বাগানের ভেতর দিয়ে হাঁটা এবং লাউয়াছড়ায় উল্লুক দেখা ছিল দারুণ অভিজ্ঞতা।',
      en: 'Gliding silently through the flooded canopy of Ratargul was magical. Sreemangal tea trails were peaceful and lush. Highly recommend this tour!',
    },
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      bn: 'ট্যুর প্যাকেজ বুকিং করার নিয়ম কি এবং অগ্রিম কত দিতে হয়?',
      en: 'What is the booking process and how much deposit is required?',
    },
    answer: {
      bn: 'আপনি ওয়েবসাইটের "বুক করুন" বাটনে ক্লিক করে তারিখ ও ভ্রমণকারীর সংখ্যা সিলেক্ট করতে পারেন। বুকিং কনফার্মেশনের জন্য ৩০% অগ্রিম বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে দিতে হয় এবং বাকি অংশ ট্যুর শুরুর দিন প্রদান করা যায়।',
      en: 'Click on any "Book Now" button, choose your preferred travel dates and group size. A 30% advance deposit via bKash, Nagad or International Bank Transfer confirms the reservation, with balance payable on departure.',
    },
    category: 'booking',
  },
  {
    id: 'faq-2',
    question: {
      bn: 'পরিবার, বয়স্ক মানুষ বা বাচ্চাদের সাথে ভ্রমণ কি নিরাপদ ও আরামদায়ক?',
      en: 'Is it safe and comfortable for families, elderly, and children?',
    },
    answer: {
      bn: 'অবশ্যই! আমাদের প্রতিটি ট্যুরে পরিবারের জন্য আলাদা ব্যক্তিগত যানবহন (এসি হাইস / নোয়া / প্রাইভেট কার) এবং আরামদায়ক প্রিমিয়াম রিসোর্ট নিশ্চিত করা হয়। খাবারের ক্ষেত্রে ঝাল বা মশলা কমানোর বিশেষ ব্যবস্থা থাকে।',
      en: 'Yes, 100%! We specialize in family-friendly private tours with safe transport, comfortable child/senior accommodations, and customized mild meal options.',
    },
    category: 'safety',
  },
  {
    id: 'faq-3',
    question: {
      bn: 'বিদেশি পর্যটকদের জন্য সাজেক বা সুন্দরবনের স্পেশাল পারমিট কি আপনি ব্যবস্থা করেন?',
      en: 'Do you arrange special permits for foreign tourists for Sajek or Sundarbans?',
    },
    answer: {
      bn: 'হ্যাঁ। বিদেশী পর্যটকদের জন্য বন বিভাগ, ডিসি অফিস ও বিজিবি/সেনাবাহিনী কর্তৃক প্রয়োজনীয় সকল স্পেশাল এন্ট্রি পারমিট ও সিকিউরিটি ক্লিয়ারেন্স আমরা আগে থেকেই সম্পন্ন করে রাখি।',
      en: 'Yes. We process all official tourist entry clearances and forest permits required by the authorities in advance, making your entry smooth and hassle-free.',
    },
    category: 'permits',
  },
  {
    id: 'faq-4',
    question: {
      bn: 'যদি আমরা আমাদের পছন্দমতো কাস্টমাইজড দিন ও স্থান চাই, তা কি সম্ভব?',
      en: 'Can we build a fully customized itinerary with our own dates and places?',
    },
    answer: {
      bn: 'হ্যাঁ! আমাদের ওয়েবসাইটের "কাস্টম প্ল্যানার" টুল ব্যবহার করে বা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করে আপনার বাজেট, দিন ও পছন্দের রুট অনুযায়ী ব্যক্তিগত ট্যুর প্ল্যান সাজিয়ে নিতে পারেন।',
      en: 'Absolutely! Use our interactive "Custom Tour Planner" section or contact Maharuz directly on WhatsApp to design your tailor-made route and schedule.',
    },
    category: 'custom',
  },
];
