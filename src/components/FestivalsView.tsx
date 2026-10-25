import React, { useState } from 'react';
import { MAJOR_FESTIVALS } from '../data/festivals.ts';
import { Search, Sparkles, Calendar, ArrowRight, Tag } from 'lucide-react';

interface FestivalsViewProps {
  onSelectDateString: (dateStr: string) => void;
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({ onSelectDateString }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = MAJOR_FESTIVALS.filter((f) => {
    const matchesSearch =
      f.titleTamil.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || f.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-[#fcfbf7] rounded-lg border-2 border-[#c2b299] shadow-md p-3 sm:p-6 text-[#1b1c19]">
      {/* Header Banner */}
      <div className="bg-[#690600] text-[#fef08a] px-4 py-3 rounded-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-serif-tamil tracking-wide flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#fbbf24]" />
            <span>பண்டிகைகள் &amp; விரத நாட்கள் (Festivals &amp; Viratham)</span>
          </h2>
          <p className="text-xs text-[#fed7aa] font-medium font-serif-tamil mt-0.5">
            இந்து பண்டிகைகள், விரத தினங்கள், பௌர்ணமி, ஏகாதசி மற்றும் கோயில் உற்சவங்கள்
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
          <input
            type="text"
            placeholder="பண்டிகையைத் தேடுக..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white text-stone-900 text-xs placeholder:text-stone-400 border border-[#d5c7b3] focus:outline-none focus:ring-2 focus:ring-[#fef08a]"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: 'அனைத்து விசேஷங்கள்' },
          { id: 'major', label: 'முக்கிய பண்டிகைகள்' },
          { id: 'viratham', label: 'விரத நாட்கள்' },
          { id: 'temple', label: 'கோயில் உற்சவங்கள்' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-serif-tamil transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#690600] text-white font-bold shadow-xs'
                : 'bg-[#f4ede3] text-stone-700 hover:bg-[#e8decb]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
        {filtered.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-[#fdfcf9] border border-[#e5dcce] hover:border-[#8b1e0f] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-[#f0e6d8] pb-2">
                  <div>
                    <h3 className="text-base font-bold font-serif-tamil text-[#690600]">
                      {item.titleTamil}
                    </h3>
                    <div className="text-xs text-stone-500 font-sans mt-0.5">
                      {item.titleEnglish}
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#faedd9] text-[#78350f] text-[10px] font-bold font-serif-tamil border border-[#ebd8bc] whitespace-nowrap">
                    {item.tamilDateStr}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center gap-3 text-xs text-stone-600 font-serif-tamil flex-wrap">
                  <span className="flex items-center gap-1 font-mono text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-[#b45309]" />
                    {item.dateString}
                  </span>
                  <span className="flex items-center gap-1 text-[#78350f]">
                    <Tag className="w-3.5 h-3.5" />
                    வழிபாடு: <strong>{item.deity}</strong>
                  </span>
                </div>

                <p className="mt-2 text-xs text-stone-700 font-serif-tamil leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2">
                <button
                  onClick={() => onSelectDateString(item.dateString)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#f6eee3] hover:bg-[#ebdccb] text-[#690600] text-xs font-semibold font-serif-tamil transition-colors border border-[#ddcfbe] cursor-pointer"
                >
                  <span>இந்த நாளின் தினசரி காலண்டர் பார்க்க</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-stone-500 font-serif-tamil text-sm">
          தேடலுக்குரிய பண்டிகைகள் ஏதும் காணப்படவில்லை.
        </div>
      )}
    </div>
  );
};
