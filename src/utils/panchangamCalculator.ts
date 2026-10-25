import type { CityInfo, DayPanchangam, FestivalEvent, MuhurthamEvent } from '../types/panchangam.ts';
import { THIRUKKURAL_COLLECTION } from '../data/thirukkural.ts';
import { MAJOR_FESTIVALS, FESTIVAL_RULES } from '../data/festivals.ts';
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
 * Format minutes since midnight into HH:MM (12-hour format with அதிகாலை / காலை / மதியம் / மாலை / இரவு)
 */
function formatTime12h(minutes: number): string {
  const isNextDay = minutes >= 1440;
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const hours24 = Math.floor(normalized / 60);
  const mins = Math.floor(normalized % 60);
  let period = 'காலை';
  if (hours24 < 4) period = 'இரவு';
  else if (hours24 < 6) period = 'அதிகாலை';
  else if (hours24 < 12) period = 'காலை';
  else if (hours24 < 16) period = 'மதியம்';
  else if (hours24 < 19) period = 'மாலை';
  else period = 'இரவு';

  const h12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const hStr = h12 < 10 ? `0${h12}` : `${h12}`;
  const mStr = mins < 10 ? `0${mins}` : `${mins}`;
  return `${isNextDay ? 'மறுநாள் ' : ''}${period} ${hStr}:${mStr}`;
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
 * Astronomical Ephemeris (Jean Meeus Chapter 25 & 47 + Lahiri Chitrapaksha Ayanamsa)
 * Computes accurate Sun & Moon sidereal longitudes, Thithi, Nakshatram, Pada, and Karanam for any Julian Day.
 */
interface AstronomicalPanchangamState {
  siderealSun: number;
  siderealMoon: number;
  elongation: number;
  thithiIdx: number; // 0 to 29
  karanaIdx: number; // 0 to 59
  nakshatraIdx: number; // 0 to 26
  pada: number; // 1 to 4
}

function getAstronomicalState(jd: number): AstronomicalPanchangamState {
  const T = (jd - 2451545.0) / 36525.0;
  const deg2rad = Math.PI / 180;
  const norm = (x: number) => ((x % 360) + 360) % 360;

  // Sun true longitude
  const L0 = norm(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  const M = norm(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * deg2rad) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * M * deg2rad) +
    0.000289 * Math.sin(3 * M * deg2rad);
  const omega = 125.04 - 1934.136 * T;
  const sunLon = norm(L0 + C - 0.00569 - 0.00478 * Math.sin(omega * deg2rad));

  // Moon true longitude (Meeus Ch. 47)
  const Lp = norm(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + (T * T * T) / 538841);
  const D = norm(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + (T * T * T) / 545868);
  const Ms = norm(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + (T * T * T) / 24490000);
  const Mp = norm(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + (T * T * T) / 69699);
  const F = norm(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - (T * T * T) / 3526000);

  const A1 = norm(119.75 + 131.849 * T);
  const A2 = norm(53.09 + 479264.290 * T);
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;

  let dL = 0;
  dL += 6.288774 * Math.sin(Mp * deg2rad);
  dL += 1.274027 * Math.sin((2 * D - Mp) * deg2rad);
  dL += 0.658314 * Math.sin(2 * D * deg2rad);
  dL += 0.213618 * Math.sin(2 * Mp * deg2rad);
  dL -= 0.185116 * E * Math.sin(Ms * deg2rad);
  dL -= 0.114332 * Math.sin(2 * F * deg2rad);
  dL += 0.058793 * Math.sin((2 * D - 2 * Mp) * deg2rad);
  dL += 0.057066 * E * Math.sin((2 * D - Ms - Mp) * deg2rad);
  dL += 0.053322 * Math.sin((2 * D + Mp) * deg2rad);
  dL += 0.045758 * E * Math.sin((2 * D - Ms) * deg2rad);
  dL -= 0.040923 * E * Math.sin((Ms - Mp) * deg2rad);
  dL -= 0.034720 * Math.sin(D * deg2rad);
  dL -= 0.030383 * E * Math.sin((Ms + Mp) * deg2rad);
  dL += 0.015327 * Math.sin((2 * D - 2 * F) * deg2rad);
  dL -= 0.012528 * Math.sin((Mp + 2 * F) * deg2rad);
  dL += 0.010980 * Math.sin((Mp - 2 * F) * deg2rad);
  dL += 0.010675 * Math.sin((4 * D - Mp) * deg2rad);
  dL += 0.010034 * Math.sin(3 * Mp * deg2rad);
  dL += 0.008548 * Math.sin((4 * D - 2 * Mp) * deg2rad);
  dL -= 0.007888 * E * Math.sin((2 * D + Ms - Mp) * deg2rad);
  dL -= 0.006766 * E * Math.sin((2 * D + Ms) * deg2rad);
  dL -= 0.005163 * Math.sin((D - Mp) * deg2rad);
  dL += 0.004987 * E * Math.sin((D + Ms) * deg2rad);
  dL += 0.004036 * E * Math.sin((2 * D - Ms + Mp) * deg2rad);
  dL += 0.003958 * Math.sin(A1 * deg2rad);
  dL += 0.001962 * Math.sin((Lp - F) * deg2rad);
  dL += 0.000318 * Math.sin(A2 * deg2rad);

  const moonLon = norm(Lp + dL);

  // Lahiri (Chitrapaksha) Ayanamsa
  const ayanamsa = 23.853056 + 1.396042 * T + 0.000308 * T * T;
  const siderealSun = norm(sunLon - ayanamsa);
  const siderealMoon = norm(moonLon - ayanamsa);

  const elongation = norm(moonLon - sunLon);
  const thithiIdx = Math.floor(elongation / 12); // 0 to 29
  const karanaIdx = Math.floor(elongation / 6); // 0 to 59
  const nakshatraIdx = Math.floor(siderealMoon / (360 / 27)); // 0 to 26
  const pada = Math.floor((siderealMoon % (360 / 27)) / (360 / 108)) + 1;

  return { siderealSun, siderealMoon, elongation, thithiIdx, karanaIdx, nakshatraIdx, pada };
}

/**
 * Find when the current Thithi or Nakshatram transitions (in local minutes from 00:00 of the current day)
 */
function findTransitionMinutes(
  jdStart: number,
  startLocalMinutes: number,
  currentIdx: number,
  type: 'thithi' | 'nakshatra'
): number | null {
  const stepDays = 20 / 1440; // 20-minute steps up to 30 hours
  let prevJd = jdStart;
  for (let i = 1; i <= 90; i++) {
    const testJd = jdStart + i * stepDays;
    const state = getAstronomicalState(testJd);
    const idx = type === 'thithi' ? state.thithiIdx : state.nakshatraIdx;
    if (idx !== currentIdx) {
      let lo = prevJd;
      let hi = testJd;
      for (let b = 0; b < 8; b++) {
        const mid = (lo + hi) / 2;
        const mState = getAstronomicalState(mid);
        const mIdx = type === 'thithi' ? mState.thithiIdx : mState.nakshatraIdx;
        if (mIdx === currentIdx) lo = mid;
        else hi = mid;
      }
      const deltaMin = (((lo + hi) / 2) - jdStart) * 1440;
      return startLocalMinutes + deltaMin;
    }
    prevJd = testJd;
  }
  return null;
}

function getKaranamName(karanaIdx: number): string {
  if (karanaIdx === 0) return 'கிம்ஸ்துக்ன கரணம்';
  if (karanaIdx === 57) return 'சகுனி கரணம்';
  if (karanaIdx === 58) return 'சதுஷ்பாத கரணம்';
  if (karanaIdx === 59) return 'நாகவ கரணம்';
  const movableKaranas = [
    'பவ கரணம்',
    'பாலவ கரணம்',
    'கௌலவ கரணம்',
    'தைதுலை கரணம்',
    'கரசை கரணம்',
    'வணிசை கரணம்',
    'பத்திரை (விஷ்டி) கரணம்',
  ];
  return movableKaranas[(karanaIdx - 1) % 7];
}

const offsetFormatters = new Map<string, Intl.DateTimeFormat>();

/** Resolve an offset at an instant, never from the browser's timezone. */
export function utcOffsetAt(instant: Date, city: CityInfo): number {
  let formatter = offsetFormatters.get(city.timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-US', {timeZone: city.timeZone, timeZoneName: 'longOffset'});
    offsetFormatters.set(city.timeZone, formatter);
  }
  const parts = formatter.formatToParts(instant);
  const zone = parts.find(p => p.type === 'timeZoneName')!.value;
  if (zone === 'GMT') return 0;
  const match = zone.match(/GMT([+-])(\d{2}):(\d{2})/)!;
  return (match[1] === '-' ? -1 : 1) * (+match[2] + +match[3] / 60);
}

export function localJulianDay(date: Date, minutes: number, city: CityInfo): number {
  const wall = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) + minutes * 60000;
  let instant = wall;
  for (let i = 0; i < 3; i++) instant = wall - utcOffsetAt(new Date(instant), city) * 3600000;
  return instant / 86400000 + 2440587.5;
}

