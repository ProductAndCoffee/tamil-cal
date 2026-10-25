import { CityInfo, DayPanchangam } from '../types/panchangam.ts';
import { THIRUKKURAL_COLLECTION } from '../data/thirukkural.ts';
import { MAJOR_FESTIVALS } from '../data/festivals.ts';
import { SUBHA_MUHURTHAM_DAYS } from '../data/muhurthams.ts';

// 60-Year Tamil Cycle
export const TAMIL_YEARS = [
  'பிரபவ', 'விபவ', 'சுக்ல', 'பிரமோதூத', 'பிரஜோற்பத்தி', 'ஆங்கீரச', 'ஸ்ரீமுக', 'பவ', 'யுவ', 'தாது',
  'ஈஸ்வர', 'வெகுதானிய', 'பிரமாதி', 'விக்கிரம', 'விஷு', 'சித்திரபானு', 'சுபானு', 'தாரண', 'பார்த்திப', 'விய',
  'சர்வசித்து', 'சர்வதாரி', 'விரோதி', 'விக்ருதி', 'கர', 'நந்தன', 'விஜய', 'ஜய', 'மன்மத', 'துன்முகி',
  'ஹேவிளம்பி', 'விளம்பி', 'விகாரி', 'சார்வரி', 'பிலவ', 'சுபகிருது', 'சோபகிருது', 'குரோதி', 'விசுவாவசு', 'பராபவ',
  'பிலவங்க', 'கீலக', 'சௌமிய', 'சாதாரண', 'விரோதிகிருது', 'பரிதாபி', 'பிரமாதீச', 'ஆனந்த', 'ராட்சஸ', 'நள',
  'பிங்கள', 'காளயுக்தி', 'சித்தார்த்தி', 'ரௌத்திரி', 'துன்மதி', 'துந்துபி', 'ருத்ரோத்காரி', 'ரக்தாட்சி', 'குரோதன', 'அட்சய'
];

// 12 Tamil Months
export const TAMIL_MONTHS = [
  { name: 'சித்திரை', translit: 'Chithirai', approxStartMonth: 3, approxStartDay: 14, days: 31 },
  { name: 'வைகாசி', translit: 'Vaikasi', approxStartMonth: 4, approxStartDay: 15, days: 31 },
  { name: 'ஆனி', translit: 'Aani', approxStartMonth: 5, approxStartDay: 15, days: 32 },
  { name: 'ஆடி', translit: 'Aadi', approxStartMonth: 6, approxStartDay: 16, days: 31 },
  { name: 'ஆவணி', translit: 'Avani', approxStartMonth: 7, approxStartDay: 17, days: 31 },
  { name: 'புரட்டாசி', translit: 'Purattasi', approxStartMonth: 8, approxStartDay: 17, days: 30 },
  { name: 'ஐப்பசி', translit: 'Aippasi', approxStartMonth: 9, approxStartDay: 18, days: 30 },
  { name: 'கார்த்திகை', translit: 'Karthigai', approxStartMonth: 10, approxStartDay: 17, days: 29 },
  { name: 'மார்கழி', translit: 'Margazhi', approxStartMonth: 11, approxStartDay: 16, days: 30 },
  { name: 'தை', translit: 'Thai', approxStartMonth: 0, approxStartDay: 15, days: 30 },
  { name: 'மாசி', translit: 'Masi', approxStartMonth: 1, approxStartDay: 13, days: 30 },
  { name: 'பங்குனி', translit: 'Panguni', approxStartMonth: 2, approxStartDay: 15, days: 30 },
];

export const TAMIL_WEEKDAYS = [
  'ஞாயிற்றுக்கிழமை',
  'திங்கட்கிழமை',
  'செவ்வாய்க்கிழமை',
  'புதன்கிழமை',
  'வியாழக்கிழமை',
  'வெள்ளிக்கிழமை',
  'சனிக்கிழமை',
];

