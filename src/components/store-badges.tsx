import { site } from "@/lib/site";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.85c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.51 2.68-1.27z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M3.6 2.2 13.4 12l-9.8 9.8c-.36-.2-.6-.6-.6-1.07V3.27c0-.47.24-.87.6-1.07z" fill="#34A853" />
      <path d="M16.7 8.7 13.4 12 3.6 2.2c.1-.06.22-.1.34-.12.28-.04.57.01.84.17l11.92 6.45z" fill="#4285F4" />
      <path d="M16.7 15.3 4.78 21.75c-.27.16-.56.21-.84.17a1 1 0 0 1-.34-.12L13.4 12l3.3 3.3z" fill="#EA4335" />
      <path d="M20.4 12c0 .4-.2.78-.57.98l-3.13 1.7L13.4 12l3.3-3.3 3.13 1.7c.37.2.57.58.57.98z" fill="#FBBC04" />
    </svg>
  );
}

function Badge({
  href,
  top,
  bottom,
  glyph,
}: {
  href: string | null;
  top: string;
  bottom: string;
  glyph: React.ReactNode;
}) {
  const body = (
    <>
      {glyph}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-wide text-white/70">{href ? top : "Coming soon to"}</span>
        <span className="text-base font-semibold">{bottom}</span>
      </span>
    </>
  );
  const cls =
    "inline-flex min-w-44 items-center gap-3 border border-ink bg-ink px-4 py-2.5 text-white shadow-hard transition-transform";
  return href ? (
    <a href={href} className={`${cls} hover:-translate-x-0.5 hover:-translate-y-0.5`}>
      {body}
    </a>
  ) : (
    <span className={cls} aria-label={`${bottom}: coming soon`}>
      {body}
    </span>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge href={site.appStoreUrl} top="Download on the" bottom="App Store" glyph={<AppleGlyph />} />
      <Badge href={site.playStoreUrl} top="Get it on" bottom="Google Play" glyph={<PlayGlyph />} />
    </div>
  );
}