function ayanamsaAt(jd: number): number {
  const t = (jd - 2451545) / 36525;
  return 23.853056 + 1.396042 * t + 0.000308 * t * t;
}

/** Eastern horizon/ecliptic intersection; Lahiri sidereal longitude. */
export function ascendantLongitude(jd: number, city: CityInfo): number {
  const t = (jd - 2451545) / 36525;
  const rad = Math.PI / 180;
  const theta = (280.46061837 + 360.98564736629 * (jd - 2451545) +
    0.000387933 * t * t - t * t * t / 38710000 + city.lng) * rad;
  const eps = (23.439291 - 0.013004167 * t) * rad;
  const tropical = Math.atan2(Math.cos(theta),
    -(Math.sin(theta) * Math.cos(eps) + Math.tan(city.lat * rad) * Math.sin(eps))) / rad;
  return ((tropical - ayanamsaAt(jd)) % 360 + 360) % 360;
}

const RASIS = ['மேஷ', 'ரிஷப', 'மிதுன', 'கடக', 'சிம்ம', 'கன்னி', 'துலா', 'விருச்சிக', 'தனுசு', 'மகர', 'கும்ப', 'மீன'];
/** Label explicitly refers to the start of the displayed morning interval. */
export function lagnamAtTime(date: Date, city: CityInfo, time: string): string {
  const match = time.match(/(\d{2}):(\d{2})/);
  if (!match) throw new Error('Missing muhurtham start time');
  const minutes = Number(match[1]) * 60 + Number(match[2]);
  const index = Math.floor(ascendantLongitude(localJulianDay(date, minutes, city), city) / 30);
  return `${RASIS[index]} லக்னம் (தொடக்கத்தில்)`;
}

