'use client';

import React from 'react';

interface GenesisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'red' | 'white' | 'dark' | 'badge';
}

export const GenesisLogo: React.FC<GenesisLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'badge',
}) => {
  const sizeMap = {
    sm: { icon: 32, font: 'text-base', sub: 'text-[9px]' },
    md: { icon: 42, font: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 54, font: 'text-2xl', sub: 'text-[12px]' },
    xl: { icon: 72, font: 'text-3xl', sub: 'text-[14px]' },
  };

  const currentSize = sizeMap[size];

  // Colors
  const isBadge = variant === 'badge';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem Container */}
      <div
        className={`relative flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-sm ${
          isBadge
            ? 'bg-[#8B0000] text-white p-2 border border-[#700000]'
            : variant === 'red'
            ? 'text-[#8B0000]'
            : variant === 'dark'
            ? 'text-neutral-900'
            : 'text-white'
        }`}
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Exact brand emblem matching user uploaded logo image */}
          <g transform="translate(0, 0)">
            {/* Outer fluid ribbon emblem */}
            <path
              d="M 82 22 
                 C 98 22, 124 35, 145 62 
                 C 170 95, 185 120, 175 138 
                 C 166 154, 144 148, 134 130 
                 C 125 114, 122 98, 108 98 
                 C 96 98, 90 114, 85 130 
                 C 76 158, 86 178, 102 178 
                 C 118 178, 128 164, 116 150 
                 C 106 138, 126 128, 138 138 
                 C 152 150, 134 190, 102 190 
                 C 70 190, 56 162, 65 130 
                 C 72 106, 80 84, 66 66 
                 C 54 50, 38 60, 26 78 
                 C 16 94, 14 112, 26 112 
                 C 38 112, 46 94, 60 76 
                 C 72 60, 72 22, 82 22 Z"
              fill="currentColor"
            />
            {/* Left accent swoosh tip */}
            <path
              d="M 72 65 
                 C 52 82, 28 108, 22 125 
                 C 16 142, 34 152, 50 138 
                 C 64 125, 56 108, 68 88 Z"
              fill="currentColor"
            />
            {/* Central 4-point diamond star cutout */}
            <path
              d="M 122 72 
                 Q 130 86, 146 90 
                 Q 130 94, 122 108 
                 Q 114 94, 98 90 
                 Q 114 86, 122 72 Z"
              fill={isBadge ? '#8B0000' : (variant === 'red' ? '#ffffff' : '#8B0000')}
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif tracking-widest font-bold uppercase ${currentSize.font} ${
              variant === 'white' ? 'text-white' : 'text-neutral-900'
            }`}
          >
            GENESIS
          </span>
          <span
            className={`tracking-[0.25em] font-medium uppercase mt-1 ${currentSize.sub} ${
              variant === 'white' ? 'text-neutral-300' : 'text-[#8B0000]'
            }`}
          >
            GRUPO S.A
          </span>
        </div>
      )}
    </div>
  );
};
