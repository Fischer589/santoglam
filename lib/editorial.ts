// Editorial photography generated for the SantoGlam brand rebuild —
// consistent quiet-luxury, ivory/bone palette, no gold/brown dominance.
export const images = {
  hero: "https://g.tlcdn.com/gen/09db84b0561546d7ad5818eff12e11e2.png",
  before: "https://g.tlcdn.com/gen/9428e99b8fd94b5b91c6f02d14f69f3b.png",
  after: "https://g.tlcdn.com/gen/0b97a812a5d64b17a17eb91b488fa368.png",
  chapterRoom: "https://g.tlcdn.com/gen/67568ec4c35d4471a4f678bbbc094f74.png",
  chapterRitual: "https://g.tlcdn.com/gen/372e957ac5b341219a1431103a3b3547.png",
  chapterVanity: "https://g.tlcdn.com/gen/4b9014a5844747acbab86143acddba4d.png",
  chapterJourney: "https://g.tlcdn.com/gen/2b64f024975c403ea36cace578260fb3.png",
  chapterAfterDark: "https://g.tlcdn.com/gen/2ccdcbe8e3d7436c9d9d8ee734ee1512.png",
  scentCampaign: "https://g.tlcdn.com/gen/cbcb0d59f1dd4fc2be42d8528a1884ab.png",
  journalHotelBed: "https://g.tlcdn.com/gen/5c2ddef377e64e35a770875187d63e61.png",
  journalBathroom: "https://g.tlcdn.com/gen/44cc8a27ab4e4aba9cfddaa1a8e48ef2.png",
  journalSunday: "https://g.tlcdn.com/gen/b5411cf1a6f54f06ae7e6864fec90af6.png",
  journalDetail: "https://g.tlcdn.com/gen/7802515ea23a44219e5c8ec04c3b96fc.png",
}

export interface Chapter {
  id: string
  number: string
  title: string
  tagline: string
  image: string
  productIds: string[]
}

export const chapters: Chapter[] = [
  {
    id: "room",
    number: "01",
    title: "The Room",
    tagline: "Everything that makes home feel better.",
    image: images.chapterRoom,
    productIds: [
      "marriott-robe",
      "slip-pillowcase",
      "slip-mask",
      "diptyque-baies",
      "nest-votive",
      "margiela-lazy-sunday",
    ],
  },
  {
    id: "ritual",
    number: "02",
    title: "The Ritual",
    tagline: "Small rituals. Better days.",
    image: images.chapterRitual,
    productIds: [
      "vitruvi-white",
      "nest-3wick",
      "louis-marie-candle",
      "margiela-jazz-club-candle",
      "margiela-fireplace",
      "margiela-jazz-club",
    ],
  },
  {
    id: "vanity",
    number: "03",
    title: "The Vanity",
    tagline: "Beauty as ritual.",
    image: images.chapterVanity,
    productIds: [
      "marble-tray",
      "rose-quartz-guasha",
      "jade-guasha",
      "vitruvi-black",
      "louis-marie-oil",
      "tatcha-dewy",
    ],
  },
  {
    id: "journey",
    number: "04",
    title: "The Journey",
    tagline: "How you move through the world.",
    image: images.chapterJourney,
    productIds: [
      "bellroy-passport",
      "qavhun-atomizer",
      "mario-badescu-spray",
      "leuchtturm-notebook",
      "harney-sons-tea",
    ],
  },
  {
    id: "after-dark",
    number: "05",
    title: "After Dark",
    tagline: "Everything gets better after sunset.",
    image: images.chapterAfterDark,
    productIds: [
      "margiela-jazz-club-candle",
      "margiela-fireplace",
      "margiela-jazz-club",
      "this-works-pillow-spray",
    ],
  },
]

