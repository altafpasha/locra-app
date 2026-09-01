export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "turn-instagram-reels-into-tokyo-itinerary",
    title: "How to Turn Saved Instagram Reels into a 5-Day Tokyo Itinerary",
    excerpt:
      "Stop losing hidden ramen bars and Kyoto viewpoints in your bookmarks. Here is the step-by-step workflow to turn social media saves into a realistic, geographically optimized trip.",
    category: "Travel Guides",
    readTime: "4 min read",
    publishedAt: "2026-02-15",
    author: {
      name: "Elena Rostova",
      role: "Travel Editor at Locra",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    content: `
### The Problem with Instagram Bookmarks

We all do it: you are scrolling through Instagram at 11 PM, and a Reel appears showing an incredible underground coffee roaster in Yanaka or a hidden rooftop garden overlooking Shibuya crossing. You hit the bookmark button, feel a quick rush of excitement, and then… forget it ever exists.

Months later when you actually land in Tokyo, you open your saved collection and face 400 unsorted posts with no maps, no opening hours, and no idea how far they are from each other.

### Step 1: Share Directly to Locra

Instead of saving Reels to an Instagram folder where they get buried, tap the **Share** button on the Reel and select **Locra**. 

Locra extracts the name of the place, matches it to verified Google Places data, pulls the exact GPS coordinates, and assigns it to your "Tokyo 2026" trip folder.

### Step 2: Categorize by Vibe and Area

Once your places are in Locra, you will immediately see them plotted on a live interactive map of Tokyo. You will realize that three of your saved vintage shops are within a 5-minute walk of each other in Shimokitazawa, while that scenic shrine is an hour away in Kamakura.

### Step 3: Let AI Cluster Your Days

Locra’s AI itinerary engine groups your saved spots logically:
- **Day 1: Shibuya & Harajuku** (Fashion, coffee, rooftop sunsets)
- **Day 2: Asakusa & Akihabara** (Culture, street food, evening tech alleys)
- **Day 3: Yanaka & Ueno** (Old town vibes, pottery, traditional sweets)

This saves you hours of manual Google Maps pin-dropping and eliminates zig-zagging across the city.
    `,
  },
  {
    slug: "why-travel-spreadsheets-fail-groups",
    title: "Why Travel Spreadsheets Fail Groups (And What to Do Instead)",
    excerpt:
      "Color-coded spreadsheets look great in theory, but when you are actually on the ground in Rome, no one wants to scroll through 40 columns on their phone screen.",
    category: "Productivity",
    readTime: "3 min read",
    publishedAt: "2026-02-28",
    author: {
      name: "Marcus Vance",
      role: "Product Lead at Locra",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    content: `
### The Spreadsheets Trap

Every group trip starts with good intentions: someone creates a Google Sheet with 8 tabs, color-coded rows for breakfast, lunch, and dinner, and intricate budget formulas.

By Day 2 of the trip:
1. Nobody can read the tiny cells on their phone screen.
2. Two people forgot their logins or lack cell service to update the shared doc.
3. Someone accidentally deletes an entire column of reservation numbers.
4. Splitting the dinner bill requires a 20-minute forensic accounting session.

### What Modern Group Travel Looks Like

Locra was designed specifically for mobile-first group travel. 

- **Shared Workspaces**: Everyone can drop saved spots into the trip from Instagram or search.
- **Vote & Pin**: Upvote places everyone wants to try.
- **Built-in Splitter**: Enter the bill in Euros or Yen, select who shared the bottle of wine, and Locra handles the math instantly.
- **Offline Reliability**: Key itinerary details remain accessible even when underground in the subway.
    `,
  },
  {
    slug: "practical-ai-travel-planning",
    title: "Practical AI for Travel: Beyond the Chatbot Hype",
    excerpt:
      "Why generic chat assistants produce generic travel itineraries, and why trip context is the key to planning journeys that actually work in real life.",
    category: "AI & Tech",
    readTime: "5 min read",
    publishedAt: "2026-03-01",
    author: {
      name: "Sarah Chen",
      role: "AI Research at Locra",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    },
    content: `
### The Generic Chatbot Problem

If you ask a generic AI chatbot to "plan a 3-day trip to Paris," you will almost certainly get the exact same tourist cliches:
- Morning: Eiffel Tower
- Afternoon: Louvre
- Evening: Seine River Cruise

It doesn't know where your Airbnb is, whether you prefer third-wave espresso over museums, or that you already saved five boutique bakeries in the 11th arrondissement.

### The Locra Difference: Context-First AI

Locra approaches AI differently. Instead of generating a generic plan out of thin air, Locra builds its suggestions around **your taste and your saved places**.

When you ask Locra AI *"What should we do on Thursday afternoon?"*, it looks at:
1. The places you already saved from Instagram Reels.
2. The distance from your morning reservation.
3. Realistic walking and transit times.
4. Opening and closing hours verified with live map data.

The result is an itinerary that feels like you spent 20 hours researching it yourself—completed in seconds.
    `,
  },
];
