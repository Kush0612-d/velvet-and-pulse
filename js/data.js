// VELVET & PULSE - Product Catalog & Store Data
// Medical-grade, body-safe adult pleasure & intimate wellness products

export const STORE_CONFIG = {
  brandName: "VELVET & PULSE",
  tagline: "Modern Sexual Wellness & Intimate Body Care",
  discreetBillingName: "VP COMMERCE - 800-555-0199",
  discreetPackagingPromise: "100% Plain unbranded recycled cardboard box with zero external logos or references.",
  freeShippingThreshold: 69.00,
  supportEmail: "care@velvetandpulse.com",
  phone: "+1 (800) 555-0199"
};

export const CATEGORIES = [
  { id: "all", name: "All Collections", icon: "sparkles" },
  { id: "clitoral", name: "Air-Pulse & Clitoral", icon: "wind" },
  { id: "internal", name: "Internal & G-Spot", icon: "activity" },
  { id: "wands", name: "Body Wands", icon: "zap" },
  { id: "couples", name: "Couples & Men", icon: "heart" },
  { id: "wellness", name: "Lubricants & Care", icon: "droplet" },
  { id: "kits", name: "Beginner Kits", icon: "package" }
];

export const PRODUCTS = [
  {
    id: "aurora-air-wave",
    name: "The Aurora Air-Wave",
    category: "clitoral",
    price: 98.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewCount: 312,
    badge: "Bestseller",
    badgeType: "hot",
    tagline: "Contactless sonic air-pulse for transcendent clitoral euphoria",
    description: "The Aurora redefines stimulation through resonant aerodynamic soundwaves that gently pulse against sensitive nerve endings without direct friction or over-desensitization. Crafted with silky biocompatible liquid silicone and an ultra-quiet magnetic motor.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1512290900672-1f55b9355462?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Blush Rose", hex: "#E5989B", active: true },
      { name: "Midnight Obsidian", hex: "#1E1E24", active: false },
      { name: "Sage Mist", hex: "#9CAF88", active: false }
    ],
    features: [
      "Sonic pressure-wave technology with 10 calibrated intensities",
      "Whisper-quiet acoustic dampening engine (< 35 dB)",
      "100% Fully submersible IPX7 waterproof for bath & shower",
      "Magnetic gold-plated fast USB charging (90 min full charge)",
      "Ergonomic palm curve designed for effortless solo reach"
    ],
    specs: {
      material: "Body-safe Medical Grade Liquid Silicone & ABS",
      soundLevel: "< 35 dB (Whisper Silent)",
      battery: "Lithium-ion rechargeable, 120 mins continuous play",
      waterproof: "IPX7 (Submersible up to 1 meter for 30 min)",
      dimensions: "124 mm × 52 mm × 46 mm",
      weight: "115g",
      warranty: "2-Year Manufacturer Replacement Warranty"
    },
    vibrationProfile: {
      style: "Sonic Air Pulses",
      intensity: "Gentle to Breathless",
      patterns: ["Continuous Whisper", "Rising Tide", "Staccato Pulse", "Deep Harmonic Waves"]
    },
    bestFor: "Contactless clitoral stimulation, multi-orgasmic exploration, sensitive anatomies."
  },
  {
    id: "silhouette-wand",
    name: "The Silhouette Wand",
    category: "wands",
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.9,
    reviewCount: 247,
    badge: "Award Winner",
    badgeType: "accent",
    tagline: "Sculpted full-body wand delivering profound, low-frequency rumble",
    description: "Far from buzzing toys that cause numbness, The Silhouette Wand features a heavy-core counterbalance motor tuned for deep, resonant vibrations that melt deep into muscle tissue and erogenous zones alike. Features a flexible 360-degree pivoting silicone head.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Champagne Pearl", hex: "#E8D8C8", active: true },
      { name: "Velvet Plum", hex: "#4A2545", active: false }
    ],
    features: [
      "Heavy-mass low-pitch rumbling motor (eliminates surface buzz)",
      "Flexible silicone neck adapts to every body curve without strain",
      "8 distinct rhythmic waveforms and 5 progressive power tiers",
      "Travel security lock prevents accidental activation in luggage",
      "Rechargeable magnetic dock with anti-slip base"
    ],
    specs: {
      material: "Velvety Soft-Touch Silky Silicone & Alloy Trim",
      soundLevel: "< 42 dB",
      battery: "140 mins play time on a single 2-hour charge",
      waterproof: "IPX6 Splash-proof & Shower-safe",
      dimensions: "215 mm × 48 mm",
      weight: "260g",
      warranty: "2-Year Global Warranty"
    },
    vibrationProfile: {
      style: "Deep Low Rumble",
      intensity: "Deep & Powerful",
      patterns: ["Constant Hum", "Deep Heartbeat", "Wave Swell", "Crescendo"]
    },
    bestFor: "Full-body erotic massage, external clitoral intensity, intense broad-area release."
  },
  {
    id: "duet-eclipse",
    name: "The Duet Eclipse",
    category: "internal",
    price: 135.00,
    originalPrice: 169.00,
    rating: 4.8,
    reviewCount: 184,
    badge: "Dual Stimulation",
    badgeType: "luxury",
    tagline: "Synchronized dual-motor bliss with gentle thermo-warming",
    description: "Engineered to deliver simultaneous internal G-spot resonance and external clitoral stimulation. Features independent dual-motor control so you can dial in the exact balance of sensations, paired with internal gentle warming technology up to natural body temperature (38°C).",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Satin Dahlia", hex: "#9F496E", active: true },
      { name: "Onyx Black", hex: "#1C1C1E", active: false }
    ],
    features: [
      "Dual independent motors with 64 possible pattern combinations",
      "Intelligent thermo-warming core warms gently to 38°C (100.4°F)",
      "Curved anatomical ridge specifically aligned for targeted G-spot contact",
      "Soft, bendable silicone shaft moves fluidly with your body",
      "Whisper quiet acoustic chamber"
    ],
    specs: {
      material: "100% Medical Grade Liquid Silicone (Hypoallergenic)",
      soundLevel: "< 38 dB",
      battery: "USB-C Fast Charging, 100 mins run time with heat",
      waterproof: "IPX7 Submersible",
      dimensions: "185 mm × 35 mm × 40 mm",
      weight: "178g",
      warranty: "2-Year Replacement Warranty"
    },
    vibrationProfile: {
      style: "Synchronized Dual Motors",
      intensity: "Custom Multi-Tier",
      patterns: ["G-Spot Flutter", "Clitoral Pulse", "Synchronous Rhythm", "Cascade"]
    },
    bestFor: "Simultaneous internal and external stimulation, blended orgasms."
  },
  {
    id: "whisper-pebble",
    name: "The Whisper Pebble",
    category: "clitoral",
    price: 54.00,
    originalPrice: 68.00,
    rating: 4.9,
    reviewCount: 429,
    badge: "Top Rated",
    badgeType: "hot",
    tagline: "Pocket-sized ergonomic secret for discreet, quiet indulgence",
    description: "Disguised as a smooth coastal river stone, The Whisper Pebble sits effortlessly between two fingers or slips seamlessly under underwear during partnered play. Completely silent in room ambient noise and ultra-versatile for targeted pinpoint arousal.",
    image: "https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Pale Quartz", hex: "#F3E3E2", active: true },
      { name: "Terracotta", hex: "#D07C60", active: false },
      { name: "Deep Navy", hex: "#1D2D44", active: false }
    ],
    features: [
      "Ultra-compact pebble form factor (fits naturally in palm or pocket)",
      "Silent motor decibel rating (< 30 dB - virtually undetectable under sheets)",
      "Single tactile gold button for effortless intuitive cycling",
      "Includes matte satin travel pouch with magnetic closure",
      "100% seamless waterproof body for effortless water cleansing"
    ],
    specs: {
      material: "Silky Skin-Touch Silicone, Phthalate & Latex Free",
      soundLevel: "< 30 dB (Silent)",
      battery: "Magnetic USB rechargeable, 90 mins runtime",
      waterproof: "IPX7 Submersible",
      dimensions: "72 mm × 48 mm × 28 mm",
      weight: "62g",
      warranty: "2-Year Warranty"
    },
    vibrationProfile: {
      style: "Targeted Micro-Pulse",
      intensity: "Gentle to Moderate",
      patterns: ["Soft Purr", "Rhythmic Tap", "Ascending Tide", "Continuous Thrill"]
    },
    bestFor: "Beginners, discreet travel, hands-free partnered foreplay, targeted nipple & clitoral pleasure."
  },
  {
    id: "vector-prime",
    name: "The Vector Prime",
    category: "couples",
    price: 129.00,
    originalPrice: 159.00,
    rating: 4.8,
    reviewCount: 156,
    badge: "For Men & Couples",
    badgeType: "accent",
    tagline: "Precision anatomical prostate massager with perineum stimulation",
    description: "Carefully calibrated to the male pelvic anatomy, The Vector Prime features an optimal ergonomic curve to effortlessly reach the P-spot, while the flexible vibrating base massages the sensitive perineum. Includes a sleek wireless remote for hands-free or partnered control.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Stealth Slate", hex: "#2B2D42", active: true },
      { name: "Cobalt Blue", hex: "#1A365D", active: false }
    ],
    features: [
      "Biomechanically sculpted angle for natural anatomical placement",
      "Dual excitation zones: Internal prostate node + external perineal pad",
      "Wireless RF remote with 10-meter range for adventurous partner play",
      "Tapered smooth insertion tip with wide safety retention base",
      "12 vibration modes ranging from mild pulsation to intense deep resonance"
    ],
    specs: {
      material: "Body-Safe Medical Grade Silicone, Non-porous",
      soundLevel: "< 39 dB",
      battery: "Magnetic USB, 110 mins usage per charge",
      waterproof: "IPX7 Waterproof (Massager), Splash-proof (Remote)",
      dimensions: "142 mm total length (105 mm insertable) × 32 mm max diameter",
      weight: "145g",
      warranty: "2-Year Warranty"
    },
    vibrationProfile: {
      style: "Pelvic Resonance",
      intensity: "Targeted & Deep",
      patterns: ["Gentle Throb", "Wave Surging", "Double Tap", "Continuous Climax"]
    },
    bestFor: "Prostate health, full-body male pelvic orgasms, hands-free couples intimacy."
  },
  {
    id: "velvet-glide-lube",
    name: "The Velvet Glide Serum (100ml)",
    category: "wellness",
    price: 24.00,
    originalPrice: 30.00,
    rating: 5.0,
    reviewCount: 520,
    badge: "100% Organic",
    badgeType: "organic",
    tagline: "Ultra-pure organic water-based lubricant with organic aloe vera & hyaluronic acid",
    description: "Formulated by wellness chemists to replicate natural female lubrication. pH-balanced at 4.2 to support vaginal microbiota, completely free of glycerin, parabens, petro-chemicals, and artificial fragrances. 100% safe for all silicone pleasure devices and condoms.",
    image: "https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Clear Serum", hex: "#FFFFFF", active: true }
    ],
    features: [
      "Ultra-slick, long-lasting slip that never becomes sticky or tacky",
      "Infused with organic aloe barbadensis and moisture-binding hyaluronic acid",
      "Physiologically osmo-balanced (matches natural vaginal moisture levels)",
      "100% Toy-Safe, Condom-Safe, and easily rinses away with warm water",
      "Elegantly packaged in an airless frosted bottle with lockable pump"
    ],
    specs: {
      volume: "100ml / 3.4 fl oz (TSA travel approved)",
      pH: "4.0 - 4.4 (Optimized for intimate health)",
      ingredients: "Organic Aloe Barbadensis Leaf Juice, Hyaluronic Acid, Vegetable Cellulose, Organic Chamomile Extract, Citric Acid, Food-Grade Potassium Sorbate",
      compatibility: "Silicone toys, latex, polyurethane, polyisoprene",
      safety: "Cruelty-free, Vegan, Paraben-Free, Glycerin-Free, Non-staining"
    },
    vibrationProfile: null,
    bestFor: "Sensory enhancement, effortless toy insertion, combating intimate dryness, couples massage."
  },
  {
    id: "embrace-ring",
    name: "The Embrace Couple's Ring",
    category: "couples",
    price: 48.00,
    originalPrice: 60.00,
    rating: 4.7,
    reviewCount: 198,
    badge: "Couples Choice",
    badgeType: "hot",
    tagline: "Flexible vibrating cock ring designed for simultaneous mutual pleasure",
    description: "Crafted from ultra-stretchy, velvety silicone to comfortably fit all sizes. The ergonomic vibrating rabbit ears rest precisely against the partner's clitoris during penetrative intimacy, while providing firm, stamina-enhancing support for longer lasting sessions.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Smoky Charcoal", hex: "#3A3D40", active: true },
      { name: "Crimson Berry", hex: "#7E1D2E", active: false }
    ],
    features: [
      "Super-stretch ergonomic silicone ring adapts securely and comfortably",
      "Targeted fluttering clitoral tickler adds exhilarating sensations during intercourse",
      "Helps sustain stronger, longer-lasting partner stamina",
      "10 vibration rhythms operated with an easy one-touch button",
      "Shower & bathtub waterproof construction"
    ],
    specs: {
      material: "High Elasticity Ultra-Soft Medical Silicone",
      soundLevel: "< 36 dB",
      battery: "Magnetic USB fast charge, 60 mins playtime",
      waterproof: "IPX7 Waterproof",
      dimensions: "78 mm × 42 mm (Flexible inner diameter 28 mm – 55 mm)",
      weight: "48g",
      warranty: "1-Year Warranty"
    },
    vibrationProfile: {
      style: "Synchronous Flutter",
      intensity: "Medium to High",
      patterns: ["Stamina Constant", "Pulsing Waves", "Tease & Climax", "Heartbeat"]
    },
    bestFor: "Couples intimacy, mutual orgasms, heightened stamina, shared pleasure."
  },
  {
    id: "solstice-g-curve",
    name: "The Solstice G-Curve",
    category: "internal",
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.8,
    reviewCount: 173,
    badge: "Staff Pick",
    badgeType: "accent",
    tagline: "Sculpted curved massager with targeted G-spot tapping motor",
    description: "Designed with an anatomical 45-degree angled tip that targets the sensitive G-zone with unwavering precision. Unlike traditional vibrating massagers, The Solstice features internal rhythmic tapping and wave pulses that mimic a beckoning 'come-hither' motion.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Dusty Mauve", hex: "#B88E8D", active: true },
      { name: "Midnight Teal", hex: "#1D4E5B", active: false }
    ],
    features: [
      "Beckoning tapping mechanism specifically calibrated for G-spot arousal",
      "Ergonomic handle loop provides effortless leverage and zero hand fatigue",
      "Velvety matte finish with seamless hypoallergenic silicone exterior",
      "Graduated firmness: soft supple outer layer over a responsive core",
      "100% submersible for steamy bath relaxation"
    ],
    specs: {
      material: "Double-layered Premium Liquid Silicone & ABS core",
      soundLevel: "< 37 dB",
      battery: "Magnetic charging, 90 mins active playtime",
      waterproof: "IPX7 Submersible",
      dimensions: "192 mm total length × 34 mm diameter",
      weight: "165g",
      warranty: "2-Year Warranty"
    },
    vibrationProfile: {
      style: "Wave Tapping & Rumble",
      intensity: "Deep & Targeted",
      patterns: ["Come-Hither Motion", "Accelerated Tap", "Steady Rumble", "Surge"]
    },
    bestFor: "Internal G-spot discovery, intense targeted pelvic release, solo luxury."
  },
  {
    id: "botanica-cleanser",
    name: "The Botanica Cleansing Mist (150ml)",
    category: "wellness",
    price: 18.00,
    originalPrice: 22.00,
    rating: 4.9,
    reviewCount: 380,
    badge: "Essential Care",
    badgeType: "organic",
    tagline: "Antibacterial antimicrobial botanical device and hygiene cleanser",
    description: "Preserve the life of your premium silicone devices with our rinse-free antimicrobial cleansing spray. Enriched with natural tea tree, lavender, and witch hazel to eliminate 99.9% of bacteria without damaging delicate silicone coatings or irritating intimate tissue.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Amber Botanical", hex: "#8B5A2B", active: true }
    ],
    features: [
      "Eliminates 99.9% of common bacteria, fungi, and micro-organisms",
      "Alcohol-free and bleach-free: 100% safe for silicone, rubber, and glass toys",
      "Subtle natural scent of organic French lavender and refreshing tea tree",
      "No rinsing required: simply spray, wipe with clean towel, and let dry",
      "Extends device lifespan and protects biocompatible silicone finishes"
    ],
    specs: {
      volume: "150ml / 5.1 fl oz",
      ingredients: "Distilled Water, Organic Melaleuca Alternifolia (Tea Tree), Lavandula Angustifolia, Hamamelis Virginiana (Witch Hazel), Benzalkonium Chloride (0.1%), Zinc Ricinoleate",
      safety: "Alcohol-Free, Vegan, Non-Corrosive"
    },
    vibrationProfile: null,
    bestFor: "Sanitizing pleasure toys, menstrual cups, intimate accessories."
  },
  {
    id: "pure-bliss-starter-kit",
    name: "The Pure Bliss Starter Bundle",
    category: "kits",
    price: 79.00,
    originalPrice: 110.00,
    rating: 5.0,
    reviewCount: 265,
    badge: "Save $31",
    badgeType: "hot",
    tagline: "The complete luxury beginner experience in one discreet keepsake box",
    description: "Curated specifically for those starting their sexual wellness journey. Includes our beloved Whisper Pebble, a 50ml travel size of Velvet Glide Organic Serum, a 50ml bottle of Botanica Cleanser, and an illustrated discreet exploration guide with tips from certified sexologists.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9355462?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Blush Collection", hex: "#E5989B", active: true },
      { name: "Obsidian Collection", hex: "#1E1E24", active: false }
    ],
    features: [
      "Includes The Whisper Pebble (silent clitoral & external massager)",
      "Includes 50ml Velvet Glide Organic Water-Based Aloe Serum",
      "Includes 50ml Botanica Antibacterial Toy Cleanser Mist",
      "Includes Satin drawstring travel pouch & Magnetic USB cable",
      "Comes with printed 'Art of Self-Pleasure' beginner handbook"
    ],
    specs: {
      packaging: "Luxury magnetic gift box inside plain outer shipping box",
      warranty: "2-Year Full Coverage Warranty",
      value: "Over $110 if purchased separately (28% savings)"
    },
    vibrationProfile: {
      style: "Multi-Pattern Exploration",
      intensity: "Gentle to Thrilling",
      patterns: ["Gentle Hum", "Rising Wave", "Deep Rhythm", "Butterfly Flutter"]
    },
    bestFor: "First-time toy buyers, thoughtful gifting, complete all-in-one pleasure routine."
  },
  {
    id: "horizon-bluetooth-wand",
    name: "The Horizon App-Controlled Wand",
    category: "wands",
    price: 145.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviewCount: 142,
    badge: "Smart Tech",
    badgeType: "luxury",
    tagline: "Long-distance Bluetooth connectivity with music sync & unlimited patterns",
    description: "Seamlessly connects to iOS & Android through our secure, encrypted Velvet App. Hand control to a partner anywhere in the world, sync vibrations to your favorite Spotify playlist, or draw custom vibration waves with your fingertips on the screen.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Matte Midnight", hex: "#1A1A24", active: true },
      { name: "Rose Champagne", hex: "#D8A48F", active: false }
    ],
    features: [
      "Secure end-to-end encrypted app control across the room or across the globe",
      "Live Sound & Music Synchronization mode (vibrates with beats)",
      "Infinite custom patterns via finger drawing on the mobile touchpad",
      "Dual internal motors generate coordinated head and handle sensations",
      "Can also be operated manually with physical buttons without a phone"
    ],
    specs: {
      material: "High-Grade Silky Matte Silicone, Zinc Alloy Ring",
      soundLevel: "< 40 dB",
      connectivity: "Bluetooth 5.2 Low Energy (Encrypted AES-128)",
      battery: "Fast Magnetic USB, 120 mins playtime",
      waterproof: "IPX7 Submersible",
      dimensions: "205 mm × 44 mm",
      weight: "220g",
      warranty: "2-Year Warranty"
    },
    vibrationProfile: {
      style: "Unlimited App-Driven Patterns",
      intensity: "Adjustable 1-100% Precision Slider",
      patterns: ["Beat Synchronized", "Partner Live Touch", "Tidal Escalation", "Infinite Loop"]
    },
    bestFor: "Long-distance couples, tech enthusiasts, customizable intensity lovers."
  },
  {
    id: "silk-warming-candle",
    name: "The Silk Warming Botanical Candle (200g)",
    category: "wellness",
    price: 32.00,
    originalPrice: 40.00,
    rating: 4.9,
    reviewCount: 215,
    badge: "Sensual Warmth",
    badgeType: "organic",
    tagline: "Low-temperature body massage candle with shea butter & sandalwood",
    description: "Light the cotton wick and watch the pure botanical oils melt into a warm, deeply hydrating massage pool that warms to a soothing 39°C (safe and luxurious for direct skin application). Infused with sandalwood, wild vanilla, and jojoba.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=900&q=80",
    colorOptions: [
      { name: "Ceramic Ivory", hex: "#F5F3EF", active: true }
    ],
    features: [
      "Melt temperature calibrated to skin comfort (39°C / 102°F)",
      "Formulated with 100% pure shea butter, sweet almond oil & organic soy wax",
      "Pour spout ceramic vessel for drip-free, controlled application",
      "Non-greasy absorbency leaves skin glowing, nourished, and satin soft",
      "Up to 36 hours of total aromatic burn time"
    ],
    specs: {
      weight: "200g / 7.0 oz",
      burnTime: "Approx. 36 hours",
      ingredients: "Soy wax, Butyrospermum Parkii (Shea Butter), Prunus Amygdalus Dulcis (Sweet Almond Oil), Simmondsia Chinensis (Jojoba Oil), Santalum Album (Sandalwood Oil), Natural Vanilla Planifolia",
      crueltyFree: "100% Vegan & Cruelty Free"
    },
    vibrationProfile: null,
    bestFor: "Sensual foreplay, intimate massage, relaxing bath ritual, romantic gifting."
  }
];

