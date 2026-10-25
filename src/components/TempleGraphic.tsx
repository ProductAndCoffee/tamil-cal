import React from 'react';

interface TempleGraphicProps {
  className?: string;
  type?: 'gopuram' | 'meenakshi' | 'diya';
  altText?: string;
}

export const TempleGraphic: React.FC<TempleGraphicProps> = ({
  className = 'w-full h-36',
  type = 'gopuram',
  altText = 'தெய்வீக திருக்கோயில் தோற்றம்',
}) => {
  if (type === 'meenakshi') {
    return (
      <div 
        className={`relative overflow-hidden rounded bg-gradient-to-b from-[#4a0d07] via-[#7a1a0d] to-[#2b0502] flex items-center justify-center border border-[#d97706]/40 shadow-inner ${className}`}
        role="img"
        aria-label={altText}
      >
        {/* Sacred temple arch motif */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Divine Sanctum Silhouette */}
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="goldGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="vermilionGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <radialGradient id="deityHalo" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Golden Divine Aura */}
          <circle cx="200" cy="110" r="85" fill="url(#deityHalo)" />

          {/* Temple Prabhavali Arch */}
          <path
            d="M 120 180 C 120 70, 280 70, 280 180"
            fill="none"
            stroke="url(#goldGlow)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Flame rays on Arch */}
          {[140, 160, 180, 200, 220, 240, 260].map((x, i) => (
            <circle key={i} cx={x} cy={72 + Math.sin((i / 6) * Math.PI) * -15} r="4" fill="#fbbf24" />
          ))}

          {/* Meenakshi Sundareswarar Kalyana Peedam */}
          <rect x="135" y="165" width="130" height="25" rx="3" fill="#b45309" stroke="#fef08a" strokeWidth="1" />
          
          {/* Devi Meenakshi & Lord Sundareswarar Silhouettes */}
          {/* Sundareswarar (Left) */}
          <path d="M 160 165 C 160 125, 175 125, 175 165 Z" fill="#fef08a" opacity="0.9" />
          <circle cx="167" cy="118" r="9" fill="#fef08a" />
          <path d="M 162 108 L 172 108 L 167 100 Z" fill="#f59e0b" /> {/* Jata Makuta */}

          {/* Devi Meenakshi (Right) */}
          <path d="M 225 165 C 225 128, 240 128, 240 165 Z" fill="#fef08a" opacity="0.95" />
          <circle cx="232" cy="120" r="8" fill="#fef08a" />
          <path d="M 228 111 L 236 111 L 232 103 Z" fill="#f59e0b" /> {/* Kireedam */}
          <circle cx="242" cy="130" r="3" fill="#34d399" /> {/* Kili (Green Parrot) */}

          {/* Garlands & Floral Toranam */}
          <path d="M 155 135 Q 200 160 245 135" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="3,3" />

          {/* Brass Diya Lamps on sides */}
          <path d="M 100 175 L 115 175 L 112 185 L 103 185 Z" fill="#f59e0b" />
          <path d="M 107 175 Q 107 163 110 165 Q 107 160 105 165 Z" fill="#fef08a" />
          <path d="M 285 175 L 300 175 L 297 185 L 288 185 Z" fill="#f59e0b" />
          <path d="M 292 175 Q 292 163 295 165 Q 292 160 290 165 Z" fill="#fef08a" />

          {/* Foreground Title Banner */}
          <rect x="70" y="200" width="260" height="26" rx="4" fill="#690600" stroke="#f59e0b" strokeWidth="1" />
          <text x="200" y="217" textAnchor="middle" fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="Noto Sans Tamil">
            மதுரை அருள்மிகு மீனாட்சி சுந்தரேஸ்வரர்
          </text>
        </svg>
      </div>
    );
  }

  // Majestic Golden Gopuram (Default)
  return (
    <div 
      className={`relative overflow-hidden rounded bg-gradient-to-b from-[#1c1917] via-[#3b120c] to-[#1a0502] flex items-center justify-center border border-[#d97706]/40 shadow-inner ${className}`}
      role="img"
      aria-label={altText}
    >
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <svg viewBox="0 0 500 240" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="gopuramGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <radialGradient id="skyGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#7c2d12" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1c1917" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Evening Sky Glow */}
        <rect width="500" height="240" fill="url(#skyGlow)" />

        {/* 9-Tier Grand Dravidian Gopuram (Rajagopuram) */}
        {/* Base Tier 1 */}
        <polygon points="170,220 330,220 320,195 180,195" fill="url(#gopuramGold)" />
        {/* Tier 2 */}
        <polygon points="182,195 318,195 310,172 190,172" fill="url(#gopuramGold)" opacity="0.95" />
        {/* Tier 3 */}
        <polygon points="192,172 308,172 301,151 199,151" fill="url(#gopuramGold)" opacity="0.92" />
        {/* Tier 4 */}
        <polygon points="201,151 299,151 293,132 207,132" fill="url(#gopuramGold)" opacity="0.9" />
        {/* Tier 5 */}
        <polygon points="209,132 291,132 286,115 214,115" fill="url(#gopuramGold)" opacity="0.88" />
        {/* Tier 6 */}
        <polygon points="216,115 284,115 280,100 220,100" fill="url(#gopuramGold)" opacity="0.85" />
        {/* Tier 7 */}
        <polygon points="222,100 278,100 274,87 226,87" fill="url(#gopuramGold)" opacity="0.82" />
        {/* Tier 8 */}
        <polygon points="228,87 272,87 268,76 232,76" fill="url(#gopuramGold)" opacity="0.8" />
        {/* Crown Barrel Vault (Salashikara) */}
        <path d="M 230 76 Q 250 62 270 76 Z" fill="#fef08a" />
        {/* Golden Kalasams (Kalasam Pinacles) */}
        {[236, 243, 250, 257, 264].map((kx, i) => (
          <g key={i}>
            <circle cx={kx} cy="63" r="2.2" fill="#fef08a" />
            <line x1={kx} y1="63" x2={kx} y2="58" stroke="#fef08a" strokeWidth="1.2" />
          </g>
        ))}

        {/* Gopuram Windows / Sculptural Niches */}
        <rect x="242" y="198" width="16" height="18" rx="2" fill="#2b0502" />
        <rect x="244" y="175" width="12" height="14" rx="2" fill="#2b0502" />
        <rect x="245" y="154" width="10" height="12" rx="2" fill="#2b0502" />
        <rect x="246" y="135" width="8" height="10" rx="1.5" fill="#2b0502" />

        {/* Flanking Temple Mandapam Pillars */}
        <rect x="70" y="200" width="85" height="20" fill="#78350f" opacity="0.6" />
        <rect x="345" y="200" width="85" height="20" fill="#78350f" opacity="0.6" />
        {[80, 105, 130, 360, 385, 410].map((px, i) => (
          <rect key={i} x={px} y="180" width="6" height="20" fill="#b45309" />
        ))}

        {/* Golden Temple Oil Lamps (Kuthuvilakku) */}
        <circle cx="95" cy="170" r="3" fill="#fef08a" />
        <circle cx="400" cy="170" r="3" fill="#fef08a" />

        {/* Text Ribbon */}
        <rect x="80" y="208" width="340" height="24" rx="4" fill="#690600" stroke="#f59e0b" strokeWidth="0.75" />
        <text x="250" y="224" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="Noto Sans Tamil">
          மதுரை ஸ்ரீ மீனாட்சி அம்மன் அருள்மிகு ஆலயம்
        </text>
      </svg>
    </div>
  );
};
