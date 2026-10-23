/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Edit3, 
  Check, 
  RotateCcw, 
  Plus, 
  Trash2, 
  MessageCircle, 
  Phone, 
  Mail, 
  Camera, 
  Moon, 
  Sun, 
  MapPin,
  Calendar, 
  X, 
  ShieldCheck,
  Compass,
  Download
} from 'lucide-react';
import { VillageSunsetSVG, TeaGardensSVG, MangroveSundarbansSVG } from './components/TourIllustrations';
import { TourVisualMap } from './components/TourVisualMap';
import { MapConfig, MapPoint } from './types/tour';

interface TourItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  bullets?: string[];
  price: string;
  imageType: 'village' | 'tea' | 'mangrove' | 'custom';
  customImageUrl?: string;
  mapConfig: MapConfig;
  mapPoints: MapPoint[];
}

interface SiteData {
  heroTitle: string;
  heroSubtitle: string;
  guideTitle: string;
  guideBio: string;
  stats: { value: string; label: string }[];
  phone: string;
  whatsapp: string;
  email: string;
  avatarUrl: string;
  tours: TourItem[];
}

const DEFAULT_SITE_DATA: SiteData = {
  heroTitle: 'Discover the Green Heart of Bangladesh',
  heroSubtitle: 'Travel with a trusted local expert and a personal tour guide who knows every river, hill and village path.',
  guideTitle: 'Welcome! I’m your tour guide',
  guideBio: 'My goal is to show you the real beauty of our rivers, hills, forests and shady green villages. Step away from the busy city, spend quality time in nature, and let me plan a smooth, memorable trip for you.',
  stats: [
    { value: '3', label: 'Signature tours' },
    { value: '100%', label: 'Local knowledge' },
    { value: '24/7', label: 'Trip support' },
  ],
  phone: '+880 1746-924292',
  whatsapp: '+880 1746-924292',
  email: 'maharuzahmedbd24@gmail.com',
  avatarUrl: '/assets/maharuz_avatar.jpg',
  tours: [
    {
      id: 'village-life',
      title: 'Shady Village Life',
      badge: 'Popular',
      description: 'Breathe in the scent of the Bengal soil. What you will enjoy on this tour:',
      bullets: [
        'Visit Kushtia’s Lalon Akhra and the Shilaidaha Tagore Kuthibari.',
        'Overnight stay in a traditional mud house with fresh rice and home-cooked meals.',
        'Boat ride at sunset on the Padma and picking water lilies from the beel.',
        'Rural trails by bullock cart or van.',
        'Fresh date-palm juice and traditional pitha from a clay stove.',
      ],
      price: 'Contact for price',
      imageType: 'village',
      mapConfig: {
        centerLat: 23.9000,
        centerLng: 89.1300,
        zoom: 11,
        regionName: { bn: 'কুষ্টিয়া ও পদ্মা নদী অঞ্চল', en: 'Kushtia & Padma River Basin' },
      },
      mapPoints: [
        {
          id: 'lalon',
          name: { bn: 'লালন আখড়া', en: 'Fakir Lalon Shah Shrine' },
          type: 'highlight',
          lat: 23.9074,
          lng: 89.1417,
          description: { bn: 'বাউল গানের তীর্থস্থান', en: 'Historic mystic Baul center' },
        },
        {
          id: 'kuthibari',
          name: { bn: 'শিলাইদহ রবীন্দ্র কুঠিবাড়ি', en: 'Rabindra Kuthibari Palace' },
          type: 'highlight',
          lat: 23.9189,
          lng: 89.2435,
          description: { bn: 'রবীন্দ্রনাথ ঠাকুরের স্মৃতিবিজড়িত বাসভবন', en: 'Tagore historical country estate' },
        },
        {
          id: 'padma',
          name: { bn: 'পদ্মা সূর্যাস্ত ও নৌকা', en: 'Padma River Wooden Boat Sunset' },
          type: 'nature',
          lat: 23.9250,
          lng: 89.2100,
          description: { bn: 'কাঠের নৌকায় পদ্মার বুকে সূর্যাস্ত', en: 'Sunset cruise and water lily harvest' },
        },
      ],
    },
    {
      id: 'sreemangal-ratargul',
      title: 'Sreemangal & Ratargul Adventure',
      description: 'Get lost in the kingdom of tea, trek through Lawachara National Park and glide through the Ratargul swamp forest by boat.',
      bullets: [
        'Scenic tea gardens walk and seven-layer tea tasting in Sreemangal.',
        'Wildlife and Hoolock Gibbon spotting inside Lawachara rainforest.',
        'Quiet wooden canoe cruise beneath flooded Ratargul swamp canopies.',
      ],
      price: 'Contact for price',
      imageType: 'tea',
      mapConfig: {
        centerLat: 24.5500,
        centerLng: 91.8000,
        zoom: 10,
        regionName: { bn: 'শ্রীমঙ্গল ও সিলেট সোয়াম্প', en: 'Sreemangal & Ratargul Swamp' },
      },
      mapPoints: [
        {
          id: 'sreemangal',
          name: { bn: 'শ্রীমঙ্গল চা বাগান', en: 'Sreemangal Tea Estates' },
          type: 'highlight',
          lat: 24.3065,
          lng: 91.7296,
          description: { bn: 'সবুজ চায়ের রাজ্য', en: 'Rolling green tea gardens' },
        },
        {
          id: 'lawachara',
          name: { bn: 'লাউয়াছড়া জাতীয় উদ্যান', en: 'Lawachara National Park' },
          type: 'nature',
          lat: 24.3242,
          lng: 91.7891,
          description: { bn: 'চিরহরিৎ রেইনফরেস্ট ও বন্যপ্রাণী', en: 'Dense rainforest trail' },
        },
        {
          id: 'ratargul',
          name: { bn: 'রাতারগুল সোয়াম্প ফরেস্ট', en: 'Ratargul Swamp Forest' },
          type: 'nature',
          lat: 25.0006,
          lng: 91.9306,
          description: { bn: 'ভাসমান জলজ বন ও ক্যানাল ক্রুজ', en: 'Flooded freshwater forest canoe' },
        },
      ],
    },
    {
      id: 'sundarbans',
      title: 'Into the Sundarbans',
      description: 'Cruise the rivers and creeks of the world’s largest mangrove forest. Search for the Royal Bengal Tiger, spotted deer and wildlife on forest trails.',
      bullets: [
        'Vessel cruise through narrow mangrove canals and estuaries.',
        'Kotka and Kochikhali wildlife sanctuaries with forest guards.',
        'Visit Karamjal crocodile breeding center and watchtowers.',
      ],
      price: 'Contact for price',
      imageType: 'mangrove',
      mapConfig: {
        centerLat: 22.0500,
        centerLng: 89.6500,
        zoom: 10,
        regionName: { bn: 'সুন্দরবন ম্যানগ্রোভ বন', en: 'Sundarbans UNESCO Reserve' },
      },
      mapPoints: [
        {
          id: 'mongla',
          name: { bn: 'মোংলা নদী ঘাট', en: 'Mongla Port (Embarkation)' },
          type: 'pickup',
          lat: 22.4833,
          lng: 89.6000,
          description: { bn: 'জাহাজে যাত্রা শুরু', en: 'Cruise boat embarkation' },
        },
        {
          id: 'kotka',
          name: { bn: 'কটকা টাইগার পয়েন্ট', en: 'Kotka Wildlife Sanctuary' },
          type: 'nature',
          lat: 21.8540,
          lng: 89.7821,
          description: { bn: 'বাঘ ও হরিণের অভয়ারণ্য', en: 'Deer herds & tiger trails' },
        },
      ],
    },
  ],
};

