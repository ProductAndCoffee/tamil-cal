import assert from 'node:assert/strict';
import { CITIES } from '../src/data/cities.ts';
import { tamilSolarDate, utcOffsetAt, calculateDayPanchangam, ascendantLongitude, localJulianDay, lagnamAtTime, getNextAmavasya } from '../src/utils/panchangamCalculator.ts';
const chennai = CITIES[0];
for (const year of [2024, 2025, 2026, 2027, 2028]) {
  let previous = tamilSolarDate(new Date(year - 1, 11, 31), chennai);
  for (let date = new Date(year, 0, 1); date.getFullYear() === year; date.setDate(date.getDate() + 1)) {
    const current = tamilSolarDate(date, chennai);
    if (current.monthIndex === previous.monthIndex) assert.equal(current.day, previous.day + 1, date.toDateString());
    else { assert.equal(current.day, 1); assert.equal(current.monthIndex, (previous.monthIndex + 1) % 12); }
    previous = current;
  }
}
for (const [id, winter, summer] of [['london', 0, 1], ['newyork', -5, -4], ['chennai', 5.5, 5.5]] as const) {
  const city = CITIES.find(c => c.id === id)!;
  assert.equal(utcOffsetAt(new Date('2026-01-15T12:00:00Z'), city), winter);
  assert.equal(utcOffsetAt(new Date('2026-07-15T12:00:00Z'), city), summer);
}
const london = CITIES.find(c => c.id === 'london')!;
assert.equal(utcOffsetAt(new Date('2026-03-29T00:59:00Z'), london), 0);
assert.equal(utcOffsetAt(new Date('2026-03-29T01:00:00Z'), london), 1);
assert.equal(utcOffsetAt(new Date('2026-10-25T00:59:00Z'), london), 1);
assert.equal(utcOffsetAt(new Date('2026-10-25T01:00:00Z'), london), 0);
// Independent geometric check: the computed ascendant lies on the eastern horizon.
for (const city of CITIES) for (const hour of [6, 9, 12, 18]) {
  const jd = localJulianDay(new Date(2026, 5, 1), hour * 60, city);
  const t = (jd - 2451545) / 36525, rad = Math.PI / 180;
  const lon = (ascendantLongitude(jd, city) + 23.853056 + 1.396042*t + 0.000308*t*t) * rad;
  const eps = (23.439291 - 0.013004167*t)*rad;
  const theta = (280.46061837 + 360.98564736629*(jd-2451545) + 0.000387933*t*t-t*t*t/38710000+city.lng)*rad;
  const phi = city.lat*rad;
  const altitudeSin = Math.cos(phi)*(Math.cos(lon)*Math.cos(theta)+Math.sin(lon)*Math.cos(eps)*Math.sin(theta))+Math.sin(phi)*Math.sin(lon)*Math.sin(eps);
  const east = -Math.sin(theta)*Math.cos(lon)+Math.cos(theta)*Math.sin(lon)*Math.cos(eps);
  assert.ok(Math.abs(altitudeSin) < 1e-8);
  assert.ok(east > 0);
}
const may = calculateDayPanchangam(new Date(2026,4,31),chennai);
const june = calculateDayPanchangam(new Date(2026,5,1),chennai);
assert.equal(june.tamilDate,may.tamilDate+1);
assert.notEqual(lagnamAtTime(new Date(2026,5,1),chennai,'09:00'), lagnamAtTime(new Date(2026,5,1),chennai,'15:00'));
console.log('Passed: five years of date continuity, timezone transitions, eastern-horizon geometry, and regression cases.');

// Countdown and navigation target agree with the calendar, including year rollover and DST.
for (const city of [chennai, london, CITIES.find(c => c.id === 'newyork')!]) {
  for (const start of [new Date(2026, 9, 25), new Date(2026, 11, 25), new Date(2026, 2, 28)]) {
    const next = getNextAmavasya(start, city)!;
    assert.ok(next);
    assert.ok(calculateDayPanchangam(next.date, city).thithi.isAmavasai);
    const expected = new Date(start.getFullYear(), start.getMonth(), start.getDate() + next.daysUntil);
    assert.equal(next.date.getTime(), expected.getTime());
    assert.equal(getNextAmavasya(next.date, city)!.daysUntil, 0);
    for (let day = 0; day < next.daysUntil; day++) {
      assert.equal(calculateDayPanchangam(new Date(start.getFullYear(), start.getMonth(), start.getDate() + day), city).thithi.isAmavasai, false);
    }
  }
}
assert.equal(getNextAmavasya(new Date(NaN), chennai), null);
console.log('Passed: Amavasya countdown, first matching date, current-day target, year rollover and DST.');
