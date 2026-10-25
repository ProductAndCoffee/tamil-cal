import React, { useState, useMemo } from 'react';
import { CityInfo } from '../types/panchangam.ts';
import { getMuhurthamsForYear } from '../utils/panchangamCalculator.ts';
import { Star, Clock, Calendar, ArrowRight, Heart } from 'lucide-react';

interface MuhurthamViewProps {
  currentDate: Date;
  selectedCity: CityInfo;
  onSelectDateString: (dateStr: string) => void;
}

export const MuhurthamView: React.FC<MuhurthamViewProps> = ({
  currentDate,
  selectedCity,
  onSelectDateString,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'valarpirai' | 'theipirai'>('all');

  const muhurthamsList = useMemo(
    () => getMuhurthamsForYear(currentDate, selectedCity),
    [currentDate, selectedCity]
  );

  const filtered = muhurthamsList.filter((m) => {
    if (filterType === 'all') return true;
    return m.type === filterType;
  });

  return (
    <div className="w-full bg-[#fcfbf7] rounded-lg border-2 border-[#c2b299] shadow-md p-3 sm:p-6 text-[#1b1c19]">
      {/* Header Banner */}
      <div className="bg-[#690600] text-[#fef08a] px-4 py-3 rounded-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-serif-tamil tracking-wide flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" />
            <span>சுப முகூர்த்த நாட்கள் (Subha Muhurtham Dates)</span>
          </h2>
          <p className="text-xs text-[#fed7aa] font-medium font-serif-tamil mt-0.5">
            திருமணம், கிரஹப்பிரவேசம், சீமந்தம் மற்றும் புதிய தொழில் துவங்க உகந்த யோக தினங்கள்
          </p>
        </div>

        {/* Filter Segmented Buttons */}
        <div className="flex items-center gap-1 bg-[#4d0500] p-1 rounded-md self-start sm:self-auto border border-[#8b1e0f]">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 text-xs font-serif-tamil rounded transition-colors ${
              filterType === 'all'
                ? 'bg-[#fbbf24] text-[#550600] font-bold shadow-xs'
                : 'text-[#fed7aa] hover:text-white'
            }`}
          >
            அனைத்தும்
          </button>
          <button
            onClick={() => setFilterType('valarpirai')}
            className={`px-3 py-1 text-xs font-serif-tamil rounded transition-colors ${
              filterType === 'valarpirai'
                ? 'bg-[#fbbf24] text-[#550600] font-bold shadow-xs'
                : 'text-[#fed7aa] hover:text-white'
            }`}
          >
            வளர்பிறை முகூர்த்தம்
          </button>
          <button
            onClick={() => setFilterType('theipirai')}
            className={`px-3 py-1 text-xs font-serif-tamil rounded transition-colors ${
              filterType === 'theipirai'
                ? 'bg-[#fbbf24] text-[#550600] font-bold shadow-xs'
                : 'text-[#fed7aa] hover:text-white'
            }`}
          >
            தேய்பிறை முகூர்த்தம்
          </button>
        </div>
      </div>

      {/* Muhurtham Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
        {filtered.map((item, idx) => {
          const isValarpirai = item.type === 'valarpirai';

          return (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#fdfcf9] border border-[#e5dcce] hover:border-[#8b1e0f] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Tamil Date & Type Badge */}
                <div className="flex items-start justify-between gap-2 border-b border-[#f0e6d8] pb-2">
                  <div>
                    <span className="text-base sm:text-lg font-bold font-serif-tamil text-[#8b1e0f]">
                      {item.tamilDate} ({item.dayOfWeek})
                    </span>
                    <div className="text-xs text-stone-500 font-mono flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{item.dateString}</span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-serif-tamil border ${
                      isValarpirai
                        ? 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]'
                        : 'bg-[#f1f5f9] text-[#475569] border-[#cbd5e1]'
                    }`}
                  >
                    {isValarpirai ? 'வளர்பிறை முகூர்த்தம்' : 'தேய்பிறை முகூர்த்தம்'}
                  </span>
                </div>

                {/* Details Table */}
                <div className="mt-3 space-y-1.5 text-xs text-stone-700 font-serif-tamil">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">சுப லக்னம்:</span>
                    <span className="font-bold text-[#690600]">{item.lagnam}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">நட்சத்திரம் &amp; திதி:</span>
                    <span className="font-medium text-stone-800">
                      {item.nakshatram} • {item.thithi}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#d97706]" />
                      முகூர்த்த நேரம்:
                    </span>
                    <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                      {item.bestTime}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#f4ede3] text-[11px] text-[#78350f] font-serif-tamil">
                  <strong>ஏற்ற காரியங்கள்:</strong> {item.suitableFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-2">
                <button
                  onClick={() => onSelectDateString(item.dateString)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#f6eee3] hover:bg-[#ebdccb] text-[#690600] text-xs font-semibold font-serif-tamil transition-colors border border-[#ddcfbe] cursor-pointer"
                >
                  <span>தினசரி ஏட்டில் பார்க்க</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