export const NAKSHATRAMS = [
  { name: 'அஸ்வினி', translit: 'Ashwini', auspicious: true, chandrashtamam: 'உத்திரம்' },
  { name: 'பரணி', translit: 'Bharani', auspicious: false, chandrashtamam: 'ஹஸ்தம்' },
  { name: 'கார்த்திகை', translit: 'Karthigai', auspicious: true, chandrashtamam: 'சித்திரை' },
  { name: 'ரோகிணி', translit: 'Rohini', auspicious: true, chandrashtamam: 'சுவாதி' },
  { name: 'மிருகசீரிஷம்', translit: 'Mrigashirsha', auspicious: true, chandrashtamam: 'விசாகம்' },
  { name: 'திருவாதிரை', translit: 'Thiruvathirai', auspicious: true, chandrashtamam: 'அனுஷம்' },
  { name: 'புனர்பூசம்', translit: 'Punarpusam', auspicious: true, chandrashtamam: 'கேட்டை' },
  { name: 'பூசம்', translit: 'Poosam', auspicious: true, chandrashtamam: 'மூலம்' },
  { name: 'ஆயில்யம்', translit: 'Ayilyam', auspicious: false, chandrashtamam: 'பூராடம்' },
  { name: 'மகம்', translit: 'Magam', auspicious: true, chandrashtamam: 'உத்திராடம்' },
  { name: 'பூரம்', translit: 'Pooram', auspicious: true, chandrashtamam: 'திருவோணம்' },
  { name: 'உத்திரம்', translit: 'Uthiram', auspicious: true, chandrashtamam: 'அவிட்டம்' },
  { name: 'ஹஸ்தம்', translit: 'Hastham', auspicious: true, chandrashtamam: 'சதயம்' },
  { name: 'சித்திரை', translit: 'Chithirai', auspicious: true, chandrashtamam: 'பூரட்டாதி' },
  { name: 'சுவாதி', translit: 'Swati', auspicious: true, chandrashtamam: 'உத்திரட்டாதி' },
  { name: 'விசாகம்', translit: 'Visakam', auspicious: true, chandrashtamam: 'ரேவதி' },
  { name: 'அனுஷம்', translit: 'Anusham', auspicious: true, chandrashtamam: 'அஸ்வினி' },
  { name: 'கேட்டை', translit: 'Kettai', auspicious: false, chandrashtamam: 'பரணி' },
  { name: 'மூலம்', translit: 'Moolam', auspicious: true, chandrashtamam: 'கார்த்திகை' },
  { name: 'பூராடம்', translit: 'Pooradam', auspicious: true, chandrashtamam: 'ரோகிணி' },
  { name: 'உத்திராடம்', translit: 'Uthiradam', auspicious: true, chandrashtamam: 'மிருகசீரிஷம்' },
  { name: 'திருவோணம்', translit: 'Thiruvonam', auspicious: true, chandrashtamam: 'திருவாதிரை' },
  { name: 'அவிட்டம்', translit: 'Avittam', auspicious: true, chandrashtamam: 'புனர்பூசம்' },
  { name: 'சதயம்', translit: 'Sadayam', auspicious: true, chandrashtamam: 'பூசம்' },
  { name: 'பூரட்டாதி', translit: 'Poorattathi', auspicious: true, chandrashtamam: 'ஆயில்யம்' },
  { name: 'உத்திரட்டாதி', translit: 'Uthirattathi', auspicious: true, chandrashtamam: 'மகம்' },
  { name: 'ரேவதி', translit: 'Revathi', auspicious: true, chandrashtamam: 'பூரம்' },
];

export const THITHIS = [
  'பிரதமை', 'துவிதியை', 'திருதியை', 'சதுர்த்தி', 'பஞ்சமி',
  'சஷ்டி', 'சப்தமி', 'அஷ்டமி', 'நவமி', 'தசமி',
  'ஏகாதசி', 'துவாதசி', 'திரயோதசி', 'சதுர்த்தசி', 'பௌர்ணமி / அமாவாசை'
];

