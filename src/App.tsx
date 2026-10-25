import React, { useState } from 'react';
import { MainViewTab, CityInfo } from './types/panchangam.ts';
import { CITIES } from './data/cities.ts';
import { calculateDayPanchangam } from './utils/panchangamCalculator.ts';
import { TopHeader } from './components/TopHeader.tsx';
import { DateToolbar } from './components/DateToolbar.tsx';
import { DailyCalendarSheet } from './components/DailyCalendarSheet.tsx';
import { RightSidebarCards } from './components/RightSidebarCards.tsx';
import { MonthlyGridView } from './components/MonthlyGridView.tsx';
import { MuhurthamView } from './components/MuhurthamView.tsx';
import { FestivalsView } from './components/FestivalsView.tsx';
import { GlossaryView } from './components/GlossaryView.tsx';

export default function App() {
  // Initial date: live current date
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [currentTab, setCurrentTab] = useState<MainViewTab>('today');
  const [selectedCity, setSelectedCity] = useState<CityInfo>(CITIES[0]); // Chennai default

  // Reactive panchangam calculation
  const panchangam = calculateDayPanchangam(currentDate, selectedCity);

  const handlePrevDay = () => {
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - 1);
    setCurrentDate(prev);
  };

  const handleNextDay = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    setCurrentTab('today');
  };

  const handleSelectDate = (date: Date) => {
    setCurrentDate(date);
    setCurrentTab('today');
  };

  const handleSelectDateString = (dateStr: string) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    setCurrentDate(new Date(y, m - 1, d));
    setCurrentTab('today');
  };

  return (
    <div className="min-h-screen bg-[#fbf9f3] text-[#1b1c19] flex flex-col font-sans-tamil">
      {/* Top Header */}
      <TopHeader
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        panchangam={panchangam}
      />

      {/* Date Navigation & Tools Toolbar */}
      <DateToolbar
        currentDate={currentDate}
        onPrevDay={handlePrevDay}
        onNextDay={handleNextDay}
        onToday={handleToday}
        onSelectDate={handleSelectDate}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        panchangam={panchangam}
      />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6">
        {currentTab === 'today' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Center Main Calendar Sheet */}
            <div className="lg:col-span-8">
              <DailyCalendarSheet panchangam={panchangam} />
            </div>

            {/* Right Timings & Pooja Sidebar */}
            <div className="lg:col-span-4 no-print">
              <RightSidebarCards
                panchangam={panchangam}
                selectedCity={selectedCity}
                onSelectDateString={handleSelectDateString}
              />
            </div>
          </div>
        )}

        {currentTab === 'monthly' && (
          <MonthlyGridView
            currentDate={currentDate}
            onSelectDate={handleSelectDate}
            selectedCity={selectedCity}
          />
        )}

        {currentTab === 'muhurtham' && (
          <MuhurthamView
            currentDate={currentDate}
            selectedCity={selectedCity}
            onSelectDateString={handleSelectDateString}
          />
        )}

        {currentTab === 'festivals' && (
          <FestivalsView
            currentDate={currentDate}
            selectedCity={selectedCity}
            onSelectDateString={handleSelectDateString}
          />
        )}

        {currentTab === 'glossary' && (
          <GlossaryView />
        )}
      </main>

      {/* Sacred Footer */}
      <footer className="w-full bg-[#f4eee3] border-t border-[#e2d7c5] py-4 px-4 text-center text-xs text-[#78350f] font-serif-tamil no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-bold text-[#690600]">
            <span>卐</span>
            <span>ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம் • தமிழ் தினசரி நாட்காட்டி</span>
            <span>卐</span>
          </div>

          <div className="text-stone-600 text-[11px]">
            அனைத்து சுபகாரியங்களும் தடையின்றி சிறப்புடன் நிறைவேற எமது நல்வாழ்த்துகள்
          </div>

          <div className="text-[11px] text-[#8b1e0f] font-semibold">
            வாழ்க வையகம் • வாழ்க வளமுடன்
          </div>
        </div>
      </footer>
    </div>
  );
}
