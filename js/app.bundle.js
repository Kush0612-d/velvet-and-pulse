// VELVET & PULSE - Universal Application Bundle
// Self-contained, zero-dependency script compatible with file:// and http:// protocols

(function () {
  'use strict';

  // ==========================================
  // 1. STORE DATA & CONFIGURATION
  // ==========================================
  const STORE_CONFIG = {
    brandName: "VELVET & PULSE",
    tagline: "Modern Sexual Wellness & Intimate Body Care",
    discreetBillingName: "VP COMMERCE - 800-555-0199",
    discreetPackagingPromise: "100% Plain unbranded recycled cardboard box with zero external logos or references.",
    freeShippingThreshold: 69.00,
    supportEmail: "care@velvetandpulse.com",
    phone: "+1 (800) 555-0199"
  };

  const CATEGORIES = [
    { id: "all", name: "All Collections", icon: "sparkles" },
    { id: "clitoral", name: "Air-Pulse & Clitoral", icon: "wind" },
    { id: "internal", name: "Internal & G-Spot", icon: "activity" },
    { id: "wands", name: "Body Wands", icon: "zap" },
    { id: "couples", name: "Couples & Men", icon: "heart" },
    { id: "wellness", name: "Lubricants & Care", icon: "droplet" },
    { id: "kits", name: "Beginner Kits", icon: "package" }
  ];

  const PRODUCTS = [
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

  const EDUCATIONAL_ARTICLES = [
    {
      id: "sonic-vs-vibration",
      title: "Air-Pulse vs. Traditional Vibrations: The Science of Sensation",
      readTime: "4 min read",
      category: "Anatomy & Tech",
      excerpt: "Why contactless pressure waves trigger faster, deeper clitoral orgasms without the numbness that traditional motors can cause.",
      image: "https://images.unsplash.com/photo-1512290900672-1f55b9355462?auto=format&fit=crop&w=700&q=80",
      content: "The human clitoris possesses over 8,000 highly responsive nerve endings extending into an internal wishbone-shaped structure. Traditional vibration can sometimes overwhelm the sensitive surface glands. Sonic air-pulse technology instead relies on cyclical changes in air pressure to stimulate both surface and deep erectile tissue gently and continuously without direct friction."
    },
    {
      id: "lube-guide",
      title: "Silicone vs. Water-Based Lubes: What You Need to Know",
      readTime: "5 min read",
      category: "Body Care",
      excerpt: "Why pairing silicone toys with silicone lube damages your device, and how to choose the right osmolality for vaginal health.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
      content: "Using silicone-based lubricant with a silicone toy triggers a chemical dissolution reaction that degrades the velvety coating permanently. Learn how pH-balanced water serums with hyaluronic acid protect both your device and delicate mucosal flora."
    },
    {
      id: "device-care",
      title: "How to Clean, Sanitize & Preserve Your Devices for Longevity",
      readTime: "3 min read",
      category: "Hygiene & Safety",
      excerpt: "The step-by-step ritual to prevent bacterial buildup and maintain battery cell health for years of reliable pleasure.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
      content: "Body-safe silicone is non-porous and naturally resistant to bacteria, but improper cleaning with alcohol or harsh detergents can strip the protective finish. Follow our certified sexologist maintenance routine using warm water and an antimicrobial rinse-free mist."
    }
  ];

  const TESTIMONIALS = [
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

  const FAQS = [
    {
      q: "How discreet is the shipping and billing?",
      a: "100% confidential. Your order arrives in a completely plain, unbranded brown kraft box with tamper-evident tape. There is no mention of adult toys or Velvet & Pulse anywhere on the exterior. The return label reads 'VP Logistics LLC'. On your credit card or bank statement, the charge appears simply as 'VP COMMERCE 800-555-0199'."
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

  const PROMO_CODES = {
    "PLEASURE15": { discount: 0.15, description: "15% off entire order" },
    "AURA20": { discount: 0.20, description: "20% VIP opening discount" },
    "DISCREET10": { discount: 0.10, description: "10% welcome discount" }
  };

  // ==========================================
  // 2. VIBRATION FREQUENCY SIMULATOR
  // ==========================================
  class VibrationSimulator {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.isPlaying = false;
      this.audioCtx = null;
      this.oscillator = null;
      this.gainNode = null;
      this.soundEnabled = false;
      this.pattern = 'wave';
      this.intensity = 60;
      this.currentDb = 32;
      this.animationFrame = null;
      this.phase = 0;

      this.patterns = {
        wave: { name: "Ocean Wave", baseHz: 55, speed: 0.05 },
        pulse: { name: "Rhythmic Pulse", baseHz: 65, speed: 0.08 },
        rumble: { name: "Deep Resonance", baseHz: 45, speed: 0.03 },
        crescendo: { name: "Crescendo Escalation", baseHz: 75, speed: 0.06 }
      };

      this.init();
    }

    init() {
      if (!this.canvas || !this.ctx) return;
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
      this.drawIdle();
    }

    resizeCanvas() {
      if (!this.canvas) return;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = rect.width * (window.devicePixelRatio || 1);
      this.canvas.height = 140 * (window.devicePixelRatio || 1);
      this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }

    setProduct(product) {
      if (product && product.vibrationProfile) {
        const el = document.getElementById('simulator-status');
        if (el) el.textContent = `Active Profile: ${product.name} (${product.vibrationProfile.style})`;
      }
    }

    setPattern(patternKey) {
      if (this.patterns[patternKey]) {
        this.pattern = patternKey;
        this.updateAudioParams();
      }
    }

    setIntensity(val) {
      this.intensity = Math.max(10, Math.min(100, parseInt(val, 10)));
      this.currentDb = Math.round(28 + (this.intensity / 100) * 12);
      const dbDisplay = document.getElementById('simulator-db');
      if (dbDisplay) {
        dbDisplay.textContent = `${this.currentDb} dB`;
      }
      const meterFill = document.getElementById('simulator-db-bar');
      if (meterFill) {
        meterFill.style.width = `${((this.currentDb - 20) / 25) * 100}%`;
      }
      this.updateAudioParams();
    }

    togglePlay() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
      return this.isPlaying;
    }

    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      if (this.soundEnabled && this.isPlaying) {
        this.startAudio();
      } else {
        this.stopAudio();
      }
      return this.soundEnabled;
    }

    start() {
      this.isPlaying = true;
      if (this.soundEnabled) this.startAudio();
      this.triggerHaptic();
      this.animate();
    }

    stop() {
      this.isPlaying = false;
      this.stopAudio();
      if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
      this.drawIdle();
      if (navigator.vibrate) navigator.vibrate(0);
    }

    startAudio() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!this.audioCtx) this.audioCtx = new AudioContext();
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

        if (this.oscillator) {
          this.oscillator.stop();
          this.oscillator.disconnect();
        }

        this.oscillator = this.audioCtx.createOscillator();
        this.gainNode = this.audioCtx.createGain();
        this.oscillator.type = 'sine';
        this.updateAudioParams();

        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);
        this.oscillator.start();
      } catch (e) {
        console.warn("Web Audio gesture requirement", e);
      }
    }

    stopAudio() {
      if (this.oscillator) {
        try {
          this.oscillator.stop();
          this.oscillator.disconnect();
        } catch (e) {}
        this.oscillator = null;
      }
    }

    updateAudioParams() {
      if (!this.audioCtx || !this.oscillator || !this.gainNode) return;
      const pat = this.patterns[this.pattern] || this.patterns.wave;
      const baseFreq = pat.baseHz + (this.intensity * 0.3);
      this.oscillator.frequency.setTargetAtTime(baseFreq, this.audioCtx.currentTime, 0.05);
      const gainVal = (this.intensity / 100) * 0.04;
      this.gainNode.gain.setTargetAtTime(this.soundEnabled ? gainVal : 0, this.audioCtx.currentTime, 0.05);
    }

    triggerHaptic() {
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate([100, 50, 150, 50, 200]);
        } catch (e) {}
      }
    }

    animate() {
      if (!this.isPlaying) return;
      this.drawWave();
      this.phase += (this.patterns[this.pattern].speed * (this.intensity / 50));
      this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    drawWave() {
      if (!this.canvas || !this.ctx) return;
      const width = this.canvas.parentElement.clientWidth;
      const height = 140;

      this.ctx.clearRect(0, 0, width, height);

      const bgGrad = this.ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, 'rgba(23, 19, 33, 0.95)');
      bgGrad.addColorStop(1, 'rgba(13, 13, 17, 0.98)');
      this.ctx.fillStyle = bgGrad;
      this.ctx.fillRect(0, 0, width, height);

      const centerY = height / 2;
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      this.ctx.lineWidth = 1;
      this.ctx.moveTo(0, centerY);
      this.ctx.lineTo(width, centerY);
      this.ctx.stroke();

      const amp = (this.intensity / 100) * 45;

      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      const waveGrad = this.ctx.createLinearGradient(0, 0, width, 0);
      waveGrad.addColorStop(0, '#E07A8A');
      waveGrad.addColorStop(0.5, '#DFB275');
      waveGrad.addColorStop(1, '#9F496E');
      this.ctx.strokeStyle = waveGrad;

      for (let x = 0; x < width; x++) {
        let modulation = 1;
        if (this.pattern === 'pulse') {
          modulation = Math.sin(x * 0.015 + this.phase * 0.5) > 0 ? 1.2 : 0.2;
        } else if (this.pattern === 'crescendo') {
          modulation = 0.3 + 0.7 * (x / width);
        } else if (this.pattern === 'rumble') {
          modulation = 0.8 + 0.3 * Math.sin(x * 0.005);
        }

        const y = centerY + Math.sin(x * 0.025 + this.phase) * amp * modulation * Math.sin((x / width) * Math.PI);
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }

    drawIdle() {
      if (!this.canvas || !this.ctx) return;
      const width = this.canvas.parentElement.clientWidth;
      const height = 140;
      this.ctx.clearRect(0, 0, width, height);

      this.ctx.fillStyle = 'rgba(20, 18, 28, 0.95)';
      this.ctx.fillRect(0, 0, width, height);

      const centerY = height / 2;
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(224, 122, 138, 0.25)';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([6, 6]);
      this.ctx.moveTo(20, centerY);
      this.ctx.lineTo(width - 20, centerY);
      this.ctx.stroke();
      this.ctx.setLineDash([]);

      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      this.ctx.font = '12px system-ui, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Press "Test Sensation Pulse" to activate wave resonance', width / 2, centerY + 24);
    }
  }

  // ==========================================
  // 3. INTIMACY FINDER QUIZ
  // ==========================================
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      title: "What is your familiarity with intimate pleasure devices?",
      subtitle: "There are no wrong answers. Every body is unique.",
      options: [
        { text: "Curious Beginner", desc: "First time exploring or prefer gentle, intuitive toys", score: { "pure-bliss-starter-kit": 3, "whisper-pebble": 3, "aurora-air-wave": 2 } },
        { text: "Experienced Explorer", desc: "Know what feels good, seeking refined quality & new tech", score: { "aurora-air-wave": 3, "solstice-g-curve": 3, "silhouette-wand": 2 } },
        { text: "Sensation Connoisseur", desc: "Looking for high-power rumble, dual motors, or app control", score: { "duet-eclipse": 3, "silhouette-wand": 3, "horizon-bluetooth-wand": 3 } }
      ]
    },
    {
      id: 2,
      title: "What sensation or anatomical focus are you most drawn to?",
      subtitle: "Select the primary zone of erotic focus.",
      options: [
        { text: "External Clitoral & Contactless", desc: "Gentle sonic air pulses or targeted vibration without friction", score: { "aurora-air-wave": 4, "whisper-pebble": 3 } },
        { text: "Internal G-Spot Fullness", desc: "Curved anatomical pressure with deep rumbling resonance", score: { "solstice-g-curve": 4, "duet-eclipse": 3 } },
        { text: "Both Simultaneously (Dual)", desc: "Synchronized internal and external stimulation", score: { "duet-eclipse": 5 } },
        { text: "Couples & Partnered Play", desc: "Designed for hands-free lovemaking or prostate exploration", score: { "embrace-ring": 4, "vector-prime": 4, "horizon-bluetooth-wand": 3 } },
        { text: "Sensual Body Rituals", desc: "Intimate massage, warm botanical oils, and silky hydration", score: { "silk-warming-candle": 4, "velvet-glide-lube": 4 } }
      ]
    },
    {
      id: 3,
      title: "What is your motor & sound preference?",
      subtitle: "How would you like the device to sound and feel?",
      options: [
        { text: "Whisper-Quiet & Discreet", desc: "Under 35 dB so nobody in the house or next room hears a thing", score: { "whisper-pebble": 4, "aurora-air-wave": 3 } },
        { text: "Deep, Heavy-Rumble Bass", desc: "Low-frequency pulses that penetrate deep without surface buzzing", score: { "silhouette-wand": 4, "solstice-g-curve": 3 } },
        { text: "Air-Pulse Waves", desc: "Aerodynamic suction feeling without direct rubbing", score: { "aurora-air-wave": 5 } }
      ]
    },
    {
      id: 4,
      title: "Which luxury feature excites you most?",
      subtitle: "Choose the feature you'd appreciate the most.",
      options: [
        { text: "Gentle Thermo-Warming (38°C)", desc: "Heats naturally to body temperature for lifelike warmth", score: { "duet-eclipse": 4 } },
        { text: "100% Bath & Shower Waterproof", desc: "Submersible for steamy tub relaxation", score: { "aurora-air-wave": 3, "whisper-pebble": 3, "solstice-g-curve": 3 } },
        { text: "Smart Long-Distance & Music App", desc: "Partner control from anywhere across the globe", score: { "horizon-bluetooth-wand": 5 } },
        { text: "Complete Curated Set with Guide", desc: "Includes toy, premium lube, cleaner, and silky pouch", score: { "pure-bliss-starter-kit": 5 } }
      ]
    }
  ];

  class PleasureQuiz {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.currentStep = 0;
      this.scores = {};
      this.userAnswers = [];
      this.init();
    }

    init() {
      this.reset();
    }

    reset() {
      this.currentStep = 0;
      this.scores = {};
      this.userAnswers = [];
      this.render();
    }

    selectOption(optionIndex) {
      const question = QUIZ_QUESTIONS[this.currentStep];
      const option = question.options[optionIndex];
      this.userAnswers.push({ questionId: question.id, optionIndex });

      for (const [prodId, val] of Object.entries(option.score)) {
        this.scores[prodId] = (this.scores[prodId] || 0) + val;
      }

      if (this.currentStep < QUIZ_QUESTIONS.length - 1) {
        this.currentStep++;
        this.render();
      } else {
        this.finish();
      }
    }

    finish() {
      let highestScore = -1;
      let bestProductId = "aurora-air-wave";

      for (const [id, score] of Object.entries(this.scores)) {
        if (score > highestScore) {
          highestScore = score;
          bestProductId = id;
        }
      }

      const matchedProduct = PRODUCTS.find(p => p.id === bestProductId) || PRODUCTS[0];
      this.renderResult(matchedProduct);
    }

    render() {
      if (!this.container) return;
      const question = QUIZ_QUESTIONS[this.currentStep];
      const progressPercent = Math.round(((this.currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

      this.container.innerHTML = `
        <div class="p-6 md:p-8">
          <div class="flex items-center justify-between text-xs font-medium text-stone-400 mb-3 uppercase tracking-wider">
            <span>Question ${this.currentStep + 1} of ${QUIZ_QUESTIONS.length}</span>
            <span class="text-rose-400">${progressPercent}% Completed</span>
          </div>
          <div class="w-full bg-stone-800 rounded-full h-1.5 mb-6 overflow-hidden">
            <div class="bg-gradient-to-r from-rose-400 to-amber-300 h-1.5 transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>

          <h3 class="font-serif text-2xl md:text-3xl text-stone-100 font-normal mb-2 leading-tight">${question.title}</h3>
          <p class="text-stone-400 text-sm mb-6">${question.subtitle}</p>

          <div class="space-y-3">
            ${question.options.map((opt, idx) => `
              <button type="button" data-quiz-option="${idx}" class="w-full text-left p-4 rounded-xl border border-stone-800 bg-stone-900/60 hover:border-rose-400/50 hover:bg-stone-800/80 transition-all duration-200 group flex items-start gap-4">
                <span class="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-xs text-stone-400 group-hover:border-rose-400 group-hover:text-rose-400 shrink-0 mt-0.5">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <div>
                  <div class="font-medium text-stone-200 text-base group-hover:text-rose-300 transition-colors">${opt.text}</div>
                  <div class="text-xs text-stone-400 mt-0.5">${opt.desc}</div>
                </div>
              </button>
            `).join('')}
          </div>

          ${this.currentStep > 0 ? `
            <button type="button" id="quiz-back-btn" class="mt-6 text-xs text-stone-400 hover:text-stone-200 flex items-center gap-1.5 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Previous Question
            </button>
          ` : ''}
        </div>
      `;

      this.container.querySelectorAll('[data-quiz-option]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-quiz-option'), 10);
          this.selectOption(idx);
        });
      });

      this.container.querySelector('#quiz-back-btn')?.addEventListener('click', () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.userAnswers.pop();
          this.render();
        }
      });
    }

    renderResult(product) {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="p-6 md:p-8 text-center animate-fadeIn">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium uppercase tracking-wider mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            98% Match Recommended For You
          </div>

          <h3 class="font-serif text-3xl text-stone-100 font-normal mb-2">Meet Your Match</h3>
          <p class="text-stone-400 text-sm max-w-md mx-auto mb-6">Based on your preferences for sensation, decibel comfort, and design, our intimacy algorithm selected:</p>

          <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-left max-w-xl mx-auto mb-6 shadow-2xl">
            <div class="flex flex-col sm:flex-row gap-5 items-center">
              <div class="w-32 h-32 rounded-xl overflow-hidden shrink-0 bg-stone-800">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex-1">
                <span class="text-xs uppercase tracking-wider text-rose-400 font-medium">${product.category}</span>
                <h4 class="font-serif text-2xl text-stone-100 font-normal">${product.name}</h4>
                <p class="text-xs text-stone-300 mt-1 line-clamp-2">${product.tagline}</p>
                
                <div class="flex items-center gap-3 mt-3">
                  <span class="text-xl font-medium text-amber-200 font-serif">$${product.price.toFixed(2)}</span>
                  <span class="text-xs text-stone-400 line-through">$${product.originalPrice.toFixed(2)}</span>
                  <span class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-medium">In Stock</span>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-stone-800 text-xs text-stone-400 space-y-1">
              <div class="flex items-center gap-2"><span class="text-rose-400">✓</span> ${product.features[0]}</div>
              <div class="flex items-center gap-2"><span class="text-rose-400">✓</span> ${product.specs.soundLevel}</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button type="button" id="quiz-add-to-cart" class="flex-1 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-rose-900/30 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              Add Match to Bag ($${product.price.toFixed(2)})
            </button>
            <button type="button" id="quiz-view-details" class="py-3 px-6 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-sm transition-colors">
              Full Specs
            </button>
          </div>

          <button type="button" id="quiz-retake-btn" class="mt-5 text-xs text-stone-500 hover:text-stone-300 underline">
            Retake Intimacy Quiz
          </button>
        </div>
      `;

      this.container.querySelector('#quiz-add-to-cart')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('velvet:add-cart', { detail: { product, quantity: 1 } }));
        document.getElementById('quiz-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      });

      this.container.querySelector('#quiz-view-details')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('velvet:view-product', { detail: { productId: product.id } }));
        document.getElementById('quiz-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      });

      this.container.querySelector('#quiz-retake-btn')?.addEventListener('click', () => {
        this.reset();
      });
    }
  }

  // ==========================================
  // 4. SHOPPING CART ENGINE
  // ==========================================
  class ShoppingCart {
    constructor() {
      this.items = [];
      this.appliedPromo = null;
      this.promoDiscount = 0;
      this.load();
      this.bindEvents();
    }

    load() {
      try {
        const saved = localStorage.getItem('vp_cart');
        if (saved) this.items = JSON.parse(saved);
        const savedPromo = localStorage.getItem('vp_promo');
        if (savedPromo && PROMO_CODES[savedPromo]) {
          this.appliedPromo = savedPromo;
          this.promoDiscount = PROMO_CODES[savedPromo].discount;
        }
      } catch (e) {
        this.items = [];
      }
    }

    save() {
      try {
        localStorage.setItem('vp_cart', JSON.stringify(this.items));
        if (this.appliedPromo) {
          localStorage.setItem('vp_promo', this.appliedPromo);
        } else {
          localStorage.removeItem('vp_promo');
        }
      } catch (e) {}
      this.updateBadges();
    }

    addItem(product, quantity = 1, selectedColor = null) {
      const colorName = selectedColor || (product.colorOptions ? product.colorOptions[0]?.name : 'Standard');
      const existingIndex = this.items.findIndex(
        item => item.id === product.id && item.color === colorName
      );

      if (existingIndex > -1) {
        this.items[existingIndex].quantity += quantity;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          color: colorName,
          quantity: quantity,
          category: product.category
        });
      }

      this.save();
      this.renderDrawer();
      this.openDrawer();
      this.showNotification(`Added "${product.name}" to your discreet bag.`);
    }

    removeItem(index) {
      if (this.items[index]) {
        this.items.splice(index, 1);
        this.save();
        this.renderDrawer();
      }
    }

    updateQuantity(index, newQty) {
      if (newQty <= 0) {
        this.removeItem(index);
      } else {
        this.items[index].quantity = newQty;
        this.save();
        this.renderDrawer();
      }
    }

    clear() {
      this.items = [];
      this.appliedPromo = null;
      this.promoDiscount = 0;
      this.save();
      this.renderDrawer();
    }

    getSubtotal() {
      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getDiscountAmount() {
      return this.getSubtotal() * this.promoDiscount;
    }

    getShippingCost() {
      const subtotal = this.getSubtotal();
      if (subtotal === 0) return 0;
      return subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : 7.95;
    }

    getTotal() {
      const sub = this.getSubtotal();
      if (sub === 0) return 0;
      return Math.max(0, sub - this.getDiscountAmount() + this.getShippingCost());
    }

    getItemCount() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    applyPromo(code) {
      const cleanCode = (code || '').trim().toUpperCase();
      if (PROMO_CODES[cleanCode]) {
        this.appliedPromo = cleanCode;
        this.promoDiscount = PROMO_CODES[cleanCode].discount;
        this.save();
        this.renderDrawer();
        return { success: true, message: `Promo "${cleanCode}" applied: ${PROMO_CODES[cleanCode].description}` };
      }
      return { success: false, message: "Invalid promotional code. Try 'PLEASURE15' for 15% off." };
    }

    removePromo() {
      this.appliedPromo = null;
      this.promoDiscount = 0;
      this.save();
      this.renderDrawer();
    }

    openDrawer() {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('cart-backdrop');
      if (drawer && backdrop) {
        drawer.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
      }
    }

    closeDrawer() {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('cart-backdrop');
      if (drawer && backdrop) {
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
      }
    }

    updateBadges() {
      const count = this.getItemCount();
      document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.textContent = count;
        if (count > 0) {
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      });
    }

    renderDrawer() {
      const container = document.getElementById('cart-items-container');
      const footer = document.getElementById('cart-footer-container');
      const freeShippingEl = document.getElementById('cart-free-shipping');

      if (!container || !footer) return;

      this.updateBadges();
      const subtotal = this.getSubtotal();
      const threshold = STORE_CONFIG.freeShippingThreshold;

      if (freeShippingEl) {
        if (subtotal === 0) {
          freeShippingEl.innerHTML = `<span class="text-stone-400 text-xs">Free discreet express shipping over $${threshold.toFixed(2)}</span>`;
        } else if (subtotal >= threshold) {
          freeShippingEl.innerHTML = `
            <div class="flex items-center gap-2 text-emerald-400 text-xs font-medium">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>You've unlocked <strong>FREE Discreet Express Shipping</strong>!</span>
            </div>
            <div class="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-emerald-400 h-full w-full"></div>
            </div>
          `;
        } else {
          const remaining = (threshold - subtotal).toFixed(2);
          const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
          freeShippingEl.innerHTML = `
            <div class="flex justify-between items-center text-xs text-stone-300">
              <span>Add <strong class="text-rose-400">$${remaining}</strong> for <strong>Free Discreet Shipping</strong></span>
              <span class="text-stone-400">${percent}%</span>
            </div>
            <div class="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-gradient-to-r from-rose-400 to-amber-300 h-full transition-all duration-300" style="width: ${percent}%"></div>
            </div>
          `;
        }
      }

      if (this.items.length === 0) {
        container.innerHTML = `
          <div class="py-16 text-center text-stone-400 px-6">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </div>
            <h4 class="font-serif text-xl text-stone-200 mb-1">Your bag is empty</h4>
            <p class="text-xs text-stone-400 mb-6">Explore our body-safe collections and find your personal resonance.</p>
            <button type="button" id="cart-start-shopping" class="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium uppercase tracking-wider transition-colors">
              Explore All Products
            </button>
          </div>
        `;

        container.querySelector('#cart-start-shopping')?.addEventListener('click', () => {
          this.closeDrawer();
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        });

        footer.innerHTML = '';
        return;
      }

      container.innerHTML = `
        <div class="divide-y divide-stone-800/80">
          ${this.items.map((item, idx) => `
            <div class="py-4 flex gap-4 items-center">
              <div class="w-20 h-20 rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shrink-0">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start gap-2">
                  <h5 class="text-sm font-medium text-stone-200 truncate">${item.name}</h5>
                  <button type="button" data-remove-item="${idx}" class="text-stone-500 hover:text-rose-400 transition-colors p-1" title="Remove item">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
                <div class="text-xs text-stone-400 mt-0.5">Color: ${item.color}</div>
                
                <div class="flex justify-between items-center mt-3">
                  <div class="flex items-center border border-stone-800 rounded-lg bg-stone-900">
                    <button type="button" data-qty-dec="${idx}" class="px-2 py-1 text-stone-400 hover:text-stone-200 text-xs transition-colors">-</button>
                    <span class="px-2 text-xs font-medium text-stone-200">${item.quantity}</span>
                    <button type="button" data-qty-inc="${idx}" class="px-2 py-1 text-stone-400 hover:text-stone-200 text-xs transition-colors">+</button>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-medium text-amber-200 font-serif">$${(item.price * item.quantity).toFixed(2)}</div>
                    ${item.quantity > 1 ? `<div class="text-[10px] text-stone-500">$${item.price.toFixed(2)} each</div>` : ''}
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-4 p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-stone-800 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=150&q=80" alt="Lube" class="w-full h-full object-cover">
            </div>
            <div>
              <div class="text-xs font-medium text-stone-200">The Velvet Glide Serum</div>
              <div class="text-[11px] text-stone-400">100ml Organic Aloe • $24.00</div>
            </div>
          </div>
          <button type="button" id="cart-quick-add-lube" class="text-xs py-1.5 px-3 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white transition-all font-medium shrink-0">
            + Add
          </button>
        </div>
      `;

      const discountAmt = this.getDiscountAmount();
      const shipping = this.getShippingCost();
      const total = this.getTotal();

      footer.innerHTML = `
        <div class="space-y-3 pt-4 border-t border-stone-800">
          <div class="flex gap-2">
            <input type="text" id="promo-input" placeholder="Promo code (e.g. PLEASURE15)" value="${this.appliedPromo || ''}" class="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-rose-400 uppercase">
            <button type="button" id="apply-promo-btn" class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors">
              ${this.appliedPromo ? 'Applied' : 'Apply'}
            </button>
          </div>
          ${this.appliedPromo ? `
            <div class="flex items-center justify-between text-xs text-rose-400 bg-rose-950/30 px-3 py-1.5 rounded-lg border border-rose-900/40">
              <span>Coupon "${this.appliedPromo}" applied</span>
              <button type="button" id="remove-promo-btn" class="text-stone-400 hover:text-stone-200 underline text-[11px]">Remove</button>
            </div>
          ` : ''}

          <div class="space-y-1.5 text-xs text-stone-400 pt-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="text-stone-200 font-medium">$${subtotal.toFixed(2)}</span>
            </div>
            ${discountAmt > 0 ? `
              <div class="flex justify-between text-rose-400">
                <span>Discount</span>
                <span>-$${discountAmt.toFixed(2)}</span>
              </div>
            ` : ''}
            <div class="flex justify-between">
              <span class="flex items-center gap-1.5">Discreet Shipping</span>
              <span class="text-stone-200">${shipping === 0 ? '<span class="text-emerald-400 font-medium">FREE</span>' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div class="flex justify-between items-baseline pt-2 border-t border-stone-800 text-stone-100 font-medium">
              <span class="text-sm">Estimated Total</span>
              <span class="text-lg font-serif text-amber-200">$${total.toFixed(2)}</span>
            </div>
          </div>

          <div class="p-3 bg-stone-900/80 rounded-xl border border-stone-800/80 text-[11px] text-stone-400 space-y-1">
            <div class="flex items-center gap-1.5 font-medium text-stone-300">
              <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              Discreet Billing Guarantee
            </div>
            <div>Statement reads: <strong class="text-stone-200">${STORE_CONFIG.discreetBillingName}</strong></div>
          </div>

          <button type="button" id="open-checkout-modal-btn" class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            Proceed to Discreet Checkout
          </button>
        </div>
      `;

      container.querySelectorAll('[data-remove-item]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-remove-item'), 10);
          this.removeItem(idx);
        });
      });

      container.querySelectorAll('[data-qty-dec]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-qty-dec'), 10);
          this.updateQuantity(idx, this.items[idx].quantity - 1);
        });
      });

      container.querySelectorAll('[data-qty-inc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-qty-inc'), 10);
          this.updateQuantity(idx, this.items[idx].quantity + 1);
        });
      });

      container.querySelector('#cart-quick-add-lube')?.addEventListener('click', () => {
        const lube = PRODUCTS.find(p => p.id === 'velvet-glide-lube');
        if (lube) this.addItem(lube, 1);
      });

      footer.querySelector('#apply-promo-btn')?.addEventListener('click', () => {
        const input = footer.querySelector('#promo-input');
        if (input) {
          const res = this.applyPromo(input.value);
          this.showNotification(res.message);
        }
      });

      footer.querySelector('#remove-promo-btn')?.addEventListener('click', () => {
        this.removePromo();
        this.showNotification("Promotional discount removed.");
      });

      footer.querySelector('#open-checkout-modal-btn')?.addEventListener('click', () => {
        this.closeDrawer();
        window.dispatchEvent(new CustomEvent('velvet:open-checkout'));
      });
    }

    showNotification(msg) {
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-6 right-6 z-50 bg-stone-900 border border-stone-700 text-stone-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs animate-slideUp';
      toast.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-rose-400"></span>
        <span>${msg}</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity');
        setTimeout(() => toast.remove(), 400);
      }, 3200);
    }

    bindEvents() {
      window.addEventListener('velvet:add-cart', (e) => {
        if (e.detail && e.detail.product) {
          this.addItem(e.detail.product, e.detail.quantity || 1, e.detail.color || null);
        }
      });

      document.querySelectorAll('.open-cart-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
          this.renderDrawer();
          this.openDrawer();
        });
      });

      document.getElementById('cart-close-btn')?.addEventListener('click', () => this.closeDrawer());
      document.getElementById('cart-backdrop')?.addEventListener('click', () => this.closeDrawer());
    }
  }

  // ==========================================
  // 5. MAIN APPLICATION CONTROLLER
  // ==========================================
  class VelvetApp {
    constructor() {
      this.cart = new ShoppingCart();
      this.simulator = null;
      this.quiz = null;
      this.activeCategory = 'all';
      this.searchQuery = '';
      this.sortBy = 'featured';
      this.wishlist = this.loadWishlist();
      this.currentModalProduct = null;
      this.wishlistFilterActive = false;

      this.init();
    }

    init() {
      this.initAgeGate();
      this.initQuickExit();
      this.initCategories();
      this.initProductCatalog();
      this.initSimulator();
      this.initQuiz();
      this.initEducationalArticles();
      this.initTestimonials();
      this.initFaq();
      this.initSearchAndSort();
      this.initModals();
      this.initCheckout();
      this.initNewsletter();
      this.initWishlistToggle();
      this.updateWishlistCount();

      // Listen for custom global events
      window.addEventListener('velvet:view-product', (e) => {
        const prod = PRODUCTS.find(p => p.id === e.detail.productId);
        if (prod) this.openProductModal(prod);
      });

      window.addEventListener('velvet:open-checkout', () => {
        this.openCheckoutModal();
      });
    }

    // --- AGE GATE VERIFICATION ---
    initAgeGate() {
      const isVerified = localStorage.getItem('vp_age_verified') || sessionStorage.getItem('vp_age_verified');
      const modal = document.getElementById('age-gate-modal');
      if (!modal) return;

      if (!isVerified) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        modal.classList.add('hidden');
      }

      document.getElementById('age-confirm-btn')?.addEventListener('click', () => {
        const remember = document.getElementById('age-remember-checkbox')?.checked;
        if (remember) {
          localStorage.setItem('vp_age_verified', 'true');
        } else {
          sessionStorage.setItem('vp_age_verified', 'true');
        }
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      });

      document.getElementById('age-exit-btn')?.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
      });
    }

    // --- DISCREET QUICK EXIT ---
    initQuickExit() {
      const triggerExit = () => {
        document.title = "Weather Radar - Live Local Forecast";
        document.body.innerHTML = `
          <div style="font-family: system-ui, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #333;">
            <h1 style="color: #2c5282;">National Weather Service - Local Forecast</h1>
            <p style="color: #666;">Current Conditions: 68°F / 20°C - Partly Cloudy. Humidity: 45%. Wind: NW at 6 mph.</p>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;">
            <p><a href="https://www.google.com" style="color: #3182ce;">Continue searching on Google</a></p>
          </div>
        `;
        window.location.replace("https://weather.com");
      };

      document.querySelectorAll('.quick-exit-btn').forEach(btn => {
        btn.addEventListener('click', triggerExit);
      });

      let lastEsc = 0;
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const now = Date.now();
          if (now - lastEsc < 600) {
            triggerExit();
          }
          lastEsc = now;
        }
      });
    }

    // --- CATEGORIES NAV ---
    initCategories() {
      const container = document.getElementById('categories-container');
      if (!container) return;

      container.innerHTML = CATEGORIES.map(cat => `
        <button type="button" data-category-id="${cat.id}" class="category-pill whitespace-nowrap px-4 py-2.5 rounded-full border text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
          this.activeCategory === cat.id && !this.wishlistFilterActive
            ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-950/40' 
            : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
        }">
          <span>${cat.name}</span>
        </button>
      `).join('');

      container.querySelectorAll('[data-category-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.activeCategory = btn.getAttribute('data-category-id');
          this.wishlistFilterActive = false;
          this.initCategories();
          this.renderCatalog();
        });
      });
    }

    // --- CATALOG & FILTERING ---
    initProductCatalog() {
      this.renderCatalog();
    }

    renderCatalog() {
      const grid = document.getElementById('products-grid');
      const countEl = document.getElementById('catalog-count');
      if (!grid) return;

      let filtered = PRODUCTS.filter(p => {
        if (this.wishlistFilterActive) {
          return this.wishlist.includes(p.id);
        }
        const matchCat = this.activeCategory === 'all' || p.category === this.activeCategory;
        const q = this.searchQuery.toLowerCase().trim();
        const matchSearch = !q || 
          p.name.toLowerCase().includes(q) || 
          p.tagline.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q) ||
          p.bestFor.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        return matchCat && matchSearch;
      });

      if (this.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (this.sortBy === 'reviews') {
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
      }

      if (countEl) {
        if (this.wishlistFilterActive) {
          countEl.innerHTML = `Showing <strong class="text-rose-400">${filtered.length} saved favorites</strong> (<button type="button" id="clear-wishlist-filter" class="underline text-stone-300">show all</button>)`;
          document.getElementById('clear-wishlist-filter')?.addEventListener('click', () => {
            this.wishlistFilterActive = false;
            this.initCategories();
            this.renderCatalog();
          });
        } else {
          countEl.textContent = `Showing ${filtered.length} intimate wellness products`;
        }
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full py-16 text-center text-stone-400">
            <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <h4 class="font-serif text-xl text-stone-200 mb-1">No products found</h4>
            <p class="text-xs text-stone-500 max-w-sm mx-auto mb-4">${this.wishlistFilterActive ? 'You have no saved favorites yet. Click the heart icon on any device to save it.' : 'Try clearing filters or searching for terms like "air-pulse", "organic lube", "wand", or "dual".'}</p>
            <button type="button" id="reset-catalog-filters" class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium uppercase tracking-wider">
              Show All Products
            </button>
          </div>
        `;

        grid.querySelector('#reset-catalog-filters')?.addEventListener('click', () => {
          this.activeCategory = 'all';
          this.searchQuery = '';
          this.wishlistFilterActive = false;
          const searchInput = document.getElementById('search-input');
          if (searchInput) searchInput.value = '';
          this.initCategories();
          this.renderCatalog();
        });
        return;
      }

      grid.innerHTML = filtered.map(product => {
        const isFav = this.wishlist.includes(product.id);
        return `
          <div class="group product-card bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-stone-950/80">
            <div class="relative aspect-square overflow-hidden bg-stone-950 cursor-pointer" data-view-product="${product.id}">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'">
              
              <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                ${product.badge ? `
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider backdrop-blur-md ${
                    product.badgeType === 'hot' ? 'bg-rose-500/90 text-white' :
                    product.badgeType === 'luxury' ? 'bg-amber-500/90 text-stone-950' :
                    product.badgeType === 'organic' ? 'bg-emerald-600/90 text-white' :
                    'bg-stone-900/80 text-stone-200 border border-stone-700/60'
                  }">
                    ${product.badge}
                  </span>
                ` : ''}
                ${product.specs.waterproof ? `
                  <span class="px-2 py-0.5 rounded-full text-[9px] font-medium bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 backdrop-blur-sm w-fit">
                    ${product.specs.waterproof.split(' ')[0]}
                  </span>
                ` : ''}
              </div>

              <button type="button" data-toggle-wishlist="${product.id}" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-rose-400 transition-colors z-10 backdrop-blur-sm" title="Add to Wishlist">
                <svg class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-stone-300'}" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </button>

              <div class="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-800/60 text-[10px] text-stone-300 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>${product.specs.soundLevel || 'Discreet'}</span>
                <span>•</span>
                <span>${product.specs.battery ? 'Rechargeable' : 'Skin Safe'}</span>
                <span>•</span>
                <span class="text-rose-300 font-medium">Quick Preview</span>
              </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span class="uppercase tracking-wider text-[10px] text-rose-400/90 font-medium">${product.category}</span>
                  <div class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-amber-300 fill-amber-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span class="font-medium text-stone-300">${product.rating}</span>
                    <span class="text-stone-500 text-[11px]">(${product.reviewCount})</span>
                  </div>
                </div>

                <h3 class="font-serif text-lg text-stone-100 font-normal hover:text-rose-300 cursor-pointer transition-colors" data-view-product="${product.id}">
                  ${product.name}
                </h3>
                <p class="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                  ${product.tagline}
                </p>

                ${product.colorOptions ? `
                  <div class="flex items-center gap-1.5 mt-3">
                    ${product.colorOptions.map(c => `
                      <span class="w-3.5 h-3.5 rounded-full border border-stone-700/80 shadow-inner" style="background-color: ${c.hex}" title="${c.name}"></span>
                    `).join('')}
                    <span class="text-[10px] text-stone-500 ml-1">${product.colorOptions.length} shades</span>
                  </div>
                ` : ''}
              </div>

              <div class="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between gap-2">
                <div>
                  <div class="text-base font-serif text-amber-200 font-normal">$${product.price.toFixed(2)}</div>
                  ${product.originalPrice > product.price ? `
                    <div class="text-[10px] text-stone-500 line-through">$${product.originalPrice.toFixed(2)}</div>
                  ` : ''}
                </div>

                <div class="flex items-center gap-1.5">
                  ${product.vibrationProfile ? `
                    <button type="button" data-test-vibe="${product.id}" class="p-2 rounded-xl bg-stone-800/80 hover:bg-rose-500/20 text-stone-300 hover:text-rose-300 border border-stone-700/60 transition-colors" title="Test Vibration Frequency">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </button>
                  ` : ''}
                  <button type="button" data-add-to-cart="${product.id}" class="py-2 px-3.5 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-200 hover:text-white text-xs font-medium transition-all duration-200 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('[data-view-product]').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.getAttribute('data-view-product');
          const prod = PRODUCTS.find(p => p.id === id);
          if (prod) this.openProductModal(prod);
        });
      });

      grid.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-add-to-cart');
          const prod = PRODUCTS.find(p => p.id === id);
          if (prod) this.cart.addItem(prod, 1);
        });
      });

      grid.querySelectorAll('[data-toggle-wishlist]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-toggle-wishlist');
          this.toggleWishlist(id);
        });
      });

      grid.querySelectorAll('[data-test-vibe]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-test-vibe');
          const prod = PRODUCTS.find(p => p.id === id);
          if (prod && this.simulator) {
            this.simulator.setProduct(prod);
            this.simulator.start();
            document.getElementById('simulator-section')?.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    // --- WISHLIST MANAGEMENT ---
    loadWishlist() {
      try {
        const saved = localStorage.getItem('vp_wishlist');
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }

    saveWishlist() {
      try {
        localStorage.setItem('vp_wishlist', JSON.stringify(this.wishlist));
      } catch (e) {}
      this.updateWishlistCount();
    }

    toggleWishlist(productId) {
      const idx = this.wishlist.indexOf(productId);
      const prod = PRODUCTS.find(p => p.id === productId);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        this.cart.showNotification(`Removed "${prod ? prod.name : 'Item'}" from saved favorites.`);
      } else {
        this.wishlist.push(productId);
        this.cart.showNotification(`Saved "${prod ? prod.name : 'Item'}" to favorites.`);
      }
      this.saveWishlist();
      this.renderCatalog();
    }

    updateWishlistCount() {
      document.querySelectorAll('.wishlist-badge').forEach(b => {
        b.textContent = this.wishlist.length;
        if (this.wishlist.length > 0) {
          b.classList.remove('hidden');
        } else {
          b.classList.add('hidden');
        }
      });
    }

    initWishlistToggle() {
      document.getElementById('nav-wishlist-btn')?.addEventListener('click', () => {
        this.wishlistFilterActive = !this.wishlistFilterActive;
        this.renderCatalog();
        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
      });

      // Mobile Menu Trigger
      document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        const drawer = document.getElementById('mobile-menu-drawer');
        if (drawer) drawer.classList.toggle('hidden');
      });
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          document.getElementById('mobile-menu-drawer')?.classList.add('hidden');
        });
      });
    }

    // --- INTERACTIVE SIMULATOR ---
    initSimulator() {
      this.simulator = new VibrationSimulator('simulator-canvas');

      const toggleBtn = document.getElementById('simulator-toggle-btn');
      const soundBtn = document.getElementById('simulator-sound-btn');
      const intensitySlider = document.getElementById('simulator-intensity-slider');

      toggleBtn?.addEventListener('click', () => {
        const active = this.simulator.togglePlay();
        toggleBtn.innerHTML = active 
          ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Stop Frequency`
          : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Test Sensation Pulse`;
        toggleBtn.classList.toggle('bg-rose-500', active);
        toggleBtn.classList.toggle('bg-stone-800', !active);
      });

      soundBtn?.addEventListener('click', () => {
        const isMuted = !this.simulator.toggleSound();
        soundBtn.innerHTML = isMuted
          ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg> Sound: Muted`
          : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg> Sound: Whisper Active`;
        soundBtn.classList.toggle('text-rose-400', !isMuted);
      });

      intensitySlider?.addEventListener('input', (e) => {
        this.simulator.setIntensity(e.target.value);
      });

      document.querySelectorAll('[data-pattern-btn]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-pattern-btn]').forEach(b => b.classList.remove('bg-rose-500/20', 'border-rose-400', 'text-rose-300'));
          btn.classList.add('bg-rose-500/20', 'border-rose-400', 'text-rose-300');
          this.simulator.setPattern(btn.getAttribute('data-pattern-btn'));
        });
      });
    }

    // --- QUIZ ---
    initQuiz() {
      this.quiz = new PleasureQuiz('quiz-content-container');

      document.querySelectorAll('.open-quiz-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
          this.quiz.reset();
          document.getElementById('quiz-modal')?.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        });
      });

      document.getElementById('quiz-modal-close')?.addEventListener('click', () => {
        document.getElementById('quiz-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    // --- SEARCH AND SORT ---
    initSearchAndSort() {
      const searchInput = document.getElementById('search-input');
      const sortSelect = document.getElementById('sort-select');

      searchInput?.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderCatalog();
      });

      sortSelect?.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderCatalog();
      });
    }

    // --- PRODUCT MODAL ---
    openProductModal(product) {
      this.currentModalProduct = product;
      const modal = document.getElementById('product-detail-modal');
      const container = document.getElementById('product-modal-content');
      if (!modal || !container) return;

      let selectedColor = product.colorOptions ? product.colorOptions[0].name : 'Standard';

      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <div class="space-y-4">
            <div class="aspect-square rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl relative">
              <img id="modal-main-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
              ${product.badge ? `
                <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider backdrop-blur-md bg-rose-500 text-white">
                  ${product.badge}
                </span>
              ` : ''}
            </div>

            <div class="flex gap-3">
              <button type="button" class="w-16 h-16 rounded-xl overflow-hidden border-2 border-rose-400 bg-stone-900 focus:outline-none modal-thumb" data-thumb="${product.image}">
                <img src="${product.image}" alt="View 1" class="w-full h-full object-cover">
              </button>
              ${product.secondaryImage ? `
                <button type="button" class="w-16 h-16 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 focus:outline-none modal-thumb" data-thumb="${product.secondaryImage}">
                  <img src="${product.secondaryImage}" alt="View 2" class="w-full h-full object-cover">
                </button>
              ` : ''}
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] text-stone-400">
              <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
                <div class="font-medium text-stone-200">100% Silicone</div>
                <div>Medical Grade</div>
              </div>
              <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
                <div class="font-medium text-stone-200">${product.specs.soundLevel || '< 35 dB'}</div>
                <div>Whisper Silent</div>
              </div>
              <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
                <div class="font-medium text-stone-200">2-Year</div>
                <div>Warranty Care</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-stone-400 mb-1">
                <span class="text-rose-400 uppercase tracking-wider font-medium">${product.category}</span>
                <div class="flex items-center gap-1 text-amber-300">
                  <span>★</span>
                  <span class="font-medium text-stone-200">${product.rating}</span>
                  <span class="text-stone-500">(${product.reviewCount} verified reviews)</span>
                </div>
              </div>

              <h2 class="font-serif text-3xl text-stone-100 font-normal mb-2">${product.name}</h2>
              <p class="text-sm text-rose-300 font-medium mb-4">${product.tagline}</p>

              <div class="flex items-baseline gap-3 mb-6">
                <span class="text-3xl font-serif text-amber-200">$${product.price.toFixed(2)}</span>
                ${product.originalPrice > product.price ? `
                  <span class="text-sm text-stone-500 line-through">$${product.originalPrice.toFixed(2)}</span>
                  <span class="text-xs text-rose-400 font-medium bg-rose-950/40 border border-rose-900/50 px-2 py-0.5 rounded-full">Save $${(product.originalPrice - product.price).toFixed(2)}</span>
                ` : ''}
              </div>

              <p class="text-xs text-stone-300 leading-relaxed mb-6">
                ${product.description}
              </p>

              ${product.colorOptions ? `
                <div class="mb-6">
                  <label class="block text-xs font-medium text-stone-300 mb-2">
                    Select Shade: <span id="modal-selected-color-label" class="text-rose-300">${selectedColor}</span>
                  </label>
                  <div class="flex gap-2.5">
                    ${product.colorOptions.map((c, i) => `
                      <button type="button" data-modal-color="${c.name}" class="w-8 h-8 rounded-full border-2 transition-transform ${i === 0 ? 'border-rose-400 scale-110' : 'border-stone-700 hover:border-stone-500'} flex items-center justify-center" style="background-color: ${c.hex}">
                      </button>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <div class="mb-6 space-y-2 text-xs text-stone-300">
                ${product.features.map(f => `
                  <div class="flex items-start gap-2.5">
                    <span class="text-rose-400 mt-0.5">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>

              <div class="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs space-y-2 mb-6">
                <div class="text-xs font-medium uppercase tracking-wider text-stone-400 mb-2">Technical Specifications</div>
                ${Object.entries(product.specs).map(([key, val]) => `
                  <div class="flex justify-between border-b border-stone-800/60 pb-1.5 last:border-0 last:pb-0">
                    <span class="text-stone-400 capitalize">${key.replace(/([A-Z])/g, ' $1')}</span>
                    <span class="text-stone-200 font-medium text-right max-w-[65%]">${val}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="pt-4 border-t border-stone-800 space-y-3">
              <div class="flex gap-3">
                <div class="flex items-center border border-stone-700 rounded-xl bg-stone-900">
                  <button type="button" id="modal-qty-minus" class="px-3.5 py-3 text-stone-300 hover:text-white">-</button>
                  <span id="modal-qty-display" class="px-3 text-sm font-medium text-stone-100">1</span>
                  <button type="button" id="modal-qty-plus" class="px-3.5 py-3 text-stone-300 hover:text-white">+</button>
                </div>

                <button type="button" id="modal-add-cart-btn" class="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-lg shadow-rose-950/40 flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  Add to Bag • $${product.price.toFixed(2)}
                </button>
              </div>

              <div class="flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
                <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Discreet plain packaging guaranteed • Return label: "VP Logistics"</span>
              </div>
            </div>
          </div>
        </div>
      `;

      let qty = 1;
      const qtyDisplay = container.querySelector('#modal-qty-display');
      container.querySelector('#modal-qty-minus')?.addEventListener('click', () => {
        if (qty > 1) {
          qty--;
          if (qtyDisplay) qtyDisplay.textContent = qty;
        }
      });
      container.querySelector('#modal-qty-plus')?.addEventListener('click', () => {
        qty++;
        if (qtyDisplay) qtyDisplay.textContent = qty;
      });

      container.querySelectorAll('.modal-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          container.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('border-rose-400'));
          thumb.classList.add('border-rose-400');
          const mainImg = container.querySelector('#modal-main-image');
          if (mainImg) mainImg.src = thumb.getAttribute('data-thumb');
        });
      });

      container.querySelectorAll('[data-modal-color]').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedColor = btn.getAttribute('data-modal-color');
          container.querySelectorAll('[data-modal-color]').forEach(b => {
            b.classList.remove('border-rose-400', 'scale-110');
            b.classList.add('border-stone-700');
          });
          btn.classList.add('border-rose-400', 'scale-110');
          const label = container.querySelector('#modal-selected-color-label');
          if (label) label.textContent = selectedColor;
        });
      });

      container.querySelector('#modal-add-cart-btn')?.addEventListener('click', () => {
        this.cart.addItem(product, qty, selectedColor);
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    initModals() {
      document.getElementById('product-modal-close')?.addEventListener('click', () => {
        document.getElementById('product-detail-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      });

      document.getElementById('product-detail-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'product-detail-modal') {
          document.getElementById('product-detail-modal')?.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }

    // --- DISCREET CHECKOUT MODAL ---
    initCheckout() {
      const modal = document.getElementById('checkout-modal');
      if (!modal) return;

      document.getElementById('checkout-modal-close')?.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    openCheckoutModal() {
      const modal = document.getElementById('checkout-modal');
      const container = document.getElementById('checkout-modal-content');
      if (!modal || !container) return;

      const items = this.cart.items;
      const subtotal = this.cart.getSubtotal();
      const discount = this.cart.getDiscountAmount();
      const shipping = this.cart.getShippingCost();
      const total = this.cart.getTotal();

      container.innerHTML = `
        <div class="p-6 md:p-8">
          <div class="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
            <div>
              <h3 class="font-serif text-2xl text-stone-100">Discreet Checkout</h3>
              <p class="text-xs text-stone-400">100% Confidential • End-to-End Encrypted</p>
            </div>
            <div class="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/40">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              SSL 256-Bit Protection
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 space-y-6">
              <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
                <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                  <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">1</span>
                  Shipping Address
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">First Name (or Initial)</label>
                    <input type="text" id="chk-fname" value="Alex" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">Last Name</label>
                    <input type="text" id="chk-lname" value="Taylor" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                </div>

                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">Street Address / Apt / Suite / PO Box</label>
                  <input type="text" id="chk-addr" value="742 Evergreen Terrace, Apt 4B" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>

                <div class="grid grid-cols-3 gap-3">
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">City</label>
                    <input type="text" id="chk-city" value="Springfield" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">State / Region</label>
                    <input type="text" id="chk-state" value="OR" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">Postal Code</label>
                    <input type="text" id="chk-zip" value="97477" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
                <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                  <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">2</span>
                  Packaging Stealth Level
                </div>

                <div class="space-y-2">
                  <label class="p-3 rounded-xl border border-rose-500/50 bg-rose-950/20 flex items-start gap-3 cursor-pointer">
                    <input type="radio" name="packaging" checked class="mt-1 text-rose-500">
                    <div>
                      <div class="text-xs font-medium text-stone-200 flex items-center gap-2">
                        Standard Plain Brown Corrugated Box (Free)
                        <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Included</span>
                      </div>
                      <div class="text-[11px] text-stone-400 mt-0.5">Completely plain carton with tamper-evident Kraft tape. Return address reads: <em>"VP Logistics LLC"</em></div>
                    </div>
                  </label>

                  <label class="p-3 rounded-xl border border-stone-800 bg-stone-950/40 flex items-start gap-3 cursor-pointer hover:border-stone-700">
                    <input type="radio" name="packaging" class="mt-1 text-rose-500">
                    <div>
                      <div class="text-xs font-medium text-stone-300">Ultra-Stealth Double Bagged Mailer (Free)</div>
                      <div class="text-[11px] text-stone-400 mt-0.5">Heavy-duty opaque polybag inside neutral cardboard with shock absorption.</div>
                    </div>
                  </label>
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                    <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">3</span>
                    Discreet Payment Method
                  </div>
                  <div class="flex gap-1.5 opacity-70">
                    <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">Visa</span>
                    <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">MC</span>
                    <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">Amex</span>
                  </div>
                </div>

                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">Card Number</label>
                  <input type="text" id="chk-card" value="•••• •••• •••• 4242" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">Expiration (MM/YY)</label>
                    <input type="text" id="chk-exp" value="12/28" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                  <div>
                    <label class="block text-[11px] text-stone-400 mb-1">CVV Security Code</label>
                    <input type="text" id="chk-cvv" value="882" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 flex items-start gap-2.5">
                  <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <div>
                    <strong>Card Statement Notice:</strong> This transaction will appear on your bank statement strictly as <code class="bg-black/40 px-1.5 py-0.5 rounded font-mono text-amber-100 font-bold">${STORE_CONFIG.discreetBillingName}</code>.
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 space-y-4">
              <div class="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4 sticky top-6">
                <h4 class="font-serif text-lg text-stone-200">Order Summary (${items.length} items)</h4>

                <div class="max-h-56 overflow-y-auto divide-y divide-stone-800/80 pr-1">
                  ${items.map(it => `
                    <div class="py-2.5 flex items-center justify-between text-xs">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg overflow-hidden bg-stone-800 shrink-0">
                          <img src="${it.image}" alt="${it.name}" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <div class="font-medium text-stone-200 truncate max-w-[140px]">${it.name}</div>
                          <div class="text-[10px] text-stone-400">Qty: ${it.quantity} • ${it.color}</div>
                        </div>
                      </div>
                      <div class="text-right font-medium text-amber-200 font-serif">
                        $${(it.price * it.quantity).toFixed(2)}
                      </div>
                    </div>
                  `).join('')}
                </div>

                <div class="space-y-1.5 text-xs text-stone-400 pt-3 border-t border-stone-800">
                  <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span class="text-stone-200">$${subtotal.toFixed(2)}</span>
                  </div>
                  ${discount > 0 ? `
                    <div class="flex justify-between text-rose-400">
                      <span>Discount</span>
                      <span>-$${discount.toFixed(2)}</span>
                    </div>
                  ` : ''}
                  <div class="flex justify-between">
                    <span>Discreet Shipping</span>
                    <span class="text-stone-200">${shipping === 0 ? '<span class="text-emerald-400 font-medium">FREE</span>' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div class="flex justify-between items-baseline pt-2 border-t border-stone-800 text-stone-100 font-medium">
                    <span class="text-sm">Total Due</span>
                    <span class="text-2xl font-serif text-amber-200">$${total.toFixed(2)}</span>
                  </div>
                </div>

                <button type="button" id="chk-submit-btn" class="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-xl shadow-rose-950/60 flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  Place Confidential Order ($${total.toFixed(2)})
                </button>

                <div class="text-center text-[10px] text-stone-500">
                  🔒 256-bit encrypted checkout. Your intimate privacy is our primary covenant.
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      container.querySelector('#chk-submit-btn')?.addEventListener('click', () => {
        this.completeOrder(total);
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    completeOrder(total) {
      const container = document.getElementById('checkout-modal-content');
      if (!container) return;

      const orderNumber = `VP-${Math.floor(100000 + Math.random() * 900000)}`;
      const trackingId = `TRK-${Math.floor(10000000 + Math.random() * 90000000)}`;

      this.cart.clear();

      container.innerHTML = `
        <div class="p-8 md:p-12 text-center animate-fadeIn max-w-xl mx-auto">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>

          <span class="text-xs uppercase tracking-wider text-rose-400 font-medium">Order Confirmed</span>
          <h3 class="font-serif text-3xl text-stone-100 font-normal mt-1 mb-2">Thank You For Your Order</h3>
          <p class="text-xs text-stone-400 mb-6">Your order has been safely placed. We are preparing your plain, discreet package now.</p>

          <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-left text-xs space-y-3 mb-6 shadow-xl">
            <div class="flex justify-between border-b border-stone-800 pb-2">
              <span class="text-stone-400">Order Reference</span>
              <span class="font-mono text-stone-200 font-medium">${orderNumber}</span>
            </div>
            <div class="flex justify-between border-b border-stone-800 pb-2">
              <span class="text-stone-400">Discreet Tracking ID</span>
              <span class="font-mono text-stone-200 font-medium">${trackingId}</span>
            </div>
            <div class="flex justify-between border-b border-stone-800 pb-2">
              <span class="text-stone-400">Card Statement Line</span>
              <span class="font-mono text-amber-200 font-medium">${STORE_CONFIG.discreetBillingName}</span>
            </div>
            <div class="flex justify-between border-b border-stone-800 pb-2">
              <span class="text-stone-400">Estimated Delivery</span>
              <span class="text-stone-200 font-medium">2 - 3 Business Days (Discreet Express)</span>
            </div>
            <div class="flex justify-between pt-1">
              <span class="text-stone-400">Total Charged</span>
              <span class="text-base font-serif text-amber-200 font-medium">$${total.toFixed(2)}</span>
            </div>
          </div>

          <button type="button" id="order-done-btn" class="w-full py-3 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs uppercase tracking-wider transition-colors">
            Return to Storefront
          </button>
        </div>
      `;

      container.querySelector('#order-done-btn')?.addEventListener('click', () => {
        document.getElementById('checkout-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // --- EDUCATIONAL ARTICLES ---
    initEducationalArticles() {
      const container = document.getElementById('articles-container');
      if (!container) return;

      container.innerHTML = EDUCATIONAL_ARTICLES.map(art => `
        <div class="bg-stone-900/60 border border-stone-800/80 rounded-2xl overflow-hidden hover:border-stone-700 transition-all duration-300 group cursor-pointer flex flex-col" data-view-article="${art.id}">
          <div class="aspect-video overflow-hidden bg-stone-950">
            <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-wider mb-2">
                <span class="text-rose-400 font-medium">${art.category}</span>
                <span>•</span>
                <span>${art.readTime}</span>
              </div>
              <h4 class="font-serif text-xl text-stone-100 font-normal group-hover:text-rose-300 transition-colors leading-snug">
                ${art.title}
              </h4>
              <p class="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                ${art.excerpt}
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-stone-800/80 text-xs text-rose-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Clinical Guide →
            </div>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('[data-view-article]').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-view-article');
          const art = EDUCATIONAL_ARTICLES.find(a => a.id === id);
          if (art) this.openArticleModal(art);
        });
      });
    }

    openArticleModal(article) {
      const modal = document.getElementById('generic-modal');
      const content = document.getElementById('generic-modal-content');
      if (!modal || !content) return;

      content.innerHTML = `
        <div class="p-6 md:p-10 max-w-2xl mx-auto">
          <div class="aspect-video rounded-2xl overflow-hidden mb-6 bg-stone-900 border border-stone-800">
            <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
          </div>
          <div class="flex items-center gap-2 text-xs text-stone-400 uppercase tracking-wider mb-2">
            <span class="text-rose-400 font-medium">${article.category}</span>
            <span>•</span>
            <span>${article.readTime}</span>
            <span>•</span>
            <span>Medically Reviewed</span>
          </div>
          <h2 class="font-serif text-3xl text-stone-100 font-normal mb-4">${article.title}</h2>
          <div class="prose prose-invert text-stone-300 text-sm leading-relaxed space-y-4">
            <p class="text-base text-stone-200 font-serif italic">${article.excerpt}</p>
            <p>${article.content}</p>
            <h4 class="font-serif text-lg text-stone-100 pt-2">Tips from Certified Intimacy Counselors:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-stone-400">
              <li>Always apply a generous dollop of body-safe water-based lubricant like The Velvet Glide Serum.</li>
              <li>Begin at the lowest decibel speed to allow natural pelvic blood flow to elevate before escalating intensity.</li>
              <li>Clean thoroughly after each session with an alcohol-free antimicrobial mist.</li>
            </ul>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      document.getElementById('generic-modal-close')?.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    // --- TESTIMONIALS ---
    initTestimonials() {
      const container = document.getElementById('testimonials-container');
      if (!container) return;

      container.innerHTML = TESTIMONIALS.map(t => `
        <div class="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-300 mb-3 text-sm">
              ${'★'.repeat(t.rating)}
            </div>
            <h5 class="font-serif text-base text-stone-100 font-normal mb-2">"${t.title}"</h5>
            <p class="text-xs text-stone-300 leading-relaxed italic">"${t.comment}"</p>
          </div>
          <div class="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
            <div>
              <div class="font-medium text-stone-200 flex items-center gap-1.5">
                ${t.name}
                ${t.verified ? `<span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded">Verified Customer</span>` : ''}
              </div>
              <div class="text-[11px] text-stone-500">Purchased ${t.product}</div>
            </div>
            <div class="text-[11px] text-stone-500">${t.date}</div>
          </div>
        </div>
      `).join('');
    }

    // --- FAQ ACCORDION ---
    initFaq() {
      const container = document.getElementById('faq-container');
      if (!container) return;

      container.innerHTML = FAQS.map((faq, idx) => `
        <div class="border border-stone-800 rounded-2xl bg-stone-900/40 overflow-hidden">
          <button type="button" data-faq-toggle="${idx}" class="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-lg text-stone-200 hover:text-rose-300 transition-colors">
            <span>${faq.q}</span>
            <svg class="w-5 h-5 text-stone-400 transform transition-transform duration-200 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div data-faq-content="${idx}" class="hidden p-5 pt-0 text-xs text-stone-400 leading-relaxed border-t border-stone-800/40">
            ${faq.a}
          </div>
        </div>
      `).join('');

      container.querySelectorAll('[data-faq-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = btn.getAttribute('data-faq-toggle');
          const content = container.querySelector(`[data-faq-content="${idx}"]`);
          const icon = btn.querySelector('.faq-icon');
          const isClosed = content.classList.contains('hidden');

          container.querySelectorAll('[data-faq-content]').forEach(c => c.classList.add('hidden'));
          container.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

          if (isClosed) {
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
          }
        });
      });
    }

    // --- NEWSLETTER ---
    initNewsletter() {
      const form = document.getElementById('newsletter-form');
      if (!form) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input && input.value) {
          this.cart.showNotification("Welcome to the Velvet Circle! Promo 'PLEASURE15' unlocked.");
          input.value = '';
        }
      });
    }
  }

  // ==========================================
  // 6. SAFE UNIVERSAL INITIALIZATION
  // ==========================================
  function launchApp() {
    if (!window.velvetApp) {
      window.velvetApp = new VelvetApp();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', launchApp);
  } else {
    launchApp();
  }

  // Expose global namespace for debugging or external calls
  window.VelvetStore = {
    STORE_CONFIG,
    CATEGORIES,
    PRODUCTS,
    EDUCATIONAL_ARTICLES,
    TESTIMONIALS,
    FAQS,
    PROMO_CODES
  };

})();
