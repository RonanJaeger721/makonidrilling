import { ServiceItem, ProjectItem, TestimonialItem, FaqItem, PricingFactor } from '../types';

export const HERO_RESOURCES = {
  heroImage: '/src/assets/images/drilling_rig_hero_1779802319742.png',
  waterGush: '/src/assets/images/clean_water_gush_1779802343229.png',
  waterStorage: '/src/assets/images/solar_water_storage_1779802362164.png'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'drilling',
    title: 'Borehole Drilling',
    description: 'Professional high-capacity drilling services for homes, businesses, and structures using heavy-duty rotary rigs designed to penetrate hard Midlands rock formations.',
    icon: 'Hammer',
    details: [
      'Rotary and percussion drilling capabilities',
      'Advanced borehole depth ranging from 40m to 120m',
      'Professional casing to protect against cave-ins',
      'Environmentally conscious site preparation'
    ]
  },
  {
    id: 'residential',
    title: 'Residential Water Solutions',
    description: 'Ensure a non-stop, pressurized clean water supply for your household, completely detached from municipal shortfalls and utility rationing.',
    icon: 'Home',
    details: [
      'Automatic pressure tank installations',
      'Plumbing integration with home municipal connections',
      'Clean water drinking filtration bypass lines',
      'Backup electricity & solar off-grid configurations'
    ]
  },
  {
    id: 'domestic-install',
    title: 'Domestic Borehole Installations',
    description: 'Turnkey residential borehole solutions tailored to local soil, rock conditions, and household sizes across Kwekwe, Redcliff, and Gweru suburbs.',
    icon: 'Wrench',
    details: [
      'Siting and geological surveys included',
      'Class 9 & Class 12 high-strength durable PVC casing',
      'Neat sanitary surface concrete apron seals',
      'Safe lockable borehole head covers to prevent contamination'
    ]
  },
  {
    id: 'water-access',
    title: 'Water Access Solutions',
    description: 'Expanding options to bring high-yield aquifers to the surface for market gardens, schools, churches, clinics and community groups.',
    icon: 'Droplet',
    details: [
      'Aquifer yield testing and water logging analysis',
      'Large volume storage system planning',
      'Distributed multi-tap community standing pipes',
      'High-durability hardware for extensive public use'
    ]
  },
  {
    id: 'pump-install',
    title: 'Pump Installations',
    description: 'Sizing, setting, and pairing of robust electrical or solar-powered submersible pumps for reliable delivery over high head pressure.',
    icon: 'Radio',
    details: [
      'Premium high-efficiency DC solar submersible pumps',
      'ZESA-compatible AC deep well pumps with surge protectors',
      'Float switches and automatic dry-run prevention controllers',
      'Solar panels installed on elevated steel frame brackets'
    ]
  },
  {
    id: 'system-support',
    title: 'Water System Support',
    description: 'Comprehensive preventative maintenance, quick pump replacements, borehole flushing, and diagnostic restoration for existing boreholes.',
    icon: 'ShieldCheck',
    details: [
      'Borehole rehabilitation and flushing/cleaning services',
      'Pump extraction, replacement, and water pipe replacement',
      'Control box, pressure switch, and solar controller repair',
      'Water quality laboratory testing coordination'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Residential Off-Grid Solar Borehole',
    location: 'Chicago, Kwekwe',
    type: 'residential',
    depth: 55,
    yield: '3,800 Litres/Hour',
    powerSource: 'Solar Powered (24V DC)',
    description: 'Drilled through medium basalt to secure absolute off-grid domestic water supply. Installed a 1.2HP solar submersible pump, a 5000L Jojo water tank on a 4.5m heavy steel stand connected directly into the house supply.',
    date: 'April 2026'
  },
  {
    id: 'proj-2',
    title: 'Domestic Water System Integration',
    location: 'Lundi Park, Gweru',
    type: 'residential',
    depth: 45,
    yield: '2,900 Litres/Hour',
    powerSource: 'Dual Power (ZESA Grid + Manual Backup)',
    description: 'Client had a dry well converted into a deep borehole. Fully line-cased with Class 12 PVC due to sandy clay soils. Equipped with a smart controller that manages water levels between the borehole and their pre-existing indoor storage tank.',
    date: 'March 2026'
  },
  {
    id: 'proj-3',
    title: 'Agricultural Market Garden Irrigation',
    location: 'Shurugwi Road, Midlands',
    type: 'agricultural',
    depth: 80,
    yield: '6,200 Litres/Hour',
    powerSource: 'Heavy-Duty Solar Array (6 Panels)',
    description: 'A large garden borehole supporting a commercial poultry project and vegetable garden. Hard granite drilling was needed at the 40m mark. Fully equipped with an automatic solar-pump array running directly into twin 5,000L tanks.',
    date: 'May 2026'
  },
  {
    id: 'proj-4',
    title: 'Commercial Complex Water Supply',
    location: 'Kwekwe Central Industrial Area',
    type: 'commercial',
    depth: 70,
    yield: '4,500 Litres/Hour',
    powerSource: 'AC Electrical (with Solar Hybrid Upgrade Option)',
    description: 'Drilled to secure water for a warehouse and office complex. Used thick Class 12 casing for industrial durability. Connected to an automatic double booster system to supply multiple storeys.',
    date: 'February 2026'
  },
  {
    id: 'proj-5',
    title: 'Community Water Access Station',
    location: 'Mbizo Sector 15, Kwekwe',
    type: 'residential',
    depth: 50,
    yield: '3,100 Litres/Hour',
    powerSource: 'High-Efficiency Solar Submersible',
    description: 'Setup for a community trust, delivering reliable drinking water through an outdoor tap array. Features a heavy-duty concrete base skirt and tamper-proof security locks for the control components.',
    date: 'May 2026'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Mrs. Chipo Moyo',
    role: 'Homeowner',
    location: 'Chicago, Kwekwe',
    text: 'Makoni Drilling brought absolute peace of mind to our family. No more fetching water from other streets or waiting for water trucks. They drilled, cased, and installed our solar pump to perfection. 100% recommended!',
    rating: 5,
    verified: true
  },
  {
    id: 'test-2',
    name: 'Pastor Samuel Mpofu',
    role: 'Community Representative',
    location: 'Mkoba 6, Gweru',
    text: 'The team was incredibly professional and transparent about costs. We calculated our budget on their website estimator, and they honored their word. The yield is great and is serving over 30 homesteads through our church garden.',
    rating: 5,
    verified: true
  },
  {
    id: 'test-3',
    name: 'Eng. Kenneth Ncube',
    role: 'Commercial Contractor',
    location: 'Fitchlea, Kwekwe',
    text: 'Highly competent field crew. In Kwekwe, rock formations can be unpredictable, but their heavy-duty rig cut right through. They used heavy Class 12 PVC and clean electrical terminations. They understand local standards.',
    rating: 5,
    verified: true
  },
  {
    id: 'test-4',
    name: 'Fiona Mutenha',
    role: 'Smallholder Poultry Farmer',
    location: 'Shurugwi Road Plots',
    text: 'My poultry garden was failing because of expensive grid water and rationing. Since Makoni Drilling came, I have a steady solar-powered supply. The birds are thriving and my costs are down. Best investment I have made!',
    rating: 5,
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How deep do you usually have to drill for a borehole in Kwekwe or Gweru?',
    answer: 'In the Midlands, most successful drinking water aquifers are reached at depths between 40 meters to 80 meters. In areas near Chicago, Fitchlea, or Gweru Ascot, water standard depths average 50 to 60 meters. Our survey will provide a customized estimated depth based on local aquifer structures.',
    category: 'drilling'
  },
  {
    id: 'faq-2',
    question: 'Are there any water siting / dowsing services involved before drilling?',
    answer: 'Yes! We only drill on scientifically surveyed sites to guarantee maximum yield. We partner with expert hydro-geologists to perform deep geological resistivity tests (siting) to locate exact fractures and aquifers before your drilling date.',
    category: 'drilling'
  },
  {
    id: 'faq-3',
    question: 'Why is a Solar Pump highly recommended over standard ZESA power in Zimbabwe?',
    answer: 'Solar pumps operate on free, abundant sunlight and are completely immune to ZESA load shedding, power surges, or municipal grid cuts. Once installed, there are zero monthly electricity bills to pay. We use DC brushless controllers which pump water directly into your storage tank during the day for you to use anytime!',
    category: 'pricing'
  },
  {
    id: 'faq-4',
    question: 'What is the difference between Class 9 and Class 12 PVC borehole casing?',
    answer: 'PVC casing lines your borehole to prevent sand and rock collapses. Class 9 is standard (9 bar pressure rating), perfectly suited for solid rock profiles and medium depths. Class 12 is thicker (12 bar), highly recommended for collapsing soils (sandy clay), deep holes exceeding 60 meters, or high-vibration high-capacity pumps.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Do you offer water physical and chemical quality analysis?',
    answer: 'Yes, after drilling, we flush the borehole until the water runs crystal clear. For drinking water, we recommend chemical and biological laboratory tests. We can collect samples and coordinate testing with local Midlands laboratories to ensure safety.',
    category: 'maintenance'
  },
  {
    id: 'faq-6',
    question: 'How long does the drilling and complete installation take?',
    answer: 'A standard household drilling operation is completed in just 1 single day! Siting and site setup take a few hours, actual drilling is finished in 4-6 hours. Pump installation, tank stands, and pipeline connections usually take another 1 to 2 days maximum.',
    category: 'general'
  }
];

