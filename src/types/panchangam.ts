/**
 * Sacred Tamil Calendar & Divine Panchangam Types
 */

export interface CityInfo {
  id: string;
  nameTamil: string;
  nameEnglish: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  timeZone: string; // IANA timezone, including historical daylight-saving rules
}

export type MainViewTab = 
  | 'today' 
  | 'monthly' 
  | 'muhurtham' 
  | 'festivals' 
  | 'glossary';

export interface PanchangamTimingSlot {
  morning?: string;
  afternoon?: string;
  evening?: string;
  timeRange?: string;
}

export interface DayPanchangam {
  date: Date;
  dateString: string; // YYYY-MM-DD
  dayOfMonth: number;
  monthNameEnglish: string;
  yearEnglish: number;
  dayOfWeekEnglish: string;

  // Tamil Calendar specifics
  tamilYear: string; // e.g. "குரோதி வருடம்"
  tamilYearCycleIndex: number;
  ayana: string; // "உத்தராயணம்" | "தட்சிணாயணம்"
  ruthu: string; // "வசந்த ருது" | "கிரீஷ்ம ருது" etc.
  tamilMonthName: string; // "சித்திரை"
  tamilMonthIndex: number;
  tamilDate: number; // 1 to 31
  tamilWeekday: string; // "வெள்ளிக்கிழமை"

  // 5 Angas
  nakshatram: {
    name: string; // "உத்திரம்"
    translit: string; // "Uthiram"
    pada: number;
    description: string;
    isAuspicious: boolean;
    durationText: string;
  };
  thithi: {
    name: string; // "சுக்கில பட்ச பஞ்சமி"
    paksha: 'Sukla' | 'Krishna';
    pakshaTamil: 'சுக்கில பட்சம் (வளர்பிறை)' | 'கிருஷ்ண பட்சம் (தேய்பிறை)';
    number: number; // 1 to 15
    durationText: string;
    isPournami: boolean;
    isAmavasai: boolean;
    isSashti: boolean;
    isEkadasi: boolean;
    isPradosham: boolean;
    isSankataharaChaturthi: boolean;
  };
  yogam: {
    name: string; // "சித்த யோகம்" | "அமிர்த யோகம்" | "மரண யோகம்"
    nature: 'Subham' | 'Athiyantham' | 'Varjyam';
  };
  karanam: {
    name: string; // "பவ கரணம்"
  };
  chandrashtamam: {
    star: string; // "அவிட்டம்"
    cautionText: string;
  };

  // Timings for the selected city
  sunrise: string;
  sunset: string;
  nallaNeram: PanchangamTimingSlot;
  gowriNallaNeram: PanchangamTimingSlot;
  brahmaMuhurtham: string;
  rahuKalam: string;
  yamagandam: string;
  kuligai: string;
  soolam: {
    direction: string; // "மேற்கு (West)"
    remedy: string; // "வெல்லம் (Jaggery)"
  };

  // Temple Pooja Timings
  templePoojaTimings: {
    ushathKalam: string;
    kalasanthi: string;
    uchikalam: string;
    sayaratchai: string;
    templeName: string;
  };

  // Special Events & Festivals
  specialEvents: {
    title: string;
    description: string;
    tags: string[];
    isSubhaMuhurtham: boolean;
    muhurthamType?: 'valarpirai' | 'theipirai';
  };

  // Thirukkural of the day
  thirukkural: {
    number: number;
    athigaram: string;
    kuralLine1: string;
    kuralLine2: string;
    porul: string;
    palan: string;
  };

  // Other calendar eras
  eras: {
    saka: string;
  };
}

export interface MuhurthamEvent {
  dateString: string;
  tamilDate: string;
  dayOfWeek: string;
  lagnam: string;
  nakshatram: string;
  thithi: string;
  type: 'valarpirai' | 'theipirai';
  bestTime: string;
  suitableFor: string;
}

export interface FestivalEvent {
  id: string;
  dateString: string;
  titleTamil: string;
  titleEnglish: string;
  tamilDateStr: string;
  category: 'major' | 'viratham' | 'temple' | 'holiday';
  deity: string;
  description: string;
}