/** Tamil sunset rule: the sidereal solar sign at sunset names the civil day. */
export function tamilSolarDate(date: Date, city: CityInfo) {
  const signAt = (d: Date) => Math.floor(getAstronomicalState(
    localJulianDay(d, calculateSunTimes(d, city).sunsetMin, city)).siderealSun / 30);
  const monthIndex = signAt(date);
  let day = 1;
  for (; day <= 33; day++) {
    const previous = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
    if (signAt(previous) !== monthIndex) break;
  }
  const yearStart = date.getFullYear() - (monthIndex >= 9 || (monthIndex === 8 && date.getMonth() === 0) || (monthIndex === 11 && date.getMonth() === 3) ? 1 : 0);
  return { monthIndex, day, yearStart };
}

/**
 * Calculate approximate Sunrise and Sunset in minutes from midnight for a given city and day of year.
 */
function calculateSunTimes(date: Date, city: CityInfo): { sunriseMin: number; sunsetMin: number } {
  const startOfYearUtc = Date.UTC(date.getFullYear(), 0, 1);
  const currentUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const dayOfYear = Math.floor((currentUtc - startOfYearUtc) / (1000 * 60 * 60 * 24)) + 1;

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
  const offset = utcOffsetAt(new Date((localJulianDay(date, 720, city) - 2440587.5) * 86400000), city);
  const timeZoneMeridian = offset * 15;
  const longitudeCorrection = 4 * (city.lng - timeZoneMeridian);
  const solarNoonMin = 12 * 60 - longitudeCorrection - equationOfTime;

  const halfDayMin = (H0 / 15) * 60;
  let sunriseMin = solarNoonMin - halfDayMin;
  let sunsetMin = solarNoonMin + halfDayMin;

  // Realistic bounds for safety
  if (!Number.isFinite(sunriseMin) || !Number.isFinite(sunsetMin)) throw new Error("Invalid solar times");

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

  const solarDate = tamilSolarDate(date, city);
  const tamilMonthIndex = solarDate.monthIndex;
  const tamilDateNumber = solarDate.day;
  const cycleBaseYear = solarDate.yearStart - 1987;
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

  // Astronomical Nakshatram, Thithi, Pada & Karanam calculated at local Sunrise (Udaya Thithi / Udaya Nakshatram)
  const anchorTime = Date.UTC(2024, 3, 27);
  const currentUtcTime = Date.UTC(year, month, day);
  const diffDays = Math.round((currentUtcTime - anchorTime) / (1000 * 60 * 60 * 24));

  const jdSunrise = localJulianDay(date, sunriseMin, city);
  const astroState = getAstronomicalState(jdSunrise);

  const nakshatraIndex = astroState.nakshatraIdx;
  const currentNakshatram = NAKSHATRAMS[nakshatraIndex];
  const nextNakshatram = NAKSHATRAMS[(nakshatraIndex + 1) % 27];
  const nakshatraEndMin = findTransitionMinutes(jdSunrise, sunriseMin, nakshatraIndex, 'nakshatra');
  const nakshatraDurationText =
    nakshatraEndMin !== null
      ? `${formatTime12h(nakshatraEndMin)} வரை, பின்னர் ${nextNakshatram.name}`
      : `நாள் முழுவதும் ${currentNakshatram.name}`;

  const thithiCycleIndex = astroState.thithiIdx;
  const isSukla = thithiCycleIndex < 15;
  const thithiNumber = (thithiCycleIndex % 15) + 1;
  const paksha: 'Sukla' | 'Krishna' = isSukla ? 'Sukla' : 'Krishna';
  const pakshaTamil = isSukla ? 'சுக்கில பட்சம் (வளர்பிறை)' : 'கிருஷ்ண பட்சம் (தேய்பிறை)';
  const baseThithiName = THITHIS[(thithiNumber - 1) % 15];

  let fullThithiName = `${isSukla ? 'சுக்கில பட்ச' : 'கிருஷ்ண பட்ச'} ${baseThithiName}`;
  if (thithiNumber === 15) {
    fullThithiName = isSukla ? 'பௌர்ணமி (முழு நிலவு)' : 'அமாவாசை (இருள் நிலவு)';
  }

  const nextThithiCycleIndex = (thithiCycleIndex + 1) % 30;
  const nextIsSukla = nextThithiCycleIndex < 15;
  const nextThithiNumber = (nextThithiCycleIndex % 15) + 1;
  const nextThithiBase =
    nextThithiNumber === 15
      ? nextIsSukla
        ? 'பௌர்ணமி'
        : 'அமாவாசை'
      : THITHIS[(nextThithiNumber - 1) % 15];

  const thithiEndMin = findTransitionMinutes(jdSunrise, sunriseMin, thithiCycleIndex, 'thithi');
  const thithiDurationText =
    thithiEndMin !== null
      ? `${formatTime12h(thithiEndMin)} வரை, பின்னர் ${nextThithiBase}`
      : `நாள் முழுவதும் ${baseThithiName}`;

  // Yogam (Weekday + Star)
  const yogaIndex = (dayOfWeek + nakshatraIndex) % 3;
  const yogamNames = ['சித்த யோகம்', 'அமிர்த யோகம்', 'மரண யோகம்'] as const;
  const yogamNatures = ['Subham', 'Athiyantham', 'Varjyam'] as const;
  const currentYogam = {
    name: yogamNames[yogaIndex],
    nature: yogamNatures[yogaIndex],
  };

  // Karanam (Astronomical half-thithi)
  const karanaName = getKaranamName(astroState.karanaIdx);

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

  // Special Festivals matching this date (exact override or rule-based)
  const exactFestival = MAJOR_FESTIVALS.find(f => f.dateString === dateString);
  const ruleFestival = FESTIVAL_RULES.find(r => {
    if (r.tamilMonthIndex !== tamilMonthIndex) return false;
    if (r.fixedTamilDate !== undefined) return r.fixedTamilDate === tamilDateNumber;
    if (r.targetNakshatram !== undefined) return r.targetNakshatram === currentNakshatram.name;
    if (r.targetPaksha !== undefined && r.targetThithiNumber !== undefined) {
      return r.targetPaksha === paksha && r.targetThithiNumber === thithiNumber;
    }
    return false;
  });

  const matchedFestival = exactFestival || (ruleFestival ? {
    id: `${ruleFestival.id}_${dateString}`,
    dateString,
    titleTamil: ruleFestival.titleTamil,
    titleEnglish: ruleFestival.titleEnglish,
    tamilDateStr: `${TAMIL_MONTHS[tamilMonthIndex].name} ${String(tamilDateNumber).padStart(2, '0')}`,
    category: ruleFestival.category,
    deity: ruleFestival.deity,
    description: ruleFestival.description,
  } : undefined);

  const exactMuhurtham = SUBHA_MUHURTHAM_DAYS.find(m => m.dateString === dateString);
  const isRuleMuhurthamDay =
    currentNakshatram.auspicious &&
    currentYogam.nature !== 'Varjyam' &&
    (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) &&
    ![4, 8, 9, 14, 15].includes(thithiNumber);

  const computedLagnam = lagnamAtTime(date, city, nallaNeramPresets[dayOfWeek].morning);
  const matchedMuhurtham = exactMuhurtham || (isRuleMuhurthamDay ? {
    dateString,
    tamilDate: `${TAMIL_MONTHS[tamilMonthIndex].name} ${String(tamilDateNumber).padStart(2, '0')}`,
    dayOfWeek: TAMIL_WEEKDAYS[dayOfWeek],
    lagnam: computedLagnam,
    nakshatram: currentNakshatram.name,
    thithi: fullThithiName,
    type: isSukla ? 'valarpirai' as const : 'theipirai' as const,
    bestTime: nallaNeramPresets[dayOfWeek].morning,
    suitableFor: isSukla ? 'திருமணம், கிரஹப்பிரவேசம், சீமந்தம், புதிய தொழில்' : 'பத்திரப் பதிவு, பூமி பூஜை, வளைகாப்பு, சுப காரியங்கள்',
  } : undefined);

  const yogamTag = `#${currentYogam.name.replace(/\s+/g, '_')}`;
  const specialEvents = {
    title: matchedFestival ? matchedFestival.titleTamil : (matchedMuhurtham ? `சுப முகூர்த்த நன்னாள் (${matchedMuhurtham.lagnam})` : `இன்றைய தினசரி வழிபாட்டு சிறப்பு`),
    description: matchedFestival ? matchedFestival.description : (matchedMuhurtham ? `${matchedMuhurtham.suitableFor} செய்ய மிகவும் உகந்த நன்னாள். நல்நேரம்: ${matchedMuhurtham.bestTime}` : `இன்று விசேஷ வழிபாடுகள் மற்றும் குலதெய்வ பிரார்த்தனைகளுக்கு உகந்த தினம். இல்லத்தில் தீபமேற்றி நல்வாழ்த்து பெறவும்.`),
    tags: matchedFestival ? [
      `#${matchedFestival.category}`,
      `#${matchedFestival.deity.split(' ')[0]}`,
      yogamTag
    ] : (matchedMuhurtham ? ['#சுபமுகூர்த்த_நாள்', '#விசேஷம்', yogamTag] : ['#தினசரி_வழிபாடு', yogamTag, currentNakshatram.auspicious ? '#சுப_நட்சத்திரம்' : '#வழிபாட்டு_நாள்']),
    isSubhaMuhurtham: !!matchedMuhurtham,
    muhurthamType: matchedMuhurtham?.type || (isSukla ? 'valarpirai' : 'theipirai'),
  };

  // Saka Era (Chaitra starts around March 22, or March 21 in leap years)
  const isBeforeSakaNewYear = month < 2 || (month === 2 && day < 22);
  const sakaYear = isBeforeSakaNewYear ? year - 79 : year - 78;

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
      pada: astroState.pada,
      description: currentNakshatram.auspicious ? 'சுப நட்சத்திரம் • காரிய வெற்றி தரும்' : 'நடுத்தர நட்சத்திரம் • கவனத்துடன் செயல்படவும்',
      isAuspicious: currentNakshatram.auspicious,
      durationText: nakshatraDurationText,
    },
    thithi: {
      name: fullThithiName,
      paksha,
      pakshaTamil,
      number: thithiNumber,
      durationText: thithiDurationText,
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
      saka: `${sakaYear}`,
    },
  };
}