export const EDUCATIONAL_ARTICLES = [
  {
    id: "sonic-vs-vibration",
    title: "Air-Pulse vs. Traditional Vibrations: The Science of Sensation",
    readTime: "4 min read",
    category: "Anatomy & Tech",
    excerpt: "Why contactless pressure waves trigger faster, deeper clitoral orgasms without the numbness that traditional motors can cause.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9355462?auto=format&fit=crop&w=700&q=80",
    content: "The human clitoris possesses over 8,000 highly responsive nerve endings extending into an internal wishbone-shaped structure. Traditional vibration can sometimes overwhelm the sensitive surface glands. Sonic air-pulse technology instead relies on cyclical changes in air pressure to stimulate both surface and deep erectile tissue gently and continuously..."
  },
  {
    id: "lube-guide",
    title: "Silicone vs. Water-Based Lubes: What You Need to Know",
    readTime: "5 min read",
    category: "Body Care",
    excerpt: "Why pairing silicone toys with silicone lube damages your device, and how to choose the right osmolality for vaginal health.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
    content: "Using silicone-based lubricant with a silicone toy triggers a chemical dissolution reaction that degrades the velvety coating permanently. Learn how pH-balanced water serums with hyaluronic acid protect both your device and delicate mucosal flora..."
  },
  {
    id: "device-care",
    title: "How to Clean, Sanitize & Preserve Your Devices for Longevity",
    readTime: "3 min read",
    category: "Hygiene & Safety",
    excerpt: "The step-by-step ritual to prevent bacterial buildup and maintain battery cell health for years of reliable pleasure.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    content: "Body-safe silicone is non-porous and naturally resistant to bacteria, but improper cleaning with alcohol or harsh detergents can strip the protective finish. Follow our certified sexologist maintenance routine..."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena R.",
    verified: true,
    rating: 5,
    title: "An absolute revelation for sensitive bodies",
    product: "The Aurora Air-Wave",
    comment: "I used to experience numbness after 5 minutes with conventional vibrators. The Aurora is in a different league entirely—gentle, deep, and mind-bendingly quiet. The packaging was also totally unrecognizable from outside, which I deeply appreciated living in an apartment complex.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Marcus & Julian",
    verified: true,
    rating: 5,
    title: "Brought back incredible excitement into our bedroom",
    product: "The Vector Prime",
    comment: "The build quality is Apple-grade. Velvety, smooth, perfectly shaped, and the remote control makes partnered play so playful. Plus, the discreet billing showed up as 'VP COMMERCE' on our credit card. 10/10 experience.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Dr. Sarah T., OBGYN & Intimacy Educator",
    verified: true,
    rating: 5,
    title: "The standard for body-safe sexual wellness",
    product: "The Velvet Glide Serum",
    comment: "As a clinician, I constantly see patients dealing with irritation from poor-quality lubes containing glycerin or aggressive parabens. Velvet & Pulse's formulation has the ideal osmolality and pH. Highly recommended.",
    date: "2 weeks ago"
  }
];

