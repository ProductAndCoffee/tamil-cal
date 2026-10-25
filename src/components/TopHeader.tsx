import React from 'react';
import { MainViewTab, DayPanchangam } from '../types/panchangam.ts';

interface TopHeaderProps {
  currentTab: MainViewTab;
  onSelectTab: (tab: MainViewTab) => void;
  panchangam: DayPanchangam;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentTab,
  onSelectTab,
  panchangam,
}) => {
  const navItems: { id: MainViewTab; label: string }[] = [
    { id: 'today', label: 'இன்றைய நாட்காட்டி' },
    { id: 'monthly', label: 'மாதக் காலண்டர்' },
    { id: 'muhurtham', label: 'சுப முகூர்த்த நாட்கள்' },
    { id: 'festivals', label: 'பண்டிகைகள்' },
    { id: 'glossary', label: 'பஞ்சாங்கக் குறிப்புகள்' },
  ];

  return (
    <header className="w-full shadow-sm select-none">
      {/* Upper Sacred Sanskrit/Tamil Inscription Bar */}
      <div className="w-full bg-[#690600] text-[#fef08a] px-3 py-1 text-center text-[11px] sm:text-xs tracking-wider flex items-center justify-between overflow-x-auto whitespace-nowrap border-b border-[#8b1e0f]">
        <span className="text-[#fbbf24] font-semibold hidden md:inline">卐 ஸ்ரீ கணேசாய நமஹ • சுபமஸ்து</span>
        <span className="mx-auto font-medium font-serif-tamil text-[#fffbeb] drop-shadow-sm">
          {panchangam.tamilYear} • {panchangam.ayana} • {panchangam.ruthu} • புண்ணிய காலம்
        </span>
        <span className="text-[#fbbf24] font-semibold hidden md:inline">ஸ்ரீ நாராயண பிரசன்னம் 卐</span>
      </div>

      {/* Main App Bar */}
      <div className="bg-[#fcfbf8] border-b border-[#e5dfd3] px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
          
          {/* Brand Wordmark Zone */}
          <div className="flex items-center justify-between shrink-0">
            <button
              onClick={() => onSelectTab('today')}
              className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e0f] rounded cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b1e0f] to-[#550600] flex items-center justify-center text-[#fef08a] font-bold text-xl shadow-md border border-[#fbbf24]/50 group-hover:scale-105 transition-transform">
                卐
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold font-serif-tamil text-[#690600] tracking-tight leading-tight">
                  ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம்
                </h1>
                <p className="text-[10px] sm:text-[11px] tracking-widest text-[#78350f] font-grotesk font-semibold uppercase">
                  Tamil Divine Ephemeris &amp; Daily Almanac
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Items (Segmented Tabs - All Visible Without Horizontal Scroll on Desktop/Tablet) */}
          <nav className="flex flex-wrap items-center gap-1 sm:gap-1.5 py-0.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#690600] text-white shadow-sm ring-1 ring-[#8b1e0f]'
                      : 'text-[#44382c] hover:bg-[#eae2d3] hover:text-[#690600]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

        </div>
      </div>
    </header>
  );
};