/**
 * Generate Festival & Viratham Events for a given Tamil year cycle (April 14 of startYear to April 13 of startYear + 1)
 */
export function getFestivalsForYear(referenceDate: Date, city: CityInfo): FestivalEvent[] {
  const refYear = referenceDate.getFullYear();
  const tamilYearStart = tamilSolarDate(referenceDate, city).yearStart;

  // If the Tamil year starts in 2024, return the curated 2024-2025 list
  if (tamilYearStart === 2024) {
    return MAJOR_FESTIVALS;
  }

  const events: FestivalEvent[] = [];
  const seenRuleIds = new Set<string>();
  const startDate = tamilYearBeginning(tamilYearStart, city); // April 14

  for (let i = 0; i < Math.round((Date.UTC(tamilYearStart + 1, 3, tamilYearBeginning(tamilYearStart + 1, city).getDate()) - Date.UTC(tamilYearStart, 3, startDate.getDate())) / 86400000); i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const p = calculateDayPanchangam(d, city);

    for (const rule of FESTIVAL_RULES) {
      if (seenRuleIds.has(rule.id)) continue;
      if (rule.tamilMonthIndex !== p.tamilMonthIndex) continue;

      let matched = false;
      if (rule.fixedTamilDate !== undefined && rule.fixedTamilDate === p.tamilDate) {
        matched = true;
      } else if (rule.targetNakshatram !== undefined && rule.targetNakshatram === p.nakshatram.name) {
        matched = true;
      } else if (
        rule.targetPaksha !== undefined &&
        rule.targetThithiNumber !== undefined &&
        rule.targetPaksha === p.thithi.paksha &&
        rule.targetThithiNumber === p.thithi.number
      ) {
        matched = true;
      }

      if (matched) {
        seenRuleIds.add(rule.id);
        events.push({
          id: `${rule.id}_${p.dateString}`,
          dateString: p.dateString,
          titleTamil: rule.titleTamil,
          titleEnglish: rule.titleEnglish,
          tamilDateStr: `${p.tamilMonthName} ${String(p.tamilDate).padStart(2, '0')}`,
          category: rule.category,
          deity: rule.deity,
          description: rule.description,
        });
      }
    }
  }

  return events;
}

