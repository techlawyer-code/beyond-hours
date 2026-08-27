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
    whatsappNumber: "+919876543210",
    foundingYear: "2024",
    email: "vibes@beyondhours.com",
    cityBadge: "📍 Udaipur's Premier Nightlife & Event Collective",
    logoUrl: "assets/images/beyond_hours_logo.png"
  },

  // Real Instagram Account Stats for @beyondhours_ (Updated: 28 Followers, 33 Following, 2 Posts)
  instagramStats: {
    posts: 2,
    followers: 28,
    following: 33,
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

  // Upcoming Events & Passes
  upcomingEvents: [
    {
      id: "neon-lake-mirage",
      title: "Neon Lake Mirage",
      edition: "EDITION 04",
      dateBadge: {
        month: "MAR",
        day: "07",
        weekday: "SATURDAY"
      },
      time: "10:00 PM — 4:00 AM",
      venue: "Fateh Sagar Skyline Deck, Udaipur",
      genre: "Melodic House & Techno",
      status: "Selling Fast 🔥",
      statusType: "hot",
      pricing: "Passes from ₹1,499",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      description: "Lakeside neon laser stage, international DJ lineup, and signature cocktail bars under the midnight stars."
    },
    {
      id: "midnight-eclipse",
      title: "Midnight Eclipse: Vault Underground",
      edition: "WAREHOUSE SERIES",
      dateBadge: {
        month: "MAR",
        day: "13",
        weekday: "FRIDAY"
      },
      time: "11:00 PM TILL LATE",
      venue: "The Vault Underground, Old City Udaipur",
      genre: "Peak Time & Hypnotic Techno",
      status: "Early Bird Active ✨",
      statusType: "active",
      pricing: "Passes from ₹999",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      description: "Dark strobe sanctuary, raw sound pressure, and relentless underground rhythms inside Udaipur's secret vault."
    },
    {
      id: "royal-velvet-afterhours",
      title: "Royal Velvet Soirée",
      edition: "VIP INVITATIONAL",
      dateBadge: {
        month: "MAR",
        day: "21",
        weekday: "SATURDAY"
      },
      time: "10:30 PM — 5:00 AM",
      venue: "Secret Palace Courtyard, Udaipur",
      genre: "Afro Tech & Deep Melodic",
      status: "VIP Tables Only 👑",
      statusType: "vip",
      pricing: "Tables & Guestlist Only",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
      description: "Ultra-luxury gathering for Udaipur's elite. Private velvet cabanas, bespoke bottle service, and world-class selectors."
    },
    {
      id: "sunset-to-moonlight",
      title: "Sunset to Moonlight",
      edition: "ROOFTOP SESSIONS",
      dateBadge: {
        month: "MAR",
        day: "29",
        weekday: "SUNDAY"
      },
      time: "5:30 PM — 1:00 AM",
      venue: "Pichola Panorama Deck, Udaipur",
      genre: "Sunset Organic into Progressive",
      status: "Phase 1 Open ⚡",
      statusType: "active",
      pricing: "Passes from ₹1,299",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
      description: "Golden hour lake view transitions seamlessly into a starry night dance party with gourmet food & mixology."
    }
  ],

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
      title: "Dark Strobe Sanctuary",
      location: "Old City Vault, Udaipur",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      description: "Hands up in the smoke machine haze as the baseline drops at 2:30 AM."
    },
    {
      id: "gal-2",
      category: "rooftop",
      title: "Lake Pichola Skyline",
      location: "Rooftop Lounge, Udaipur",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      description: "Champagne flutes sparkling under fairy lights overlooking the calm lake."
    },
    {
      id: "gal-3",
      category: "neon",
      title: "Neon Electric Rush",
      location: "Fateh Sagar Deck, Udaipur",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      description: "Unfiltered euphoria during our flagship commercial electronic night."
    },
    {
      id: "gal-4",
      category: "vip",
      title: "Velvet Cabana Service",
      location: "Private Villa Estate, Udaipur",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
      description: "Exclusive tables, premium bottle sparklers, and tailored VIP hospitality."
    },
    {
      id: "gal-5",
      category: "techno",
      title: "Hypnotic DJ Set",
      location: "Vault Series, Udaipur",
      image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1200&auto=format&fit=crop",
      description: "Guest headliner spinning deep melodic grooves till the early morning."
    },
    {
      id: "gal-6",
      category: "rooftop",
      title: "Midnight Cocktails & Smiles",
      location: "Skyline Terrace, Udaipur",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
      description: "Where strangers turn into friends and memorable stories begin."
    },
    {
      id: "gal-7",
      category: "neon",
      title: "Laser Beam Symphony",
      location: "Grand Arena, Udaipur",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
      description: "Multi-colored lasers cutting through the darkness with 130 BPM beats."
    },
    {
      id: "gal-8",
      category: "vip",
      title: "The Inner Circle",
      location: "Heritage Courtyard, Udaipur",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      description: "Private after-hours moments crafted exclusively for the party family."
    }
  ],

  // Wall of Love
  testimonials: [
    {
      id: "rev-1",
      name: "Aaditya Varma",
      handle: "@aaditya_v",
      event: "Neon Lake Mirage (Edition 03)",
      rating: 5,
      vibes: { music: "10/10", crowd: "Fire 🔥", ambience: "Insane ✨" },
      quote: "Udaipur literally had nothing like this until Beyond Hours came in. The sound system and crowd energy till 4 AM were unmatchable!",
      date: "Last Saturday",
      verified: true
    },
    {
      id: "rev-2",
      name: "Sanya Mehta",
      handle: "@sanyamehta_x",
      event: "Secret Rooftop Soirée",
      rating: 5,
      vibes: { music: "Melodic 🎵", crowd: "Elite 🥂", ambience: "10/10 ✨" },
      quote: "The skyline view, the aesthetic lighting and the cocktails were top tier. Hands down the best curated vibe in town.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: "rev-3",
      name: "Kabir Shekhawat",
      handle: "@kabir.shekh",
      event: "Vault Underground Techno",
      rating: 5,
      vibes: { music: "Peak Bass 💣", crowd: "Wild ⚡", ambience: "Dark Luxury 🖤" },
      quote: "Real underground techno culture in Rajasthan! No random commercial playlist, pure unfiltered electronic heaven.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: "rev-4",
      name: "Tanya Rathore",
      handle: "@tanya.rathore_",
      event: "Private Villa After-Hours",
      rating: 5,
      vibes: { music: "Afro House 🎶", crowd: "10/10 👑", ambience: "Ultra Luxury ✨" },
      quote: "Booked a private VIP table for my birthday after-party. The Beyond Hours team handled everything like magic.",
      date: "1 month ago",
      verified: true
    }
  ]
};

if (typeof window !== "undefined") {
  window.BEYOND_CONFIG = BEYOND_CONFIG;
}