export default function App() {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('explore_bd_final_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.tours && parsed.tours.length > 0) return parsed;
      } catch (e) {
        // fallback
      }
    }
    return DEFAULT_SITE_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [saveToast, setSaveToast] = useState(false);

  // Modals state
  const [selectedTourForMap, setSelectedTourForMap] = useState<TourItem | null>(null);
  const [selectedTourForBook, setSelectedTourForBook] = useState<TourItem | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  // Persist theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSaveAll = () => {
    localStorage.setItem('explore_bd_final_data', JSON.stringify(data));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all text, tours, and details back to the original version?')) {
      setData(DEFAULT_SITE_DATA);
      localStorage.removeItem('explore_bd_final_data');
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  // Avatar upload handler
  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const updated = { ...data, avatarUrl: reader.result };
        setData(updated);
        localStorage.setItem('explore_bd_final_data', JSON.stringify(updated));
        setSaveToast(true);
        setTimeout(() => setSaveToast(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  // Erase all tour values so user can fix them from scratch
  const handleEraseTourValues = () => {
    if (window.confirm('Erase all tour values so you can fill your own details?')) {
      const blankTour: TourItem = {
        id: 'tour-' + Date.now(),
        title: 'New Custom Tour',
        badge: 'Featured',
        description: 'Enter your custom tour description here...',
        bullets: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
        price: 'Contact for price',
        imageType: 'village',
        mapConfig: {
          centerLat: 23.8103,
          centerLng: 90.4125,
          zoom: 10,
          regionName: { bn: 'বাংলাদেশ', en: 'Bangladesh Region' },
        },
        mapPoints: [
          {
            id: 'pt-1',
            name: { bn: 'স্পট', en: 'Main Tour Point' },
            type: 'highlight',
            lat: 23.8103,
            lng: 90.4125,
            description: { bn: 'বিবরণ', en: 'Scenic location point' },
          },
        ],
      };
      const updated = { ...data, tours: [blankTour] };
      setData(updated);
      localStorage.setItem('explore_bd_final_data', JSON.stringify(updated));
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  // Add new tour
  const handleAddNewTour = () => {
    const newTour: TourItem = {
      id: 'tour-' + Date.now(),
      title: 'New Bangladesh Journey',
      badge: 'New',
      description: 'Describe this exciting tour experience...',
      bullets: ['Scenic viewpoints', 'Comfortable stays and meals', 'Dedicated local guide'],
      price: 'Contact for price',
      imageType: 'tea',
      mapConfig: {
        centerLat: 23.8103,
        centerLng: 90.4125,
        zoom: 10,
        regionName: { bn: 'নতুন অঞ্চল', en: 'Custom Tour Region' },
      },
      mapPoints: [
        {
          id: 'p-1',
          name: { bn: 'স্পট', en: 'Meeting Hub' },
          type: 'pickup',
          lat: 23.8103,
          lng: 90.4125,
          description: { bn: 'পিকআপ পয়েন্ট', en: 'Pickup location' },
        },
      ],
    };
    const updated = { ...data, tours: [...data.tours, newTour] };
    setData(updated);
    localStorage.setItem('explore_bd_final_data', JSON.stringify(updated));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleDeleteTour = (id: string) => {
    if (data.tours.length <= 1) {
      alert('At least one tour package must remain.');
      return;
    }
    const updated = { ...data, tours: data.tours.filter((t) => t.id !== id) };
    setData(updated);
    localStorage.setItem('explore_bd_final_data', JSON.stringify(updated));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const getWhatsAppBookingUrl = (tour: TourItem) => {
    const cleanNumber = data.whatsapp.replace(/[^0-9]/g, '');
    const msg = `Hello Maharuz! I want to book: "${tour.title}".
Date: ${bookingDate || 'Flexible'}
Travelers: ${travelers} persons
Name: ${guestName || 'Guest'}
Phone: ${guestPhone || 'N/A'}`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      
      {/* Top Easy-Edit & Theme Controller Bar */}
      <div className="bg-[var(--surface)] border-b border-[var(--line)] py-2 px-4 sticky top-0 z-50 text-xs flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          {/* Edit Mode Toggle Switch */}
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
              isEditMode 
                ? 'bg-[#0b6b3a] text-white ring-2 ring-[#0b6b3a]/30' 
                : 'bg-[var(--line)] text-[var(--text)] hover:opacity-85'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditMode ? 'Editing Mode: ON' : 'Turn On Edit Mode'}</span>
          </button>

          {isEditMode && (
            <span className="hidden md:inline-block text-[var(--muted)] text-[11px]">
              Tap any text or title to edit directly. Tap photo to change.
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Save Button */}
          {isEditMode && (
            <button
              onClick={handleSaveAll}
              className="px-3 py-1.5 bg-[#0b6b3a] hover:bg-[#08502b] text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer transition"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          )}

          {/* Quick Actions in Edit Mode */}
          {isEditMode && (
            <>
              <button
                onClick={handleAddNewTour}
                className="px-2.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--line)] font-semibold rounded-lg flex items-center gap-1 text-[var(--text)] cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#0b6b3a]" />
                <span className="hidden sm:inline">Add Tour</span>
              </button>
              <button
                onClick={handleEraseTourValues}
                className="px-2.5 py-1.5 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                title="Erase all package values so you can fill from scratch"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Erase Values</span>
              </button>
              <button
                onClick={handleResetDefaults}
                className="p-1.5 text-[var(--muted)] hover:text-[var(--text)] cursor-pointer"
                title="Reset to Original Defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Export / Download Zip for .com.bd Hosting */}
          <button
            onClick={() => setShowExportModal(true)}
            className="px-2.5 py-1.5 bg-[#0b6b3a] hover:bg-[#08502b] text-white font-bold rounded-lg flex items-center gap-1.5 cursor-pointer transition shadow-xs"
            title="Export website files (.zip) for hosting on your .com.bd domain"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export (.zip)</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:opacity-80 transition cursor-pointer"
            title="Toggle Light / Dark mode"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* Save Notification Toast */}
      {saveToast && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#0b6b3a] text-white px-5 py-2 rounded-full font-bold text-xs shadow-xl flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4" />
          <span>Changes saved successfully to your browser!</span>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="sticky top-9 z-40 flex items-center justify-between gap-3 px-5 py-3 bg-[var(--nav)] backdrop-blur-md border-b border-[var(--line)]">
        <div className="font-bold text-lg whitespace-nowrap text-[var(--text)]">
          Explore <span className="text-[var(--green)]">Bangladesh</span>
        </div>
        <ul className="flex items-center gap-4.5 m-0 p-0 list-none overflow-x-auto text-sm font-medium">
          <li><a href="#home" className="text-[var(--muted)] hover:text-[var(--green)] transition">Home</a></li>
          <li><a href="#about" className="text-[var(--muted)] hover:text-[var(--green)] transition">About</a></li>
          <li><a href="#packages" className="text-[var(--muted)] hover:text-[var(--green)] transition">Tours</a></li>
          <li><a href="#gallery" className="text-[var(--muted)] hover:text-[var(--green)] transition">Gallery</a></li>
          <li><a href="#contact" className="text-[var(--muted)] hover:text-[var(--green)] transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Banner with Bangladesh flag circular sun motif */}
      <section 
        className="relative text-center text-white px-5 py-24 sm:py-28 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 38%, #d63a3a 0 70px, transparent 71px), linear-gradient(160deg, #0b6b3a, #06402a)',
        }}
        id="home"
      >
        <div className="relative max-w-2xl mx-auto z-10 pt-4">
          {isEditMode ? (
            <input
              type="text"
              value={data.heroTitle}
              onChange={(e) => setData({ ...data, heroTitle: e.target.value })}
              className="text-2xl sm:text-5xl font-extrabold text-white text-center w-full bg-white/20 p-2 rounded-xl border border-white/40 mb-3"
            />
          ) : (
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3">
              {data.heroTitle}
            </h1>
          )}

          {isEditMode ? (
            <textarea
              rows={2}
              value={data.heroSubtitle}
              onChange={(e) => setData({ ...data, heroSubtitle: e.target.value })}
              className="text-sm sm:text-base text-white/95 text-center w-full bg-white/20 p-2 rounded-xl border border-white/40 mb-6"
            />
          ) : (
            <p className="text-sm sm:text-base opacity-90 max-w-xl mx-auto mb-6 leading-relaxed">
              {data.heroSubtitle}
            </p>
          )}

          <a 
            href="#packages"
            className="inline-block px-7 py-3 rounded-full bg-white text-[#08502b] font-bold text-sm shadow-lg hover:scale-105 transition transform"
          >
            View Tour Packages
          </a>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 pb-16">

        {/* About Guide Card */}
        <div 
          className="relative flex flex-col sm:flex-row gap-6 items-center -mt-12 bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-xl"
          id="about"
        >
          {/* Circular Avatar with tap to change photo */}
          <div className="relative group shrink-0">
            <label 
              className="w-36 h-36 rounded-full border-4 border-[var(--green)] overflow-hidden bg-[var(--bg)] flex items-center justify-center cursor-pointer relative shadow-md block"
              title="Tap to change photo"
            >
              <img 
                src={data.avatarUrl} 
                alt="Tour guide profile photo" 
                className="w-full h-full object-cover object-center block"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[11px] font-bold transition">
                <Camera className="w-5 h-5 mb-0.5 text-white" />
                <span>Tap to change</span>
              </div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleAvatarFileChange} 
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                aria-label="Choose profile photo"
              />
            </label>
            <div className="text-center mt-1.5">
              <span className="text-[10px] text-[var(--muted)] font-semibold">
                Tap photo to replace
              </span>
            </div>
          </div>

          {/* Guide Text & Stats */}
          <div className="flex-1 text-center sm:text-left">
            {isEditMode ? (
              <input
                type="text"
                value={data.guideTitle}
                onChange={(e) => setData({ ...data, guideTitle: e.target.value })}
                className="text-xl sm:text-2xl font-bold text-[var(--text)] w-full bg-[var(--bg)] p-2 rounded-lg border border-[var(--line)] mb-2"
              />
            ) : (
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--text)]">
                {data.guideTitle}
              </h2>
            )}

            {isEditMode ? (
              <textarea
                rows={3}
                value={data.guideBio}
                onChange={(e) => setData({ ...data, guideBio: e.target.value })}
                className="text-sm text-[var(--muted)] w-full bg-[var(--bg)] p-2 rounded-lg border border-[var(--line)] mb-4"
              />
            ) : (
              <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                {data.guideBio}
              </p>
            )}

            {/* Stats Row */}
            <div className="flex gap-6 flex-wrap justify-center sm:justify-start pt-2 border-t border-[var(--line)]">
              {data.stats.map((s, idx) => (
                <div key={idx}>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={s.value}
                      onChange={(e) => {
                        const newStats = [...data.stats];
                        newStats[idx].value = e.target.value;
                        setData({ ...data, stats: newStats });
                      }}
                      className="block font-bold text-lg text-[var(--green)] w-20 bg-[var(--bg)] border border-[var(--line)] p-1 rounded"
                    />
                  ) : (
                    <b className="block text-xl font-bold text-[var(--green)]">{s.value}</b>
                  )}
                  <small className="text-xs text-[var(--muted)]">{s.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tour Packages Section Header */}
        <div className="text-center mt-14 mb-8" id="packages">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mb-2">
            Our Tour Packages
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Handpicked journeys across Bangladesh
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.tours.map((tour, index) => (
            <div 
              key={tour.id}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition duration-200 shadow-sm relative group"
            >
              {/* Tour Illustration / Cover Art */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                {tour.imageType === 'village' && <VillageSunsetSVG />}
                {tour.imageType === 'tea' && <TeaGardensSVG />}
                {tour.imageType === 'mangrove' && <MangroveSundarbansSVG />}
                {tour.imageType === 'custom' && (
                  <img 
                    src={tour.customImageUrl || '/assets/maharuz_boat.jpg'} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Badge */}
                {isEditMode ? (
                  <div className="absolute top-3 left-3 flex items-center gap-1 z-10">
                    <input
                      type="text"
                      placeholder="Badge (optional)"
                      value={tour.badge || ''}
                      onChange={(e) => {
                        const updated = data.tours.map((t) =>
                          t.id === tour.id ? { ...t, badge: e.target.value } : t
                        );
                        setData({ ...data, tours: updated });
                      }}
                      className="bg-[var(--red)] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow border-none w-24 placeholder-white/70"
                    />
                  </div>
                ) : (
                  tour.badge && (
                    <span className="absolute top-3 left-3 bg-[var(--red)] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {tour.badge}
                    </span>
                  )
                )}

                {/* View Map Button over image */}
                <button
                  onClick={() => setSelectedTourForMap(tour)}
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>View Map</span>
                </button>

                {/* Edit Controls for single card when in Edit Mode */}
                {isEditMode && (
                  <button
                    onClick={() => handleDeleteTour(tour.id)}
                    className="absolute top-3 right-3 bg-rose-600 text-white p-1.5 rounded-full hover:bg-rose-700 shadow"
                    title="Delete this tour"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Image Type Selector in Edit Mode */}
              {isEditMode && (
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800/60 border-b border-[var(--line)] flex items-center justify-between text-[11px] gap-1 overflow-x-auto">
                  <span className="text-[var(--muted)] shrink-0 font-medium">Cover art:</span>
                  <div className="flex gap-1 shrink-0">
                    {(['village', 'tea', 'mangrove', 'custom'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          const updated = data.tours.map((t) =>
                            t.id === tour.id ? { ...t, imageType: type, customImageUrl: type === 'custom' ? '/assets/maharuz_boat.jpg' : t.customImageUrl } : t
                          );
                          setData({ ...data, tours: updated });
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                          tour.imageType === type
                            ? 'bg-[#0b6b3a] text-white'
                            : 'bg-white dark:bg-slate-700 text-[var(--text)] border border-[var(--line)]'
                        }`}
                      >
                        {type === 'village' ? 'Sunset' : type === 'tea' ? 'Tea' : type === 'mangrove' ? 'Forest' : 'Boat Photo'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tour Content */}
              <div className="p-5 flex-1 flex flex-col">
                {isEditMode ? (
                  <input
                    type="text"
                    value={tour.title}
                    onChange={(e) => {
                      const updated = data.tours.map((t) =>
                        t.id === tour.id ? { ...t, title: e.target.value } : t
                      );
                      setData({ ...data, tours: updated });
                    }}
                    className="text-base font-bold text-[var(--text)] mb-2 w-full bg-[var(--bg)] p-1.5 rounded border border-[var(--line)]"
                  />
                ) : (
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-2">
                    {tour.title}
                  </h3>
                )}

                {isEditMode ? (
                  <textarea
                    rows={2}
                    value={tour.description}
                    onChange={(e) => {
                      const updated = data.tours.map((t) =>
                        t.id === tour.id ? { ...t, description: e.target.value } : t
                      );
                      setData({ ...data, tours: updated });
                    }}
                    className="text-xs text-[var(--muted)] mb-3 w-full bg-[var(--bg)] p-1.5 rounded border border-[var(--line)]"
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-[var(--muted)] mb-3 leading-relaxed">
                    {tour.description}
                  </p>
                )}

                {/* Bullet Points */}
                {tour.bullets && (
                  <ul className="mb-4 pl-4 text-xs text-[var(--muted)] space-y-1.5 list-disc leading-relaxed">
                    {tour.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        {isEditMode ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={b}
                              onChange={(e) => {
                                const updatedTours = data.tours.map((t) => {
                                  if (t.id === tour.id) {
                                    const newBullets = [...(t.bullets || [])];
                                    newBullets[bIdx] = e.target.value;
                                    return { ...t, bullets: newBullets };
                                  }
                                  return t;
                                });
                                setData({ ...data, tours: updatedTours });
                              }}
                              className="w-full bg-[var(--bg)] p-1 rounded border border-[var(--line)] text-xs"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const updatedTours = data.tours.map((t) => {
                                  if (t.id === tour.id) {
                                    const newBullets = (t.bullets || []).filter((_, idx) => idx !== bIdx);
                                    return { ...t, bullets: newBullets };
                                  }
                                  return t;
                                });
                                setData({ ...data, tours: updatedTours });
                              }}
                              className="text-rose-500 hover:text-rose-700 p-0.5"
                              title="Delete this bullet"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          b
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Add Bullet Button in Edit Mode */}
                {isEditMode && (
                  <button
                    type="button"
                    onClick={() => {
                      const updatedTours = data.tours.map((t) => {
                        if (t.id === tour.id) {
                          const newBullets = [...(t.bullets || []), 'New highlight bullet'];
                          return { ...t, bullets: newBullets };
                        }
                        return t;
                      });
                      setData({ ...data, tours: updatedTours });
                    }}
                    className="mb-4 py-1 px-2 border border-dashed border-[#0b6b3a]/50 text-[#0b6b3a] text-[11px] rounded font-semibold flex items-center justify-center gap-1 hover:bg-[#0b6b3a]/10 transition"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Highlight Bullet</span>
                  </button>
                )}

                {/* Card Meta & Action */}
                <div className="mt-auto pt-3.5 border-t border-[var(--line)] flex items-center justify-between gap-3">
                  {isEditMode ? (
                    <input
                      type="text"
                      value={tour.price}
                      onChange={(e) => {
                        const updated = data.tours.map((t) =>
                          t.id === tour.id ? { ...t, price: e.target.value } : t
                        );
                        setData({ ...data, tours: updated });
                      }}
                      className="text-xs font-bold text-[var(--green)] bg-[var(--bg)] p-1 rounded border border-[var(--line)] w-28"
                    />
                  ) : (
                    <span className="font-bold text-xs sm:text-sm text-[var(--green)]">
                      {tour.price}
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedTourForBook(tour)}
                    className="px-4 py-2 bg-[var(--green)] hover:bg-[var(--green-d)] text-white rounded-full font-bold text-xs transition cursor-pointer shadow-xs"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Village Life Gallery (Featuring Original Boat Photo & Countryside Scenes) */}
        <div className="mt-16" id="gallery">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] text-center mb-2">
            Village Life Gallery
          </h2>
          <p className="text-sm text-[var(--muted)] text-center mb-8">
            Authentic scenes and rivers from the Bangladeshi countryside
          </p>

          {/* Featured Authentic Country Boat Photo Card */}
          <div className="mb-6 bg-[var(--surface)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row items-stretch">
            <div className="md:w-3/5 h-64 sm:h-80 md:h-auto relative overflow-hidden bg-emerald-950">
              <img 
                src="/assets/maharuz_boat.jpg" 
                alt="Maharuz rowing a wooden country boat in a village river" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#0b6b3a] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Authentic Bengal
              </span>
            </div>
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-xs font-bold text-[var(--green)] uppercase tracking-wider mb-1">
                Local Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-3">
                Wooden Boat on Serene Village Waters
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                Nothing compares to the quiet peace of gliding in a traditional wooden dingi boat across the calm waters, listening to the gentle ripples and breathing fresh river breeze with your guide.
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--line)] text-xs text-[var(--muted)]">
                <MapPin className="w-4 h-4 text-[var(--green)] shrink-0" />
                <span>Padma River &amp; rural Kushtia watercourses</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Thatched village home */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Thatched village home with banana trees">
                <rect width="300" height="200" fill="#bfe3f2" />
                <circle cx="250" cy="40" r="18" fill="#fff3b0" />
                <rect y="130" width="300" height="70" fill="#5fae5b" />
                <rect x="95" y="95" width="90" height="55" fill="#b07a4a" />
                <path d="M82 98L140 55l58 43z" fill="#d9b45a" />
                <rect x="128" y="115" width="24" height="35" fill="#4a2f1a" />
                <rect x="228" y="100" width="6" height="50" fill="#6b8e3a" />
                <path d="M231 100q-30-5-40 15M231 100q30-5 40 15M231 100q-10-25-30-25M231 100q10-25 30-25" stroke="#2f8f3a" strokeWidth="6" fill="none" strokeLinecap="round" />
                <rect x="45" y="75" width="5" height="60" fill="#4a3320" />
                <path d="M47 75q-22 2-28 16M47 75q22 2 28 16M47 75q-6-18-20-22M47 75q6-18 20-22" stroke="#0b6b3a" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                A thatched village home
              </figcaption>
            </figure>

            {/* Farmer in green paddy field */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Farmer in a green paddy field">
                <rect width="300" height="200" fill="#cfe9f5" />
                <g fill="#2f7d4a">
                  <ellipse cx="40" cy="98" rx="38" ry="20" />
                  <ellipse cx="120" cy="94" rx="44" ry="22" />
                  <ellipse cx="230" cy="98" rx="50" ry="20" />
                </g>
                <rect y="105" width="300" height="95" fill="#7cc36a" />
                <g stroke="#4f9d4a" strokeWidth="3">
                  <path d="M0 125h300M0 145h300M0 165h300M0 185h300" />
                </g>
                <path d="M128 112l24-16 24 16z" fill="#e6c35c" />
                <circle cx="152" cy="118" r="7" fill="#8a5a3a" />
                <rect x="144" y="125" width="16" height="28" fill="#c0392b" />
                <path d="M148 153v22M156 153v22" stroke="#8a5a3a" strokeWidth="4" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Green paddy fields
              </figcaption>
            </figure>

            {/* Shapla water lily pond */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Shapla water lily pond">
                <rect width="300" height="200" fill="#2b7f86" />
                <g fill="#3fa35a">
                  <ellipse cx="70" cy="140" rx="34" ry="12" />
                  <ellipse cx="170" cy="110" rx="30" ry="11" />
                  <ellipse cx="240" cy="150" rx="36" ry="13" />
                  <ellipse cx="120" cy="175" rx="30" ry="10" />
                </g>
                <g fill="#fff">
                  <ellipse cx="60" cy="128" rx="7" ry="14" />
                  <ellipse cx="74" cy="130" rx="7" ry="14" transform="rotate(25 74 130)" />
                  <ellipse cx="48" cy="132" rx="7" ry="14" transform="rotate(-25 48 132)" />
                  <ellipse cx="170" cy="98" rx="6" ry="12" />
                  <ellipse cx="181" cy="100" rx="6" ry="12" transform="rotate(25 181 100)" />
                  <ellipse cx="159" cy="100" rx="6" ry="12" transform="rotate(-25 159 100)" />
                  <ellipse cx="240" cy="138" rx="7" ry="14" />
                  <ellipse cx="253" cy="140" rx="7" ry="14" transform="rotate(25 253 140)" />
                  <ellipse cx="227" cy="140" rx="7" ry="14" transform="rotate(-25 227 140)" />
                </g>
                <g fill="#f4c542">
                  <circle cx="60" cy="138" r="4" />
                  <circle cx="170" cy="108" r="3.5" />
                  <circle cx="240" cy="148" r="4" />
                </g>
                <path d="M12 200V120M24 200V105M284 200V125" stroke="#2f6b3a" strokeWidth="4" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Shapla (water lily) pond
              </figcaption>
            </figure>

            {/* Bullock cart on country road */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Bullock cart on a country road">
                <rect width="300" height="200" fill="#f9dcb0" />
                <circle cx="60" cy="60" r="22" fill="#d63a3a" />
                <rect y="120" width="300" height="20" fill="#5fae5b" />
                <rect y="140" width="300" height="60" fill="#c9a66b" />
                <ellipse cx="80" cy="125" rx="30" ry="16" fill="#8b5a35" />
                <circle cx="118" cy="118" r="10" fill="#8b5a35" />
                <path d="M112 110q-4-8-10-8M124 110q4-8 10-8" stroke="#4a2f1a" strokeWidth="3" fill="none" />
                <path d="M60 138v22M72 140v20M88 140v20M98 138v22" stroke="#6b4426" strokeWidth="5" />
                <path d="M126 120L158 112" stroke="#4a2f1a" strokeWidth="3" />
                <rect x="155" y="100" width="80" height="22" fill="#7a4b27" />
                <circle cx="195" cy="135" r="20" fill="none" stroke="#4a2f1a" strokeWidth="4" />
                <path d="M175 135h40M195 115v40" stroke="#4a2f1a" strokeWidth="2" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Bullock cart on a country road
              </figcaption>
            </figure>

          </div>
        </div>

        {/* Popular Destinations Gallery (Sundarbans, Cox's Bazar, Sajek) */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] text-center mb-2">
            Popular Destinations
          </h2>
          <p className="text-sm text-[var(--muted)] text-center mb-8">
            Sundarbans, Cox’s Bazar and Sajek Valley
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Sundarbans */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Sundarbans mangrove forest with a boat">
                <rect width="300" height="200" fill="#9ccfc0" />
                <circle cx="250" cy="35" r="16" fill="#fff6c9" />
                <rect y="125" width="300" height="75" fill="#2b6f78" />
                <g fill="#14532d">
                  <circle cx="25" cy="98" r="28" />
                  <circle cx="70" cy="88" r="32" />
                  <circle cx="120" cy="100" r="26" />
                  <circle cx="190" cy="92" r="30" />
                  <circle cx="245" cy="86" r="34" />
                  <circle cx="290" cy="100" r="26" />
                </g>
                <rect y="112" width="300" height="14" fill="#14532d" />
                <g stroke="#0f3f22" strokeWidth="2">
                  <path d="M20 126v-8M34 126v-6M80 126v-8M96 126v-6M170 126v-8M210 126v-6M262 126v-8" />
                </g>
                <path d="M0 150q40-8 75 0t75 0 75 0 75 0" stroke="#bfe6e3" strokeWidth="3" fill="none" opacity=".6" />
                <path d="M110 165h70q-8 12-22 12h-26q-14 0-22-12z" fill="#7a4b27" />
                <rect x="135" y="148" width="22" height="17" fill="#e8d9b5" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Sundarbans, the world’s largest mangrove forest
              </figcaption>
            </figure>

            {/* Cox's Bazar */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Cox’s Bazar sea beach at sunset">
                <rect width="300" height="110" fill="#f6a35b" />
                <rect y="70" width="300" height="40" fill="#f9d9a0" />
                <circle cx="150" cy="108" r="34" fill="#d63a3a" />
                <rect y="108" width="300" height="45" fill="#2a8fb0" />
                <g stroke="#fff" strokeWidth="3" fill="none" opacity=".75">
                  <path d="M0 125q25-6 50 0t50 0 50 0 50 0 50 0 50 0" />
                  <path d="M0 142q25-6 50 0t50 0 50 0 50 0 50 0 50 0" />
                </g>
                <path d="M0 153q75-12 150-4t150-8v59H0z" fill="#f0d9a0" />
                <rect x="36" y="105" width="5" height="70" fill="#4a3320" />
                <path d="M38 105q-24 2-30 18M38 105q24 2 30 18M38 105q-6-20-22-24M38 105q6-20 22-24" stroke="#0b6b3a" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M210 160v-34" stroke="#4a3320" strokeWidth="3" />
                <path d="M190 128q20-22 40 0z" fill="#d63a3a" />
                <path d="M200 128q10-22 20 0z" fill="#fff" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Cox’s Bazar, the longest natural sea beach
              </figcaption>
            </figure>

            {/* Sajek Valley */}
            <figure className="m-0 bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-xs">
              <svg viewBox="0 0 300 200" className="w-full h-auto block" aria-label="Sajek Valley hills above the clouds">
                <rect width="300" height="200" fill="#a9d8f0" />
                <path d="M0 110q60-50 130-15t170-30v135H0z" fill="#6aa37a" />
                <g fill="#fff" opacity=".92">
                  <ellipse cx="60" cy="125" rx="60" ry="14" />
                  <ellipse cx="190" cy="118" rx="70" ry="13" />
                  <ellipse cx="270" cy="135" rx="50" ry="12" />
                  <ellipse cx="130" cy="142" rx="70" ry="12" />
                </g>
                <path d="M0 160q80-30 160-10t140-10v60H0z" fill="#3f8f4f" />
                <rect x="98" y="142" width="36" height="22" fill="#c9a66b" />
                <path d="M92 144l24-20 24 20z" fill="#d63a3a" />
                <rect x="180" y="150" width="28" height="18" fill="#c9a66b" />
                <path d="M175 152l19-16 19 16z" fill="#2a8fb0" />
                <circle cx="250" cy="40" r="16" fill="#fff6c9" />
              </svg>
              <figcaption className="p-3 text-xs text-[var(--muted)] text-center font-medium">
                Sajek Valley, the kingdom of clouds
              </figcaption>
            </figure>

          </div>
        </div>

        {/* Why Travel With Me Section */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] text-center mb-8">
            Why Travel With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 text-center shadow-xs">
              <b className="block font-bold text-base mb-1 text-[var(--text)]">Local Expert</b>
              <span className="text-xs text-[var(--muted)]">Real stories and hidden spots, not just tourist stops.</span>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 text-center shadow-xs">
              <b className="block font-bold text-base mb-1 text-[var(--text)]">Small Groups</b>
              <span className="text-xs text-[var(--muted)]">Personal attention and a relaxed pace.</span>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 text-center shadow-xs">
              <b className="block font-bold text-base mb-1 text-[var(--text)]">Fair Prices</b>
              <span className="text-xs text-[var(--muted)]">Transparent pricing with no surprise costs.</span>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 text-center shadow-xs">
              <b className="block font-bold text-base mb-1 text-[var(--text)]">Safe &amp; Comfortable</b>
              <span className="text-xs text-[var(--muted)]">Trusted boats, stays and drivers.</span>
            </div>
          </div>
        </div>

        {/* Contact Section (with Phone / WhatsApp +880 1746-924292 and Email) */}
        <div 
          className="mt-14 text-center text-white rounded-3xl p-8 sm:p-12 shadow-xl"
          style={{
            background: 'linear-gradient(160deg, #0b6b3a, #06402a)',
          }}
          id="contact"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Plan Your Trip Today
          </h2>
          <p className="text-sm opacity-90 mb-5 max-w-lg mx-auto">
            Tell me your dates and the tour you like, and I’ll arrange the rest.
          </p>

          <div className="space-y-2 text-sm font-medium">
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Phone / WhatsApp: </span>
              {isEditMode ? (
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value, whatsapp: e.target.value })}
                  className="bg-white/20 px-2 py-0.5 rounded text-white text-sm"
                />
              ) : (
                <a 
                  href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold hover:underline"
                >
                  {data.phone}
                </a>
              )}
            </p>

            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-emerald-200" />
              <span>Email: </span>
              {isEditMode ? (
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="bg-white/20 px-2 py-0.5 rounded text-white text-sm"
                />
              ) : (
                <a 
                  href={`mailto:${data.email}`}
                  className="text-white hover:underline"
                >
                  {data.email}
                </a>
              )}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Maharuz,%20I%20would%20like%20to%20plan%20a%20tour%20in%20Bangladesh!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#08502b] font-bold text-sm shadow-md transition transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-[var(--muted)] py-8 border-t border-[var(--line)]">
        © 2026 Explore Bangladesh. All rights reserved.
      </footer>

      {/* Floating WhatsApp Quick Button */}
      <a
        href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Maharuz!`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all duration-200"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp</span>
      </a>

      {/* Interactive Map Modal */}
      {selectedTourForMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[var(--surface)] text-[var(--text)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--line)]">
            <div className="p-4 bg-[var(--surface)] border-b border-[var(--line)] flex justify-between items-center">
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0b6b3a]" />
                <span>Tour Map • {selectedTourForMap.title}</span>
              </h3>
              <button
                onClick={() => setSelectedTourForMap(null)}
                className="p-1.5 rounded-full hover:bg-[var(--line)] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <TourVisualMap
                mapConfig={selectedTourForMap.mapConfig}
                mapPoints={selectedTourForMap.mapPoints}
                language="en"
                tourTitle={selectedTourForMap.title}
              />
            </div>
          </div>
        </div>
      )}

      {/* Interactive Booking Modal with WhatsApp Integration */}
      {selectedTourForBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-[var(--surface)] text-[var(--text)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--line)] p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold text-[#0b6b3a] uppercase tracking-wider block">
                  Reserve This Tour
                </span>
                <h3 className="text-xl font-bold text-[var(--text)]">
                  {selectedTourForBook.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTourForBook(null)}
                className="p-1 rounded-full hover:bg-[var(--line)] transition cursor-pointer"
              >
                <X className="w-5 h-5 text-[var(--muted)]" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Your Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+880 1..."
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold mb-1">Travel Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Travelers Count</label>
                  <input
                    type="number"
                    min="1"
                    max="15"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] text-xs focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppBookingUrl(selectedTourForBook)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedTourForBook(null)}
                className="w-full py-2 text-xs text-[var(--muted)] hover:underline mt-2 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export & Download Modal for .com.bd Hosting */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[var(--surface)] text-[var(--text)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--line)] p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold text-[#0b6b3a] uppercase tracking-wider block">
                  Export Website
                </span>
                <h3 className="text-xl font-bold text-[var(--text)]">
                  Export Files for .com.bd Hosting
                </h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1 rounded-full hover:bg-[var(--line)] transition cursor-pointer"
              >
                <X className="w-5 h-5 text-[var(--muted)]" />
              </button>
            </div>

            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Download your website package below to host it on your own <b>.com.bd</b> or <b>.com</b> domain.
            </p>

            <div className="space-y-3">
              {/* Ready to Host Package */}
              <div className="p-4 rounded-2xl border-2 border-[#0b6b3a] bg-[#0b6b3a]/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0b6b3a] text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--text)]">
                        Website Ready for Hosting (.zip)
                      </h4>
                      <span className="text-[11px] text-[#0b6b3a] font-semibold">
                        Recommended for cPanel / Netlify / Vercel
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted)]">
                  Contains all pre-built files (`index.html`, photos, illustrations, maps). Just upload and extract inside your hosting's <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">public_html</code> folder!
                </p>
                <a
                  href="/website_ready_for_hosting.zip"
                  download="explore_bangladesh_hosting_package.zip"
                  className="w-full py-2.5 px-4 bg-[#0b6b3a] hover:bg-[#08502b] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Hosting Package (.zip)</span>
                </a>
              </div>

              {/* Source Code Package */}
              <div className="p-4 rounded-2xl border border-[var(--line)] bg-[var(--bg)] space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 text-[var(--text)] flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--text)]">
                      Full Source Code (.zip)
                    </h4>
                    <span className="text-[11px] text-[var(--muted)]">
                      For developers (React + Vite + Tailwind)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted)]">
                  The complete source code project so you or any developer can modify it using Node.js and VS Code.
                </p>
                <a
                  href="/website_source_code.zip"
                  download="explore_bangladesh_source_code.zip"
                  className="w-full py-2.5 px-4 bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--line)] text-[var(--text)] font-semibold rounded-xl flex items-center justify-center gap-2 text-xs transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Source Code (.zip)</span>
                </a>
              </div>
            </div>

            {/* Quick 3-step Instructions */}
            <div className="pt-2 border-t border-[var(--line)] text-xs text-[var(--muted)] space-y-1.5">
              <b className="text-[var(--text)] block text-xs">Quick Guide to Launch on .com.bd:</b>
              <ol className="list-decimal pl-4 space-y-1">
                <li>Register your <b>.com.bd</b> domain from BTCL (or DianaHost / XeonBD / ExonHost).</li>
                <li>Download the <b>Hosting Package (.zip)</b> above.</li>
                <li>In your cPanel File Manager, upload and extract the files inside <b>public_html</b>.</li>
              </ol>
            </div>

            <button
              onClick={() => setShowExportModal(false)}
              className="w-full py-2 text-xs text-[var(--muted)] hover:underline cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