/**
 * Generate Subha Muhurtham Days for a given Tamil year cycle (April 14 of startYear to April 13 of startYear + 1)
 */
export function getMuhurthamsForYear(referenceDate: Date, city: CityInfo): MuhurthamEvent[] {
  const refYear = referenceDate.getFullYear();
  const tamilYearStart = tamilSolarDate(referenceDate, city).yearStart;

  if (tamilYearStart === 2024) {
    return SUBHA_MUHURTHAM_DAYS;
  }

  const events: MuhurthamEvent[] = [];
  const startDate = tamilYearBeginning(tamilYearStart, city);

  for (let i = 0; i < Math.round((Date.UTC(tamilYearStart + 1, 3, tamilYearBeginning(tamilYearStart + 1, city).getDate()) - Date.UTC(tamilYearStart, 3, startDate.getDate())) / 86400000); i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const dayOfWeek = d.getDay();
    // Prioritize traditional wedding/auspicious weekdays (Sun, Mon, Wed, Thu, Fri)
    if (dayOfWeek !== 0 && dayOfWeek !== 1 && dayOfWeek !== 4 && dayOfWeek !== 5) continue;

    const p = calculateDayPanchangam(d, city);
    if (
      p.nakshatram.isAuspicious &&
      p.yogam.nature !== 'Varjyam' &&
      [2, 3, 5, 7, 10, 11, 12, 13].includes(p.thithi.number)
    ) {
      // Keep ~2-3 top muhurthams per Tamil month for a clean curated view
      const monthCount = events.filter(e => e.tamilDate.startsWith(p.tamilMonthName)).length;
      if (monthCount >= 2) continue;

      const isSukla = p.thithi.paksha === 'Sukla';
      events.push({
        dateString: p.dateString,
        tamilDate: `${p.tamilMonthName} ${String(p.tamilDate).padStart(2, '0')}`,
        dayOfWeek: p.tamilWeekday,
        lagnam: lagnamAtTime(d, city, p.nallaNeram.morning!),
        nakshatram: p.nakshatram.name,
        thithi: p.thithi.name,
        type: isSukla ? 'valarpirai' : 'theipirai',
        bestTime: p.nallaNeram.morning || 'காலை 07:30 - 09:00',
        suitableFor: isSukla
          ? 'திருமணம், கிரஹப்பிரவேசம், சீமந்தம், புதிய தொழில்'
          : 'பத்திரப் பதிவு, பூமி பூஜை, வளைகாப்பு, சுப காரியங்கள்',
      });
    }
  }

  return events;
}

