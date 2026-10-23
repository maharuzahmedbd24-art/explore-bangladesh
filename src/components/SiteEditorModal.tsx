import React, { useState } from 'react';
import { X, Trash2, Plus, Edit2, RotateCcw, Save, User, Compass, Package, Sparkles, Check, Image as ImageIcon } from 'lucide-react';
import { TourPackage, Language } from '../types/tour';
import { GuideProfile } from '../data/guideData';
import { TOURS_DATA } from '../data/toursData';

interface SiteEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  tours: TourPackage[];
  onSaveTours: (newTours: TourPackage[]) => void;
  guide: GuideProfile;
  onSaveGuide: (newGuide: GuideProfile) => void;
  heroContent: {
    title: string;
    subtitle: string;
    description: string;
  };
  onSaveHeroContent: (content: { title: string; subtitle: string; description: string }) => void;
}

export const SiteEditorModal: React.FC<SiteEditorModalProps> = ({
  isOpen,
  onClose,
  language,
  tours,
  onSaveTours,
  guide,
  onSaveGuide,
  heroContent,
  onSaveHeroContent,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'guide' | 'hero'>('packages');
  const [editingTourId, setEditingTourId] = useState<string | null>(null);
  const [tourFormData, setTourFormData] = useState<Partial<TourPackage>>({});

  // Guide form state
  const [guideFormData, setGuideFormData] = useState<GuideProfile>({ ...guide });

  // Hero form state
  const [heroFormData, setHeroFormData] = useState({ ...heroContent });

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Erase all package values completely so user can fill from scratch
  const handleEraseAllPackageValues = () => {
    if (window.confirm('Are you sure you want to erase all package values to start completely fresh?')) {
      const blankPackage: TourPackage = {
        id: 'pkg-' + Date.now(),
        mapConfig: {
          centerLat: 23.8103,
          centerLng: 90.4125,
          zoom: 10,
          regionName: { bn: 'নতুন অঞ্চল', en: 'Custom Region' },
        },
        mapPoints: [
          {
            id: 'pt-1',
            name: { bn: 'স্পট ১', en: 'Highlight Spot 1' },
            type: 'highlight',
            lat: 23.8103,
            lng: 90.4125,
            description: { bn: 'বিবরণ', en: 'Spot description' },
          },
        ],
        title: { bn: 'নতুন ট্যুর প্যাকেজ', en: 'New Tour Package' },
        category: 'village',
        badge: { bn: 'নতুন', en: 'Featured' },
        shortDesc: { bn: 'সংক্ষিপ্ত বিবরণ', en: 'Short catchy description of the tour...' },
        fullDesc: { bn: 'বিস্তারিত বিবরণ', en: 'Full in-depth itinerary details...' },
        priceBDT: 3000,
        priceUSD: 30,
        duration: { bn: '২ দিন ১ রাত', en: '2 Days 1 Night' },
        groupSize: { bn: '২-৬ জন', en: '2-6 persons' },
        imageUrl: '/assets/maharuz_boat.jpg',
        highlights: { bn: ['আকর্ষণ ১', 'আকর্ষণ ২'], en: ['Scenic Boat Ride', 'Village Homestay'] },
        itinerary: [
          {
            dayNumber: 1,
            title: { bn: 'দিন ১', en: 'Day 1: Arrival & Exploration' },
            description: { bn: 'বিবরণ', en: 'Day 1 detailed schedule and route' },
            highlights: { bn: ['পয়েন্ট ১'], en: ['Welcome & Tour'] },
          },
        ],
        includes: { bn: ['গাইড ফি', 'খাবার'], en: ['Dedicated Guide', 'All Meals'] },
        excludes: { bn: ['ব্যক্তিগত খরচ'], en: ['Personal shopping'] },
        pickupLocation: { bn: 'ঢাকা', en: 'Dhaka City' },
        bestSeason: { bn: 'অক্টোবর - মার্চ', en: 'October - March' },
        rating: 5.0,
        reviewsCount: 1,
      };

      onSaveTours([blankPackage]);
      setEditingTourId(blankPackage.id);
      setTourFormData(blankPackage);
      showNotice('All previous package values erased! Fill in your new custom values below.');
    }
  };

  const handleAddNewPackage = () => {
    const newId = 'pkg-' + Date.now();
    const newPkg: TourPackage = {
      id: newId,
      mapConfig: {
        centerLat: 23.8103,
        centerLng: 90.4125,
        zoom: 10,
        regionName: { bn: 'নতুন অঞ্চল', en: 'New Region' },
      },
      mapPoints: [
        {
          id: 'pt-1',
          name: { bn: 'স্পট', en: 'Main Attraction' },
          type: 'highlight',
          lat: 23.8103,
          lng: 90.4125,
          description: { bn: 'বিবরণ', en: 'Attraction description' },
        },
      ],
      title: { bn: 'নতুন প্যাকেজ', en: 'Exciting Bangladesh Journey' },
      category: 'village',
      badge: { bn: 'স্পেশাল', en: 'Special Offer' },
      shortDesc: { bn: 'সংক্ষিপ্ত বিবরণ', en: 'A memorable exploration of scenic Bangladesh...' },
      fullDesc: { bn: 'বিস্তারিত বিবরণ', en: 'Detailed tour highlights, transport, and experiences...' },
      priceBDT: 3500,
      priceUSD: 35,
      duration: { bn: '২ দিন ১ রাত', en: '2 Days 1 Night' },
      groupSize: { bn: '২-৮ জন', en: '2-8 persons' },
      imageUrl: '/assets/maharuz_boat.jpg',
      highlights: { bn: ['নৌকা ভ্রমণ'], en: ['Authentic Wooden Boat River Cruise'] },
      itinerary: [
        {
          dayNumber: 1,
          title: { bn: 'দিন ১', en: 'Day 1: Departure' },
          description: { bn: 'বিবরণ', en: 'Morning departure with private guide' },
          highlights: { bn: ['পয়েন্ট'], en: ['Scenic Trail'] },
        },
      ],
      includes: { bn: ['গাইড'], en: ['Personal Local Guide', 'Transport'] },
      excludes: { bn: ['ব্যক্তিগত খরচ'], en: ['Personal Tips'] },
      pickupLocation: { bn: 'ঢাকা', en: 'Dhaka City' },
      bestSeason: { bn: 'সারা বছর', en: 'Year Round' },
      rating: 5.0,
      reviewsCount: 12,
    };

    onSaveTours([...tours, newPkg]);
    setEditingTourId(newId);
    setTourFormData(newPkg);
    showNotice('New package added. Customize its details below!');
  };

  const handleDeletePackage = (id: string) => {
    if (tours.length <= 1) {
      alert('At least one package is required.');
      return;
    }
    const updated = tours.filter((t) => t.id !== id);
    onSaveTours(updated);
    if (editingTourId === id) setEditingTourId(null);
    showNotice('Package removed.');
  };

  const handleSaveTourEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTourId) return;

    const updated = tours.map((t) => {
      if (t.id === editingTourId) {
        return {
          ...t,
          ...tourFormData,
        } as TourPackage;
      }
      return t;
    });

    onSaveTours(updated);
    setEditingTourId(null);
    showNotice('Tour package successfully saved!');
  };

  const handleSaveGuide = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveGuide(guideFormData);
    showNotice('Guide profile & photo updated successfully!');
  };

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveHeroContent(heroFormData);
    showNotice('Hero banner content updated!');
  };

  const handleRestoreAllDefaults = () => {
    if (window.confirm('Reset all packages and site content back to defaults?')) {
      onSaveTours(TOURS_DATA);
      setEditingTourId(null);
      localStorage.removeItem('explore_bd_tours');
      localStorage.removeItem('explore_bd_guide');
      localStorage.removeItem('explore_bd_hero');
      showNotice('Default content restored.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-[#113f31] text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[#f1c40f] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Site Customizer & Value Editor</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Edit All Site Options & Packages
            </h3>
            <p className="text-xs text-emerald-200">
              Customize tour packages, your guide profile, contact details, and banner text.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Close Editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('packages')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'packages'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Package className="w-4 h-4 text-emerald-700" />
            <span>Tour Packages ({tours.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'guide'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <User className="w-4 h-4 text-emerald-700" />
            <span>Guide Profile & Photos</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'hero'
                ? 'border-[#113f31] text-[#113f31]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Hero Banner Text</span>
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 text-center animate-fadeIn shrink-0">
            ✓ {notification}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-700">
          
          {/* TAB 1: TOUR PACKAGES */}
          {activeTab === 'packages' && (
            <div className="space-y-6">
              
              {/* Quick Actions Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Erase All Button */}
                  <button
                    onClick={handleEraseAllPackageValues}
                    className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Erase All Package Values</span>
                  </button>

                  <button
                    onClick={handleAddNewPackage}
                    className="px-3.5 py-2 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-[#f1c40f]" />
                    <span>Add New Package</span>
                  </button>
                </div>

                <button
                  onClick={handleRestoreAllDefaults}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restore Factory Defaults</span>
                </button>
              </div>

              {editingTourId ? (
                /* Edit Single Tour Form */
                <form onSubmit={handleSaveTourEdit} className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h4 className="font-bold text-base text-[#113f31]">
                      Edit Package Details & Pricing
                    </h4>
                    <button
                      type="button"
                      onClick={() => setEditingTourId(null)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Back to list
                    </button>
                  </div>

                  {/* Title & Badge */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tour Package Title (English) *
                      </label>
                      <input
                        type="text"
                        required
                        value={tourFormData.title?.en || ''}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            title: {
                              en: e.target.value,
                              bn: tourFormData.title?.bn || e.target.value,
                            },
                          })
                        }
                        placeholder="e.g. Authentic Rural Village Life & River Safari"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Badge Label (e.g. Popular, Top Rated)
                      </label>
                      <input
                        type="text"
                        value={tourFormData.badge?.en || ''}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            badge: {
                              en: e.target.value,
                              bn: e.target.value,
                            },
                          })
                        }
                        placeholder="Popular"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  {/* Pricing BDT & USD & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Price in ৳ BDT (per person) *
                      </label>
                      <input
                        type="number"
                        required
                        value={tourFormData.priceBDT || 0}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            priceBDT: Number(e.target.value),
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Price in $ USD (per person) *
                      </label>
                      <input
                        type="number"
                        required
                        value={tourFormData.priceUSD || 0}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            priceUSD: Number(e.target.value),
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Duration (e.g. 2 Days 1 Night)
                      </label>
                      <input
                        type="text"
                        value={tourFormData.duration?.en || ''}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            duration: {
                              en: e.target.value,
                              bn: e.target.value,
                            },
                          })
                        }
                        placeholder="2 Days 1 Night"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  {/* Image URL & Pickup */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Cover Image URL
                      </label>
                      <input
                        type="text"
                        value={tourFormData.imageUrl || ''}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            imageUrl: e.target.value,
                          })
                        }
                        placeholder="/assets/maharuz_boat.jpg or https://..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                      <div className="flex gap-2 mt-1.5">
                        <button
                          type="button"
                          onClick={() => setTourFormData({ ...tourFormData, imageUrl: '/assets/maharuz_boat.jpg' })}
                          className="text-[11px] text-emerald-800 underline hover:text-emerald-950"
                        >
                          Use My Boat Photo
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={tourFormData.pickupLocation?.en || ''}
                        onChange={(e) =>
                          setTourFormData({
                            ...tourFormData,
                            pickupLocation: {
                              en: e.target.value,
                              bn: e.target.value,
                            },
                          })
                        }
                        placeholder="Dhaka City (Hotel / Airport pickup)"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  {/* Short Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Short Summary Description
                    </label>
                    <textarea
                      rows={2}
                      value={tourFormData.shortDesc?.en || ''}
                      onChange={(e) =>
                        setTourFormData({
                          ...tourFormData,
                          shortDesc: {
                            en: e.target.value,
                            bn: tourFormData.shortDesc?.bn || e.target.value,
                          },
                        })
                      }
                      placeholder="Brief overview of the experience for the tour card..."
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                    />
                  </div>

                  {/* Full Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full In-depth Overview
                    </label>
                    <textarea
                      rows={3}
                      value={tourFormData.fullDesc?.en || ''}
                      onChange={(e) =>
                        setTourFormData({
                          ...tourFormData,
                          fullDesc: {
                            en: e.target.value,
                            bn: tourFormData.fullDesc?.bn || e.target.value,
                          },
                        })
                      }
                      placeholder="Comprehensive itinerary, culture, and nature background..."
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none bg-white"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#113f31] hover:bg-[#0b2920] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer"
                    >
                      <Save className="w-4 h-4 text-[#f1c40f]" />
                      <span>Save Package Values</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingTourId(null)}
                      className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-sm cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                /* Packages List */
                <div className="space-y-3">
                  {tours.map((tour, idx) => (
                    <div
                      key={tour.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={tour.imageUrl || '/assets/maharuz_boat.jpg'}
                          alt=""
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-slate-400">#{idx + 1}</span>
                            <h5 className="font-bold text-sm text-[#113f31]">
                              {tour.title.en || tour.title.bn || '(Untitled Package)'}
                            </h5>
                            {tour.badge && (
                              <span className="px-2 py-0.5 bg-[#f1c40f] text-[#113f31] font-bold text-[10px] rounded">
                                {tour.badge.en || tour.badge.bn}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {tour.shortDesc.en || tour.shortDesc.bn || 'No description provided'}
                          </p>
                          <div className="text-xs font-bold text-emerald-800 mt-1">
                            ৳ {tour.priceBDT.toLocaleString()} / ${tour.priceUSD}
                            <span className="text-slate-400 font-normal ml-2">({tour.duration.en || tour.duration.bn})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setEditingTourId(tour.id);
                            setTourFormData({ ...tour });
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit Values</span>
                        </button>
                        <button
                          onClick={() => handleDeletePackage(tour.id)}
                          className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600 transition cursor-pointer"
                          title="Delete package"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* TAB 2: GUIDE PROFILE & PHOTOS */}
          {activeTab === 'guide' && (
            <form onSubmit={handleSaveGuide} className="space-y-5">
              
              {/* Photo Preview & Path */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={guideFormData.avatar || '/assets/maharuz_avatar.jpg'}
                  alt="Avatar"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-700 shadow"
                />
                <div className="flex-1">
                  <span className="block text-xs font-bold text-[#113f31] mb-1">
                    Your Profile Photo / Avatar (Current: Original boat picture)
                  </span>
                  <input
                    type="text"
                    value={guideFormData.avatar || ''}
                    onChange={(e) => setGuideFormData({ ...guideFormData, avatar: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white"
                  />
                  <div className="flex gap-2 mt-1.5">
                    <button
                      type="button"
                      onClick={() => setGuideFormData({ ...guideFormData, avatar: '/assets/maharuz_avatar.jpg' })}
                      className="text-[11px] text-emerald-800 font-bold underline"
                    >
                      Set Original Portrait Avatar
                    </button>
                    <button
                      type="button"
                      onClick={() => setGuideFormData({ ...guideFormData, avatar: '/assets/maharuz_boat.jpg' })}
                      className="text-[11px] text-emerald-800 font-bold underline"
                    >
                      Set Full Country Boat Photo
                    </button>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Guide Name (English)
                  </label>
                  <input
                    type="text"
                    value={guideFormData.name.en}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        name: { ...guideFormData.name, en: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Professional Title (English)
                  </label>
                  <input
                    type="text"
                    value={guideFormData.title.en}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        title: { ...guideFormData.title, en: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              {/* Contact Info: Phone, WhatsApp, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={guideFormData.contact.phone}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        contact: { ...guideFormData.contact, phone: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={guideFormData.contact.whatsapp}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        contact: {
                          ...guideFormData.contact,
                          whatsapp: e.target.value,
                          whatsappUrl: `https://wa.me/${e.target.value.replace(/[^0-9]/g, '')}`,
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={guideFormData.contact.email}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        contact: { ...guideFormData.contact, email: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Welcome Bio & Mission Statement (English)
                </label>
                <textarea
                  rows={4}
                  value={guideFormData.bio.en}
                  onChange={(e) =>
                    setGuideFormData({
                      ...guideFormData,
                      bio: { ...guideFormData.bio, en: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm leading-relaxed"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Experience Years
                  </label>
                  <input
                    type="number"
                    value={guideFormData.experienceYears}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        experienceYears: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Completed Tours Count
                  </label>
                  <input
                    type="number"
                    value={guideFormData.totalTours}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        totalTours: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rating (out of 5)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={guideFormData.rating}
                    onChange={(e) =>
                      setGuideFormData({
                        ...guideFormData,
                        rating: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#113f31] hover:bg-[#0b2920] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer"
              >
                <Save className="w-4 h-4 text-[#f1c40f]" />
                <span>Save Guide Profile Changes</span>
              </button>
            </form>
          )}

          {/* TAB 3: HERO BANNER CONTENT */}
          {activeTab === 'hero' && (
            <form onSubmit={handleSaveHero} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Main Hero Headline
                </label>
                <input
                  type="text"
                  value={heroFormData.title}
                  onChange={(e) => setHeroFormData({ ...heroFormData, title: e.target.value })}
                  placeholder="e.g. Explore Beautiful & Lush Bangladesh"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={heroFormData.subtitle}
                  onChange={(e) => setHeroFormData({ ...heroFormData, subtitle: e.target.value })}
                  placeholder="e.g. With Your Trusted Local Expert & Private Tour Guide"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Intro Description
                </label>
                <textarea
                  rows={3}
                  value={heroFormData.description}
                  onChange={(e) => setHeroFormData({ ...heroFormData, description: e.target.value })}
                  placeholder="Intro paragraph text below the subtitle..."
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#113f31] hover:bg-[#0b2920] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer"
              >
                <Save className="w-4 h-4 text-[#f1c40f]" />
                <span>Save Hero Content</span>
              </button>
            </form>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center shrink-0">
          <span className="text-xs text-slate-500">
            All updates save instantly to your browser session.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white font-bold text-xs cursor-pointer"
          >
            Done & Close
          </button>
        </div>

      </div>
    </div>
  );
};
