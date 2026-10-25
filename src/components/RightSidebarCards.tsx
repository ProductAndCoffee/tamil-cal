import React from 'react';
import { DayPanchangam, CityInfo } from '../types/panchangam.ts';
import { getUpcomingVirathams } from '../utils/panchangamCalculator.ts';
import { Clock, AlertTriangle, Flame, Bell, ChevronRight } from 'lucide-react';
import { TempleGraphic } from './TempleGraphic.tsx';

interface RightSidebarCardsProps {
  panchangam: DayPanchangam;
  selectedCity: CityInfo;
  onSelectDateString?: (dateStr: string) => void;
}

export const RightSidebarCards: React.FC<RightSidebarCardsProps> = ({
  panchangam,
  selectedCity,
  onSelectDateString,
}) => {
  // Upcoming Virathams (dynamically computed from panchangam.date)
  const upcomingVirathams = getUpcomingVirathams(panchangam.date, selectedCity);

  return (
    <div className="w-full flex flex-col gap-3.5 select-none">
      
      {/* Card 1: Auspicious Timings (சுப மங்கல நேரங்கள்) */}
      <div className="rounded-lg bg-[#fdfbf6] border border-[#e5dcce] p-3.5 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#ebdccb] pb-2">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#690600] font-serif-tamil">
            <Clock className="w-4 h-4 text-[#b45309]" />
            <span>சுப மங்கல நேரங்கள்</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[10px] font-bold font-serif-tamil border border-[#fde68a]">
            சுப காலம்
          </span>
        </div>

        <div className="mt-3 space-y-2.5 text-xs">
          {/* Nalla Neram */}
          <div className="flex items-start justify-between">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
              நல்ல நேரம்:
            </span>
            <div className="text-right text-stone-700 font-mono text-[11px]">
              <div>{panchangam.nallaNeram.morning}</div>
              <div className="text-stone-500">{panchangam.nallaNeram.evening}</div>
            </div>
          </div>

          {/* Gowri Nalla Neram */}
          <div className="flex items-start justify-between pt-1.5 border-t border-[#f2e7db]">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
              கௌரி நல்ல நேரம்:
            </span>
            <div className="text-right text-stone-700 font-mono text-[11px]">
              <div>{panchangam.gowriNallaNeram.morning}</div>
              <div className="text-stone-500">{panchangam.gowriNallaNeram.evening}</div>
            </div>
          </div>

          {/* Brahma Muhurtham */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#f2e7db]">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
              பிரம்ம முகூர்த்தம்:
            </span>
            <span className="text-stone-800 font-mono font-medium text-[11px]">
              {panchangam.brahmaMuhurtham}
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Inauspicious Timings (கவனிக்க வேண்டிய நேரங்கள்) */}
      <div className="rounded-lg bg-[#fdfaf7] border border-[#f3d9d3] p-3.5 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#f4cfc6] pb-2">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8b1e0f] font-serif-tamil">
            <AlertTriangle className="w-4 h-4 text-[#ba1a1a]" />
            <span>கவனிக்க வேண்டிய நேரங்கள்</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] text-[10px] font-bold font-serif-tamil border border-[#ffb4a6]">
            வர்ஜ்யம்
          </span>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          {/* Rahu Kalam */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              ராகு காலம் (Rahu):
            </span>
            <span className="text-stone-800 font-mono font-medium text-[11px]">
              {panchangam.rahuKalam}
            </span>
          </div>

          {/* Yamagandam */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#fae8e5]">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 inline-block" />
              எமகண்டம் (Yamam):
            </span>
            <span className="text-stone-800 font-mono font-medium text-[11px]">
              {panchangam.yamagandam}
            </span>
          </div>

          {/* Kuligai */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#fae8e5]">
            <span className="font-semibold text-stone-800 font-serif-tamil flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
              குளிகை (Kuligai):
            </span>
            <span className="text-stone-800 font-mono font-medium text-[11px]">
              {panchangam.kuligai}
            </span>
          </div>

          {/* Soolam & Remedy */}
          <div className="pt-2 border-t border-[#fae8e5] text-[11px] text-stone-700 font-serif-tamil">
            <div className="flex items-center justify-between">
              <span>சூலம் (Direction): <strong>{panchangam.soolam.direction}</strong></span>
              <span>பரிகாரம்: <strong>{panchangam.soolam.remedy}</strong></span>
            </div>
          </div>

          {/* Chandrashtamam Warning Alert Block */}
          <div className="mt-3 p-2.5 rounded bg-[#fff0ed] border border-[#f5b8ad] flex items-center justify-between gap-2">
            <div className="text-[11px] text-[#7a180b] font-serif-tamil leading-tight">
              <div className="font-bold">சந்திராஷ்டம நட்சத்திரம்:</div>
              <div className="text-[10px] text-stone-600 mt-0.5">இன்று புதிய முயற்சிகளை தவிர்க்கவும்</div>
            </div>
            <div className="px-3 py-1 rounded bg-[#8b1e0f] text-white text-xs font-bold font-serif-tamil shadow-xs whitespace-nowrap">
              {panchangam.chandrashtamam.star}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Temple Pooja Timings (திருக்கோயில் பூஜை காலங்கள்) */}
      <div className="rounded-lg bg-[#fdfbf6] border border-[#e5dcce] p-3.5 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#ebdccb] pb-2">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#690600] font-serif-tamil">
            <Flame className="w-4 h-4 text-[#d97706]" />
            <span>திருக்கோயில் பூஜை காலங்கள்</span>
          </div>
          <span className="text-[10px] text-stone-500 font-serif-tamil">நாள்தோறும்</span>
        </div>

        {/* 4 Kala Pooja Timings Grid */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[11px] font-serif-tamil">
          <div className="p-2 rounded bg-[#f7f2e9] border border-[#e8ded0]">
            <div className="text-stone-500 text-[10px]">உஷத் காலம்</div>
            <div className="font-mono font-bold text-[#690600] mt-0.5">
              {panchangam.templePoojaTimings.ushathKalam}
            </div>
          </div>

          <div className="p-2 rounded bg-[#f7f2e9] border border-[#e8ded0]">
            <div className="text-stone-500 text-[10px]">காலசந்தி</div>
            <div className="font-mono font-bold text-[#690600] mt-0.5">
              {panchangam.templePoojaTimings.kalasanthi}
            </div>
          </div>

          <div className="p-2 rounded bg-[#f7f2e9] border border-[#e8ded0]">
            <div className="text-stone-500 text-[10px]">உச்சிக்காலம்</div>
            <div className="font-mono font-bold text-[#690600] mt-0.5">
              {panchangam.templePoojaTimings.uchikalam}
            </div>
          </div>

          <div className="p-2 rounded bg-[#f7f2e9] border border-[#e8ded0]">
            <div className="text-stone-500 text-[10px]">சாயரட்சை</div>
            <div className="font-mono font-bold text-[#690600] mt-0.5">
              {panchangam.templePoojaTimings.sayaratchai}
            </div>
          </div>
        </div>

        {/* Temple Visual Artwork */}
        <div className="mt-3">
          <TempleGraphic type="gopuram" className="w-full h-32" altText="மீனாட்சி அம்மன் ஆலயம்" />
        </div>
      </div>

      {/* Card 4: Upcoming Fasting / Viratham Days (அடுத்து வரும் விரத நாட்கள்) */}
      <div className="rounded-lg bg-[#fdfbf6] border border-[#e5dcce] p-3.5 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#ebdccb] pb-2">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#690600] font-serif-tamil">
            <Bell className="w-4 h-4 text-[#b45309]" />
            <span>அடுத்து வரும் விரத நாட்கள்</span>
          </div>
        </div>

        <div className="mt-2.5 divide-y divide-[#f2e7db]">
          {upcomingVirathams.map((v, i) => (
            <button
              key={i}
              onClick={() => onSelectDateString?.(v.dateStr)}
              className="w-full text-left py-2 flex items-center justify-between text-xs hover:bg-[#faf4ea] rounded px-1 transition-colors group cursor-pointer"
            >
              <div>
                <div className="font-medium font-serif-tamil text-stone-800 group-hover:text-[#690600]">
                  {v.title}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#8b1e0f] font-mono font-medium shrink-0 ml-2">
                <span>{v.dateLabel}</span>
                <ChevronRight className="w-3 h-3 text-stone-400 group-hover:text-[#690600] transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
