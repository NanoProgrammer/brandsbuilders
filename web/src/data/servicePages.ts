export interface Industry {
  slug: string;
  name: string;
  businessType: string;
  plural: string;
  callType: string;
  avgJobValue: string;
  painPoint: string;
  urgencyLine: string;
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