export const FAQS = [
  {
    q: "How discreet is the shipping and billing?",
    a: "100% confidential. Your order arrives in a completely plain, unbranded brown kraft box with tamper-evident tape. There is no mention of adult toys or Velvet & Pulse anywhere on the exterior. The return label reads 'VP Logistics Inc.' On your credit card or bank statement, the charge appears simply as 'VP COMMERCE 800-555-0199'."
  },
  {
    q: "Are all products 100% body-safe and hypoallergenic?",
    a: "Yes. Every single device is cast in 100% medical-grade, biocompatible liquid silicone that is non-porous, phthalate-free, BPA-free, and latex-free. Our lubricants and cleansers are vegan, cruelty-free, and pH-balanced."
  },
  {
    q: "What is your return & warranty policy?",
    a: "Due to strict health and hygiene regulations, opened or used intimate personal care items cannot be returned. However, every device includes an ironclad 2-Year Manufacturer Replacement Warranty. If your device experiences any technical defect, our discreet support team replaces it immediately at no cost."
  },
  {
    q: "How loud are the devices?",
    a: "We engineer all devices with acoustic dampening chambers. Most run below 35 dB (softer than a whisper) and none exceed 42 dB. They are virtually undetectable under sheets or in the next room."
  },
  {
    q: "Are the devices waterproof?",
    a: "Yes! All our vibrators and massagers carry IPX7 waterproof ratings, meaning they can be fully submerged in the bathtub or shower up to 1 meter (3 feet) for 30 minutes without issue."
  }
];

export const PROMO_CODES = {
  "PLEASURE15": { discount: 0.15, description: "15% off entire order" },
  "AURA20": { discount: 0.20, description: "20% VIP opening discount" },
  "DISCREET10": { discount: 0.10, description: "10% welcome discount" }
};

