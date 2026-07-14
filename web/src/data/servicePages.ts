export interface Industry {
  slug: string;
  name: string;
  businessType: string;
  plural: string;
  callType: string;
  avgJobValue: string;
  painPoint: string;
  urgencyLine: string;
  // Web design
  webUse: string;
  webLead: string;
  webExample: string;
  // Reactivation
  reactivationWho: string;
  reactivationWin: string;
  reactivationCycle: string;
  // Membership
  membershipWin: string;
  membershipICP: string;
}

export interface City {
  slug: string;
  name: string;
  province: string;
  tier: 1 | 2;
  context: string;
}

export const industries: Industry[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    businessType: 'plumber',
    plural: 'plumbers',
    callType: 'service call',
    avgJobValue: '$400–$1,200',
    painPoint: 'A burst pipe or backed-up drain is an emergency. When a homeowner calls and gets voicemail, they immediately call the next plumber on the list — and that job is gone.',
    urgencyLine: 'Plumbing leads don\'t wait. A homeowner with a burst pipe will call 3 plumbers in 5 minutes.',
    webUse: 'emergency contact form, service area map, before/after photos, and transparent pricing tiers',
    webLead: 'quote requests and emergency call-ins',
    webExample: 'Homeowners searching "plumber near me at 11pm" find your site, see your pricing and coverage area, and call or submit a form before checking a competitor.',
    reactivationWho: 'past customers who had a repair done 6–18 months ago and haven\'t booked a maintenance check, water heater inspection, or follow-up service',
    reactivationWin: 'a seasonal maintenance offer ("your water heater is 1 year older — free inspection this month") reactivates past customers who already trust you',
    reactivationCycle: 'We segment your past customer list, craft a personalized SMS + email sequence, and run 3 weeks of automated follow-up. If $3,000 in booked jobs isn\'t hit, we run the next cycle free.',
    membershipWin: 'a steady pipeline of new plumbing leads, zero missed emergency calls, and quarterly reactivation of past customers for maintenance work',
    membershipICP: 'plumbing companies doing $15k–$80k/mo in revenue that want a predictable, growing lead flow without hiring a marketing person',
  },
  {
    slug: 'hvac',
    name: 'HVAC',
    businessType: 'HVAC company',
    plural: 'HVAC companies',
    callType: 'service or install call',
    avgJobValue: '$800–$8,000',
    painPoint: 'When the furnace dies in winter or the AC goes out in summer, homeowners are calling every HVAC company they can find. Miss that call and you miss a $2,000+ job.',
    urgencyLine: 'HVAC calls peak exactly when you\'re most slammed — a missed call in peak season costs you thousands.',
    webUse: 'seasonal service pages (AC tune-up, furnace install), financing options, emergency availability badge, and a fast quote form',
    webLead: 'installation estimates and seasonal tune-up bookings',
    webExample: 'A homeowner searches "AC tune-up Calgary" in April — your landing page with clear pricing, availability, and a 30-second quote form captures the lead before they call 3 competitors.',
    reactivationWho: 'customers who had a repair or seasonal service 12–24 months ago and haven\'t booked their annual maintenance or a system upgrade',
    reactivationWin: 'a pre-season message ("summer is 6 weeks away — book your AC tune-up now before the rush") converts past customers into predictable repeat revenue',
    reactivationCycle: 'We segment your customer list by service date and system age, run a 3-week SMS + email campaign, and guarantee $3,000 in booked services — or the next cycle is free.',
    membershipWin: 'consistent off-season leads, zero missed emergency calls during peak season, and a quarterly reactivation campaign that keeps your service schedule full',
    membershipICP: 'HVAC companies with 2–15 technicians that want to smooth out seasonal revenue swings and stop relying on word-of-mouth alone',
  },
  {
    slug: 'dentist',
    name: 'Dentist',
    businessType: 'dental office',
    plural: 'dental offices',
    callType: 'appointment request',
    avgJobValue: '$200–$3,000',
    painPoint: 'New patients calling to book are the most valuable calls your front desk gets. If no one picks up, they book with the dentist down the street — and they don\'t call back.',
    urgencyLine: 'A patient who can\'t reach you books with a competitor. That\'s a lifetime of recurring revenue lost.',
    webUse: 'online booking integration, service pages (cleanings, whitening, implants), insurance accepted, new patient offer, and a contact form',
    webLead: 'new patient appointment bookings and consultation requests',
    webExample: 'A family searching "dentist accepting new patients in [city]" finds your site, sees your services and accepted insurance, and books directly — without calling.',
    reactivationWho: 'patients who haven\'t visited in 12–24 months — typically adults who skipped their recall appointment and haven\'t rebooked',
    reactivationWin: 'a personalized recall message ("It\'s been a while — your 6-month check-up is overdue. Book in 30 seconds.") can fill your schedule for weeks from patients who already trust you',
    reactivationCycle: 'We pull your inactive patient list (12–24 months no-show), run a 3-week SMS + email recall campaign, and guarantee $3,000 in booked appointments — or the next cycle is free.',
    membershipWin: 'a full pipeline of new patient bookings, zero missed scheduling calls, and quarterly reactivation campaigns that turn your dormant patient list into booked appointments',
    membershipICP: 'dental offices with 1–4 chairs that want more new patients each month without depending entirely on referrals or Google Ads guesswork',
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    businessType: 'roofing company',
    plural: 'roofing companies',
    callType: 'estimate or emergency call',
    avgJobValue: '$5,000–$20,000',
    painPoint: 'After a storm, every homeowner in the area is calling roofers at the same time. The one who responds first wins. Every missed call is a $10,000+ job going to your competitor.',
    urgencyLine: 'Storm damage leads are perishable — they\'re calling 4–5 roofers simultaneously and booking whoever responds first.',
    webUse: 'storm damage FAQ, photo gallery of completed roofs, insurance claim guidance, service area pages, and a fast estimate request form',
    webLead: 'free estimate requests and storm damage assessments',
    webExample: 'After a hailstorm, a homeowner searches "roofing company [city]" — your site with storm damage guidance, photo proof, and a 60-second estimate form captures the lead before they call anyone else.',
    reactivationWho: 'homeowners you did work for 2–5 years ago who may need maintenance, gutters, skylight repair, or know neighbors who need a new roof',
    reactivationWin: 'a "roof check-up" offer or referral ask to past customers generates booked estimates at near-zero acquisition cost',
    reactivationCycle: 'We segment your past customer list, run a 3-week follow-up sequence focused on maintenance + referrals, and guarantee $3,000 in booked estimates — or the next cycle is free.',
    membershipWin: 'a pipeline of estimate requests before storm season, zero missed calls when leads flood in, and quarterly outreach to past customers for maintenance and referrals',
    membershipICP: 'roofing companies doing $100k–$1M/yr that want consistent lead flow year-round instead of scrambling after every storm',
  },
  {
    slug: 'electrician',
    name: 'Electrician',
    businessType: 'electrician',
    plural: 'electricians',
    callType: 'service call',
    avgJobValue: '$300–$2,500',
    painPoint: 'Electrical issues feel urgent. Homeowners want someone on the phone immediately — if they get voicemail, they assume you\'re too busy and move on.',
    urgencyLine: 'Homeowners with electrical problems want answers now. A missed call sends them straight to your competitor.',
    webUse: 'service menu (panel upgrades, EV charger installation, troubleshooting), licensing credentials, service area, and a fast booking form',
    webLead: 'service call bookings and project estimate requests',
    webExample: 'A homeowner searching "electrician for EV charger install [city]" finds your site with clear pricing, a credential section, and a same-day booking form — and you get the job.',
    reactivationWho: 'past customers who had one-time repairs done 1–2 years ago who haven\'t booked upgrades, panel checks, or referred you to neighbors',
    reactivationWin: 'a "home safety check" offer or new service announcement (EV charger installs, smart home wiring) converts dormant customers into new bookings',
    reactivationCycle: 'We segment your past customer list, run a 3-week outreach campaign around new services or seasonal safety checks, and guarantee $3,000 in booked jobs — or the next cycle is free.',
    membershipWin: 'a consistent flow of project leads, zero missed calls from homeowners in distress, and quarterly reactivation of past customers for upgrades and referrals',
    membershipICP: 'electrical contractors with 1–8 employees who want to grow past word-of-mouth without spending money on leads that don\'t convert',
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    businessType: 'pest control company',
    plural: 'pest control companies',
    callType: 'service call',
    avgJobValue: '$200–$800',
    painPoint: 'Nobody wants to deal with pests longer than they have to. If you miss the call, they\'ll find someone who picks up within the hour.',
    urgencyLine: 'Pest control leads have zero patience — they want someone out today, not a callback tomorrow.',
    webUse: 'pest-specific service pages (bed bugs, rodents, wasps), seasonal offers, service guarantee, and a same-day booking form',
    webLead: 'same-day and next-day service bookings',
    webExample: 'A homeowner searching "bed bug treatment [city]" finds your site with a clear process, guarantee, and a same-day booking form — and you get the call before they try the next result.',
    reactivationWho: 'past customers who had a one-time treatment and haven\'t signed up for a prevention plan or seasonal service agreement',
    reactivationWin: 'a prevention plan offer ("avoid a re-infestation — our quarterly plan is $X/mo") turns one-time customers into recurring revenue',
    reactivationCycle: 'We segment your past customer list by treatment type, run a 3-week campaign focused on prevention plans, and guarantee $3,000 in new bookings — or the next cycle is free.',
    membershipWin: 'consistent new service bookings, zero missed urgent calls, and quarterly reactivation of past customers into recurring prevention plans',
    membershipICP: 'pest control operators with 1–5 technicians who want to build predictable monthly recurring revenue instead of living job-to-job',
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair',
    businessType: 'auto repair shop',
    plural: 'auto repair shops',
    callType: 'appointment or tow-in call',
    avgJobValue: '$300–$3,000',
    painPoint: 'When a car breaks down, the owner is stressed and calling shops fast. A missed call means they\'re already talking to the next shop while your phone is still ringing.',
    urgencyLine: 'Stranded drivers call until someone picks up. If it\'s not you, it\'s the shop down the street.',
    webUse: 'service menu with pricing, online appointment booking, towing availability, ASE certifications, and a quick estimate form',
    webLead: 'appointment bookings and tow-in requests',
    webExample: 'A driver searching "auto repair open Saturday [city]" lands on your site with clear hours, a booking form, and real customer reviews — and books before calling three other shops.',
    reactivationWho: 'customers who got a repair done 6–18 months ago and haven\'t returned for their next oil change, tire rotation, or scheduled maintenance',
    reactivationWin: 'a simple "your last service was X months ago — time for an oil change?" message brings back customers who would otherwise go to the nearest chain shop',
    reactivationCycle: 'We pull your service history data, run a 3-week follow-up campaign around due maintenance, and guarantee $3,000 in booked service appointments — or the next cycle is free.',
    membershipWin: 'a full appointment calendar, zero missed tow-in calls, and quarterly reactivation campaigns that pull past customers back in before they go to a competitor',
    membershipICP: 'independent auto repair shops with 2–10 bays that want to compete with dealer service centers and chain shops without a massive marketing budget',
  },
  {
    slug: 'chiropractor',
    name: 'Chiropractor',
    businessType: 'chiropractic clinic',
    plural: 'chiropractic clinics',
    callType: 'appointment request',
    avgJobValue: '$150–$600 per patient',
    painPoint: 'New patients in pain want to book fast. If your front desk is busy and the call goes unanswered, that patient — and every recurring visit they represent — walks out the door.',
    urgencyLine: 'A new patient lost to a missed call isn\'t just one appointment — it\'s months or years of recurring revenue.',
    webUse: 'condition-specific pages (back pain, sports injury, sciatica), practitioner bio, new patient offer, insurance info, and an online booking form',
    webLead: 'new patient bookings and consultation requests',
    webExample: 'Someone searching "chiropractor for lower back pain [city]" finds your site with a condition-specific page, a new patient discount, and a same-week booking form — and you get the patient.',
    reactivationWho: 'patients who visited 3–12 months ago for an acute issue and haven\'t returned for follow-up care or maintenance visits',
    reactivationWin: 'a check-in message ("How\'s the back been? We have openings this week for maintenance care") reactivates patients who got better and forgot to keep coming',
    reactivationCycle: 'We segment your patient database by last visit date and diagnosis, run a 3-week follow-up campaign, and guarantee $3,000 in rebooked appointments — or the next cycle is free.',
    membershipWin: 'a consistent flow of new patients each month, zero missed new-patient calls, and quarterly reactivation of lapsed patients who already trust your clinic',
    membershipICP: 'chiropractic clinics with 1–3 practitioners who want to fill their schedule without relying entirely on insurance referrals or walk-in traffic',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    businessType: 'landscaping company',
    plural: 'landscaping companies',
    callType: 'estimate or seasonal service call',
    avgJobValue: '$500–$5,000',
    painPoint: 'Landscaping is seasonal and competitive. Homeowners calling for spring cleanups or installations are comparing prices — whoever calls back first wins the job.',
    urgencyLine: 'Spring and fall leads flood in fast. Missing even a handful of calls during peak season costs serious revenue.',
    webUse: 'service pages (lawn care, hardscaping, snow removal, cleanup), seasonal packages, photo gallery, service area map, and a quote request form',
    webLead: 'seasonal estimate requests and maintenance plan sign-ups',
    webExample: 'A homeowner searching "landscaping company [city] spring cleanup" finds your site with before/after photos, clear pricing tiers, and a quote form — and books before the season fills up.',
    reactivationWho: 'past customers who hired you for a one-time project or last year\'s seasonal service and haven\'t rebooked or signed up for a maintenance plan',
    reactivationWin: 'a pre-season message ("spring cleanup season is almost here — book now to get on our schedule") secures returning customers before they call a competitor',
    reactivationCycle: 'We segment your past customer list by last service date and type, run a 3-week pre-season outreach campaign, and guarantee $3,000 in booked services — or the next cycle is free.',
    membershipWin: 'a full seasonal calendar booked weeks in advance, zero missed estimate calls during peak season, and quarterly reactivation to fill gaps before they happen',
    membershipICP: 'landscaping companies with 2–15 crews that want predictable year-round revenue instead of scrambling for jobs at the start of each season',
  },
  {
    slug: 'house-cleaning',
    name: 'House Cleaning',
    businessType: 'house cleaning service',
    plural: 'house cleaning services',
    callType: 'booking call',
    avgJobValue: '$150–$400 per clean',
    painPoint: 'Cleaning clients are often booking recurring service. Lose the first call and you lose a weekly or bi-weekly client worth thousands over a year.',
    urgencyLine: 'One missed call for a recurring cleaning client isn\'t $200 lost — it\'s $2,000+ per year lost.',
    webUse: 'service packages (one-time, weekly, bi-weekly, move-out), pricing calculator or range, service area, satisfaction guarantee, and an online booking form',
    webLead: 'recurring service bookings and one-time deep clean requests',
    webExample: 'Someone searching "house cleaning service [city]" finds your site with clear packages, transparent pricing, and a book-online button — and you get the recurring client before anyone else calls them back.',
    reactivationWho: 'past clients who stopped booking 2–6 months ago — often due to a move, budget change, or just life getting in the way — who haven\'t been re-engaged',
    reactivationWin: 'a simple "we miss you — here\'s a one-time 15% off your next clean" message re-activates former recurring clients at very low cost',
    reactivationCycle: 'We pull your past client list, segment by last booking date and frequency, run a 3-week re-engagement campaign, and guarantee $3,000 in rebooked services — or the next cycle is free.',
    membershipWin: 'a full weekly and bi-weekly recurring client base, zero missed new booking calls, and quarterly reactivation of churned clients to refill your schedule',
    membershipICP: 'house cleaning businesses with 2–15 cleaners who want to build a stable recurring client base instead of constantly hunting for one-time jobs',
  },
];

