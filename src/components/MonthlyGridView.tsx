import React, { useState, useEffect } from 'react';
import { CityInfo } from '../types/panchangam.ts';
import { calculateDayPanchangam, TAMIL_WEEKDAYS } from '../utils/panchangamCalculator.ts';
import { ChevronLeft, ChevronRight, Star, Moon } from 'lucide-react';

interface MonthlyGridViewProps {
  currentDate: Date;
  onSelectDate: (date: Date) => void;
  selectedCity: CityInfo;
}

export const MonthlyGridView: React.FC<MonthlyGridViewProps> = ({
  currentDate,
  onSelectDate,
  selectedCity,
}) => {
  const [viewYear, setViewYear] = useState(currentDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(currentDate.getMonth()); // 0-11

  useEffect(() => {
    setViewYear(currentDate.getFullYear());
    setViewMonth(currentDate.getMonth());
  }, [currentDate]);

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const monthNamesEnglish = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Days in month
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday
  const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Create calendar grid items
  const daysArray = [];
  // Empty slots before month start
  for (let i = 0; i < startingDayOfWeek; i++) {
    daysArray.push(null);
  }
  // Days of the month
  for (let d = 1; d <= totalDaysInMonth; d++) {
    const dayDate = new Date(viewYear, viewMonth, d);
    const p = calculateDayPanchangam(dayDate, selectedCity);
    daysArray.push({
      date: dayDate,
      dayNumber: d,
      panchangam: p,
      isToday:
        dayDate.toDateString() === new Date().toDateString(),
      isSelected:
        dayDate.toDateString() === currentDate.toDateString(),
    });
  }

  // Sample day panchangam for current month title
  const midMonthPanchangam = calculateDayPanchangam(new Date(viewYear, viewMonth, 15), selectedCity);

  return (
    <div className="w-full bg-[#fcfbf7] rounded-lg border-2 border-[#c2b299] shadow-md p-3 sm:p-6 text-[#1b1c19]">
      {/* Month Header Banner */}
      <div className="bg-[#690600] text-[#fef08a] px-4 py-3 rounded-t flex items-center justify-between shadow-xs">
        <button
          onClick={handlePrevMonth}
          className="p-1.5 rounded-full hover:bg-[#8b1e0f] text-[#fef08a] transition-colors cursor-pointer"
          title="முந்தைய மாதம்"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h2 className="text-base sm:text-xl font-bold font-serif-tamil tracking-wide">
            {monthNamesEnglish[viewMonth]} {viewYear} • {midMonthPanchangam.tamilMonthName}
          </h2>
          <div className="text-xs text-[#fed7aa] font-medium font-serif-tamil mt-0.5">
            {midMonthPanchangam.tamilYear} • {selectedCity.nameTamil} நேரலை பஞ்சாங்கம்
          </div>
        </div>

        <button
          onClick={handleNextMonth}
          className="p-1.5 rounded-full hover:bg-[#8b1e0f] text-[#fef08a] transition-colors cursor-pointer"
          title="அடுத்த மாதம்"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Weekday Column Headers */}
      <div className="grid grid-cols-7 border-b border-[#ddcfbe] bg-[#f7f2e9] text-center py-2 text-xs font-bold font-serif-tamil text-[#690600]">
        {TAMIL_WEEKDAYS.map((w, idx) => (
          <div key={idx} className="truncate px-1">
            <span className="hidden sm:inline">{w}</span>
            <span className="sm:hidden">{w.substring(0, 2)}</span>
          </div>
        ))}
      </div>

      {/* Monthly Days Grid */}
      <div className="grid grid-cols-7 gap-px bg-[#e5dcce] border border-[#e5dcce]">
        {daysArray.map((cell, idx) => {
          if (!cell) {
            return (
              <div key={idx} className="bg-[#fbf9f3]/60 min-h-[75px] sm:min-h-[95px] p-1 opacity-40" />
            );
          }

          const { date, dayNumber, panchangam, isToday, isSelected } = cell;

          return (
            <button
              key={idx}
              onClick={() => onSelectDate(date)}
              className={`bg-[#fdfcf9] hover:bg-[#fbf4e8] transition-colors min-h-[75px] sm:min-h-[105px] p-1.5 text-left flex flex-col justify-between relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b1e0f] ${
                isSelected ? 'ring-2 ring-[#8b1e0f] bg-[#f8ede0] z-10' : ''
              } ${isToday ? 'border-t-2 border-t-[#8b1e0f]' : ''}`}
            >
              {/* Header: Gregorian Date & Tamil Date */}
              <div className="flex items-start justify-between w-full">
                <span className={`text-xs sm:text-sm font-semibold font-mono ${isToday ? 'text-[#8b1e0f]' : 'text-stone-700'}`}>
                  {dayNumber}
                </span>

                {/* Big Tamil Date */}
                <span className="text-sm sm:text-base font-bold font-serif-tamil text-[#8b1e0f] leading-none">
                  {panchangam.tamilDate}
                </span>
              </div>

              {/* Middle: Nakshatram & Thithi */}
              <div className="my-1 text-[10px] sm:text-[11px] leading-tight font-serif-tamil text-stone-700">
                <div className="truncate font-medium text-[#78350f]">
                  {panchangam.nakshatram.name}
                </div>
                <div className="truncate text-stone-500 hidden sm:block">
                  {panchangam.thithi.name.split(' ').slice(1).join(' ') || panchangam.thithi.name}
                </div>
              </div>

              {/* Badges / Dots Footer */}
              <div className="flex items-center gap-1 flex-wrap mt-auto">
                {panchangam.specialEvents.isSubhaMuhurtham && (
                  <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-[#fef3c7] text-[#92400e] text-[9px] font-bold">
                    <Star className="w-2.5 h-2.5 fill-[#d97706] text-[#d97706]" />
                    <span className="hidden sm:inline">முகூர்த்தம்</span>
                  </span>
                )}
                {panchangam.thithi.isPournami && (
                  <span className="px-1 py-0.2 rounded bg-amber-100 text-amber-900 text-[9px] font-bold flex items-center gap-0.5">
                    <Moon className="w-2.5 h-2.5 fill-amber-500" />
                    <span className="hidden sm:inline">பௌர்ணமி</span>
                  </span>
                )}
                {panchangam.thithi.isAmavasai && (
                  <span className="px-1 py-0.2 rounded bg-stone-200 text-stone-900 text-[9px] font-bold">
                    அமாவாசை
                  </span>
                )}
                {panchangam.thithi.isPradosham && (
                  <span className="px-1 py-0.2 rounded bg-indigo-50 text-indigo-900 text-[9px] font-semibold hidden md:inline">
                    பிரதோஷம்
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Grid Legend */}
      <div className="mt-4 pt-3 border-t border-[#ebdccb] flex items-center justify-between text-xs text-stone-600 font-serif-tamil flex-wrap gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#fef3c7] border border-[#fde68a] inline-block" />
            <span>சுப முகூர்த்த நாள்</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-100 border border-amber-300 inline-block" />
            <span>பௌர்ணமி (முழு நிலவு)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-stone-200 border border-stone-400 inline-block" />
            <span>அமாவாசை (இருள் நிலவு)</span>
          </span>
        </div>
        <div className="text-[11px] text-[#78350f]">
          * ஏதேனும் ஒரு தேதியை அழுத்தினால் அந்த நாளின் முழு தினசரி ஏடு தோன்றும்
        </div>
      </div>
    </div>
  );
};
