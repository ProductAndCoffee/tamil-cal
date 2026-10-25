import React from 'react';
import { DayPanchangam } from '../types/panchangam.ts';
import { Star, Moon, BookOpen, Sun, Sunset, Sparkles } from 'lucide-react';
import { TempleGraphic } from './TempleGraphic.tsx';

interface DailyCalendarSheetProps {
  panchangam: DayPanchangam;
}

export const DailyCalendarSheet: React.FC<DailyCalendarSheetProps> = ({ panchangam }) => {
  return (
    <div className="w-full print-page">
      {/* Authentic Tamil Calendar Sheet Frame */}
      <div className="relative bg-[#fcfbf7] rounded-lg border-2 border-[#c2b299] shadow-md p-3 sm:p-5 text-[#1b1c19]">
        
        {/* Brass Hanging Screws / Rivets Decoration */}
        <div className="absolute top-2 left-2.5 w-3.5 h-3.5 rounded-full border border-[#a89078] bg-gradient-to-br from-[#e6d3ba] to-[#997956] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#4a3520] rotate-45" />
        </div>
        <div className="absolute top-2 right-2.5 w-3.5 h-3.5 rounded-full border border-[#a89078] bg-gradient-to-br from-[#e6d3ba] to-[#997956] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#4a3520] -rotate-45" />
        </div>
        <div className="absolute bottom-2 left-2.5 w-3.5 h-3.5 rounded-full border border-[#a89078] bg-gradient-to-br from-[#e6d3ba] to-[#997956] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#4a3520] rotate-45" />
        </div>
        <div className="absolute bottom-2 right-2.5 w-3.5 h-3.5 rounded-full border border-[#a89078] bg-gradient-to-br from-[#e6d3ba] to-[#997956] shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#4a3520] -rotate-45" />
        </div>

        {/* Calendar Sheet Top Banner */}
        <div className="bg-[#5a0600] text-[#fef08a] px-3 py-1.5 rounded-t flex items-center justify-between text-xs sm:text-sm font-semibold font-serif-tamil tracking-wide shadow-xs border border-[#8b1e0f]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#fbbf24]">卐</span>
            <span>ஸ்ரீ சுபமுகூர்த்த திருப்பள்ளி நாட்காட்டி</span>
          </span>
          <span className="text-[11px] sm:text-xs text-[#fed7aa] font-medium font-sans">
            தினசரி ஏடு • பதிப்பு 82 卐
          </span>
        </div>

        {/* Sacred Invocation & Year Details */}
        <div className="pt-3 pb-2 text-center border-b border-[#ebdccb]">
          <div className="text-base sm:text-lg font-bold text-[#690600] font-serif-tamil tracking-wider flex items-center justify-center gap-2">
            <span className="text-[#b45309]">卐</span>
            <span>ஓம் ஸ்ரீ கணேசாய நமஹ</span>
            <span className="text-[#b45309]">卐</span>
          </div>

          <div className="mt-1.5 inline-block px-3 py-1 rounded bg-[#f6eee3] border border-[#ddcfbe] text-[11px] sm:text-xs text-[#78350f] font-medium font-serif-tamil">
            {panchangam.tamilYear} • {panchangam.ayana} • {panchangam.ruthu} • {panchangam.tamilMonthName} பிரவேசம்
          </div>
        </div>

        {/* Big Date Hero Container */}
        <div className="relative py-4 px-2 my-2 text-center rounded bg-gradient-to-b from-[#fdfcf9] to-[#f9f5ed] border border-[#e8dfd1] overflow-hidden">
          
          {/* Subtle Watermark Tamil Month Script behind Date */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-8">
            <span className="text-7xl sm:text-9xl font-bold font-serif-tamil text-[#690600] tracking-widest scale-125">
              {panchangam.tamilMonthName}
            </span>
          </div>

          {/* Month & Weekday Header Pills */}
          <div className="relative z-10 flex items-center justify-between px-2 sm:px-8 mb-2">
            <div className="px-4 py-1.5 rounded-full bg-[#5a0600] text-[#fffbeb] text-sm sm:text-base font-bold font-serif-tamil shadow-xs tracking-wide">
              {panchangam.tamilMonthName}
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[#5a0600] text-[#fffbeb] text-sm sm:text-base font-bold font-serif-tamil shadow-xs tracking-wide">
              {panchangam.tamilWeekday}
            </div>
          </div>

          {/* Giant Vermilion Date Number */}
          <div className="relative z-10 my-1">
            <div className="text-7xl sm:text-8xl md:text-9xl font-black font-serif-tamil text-[#8b1e0f] tracking-tight drop-shadow-xs leading-none">
              {panchangam.tamilDate}
            </div>
            <div className="text-xs sm:text-sm font-semibold font-serif-tamil text-[#78350f] mt-2">
              {panchangam.thithi.name}
            </div>
          </div>

          {/* Sunrise & Sunset Strip */}
          <div className="relative z-10 mt-3 pt-2 border-t border-[#ece2d4] text-[11px] sm:text-xs text-stone-600 font-medium flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>சூரிய உதயம்: <strong className="text-stone-800">{panchangam.sunrise}</strong></span>
            </span>
            <span className="text-stone-300">|</span>
            <span className="flex items-center gap-1">
              <Sunset className="w-3.5 h-3.5 text-orange-500" />
              <span>சூரிய அஸ்தமனம்: <strong className="text-stone-800">{panchangam.sunset}</strong></span>
            </span>
          </div>
        </div>

        {/* Feature Grid: Star & Tithi (2 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
          
          {/* Card 1: Nakshatram */}
          <div className="p-3 rounded bg-[#fdfaf4] border border-[#e5dcce] shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8b1e0f] font-serif-tamil border-b border-[#ede4d7] pb-1.5">
              <Star className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
              <span>இன்றைய நட்சத்திரம்</span>
            </div>

            <div className="mt-2">
              <div className="text-base sm:text-lg font-bold font-serif-tamil text-[#552300]">
                {panchangam.nakshatram.name} ({panchangam.nakshatram.translit})
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                {panchangam.nakshatram.durationText}
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-[#f0e7db] flex items-center gap-1.5 flex-wrap text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-[#faedd9] text-[#78350f] font-medium">
                யோகம்: {panchangam.yogam.name}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f5ede0] text-stone-700 font-medium">
                கரணம்: {panchangam.karanam.name}
              </span>
            </div>
          </div>

          {/* Card 2: Thithi */}
          <div className="p-3 rounded bg-[#fdfaf4] border border-[#e5dcce] shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8b1e0f] font-serif-tamil border-b border-[#ede4d7] pb-1.5">
              <Moon className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
              <span>திதி விவரம்</span>
            </div>

            <div className="mt-2">
              <div className="text-base sm:text-lg font-bold font-serif-tamil text-[#552300]">
                {panchangam.thithi.name}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                {panchangam.thithi.durationText}
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-[#f0e7db] flex items-center gap-1.5 flex-wrap text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-[#faedd9] text-[#78350f] font-medium">
                சந்திராஷ்டமம்: {panchangam.chandrashtamam.star}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#e8f5e9] text-[#1b5e20] font-medium">
                சுப யோக நன்னாள்
              </span>
            </div>
          </div>

        </div>

        {/* Special Events & Temple Festival Card */}
        <div className="p-3 sm:p-4 rounded bg-[#fdfbf6] border border-[#e5dcce] my-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#690600] font-serif-tamil border-b border-[#ebdccb] pb-2">
            <Sparkles className="w-4 h-4 text-[#d97706]" />
            <span>இன்றைய முக்கிய விசேஷங்கள் &amp; திருவிழாக்கள்</span>
          </div>

          <div className="mt-3 flex flex-col md:flex-row gap-3 items-center">
            {/* Visual Temple/Deity Artwork */}
            <div className="w-full md:w-44 shrink-0">
              <TempleGraphic type="meenakshi" className="w-full h-28 md:h-32" />
            </div>

            {/* Description Text */}
            <div className="flex-1 text-xs sm:text-sm text-stone-700 leading-relaxed font-serif-tamil">
              <p>
                {panchangam.specialEvents.description}
              </p>

              {/* Event Tags */}
              <div className="mt-2.5 flex items-center gap-1.5 flex-wrap text-[11px]">
                {panchangam.specialEvents.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#f5ede2] text-[#690600] border border-[#e6d8c6] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* English Reference & Other Eras */}
        <div className="py-2.5 px-3 rounded bg-[#f7f3ea] border border-[#e2d8c7] text-center my-2 text-[11px] sm:text-xs text-stone-700">
          <div className="font-semibold text-stone-900 font-garamond text-xs sm:text-sm">
            English Date: {panchangam.dayOfMonth}th {panchangam.monthNameEnglish} {panchangam.yearEnglish}, {panchangam.dayOfWeekEnglish}
            <span className="text-stone-400 font-normal"> | Gregorian Calendar</span>
          </div>
          <div className="mt-1 text-[10px] sm:text-[11px] text-[#78350f] font-serif-tamil flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <span>Hijri: {panchangam.eras.hijri}</span>
            <span>•</span>
            <span>Kollam Era: {panchangam.eras.kollam}</span>
            <span>•</span>
            <span>சக சகாப்தம்: {panchangam.eras.saka}</span>
          </div>
        </div>

        {/* Spiritual Wisdom: Thirukkural */}
        <div className="mt-3 p-3 sm:p-4 rounded bg-[#fffefb] border border-[#ebdccb] shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold text-[#8b1e0f] font-serif-tamil border-b border-[#f0e4d6] pb-2">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#b45309]" />
              <span>இன்றைய ஆன்மீக சிந்தனை &amp; திருக்குறள்</span>
            </span>
            <span className="text-[11px] text-[#9a3412] font-normal">
              {panchangam.thirukkural.athigaram}
            </span>
          </div>

          <div className="mt-3 text-center">
            <div className="text-sm sm:text-base font-bold font-serif-tamil text-[#690600] leading-relaxed">
              <p>{panchangam.thirukkural.kuralLine1}</p>
              <p>{panchangam.thirukkural.kuralLine2}</p>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-serif-tamil max-w-2xl mx-auto">
              {panchangam.thirukkural.porul}
            </p>

            <div className="mt-2.5 pt-2 border-t border-[#f2e7db] text-[11px] sm:text-xs text-[#78350f] font-medium font-serif-tamil">
              {panchangam.thirukkural.palan}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
