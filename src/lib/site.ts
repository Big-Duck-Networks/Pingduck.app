// Single source for names, contacts and links used across the site and the
// legal pages.
export const site = {
  name: "PingDuck",
  tagline: "See every device on your network.",
  description:
    "PingDuck finds every device on your Wi-Fi in seconds: names, vendors, latency and open ports. Everything stays on your phone.",
  url: "https://pingduck.app",
  company: "Big Duck Networks",
  parentCompany: "Webcap Media Group",
  email: "support@pingduck.app",
  jurisdiction: "the State of New York",
  // Store listings; null shows a "coming soon" badge instead of a link.
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
  legalUpdated: "October 6, 2026",
  year: 2026,
};

export const nav = [
  { href: "/#features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
