import React from 'react';

export const VillageSunsetSVG = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-label="Sunset over a river with a boat">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f6a35b" />
        <stop offset="1" stopColor="#f9d9a0" />
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#g1)" />
    <circle cx="280" cy="95" r="34" fill="#d63a3a" />
    <rect y="110" width="400" height="90" fill="#2f8f6b" />
    <path d="M0 125q50-10 100 0t100 0 100 0 100 0" stroke="#bfe6d4" strokeWidth="3" fill="none" opacity=".7" />
    <path d="M0 150q50-10 100 0t100 0 100 0 100 0" stroke="#bfe6d4" strokeWidth="3" fill="none" opacity=".6" />
    <path d="M120 135h90q-10 16-30 16h-30q-20 0-30-16z" fill="#5a3a22" />
    <path d="M165 135V100l30 35z" fill="#fff" />
    <rect x="30" y="80" width="5" height="40" fill="#4a3320" />
    <path d="M32 80q-22 2-28 16M32 80q22 2 28 16M32 80q-6-18-20-22M32 80q6-18 20-22" stroke="#0b6b3a" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

export const TeaGardensSVG = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-label="Rolling tea garden hills">
    <defs>
      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#bfe3f2" />
        <stop offset="1" stopColor="#eaf6ee" />
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#g2)" />
    <path d="M0 110q80-50 170-10t230-20v120H0z" fill="#6bb56f" />
    <path d="M0 140q100-40 200-5t200-15v80H0z" fill="#3f9a55" />
    <path d="M0 175q120-30 240-5t160-10v40H0z" fill="#26763f" />
    <g stroke="#1d5c32" strokeWidth="2" opacity=".5" fill="none">
      <path d="M20 160q60-12 120-4" />
      <path d="M180 150q60-10 120-2" />
      <path d="M60 185q80-14 160-6" />
    </g>
    <circle cx="330" cy="45" r="20" fill="#fff6c9" />
  </svg>
);

export const MangroveSundarbansSVG = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-label="Mangrove forest and river">
    <defs>
      <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#9ccfc0" />
        <stop offset="1" stopColor="#d6efe2" />
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#g3)" />
    <rect y="130" width="400" height="70" fill="#2b6f78" />
    <g fill="#14532d">
      <circle cx="30" cy="105" r="32" />
      <circle cx="85" cy="95" r="38" />
      <circle cx="150" cy="108" r="30" />
      <circle cx="250" cy="100" r="34" />
      <circle cx="315" cy="92" r="40" />
      <circle cx="375" cy="108" r="30" />
    </g>
    <rect y="118" width="400" height="14" fill="#14532d" />
    <path d="M0 150q50-8 100 0t100 0 100 0 100 0" stroke="#bfe6e3" strokeWidth="3" fill="none" opacity=".6" />
    <path d="M0 175q50-8 100 0t100 0 100 0 100 0" stroke="#bfe6e3" strokeWidth="3" fill="none" opacity=".5" />
    <path d="M160 160h80q-8 12-24 12h-32q-16 0-24-12z" fill="#7a4b27" />
  </svg>
);
