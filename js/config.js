/**
 * 🌙 Beyond Hours — Master Configuration File
 * Real Instagram account posts, stats & brand configuration for @beyondhours_
 */

const BEYOND_CONFIG = {
  brand: {
    name: "Beyond Hours",
    handle: "@beyondhours_",
    instagramUrl: "https://www.instagram.com/beyondhours_?igsi=N2tiY3h5NTVkNXpt",
    tagline: "we make plans you didn't know you needed.",
    subTagline: "Where plans end, stories begin.",
    location: "Udaipur, Rajasthan",
    whatsappNumber: "+918107056574",
    foundingYear: "2024",
    email: "vibes@beyondhours.com",
    cityBadge: "📍 Udaipur's Premier Nightlife & Event Collective",
    logoUrl: "assets/images/beyond_hours_logo.png"
  },

  // Real Instagram Account Stats for @beyondhours_ (Live Synced: 30 Followers, 44 Following, 3 Posts)
  instagramStats: {
    posts: 3,
    followers: 30,
    following: 45,
    category: "Nightlife & Event Planning",
    bio: "we make plans you didn't know you needed. Where plans end, stories begin ♡ | 📍 Udaipur"
  },

  // Marquee Ticker Texts
  marquee: [
    "NIGHTLIFE REDEFINED",
    "BEYOND HOURS",
    "UDAIPUR AFTER-HOURS",
    "WHERE PLANS END, STORIES BEGIN",
    "EXCLUSIVE ROOFTOPS & HOUSE PARTIES",
    "WE MAKE PLANS YOU DIDN'T KNOW YOU NEEDED",
    "VIPS • MUSIC • ENERGY"
  ],

  // Real Instagram Drops (Post 1: Reel, Post 2: Photo Collage)
  latestDrops: {
    reel: {
      title: "House Party From Group Chat",
      audioName: "Original Audio — beyondhours_",
      likes: "25",
      comments: "Live on IG",
      shares: "Share",
      caption: "House party that made out of the group chat 🍾 #BeyondHours #Udaipur",
      videoPoster: "assets/images/ig_post_1_reel.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-dancing-at-a-nightclub-43468-large.mp4",
      instagramUrl: "https://www.instagram.com/beyondhours_/reel/DceTp3iynqQ/",
      tag: "REAL REEL ⚡"
    },
    post: {
      title: "8 People, 1 Crazy Night, 0 Regrets",
      postedDate: "Recent Drop",
      likes: "23",
      comments: "2",
      slideCount: "1/1",
      caption: "8 people,1 crazy night,0 regrets!!!💅🥂 #HouseParty #HousePartyVibes #PartyVibes #Udaipur #BeyondHours",
      image: "assets/images/ig_post_2_photo.png",
      instagramUrl: "https://www.instagram.com/beyondhours_/p/DceJWS4S8Mu/",
      tag: "REAL POST 📸"
    }
  },

  // Flagship Party Experiences
  experiences: [
    {
      id: "midnight-underground",
      title: "Midnight Underground",
      subtitle: "Techno & House After-Hours",
      tag: "FLAGSHIP",
      description: "Deep bass, dark strobes, and relentless rhythm. Udaipur's premier late-night dance sanctuary.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      badge: "🌙 11 PM TILL LATE",
      vibe: "Raw Energy • Dark Luxury"
    },
    {
      id: "secret-rooftop",
      title: "Secret Rooftop Soirée",
      subtitle: "Skyline Cocktails & Melodic Beats",
      tag: "EXCLUSIVE",
      description: "Under the Udaipur star-lit sky, overlooking ancient lake horizons with champagne and melodic deep house.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      badge: "🍸 INVITE ONLY",
      vibe: "Sunset to Moonlight • Elite Socials"
    },
    {
      id: "neon-afterhours",
      title: "Neon Electric Waves",
      subtitle: "Commercial & Hip-Hop Carnivals",
      tag: "HIGH ENERGY",
      description: "High-octane drops, immersive neon visual mapping, and an electric crowd turning up the heat.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      badge: "⚡ 100% ENERGY",
      vibe: "Concert Vibe • Festival Feel"
    },
    {
      id: "private-villa",
      title: "Private Villa Gatherings",
      subtitle: "Bespoke VIP Revelry",
      tag: "CURATED",
      description: "Private pool deck setups, custom bar concepts, signature DJ lineups, crafted exclusively for the inner circle.",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
      badge: "👑 VIP ACCESS",
      vibe: "Ultra Luxury • Intimate Circle"
    }
  ],

  // Upcoming Events & Passes (Empty for now until next official drop is scheduled)
  upcomingEvents: [],

  // Gallery Categories & Items
  galleryCategories: [
    { id: "all", label: "All Vibes (24+)" },
    { id: "techno", label: "Underground Techno" },
    { id: "rooftop", label: "Rooftop Soirées" },
    { id: "neon", label: "Neon Waves" },
    { id: "vip", label: "VIP & Cabanas" }
  ],

  galleryItems: [
    {
      id: "gal-1",
      category: "techno",
      title: "Pioneer DJ Live Deck",
      location: "Underground Vault, Udaipur",
      image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=1200&auto=format&fit=crop",
      description: "Deep bass, hypnotic synthesizer drops and unfiltered electronic groove till 4 AM."
    },
    {
      id: "gal-2",
      category: "rooftop",
      title: "Lake Pichola Skyline Party",
      location: "Skyline Terrace, Udaipur",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      description: "Starry lakeside horizon, champagne flutes and melodic deep house rhythms."
    },
    {
      id: "gal-3",
      category: "neon",
      title: "Laser Beam Symphony",
      location: "Fateh Sagar Arena, Udaipur",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      description: "Neon laser visuals cutting through the haze with 130 BPM energetic drops."
    },
    {
      id: "gal-4",
      category: "vip",
      title: "VIP Bottle Sparkler Cabana",
      location: "Private Luxury Estate, Udaipur",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop",
      description: "Exclusive tables, premium bottle service, sparklers and tailored hospitality."
    },
    {
      id: "gal-5",
      category: "techno",
      title: "Dark Strobe Sanctuary",
      location: "The Vault Underground, Udaipur",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      description: "Hands up in the strobe light haze as the underground rhythm takes control."
    },
    {
      id: "gal-6",
      category: "rooftop",
      title: "Midnight Cocktails & Sparkles",
      location: "Panorama Deck, Udaipur",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      description: "Where unscripted midnight conversations turn into unforgettable party stories."
    },
    {
      id: "gal-7",
      category: "neon",
      title: "Euphoric Bass Drop",
      location: "Grand Arena Stage, Udaipur",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      description: "100% festival crowd energy turning up the heat on the dance floor."
    },
    {
      id: "gal-8",
      category: "vip",
      title: "Private Villa After-Hours",
      location: "Heritage Courtyard, Udaipur",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
      description: "Bespoke after-hours revelry crafted exclusively for the Beyond Hours circle."
    }
  ],

  // Wall of Love (Live attendee reviews submitted via the website)
  testimonials: []
};

if (typeof window !== "undefined") {
  window.BEYOND_CONFIG = BEYOND_CONFIG;
}