export const cities: City[] = [
  {
    slug: 'calgary',
    name: 'Calgary',
    province: 'AB',
    tier: 1,
    context: 'Calgary is Alberta\'s largest city with 1.3M+ residents and a dense market of home service businesses competing for the same leads.',
  },
  {
    slug: 'edmonton',
    name: 'Edmonton',
    province: 'AB',
    tier: 1,
    context: 'Edmonton is Alberta\'s capital with 1M+ residents — a fast-growing market where home service competition is intensifying every year.',
  },
  {
    slug: 'vancouver',
    name: 'Vancouver',
    province: 'BC',
    tier: 1,
    context: 'Vancouver is BC\'s largest city — a 750k+ market with a high density of small businesses and homeowners willing to pay for quality service.',
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    province: 'BC',
    tier: 1,
    context: 'Surrey is one of BC\'s fastest-growing cities at 700k+ — rapid residential expansion means a constant stream of homeowners needing service.',
  },
  {
    slug: 'red-deer',
    name: 'Red Deer',
    province: 'AB',
    tier: 2,
    context: 'Red Deer is a regional hub of ~100k between Calgary and Edmonton — a tightly-knit market where reputation and response time win jobs.',
  },
  {
    slug: 'lethbridge',
    name: 'Lethbridge',
    province: 'AB',
    tier: 2,
    context: 'Lethbridge is southern Alberta\'s main city at ~100k — a growing community with increasing demand for home services.',
  },
  {
    slug: 'kelowna',
    name: 'Kelowna',
    province: 'BC',
    tier: 2,
    context: 'Kelowna is the Okanagan\'s main city at ~150k — a booming market with strong demand for home services driven by rapid population growth.',
  },
  {
    slug: 'burnaby',
    name: 'Burnaby',
    province: 'BC',
    tier: 2,
    context: 'Burnaby is part of Metro Vancouver\'s Lower Mainland — a densely populated area where homeowners expect fast responses from service businesses.',
  },
];

export function getAllCombinations() {
  return cities.flatMap(city =>
    industries.map(industry => ({ city, industry }))
  );
}
