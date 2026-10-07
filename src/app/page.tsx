import Link from "next/link";
import { Phone } from "@/components/phone";
import { StoreBadges } from "@/components/store-badges";

const methods = [
  { tag: "ICMP", color: "route", text: "Ping sweep of your whole subnet in parallel." },
  { tag: "MDNS", color: "live", text: "Bonjour names and services: printers, speakers, TVs." },
  { tag: "SSDP", color: "route", text: "UPnP descriptions with make, model and friendly name." },
  { tag: "NBNS", color: "live", text: "Windows and NAS names via NetBIOS and reverse DNS." },
  { tag: "OUI", color: "route", text: "Offline IEEE vendor lookup, plus randomized-MAC detection." },
] as const;

const features = [
  {
    eyebrow: "01 · RADAR",
    title: "Every device, plotted by how fast it answers.",
    body: "Hit scan and PingDuck sweeps your Wi-Fi in seconds. Devices land on the radar by latency, and the list fills in with names, vendors and the protocols each one answered on. Devices you have seen before show up instantly, before the scan even starts.",
    points: ["Usually done in under 15 seconds", "Sort by latency, name or address", "Remembers each network you join"],
    src: "/screens/overview.png",
    alt: "PingDuck radar showing devices on a Wi-Fi network sorted by latency",
  },
  {
    eyebrow: "02 · NODE INSPECT",
    title: "Everything known about one device.",
    body: "Open any device for live ping with jitter and loss, a quick or deep TCP port scan, Wake-on-LAN, and your own name and notes. First seen, last seen and where each detail came from are all on one screen.",
    points: ["Live RTT chart with min, avg and max", "Quick scan or ports 1–1024", "Rename devices and keep notes"],
    src: "/screens/inspector.png",
    alt: "PingDuck Node Inspect screen with latency monitor and port scan",
  },
  {
    eyebrow: "03 · LOCAL FIRST",
    title: "No account. Nothing leaves your phone.",
    body: "Your device inventory lives on your phone and nowhere else. There is no sign-up, no analytics and no ads. Clear it any time from the Account tab.",
    points: ["No sign-in required", "No trackers or analytics", "Vendor database is bundled for offline use"],
    src: "/screens/account.png",
    alt: "PingDuck Account screen showing all data stored on this device",
  },
];

function Chip({ children, tone }: { children: React.ReactNode; tone: "live" | "route" }) {
  const cls =
    tone === "live"
      ? "border-live-border bg-live-fill text-live"
      : "border-route-border bg-route-fill text-route";
  return (
    <span className={`font-display inline-block border px-2 py-0.5 text-xs font-semibold tracking-wider ${cls}`}>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-20 lg:pb-24">
          <div>
            <Chip tone="live">● LIVE · iOS &amp; ANDROID</Chip>
            <h1 className="font-display mt-6 text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Who&rsquo;s on
              <br />
              your Wi&#8209;Fi?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              PingDuck finds every device on your network in seconds, then tells you what each
              one is, how fast it answers and which ports it has open. Playful on the surface,
              properly technical underneath.
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              Free to scan. No account. Your data stays on your phone.
            </p>
          </div>

          <div className="relative mx-auto w-64 sm:w-72">
            {/* Radar boundaries, echoing the app's latency rings. */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
              {[
                ["-inset-10", "10ms CORE"],
                ["-inset-24", "50ms LOCAL"],
                ["-inset-40", "200ms BOUNDARY"],
              ].map(([inset, label]) => (
                <div key={label} className={`absolute ${inset} border border-dashed border-partition`}>
                  <span className="font-display absolute -top-2.5 left-1/2 -translate-x-1/2 bg-canvas px-2 text-[10px] tracking-[0.2em] text-ink-muted">
                    {label}
                  </span>
                </div>
              ))}
              <span className="absolute -top-16 -left-6 h-3 w-3 bg-pending" />
              <span className="absolute top-1/3 -right-20 h-3 w-3 bg-route" />
              <span className="absolute -bottom-12 left-6 h-3 w-3 bg-live" />
              <span className="absolute bottom-1/4 -left-24 h-3 w-3 bg-route" />
            </div>
            <Phone src="/screens/overview.png" alt="PingDuck scanning a home network" priority />
          </div>
        </div>
      </section>

      {/* Discovery methods */}
      <section className="border-b border-hairline bg-surface-1">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-display text-xs font-semibold tracking-[0.25em] text-ink-muted">
            FIVE WAYS TO FIND A DEVICE, ALL AT ONCE
          </p>
          <div className="mt-6 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {methods.map((m) => (
              <div key={m.tag} className="bg-canvas p-5">
                <Chip tone={m.color}>{m.tag}</Chip>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16">
        {features.map((f, i) => (
          <div key={f.eyebrow} className="border-b border-hairline">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="font-display text-xs font-semibold tracking-[0.25em] text-live">{f.eyebrow}</p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{f.title}</h2>
                <p className="mt-5 leading-relaxed text-ink-2">{f.body}</p>
                <ul className="mt-6 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="h-2 w-2 shrink-0 bg-live" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mx-auto w-60 sm:w-64 ${i % 2 ? "lg:order-1" : ""}`}>
                <Phone src={f.src} alt={f.alt} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Homelab agent */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="font-display inline-block border border-white/25 px-2 py-0.5 text-xs font-semibold tracking-wider text-pending">
              COMING SOON
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              The Homelab Agent sees what phones can&rsquo;t.
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              iOS and Android don&rsquo;t let apps read MAC addresses. The PingDuck agent runs
              the same scanning engine in a small Docker container on your server, so you get
              exact MAC addresses, vendors, 24/7 history and alerts when an unknown device joins
              your network, even while your phone is away.
            </p>
          </div>
          <pre className="overflow-x-auto border border-white/15 bg-white/5 p-5 font-mono text-xs leading-relaxed text-white/80 sm:text-sm">
            <span className="text-white/40"># on your homelab box</span>
            {"\n"}$ docker run --rm --net=host \{"\n"}    --cap-add=NET_RAW --cap-add=NET_ADMIN \{"\n"}    pingduck-agent
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Meet everyone on your network.
            </h2>
            <p className="mt-3 text-ink-2">
              Questions first? The <Link href="/faq" className="text-route underline underline-offset-4">FAQ</Link>{" "}
              covers permissions, missing devices and privacy.
            </p>
          </div>
          <StoreBadges />
        </div>
      </section>
    </>
  );
}
