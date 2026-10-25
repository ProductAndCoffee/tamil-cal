import React from 'react';
import { BookOpen, Compass, Sun, Moon, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { SOOLAM_TABLE, TAMIL_WEEKDAYS, NAKSHATRAMS, THITHIS } from '../utils/panchangamCalculator.ts';

export const GlossaryView: React.FC = () => {
  return (
    <div className="w-full bg-[#fcfbf7] rounded-lg border-2 border-[#c2b299] shadow-md p-3 sm:p-6 text-[#1b1c19] space-y-6">
      
      {/* Header Banner */}
      <div className="bg-[#690600] text-[#fef08a] px-4 py-3 rounded-t shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold font-serif-tamil tracking-wide flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#fbbf24]" />
          <span>பஞ்சாங்கக் குறிப்புகள் &amp; வழிகாட்டி (Panchangam Guide &amp; Glossary)</span>
        </h2>
        <p className="text-xs text-[#fed7aa] font-medium font-serif-tamil mt-0.5">
          பஞ்சாங்கம் என்பது பஞ்ச + அங்கம் (ஐந்து அங்கங்கள்) கொண்ட வானியல் காலக் கணித முறையாகும்
        </p>
      </div>

      {/* 5 Angas Overview */}
      <div className="bg-[#fdfcf9] border border-[#e5dcce] rounded-lg p-4">
        <h3 className="text-base font-bold font-serif-tamil text-[#690600] border-b border-[#ebdccb] pb-2 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#b45309]" />
          <span>பஞ்சாங்கத்தின் ஐந்து அங்கங்கள் (5 Angas)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-3 text-xs font-serif-tamil">
          <div className="p-3 rounded bg-[#f7f3eb] border border-[#e8ded0]">
            <div className="font-bold text-[#8b1e0f] text-sm">1. வாரம் (Varam)</div>
            <div className="text-stone-500 text-[10px] font-sans mt-0.5">சூரியன் முதல் சனி வரை</div>
            <p className="mt-2 text-stone-700 leading-relaxed text-[11px]">
              ஞாயிறு முதல் சனி வரையிலான 7 கிழமைகள். வார அதிபதிகள் அன்றாட ஆற்றலை வழிநடத்துகின்றனர்.
            </p>
          </div>

          <div className="p-3 rounded bg-[#f7f3eb] border border-[#e8ded0]">
            <div className="font-bold text-[#8b1e0f] text-sm">2. திதி (Thithi)</div>
            <div className="text-stone-500 text-[10px] font-sans mt-0.5">சந்திரனின் பிறைக் காலம்</div>
            <p className="mt-2 text-stone-700 leading-relaxed text-[11px]">
              சூரியனுக்கும் சந்திரனுக்கும் இடைப்பட்ட 12 பாகை நகர்வு. வளர்பிறை 15, தேய்பிறை 15 என மொத்தம் 30 திதிகள்.
            </p>
          </div>

          <div className="p-3 rounded bg-[#f7f3eb] border border-[#e8ded0]">
            <div className="font-bold text-[#8b1e0f] text-sm">3. நட்சத்திரம் (Nakshatra)</div>
            <div className="text-stone-500 text-[10px] font-sans mt-0.5">27 விண்மீன் மண்டலங்கள்</div>
            <p className="mt-2 text-stone-700 leading-relaxed text-[11px]">
              சந்திரன் வானில் கடந்து செல்லும் 27 நட்சத்திரங்கள். அஸ்வினி முதல் ரேவதி வரை ஒவ்வொரு நட்சத்திரத்திற்கும் 4 பாதங்கள்.
            </p>
          </div>

          <div className="p-3 rounded bg-[#f7f3eb] border border-[#e8ded0]">
            <div className="font-bold text-[#8b1e0f] text-sm">4. யோகம் (Yogam)</div>
            <div className="text-stone-500 text-[10px] font-sans mt-0.5">சுப காரிய உகப்பு</div>
            <p className="mt-2 text-stone-700 leading-relaxed text-[11px]">
              கிழமையும் நட்சத்திரமும் இணையும்போது ஏற்படும் விளைவு: சித்த யோகம், அமிர்த யோகம் (மிகச் சிறப்பு), மரண யோகம் (தவிர்க்கப்பட வேண்டியது).
            </p>
          </div>

          <div className="p-3 rounded bg-[#f7f3eb] border border-[#e8ded0]">
            <div className="font-bold text-[#8b1e0f] text-sm">5. கரணம் (Karanam)</div>
            <div className="text-stone-500 text-[10px] font-sans mt-0.5">திதியின் அரைப் பங்கு</div>
            <p className="mt-2 text-stone-700 leading-relaxed text-[11px]">
              ஒரு திதியின் பாதி அளவு. மொத்தம் 11 கரணங்கள் (பவம், பாலவம், கௌலவம், தைதுலை, கரசை, வணிசை, பத்திரை போன்றவை).
            </p>
          </div>
        </div>
      </div>

      {/* Auspicious & Inauspicious Times Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Auspicious */}
        <div className="bg-[#fdfcf9] border border-[#e5dcce] rounded-lg p-4">
          <h3 className="text-base font-bold font-serif-tamil text-[#1b5e20] border-b border-[#ebdccb] pb-2 flex items-center gap-2">
            <Sun className="w-4 h-4 text-emerald-600" />
            <span>சுப நேரங்களின் தாத்பர்யம்</span>
          </h3>

          <div className="mt-3 space-y-3 text-xs text-stone-700 font-serif-tamil">
            <div>
              <div className="font-bold text-[#690600]">நல்ல நேரம் (Nalla Neram):</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                தினமும் காலை மற்றும் மாலையில் அமைவது. சுப காரியங்கள் பேச, புதுப்பணிகள் துவங்க, பயணம் மேற்கொள்ள மிகச் சிறந்தது.
              </p>
            </div>

            <div>
              <div className="font-bold text-[#690600]">கௌரி நல்ல நேரம்:</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                கௌரி பஞ்சாங்க முறையில் அமிர்தம், சுபம், லாபம் மற்றும் உதயம் ஆகிய நான்கு உன்னத ஹோரை காலங்களைக் குறிக்கும்.
              </p>
            </div>

            <div>
              <div className="font-bold text-[#690600]">பிரம்ம முகூர்த்தம்:</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                சூரிய உதயத்திற்கு ஒன்றரை மணி நேரத்திற்கு முன்பு (விடியற்காலை 4:30 முதல் 5:18 வரை). சரஸ்வதி வாசம் செய்யும் நேரம்; தியானம், கல்வி, பிரார்த்தனைக்கு உன்னத காலம்.
              </p>
            </div>
          </div>
        </div>

        {/* Inauspicious */}
        <div className="bg-[#fdfcf9] border border-[#f3d9d3] rounded-lg p-4">
          <h3 className="text-base font-bold font-serif-tamil text-[#8b1e0f] border-b border-[#f4cfc6] pb-2 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-red-600" />
            <span>கவனிக்க வேண்டிய நேரங்கள்</span>
          </h3>

          <div className="mt-3 space-y-3 text-xs text-stone-700 font-serif-tamil">
            <div>
              <div className="font-bold text-[#8b1e0f]">ராகு காலம் (Rahu Kalam):</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                ராகு பகவானுக்குரிய நேரம் (ஒன்றரை மணி நேரம்). புதிய நற்காரியங்கள், ஒப்பந்தங்கள், திருமணம் போன்றவற்றிற்கு தவிர்க்கப்பட வேண்டும். துர்க்கை வழிபாட்டிற்கு உகந்தது.
              </p>
            </div>

            <div>
              <div className="font-bold text-[#8b1e0f]">எமகண்டம் (Yamagandam):</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                எமதர்ம ராஜனுக்குரிய காலம். சுப காரியங்களைத் தொடங்கக் கூடாது; ஏதேனும் விபத்து அல்லது விரயம் நேர வாய்ப்புள்ளது என்பதால் விழிப்புடன் இருக்க வேண்டும்.
              </p>
            </div>

            <div>
              <div className="font-bold text-[#8b1e0f]">குளிகை (Kuligai):</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                சனி பகவானின் மைந்தனான குளிகனுக்குரிய நேரம். இந்த நேரத்தில் செய்யும் செயல் மீண்டும் மீண்டும் நடக்கும் என்பதால், சுப காரியங்கள், சேமிப்பு, நகை வாங்கலாம். அசுப காரியங்களைத் தவிர்க்கவும்.
              </p>
            </div>

            <div>
              <div className="font-bold text-[#8b1e0f]">சந்திராஷ்டமம் (Chandrashtamam):</div>
              <p className="mt-0.5 leading-relaxed text-stone-600">
                ஒருவரது ராசிக்கு எட்டாம் இடத்தில் சந்திரன் சஞ்சரிக்கும் இரண்டேகால் நாட்கள். அன்று மனக்குழப்பம் ஏற்படலாம் என்பதால் புதிய முயற்சிகளையும் வாதங்களையும் தவிர்க்க வேண்டும்.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Soolam & Daily Remedy Table */}
      <div className="bg-[#fdfcf9] border border-[#e5dcce] rounded-lg p-4">
        <h3 className="text-base font-bold font-serif-tamil text-[#690600] border-b border-[#ebdccb] pb-2 flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#b45309]" />
          <span>கிழமை வாரியாக சூலம் &amp; பரிகாரம் (Direction of Soolam &amp; Remedies)</span>
        </h3>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs font-serif-tamil text-left">
            <thead>
              <tr className="bg-[#f7f2e9] text-[#690600] border-b border-[#ddcfbe]">
                <th className="py-2 px-3">கிழமை (Day)</th>
                <th className="py-2 px-3">சூலம் திசை (Soolam Direction)</th>
                <th className="py-2 px-3">சூலப் பரிகாரம் (Remedy)</th>
                <th className="py-2 px-3">விளக்கம்</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e7db]">
              {SOOLAM_TABLE.map((s) => (
                <tr key={s.day} className="hover:bg-[#faf4ea]">
                  <td className="py-2 px-3 font-bold text-stone-800">{TAMIL_WEEKDAYS[s.day]}</td>
                  <td className="py-2 px-3 text-[#8b1e0f] font-semibold">{s.dir}</td>
                  <td className="py-2 px-3 font-medium text-amber-900">{s.remedy}</td>
                  <td className="py-2 px-3 text-stone-500 text-[11px]">
                    குறிப்பிட்ட திசையில் பிரயாணம் செய்ய நேர்ந்தால் பரிகார உணவை உண்டு புறப்படவும்
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
