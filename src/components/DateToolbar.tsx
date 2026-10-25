import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Printer,
  Share2,
  Check,
  MapPin,
  ChevronDown,
  Circle,
} from 'lucide-react';
import { CityInfo, DayPanchangam } from '../types/panchangam.ts';
import { CITIES } from '../data/cities.ts';
import { getNextAmavasya } from '../utils/panchangamCalculator.ts';

interface DateToolbarProps {
  currentDate: Date;
  onPrevDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
  onSelectDate: (date: Date) => void;
  selectedCity: CityInfo;
  onSelectCity: (city: CityInfo) => void;
  panchangam: DayPanchangam;
}

export const DateToolbar: React.FC<DateToolbarProps> = ({
  currentDate,
  onPrevDay,
  onNextDay,
  onToday,
  onSelectDate,
  selectedCity,
  onSelectCity,
  panchangam,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  // Format date as DD/MM/YYYY for Indian/Tamil convention
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDisplay = `${day}/${month}/${year}`;
  const inputDateValue = `${year}-${month}-${day}`;

  const nextAmavasya = useMemo(
    () => getNextAmavasya(currentDate, selectedCity),
    [currentDate, selectedCity],
  );
  const amavasyaDateLabel = nextAmavasya?.date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const [y, m, d] = e.target.value.split('-').map(Number);
      onSelectDate(new Date(y, m - 1, d));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    setCopied(false);
    setShareError(false);
    const textToCopy = `ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம் - ${panchangam.tamilDate} ${panchangam.tamilMonthName} (${formattedDisplay})\nநல்ல நேரம்: ${panchangam.nallaNeram.morning}\nநட்சத்திரம்: ${panchangam.nakshatram.name}\nதிதி: ${panchangam.thithi.name}\n${window.location.href}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareError(true);
    }
  };

  return (
    <div className="w-full bg-[#fbf9f3] border-b border-[#e5dfd3] py-2 px-3 sm:px-6 no-print">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onPrevDay}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#d5c7b3] bg-white text-xs font-medium text-[#552300] hover:bg-[#f4ece1] active:scale-95 transition-all shadow-2xs cursor-pointer"
            title="முந்தைய நாள்"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-serif-tamil">முந்தைய நாள்</span>
          </button>

          <button
            onClick={onToday}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#690600] text-[#fef08a] hover:bg-[#8b1e0f] active:scale-95 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            title="இன்றைய நாள்"
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#fbbf24]" />
            <span className="font-serif-tamil">இன்று (Today)</span>
          </button>

          <button
            onClick={onNextDay}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#d5c7b3] bg-white text-xs font-medium text-[#552300] hover:bg-[#f4ece1] active:scale-95 transition-all shadow-2xs cursor-pointer"
            title="அடுத்த நாள்"
          >
            <span className="hidden sm:inline font-serif-tamil">அடுத்த நாள்</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* City Selector, Date Selector & Action Tools */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* City Picker (Matched to Date Picker height, border, and radius) */}
          <div className="relative flex items-center">
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#d5c7b3] hover:border-[#8b1e0f] hover:bg-[#f4ece1] rounded-md shadow-2xs text-xs font-medium text-[#690600] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b1e0f]"
              title="இருப்பிடத்தை மாற்றவும்"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8b1e0f]" />
              <span className="font-serif-tamil font-semibold">{selectedCity.nameTamil}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#78350f]" />
            </button>

            {isCityDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsCityDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1.5 w-60 bg-white rounded-lg shadow-xl border border-[#d5c7b3] py-1.5 z-50 divide-y divide-[#f2ece3]">
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
                          className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#fbf4ea] transition-colors cursor-pointer ${
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

          {/* Calendar Date Picker Dial */}
          <div className="relative flex items-center">
            <label className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#d5c7b3] hover:border-[#8b1e0f] rounded-md shadow-2xs cursor-pointer group">
              <CalendarIcon className="w-3.5 h-3.5 text-[#8b1e0f]" />
              <span className="text-xs font-mono font-medium text-stone-800 tracking-wider">
                {formattedDisplay}
              </span>
              <input
                type="date"
                value={inputDateValue}
                onChange={handleNativeDateChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                aria-label="தேதியைத் தேர்ந்தெடுக்கவும்"
              />
            </label>
          </div>

          {nextAmavasya && (
            <div className="flex items-center gap-2 rounded-md border border-[#d5c7b3] bg-[#f4eee3] pr-3 text-[#690600]">
              <button
                type="button"
                onClick={() => onSelectDate(nextAmavasya.date)}
                aria-label={`Go to Amavasya on ${amavasyaDateLabel}`}
                title={`அமாவாசை • ${amavasyaDateLabel}`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md hover:bg-[#e8dcc8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e0f] cursor-pointer"
              >
                <Circle aria-hidden="true" className="h-4 w-4 fill-current" />
              </button>
              <div className="text-[11px] leading-tight" title="Days from the selected calendar date">
                <div className="font-semibold">அமாவாசை · {nextAmavasya.daysUntil === 0 ? 'Today' : `In ${nextAmavasya.daysUntil} ${nextAmavasya.daysUntil === 1 ? 'day' : 'days'}`}</div>
                <div className="mt-0.5 font-sans text-stone-600">{amavasyaDateLabel}</div>
              </div>
            </div>
          )}

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="p-1.5 rounded-md border border-[#d5c7b3] bg-white text-stone-700 hover:text-[#690600] hover:bg-[#f4ece1] transition-colors shadow-2xs cursor-pointer"
            title="காலண்டர் தாள் அச்சிடுக (Print Sheet)"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Share Button with Toast */}
          <div className="relative">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-md border border-[#d5c7b3] bg-white text-stone-700 hover:text-[#690600] hover:bg-[#f4ece1] transition-colors shadow-2xs cursor-pointer"
              title="பஞ்சாங்க தகவலைப் பகிர்க (Share)"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            {(copied || shareError) && (
              <span role="status" aria-live="polite" className="absolute -bottom-8 right-0 bg-[#690600] text-white text-[10px] font-sans px-2 py-0.5 rounded shadow whitespace-nowrap z-30">
                {shareError ? 'நகலெடுக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.' : 'நகலெடுக்கப்பட்டது!'}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
