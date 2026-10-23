import React, { useState } from 'react';
import { Camera, Eye, MapPin } from 'lucide-react';
import { Language } from '../types/tour';

interface PhotoGalleryProps {
  language: Language;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ language }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const photos = [
    {
      url: '/assets/maharuz_boat.jpg',
      titleBn: 'কাঠের নৌকায় নদীমাতৃক বাংলা ভ্রমণ (লোকাল গাইডের বাস্তব ছবি)',
      titleEn: 'Cruising Riverways on Traditional Wooden Boat (Original Guide Photo)',
      locationBn: 'নদীমাতৃক বাংলা',
      locationEn: 'Rural Riverway, Bangladesh',
      badge: 'Original Photo',
    },
    {
      url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      titleBn: 'বিলের লাল ও সাদা শাপলা ফুল ও মাছ ধরা',
      titleEn: 'Blooming Pink & White Water Lily Canal with Fishermen',
      locationBn: 'পদ্মা ও মেঘনা অববাহিকা',
      locationEn: 'Padma River Wetlands',
      badge: 'Most Loved Village Scenery',
    },
    {
      url: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80',
      titleBn: 'কুষ্টিয়া ও শিলাইদহের মেঠোপথ ও ছায়াঘেরা গ্রাম',
      titleEn: 'Serene Rural Pathways & Shady Bamboo Groves in Kushtia',
      locationBn: 'কুষ্টিয়া ও কুমারখালী',
      locationEn: 'Kushtia Rural Trails',
    },
    {
      url: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80',
      titleBn: 'শ্রীমঙ্গলের সবুজে ঘেরা চা বাগান ও টিলা',
      titleEn: 'Lush Green Rolling Hills of Sreemangal Tea Estates',
      locationBn: 'মৌলভীবাজার, সিলেট',
      locationEn: 'Sreemangal, Sylhet',
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      titleBn: 'সাজেক ভ্যালির মেঘের সমুদ্র ও কংলাক পাহাড়',
      titleEn: 'Majestic Ocean of Clouds at Sajek Valley & Konglak Summit',
      locationBn: 'রাঙ্গামাটি ও খাগড়াছড়ি',
      locationEn: 'Sajek Valley Ridge',
    },
    {
      url: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
      titleBn: 'সুন্দরবনের নীরব ম্যানগ্রোভ খাল ও বন্য হরিণ',
      titleEn: 'Sundarbans Mangrove Canal Safari & Wildlife Trails',
      locationBn: 'কটকা অভয়ারণ্য',
      locationEn: 'Kotka Wildlife Sanctuary',
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#113f31] text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-[#f1c40f]" />
            <span>{language === 'bn' ? 'ফটোগ্রাফি ও স্মৃতি' : 'Visual Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113f31] font-serif">
            {language === 'bn' ? 'অপরূপ রূপসী বাংলার কিছু খণ্ডচিত্র' : 'Glances of Untamed Beautiful Bangladesh'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {language === 'bn'
              ? 'আমাদের পূর্ববর্তী ট্যুরগুলোতে ক্যামেরাবন্দী করা কিছু অবিস্মরণীয় মুহূর্ত।'
              : 'Captured moments from our private guided journeys across rivers, hills, and mangroves.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-100"
            >
              <img
                src={photo.url}
                alt={language === 'bn' ? photo.titleBn : photo.titleEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="flex items-center gap-1 text-xs text-[#f1c40f] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {language === 'bn' ? photo.locationBn : photo.locationEn}
                </span>
                <h4 className="text-sm sm:text-base font-bold font-serif">
                  {language === 'bn' ? photo.titleBn : photo.titleEn}
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-200">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'বড় করে দেখুন' : 'View Full Image'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer animate-fadeIn"
        >
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.url}
              alt=""
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl mx-auto"
            />
            <div className="text-center text-white mt-4">
              <h3 className="text-lg font-bold">
                {language === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn}
              </h3>
              <p className="text-xs text-[#f1c40f] flex items-center justify-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {language === 'bn' ? selectedPhoto.locationBn : selectedPhoto.locationEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
