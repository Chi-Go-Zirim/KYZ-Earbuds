import React from 'react';

interface LogoProps {
  className?: string; // Additional sizing or color text overrides
  iconOnly?: boolean;
  lightMode?: boolean; // For adapting text color context
}

export default function Logo({ className = '', iconOnly = false, lightMode = true }: LogoProps) {
  // Deep charcoal/ink base color for text & main parts, with the brand-color (electric lime #C5FF00) for vibrant contrast
  const textColor = lightMode ? 'text-ink' : 'text-white';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className} ${textColor}`}>
      {/* Precision recreated KYZ Earbuds Logo in Vector Format */}
      <div className="relative group/logo">
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 shrink-0 transition-transform duration-500 group-hover/logo:scale-110"
        >
          {/* Subtle electric lime ambient back-glow */}
          <circle cx="50" cy="46" r="30" fill="#C5FF00" className="opacity-10 blur-md" />

          {/* Outer Ear Arc Contour - Styled exactly as the high-end wireframe ear profile */}
          <path
            d="M50 78 C65 68 76 58 76 38 C76 18 56 12 40 18 C28 24 28 38 40 40"
            stroke="#C5FF00"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Ear Detail Outline - Sleek matching line */}
          <path
            d="M48 68 C58 59 66 51 66 38 C66 26 53 20 42 24 C34 28 35 36 41 38"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Inner Earbud Structure */}
          {/* Earbud Round Core Head */}
          <circle
            cx="48"
            cy="36"
            r="8"
            fill="currentColor"
            stroke="#C5FF00"
            strokeWidth="1.5"
          />

          {/* Earbud Stem - angled downwards mimicking high-fidelity in-ear placement */}
          <path
            d="M48 40 L44 56 C43.2 59.2 45.8 61 48 61 C50.2 61 52.2 59.2 51.5 56 L49 40"
            fill="currentColor"
            stroke="#C5FF00"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Precision Earbud Metallic Slit */}
          <path
            d="M48.5 45 L46.5 53"
            stroke={lightMode ? '#FAFDF0' : '#08080F'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none text-left">
          {/* Bold geometric "KYZ" typography utilizing display font */}
          <span className="font-display font-black text-2xl tracking-wide uppercase leading-none">
            KYZ
          </span>
          {/* Stylized small slogan with two clean indicator markers matching the official brand identity */}
          <span className="font-mono text-[7px] font-extrabold uppercase tracking-[0.2em] mt-1 leading-none block whitespace-nowrap opacity-75">
            — HEAR WHAT MATTERS —
          </span>
        </div>
      )}
    </div>
  );
}
