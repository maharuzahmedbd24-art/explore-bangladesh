import { TourPackage } from '../types/tour';

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'village-life',
    mapConfig: {
      centerLat: 23.9000,
      centerLng: 89.1300,
      zoom: 11,
      regionName: {
        bn: 'কুষ্টিয়া, পদ্মা নদী ও শিলাইদহ গ্রামীণ অঞ্চল',
        en: 'Kushtia, Padma River & Shilaidaha Rural Heritage',
      },
    },
    mapPoints: [
      {
        id: 'lalon_akhra',
        name: { bn: 'লালন শাহের মাজার ও বাউল আখড়া', en: 'Fakir Lalon Shah Shrine & Baul Akhra' },
        type: 'highlight',
        lat: 23.9074,
        lng: 89.1417,
        description: {
          bn: 'ঐতিহ্যবাহী লালন আখড়ায় একতারা ও বাউল গানের আত্মিক মূর্ছনা',
          en: 'Soulful mystic Baul music and acoustic Ektara sessions at Lalon Shrine',
        },
      },
      {
        id: 'rabindra_kuthibari',
        name: { bn: 'শিলাইদহ রবীন্দ্র কুঠিবাড়ি', en: 'Shilaidaha Rabindra Kuthibari Palace' },
        type: 'highlight',
        lat: 23.9189,
        lng: 89.2435,
        description: {
          bn: 'বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের স্মৃতিবিজড়িত ঐতিহাসিক কুঠিবাড়ি ও পদ্মার বোট',
          en: 'Historic country estate where Nobel laureate Rabindranath Tagore composed poetry',
        },
      },
      {
        id: 'padma_sunset',
        name: { bn: 'পদ্মা নদীর বুকে কাঠের নৌভ্রমণ ও সূর্যাস্ত', en: 'Padma River Wooden Boat Sunset Cruise' },
        type: 'nature',
        lat: 23.9250,
        lng: 89.2100,
        description: {
          bn: 'নৌকায় চড়ে পদ্মার বুকে সূর্যাস্ত দেখা এবং বিলের শাপলা তোলা',
          en: 'Sunset sailing on the mighty Padma river and picking blooming water lilies',
        },
      },
      {
        id: 'clay_homestay',
        name: { bn: 'ঐতিহ্যবাহী মাটির ঘর ও ঢেঁকি ছাঁটা চালের আতিথেয়তা', en: 'Traditional Clay Cottage Homestay' },
        type: 'stay',
        lat: 23.8820,
        lng: 89.1620,
        description: {
          bn: 'মাটির ঘরে রাত্রিযাপন, গাছের খাঁটি খেজুরের রস ও মাটির চুলার পিঠা',
          en: 'Overnight in authentic earthen cottage, fresh date palm sap and traditional pithas',
        },
      },
    ],
    title: {
      bn: 'ছায়া সুনিবিড় গ্রামীন জীবন',
      en: 'Tranquil Village Life & River Homestay',
    },
    badge: {
      bn: 'জনপ্রিয়',
      en: 'Popular',
    },
    category: 'village',
    shortDesc: {
      bn: 'যান্ত্রিক জীবন থেকে দূরে খাঁটি বাংলার মাটির গন্ধ নিতে আমাদের এই বিশেষ আয়োজন। কুষ্টিয়ার লালন আখড়া, শিলাইদহ কুঠিবাড়ি, পদ্মায় নৌভ্রমণ, মাটির ঘরে রাত ও খাঁটি খেজুরের রস।',
      en: 'Escape the hustle of modern life into the timeless rhythm of rural Bengal. Visit Kushtia Lalon Akhra, Tagore’s Kuthibari, sunset sailing on the Padma, and stay in traditional clay homes.',
    },
    fullDesc: {
      bn: 'যান্ত্রিক জীবন থেকে দূরে খাঁটি বাংলার মাটির গন্ধ নিতে আমাদের এই বিশেষ আয়োজন। এই ট্যুরে আপনি যা যা উপভোগ করতে পারবেন: কুষ্টিয়ার ঐতিহ্যবাহী লালন আখড়া ও শিলাইদহ রবীন্দ্র কুঠিবাড়ি দর্শন, ঐতিহ্যবাহী মাটির ঘরে রাত্রিযাপন এবং ঢেঁকি ছাঁটা চালের গরম ভাত, নৌকায় চড়ে পদ্মার বুকে সূর্যাস্ত দেখা এবং বিলের শাপলা তোলা, গ্রামের মেঠো পথে গরুর গাড়ি বা ভ্যানে চড়ে ঘুরে বেড়ানো, এবং গাছের খাঁটি খেজুরের রস ও মাটির চুলার পিঠার অনন্য স্বাদ।',
      en: 'Escape busy city life to embrace the true soul of Bengal. In this curated rural journey, you will experience: visiting mystic Lalon Shah shrine & Shilaidaha Rabindra Kuthibari, overnight stay in authentic earthen cottages with hot rice husked in traditional Dheki, sunset wooden boat sailing on the Padma river and picking water lilies, riding traditional village bullock carts or open vans, and tasting tree-fresh date palm nectar with clay-stove pithas.',
    },
    priceBDT: 3500,
    priceUSD: 35,
    duration: {
      bn: '২ দিন ১ রাত',
      en: '2 Days 1 Night',
    },
    groupSize: {
      bn: '২-৮ জন',
      en: '2-8 persons',
    },
    imageUrl: '/assets/maharuz_boat.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'কুষ্টিয়ার ঐতিহ্যবাহী লালন আখড়া ও শিলাইদহ রবীন্দ্র কুঠিবাড়ি দর্শন',
        'ঐতিহ্যবাহী মাটির ঘরে রাত্রিযাপন এবং ঢেঁকি ছাঁটা চালের গরম ভাত',
        'নৌকায় চড়ে পদ্মার বুকে সূর্যাস্ত দেখা এবং বিলের শাপলা তোলা',
        'গ্রামের মেঠো পথে গরুর গাড়ি বা ভ্যানে চড়ে ঘুরে বেড়ানো',
        'গাছের খাঁটি খেজুরের রস এবং মাটির চুলার পিঠার স্বাদ',
      ],
      en: [
        'Visit legendary Lalon Shah Baul shrine & Tagore’s Shilaidaha Kuthibari',
        'Overnight stay in traditional clay cottage with fresh Dheki-husked hot rice',
        'Wooden boat sailing across Padma river at sunset and water lily harvesting',
        'Ride traditional rural bullock carts or open local vans across village paths',
        'Taste fresh date palm nectar straight from trees & earthen stove pithas',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: গ্রামে আগমন, নৌভ্রমণ ও সূর্যস্ত',
          en: 'Day 1: Arrival, Riverboat Cruise & Village Sunset',
        },
        description: {
          bn: 'সকালে ঢাকা থেকে যাত্রা শুরু। গ্রামে পৌঁছে ডাবের পানি দিয়ে উষ্ণ অভ্যর্থনা। দুপুরে ঐতিহ্যবাহী কাসার থালায় খাবার পরিবেশন। বিকেলে বিলে নৌকায় ঘুরে পদ্ম ও শাপলা দর্শন। সন্ধ্যায় বাউল গান ও পিঠার আয়োজন।',
          en: 'Morning departure from Dhaka. Arrive at the village with fresh green coconut welcome drink. Lunch served on traditional brass plates. Afternoon boat glide through wetlands, followed by twilight folk songs.',
        },
        highlights: {
          bn: ['ডাবের পানি ও ফলমূল', 'শাপলা বিল নৌকা ভ্রমণ', 'সন্ধ্যায় খোলা উঠানে আড্ডা'],
          en: ['Fresh coconut welcome', 'Water lily cruise', 'Evening fireside folklore'],
        },
      },
      {
        dayNumber: 2,
        title: {
          bn: 'দিন ২: ভোরের মেঠোপথ, তাঁতশিল্প ও বিদায়',
          en: 'Day 2: Morning Village Trail, Weaving & Return',
        },
        description: {
          bn: 'ভোরে মেঠোপথে হাঁটাহাঁটি, তাজা খেজুরের রস বা খাঁটি গরুর দুধের চা। স্থানীয় তাঁতি ও মৃৎশিল্পীদের কাজ দেখা। দুপুরের পুষ্টিকর খাবারের পর স্মৃতিময় বিদায়।',
          en: 'Early sunrise walk through village trails, fresh morning tea. Visit traditional handloom weavers and pottery makers. Home-cooked lunch before relaxing return drive.',
        },
        highlights: {
          bn: ['ভোরের পাখির ডাক', 'মৃৎশিল্প দেখা', 'ঢেঁকি ছাঁটা চালের খাবার'],
          en: ['Sunrise birdwatching', 'Pottery artisan visit', 'Farm-to-table lunch'],
        },
      },
    ],
    includes: {
      bn: [
        'অভিজ্ঞ লোকাল গাইডের নিরবচ্ছিন্ন সহযোগিতা',
        'ঐতিহ্যবাহী গ্রামীণ হোমস্টে (১ রাত)',
        'সমস্ত খাবার (২ দুপুরের খাবার, ১ রাতের খাবার, ১ প্রাতরাশ ও নাস্তা)',
        'শাপলা বিলে কাঠের নৌকার ভাড়া ও লাইফ জ্যাকেট',
        'সাংস্কৃতিক বাউল গানের আয়োজন',
      ],
      en: [
        'Dedicated certified English/Bengali personal guide',
        'Authentic village homestay accommodation (1 Night)',
        'All meals included (2 Lunches, 1 Dinner, 1 Breakfast + snacks)',
        'Private country boat rental with certified life vests',
        'Folk music performance & artisan workshop entry',
      ],
    },
    excludes: {
      bn: [
        'ব্যক্তিগত কেনাকাটা ও বখশিশ',
        'ব্যক্তিগত ঔষধপত্র ও বীমা',
      ],
      en: [
        'Personal shopping & guide gratuity',
        'Personal travel insurance & medical supplies',
      ],
    },
    pickupLocation: {
      bn: 'ঢাকা (উত্তরা / ধানমন্ডি / যেকোনো সুবিধাজনক স্পট)',
      en: 'Dhaka (Uttara / Dhanmondi / Hotel pickup)',
    },
    bestSeason: {
      bn: 'অক্টোবর থেকে মার্চ (শীত ও বসন্তকাল)',
      en: 'October to March (Pleasant winter & spring)',
    },
    rating: 4.95,
    reviewsCount: 68,
  },
  {
    id: 'sreemangal-ratargul',
    mapConfig: {
      centerLat: 24.5500,
      centerLng: 91.8000,
      zoom: 10,
      regionName: {
        bn: 'শ্রীমঙ্গল ও সিলেট সোয়াম্প অঞ্চল',
        en: 'Sreemangal & Sylhet Swamp Basin',
      },
    },
    mapPoints: [
      {
        id: 'sreemangal_estates',
        name: { bn: 'শ্রীমঙ্গল শতবর্ষী চা বাগান', en: 'Sreemangal Century-Old Tea Estates' },
        type: 'highlight',
        lat: 24.3065,
        lng: 91.7296,
        description: {
          bn: 'সবুজ আঁকাবাঁকা টিলা ও চা পাতা তোলার মনোরম দৃশ্য',
          en: 'Rolling hills of tea shrubs with local tea pluckers',
        },
      },
      {
        id: 'lawachara_park',
        name: { bn: 'লাউয়াছড়া জাতীয় উদ্যান', en: 'Lawachara National Park Canopy' },
        type: 'nature',
        lat: 24.3242,
        lng: 91.7891,
        description: {
          bn: 'চিরহরিৎ রেইনফরেস্ট, বিরল উল্লুক ও বন্যপ্রাণী ট্র্যাকিং',
          en: 'Dense rainforest trail home to endangered Hoolock Gibbons',
        },
      },
      {
        id: 'madhabpur_lake',
        name: { bn: 'মাধবপুর লেক', en: 'Madhabpur Lotus Lake' },
        type: 'nature',
        lat: 24.2384,
        lng: 91.7820,
        description: {
          bn: 'চা বাগানের কোলঘেঁষা নীল পদ্ম ও সূর্যাস্ত পয়েন্ট',
          en: 'Serene blue water lake nestled inside hill tea slopes',
        },
      },
      {
        id: 'ratargul_swamp',
        name: { bn: 'রাতারগুল সোয়াম্প ফরেস্ট', en: 'Ratargul Freshwater Swamp Forest' },
        type: 'highlight',
        lat: 25.0006,
        lng: 91.9306,
        description: {
          bn: 'ভাসমান করচ ও হিজল বনের ভেতর ছোট ডিঙি নৌকায় ভ্রমণ',
          en: 'Glide under submerged tree canopies on silent wooden canoes',
        },
      },
    ],
    title: {
      bn: 'শ্রীমঙ্গল ও রাতারগুল অ্যাডভেঞ্চার',
      en: 'Sreemangal Tea Capital & Ratargul Swamp Forest',
    },
    badge: {
      bn: 'টপ রেটেড',
      en: 'Top Rated',
    },
    category: 'tea_nature',
    shortDesc: {
      bn: 'সবুজ চায়ের রাজ্যে হারিয়ে যাওয়া, লাউয়াছড়া জাতীয় উদ্যানে ট্র্যাকিং এবং সোয়াম্প ফরেস্ট রাতারগুলে নৌভ্রমণের এক রোমাঞ্চকর অভিজ্ঞতা।',
      en: 'Immerse yourself in endless undulating tea gardens, trek dense rainforest trails in Lawachara, and navigate the mysterious flooded forest of Ratargul.',
    },
    fullDesc: {
      bn: 'চায়ের রাজধানী শ্রীমঙ্গলের আঁকাবাঁকা সবুজ টিলা, দুর্লভ উল্লুক ও বন্যপ্রাণীর আবাসস্থল লাউয়াছড়া জাতীয় উদ্যান এবং সিলেটের বিখ্যাত সোয়াম্প ফরেস্ট রাতাহগুলে ডিঙি নৌকায় ভ্রমণ। সাথে থাকছে বিখ্যাত সাতরঙা চা এবং খাসিয়া পল্লীর জীবনধারা অবলোকন।',
      en: 'A scenic eco-journey covering Sreemangal lush rolling hills, pristine virgin rainforest of Lawachara National Park home to endangered Hoolock Gibbon, the turquoise water of Lalakhal and the serene flooded trees of Ratargul Swamp Forest.',
    },
    priceBDT: 5000,
    priceUSD: 48,
    duration: {
      bn: '৩ দিন ২ রাত',
      en: '3 Days 2 Nights',
    },
    groupSize: {
      bn: '২-১০ জন',
      en: '2-10 persons',
    },
    imageUrl: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'শ্রীমঙ্গলের শতবর্ষী চা বাগানে সাইক্লিং ও ফটোসেশন',
        'লাউয়াছড়া জাতীয় উদ্যানে বন্যপ্রাণী ও পাখি ট্র্যাকিং',
        'রাতারগুল সোয়াম্প ফরেস্টে জলজ বনের ভেতর ডিঙি নৌকা ভ্রমণ',
        'মাধবপুর লেকের নীল পদ্ম ও টিলা দর্শন',
        'ঐতিহাসিক নীলকণ্ঠ টি কেবিনের বিখ্যাত সাতরঙা চা ও খাসিয়া পানপুঞ্জি',
      ],
      en: [
        'Leisurely walks & photo shoots across tea estates of Sreemangal',
        'Jungle trekking inside Lawachara National Park seeking Gibbons',
        'Silent boat navigation inside Ratargul flooded freshwater swamp',
        'Sunset views at pristine Madhabpur lotus lake',
        'Tasting the legendary multi-layer rainbow tea and tribal Khasia village visit',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: শ্রীমঙ্গল আগমন ও চা বাগানের মুগ্ধতা',
          en: 'Day 1: Arrival in Sreemangal & Tea Gardens Exploration',
        },
        description: {
          bn: 'ঢাকা থেকে শ্রীমঙ্গলে পৌঁছে ইকো রিসোর্টে চেক-ইন। বিকেলে মনোরম চা বাগানের ভেতর দিয়ে হাঁটা, চা পাতা তোলা দেখা এবং মাধবপুর লেকে শান্ত সূর্যাস্ত।',
          en: 'Morning drive or train to Sreemangal. Check-in to lush eco-resort. Afternoon stroll through rolling tea gardens, observing tea pickers at work, and sunset by Madhabpur lake.',
        },
        highlights: {
          bn: ['চা বাগান ওয়াক', 'মাধবপুর লেক', 'রিসোর্টে বারবিকিউ'],
          en: ['Tea estate walk', 'Madhabpur lake', 'Resort evening BBQ'],
        },
      },
      {
        dayNumber: 2,
        title: {
          bn: 'দিন ২: লাউয়াছড়া ট্র্যাকিং ও খাসিয়া পল্লী',
          en: 'Day 2: Lawachara Rainforest Trek & Tribal Culture',
        },
        description: {
          bn: 'ভোরে লাউয়াছড়ার গহীন বনে ট্র্যাকিং। সেখানে বানর, মায়া হরিণ ও বিরল উল্লুক দেখার সুযোগ। খাসিয়া নৃগোষ্ঠীর সংস্কৃতি ও পান চাষের বাগান পরিদর্শন।',
          en: 'Early morning wildlife trek in Lawachara rainforest canopy. Encounter Gibbons, civets, and native flora. Visit indigenous Khasia community lifestyle.',
        },
        highlights: {
          bn: ['উল্লুক দর্শন ট্রেইল', 'খাসিয়া পল্লী', 'সাত রঙের চা'],
          en: ['Hoolock Gibbon trail', 'Indigenous village', 'Multi-layer tea tasting'],
        },
      },
      {
        dayNumber: 3,
        title: {
          bn: 'দিন ৩: রাতারগুল সোয়াম্প ফরেস্ট ক্রুজ ও প্রত্যাবর্তন',
          en: 'Day 3: Ratargul Swamp Forest Boat Cruise & Return',
        },
        description: {
          bn: 'সিলেটের রাতারগুল সোয়াম্প ফরেস্টে ছোট নৌকায় বনের জলজ ক্যানোপির ভেতর রোমাঞ্চকর ভ্রমণ। স্থানীয় তাজা মাছ দিয়ে দুপুরের খাবার শেষ করে বিদায়।',
          en: 'Scenic drive to Ratargul Freshwater Swamp. Cruise through submerged trees on a tranquil canoe. Local river-fish lunch before departure back to Dhaka.',
        },
        highlights: {
          bn: ['সবুজ পানির সোয়াম্প ফরেস্ট', 'ওয়াচ টাওয়ার থেকে ভিউ', 'তাজা স্থানীয় মাছের ভোজন'],
          en: ['Swamp forest boat canopy', 'Watchtower panoramic view', 'Freshwater fish feast'],
        },
      },
    ],
    includes: {
      bn: [
        '২ রাত প্রিমিয়াম ইকো রিসোর্ট আবাসন',
        'অভিজ্ঞ গাইড ও ফরেস্ট পারমিট ফি',
        'রাতারগুলে রিজার্ভ নৌকার ভাড়া',
        'সকল ব্রেকফাস্ট ও ঐতিহ্যবাহী দুপুরের খাবার',
        'নিরাপদ অভ্যন্তরীণ যোগাযোগ সুবিধা',
      ],
      en: [
        '2 nights eco-cottage / resort accommodation',
        'Certified local naturalist guide & forest entry permits',
        'Private wooden boat tour in Ratargul',
        'Daily breakfast & traditional lunch sets',
        'All in-tour ground transportation',
      ],
    },
    excludes: {
      bn: ['ব্যক্তিগত কেনাকাটা', 'ট্রেন বা বাস টিকিট (রিকোয়েস্টে যোগ করা যায়)'],
      en: ['Personal shopping & tips', 'Inter-city bus/train tickets (available upon request)'],
    },
    pickupLocation: {
      bn: 'ঢাকা অথবা শ্রীমঙ্গল রেলওয়ে স্টেশন',
      en: 'Dhaka or Sreemangal Railway Station',
    },
    bestSeason: {
      bn: 'জুলাই থেকে ফেব্রুয়ারি (বর্ষায় রাতারগুল ও শীতে শ্রীমঙ্গল সবচেয়ে সুন্দর)',
      en: 'July to February (Monsoon for full swamp water, Winter for crisp tea hills)',
    },
    rating: 4.98,
    reviewsCount: 94,
  },
  {
    id: 'sundarbans-safari',
    mapConfig: {
      centerLat: 22.0500,
      centerLng: 89.6500,
      zoom: 10,
      regionName: {
        bn: 'সুন্দরবন ওয়ার্ল্ড হেরিটেজ রিজার্ভ',
        en: 'Sundarbans UNESCO Biosphere Reserve',
      },
    },
    mapPoints: [
      {
        id: 'mongla_port',
        name: { bn: 'মোংলা নদী বন্দর (যাত্রা শুরু)', en: 'Mongla Port (Vessel Embarkation)' },
        type: 'pickup',
        lat: 22.4833,
        lng: 89.6000,
        description: {
          bn: 'পর্যটন জাহাজে আরোহণ ও পশুর নদী দিয়ে যাত্রা আরম্ভ',
          en: 'Board cruise vessel and sail down the Pashur river',
        },
      },
      {
        id: 'harbaria_center',
        name: { bn: 'হারবাড়িয়া ইকো পর্যটন কেন্দ্র', en: 'Harbaria Eco Walkway' },
        type: 'highlight',
        lat: 22.3021,
        lng: 89.6205,
        description: {
          bn: 'ম্যানগ্রোভ বনের ভেতর কাঠের দীর্ঘ হাঁটা পথ ও ওয়াচ টাওয়ার',
          en: 'Boardwalk through mangrove roots with tiger observation tower',
        },
      },
      {
        id: 'kotka_sanctuary',
        name: { bn: 'কটকা বন্যপ্রাণী অভয়ারণ্য', en: 'Kotka Wildlife Sanctuary & Tiger Point' },
        type: 'nature',
        lat: 21.8540,
        lng: 89.7821,
        description: {
          bn: 'চিত্রা হরিণের দল, বন্য শূকর ও রয়েল বেঙ্গল টাইগার পয়েন্ট ট্রেইল',
          en: 'Prime habitat for spotted deer, wild boar and Bengal tiger sightings',
        },
      },
      {
        id: 'karamjal_croc',
        name: { bn: 'করমজল কুমির প্রজনন কেন্দ্র', en: 'Karamjal Crocodile & Turtle Breeding Center' },
        type: 'highlight',
        lat: 22.4285,
        lng: 89.5932,
        description: {
          bn: 'নোনা পানির কুমির, বিরল বাটাগুর বাসকা কচ্ছপ ও হরিণ অভয়ারণ্য',
          en: 'Conservation facility for estuarine crocodiles and endangered turtles',
        },
      },
    ],
    title: {
      bn: 'সুন্দরবনের গহীন অরণ্যে',
      en: 'Deep Into Sundarbans Mangrove Wilderness',
    },
    badge: {
      bn: 'অ্যাডভেঞ্চার',
      en: 'Adventure',
    },
    category: 'wildlife',
    shortDesc: {
      bn: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ বনের নদী ও খালে ক্রুজ ট্রিপ। রয়েল বেঙ্গল টাইগার, হরিণ আর বন্যপ্রাণীর সন্ধানে বনের গহীনে ট্রেইল হাইকিং।',
      en: 'Embark on a boutique boat cruise through the world’s largest mangrove forest. Spot Royal Bengal Tigers, spotted deer, estuarine crocodiles and river dolphins.',
    },
    fullDesc: {
      bn: 'ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সুন্দরবনের নীরব নদী ও খালের ভেতর ছোট লঞ্চ বা পর্যটন জাহাজে রোমাঞ্চকর ৩ দিনের সাফারি। কটকা অভয়ারণ্য, কচিখালী টাইগার পয়েন্ট, হারবাড়িয়া ইকো ট্যুরিজম কেন্দ্র এবং করমজলে কুমির ও হরিণ প্রজনন কেন্দ্র পরিদর্শন। সাথে থাকছে সশস্ত্র বনরক্ষী ও বিশেষজ্ঞ ওয়াইল্ডলাইফ ট্র্যাকার।',
      en: 'A transformative 3-day deep wildlife safari into the UNESCO World Heritage Sundarbans. Cruise through narrow creeks, walk the tranquil sea-meeting trails at Kotka wildlife sanctuary, observe deer, monkeys and wild boars, with licensed armed forest guards and veteran wildlife spotter Maharuz.',
    },
    priceBDT: 8500,
    priceUSD: 79,
    duration: {
      bn: '৩ দিন ৩ রাত',
      en: '3 Days 3 Nights',
    },
    groupSize: {
      bn: '৪-১২ জন',
      en: '4-12 persons',
    },
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'কটকা ও কচিখালী বন্যপ্রাণী অভয়ারণ্যে নীরব ক্যানাল ক্রুজ',
        'রয়েল বেঙ্গল টাইগারের পদচিহ্ন ও চিত্রা হরিণের দল দর্শন',
        'গাংগেয় ও ইরাবতী ডলফিন দর্শন ক্যাম্প',
        'করমজল কুমির প্রজনন কেন্দ্র ও ঝুলন্ত কাঠের সেতু',
        'জাহাজে বারবিকিউ ডিনার ও খাঁটি সুন্দরবনের মধু সংগ্রহ দেখা',
      ],
      en: [
        'Silent early morning creek cruising through Kotka & Kochikhali sanctuaries',
        'Spotting Royal Bengal Tiger pugmarks, spotted deers & wild boars',
        'Irrawaddy & Ganges river dolphin watching in estuary waters',
        'Karamjal crocodile breeding center & elevated canopy walkway',
        'Onboard live seafood BBQ and authentic wild mangrove honey tasting',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: মোংলা থেকে সুন্দরবনে প্রবেশ ও হারবাড়িয়া',
          en: 'Day 1: Embarkation from Mongla & Harbaria Eco Center',
        },
        description: {
          bn: 'মোংলা ঘাট থেকে আমাদের ক্রুজে যাত্রা শুরু। পশুর নদী হয়ে সুন্দরবনের প্রবেশপথ হারবাড়িয়া ইকো ট্যুরিজমে কাঠের ট্রেইলে বনের ভেতর হাঁটা। সুন্দরবনের প্রথম অনুভূতি।',
          en: 'Board the cruise boat from Mongla. Sail down the Pashur river into Harbaria eco center. Enjoy elevated wooden walkways cutting deep into mangrove roots.',
        },
        highlights: {
          bn: ['ক্রুজে অভ্যর্থনা', 'হারবাড়িয়া কাঠের ট্রেইল', 'সূর্যাস্ত ক্রুজ'],
          en: ['Onboard welcome', 'Harbaria boardwalk', 'Sunset river cruise'],
        },
      },
      {
        dayNumber: 2,
        title: {
          bn: 'দিন ২: কটকা টাইগার পয়েন্ট ও জামতলী সৈকত ট্রেইল',
          en: 'Day 2: Kotka Wildlife Sanctuary & Jamtoli Beach Trail',
        },
        description: {
          bn: 'ভোরে ছোট নৌকায় বনের সরু খালে নীরব পাখি ও হরিণ দর্শন। এরপর কটকা বন ফাঁড়িতে ট্র্যাকিং এবং বঙ্গোপসাগরের সাথে মিশে যাওয়া কুমারখালী সমুদ্রসৈকতে পদচারণা।',
          en: 'Silent dawn rowboat safari deep into tiny creeks. Forest tracking around Kotka watchtower. Walk through Jamtoli coastal beach where forest kisses the Bay of Bengal.',
        },
        highlights: {
          bn: ['ভোরের নীরব সাফারি', 'চিত্রা হরিণের পাল', 'টাইগার পয়েন্ট ট্রেইল'],
          en: ['Silent dawn creek safari', 'Deer herds', 'Tiger pugmark spotting'],
        },
      },
      {
        dayNumber: 3,
        title: {
          bn: 'দিন ৩: করমজল কুমির কেন্দ্র ও মোংলায় ফেরা',
          en: 'Day 3: Karamjal Crocodile Sanctuary & Return to Mongla',
        },
        description: {
          bn: 'করমজল ইকো সেন্টারে নোনা পানির কুমির, কচ্ছপ ও বানরের সাথে সময় কাটানো। ক্রুজে সুস্বাদু রূপচাঁদা মাছের মধ্যাহ্নভোজ শেষে সন্ধ্যায় মোংলায় প্রত্যাবর্তন।',
          en: 'Visit Karamjal crocodile breeding center and turtle hatchery. Sumptuous coastal seafood lunch on board before safe disembarkation at Mongla.',
        },
        highlights: {
          bn: ['কুমির প্রজনন প্রকল্প', 'ম্যানগ্রোভ উদ্ভিদ পরিচিতি', 'রূপচাঁদা মাছের স্পেশাল লাঞ্চ'],
          en: ['Crocodile conservation', 'Mangrove flora education', 'Fresh pomfret lunch'],
        },
      },
    ],
    includes: {
      bn: [
        '৩ দিন ২ রাত এসি/নন-এসি কেবিন ক্রুজ সুবিধা',
        'বন বিভাগের সরকারি পারমিট ও সশস্ত্র বনরক্ষীর নিরাপত্তা',
        'সকল বেলার প্রিমিয়াম ফ্রেশ মিল ও বারবিকিউ',
        'ছোট দেশি নৌকায় সরু খালে নীরব সাফারি',
        'দক্ষ ওয়াইল্ডলাইফ গাইডের দিকনির্দেশনা',
      ],
      en: [
        '3 Days 2 Nights private/cabin cruise ship',
        'Bangladesh Forest Department entry permits & armed forest guards',
        'All gourmet meals, snacks, seafood & evening BBQ',
        'Special silent manual rowboats for creek exploration',
        'Professional licensed wildlife guide Maharuz',
      ],
    },
    excludes: {
      bn: ['ব্যক্তিগত কেনাকাটা ও খাঁটি সুন্দরবনের মধু কেনা'],
      en: ['Personal souvenirs & bottled honey purchases'],
    },
    pickupLocation: {
      bn: 'মোংলা ঘাট / খুলনা রেলওয়ে স্টেশন',
      en: 'Mongla Ghat / Khulna Railway Station (Direct pickup available)',
    },
    bestSeason: {
      bn: 'নভেম্বর থেকে মার্চ (শীতকাল বন্যপ্রাণী দেখার সেরা সময়)',
      en: 'November to March (Crisp weather & peak wildlife spotting)',
    },
    rating: 4.96,
    reviewsCount: 82,
  },
  {
    id: 'sajek-valley',
    mapConfig: {
      centerLat: 23.3800,
      centerLng: 92.2900,
      zoom: 11,
      regionName: {
        bn: 'সাজেক ভ্যালি ও খাগড়াছড়ি পাহাড়ি অঞ্চল',
        en: 'Sajek Valley & Khagrachari Hill Tracts',
      },
    },
    mapPoints: [
      {
        id: 'khagrachari_sq',
        name: { bn: 'খাগড়াছড়ি শাপলা চত্বর (মিলনস্থল)', en: 'Khagrachari Central Hub' },
        type: 'pickup',
        lat: 23.1079,
        lng: 91.9842,
        description: {
          bn: '৪x৪ চাঁদের গাড়িতে চড়ার প্রারম্ভিক স্টেশন',
          en: 'Staging point to board private 4x4 mountain Chander Gari jeeps',
        },
      },
      {
        id: 'sajek_ridge',
        name: { bn: 'সাজেক ভ্যালি ক্লাউড রিজ ও কটেজ', en: 'Sajek Valley Ridge & Cloud Cottages' },
        type: 'stay',
        lat: 23.3820,
        lng: 92.2934,
        description: {
          bn: 'মেঘের ওপর ভাসমান কাঠের ব্যালকনি ও লুসাই পাড়া',
          en: 'Scenic ridge-top cottages overlooking ocean of morning clouds',
        },
      },
      {
        id: 'konglak_peak',
        name: { bn: 'কংলাক পাহাড় চূড়া', en: 'Konglak Peak Summit' },
        type: 'nature',
        lat: 23.3985,
        lng: 92.2980,
        description: {
          bn: 'সাজেকের সর্বোচ্চ বিন্দু ও মনোরম সূর্যাস্ত ভিউ',
          en: 'Highest peak of Sajek offering 360-degree border mountain vistas',
        },
      },
      {
        id: 'alutila_cave',
        name: { bn: 'রহস্যময় আলুটিলা গুহা ও রিসাং ঝর্ণা', en: 'Mystic Alutila Subterranean Cave' },
        type: 'highlight',
        lat: 23.1230,
        lng: 91.9421,
        description: {
          bn: 'মশাল হাতে পাথুরে সুড়ঙ্গ ও পাহাড়ি ঝর্ণায় অবগাহন',
          en: 'Torch-lit underground passage and cool mountain waterfalls',
        },
      },
    ],
    title: {
      bn: 'সাজেক ভ্যালি ও মেঘের রাজ্য',
      en: 'Sajek Valley - The Kingdom of Clouds',
    },
    badge: {
      bn: 'রোমাঞ্চকর',
      en: 'Adventurous',
    },
    category: 'hills',
    shortDesc: {
      bn: 'মেঘের ওপর ভাসমান কটেজে সকালের চা, কংলাক পাহাড়ের চূড়া থেকে সবুজ পাহাড়ের ভিউ এবং ঐতিহ্যবাহী চাঁদের গাড়িতে পাহাড়ি অ্যাডভেঞ্চার।',
      en: 'Sip morning tea as puffy white clouds float past your balcony. Conquer Konglak Peak and ride thrilling open-roof Chander Gari 4x4 jeeps across hill peaks.',
    },
    fullDesc: {
      bn: 'রাঙ্গামাটির বাঘাইছড়িতে অবস্থিত সাজেক ভ্যালিকে বলা হয় বাংলাদেশের মেঘের রাজ্য। সমুদ্রপৃষ্ঠ থেকে প্রায় ১৮০০ ফুট উচ্চতায় অবস্থিত এই উপত্যকা থেকে মিজোরামের পাহাড়ের নৈসর্গিক রূপ দেখা যায়। চাঁদের গাড়িতে পাহাড়ি আঁকাবাঁকা পথে ভ্রমণ, আদিবাসী লুসাই ও ত্রিপুরা পাড়ায় পাহাড়ি রান্না বাঁশের চংয়ে চিকেন বারবিকিউ খাওয়ার অভিজ্ঞতা অন্য কোথাও পাবেন না।',
      en: 'Perched 1,800 feet above sea level, Sajek Valley in Rangamati is Bangladesh’s premier alpine dreamscape. Feel the clouds brushing past your face from cliffside eco-resorts. Experience legendary 4x4 open jeep trails, visit Lusai and Tripura tribal hamlets, and savor bamboo-cooked tribal delicacy chicken under starlit mountain skies.',
    },
    priceBDT: 6200,
    priceUSD: 58,
    duration: {
      bn: '৩ দিন ২ রাত',
      en: '3 Days 2 Nights',
    },
    groupSize: {
      bn: '২-৮ জন',
      en: '2-8 persons',
    },
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'রিজার্ভ চাঁদের গাড়িতে খাগড়াছড়ি থেকে সাজেক রোমাঞ্চকর পাহাড়ি রাইড',
        'মেঘ ছোঁয়া ভিউ কটেজে রাত যাপন',
        'কংলাক পাহাড়ের সর্বোচ্চ চূড়ায় ট্র্যাকিং ও সূর্যাস্ত',
        'ঐতিহ্যবাহী বাঁশের ভেতর তৈরি আদিবাসী পাহাড়ি ব্যাম্বু চিকেন',
        'রিসাং ঝর্ণা ও রহস্যময় আলুটিলা গুহা পরিদর্শন',
      ],
      en: [
        'Thrilling open-top 4x4 Chander Gari jeep ride through winding hills',
        'Overnight stay at cliff-edge wooden cottage touching mist and clouds',
        'Trekking to Konglak Peak for 360-degree panoramic sunset views',
        'Authentic indigenous bamboo-steamed chicken dinner',
        'Spelunking through mysterious dark Alutila Cave with flaming torches',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: খাগড়াছড়ি থেকে আর্মি এসকোর্টে সাজেক ভ্যালি',
          en: 'Day 1: Khagrachari to Sajek Valley via Military Escort',
        },
        description: {
          bn: 'সকালে খাগড়াছড়ি পৌঁছে পাহাড়ি নাস্তা। চাঁদের গাড়িতে করে বাঘাইহাট আর্মি ক্যাম্পের সিকিউরিটি এসকোর্ট নিয়ে সাজেক ভ্যালিতে পৌঁছানো। বিকেলে হ্যালিপ্যাডে বসে মেঘের খেলা উপভোগ।',
          en: 'Morning arrival in Khagrachari. Board private 4x4 mountain jeep. Travel through security convoy into Sajek. Sunset watch from the iconic helipad atop the ridge.',
        },
        highlights: {
          bn: ['চাঁদের গাড়ির জার্নি', 'হ্যালিপ্যাড সূর্যাস্ত', 'ব্যাম্বু চিকেন ডিনার'],
          en: ['4x4 jeep adventure', 'Helipad sunset', 'Bamboo chicken dinner'],
        },
      },
      {
        dayNumber: 2,
        title: {
          bn: 'দিন ২: মেঘের ভেলা ও কংলাক পাহাড়ে পদার্পণ',
          en: 'Day 2: Morning Sea of Clouds & Konglak Peak Trek',
        },
        description: {
          bn: 'ভোরে ব্যালকনিতে বসে মেঘের সমুদ্র দর্শন। কংলাক পাহাড়ের পাহাড়ি পাড়ায় ট্রেকিং। দুপুরে স্থানীয় ত্রিপুরা ও লুসাইদের তৈরি খাবার ও রাতে খোলা আকাশের নিচে ক্যাম্পফায়ার।',
          en: 'Witness breathtaking dawn ocean-of-clouds rolling beneath the cottage. Hike to Konglak summit. Enjoy home-cooked tribal meals and campfire.',
        },
        highlights: {
          bn: ['ভোরের সাদা মেঘের সমুদ্র', 'কংলাক পাহাড়ি গ্রাম', 'ক্যাম্পফায়ার'],
          en: ['Ocean of clouds', 'Konglak tribal village', 'Campfire'],
        },
      },
      {
        dayNumber: 3,
        title: {
          bn: 'দিন ৩: আলুটিলা গুহা ও রিসাং ঝর্ণা দর্শন',
          en: 'Day 3: Alutila Cave Exploration & Risang Waterfall',
        },
        description: {
          bn: 'সকালে সাজেক থেকে খাগড়াছড়ি নেমে আলুটিলা গুহায় মশাল জ্বালিয়ে প্রবেশ। এরপর রিসাং ঝর্ণার শীতল পানিতে গা ভিজিয়ে চমৎকার স্মৃতির সাথে বিদায়।',
          en: 'Descend to Khagrachari. Walk through Alutila subterranean cave with torches. Refresh at cascading Risang Waterfall before journey home.',
        },
        highlights: {
          bn: ['মশাল হাতে রহস্যময় গুহা', 'রিসাং ঝর্ণা', 'পাহাড়ি স্থানীয় ফলমূল'],
          en: ['Cave exploration with flaming torch', 'Risang waterfall', 'Fresh hill pineapples'],
        },
      },
    ],
    includes: {
      bn: [
        'সাজেক ভ্যালিতে প্রিমিয়াম ক্লাউড ভিউ রিসোর্ট আবাসন',
        '৩ দিনের রিজার্ভ চাঁদের গাড়ি (খাগড়াছড়ি - সাজেক - খাগড়াছড়ি)',
        'সকল পাহাড়ি এন্ট্রি ফি ও স্থানীয় গাইড ফি',
        'সকল ব্রেকফাস্ট ও ব্যাম্বু চিকেন স্পেশাল ডিনার',
      ],
      en: [
        'Top-rated cliffside view resort accommodation',
        'Private 4x4 open jeep (Chander Gari) for all 3 days',
        'All hill entry permits, bridge tolls & guide services',
        'Breakfasts & special tribal bamboo dinner',
      ],
    },
    excludes: {
      bn: ['ঢাকা-খাগড়াছড়ি দূরপাল্লার বাস টিকিট', 'ব্যক্তিগত টিপস'],
      en: ['Dhaka-Khagrachari highway bus tickets (available on request)', 'Personal tips'],
    },
    pickupLocation: {
      bn: 'খাগড়াছড়ি শাপলা চত্বর / বাস টার্মিনাল',
      en: 'Khagrachari Shapla Square / Bus terminal',
    },
    bestSeason: {
      bn: 'সেপ্টেম্বর থেকে মার্চ (বর্ষার শেষে ও শীতে সবচেয়ে ঘন মেঘ জমে)',
      en: 'September to March (Peak cloud season right after monsoon & winter)',
    },
    rating: 4.97,
    reviewsCount: 110,
  },
  {
    id: 'sonargaon-heritage',
    mapConfig: {
      centerLat: 23.6450,
      centerLng: 90.6000,
      zoom: 13,
      regionName: {
        bn: 'সোনারগাঁ ও প্রাচীন পানাম নগর',
        en: 'Sonargaon & Historic Panam City',
      },
    },
    mapPoints: [
      {
        id: 'panam_city',
        name: { bn: 'ঐতিহাসিক পানাম নগরী', en: 'Panam Colonial Ghost City' },
        type: 'highlight',
        lat: 23.6480,
        lng: 90.6050,
        description: {
          bn: 'ব্রিটিশ-মুঘল আমলের শতবর্ষী ইউরোপীয় ধাঁচের দ্বিতল ভবন ও রাজপথ',
          en: '19th-century colonial brick architecture and merchant mansions',
        },
      },
      {
        id: 'folk_museum',
        name: { bn: 'লোক ও কারুশিল্প ফাউন্ডেশন (বড় সর্দার বাড়ি)', en: 'Folk Art Museum (Bara Sardar Bari)' },
        type: 'highlight',
        lat: 23.6425,
        lng: 90.5982,
        description: {
          bn: 'শিল্পাচার্য জয়নুল আবেদিন সংগ্রহশালা ও কারুশিল্প প্রদর্শনী',
          en: 'Splendid terracotta palace housing rich traditional crafts',
        },
      },
      {
        id: 'jamdani_palli',
        name: { bn: 'ঐতিহ্যবাহী জামদানি তাঁত পল্লী', en: 'Traditional Jamdani Weaving Village' },
        type: 'nature',
        lat: 23.6590,
        lng: 90.5720,
        description: {
          bn: 'ইউনেস্কো স্বীকৃত প্রাচীন জামদানি শাড়ি বোনার প্রত্যক্ষ অভিজ্ঞতা',
          en: 'UNESCO Intangible Cultural Heritage geometric handloom weaving',
        },
      },
      {
        id: 'meghna_ghat',
        name: { bn: 'মেঘনা নদী নৌকা পারাপার ঘাট', en: 'Meghna River Wooden Boat Pier' },
        type: 'pickup',
        lat: 23.6350,
        lng: 90.6280,
        description: {
          bn: 'বিকেলে মেঘনার বুকে নৌকাভ্রমণ ও তাজা রিভার-ফিশ খাবার',
          en: 'Sunset boat sail across wide Meghna waterways',
        },
      },
    ],
    title: {
      bn: 'প্রাচীন সোনারগাঁ ও পানাম নগর ঐতিহ্য',
      en: 'Ancient Sonargaon & Ghost City Panam Nagar',
    },
    badge: {
      bn: 'ডে ট্যুর',
      en: 'Day Tour',
    },
    category: 'heritage',
    shortDesc: {
      bn: 'বাংলার প্রাচীন রাজধানী সোনারগাঁর কারুশিল্প জাদুঘর, ধ্বংসপ্রাপ্ত ব্রিটিশ-মুঘল পানাম নগরীর রাজপ্রাসাদ ও মেঘনা নদীতে কাঠের নৌভ্রমণ।',
      en: 'Step back into medieval Bengal: explore the historic capital Sonargaon, walking through the abandoned majestic brick mansions of Panam Nagar and sailing on Meghna River.',
    },
    fullDesc: {
      bn: 'ঢাকার কাছেই মাত্র ১ দিনের চমৎকার ঐতিহ্য ভ্রমণ। বারো ভূঁইয়ার প্রধান ঈশা খাঁর আমলের রাজধানী সোনারগাঁ। এখানে শিল্পাচার্য জয়নুল আবেদিন লোক ও কারুশিল্প জাদুঘর, বিশাল বড় সর্দার বাড়ি এবং ঊনবিংশ শতাব্দীর বিত্তশালী মসলিন বণিকদের তৈরি পানাম নগরীর অনন্য ঔপনিবেশিক স্থাপত্য অবলোকন করবেন।',
      en: 'A perfect 1-day cultural immersion right outside Dhaka. Sonargaon was the historic capital of Bengal rulers. Stroll through the hauntingly beautiful 19th-century ghost town Panam Nagar, admire terracotta carvings at the Folk Art Museum in Sardar Bari, and enjoy fresh Meghna river breeze.',
    },
    priceBDT: 2800,
    priceUSD: 26,
    duration: {
      bn: '১ দিন (সকাল ৮টা - সন্ধ্যা ৬টা)',
      en: '1 Day (8:00 AM - 6:00 PM)',
    },
    groupSize: {
      bn: '১-৬ জন',
      en: '1-6 persons',
    },
    imageUrl: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'সোনারগাঁ বড় সর্দার বাড়ি ও লোকশিল্প জাদুঘরের সমৃদ্ধ সংগ্রহশালা',
        'ঐতিহাসিক পানাম নগরের নির্জন রাজপ্রাসাদ ও স্থাপত্য ফটোগ্রাফি',
        'ঐতিহ্যবাহী জামদানি পল্লীতে হাতে বোনা শাড়ির তাঁত দেখা',
        'মেঘনা নদীর চরে কাঠের নৌকায় ঘুরে তাজা মাছের খাবার',
        'বাংলার সমৃদ্ধ ঐতিহাসিক গল্প ও তথ্যপূর্ণ গাইডেন্স',
      ],
      en: [
        'Bara Sardar Bari palace & rich Folk Arts & Crafts Museum',
        'Photographic walk through atmospheric colonial Panam Nagar ghost city',
        'Visit UNESCO-recognized Jamdani weaving village & master artisans',
        'Private wooden boat crossing on Meghna river island',
        'Deep historical storytelling by licensed cultural guide',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: ঢাকা থেকে পানাম নগর, জামদানি পল্লী ও জাদুঘর',
          en: 'Day 1: Full Day Heritage Tour from Dhaka',
        },
        description: {
          bn: 'সকাল ৮টায় আপনার ঢাকা হোটেল/বাসা থেকে এসি প্রাইভেট কারে রওনা। পানাম নগরে সকালের মনোরম আলোয় হাঁটা। এরপর বড় সর্দার বাড়ি জাদুঘর ও জামদানি তাঁত পল্লীতে সরাসরি বোনা দেখা। মেঘনায় সূর্যাস্ত দেখে সন্ধ্যায় ঢাকায় ফেরা।',
          en: 'Pickup at 8:00 AM from Dhaka in private AC vehicle. Morning quiet walk in Panam Nagar before crowds. Tour Folk Art museum, witness Jamdani loom masters at work. Meghna riverboat crossing and evening drop-off.',
        },
        highlights: {
          bn: ['পানাম নগর স্থাপত্য', 'হাতে বোনা জামদানি', 'মেঘনা রিভার ভিউ'],
          en: ['Panam Nagar architecture', 'Handloom Jamdani weaving', 'Meghna river sunset'],
        },
      },
    ],
    includes: {
      bn: [
        'ঢাকা থেকে এসি প্রাইভেট গাড়িতে রাউন্ড ট্রিপ',
        'সকল জাদুঘর ও প্রত্নতাত্ত্বিক সাইটের প্রবেশ টিকিট',
        'মেঘনা নদীতে কাঠের নৌভ্রমণ',
        'ঐতিহ্যবাহী বুফে দুপুরের খাবার ও বিকেলের নাস্তা',
        'সারাদিন ব্যক্তিগত গাইডের সঙ্গ',
      ],
      en: [
        'Round-trip private air-conditioned car transport from Dhaka',
        'All museum, heritage site & monument entry fees',
        'Scenic wooden boat excursion on Meghna River',
        'Sumptuous traditional lunch at heritage restaurant',
        'Full-day dedicated historical guide Maharuz',
      ],
    },
    excludes: {
      bn: ['ব্যক্তিগত হস্তশিল্প কেনাকাটা'],
      en: ['Personal textile/souvenir purchases'],
    },
    pickupLocation: {
      bn: 'ঢাকার যেকোনো হোটেল বা বাসভবন',
      en: 'Any hotel or residence within Dhaka city',
    },
    bestSeason: {
      bn: 'সারা বছর (বিশেষত অক্টোবর থেকে এপ্রিল)',
      en: 'Year-round (Best between October and April)',
    },
    rating: 4.92,
    reviewsCount: 52,
  },
  {
    id: 'coxs-bazar-stmartin',
    mapConfig: {
      centerLat: 20.9000,
      centerLng: 92.1500,
      zoom: 10,
      regionName: {
        bn: 'কক্সবাজার মেরিন ড্রাইভ ও সেন্টমার্টিন দ্বীপ',
        en: 'Cox’s Bazar Marine Drive & Saint Martin Island',
      },
    },
    mapPoints: [
      {
        id: 'laboni_beach',
        name: { bn: 'লাবণী ও সুগন্ধা বিচ পয়েন্ট', en: 'Laboni & Sugandha Beach Point' },
        type: 'pickup',
        lat: 21.4272,
        lng: 91.9700,
        description: {
          bn: 'বিশ্বের দীর্ঘতম সমুদ্রসৈকতের প্রধান কোলাহল ও হোটেল জোন',
          en: 'Main bustling beach promenade and oceanfront hotels',
        },
      },
      {
        id: 'inani_coral',
        name: { bn: 'ইনানী ও হিমছড়ি প্রবাল সৈকত', en: 'Inani Coral Stone Beach' },
        type: 'nature',
        lat: 21.2290,
        lng: 92.0520,
        description: {
          bn: '৮০ কিমি দীর্ঘ মেরিন ড্রাইভ দিয়ে পাহাড়ি ও প্রবাল পাথুরে সৈকত',
          en: 'Marine Drive coastal highway flanked by mountains and coral boulders',
        },
      },
      {
        id: 'st_martin_main',
        name: { bn: 'সেন্টমার্টিন নারিকেল জিঞ্জিরা কটেজ', en: 'Saint Martin Island Eco-Bungalows' },
        type: 'stay',
        lat: 20.6250,
        lng: 92.3210,
        description: {
          bn: 'স্বচ্ছ নীল পানির সৈকতের ধারে নারিকেল বাগানে রাতযাপন',
          en: 'Beachfront cottages surrounded by thousands of coconut trees',
        },
      },
      {
        id: 'chera_dwip',
        name: { bn: 'ছেঁড়াদ্বীপ জীবন্ত প্রবাল প্রাচীর', en: 'Chera Dwip Living Coral Reef' },
        type: 'highlight',
        lat: 20.5920,
        lng: 92.3360,
        description: {
          bn: 'ভাটার সময় জেগে ওঠা স্বচ্ছ প্রবাল প্রাচীর ও নীল সাগর',
          en: 'Southernmost tip of Bangladesh with crystal clear marine life',
        },
      },
    ],
    title: {
      bn: 'কক্সবাজার ও সেন্টমার্টিন ব্লু ওয়াটার ট্যুর',
      en: 'Cox’s Bazar & Saint Martin Coral Island',
    },
    badge: {
      bn: 'সি-বিচ স্পেশাল',
      en: 'Beach & Coral',
    },
    category: 'beach',
    shortDesc: {
      bn: 'বিশ্বের দীর্ঘতম ১২০ কিমি প্রাকৃতিক বালুকাময় সমুদ্রসৈকত, মেরিন ড্রাইভের পাহাড়ি দৃশ্য এবং প্রবাল দ্বীপ সেন্টমার্টিনের স্বচ্ছ নীল পানি।',
      en: 'Walk along the world’s longest unbroken 120km sand beach, cruise the spectacular Marine Drive, and discover the azure coral reefs of Saint Martin island.',
    },
    fullDesc: {
      bn: 'বঙ্গোপসাগরের উত্তাল ঢেউ ও রোমাঞ্চকর মেরিন ড্রাইভ সড়ক। একদিকে নীল সমুদ্র, অন্যদিকে সবুজ খাড়া পাহাড়। এরপর জাহাজে চড়ে বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্টমার্টিন যাত্রা। সেখানে নারিকেল জিঞ্জিরায় সাইকেল রাইড, ছেঁড়াদ্বীপে জীবন্ত প্রবাল দর্শন এবং তাজা কোরাল মাছের বারবিকিউ।',
      en: 'Experience the magic of Cox’s Bazar along the dramatic Marine Drive highway framed by lush hills on one side and breaking ocean surf on the other. Board luxury sea cruise vessel to Saint Martin’s Island. Bike around coconut palms, explore living corals at Chera Dwip, and savor fresh catch seafood dinners.',
    },
    priceBDT: 9000,
    priceUSD: 85,
    duration: {
      bn: '৪ দিন ৩ রাত',
      en: '4 Days 3 Nights',
    },
    groupSize: {
      bn: '২-১০ জন',
      en: '2-10 persons',
    },
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    ],
    highlights: {
      bn: [
        'মেরিন ড্রাইভে খোলা ছাদের চান্দের গাড়ি বা জিপ রাইড',
        'হিমছড়ি ও ইনানী বিচের পাথুরে সৈকতে সূর্যাস্ত দর্শন',
        'সেন্টমার্টিন দ্বীপে প্রবাল পাথরের ওপর জোয়ার-ভাটার রূপ',
        'ছেঁড়াদ্বীপে ট্রলারে নীল জলের রোমাঞ্চকর ভ্রমণ',
        'বিচে তাজা রূপচাঁদা, লইট্টা ফ্রাই ও কোরাল মাছের বারবিকিউ',
      ],
      en: [
        'Open-jeep cruise down the scenic 80km Marine Drive highway',
        'Sunset across natural coral boulder beaches of Inani & Himchari',
        'Island stay in eco-resort on Saint Martin coral shores',
        'Speedboat or wooden boat crossing to uninhabited Chera Dwip',
        'Night beach BBQ: freshly caught grilled Red Snapper and Pomfret',
      ],
    },
    itinerary: [
      {
        dayNumber: 1,
        title: {
          bn: 'দিন ১: কক্সবাজার আগমন ও ইনানী বিচ সানসেট',
          en: 'Day 1: Cox’s Bazar Arrival & Inani Beach Sunset',
        },
        description: {
          bn: 'কক্সবাজারে চেক-ইন করে একটু বিশ্রাম। বিকেলে মেরিন ড্রাইভ দিয়ে ইনানী বিচে ভ্রমণ। প্রবাল পাথরে বসে সূর্যাস্ত উপভোগ। রাতে লাবণী পয়েন্টে সীফুড ভোজন।',
          en: 'Arrive in Cox’s Bazar, oceanfront check-in. Afternoon jeep drive down Marine Drive to Inani Coral Beach. Sunset over the sea and seafood dinner at Laboni beach.',
        },
        highlights: {
          bn: ['মেরিন ড্রাইভ রোড', 'ইনানী কোরাল বিচ', 'সীফুড ভোজন'],
          en: ['Marine Drive', 'Inani Coral Beach', 'Seafood street dinner'],
        },
      },
      {
        dayNumber: 2,
        title: {
          bn: 'দিন ২: সী-ক্রুজে প্রবাল দ্বীপ সেন্টমার্টিন যাত্রা',
          en: 'Day 2: Sea Cruise Ship to Saint Martin Island',
        },
        description: {
          bn: 'সকালে টেকনাফ ঘাট থেকে আধুনিক ক্রুজ জাহাজে করে নাফ নদী ও বঙ্গোপসাগর পাড়ি দিয়ে সেন্টমার্টিন পৌঁছানো। সৈকতের ধারে ইকো কটেজে বিশ্রাম ও নীল পানির সৈকত ভ্রমণ।',
          en: 'Board sea cruiser across Naf river and blue open sea to Saint Martin. Check in to beachfront wooden bungalow. Walk on pristine powdery sand.',
        },
        highlights: {
          bn: ['সী-ক্রুজ জাহাজে ভ্রমণ', 'ডলফিন ও গাংচিল দর্শন', 'স্বচ্ছ নীল পানির সৈকত'],
          en: ['Sea cruise voyage', 'Seagulls & dolphin spotting', 'Crystal clear waters'],
        },
      },
      {
        dayNumber: 3,
        title: {
          bn: 'দিন ৩: ছেঁড়াদ্বীপ অভিযান ও সাইকেলিং',
          en: 'Day 3: Chera Dwip Coral Reef Expedition & Cycling',
        },
        description: {
          bn: 'সকালে ভাটার সময় হেঁটে বা ছোট নৌকায় সেন্টমার্টিনের সর্বদক্ষিণ বিন্দু ছেঁড়াদ্বীপে অভিযান। বিকেলে দ্বীপের চারপাশে বাইসাইকেলে ঘুরে স্থানীয় নারিকেল খাওয়া।',
          en: 'Morning boat trip to southernmost Chera Dwip to observe vibrant living corals. Afternoon island bicycle ride under palm groves, fresh king coconuts.',
        },
        highlights: {
          bn: ['ছেঁড়াদ্বীপের জীবন্ত প্রবাল', 'দ্বীপজুড়ে সাইক্লিং', 'বিচ বারবিকিউ'],
          en: ['Living corals at Chera Dwip', 'Island biking', 'Night beach bonfire BBQ'],
        },
      },
      {
        dayNumber: 4,
        title: {
          bn: 'দিন ৪: সেন্টমার্টিন থেকে কক্সবাজার ফিরে ফেরা',
          en: 'Day 4: Farewell to the Island & Return',
        },
        description: {
          bn: 'সকালে শেষবারের মতো সমুদ্রের জলে স্নান। দুপুরে জাহাজে চড়ে ফিরে আসা এবং সন্ধ্যা বা রাতের বাসে ঢাকার উদ্দেশ্যে যাত্রা।',
          en: 'Morning swim in the blue waters. Return cruise back to mainland and departure.',
        },
        highlights: {
          bn: ['সকালের নীল সমুদ্র', 'স্মৃতিময় প্রত্যাবর্তন'],
          en: ['Morning ocean dip', 'Scenic return voyage'],
        },
      },
    ],
    includes: {
      bn: [
        'কক্সবাজার ও সেন্টমার্টিন সৈকতমুখী রিসোর্ট আবাসন',
        'সেন্টমার্টিন আপ-ডাউন প্রিমিয়াম শিপ টিকিট',
        'মেরিন ড্রাইভে প্রাইভেট জিপ/গাড়ি ও ছেঁড়াদ্বীপ ট্রলার',
        'অভিজ্ঞ গাইড ও সার্বক্ষণিক সাপোর্ট',
        'বারবিকিউ ডিনার ও প্রাতরাশ',
      ],
      en: [
        'Beachfront resort accommodations in Cox’s Bazar & Saint Martin',
        'Round-trip reserved luxury sea cruise vessel tickets',
        'Private 4x4 Marine Drive jeep & Chera Dwip boat transfers',
        'Dedicated tour escort & local guide Maharuz',
        'Daily breakfasts and special island seafood BBQ',
      ],
    },
    excludes: {
      bn: ['ঢাকা-কক্সবাজার এয়ার বা নন-এসি বাস টিকিট', 'ব্যক্তিগত প্যারাগ্লাইডিং ফি'],
      en: ['Dhaka-Cox’s Bazar flights/buses (available upon booking)', 'Personal water sports'],
    },
    pickupLocation: {
      bn: 'কক্সবাজার বিমানবন্দর বা বাস টার্মিনাল',
      en: 'Cox’s Bazar Airport or Central Bus Terminal',
    },
    bestSeason: {
      bn: 'নভেম্বর থেকে ফেব্রুয়ারি (জাহাজ চলাচলের একমাত্র মৌসুম)',
      en: 'November to February (Official safe shipping season)',
    },
    rating: 4.94,
    reviewsCount: 76,
  },
];
