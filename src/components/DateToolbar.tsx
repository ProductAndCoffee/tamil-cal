import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Printer, Share2, Check } from 'lucide-react';
import { DayPanchangam } from '../types/panchangam.ts';

interface DateToolbarProps {
  currentDate: Date;
  onPrevDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
  onSelectDate: (date: Date) => void;
  panchangam: DayPanchangam;
}

export const DateToolbar: React.FC<DateToolbarProps> = ({
  currentDate,
  onPrevDay,
  onNextDay,
  onToday,
  onSelectDate,
  panchangam,
}) => {
  const [copied, setCopied] = useState(false);

  // Format date as DD/MM/YYYY for Indian/Tamil convention
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDisplay = `${day}/${month}/${year}`;
  const inputDateValue = `${year}-${month}-${day}`;

  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const [y, m, d] = e.target.value.split('-').map(Number);
      onSelectDate(new Date(y, m - 1, d));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const textToCopy = `ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம் - ${panchangam.tamilDate} ${panchangam.tamilMonthName} (${formattedDisplay})\nநல்ல நேரம்: ${panchangam.nallaNeram.morning}\nநட்சத்திரம்: ${panchangam.nakshatram.name}\nதிதி: ${panchangam.thithi.name}\n${window.location.href}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#fbf9f3] border-b border-[#e5dfd3] py-2 px-3 sm:px-6 no-print">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onPrevDay}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#d5c7b3] bg-white text-xs font-medium text-[#552300] hover:bg-[#f4ece1] active:scale-95 transition-all shadow-2xs"
            title="முந்தைய நாள்"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-serif-tamil">முந்தைய நாள்</span>
          </button>

          <button
            onClick={onToday}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#690600] text-[#fef08a] hover:bg-[#8b1e0f] active:scale-95 text-xs font-semibold shadow-sm transition-all"
            title="இன்றைய நாள்"
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#fbbf24]" />
            <span className="font-serif-tamil">இன்று (Today)</span>
          </button>

          <button
            onClick={onNextDay}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#d5c7b3] bg-white text-xs font-medium text-[#552300] hover:bg-[#f4ece1] active:scale-95 transition-all shadow-2xs"
            title="அடுத்த நாள்"
          >
            <span className="hidden sm:inline font-serif-tamil">அடுத்த நாள்</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Date Selector & Action Tools */}
        <div className="flex items-center gap-2">
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

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="p-1.5 rounded-md border border-[#d5c7b3] bg-white text-stone-700 hover:text-[#690600] hover:bg-[#f4ece1] transition-colors shadow-2xs"
            title="காலண்டர் தாள் அச்சிடுக (Print Sheet)"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Share Button with Toast */}
          <div className="relative">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-md border border-[#d5c7b3] bg-white text-stone-700 hover:text-[#690600] hover:bg-[#f4ece1] transition-colors shadow-2xs"
              title="பஞ்சாங்க தகவலைப் பகிர்க (Share)"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            {copied && (
              <span className="absolute -bottom-8 right-0 bg-[#690600] text-white text-[10px] font-sans px-2 py-0.5 rounded shadow whitespace-nowrap z-30">
                நகலெடுக்கப்பட்டது!
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
