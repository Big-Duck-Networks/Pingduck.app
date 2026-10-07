import Link from "next/link";
import { Logo } from "@/components/site-header";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface-1">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-[1fr_auto] sm:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-ink-2">
            Network discovery and monitoring. Made on Long Island.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <span className="font-display col-span-2 mb-1 text-[11px] font-semibold tracking-[0.2em] text-ink-muted">
            PINGDUCK
          </span>
          <Link href="/faq" className="text-ink-2 hover:text-ink">FAQ</Link>
          <Link href="/privacy" className="text-ink-2 hover:text-ink">Privacy Policy</Link>
          <a href={`mailto:${site.email}`} className="text-ink-2 hover:text-ink">Support</a>
          <Link href="/terms" className="text-ink-2 hover:text-ink">Terms of Use</Link>
        </div>
      </div>
      <div className="border-t border-hairline">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink-muted sm:px-6">
          © {site.year} {site.company}. Apple and App Store are trademarks of Apple Inc. Google
          Play is a trademark of Google LLC.
        </p>
      </div>
    </footer>
  );
}
