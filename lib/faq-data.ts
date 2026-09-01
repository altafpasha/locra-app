export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "features" | "pricing" | "privacy";
}

export const faqData: FAQItem[] = [
  {
    id: "what-is-locra",
    category: "general",
    question: "What is Locra AI?",
    answer:
      "Locra AI is a mobile travel planning app that bridges the gap between travel inspiration and real-world execution. Instead of letting saved Instagram Reels, photos, and notes get lost across your phone, Locra extracts locations from your content, verifies them on Google Maps, organizes them into trips, and helps you build smart itineraries with friends.",
  },
  {
    id: "how-reels-work",
    category: "features",
    question: "How does Locra find places from Reels and photos?",
    answer:
      "When you share an Instagram Reel, post, or photo to Locra using your phone's native share sheet, Locra's AI identifies mentioned spots, geo-coordinates, and visual context. It then matches and verifies the location against reliable place databases like Google Places so you get accurate addresses, hours, and map pins.",
  },
  {
    id: "save-to-trip",
    category: "features",
    question: "Can I save places to a trip?",
    answer:
      "Yes! You can create dedicated trips (e.g., 'Tokyo Spring 2026' or 'Amalfi Roadtrip') and save places directly into them. You can categorize spots by cafes, viewpoints, cultural spots, or dining, and view them all pinned on an interactive trip map.",
  },
  {
    id: "ai-itinerary",
    category: "features",
    question: "Can Locra create an itinerary?",
    answer:
      "Yes. Locra AI analyzes your saved spots, trip dates, hotel location, and travel pace to propose practical day-by-day itineraries. It groups geographically close spots together to minimize backtracking and optimize your daily travel time.",
  },
  {
    id: "group-trips",
    category: "features",
    question: "Does Locra work for group trips?",
    answer:
      "Absolutely. You can invite friends and travel partners to your trip space with a simple invite link. Everyone can contribute saved places, vote on daily activities, and stay in sync on a single collaborative itinerary.",
  },
  {
    id: "track-expenses",
    category: "features",
    question: "Can I track trip expenses and split costs?",
    answer:
      "Yes! Locra includes a built-in trip expense tracker and cost splitter. Log flights, accommodation, food, and activities in any currency, and Locra calculates who owes whom without needing a separate spreadsheet.",
  },
  {
    id: "is-locra-free",
    category: "pricing",
    question: "Is Locra free?",
    answer:
      "Locra offers a generous Free tier that includes up to 10 Reel extractions per month, place verification, trip creation, saved places, maps, manual itinerary building, trip sharing, and expense tracking.",
  },
  {
    id: "locra-pro",
    category: "pricing",
    question: "What is included with Locra Pro?",
    answer:
      "Locra Pro unlocks unlimited Reel & content extractions, AI itinerary generation, full access to the conversational AI Trip Assistant, smart recommendations, and higher AI planning limits. Pro subscriptions are managed directly through Apple App Store or Google Play Store in the mobile app.",
  },
  {
    id: "use-without-ai",
    category: "general",
    question: "Can I use Locra without AI?",
    answer:
      "Yes. You can manually create trips, search and pin locations, organize days, add notes, and track expenses entirely on your own without running AI itinerary generators if you prefer manual curation.",
  },
  {
    id: "data-handling",
    category: "privacy",
    question: "How does Locra handle my data?",
    answer:
      "We take privacy seriously. Your saved places and trips are securely stored with enterprise-grade encryption. We only process travel content you explicitly share with the app, and we never sell your personal data or location history to third-party advertisers. See our Privacy Policy for full details.",
  },
  {
    id: "delete-account",
    category: "privacy",
    question: "How do I delete my account?",
    answer:
      "You can delete your account and all associated trips, saved places, and data at any time directly inside the Locra mobile app settings, or by visiting our Data Deletion page. Deletion is permanent and immediate.",
  },
];