// THE SANTOGLAM 12 — the flagship, reduced-choice hotel-room edit.
export const santoglam12Ids = [
  "marriott-robe",
  "slip-pillowcase",
  "slip-mask",
  "diptyque-baies",
  "nest-votive",
  "margiela-lazy-sunday",
  "marble-tray",
  "rose-quartz-guasha",
  "vitruvi-black",
  "louis-marie-oil",
  "tatcha-dewy",
  "puskul-towels",
]

export const startWith3Ids = ["marriott-robe", "slip-pillowcase", "diptyque-baies"]

export interface HeroProduct {
  id: string
  label: string
  tagline: string
  productId?: string
  href?: string
  cta: string
}

export const heroProducts: HeroProduct[] = [
  {
    id: "robe",
    label: "The Robe",
    tagline: "The first five minutes of a hotel morning.",
    productId: "marriott-robe",
    cta: "Shop Object →",
  },
  {
    id: "pillowcase",
    label: "The Pillowcase",
    tagline: "The upgrade you notice when you sleep without it.",
    productId: "slip-pillowcase",
    cta: "Shop Object →",
  },
  {
    id: "scent",
    label: "The Scent",
    tagline: "The smell of checking into somewhere expensive.",
    href: "/scents",
    cta: "Discover →",
  },
  {
    id: "light",
    label: "The Light",
    tagline: "Change the room before you change the room.",
    productId: "nest-votive",
    cta: "Shop Object →",
  },
]

export const theEditIds = [
  "diptyque-baies",
  "slip-pillowcase",
  "vitruvi-black",
  "rose-quartz-guasha",
  "harney-sons-tea",
  "aesop-handwash",
]

export interface JournalEntry {
  id: string
  title: string
  teaser: string
  image: string
  minutes: number
}

export const journal: JournalEntry[] = [
  {
    id: "500-hotel-room",
    title: "How to Make Your Bedroom Feel Like a $500 Hotel Room",
    teaser:
      "It isn't the room. It's twelve small decisions the hotel made before you ever checked in.",
    image: images.journalHotelBed,
    minutes: 6,
  },
  {
    id: "never-cheap-rooms",
    title: "7 Things Luxury Hotels Never Put in a Cheap Room",
    teaser:
      "The details that separate a $120 room from a $600 one have almost nothing to do with size.",
    image: images.after,
    minutes: 5,
  },
  {
    id: "fifty-dollar-upgrade",
    title: "The $50 Bedroom Upgrade",
    teaser:
      "One object, correctly chosen, changes how a room feels more than a weekend of rearranging furniture.",
    image: images.chapterRoom,
    minutes: 4,
  },
  {
    id: "boutique-bathroom",
    title: "How to Make Your Bathroom Feel Like a Boutique Hotel",
    teaser:
      "Towels, light, and one good hand wash. The bathroom is the easiest room in the house to elevate.",
    image: images.journalBathroom,
    minutes: 5,
  },
  {
    id: "sunday-night-ritual",
    title: "The Sunday Night Ritual",
    teaser:
      "A short, deliberate hour that makes Monday feel like it's arriving on your terms.",
    image: images.journalSunday,
    minutes: 4,
  },
  {
    id: "what-makes-expensive",
    title: "What Actually Makes a Room Feel Expensive?",
    teaser:
      "Not the price tag. Light, texture, scent, and restraint — in that order.",
    image: images.journalDetail,
    minutes: 7,
  },
]

export interface Testimonial {
  quote: string
  name: string
  city: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I started with the pillowcase because I didn't want to buy a bunch of random things. Two weeks later I had the robe, the candle, and the diffuser too.",
    name: "Priya",
    city: "Austin, TX",
  },
  {
    quote:
      "I've rearranged this bedroom three times over the years. Turns out the furniture was never the problem — the light and the scent were.",
    name: "Marcus",
    city: "Brooklyn, NY",
  },
  {
    quote:
      "I bought the gua sha as an afterthought and now it's the thing I actually use every single morning.",
    name: "Elena",
    city: "Chicago, IL",
  },
]