/**
 * Dynamically compute the next 5 upcoming Viratham / Auspicious days starting from targetDate
 */
export function getUpcomingVirathams(
  targetDate: Date,
  city: CityInfo
): { title: string; dateLabel: string; dateStr: string }[] {
  const results: { title: string; dateLabel: string; dateStr: string }[] = [];
  const tamilMonthsGregorian = [
    'ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்',
    'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'
  ];

  for (let offset = 1; offset <= 45 && results.length < 5; offset++) {
    const d = new Date(targetDate);
    d.setDate(targetDate.getDate() + offset);
    const p = calculateDayPanchangam(d, city);

    let title: string | null = null;
    const matchedFest = MAJOR_FESTIVALS.find(f => f.dateString === p.dateString) ||
      FESTIVAL_RULES.find(r => {
        if (r.tamilMonthIndex !== p.tamilMonthIndex) return false;
        if (r.fixedTamilDate !== undefined) return r.fixedTamilDate === p.tamilDate;
        if (r.targetNakshatram !== undefined) return r.targetNakshatram === p.nakshatram.name;
        if (r.targetPaksha !== undefined && r.targetThithiNumber !== undefined) {
          return r.targetPaksha === p.thithi.paksha && r.targetThithiNumber === p.thithi.number;
        }
        return false;
      });
    if (matchedFest) {
      title = matchedFest.titleTamil;
    } else if (p.thithi.isPournami) {
      title = `${p.tamilMonthName} பௌர்ணமி விரதம்`;
    } else if (p.thithi.isAmavasai) {
      title = `${p.tamilMonthName} அமாவாசை வழிபாடு`;
    } else if (p.thithi.isEkadasi) {
      title = `${p.thithi.paksha === 'Sukla' ? 'வளர்பிறை' : 'தேய்பிறை'} ஏகாதசி விரதம்`;
    } else if (p.thithi.isPradosham) {
      title = `${p.tamilWeekday.replace('க்கிழமை', '')} பிரதோஷ வழிபாடு`;
    } else if (p.thithi.isSashti && p.thithi.paksha === 'Sukla') {
      title = `${p.tamilMonthName} சஷ்டி விரதம்`;
    } else if (p.thithi.isSankataharaChaturthi) {
      title = 'சங்கடஹர சதுர்த்தி விரதம்';
    }

    if (title) {
      const dayStr = String(d.getDate()).padStart(2, '0');
      const monthTamil = tamilMonthsGregorian[d.getMonth()];
      const dateLabel = offset === 1
        ? `${monthTamil} ${dayStr} (நாளை)`
        : `${monthTamil} ${dayStr}, ${d.getFullYear()}`;
      results.push({
        title,
        dateLabel,
        dateStr: p.dateString,
      });
    }
  }

  return results;
}

function tamilYearBeginning(year: number, city: CityInfo): Date {
  for (let day = 10; day <= 20; day++) {
    const date = new Date(year, 3, day);
    const tamil = tamilSolarDate(date, city);
    if (tamil.monthIndex === 0 && tamil.day === 1) return date;
  }
  throw new Error('Tamil new year outside supported search interval');
}