// Complete realistic Zimbabwean Borehole Costing Config
export const MIDLANDS_PRICING_CONFIG: PricingFactor = {
  baseDrillingCost: 1800, // covers standard 40 meters including transport, basic siting, Class 9 casing
  costPerMeterExtra: 45, // dollar rate per meter drilled past 40 meters
  casingPricing: {
    class9: 0, // standard, included
    class12: 250, // heavy duty standard depth surcharge
    steel: 750 // expensive steel sleeves for heavy sand
  },
  pumpPricing: {
    none: 0,
    solar: 1200, // Complete solar sub smart design (1HP pump, inverter, 3 solar panels, mount, cables, joints)
    electric: 800, // standard AC pump, control box, waterproof cables (runs off mains electricity)
    hand: 400 // standard manual hand-pump (mainly farming or remote community)
  },
  tankPricing: {
    none: 0,
    '2500': 350, // 2500 Litre high quality water storage tank
    '5000': 550 // 5000 Litre Jojo or EcoTank water tank
  },
  standPricing: {
    none: 0,
    '3m': 450, // elevated strong structural steel stands (increases household water pressure)
    '4.5m': 600,
    '6m': 800
  },
  filtrationPricing: {
    none: 0,
    basic: 150, // sand strainers & carbon taste inline filter
    complete: 450 // chlorinator + sediment + micro-filtration for absolute drinking safety
  }
};

export const COVERAGE_AREAS = [
  {
    city: 'Kwekwe (Que Que)',
    regions: ['Chicago', 'Mbizo (All Sectors)', 'Nehanda', 'Fitchlea', 'Msasa', 'Golden Acres', 'Newtown', 'Redcliff', 'Torwood'],
    type: 'Primary Hub (Home Base)',
    note: 'Zero-rated delivery. Immediate response within 24 hours.'
  },
  {
    city: 'Gweru (Gwelo)',
    regions: ['Lundi Park', 'Riverside', 'Daylesford', 'Ascot', 'Harben Park', 'Mkoba (Sectors 1-18)', 'Senga', 'Clonsilla'],
    type: 'Midlands Capital Service Area',
    note: 'Daily service trucks dispatched. No extra transport charges.'
  },
  {
    city: 'Surrounding Midlands',
    regions: ['Shurugwi Rural/Plots', 'Lalapanzi', 'Chivhu Road Plots', 'Battlefields', 'Zhombe Mainway', 'Belfry'],
    type: 'Extended Agricultural Zone',
    note: 'Perfect for farms and institutional water boreholes.'
  }
];
