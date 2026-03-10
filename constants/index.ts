// ─── SITE ──────────────────────────────────────────────────────────────────
export const SITE_NAME = "PDX Pallet Supply";
export const SITE_NAME_LEGAL = "PDX Pallet Supply, LLC";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pdxpallets.com";

export const EMAIL = "pdxpalletsupply@agamalabs.com";
export const HOURS = "Mon–Fri 7:00am–5:00pm";

// ─── NAVIGATION ────────────────────────────────────────────────────────────
type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Products',
    href: '/products/used-pallets',
    children: [
      { label: 'New Pallets', href: '/products/new-pallets' },
      { label: 'Used Pallets', href: '/products/used-pallets' },
    ],
  },
  {
    label: 'Services',
    href: '/services/delivery',
    children: [
      { label: 'Delivery', href: '/services/delivery' },
      { label: 'Pallet Pickup', href: '/services/pickup' },
      { label: 'Custom Orders', href: '/services/custom-orders' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export const FOOTER_LINKS = {
  Products: [
    { label: 'New Pallets', href: '/products/new-pallets' },
    { label: 'Used Pallets', href: '/products/used-pallets' },
    { label: 'Custom Orders', href: '/services/custom-orders' },
  ],
  Services: [
    { label: 'Delivery', href: '/services/delivery' },
    { label: 'Pallet Pickup', href: '/services/pickup' },
    { label: 'Volume Programs', href: '/services/custom-orders' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Quote', href: '/quote' },
  ],
} as const;

// ─── HOME ──────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '500K+', label: 'Pallets supplied annually' },
  { value: '200+',  label: 'Active Portland-area clients' },
  { value: '20+',   label: 'Years in the PDX market' },
  { value: '98.4%', label: 'On-time delivery rate' },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We went through three pallet suppliers in two years. PDX Pallets was the first one that treated our timeline like it was their timeline. We haven't looked elsewhere since.",
    name: 'Marcus T.',
    title: 'Supply Chain Manager',
    company: 'Cascade Cold Storage, Portland OR',
  },
  {
    quote: "I needed 300 Grade A used pallets for a client order with 4 days' notice. They had them staged, counted, and delivered in 36 hours. That kind of execution keeps my business running.",
    name: 'Sandra K.',
    title: 'Operations Director',
    company: 'Pacific Rim Logistics, Gresham OR',
  },
  {
    quote: "The pricing is fair, the pallets are consistently graded, and they always pick up the phone. That's rarer than it sounds in this industry.",
    name: 'David R.',
    title: 'Warehouse Manager',
    company: 'Willamette Valley Distributors',
  },
] as const;

export const FAQ_PREVIEW = [
  {
    q: 'Do you have pallets in stock right now?',
    a: 'Yes. We maintain standing inventory of the most common sizes and grades year-round. Grade A 48×40 used pallets are almost always available same-day.',
  },
  {
    q: "What's the minimum order?",
    a: "Our minimum is 10 pallets. Most clients order in lots of 50–500. We don't have a maximum — call us for large-volume requirements.",
  },
  {
    q: 'How quickly can you deliver?',
    a: 'Same-week delivery is standard across the PDX metro. Many orders ship next-day. Call us directly for urgent requests.',
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    tag: 'Most Popular',
    title: 'Used Pallets',
    desc: 'Grade A, B & C — inspected daily. Starting at $9.50/unit.',
    href: '/products/used-pallets',
    accent: 'bg-kraft-pale border-kraft-mid',
    badge: 'bg-kraft text-white',
  },
  {
    tag: 'ISPM-15 Certified',
    title: 'New Pallets',
    desc: 'Heat-treated, export-ready. Built to spec. From $14.00/unit.',
    href: '/products/new-pallets',
    accent: 'bg-brand-pale border-brand-mid',
    badge: 'bg-brand text-white',
  },
] as const;

// ─── FAQ ───────────────────────────────────────────────────────────────────
export const FAQ_SECTIONS = [
  {
    section: 'Grades & Quality',
    items: [
      {
        q: 'What is the difference between Grade A, B, and C pallets?',
        a: 'Grade A pallets have no broken boards, intact stringers, and uniform appearance — suitable for export and food-adjacent use. Grade B pallets have minor cosmetic damage but full structural integrity, ideal for warehousing. Grade C pallets are functional with heavy wear and repaired sections, best for internal movement.',
      },
      {
        q: 'How do you grade pallets — is it subjective?',
        a: 'We use a documented grading rubric with specific pass/fail criteria per board and stringer. Every pallet is physically handled by a trained crew member. The grade criteria are available on request.',
      },
      {
        q: 'Can I inspect pallets before buying?',
        a: 'Yes. Will-call customers are welcome to inspect staged inventory before loading. For large custom orders, we can send a photo audit prior to delivery.',
      },
      {
        q: "What if the grade doesn't match when my order arrives?",
        a: "Call us the same day. We dispatch a correction load or issue a credit — whichever resolves your operation faster. We track these incidents internally and address the root cause.",
      },
    ],
  },
  {
    section: 'Sizes & Types',
    items: [
      {
        q: 'What pallet sizes do you stock?',
        a: '48×40 GMA is our primary inventory and is always available. We typically carry 42×42 and 48×48 as well. Specialty and non-standard sizes are available through custom orders with a 50-unit minimum.',
      },
      {
        q: 'Do you sell heat-treated (HT) and ISPM-15 pallets?',
        a: 'Yes. We supply ISPM-15 certified heat-treated pallets for export shipments. Full certification documentation is included. Lead time is typically 3–5 business days for treatment.',
      },
      {
        q: 'Do you carry plastic pallets?',
        a: "Not in standard inventory, but we source them through our supplier network. Contact us with your spec and quantity and we'll provide a quote.",
      },
      {
        q: "What's the difference between a 2-way and 4-way pallet?",
        a: 'A 2-way pallet can only be entered by a forklift from two sides. A 4-way pallet (notched or full 4-way) allows forklift entry from all four sides — generally more versatile. Most GMA 48×40 pallets are 4-way.',
      },
    ],
  },
  {
    section: 'Pricing & Orders',
    items: [
      {
        q: 'How is pricing determined?',
        a: 'Pricing depends on pallet type (new vs. used), grade, size, and quantity. Volume discounts apply at 100, 500, and 1,000 units/month. We publish starting prices on our product pages; final pricing is confirmed at quote.',
      },
      {
        q: 'Can I mix grades in one order?',
        a: "Yes. Many customers order a primary grade supplemented with a lower grade for internal movement. Specify your split in the quote request and we stage them separately so there's no confusion at the dock.",
      },
      {
        q: 'Do you offer net-30 payment terms?',
        a: 'Yes, for qualified accounts. Applications take about 5 minutes and are typically approved within 1 business day. Available for accounts at 100+ units/month.',
      },
      {
        q: 'Is there a minimum order?',
        a: 'No minimum for standard in-stock products. Custom orders have a 50-unit minimum. Delivery orders have no minimum but delivery fees apply.',
      },
    ],
  },
  {
    section: 'Delivery & Pickup',
    items: [
      {
        q: 'What areas do you deliver to?',
        a: 'We deliver to 140+ zip codes in the Portland metro, including East Metro/Gresham, Hillsboro/Beaverton/Tualatin, and can reach Salem and Longview/Vancouver. See our Delivery page for zone details.',
      },
      {
        q: 'Do you offer same-day delivery?',
        a: 'Yes, for Zone 1 (core Portland metro) with orders placed before 10 AM. We do our best on late requests — call us directly.',
      },
      {
        q: 'How quickly can I pick up from your yard?',
        a: 'Standard will-call orders are staged within 2 hours of confirmation. Urgent same-day orders can often be staged in 45 minutes — call ahead.',
      },
      {
        q: 'Do you buy back used pallets?',
        a: 'Yes. We buy Grade A, B, and C pallets. Rates depend on grade and condition. We pick up lots of 200+ at no cost to you. See our Pickup page for buyback rates.',
      },
    ],
  },
] as const;

// ─── ABOUT ─────────────────────────────────────────────────────────────────
export const TEAM = [
  { name: 'Marcus T.', role: 'Owner & Operations', bio: 'Built PDX Pallet Supply from a single pickup truck in 2003. Still walks the yard every morning.' },
  { name: 'Sandra R.', role: 'Sales & Accounts', bio: '14 years managing volume relationships. The reason most of our enterprise accounts have stayed for 5+ years.' },
  { name: 'James W.', role: 'Yard Supervisor', bio: "Oversees grading, staging, and fleet operations. If it leaves our yard, it's been through James." },
] as const;

export const MILESTONES = [
  { year: '2003', event: 'Founded with a single route serving inner SE Portland' },
  { year: '2007', event: 'Opened first dedicated yard in NE Portland, expanded fleet to 4 trucks' },
  { year: '2011', event: 'Achieved ISPM-15 certification for heat-treated export pallets' },
  { year: '2015', event: 'Joined NWPCA; launched volume accounts program' },
  { year: '2019', event: 'Expanded to serve 140+ Portland metro zip codes' },
  { year: '2023', event: '20 years in business — still family-owned and operated' },
] as const;

// ─── PRODUCTS — NEW PALLETS ─────────────────────────────────────────────────
export const NEW_PALLET_SPECS = [
  { label: 'Standard sizes',   value: '48×40 GMA · 42×42 · 48×48 · 40×40' },
  { label: 'Wood species',     value: 'Southern Yellow Pine (SYP)' },
  { label: 'Heat treatment',   value: 'HT / ISPM-15 certified, all stock' },
  { label: 'Configurations',   value: 'Stringer & Block (4-way)' },
  { label: 'Static capacity',  value: '2,500–3,000 lbs' },
  { label: 'Dynamic capacity', value: '1,500–1,800 lbs' },
  { label: 'Min. order',       value: '25 units (standard)' },
  { label: 'Lead time',        value: 'Same-week (stock sizes)' },
  { label: 'Custom lead time', value: '5–7 business days' },
] as const;

// ─── PRODUCTS — USED PALLETS ────────────────────────────────────────────────
export const USED_PALLET_GRADES = [
  {
    grade: 'A',
    price: '$9.50+',
    color: 'border-ok bg-ok-pale',
    badge: 'bg-ok text-white',
    items: ['No broken boards', 'All stringers intact', 'Uniform appearance', 'Export & food-adjacent use', 'ISPM-15 sourced'],
  },
  {
    grade: 'B',
    price: '$6.00+',
    color: 'border-warn bg-warn-pale',
    badge: 'bg-warn text-ink',
    items: ['Minor cosmetic damage', 'Full structural integrity', 'Ideal for warehousing', 'Cost-effective option'],
  },
  {
    grade: 'C',
    price: '$3.50+',
    color: 'border-edge bg-subtle',
    badge: 'bg-muted text-white',
    items: ['Functional, heavy wear', 'Repaired sections', 'Internal movement', 'Maximum cost savings'],
  },
] as const;

// ─── SERVICES — DELIVERY ───────────────────────────────────────────────────
export const DELIVERY_ZONES = [
  { zone: 'Zone 1', area: 'Portland Metro Core',              radius: '0–15 mi',  eta: 'Same day',           fee: 'From $45' },
  { zone: 'Zone 2', area: 'East Metro / Gresham / Troutdale', radius: '15–30 mi', eta: '1 business day',     fee: 'From $75' },
  { zone: 'Zone 3', area: 'Hillsboro / Beaverton / Tualatin', radius: '15–25 mi', eta: 'Same / next day',    fee: 'From $75' },
  { zone: 'Zone 4', area: 'Salem / Longview / Vancouver',     radius: '30–60 mi', eta: '1–2 business days',  fee: 'From $120' },
] as const;

export const DELIVERY_FLEET = [
  { label: 'Flatbed trucks',  detail: '24 ft · up to 400 pallets' },
  { label: 'Straight trucks', detail: '16 ft · up to 120 pallets' },
  { label: 'Liftgate units',  detail: 'Ground-level unloading, no dock required' },
  { label: 'Box trucks',      detail: 'Protected delivery for heat-treated / export pallets' },
] as const;

// ─── SERVICES — PICKUP ────────────────────────────────────────────────────
export const PICKUP_STEPS = [
  { step: '01', title: 'Call or request online', body: 'Tell us what you need — grade, size, quantity. We confirm availability and hold your order for up to 24 hours.' },
  { step: '02', title: 'Receive your ready-for-pickup confirmation', body: "We'll text or email when your order is staged. Standard ready time is 2 hours from confirmation." },
  { step: '03', title: 'Pull into our yard', body: 'Drive straight to the loading bay. Our crew loads your truck — no waiting around the yard trying to count pallets yourself.' },
  { step: '04', title: 'Pay and go', body: 'We accept credit cards, ACH, and net-30 for account holders. In and out in under 15 minutes for most orders.' },
] as const;

export const BUYBACK_GRADES = [
  { grade: 'Grade A / Undamaged 48×40', rate: 'Up to $7.00/unit', note: 'Clean GMA pallets in like-new condition' },
  { grade: 'Mixed / Grade B',           rate: 'Up to $3.50/unit', note: 'Minor damage, full structure' },
  { grade: 'Broken / Grade C',          rate: 'Up to $1.00/unit', note: 'Reclaimable material, qty-dependent' },
  { grade: 'Large pallet lots (500+)',  rate: 'Custom pricing',   note: 'Call for same-day assessment' },
] as const;

// ─── SERVICES — CUSTOM ORDERS ─────────────────────────────────────────────
export const VOLUME_TIERS = [
  { tier: 'Standard',   units: '1–99/mo',     benefit: 'Market pricing, same-day availability' },
  { tier: 'Business',   units: '100–499/mo',  benefit: '5% volume discount + dedicated rep' },
  { tier: 'Volume',     units: '500–999/mo',  benefit: '10% discount + net-30 + priority staging' },
  { tier: 'Enterprise', units: '1,000+/mo',   benefit: 'Custom contract + locked pricing + managed program' },
] as const;

// ─── CONTACT / API ─────────────────────────────────────────────────────────
export const SUBJECT_LABELS: Record<string, string> = {
  product:  'Product availability',
  pricing:  'Pricing inquiry',
  delivery: 'Delivery question',
  account:  'Account / billing',
  buyback:  'Pallet buyback',
  other:    'Other',
};
