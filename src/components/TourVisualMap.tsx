import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, ExternalLink, Info, Check } from 'lucide-react';
import { MapConfig, MapPoint, Language } from '../types/tour';

interface TourVisualMapProps {
  mapConfig: MapConfig;
  mapPoints: MapPoint[];
  language: Language;
  tourTitle: string;
}

export const TourVisualMap: React.FC<TourVisualMapProps> = ({
  mapConfig,
  mapPoints,
  language,
  tourTitle,
}) => {
  const [selectedPointId, setSelectedPointId] = useState<string>(
    mapPoints[0]?.id || ''
  );
  const [mapMode, setMapMode] = useState<'embed' | 'satellite' | 'schematic'>('embed');

  const selectedPoint = mapPoints.find((p) => p.id === selectedPointId) || mapPoints[0];

  // OpenStreetMap embed URL
  const zoom = mapConfig.zoom || 11;
  const lat = selectedPoint?.lat || mapConfig.centerLat;
  const lng = selectedPoint?.lng || mapConfig.centerLng;
  const delta = 0.08 / Math.pow(2, zoom - 10);
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const getPointColor = (type: MapPoint['type']) => {
    switch (type) {
      case 'pickup':
        return 'bg-blue-600 text-white border-blue-200';
      case 'nature':
        return 'bg-emerald-600 text-white border-emerald-200';
      case 'stay':
        return 'bg-amber-600 text-white border-amber-200';
      case 'highlight':
      default:
        return 'bg-[#113f31] text-[#f1c40f] border-amber-400';
    }
  };

  const getPointBadgeLabel = (type: MapPoint['type']) => {
    switch (type) {
      case 'pickup':
        return language === 'bn' ? 'যাত্রা শুরু / পিকআপ' : 'Pickup Hub';
      case 'nature':
        return language === 'bn' ? 'প্রাকৃতিক অভয়ারণ্য' : 'Nature & Wildlife';
      case 'stay':
        return language === 'bn' ? 'রাত্রিকালীন কটেজ' : 'Overnight Stay';
      case 'highlight':
      default:
        return language === 'bn' ? 'প্রধান আকর্ষণ' : 'Top Highlight';
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      
      {/* Top Map Control Bar */}
      <div className="bg-slate-900 text-white p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#f1c40f] animate-spin-slow" />
            <span className="font-bold text-sm sm:text-base">
              {language === 'bn' ? 'ভৌগোলিক ম্যাপ ও আকর্ষণীয় স্পট' : 'Visual Map & Highlight Markers'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {language === 'bn' ? mapConfig.regionName.bn : mapConfig.regionName.en} • {mapPoints.length} {language === 'bn' ? 'টি মূল লোকেশন' : 'Key Locations'}
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Mode Switcher */}
          <div className="flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setMapMode('embed')}
              className={`px-2.5 py-1 rounded font-medium transition cursor-pointer ${
                mapMode === 'embed' ? 'bg-[#113f31] text-[#f1c40f]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {language === 'bn' ? 'লাইভ ম্যাপ' : 'Interactive'}
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              className={`px-2.5 py-1 rounded font-medium transition cursor-pointer ${
                mapMode === 'satellite' ? 'bg-[#113f31] text-[#f1c40f]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {language === 'bn' ? 'স্যাটেলাইট' : 'Satellite'}
            </button>
          </div>

          {/* External Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f1c40f] text-[#113f31] text-xs font-bold hover:bg-amber-400 transition"
            title="Open in Google Maps"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Map View Area */}
      <div className="relative h-64 sm:h-80 w-full bg-slate-100 overflow-hidden">
        {mapMode === 'embed' ? (
          <iframe
            title={`Tour Map - ${tourTitle}`}
            src={embedUrl}
            className="w-full h-full border-0"
            loading="lazy"
          />
        ) : (
          /* Satellite / Topographic Graphic View */
          <div className="relative w-full h-full bg-[#1e293b] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 filter contrast-125 brightness-90"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
            
            {/* Visual Radar Grid Overlay */}
            <div className="relative z-10 text-center p-6 text-white max-w-md">
              <Layers className="w-8 h-8 text-[#f1c40f] mx-auto mb-2 opacity-90 animate-pulse" />
              <h4 className="text-base font-bold text-white mb-1">
                {language === 'bn' ? mapConfig.regionName.bn : mapConfig.regionName.en}
              </h4>
              <p className="text-xs text-slate-300 mb-3 font-mono">
                {selectedPoint ? `GPS: ${selectedPoint.lat.toFixed(4)}° N, ${selectedPoint.lng.toFixed(4)}° E` : ''}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs text-amber-300">
                <Navigation className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'হাই-রেজুলুশন লোকেশন স্যাটেলাইট ভিউ' : 'Precision Geographic Pin Point'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Selected Marker Floating Card over Map */}
        {selectedPoint && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-slate-200 z-10 text-slate-800 animate-fadeIn">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 ${getPointColor(selectedPoint.type)}`}>
                  {getPointBadgeLabel(selectedPoint.type)}
                </span>
                <h5 className="text-sm font-bold text-[#113f31]">
                  {language === 'bn' ? selectedPoint.name.bn : selectedPoint.name.en}
                </h5>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                {selectedPoint.lat.toFixed(3)}°, {selectedPoint.lng.toFixed(3)}°
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              {language === 'bn' ? selectedPoint.description.bn : selectedPoint.description.en}
            </p>
          </div>
        )}
      </div>

      {/* Interactive Marker Pins List */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
          <span>{language === 'bn' ? 'ট্যুরের প্রধান আকর্ষণীয় পয়েন্টসমূহ (ক্লিক করুন):' : 'Key Tour Points of Interest (Click to View):'}</span>
          <span className="text-[11px] text-emerald-800 font-normal">
            {language === 'bn' ? 'ম্যাপে পিন দেখতে ক্লিক করুন' : 'Click to inspect pin'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {mapPoints.map((point, index) => {
            const isSelected = selectedPointId === point.id;
            return (
              <button
                key={point.id}
                onClick={() => setSelectedPointId(point.id)}
                className={`p-2.5 rounded-xl text-left border transition flex items-start gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#113f31] shadow-sm ring-1 ring-[#113f31]'
                    : 'bg-white/70 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${getPointColor(point.type)}`}>
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h6 className="text-xs font-bold text-slate-900 truncate">
                      {language === 'bn' ? point.name.bn : point.name.en}
                    </h6>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {language === 'bn' ? point.description.bn : point.description.en}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
