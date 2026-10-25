# Sacred Tamil Daily Calendar & Divine Panchangam (ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம்)

An authentic, culturally faithful, and comprehensive Tamil Daily Calendar (தமிழ் தினசரி நாட்காட்டி & பஞ்சாங்கம்) web application crafted strictly to replicate the look, feel, and spiritual precision of traditional Tamil wall calendars as showcased in the reference design.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were aligned based on your clarifications:

- **Confirmed Decision 1: Date Browsing Scope**: Current live date with full, seamless date-picker navigation and forward/backward day-by-day and month-by-month browsing spanning 2024 through 2027+, backed by a robust algorithmic Tamil ephemeris engine.
- **Confirmed Decision 2: Multi-View System**: Complete support for all primary views from the header navigation:
  1. **இன்றைய நாட்காட்டி (Today's Daily Sheet)**: Full sacred wall-calendar tear-off sheet with brass corner rivets, auspicious header invocation, Tamil year/ayana/ruthu, giant vermilion date, Nakshatram, Thithi, Yogam, Karanam, special festivals, Thirukkural quote, auspicious and Rahu/Yama timings, and temple pooja schedules.
  2. **மாதக் காலண்டர் (Monthly Grid)**: Full monthly view displaying Gregorian and Tamil dates side-by-side, along with Muhurtham badges, Amavasai, Pournami, and Ekadasi markers.
  3. **சுப முகூர்த்த நாட்கள் (Subha Muhurtham Dates)**: Curated list of auspicious wedding, housewarming, and business initiation muhurthams for the year.
  4. **பண்டிகைகள் & விரதங்கள் (Festivals & Fasting Days)**: Searchable and filterable calendar of all major Tamil festivals, temple utsavams, and viratham dates.
  5. **பஞ்சாங்கக் குறிப்புகள் (Panchangam Guide & Glossary)**: Clear Tamil and English reference guide explaining the 5 limbs (Angas) of Panchangam: Varam, Thithi, Nakshatram, Yogam, and Karanam.
- **Confirmed Decision 3: City Ephemeris Selector**: Interactive city dropdown supporting Chennai, Madurai, Coimbatore, Tiruchirappalli, Tirunelveli, Salem, Thanjavur, as well as diaspora centers like Singapore, Kuala Lumpur, Colombo, London, and San Jose, dynamically adjusting sunrise, sunset, Rahu Kalam, and Gowri timings.

---

## 1. Overview & Core Concept

In millions of Tamil households around the world, the morning begins by looking at the daily calendar sheet (தினசரி காலண்டர் ஏடு)—checking the auspicious time (*நல்ல நேரம்*), avoiding *இராகு காலம்* and *எமகண்டம்*, noting the ruling *திதி* and *நட்சத்திரம்*, reading the daily *திருக்குறள்*, and observing the daily temple poojas and upcoming *விரத நாட்கள்*.

This application brings that ritual into the digital world with museum-grade typographic fidelity, authentic deep vermilion and turmeric sacred tones, and accurate astronomical calculations for Tamil solar months and lunar tithis.

---

## 2. User Experience & Visual Design

### Design Language & Authentic Palette
- **Sacred Paper Canvas (`#FBF9F3` & `#F5F3EE`)**: Warm ivory/parchment background providing comfortable reading and traditional paper texture.
- **Vermilion / Sindoor Red (`#690600` primary, `#8B1E0F` container)**: Used for sacred borders, calendar sheet header ribbons, today indicators, and festival badges.
- **Turmeric Gold / Deep Saffron (`#9E4300`, `#D96B27`)**: Accent highlights for auspicious periods, Kolam borders, and deity festival callouts.
- **Authentic Typography**:
  - Tamil Script: Elegant Noto Sans Tamil / Arima / system Tamil font stacks with precise kerning and high-contrast numerals.
  - English Reference: EB Garamond for editorial headings, Space Grotesk / tabular numerals for astronomical timings.

### Key Layout Sections (Matching Reference Design)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 卐 ஸ்ரீ கணேசாய நமஹ • சுபமஸ்து | குரோதி வருடம் - தட்சிணாயணம் | ஸ்ரீ நாராயண பிரசன்னம் 卐   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 卐 ஸ்ரீ சுபமுகூர்த்த பஞ்சாங்கம்      [இன்றைய நாட்காட்டி] [மாதக் காலண்டர்] [முகூர்த்தம்] ... [சென்னை ▼] │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ < முந்தைய நாள்     [ 📅 இன்று (Today) ]     அடுத்த நாள் >     [ 27/04/2024 📅 ]   [🖨️] [🔗]│
├──────────────────────────────────────────────────────────────────┬─────────────────────┤
│  DAILY SHEET CONTAINER (Corner Rivets & Sacred Wood Frame)       │ SIDEBAR CARDS       │
│  ┌────────────────────────────────────────────────────────────┐  │ ┌─────────────────┐ │
│  │ 卐 ஸ்ரீ சுபமுகூர்த்த திருப்பள்ளி நாட்காட்டி  தினசரி ஏடு • 82 卐  │  │ │ சுப மங்கல     │ │
│  │ ---------------------------------------------------------- │  │ │ நேரங்கள்        │ │
│  │ சுபகிருது வருடம் • உத்தராயணம் • வசந்த ருது • சித்திரை     │  │ │ நல்ல நேரம்     │ │
│  │ ┌───────────────┐                  ┌─────────────────────┐ │  │ │ கௌரி நேரம்    │ │
│  │ │   சித்திரை     │       14         │    வெள்ளிக்கிழமை    │ │  │ │ பிரம்ம முகூர்த்தம்││
│  │ └───────────────┘  (Vermilion Huge) └─────────────────────┘ │  │ └─────────────────┘ │
│  │ சூரிய உதயம்: 05:58             சூரிய அஸ்தமனம்: 06:22         │  │ ┌─────────────────┐ │
│  │ ┌─────────────────────────┐  ┌───────────────────────────┐ │  │ │ கவனிக்க வேண்டிய │ │
│  │ │ இன்றைய நட்சத்திரம்     │  │ திதி விவரம்               │ │  │ │ நேரங்கள்        │ │
│  │ │ உத்திரம் (Uthiram)      │  │ சுக்கில பட்ச பஞ்சமி       │ │  │ │ ராகு காலம்       │ │
│  │ └─────────────────────────┘  └───────────────────────────┘ │  │ │ எமகண்டம்        │ │
│  │ ┌────────────────────────────────────────────────────────┐ │  │ │ குளிகை          │ │
│  │ │ இன்றைய முக்கிய விசேஷங்கள் & திருவிழாக்கள்             │ │  │ │ சூலம் & பரிகாரம் │ │
│  │ │ மதுரை மீனாட்சி சுந்தரேஸ்வரர் திருக்கோயில் திருக்கல்யாணம்│ │  │ │ சந்திராஷ்டமம்    │ │
│  │ └────────────────────────────────────────────────────────┘ │  │ └─────────────────┘ │
│  │ English Date: 27th April 2024, Saturday | Hijri | Kollam   │  │ ┌─────────────────┐ │
│  └────────────────────────────────────────────────────────────┘  │ │ திருக்கோயில்    │ │
│  ┌────────────────────────────────────────────────────────────┐  │ │ பூஜை காலங்கள்   │ │
│  │ இன்றைய ஆன்மீக சிந்தனை & திருக்குறள்                         │  │ └─────────────────┘ │
│  │ "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு."           │  │ ┌─────────────────┐ │
│  │ பொருள்: எழுத்துக்களுக்கெல்லாம் முதலாவது 'அ' என்ற எழுத்து... │  │ │ அடுத்து வரும்    │ │
│  └────────────────────────────────────────────────────────────┘  │ │ விரத நாட்கள்    │ │
│                                                                  │ └─────────────────┘ │
└──────────────────────────────────────────────────────────────────┴─────────────────────┘
```

---

## 3. Key Technical Architecture & Implementation Steps

### Ephemeris & Panchangam Calculation Engine
- **Tamil Solar Calendar Mapping**:
  - 12 Tamil Months: சித்திரை (Chithirai), வைகாசி (Vaikasi), ஆனி (Aani), ஆடி (Aadi), ஆவணி (Avani), புரட்டாசி (Purattasi), ஐப்பசி (Aippasi), கார்த்திகை (Karthigai), மார்கழி (Margazhi), தை (Thai), மாசி (Masi), பங்குனி (Panguni).
  - 60-Year Tamil Cycle (பிரபவ, விபவ ... குரோதி, விசுவாவசு, etc.).
- **5 Angas Calculation**:
  - **Varam (வாரம்)**: ஞாயிறு (Sun) to சனி (Sat).
  - **Thithi (திதி)**: 15 Sukla Paksha (வளர்பிறை) + 15 Krishna Paksha (தேய்பிறை) including அமாவாசை (Amavasai) and பௌர்ணமி (Pournami) with transition time.
  - **Nakshatram (நட்சத்திரம்)**: 27 Stars (அஸ்வினி to ரேவதி) with duration and auspiciousness indicators.
  - **Yogam (யோகம்)**: சித்த யோகம், அமிர்த யோகம், மரண யோகம்.
  - **Karanam (கரணம்)**: பவம், பாலவம், கௌலவம், தைதுலை, கரசை, வணிசை, பத்திரை, சகுனி, சதுஷ்பாதம், நாகவம், கிownership.
- **Astronomical & Muhurtham Calculations**:
  - Solar equations for exact Sunrise & Sunset according to selected city latitude/longitude.
  - Rahu Kalam, Yamagandam, and Kuligai computed accurately from the day's span.
  - Gowri Nalla Neram (Day & Night divisions).
  - Direction of Soolam (சூலம்) and traditional remedy (சூலப் பரிகாரம்) for all 7 weekdays.
  - Chandrashtamam (சந்திராஷ்டமம்) ruling star for the day.
- **Thirukkural Engine**:
  - Complete curated repository of inspirational Thirukkurals with Athigaram, Tamil couplet, simple Tamil explanation, and English translation.

### Interactive Features & Views
1. **Interactive Date Navigation**: Instant flip to Previous Day, Next Day, Today, or any date via the customized date picker.
2. **Monthly Grid View**: Traditional high-density wall calendar view showing all dates with Muhurtham stars, Amavasai, Pournami, and Pradosham highlights.
3. **Subha Muhurtham Directory**: Categorized into Valarpirai Muhurtham and general auspicious wedding/grihapravesam dates for the year.
4. **Festival & Fasting Calendar**: Filterable by Major Hindu Festivals, Shaivite, Vaishnavite, Murugan Fasting days (Sashti, Krithigai), and Government Holidays.
5. **Print & Share Dialog**: Clean print stylesheet formatted to produce an exact physical Tamil daily calendar tear-off page for home or puja room.

---

## 4. Verification & Testing Plan
- Test real-time date switching and leap year calculations.
- Verify exact synchronization of Tamil month and day against standard Tamil almanacs.
- Verify accurate Rahu Kalam and Soolam pariharam rules across all 7 weekdays.
- Validate responsive layout from 360px mobile view to 1440px+ desktop view.
- Verify print formatting for high-resolution printable calendar sheets.
