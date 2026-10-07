import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/icon.png" alt="" width={40} height={40} className="rounded-full" priority />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-[0.08em] text-live">
          {site.name.toUpperCase()}
        </span>
        <span className="font-display mt-1 text-[10px] font-medium tracking-[0.3em] text-ink-2">
          LAN RECON
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display px-2 py-1 text-xs font-medium tracking-[0.12em] text-ink-2 uppercase hover:text-ink sm:px-3 ${
                item.href === "/#features" ? "hidden sm:block" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
