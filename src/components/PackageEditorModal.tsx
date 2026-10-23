import React, { useState } from 'react';
import { X, Trash2, Plus, Edit2, RotateCcw, Check, Save, AlertCircle } from 'lucide-react';
import { TourPackage, Language } from '../types/tour';
import { TOURS_DATA } from '../data/toursData';

interface PackageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  tours: TourPackage[];
  onSaveTours: (newTours: TourPackage[]) => void;
}

export const PackageEditorModal: React.FC<PackageEditorModalProps> = ({
  isOpen,
  onClose,
  language,
  tours,
  onSaveTours,
}) => {
  const [editingTourId, setEditingTourId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<TourPackage>>({});
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Erase all package values - exactly what user requested!
  const handleEraseAllPackageValues = () => {
    if (window.confirm(language === 'bn' ? 'আপনি কি সব প্যাকেজের ভ্যালু মুছে ফেলতে চান?' : 'Are you sure you want to erase all package values to start fresh?')) {
      const emptyPackage: TourPackage = {
        id: 'custom-package-1',
        mapConfig: {
          centerLat: 23.8103,
          centerLng: 90.4125,
          zoom: 10,
          regionName: { bn: 'নতুন ট্যুর অঞ্চল', en: 'New Tour Region' },
        },
        mapPoints: [
          {
            id: 'pt-1',
            name: { bn: 'প্রধান স্পট', en: 'Main Spot' },
            type: 'highlight',
            lat: 23.8103,
            lng: 90.4125,
            description: { bn: 'স্পটের বিবরণ', en: 'Spot description' },
          },
        ],
        title: { bn: '', en: '' },
        category: 'village',
        badge: { bn: 'নতুন', en: 'New' },
        shortDesc: { bn: '', en: '' },
        fullDesc: { bn: '', en: '' },
        priceBDT: 0,
        priceUSD: 0,
        duration: { bn: '১ দিন', en: '1 Day' },
        groupSize: { bn: '২-৪ জন', en: '2-4 persons' },
        imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
        highlights: { bn: ['আকর্ষণ ১', 'আকর্ষণ ২'], en: ['Highlight 1', 'Highlight 2'] },
        itinerary: [
          {
            dayNumber: 1,
            title: { bn: 'দিন ১', en: 'Day 1' },
            description: { bn: 'ভ্রমণসূচী লিখুন', en: 'Write itinerary' },
            highlights: { bn: ['পয়েন্ট ১'], en: ['Point 1'] },
          },
        ],
        includes: { bn: ['গাইড ফি', 'খাবার'], en: ['Guide fee', 'Meals'] },
        excludes: { bn: ['ব্যক্তিগত খরচ'], en: ['Personal expenses'] },
        pickupLocation: { bn: 'ঢাকা', en: 'Dhaka' },
        bestSeason: { bn: 'সারা বছর', en: 'Year round' },
        rating: 5.0,
        reviewsCount: 1,
      };

      onSaveTours([emptyPackage]);
      setEditingTourId('custom-package-1');
      setFormData(emptyPackage);
      showNotice(language === 'bn' ? 'সব প্যাকেজ ভ্যালু সফলভাবে মুছে ফেলা হয়েছে! এখন আপনার পছন্দমতো পূরণ করুন।' : 'All package values erased! Now fill in your own values.');
    }
  };

  const handleRestoreDefaults = () => {
    if (window.confirm(language === 'bn' ? 'ডিফল্ট প্যাকেজসমূহ ফিরিয়ে আনতে চান?' : 'Restore default packages?')) {
      onSaveTours(TOURS_DATA);
      setEditingTourId(null);
      showNotice(language === 'bn' ? 'ডিফল্ট প্যাকেজ লোড করা হয়েছে।' : 'Default packages restored.');
    }
  };

  const handleEditClick = (tour: TourPackage) => {
    setEditingTourId(tour.id);
    setFormData({ ...tour });
  };

  const handleAddNewPackage = () => {
    const newId = 'tour-' + Date.now();
    const newPkg: TourPackage = {
      id: newId,
      mapConfig: {
        centerLat: 23.8103,
        centerLng: 90.4125,
        zoom: 10,
        regionName: { bn: 'গন্তব্য অঞ্চল', en: 'Destination Area' },
      },
      mapPoints: [
        {
          id: 'point-1',
          name: { bn: 'লোকেশন ১', en: 'Location 1' },
          type: 'highlight',
          lat: 23.8103,
          lng: 90.4125,
          description: { bn: 'স্পটের সংক্ষিপ্ত বিবরণ', en: 'Brief description' },
        },
      ],
      title: { bn: 'নতুন ট্যুর প্যাকেজ', en: 'New Tour Package' },
      category: 'village',
      badge: { bn: 'স্পেশাল', en: 'Special' },
      shortDesc: { bn: 'প্যাকেজের সংক্ষিপ্ত বিবরণ লিখুন...', en: 'Write short description...' },
      fullDesc: { bn: 'প্যাকেজের বিস্তারিত বিবরণ...', en: 'Write full tour overview...' },
      priceBDT: 3000,
      priceUSD: 30,
      duration: { bn: '২ দিন ১ রাত', en: '2 Days 1 Night' },
      groupSize: { bn: '২-৬ জন', en: '2-6 persons' },
      imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      highlights: { bn: ['আকর্ষণ ১', 'আকর্ষণ ২'], en: ['Highlight 1', 'Highlight 2'] },
      itinerary: [
        {
          dayNumber: 1,
          title: { bn: 'দিন ১', en: 'Day 1' },
          description: { bn: 'প্রথম দিনের ভ্রমণ বিবরণ', en: 'Day 1 itinerary' },
          highlights: { bn: ['পয়েন্ট ১'], en: ['Point 1'] },
        },
      ],
      includes: { bn: ['গাইড ফি', 'আবাসন', 'খাবার'], en: ['Guide fee', 'Stay', 'Meals'] },
      excludes: { bn: ['ব্যক্তিগত কেনাকাটা'], en: ['Personal expenses'] },
      pickupLocation: { bn: 'ঢাকা', en: 'Dhaka' },
      bestSeason: { bn: 'অক্টোবর - মার্চ', en: 'Oct - Mar' },
      rating: 5.0,
      reviewsCount: 10,
    };

    const updated = [...tours, newPkg];
    onSaveTours(updated);
    setEditingTourId(newId);
    setFormData(newPkg);
    showNotice(language === 'bn' ? 'নতুন প্যাকেজ যোগ করা হয়েছে।' : 'New package added.');
  };

  const handleDeletePackage = (id: string) => {
    if (tours.length <= 1) {
      alert(language === 'bn' ? 'কমপক্ষে একটি প্যাকেজ থাকা প্রয়োজন।' : 'At least one package is required.');
      return;
    }
    const updated = tours.filter((t) => t.id !== id);
    onSaveTours(updated);
    if (editingTourId === id) setEditingTourId(null);
    showNotice(language === 'bn' ? 'প্যাকেজ ডিলিট করা হয়েছে।' : 'Package deleted.');
  };

  const handleSaveCurrentEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTourId) return;

    const updated = tours.map((t) => {
      if (t.id === editingTourId) {
        return {
          ...t,
          ...formData,
        } as TourPackage;
      }
      return t;
    });

    onSaveTours(updated);
    setEditingTourId(null);
    showNotice(language === 'bn' ? 'প্যাকেজের ভ্যালু সফলভাবে সংরক্ষিত হয়েছে!' : 'Package values saved successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#113f31] text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <Edit2 className="w-5 h-5 text-[#f1c40f]" />
              <span>{language === 'bn' ? 'প্যাকেজ ভ্যালু এডিটর ও ম্যানেজার' : 'Package Value Editor & Manager'}</span>
            </h3>
            <p className="text-xs text-emerald-200 mt-0.5">
              {language === 'bn' ? 'প্যাকেজগুলোর নাম, দাম, ছবি ও বর্ণনা আপনার মতো করে পরিবর্তন করুন' : 'Edit or erase all package values and set your custom values'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            {/* Erase All Button - exactly what was requested */}
            <button
              onClick={handleEraseAllPackageValues}
              className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>{language === 'bn' ? 'সকল প্যাকেজ ভ্যালু মুছুন (Erase All)' : 'Erase All Package Values'}</span>
            </button>

            <button
              onClick={handleAddNewPackage}
              className="px-3.5 py-2 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#f1c40f]" />
              <span>{language === 'bn' ? 'নতুন প্যাকেজ যোগ করুন' : 'Add New Package'}</span>
            </button>
          </div>

          <button
            onClick={handleRestoreDefaults}
            className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'ডিফল্ট রিসেট' : 'Reset to Defaults'}</span>
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 text-center animate-fadeIn">
            ✓ {notification}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {editingTourId ? (
            /* Edit Form */
            <form onSubmit={handleSaveCurrentEdit} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="font-bold text-base text-[#113f31]">
                  {language === 'bn' ? 'প্যাকেজের তথ্য সম্পাদনা করুন' : 'Edit Package Values'}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditingTourId(null)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  {language === 'bn' ? 'তালিকায় ফিরে যান' : 'Back to list'}
                </button>
              </div>

              {/* Title BN & EN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'প্যাকেজের নাম (বাংলা) *' : 'Title (Bangla) *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title?.bn || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: { ...formData.title!, bn: e.target.value },
                      })
                    }
                    placeholder="প্যাকেজের নাম লিখুন..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'প্যাকেজের নাম (English) *' : 'Title (English) *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title?.en || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: { ...formData.title!, en: e.target.value },
                      })
                    }
                    placeholder="Enter English title..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>
              </div>

              {/* Price BDT & Price USD */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'মূল্য ৳ BDT (জনপ্রতি) *' : 'Price ৳ BDT (per person) *'}
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.priceBDT || 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        priceBDT: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'মূল্য $ USD (জনপ্রতি) *' : 'Price $ USD (per person) *'}
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.priceUSD || 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        priceUSD: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'সময়কাল (Duration)' : 'Duration'}
                  </label>
                  <input
                    type="text"
                    value={formData.duration?.bn || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        duration: {
                          bn: e.target.value,
                          en: e.target.value,
                        },
                      })
                    }
                    placeholder="যেমন: ৩ দিন ২ রাত"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'ছবির লিঙ্ক (Image URL)' : 'Image URL'}
                </label>
                <input
                  type="url"
                  value={formData.imageUrl || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      imageUrl: e.target.value,
                    })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                />
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'সংক্ষিপ্ত বিবরণ (Short Description)' : 'Short Description'}
                </label>
                <textarea
                  rows={2}
                  value={formData.shortDesc?.bn || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      shortDesc: {
                        bn: e.target.value,
                        en: formData.shortDesc?.en || e.target.value,
                      },
                    })
                  }
                  placeholder="প্যাকেজের সংক্ষিপ্ত আকর্ষণীয় বিবরণ লিখুন..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'bn' ? 'পূর্ণাঙ্গ বিস্তারিত বিবরণ (Full Overview)' : 'Full Overview'}
                </label>
                <textarea
                  rows={3}
                  value={formData.fullDesc?.bn || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullDesc: {
                        bn: e.target.value,
                        en: formData.fullDesc?.en || e.target.value,
                      },
                    })
                  }
                  placeholder="ট্যুর সম্পর্কিত বিস্তারিত তথ্য..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                />
              </div>

              {/* Pickup location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'পিকআপ লোকেশন' : 'Pickup Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.pickupLocation?.bn || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pickupLocation: {
                          bn: e.target.value,
                          en: e.target.value,
                        },
                      })
                    }
                    placeholder="যেমন: ঢাকা বিমানবন্দর"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'bn' ? 'ব্যাজ (Badge)' : 'Badge Label'}
                  </label>
                  <input
                    type="text"
                    value={formData.badge?.bn || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        badge: {
                          bn: e.target.value,
                          en: e.target.value,
                        },
                      })
                    }
                    placeholder="যেমন: জনপ্রিয় / বিশেষ অফার"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#113f31] focus:outline-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#113f31] hover:bg-[#0b2920] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer"
                >
                  <Save className="w-4 h-4 text-[#f1c40f]" />
                  <span>{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Values'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingTourId(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm cursor-pointer"
                >
                  {language === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
              </div>
            </form>
          ) : (
            /* Packages List */
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-500 mb-2">
                {language === 'bn'
                  ? `মোট ${tours.length} টি প্যাকেজ বিদ্যমান। সম্পাদনা করতে "এডিট" বা মুছে নতুন শুরু করতে "সকল প্যাকেজ ভ্যালু মুছুন" চাপুন।`
                  : `${tours.length} packages currently configured. Click Edit to adjust any values, or click "Erase All" above to clear all values.`}
              </div>

              {tours.map((tour, idx) => (
                <div
                  key={tour.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={tour.imageUrl || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=200&q=80'}
                      alt=""
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">#{idx + 1}</span>
                        <h5 className="font-bold text-sm text-[#113f31]">
                          {tour.title.bn || tour.title.en || (language === 'bn' ? '(খালি নাম)' : '(Empty Title)')}
                        </h5>
                        {tour.badge && (
                          <span className="px-2 py-0.5 bg-[#f1c40f] text-[#113f31] font-bold text-[10px] rounded">
                            {tour.badge.bn}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {tour.shortDesc.bn || tour.shortDesc.en || '(No description)'}
                      </p>
                      <div className="text-xs font-bold text-emerald-800 mt-1">
                        ৳ {tour.priceBDT.toLocaleString()} / ${tour.priceUSD}
                        <span className="text-slate-400 font-normal ml-2">({tour.duration.bn})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleEditClick(tour)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'এডিট' : 'Edit'}</span>
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

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#113f31] hover:bg-[#0b2920] text-white font-bold text-xs cursor-pointer"
          >
            {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
