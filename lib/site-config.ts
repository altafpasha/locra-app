export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Locra AI",
  shortName: "Locra",
  domain: "locra.app",
  url: "https://locra.app",
  tagline: "Turn travel inspiration into your next trip.",
  description:
    "Save places from Reels, photos, and ideas you discover online. Locra AI organizes them into trips, verifies locations, and helps you build smarter itineraries with friends.",
  keywords: [
    "AI travel planner",
    "travel itinerary planner",
    "Instagram travel planner",
    "save travel places",
    "travel Reel planner",
    "group trip planner",
    "travel expense splitter",
    "trip planner app",
    "smart travel itinerary",
  ],
  authors: [{ name: "Locra AI Team", url: "https://locra.app" }],
  creator: "Locra AI",
  publisher: "Locra AI",
  contact: {
    supportEmail: "support@locra.app",
    privacyEmail: "privacy@locra.app",
    pressEmail: "press@locra.app",
    businessEmail: "hello@locra.app",
  },
  links: {
    appStore: "https://apps.apple.com/app/locra-ai/id6740000000",
    googlePlay: "https://play.google.com/store/apps/details?id=com.codesec.locraai",
    androidPackage: "com.codesec.locraai",
    instagram: "https://instagram.com/locra.app",
    x: "https://x.com/locraapp",
    github: "https://github.com/locra-app",
  },
  nav: [
    { label: "Product", href: "/#features" },
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ] as NavItem[],
  footerNav: {
    product: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Reel Importer", href: "/features#reel-importer" },
      { label: "AI Itineraries", href: "/features#ai-itinerary" },
      { label: "Group Planning", href: "/features#group-planning" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
    company: [
      { label: "About Locra", href: "/about" },
      { label: "Blog & Guides", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Press Inquiries", href: "/contact#press" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookies Policy", href: "/cookies" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Subscription Terms", href: "/subscription-terms" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "Data Deletion", href: "/data-deletion" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
  socialProof: "Built for travelers who save everything and plan later.",
};