export const SOOLAM_TABLE = [
  { day: 0, dir: 'மேற்கு (West)', remedy: 'வெல்லம் (Jaggery)' },
  { day: 1, dir: 'கிழக்கு (East)', remedy: 'தயிர் (Curd)' },
  { day: 2, dir: 'வடக்கு (North)', remedy: 'பால் (Milk)' },
  { day: 3, dir: 'வடக்கு (North)', remedy: 'பால் (Milk)' },
  { day: 4, dir: 'தெற்கு (South)', remedy: 'நெய் (Ghee)' },
  { day: 5, dir: 'மேற்கு (West)', remedy: 'வெல்லம் (Jaggery)' },
  { day: 6, dir: 'கிழக்கு (East)', remedy: 'தயிர் (Curd)' },
];

/**
 * Format minutes since midnight into HH:MM (12-hour format with காலை / மாலை)
 */
function formatTime12h(minutes: number): string {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const hours24 = Math.floor(normalized / 60);
  const mins = Math.floor(normalized % 60);
  const period = hours24 < 12 ? 'காலை' : (hours24 < 16 ? 'மதியம்' : 'மாலை');
  const h12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const hStr = h12 < 10 ? `0${h12}` : `${h12}`;
  const mStr = mins < 10 ? `0${mins}` : `${mins}`;
  return `${period} ${hStr}:${mStr}`;
}

function formatTimeHHMM(minutes: number): string {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const hours24 = Math.floor(normalized / 60);
  const mins = Math.floor(normalized % 60);
  const hStr = hours24 < 10 ? `0${hours24}` : `${hours24}`;
  const mStr = mins < 10 ? `0${mins}` : `${mins}`;
  return `${hStr}:${mStr}`;
}

/**
 * Calculate approximate Sunrise and Sunset in minutes from midnight for a given city and day of year.
 */
function calculateSunTimes(date: Date, city: CityInfo): { sunriseMin: number; sunsetMin: number } {
  const startOfYear = new Date(Date.UTC(date.getFullYear(), 0, 1));
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  // Approximate Solar Declination
  const declination = 23.45 * Math.sin((2 * Math.PI / 365) * (dayOfYear - 81));
  const decRad = (declination * Math.PI) / 180;
  const latRad = (city.lat * Math.PI) / 180;

  // Hour angle at sunrise/sunset
  const cosH0 = -Math.tan(latRad) * Math.tan(decRad);
  const clampedCosH0 = Math.max(-1, Math.min(1, cosH0));
  const H0 = (Math.acos(clampedCosH0) * 180) / Math.PI;

  // Equation of time approximation in minutes
  const B = (2 * Math.PI / 365) * (dayOfYear - 81);
  const equationOfTime = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

  // Solar noon in local minutes
  const timeZoneMeridian = city.utcOffset * 15;
  const longitudeCorrection = 4 * (city.lng - timeZoneMeridian);
  const solarNoonMin = 12 * 60 - longitudeCorrection - equationOfTime;

  const halfDayMin = (H0 / 15) * 60;
  let sunriseMin = solarNoonMin - halfDayMin;
  let sunsetMin = solarNoonMin + halfDayMin;

  // Realistic bounds for safety
  if (isNaN(sunriseMin) || sunriseMin < 240) sunriseMin = 360; // 06:00
  if (isNaN(sunsetMin) || sunsetMin > 1200) sunsetMin = 1110; // 18:30

  return { sunriseMin, sunsetMin };
}

/**
 * Core Panchangam calculation for a given Gregorian date and city
 */
