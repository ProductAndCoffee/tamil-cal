import React, { useState } from 'react';
import { MainViewTab, CityInfo, DayPanchangam } from '../types/panchangam.ts';
import { CITIES } from '../data/cities.ts';
import { MapPin, ChevronDown, Check } from 'lucide-react';

interface TopHeaderProps {
  currentTab: MainViewTab;
  onSelectTab: (tab: MainViewTab) => void;
  selectedCity: CityInfo;
  onSelectCity: (city: CityInfo) => void;
  panchangam: DayPanchangam;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedCity,
  onSelectCity,
  panchangam,
}) => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Brand Wordmark Zone */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onSelectTab('today')}
              className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e0f] rounded"
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

            {/* Mobile City Selector Trigger */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#d5c7b3] text-xs font-medium text-[#690600]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#b45309]" />
                <span>{selectedCity.nameTamil}</span>
                <ChevronDown className="w-3 h-3 text-[#78350f]" />
              </button>
            </div>
          </div>

          {/* Navigation Items (Segmented Tabs) */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
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

          {/* Desktop City Selector & Live Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4ece1] hover:bg-[#ebdcc8] border border-[#d5c7b3] text-xs font-semibold text-[#690600] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
                title="இருப்பிடத்தை மாற்றவும்"
              >
                <MapPin className="w-3.5 h-3.5 text-[#b45309]" />
                <span className="font-serif-tamil">{selectedCity.nameTamil}</span>
                <span className="text-[10px] text-[#78350f] font-mono">• நேரலை</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#78350f]" />
              </button>

              {/* City Dropdown Menu */}
              {isCityDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCityDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-60 bg-white rounded-lg shadow-xl border border-[#d5c7b3] py-1.5 z-50 divide-y divide-[#f2ece3]">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-[#78350f] uppercase tracking-wider bg-[#faf7f2]">
                      நகரத்தை தேர்ந்தெடுக்கவும்
                    </div>
                    <div className="max-h-64 overflow-y-auto py-1">
                      {CITIES.map((c) => {
                        const isSelected = c.id === selectedCity.id;
                        return (
                          <button
                            key={c.id}
                            onClick={() => {
                              onSelectCity(c);
                              setIsCityDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#fbf4ea] transition-colors ${
                              isSelected ? 'bg-[#f8ede0] font-bold text-[#690600]' : 'text-stone-700'
                            }`}
                          >
                            <div>
                              <div className="font-medium font-serif-tamil">{c.nameTamil}</div>
                              <div className="text-[10px] text-stone-500">{c.nameEnglish}, {c.country}</div>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#8b1e0f]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
