// Single source for names, contacts and links used across the site and the
// legal pages.
export const site = {
  name: "PingDuck",
  tagline: "See every device on your network.",
  description:
    "PingDuck finds every device on your Wi-Fi in seconds: names, vendors, latency and open ports. Your device list stays on your phone.",
  url: "https://pingduck.app",
  company: "Big Duck Networks",
  email: "support@pingduck.app",
  jurisdiction: "the State of New York",
  // Before launch the homepage shows the waitlist form instead of the store
  // badges. Set to false at launch, with the store URLs below.
  waitlist: true,
  // The waitlist calls join_waitlist on Supabase. The publishable key is
  // meant to be public; it can only run that function.
  supabaseUrl: "https://rumwtzzyrhzudguolasq.supabase.co",
  supabasePublishableKey: "sb_publishable_eWbf9jGpxBWQ6t7Vtz8r5A_mWfdmVrK",
  // Store listings; null shows a "coming soon" badge instead of a link.
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
  // PingDuck for Windows (the desktop app with the agent built in). The
  // current release's download link comes from Supabase (lib/releases.ts),
  // where release-windows.yml in the pingduck repo records each release; with
  // no release there the download is disabled. Only links under this prefix
  // are accepted from it.
  windowsReleasePrefix: "https://github.com/Big-Duck-Networks/pingduck/releases/download/",
  agentImage: "ghcr.io/big-duck-networks/pingduck-agent:latest",
  legalUpdated: "November 14, 2026",
  year: 2026,
};

export const nav = [
  { href: "/#features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