export function calculateDayPanchangam(targetDate: Date, city: CityInfo): DayPanchangam {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0 (Sun) to 6 (Sat)

  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const monthNamesEnglish = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNamesEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Sun times
  const { sunriseMin, sunsetMin } = calculateSunTimes(date, city);
  const daySpan = sunsetMin - sunriseMin;
  const part8 = daySpan / 8;

  // Determine Tamil Month & Date
  // Reference anchor: April 14 is Chithirai 1
  let tamilMonthIndex = 0;
  let tamilDateNumber = 1;

  if (month === 0) { // Jan
    if (day < 15) { tamilMonthIndex = 8; tamilDateNumber = day + 16; } // Margazhi
    else { tamilMonthIndex = 9; tamilDateNumber = day - 14; } // Thai
  } else if (month === 1) { // Feb
    if (day < 13) { tamilMonthIndex = 9; tamilDateNumber = day + 17; } // Thai
    else { tamilMonthIndex = 10; tamilDateNumber = day - 12; } // Masi
  } else if (month === 2) { // Mar
    if (day < 15) { tamilMonthIndex = 10; tamilDateNumber = day + 16; } // Masi
    else { tamilMonthIndex = 11; tamilDateNumber = day - 14; } // Panguni
  } else if (month === 3) { // Apr
    if (day < 14) { tamilMonthIndex = 11; tamilDateNumber = day + 17; } // Panguni
    else { tamilMonthIndex = 0; tamilDateNumber = day - 13; } // Chithirai
  } else if (month === 4) { // May
    if (day < 15) { tamilMonthIndex = 0; tamilDateNumber = day + 17; } // Chithirai
    else { tamilMonthIndex = 1; tamilDateNumber = day - 14; } // Vaikasi
  } else if (month === 5) { // Jun
    if (day < 15) { tamilMonthIndex = 1; tamilDateNumber = day + 17; } // Vaikasi
    else { tamilMonthIndex = 2; tamilDateNumber = day - 14; } // Aani
  } else if (month === 6) { // Jul
    if (day < 16) { tamilMonthIndex = 2; tamilDateNumber = day + 16; } // Aani
    else { tamilMonthIndex = 3; tamilDateNumber = day - 15; } // Aadi
  } else if (month === 7) { // Aug
    if (day < 17) { tamilMonthIndex = 3; tamilDateNumber = day + 16; } // Aadi
    else { tamilMonthIndex = 4; tamilDateNumber = day - 16; } // Avani
  } else if (month === 8) { // Sep
    if (day < 17) { tamilMonthIndex = 4; tamilDateNumber = day + 15; } // Avani
    else { tamilMonthIndex = 5; tamilDateNumber = day - 16; } // Purattasi
  } else if (month === 9) { // Oct
    if (day < 18) { tamilMonthIndex = 5; tamilDateNumber = day + 14; } // Purattasi
    else { tamilMonthIndex = 6; tamilDateNumber = day - 17; } // Aippasi
  } else if (month === 10) { // Nov
    if (day < 17) { tamilMonthIndex = 6; tamilDateNumber = day + 14; } // Aippasi
    else { tamilMonthIndex = 7; tamilDateNumber = day - 16; } // Karthigai
  } else { // Dec
    if (day < 16) { tamilMonthIndex = 7; tamilDateNumber = day + 14; } // Karthigai
    else { tamilMonthIndex = 8; tamilDateNumber = day - 15; } // Margazhi
  }

  // Tamil Year calculation (cycle of 60 years)
  // For 2024: Krodhi (index 37 in TAMIL_YEARS) starting April 14
  let cycleBaseYear = year - 1987; // 1987 is Prabhava (0)
  if (month < 3 || (month === 3 && day < 14)) {
    cycleBaseYear -= 1;
  }
  const yearIndex = ((cycleBaseYear % 60) + 60) % 60;
  const tamilYear = `${TAMIL_YEARS[yearIndex]} வருடம்`;

  // Ayana
  const ayana = (tamilMonthIndex >= 9 || tamilMonthIndex <= 2) ? 'உத்தராயணம்' : 'தட்சிணாயணம்';

  // Ruthu
  let ruthu = 'வசந்த ருது';
  if (tamilMonthIndex === 0 || tamilMonthIndex === 1) ruthu = 'வசந்த ருது';
  else if (tamilMonthIndex === 2 || tamilMonthIndex === 3) ruthu = 'கிரீஷ்ம ருது';
  else if (tamilMonthIndex === 4 || tamilMonthIndex === 5) ruthu = 'வர்ஷ ருது';
  else if (tamilMonthIndex === 6 || tamilMonthIndex === 7) ruthu = 'சரத் ருது';
  else if (tamilMonthIndex === 8 || tamilMonthIndex === 9) ruthu = 'ஹேமந்த ருது';
  else ruthu = 'சிசிர ருது';

  // Nakshatram calculation anchored to 2024-04-27 (Uthiram = index 11)
  const anchorTime = new Date(Date.UTC(2024, 3, 27)).getTime();
  const currentUtcTime = new Date(Date.UTC(year, month, day)).getTime();
  const diffDays = Math.round((currentUtcTime - anchorTime) / (1000 * 60 * 60 * 24));
  
  // Moon spends ~1 day per nakshatram (27.32 days total cycle)
  const nakshatraIndex = (((11 + diffDays) % 27) + 27) % 27;
  const currentNakshatram = NAKSHATRAMS[nakshatraIndex];

  // Thithi calculation anchored to 2024-04-27 (Sukla Panchami = index 4)
  // Synodic lunar cycle is ~29.530588 days
  const lunarCycle = 29.530588;
  const lunarOffset = (diffDays % lunarCycle + lunarCycle) % lunarCycle;
  const thithiCycleIndex = Math.floor((4 + lunarOffset) % 30);
  
  const isSukla = thithiCycleIndex < 15;
  const thithiNumber = (thithiCycleIndex % 15) + 1;
  const pakshaTamil = isSukla ? 'சுக்கில பட்சம் (வளர்பிறை)' : 'கிருஷ்ண பட்சம் (தேய்பிறை)';
  const baseThithiName = THITHIS[(thithiNumber - 1) % 15];
  
  let fullThithiName = `${isSukla ? 'சுக்கில பட்ச' : 'கிருஷ்ண பட்ச'} ${baseThithiName}`;
  if (thithiNumber === 15) {
    fullThithiName = isSukla ? 'பௌர்ணமி (முழு நிலவு)' : 'அமாவாசை (இருள் நிலவு)';
  }

  // Yogam (Weekday + Star)
  const yogaIndex = (dayOfWeek + nakshatraIndex) % 3;
  const yogamNames = ['சித்த யோகம்', 'அமிர்த யோகம்', 'மரண யோகம்'] as const;
  const yogamNatures = ['Subham', 'Athiyantham', 'Varjyam'] as const;
  const currentYogam = {
    name: yogamNames[yogaIndex],
    nature: yogamNatures[yogaIndex],
  };

  // Karanam
  const karanaList = [
    'பவ கரணம்', 'பாலவ கரணம்', 'கௌலவ கரணம்', 'தைதுலை கரணம்', 
    'கரசை கரணம்', 'வணிசை கரணம்', 'பத்திரை கரணம்'
  ];
  const karanaName = karanaList[((thithiNumber * 2 + dayOfWeek) % 7)];

  // Rahu Kalam, Yamagandam, Kuligai by Weekday
  // Standard 8 parts of day
  const rahuPartByDay = [7, 1, 6, 4, 5, 3, 2]; // Sun to Sat
  const yamaPartByDay = [4, 3, 2, 1, 0, 6, 5];
  const kuliPartByDay = [6, 5, 4, 3, 2, 1, 0];

  const getSlot = (partIdx: number) => {
    const start = sunriseMin + partIdx * part8;
    const end = start + part8;
    return `${formatTime12h(start)} - ${formatTimeHHMM(end)}`;
  };

  const rahuKalam = getSlot(rahuPartByDay[dayOfWeek]);
  const yamagandam = getSlot(yamaPartByDay[dayOfWeek]);
  const kuligai = getSlot(kuliPartByDay[dayOfWeek]);

  // Nalla Neram (Auspicious standard timings)
  const nallaNeramPresets: Record<number, { morning: string; evening: string }> = {
    0: { morning: 'காலை 07:30 - 08:30', evening: 'மாலை 03:30 - 04:30' },
    1: { morning: 'காலை 06:30 - 07:30', evening: 'மாலை 04:30 - 05:30' },
    2: { morning: 'காலை 07:30 - 08:30', evening: 'மாலை 04:30 - 05:30' },
    3: { morning: 'காலை 09:15 - 10:15', evening: 'மாலை 04:45 - 05:45' },
    4: { morning: 'காலை 09:30 - 10:30', evening: 'மாலை 06:30 - 07:30' },
    5: { morning: 'காலை 09:15 - 10:15', evening: 'மாலை 04:45 - 05:45' },
    6: { morning: 'காலை 07:30 - 08:30', evening: 'மாலை 05:00 - 06:00' },
  };

  const gowriPresets: Record<number, { morning: string; evening: string }> = {
    0: { morning: 'காலை 10:45 - 11:45', evening: 'மாலை 06:30 - 07:30' },
    1: { morning: 'காலை 09:30 - 10:30', evening: 'மாலை 07:30 - 08:30' },
    2: { morning: 'காலை 10:45 - 11:45', evening: 'மாலை 07:00 - 08:00' },
    3: { morning: 'காலை 09:15 - 10:15', evening: 'மாலை 06:30 - 07:30' },
    4: { morning: 'காலை 10:45 - 11:45', evening: 'மாலை 07:30 - 08:30' },
    5: { morning: 'காலை 10:45 - 11:45', evening: 'மாலை 06:30 - 07:30' },
    6: { morning: 'காலை 10:30 - 11:30', evening: 'மாலை 07:00 - 08:00' },
  };

  // Brahma Muhurtham: 96 to 48 mins before sunrise
  const brahmaStart = sunriseMin - 96;
  const brahmaEnd = sunriseMin - 48;
  const brahmaMuhurtham = `${formatTimeHHMM(brahmaStart)} - ${formatTimeHHMM(brahmaEnd)}`;

  // Soolam & Remedy
  const soolam = SOOLAM_TABLE[dayOfWeek];

  // Thirukkural of the day
  const kuralIndex = Math.abs(diffDays) % THIRUKKURAL_COLLECTION.length;
  const thirukkural = THIRUKKURAL_COLLECTION[kuralIndex];

  // Special Festivals matching this date
  const matchedFestival = MAJOR_FESTIVALS.find(f => f.dateString === dateString);
  const matchedMuhurtham = SUBHA_MUHURTHAM_DAYS.find(m => m.dateString === dateString);

  const specialEvents = {
    title: matchedFestival ? matchedFestival.titleTamil : (matchedMuhurtham ? `சுப முகூர்த்த நன்னாள் (${matchedMuhurtham.lagnam})` : `இன்றைய தினசரி வழிபாட்டு சிறப்பு`),
    description: matchedFestival ? matchedFestival.description : (matchedMuhurtham ? `${matchedMuhurtham.suitableFor} செய்ய மிகவும் உகந்த நன்னாள். நல்நேரம்: ${matchedMuhurtham.bestTime}` : `இன்று விசேஷ வழிபாடுகள் மற்றும் குலதெய்வ பிரார்த்தனைகளுக்கு உகந்த சுப தினம். இல்லத்தில் தீபமேற்றி நல்வாழ்த்து பெறவும்.`),
    tags: matchedFestival ? [
      `#${matchedFestival.category}`,
      `#${matchedFestival.deity.split(' ')[0]}`,
      '#சுபதினம்'
    ] : (matchedMuhurtham ? ['#சுபமுகூர்த்த_நாள்', '#விசேஷம்', '#கல்யாணம்'] : ['#தினசரி_வழிபாடு', '#சித்த_யோகம்', '#சுப_நன்னாள்']),
    isSubhaMuhurtham: !!matchedMuhurtham || (dayOfWeek === 0 || dayOfWeek === 4 || dayOfWeek === 5) && currentNakshatram.auspicious,
    muhurthamType: matchedMuhurtham?.type || (isSukla ? 'valarpirai' : 'theipirai'),
  };

  // Cross Eras
  const hijriYear = year - 579;
  const kollamYear = year - 825;
  const sakaYear = year - 78;

  return {
    date,
    dateString,
    dayOfMonth: day,
    monthNameEnglish: monthNamesEnglish[month],
    yearEnglish: year,
    dayOfWeekEnglish: dayNamesEnglish[dayOfWeek],

    tamilYear,
    tamilYearCycleIndex: yearIndex,
    ayana,
    ruthu,
    tamilMonthName: TAMIL_MONTHS[tamilMonthIndex].name,
    tamilMonthIndex,
    tamilDate: tamilDateNumber,
    tamilWeekday: TAMIL_WEEKDAYS[dayOfWeek],

    nakshatram: {
      name: currentNakshatram.name,
      translit: currentNakshatram.translit,
      pada: ((diffDays % 4) + 4) % 4 + 1,
      description: currentNakshatram.auspicious ? 'சுப நட்சத்திரம் • காரிய வெற்றி தரும்' : 'நடுத்தர நட்சத்திரம் • கவனத்துடன் செயல்படவும்',
      isAuspicious: currentNakshatram.auspicious,
      durationText: 'முழு இரவு வரை நீடிக்கிறது • சுப நட்சத்திரம்',
    },
    thithi: {
      name: fullThithiName,
      paksha: isSukla ? 'Sukla' : 'Krishna',
      pakshaTamil,
      number: thithiNumber,
      durationText: `மாலை ${formatTimeHHMM(sunsetMin - 60)} வரை, பின்னர் அடுத்த திதி`,
      isPournami: isSukla && thithiNumber === 15,
      isAmavasai: !isSukla && thithiNumber === 15,
      isSashti: thithiNumber === 6,
      isEkadasi: thithiNumber === 11,
      isPradosham: thithiNumber === 13,
      isSankataharaChaturthi: !isSukla && thithiNumber === 4,
    },
    yogam: currentYogam,
    karanam: {
      name: karanaName,
    },
    chandrashtamam: {
      star: currentNakshatram.chandrashtamam,
      cautionText: 'இன்று புதிய முயற்சிகளைத் தவிர்க்கவும்',
    },

    sunrise: `காலை ${formatTimeHHMM(sunriseMin)}`,
    sunset: `மாலை ${formatTimeHHMM(sunsetMin)}`,
    nallaNeram: nallaNeramPresets[dayOfWeek],
    gowriNallaNeram: gowriPresets[dayOfWeek],
    brahmaMuhurtham,
    rahuKalam,
    yamagandam,
    kuligai,
    soolam: {
      direction: soolam.dir,
      remedy: soolam.remedy,
    },

    templePoojaTimings: {
      ushathKalam: '06:00 - 06:30',
      kalasanthi: '08:00 - 09:00',
      uchikalam: '12:00 - 12:30',
      sayaratchai: '05:30 - 06:30',
      templeName: 'மதுரை ஸ்ரீ மீனாட்சி அம்மன் அருள்மிகு ஆலயம்',
    },

    specialEvents,
    thirukkural: {
      number: thirukkural.number,
      athigaram: thirukkural.athigaram,
      kuralLine1: thirukkural.kuralLine1,
      kuralLine2: thirukkural.kuralLine2,
      porul: thirukkural.porul,
      palan: thirukkural.palan,
    },

    eras: {
      hijri: `ஷவ்வால் ${((day % 29) + 1)}, ${hijriYear}`,
      kollam: `${kollamYear} ${TAMIL_MONTHS[tamilMonthIndex].name} ${tamilDateNumber}`,
      saka: `${sakaYear}`,
    },
  };
}
