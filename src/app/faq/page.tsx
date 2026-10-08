import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about PingDuck: permissions, missing devices, MAC addresses, privacy and the Homelab Agent.",
};

const groups: { title: string; items: { q: string; a: React.ReactNode }[] }[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "What does PingDuck do?",
        a: (
          <p>
            PingDuck scans the Wi-Fi network your phone is on and lists every device that
            responds, with its IP address, name, manufacturer, latency and the services it
            advertises. From there you can inspect a single device: live ping, port scan,
            Wake-on-LAN, and your own name and notes.
          </p>
        ),
      },
      {
        q: "Is PingDuck free?",
        a: (
          <p>
            Yes. Scanning, the radar, the device list and Node Inspect are free, and you
            don&rsquo;t need an account to use them. The free plan includes 3 scans a day that
            you start yourself. The automatic scan when you open the app or reconnect to Wi-Fi
            doesn&rsquo;t count, and runs at most once every 30 minutes. Your scans reset at
            midnight UTC. We plan an optional paid plan later for unlimited scans and extras that cost us money to run,
            such as the Homelab Agent, cloud sync and intrusion alerts. If we add one, the price
            and terms will be shown clearly in the app before you subscribe.
          </p>
        ),
      },
      {
        q: "Do I need an account?",
        a: (
          <p>
            No. PingDuck works without one. If you want an account, open the Account tab and
            create one with your email and a password. We email you a link to confirm the
            address. An account will also be how you connect cloud sync and the Homelab Agent
            when they arrive. Google sign-in, and Sign in with Apple on iPhone, are coming
            soon. Your device list stays on your phone either way.
          </p>
        ),
      },
      {
        q: "Which networks can it scan?",
        a: (
          <p>
            The IPv4 network your phone is connected to over Wi-Fi, up to a /24 subnet (254
            addresses). Scans normally finish in under 15 seconds. PingDuck does not scan over
            mobile data.
          </p>
        ),
      },
    ],
  },
  {
    title: "Permissions",
    items: [
      {
        q: "Why does PingDuck ask for location permission?",
        a: (
          <p>
            iOS and Android only reveal the <strong>name of your Wi-Fi network</strong> to apps
            that have location access. PingDuck uses it to label the network and remember it
            for next time. It never reads GPS coordinates or records your location. If you
            decline, scanning still works; the network just won&rsquo;t show its Wi-Fi name.
          </p>
        ),
      },
      {
        q: "Why does iOS ask to find devices on my local network?",
        a: (
          <p>
            That is the Local Network permission, and PingDuck can&rsquo;t scan without it. If
            you declined, turn it back on in Settings › Privacy &amp; Security › Local Network.
          </p>
        ),
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        q: "Why can't I see MAC addresses?",
        a: (
          <p>
            Since iOS 14 and Android 10, phones block apps from reading MAC addresses of other
            devices. PingDuck identifies devices by name, services and UPnP details instead. The
            upcoming Homelab Agent, which runs on a computer on your network, can read exact MAC
            addresses and send them to the app.
          </p>
        ),
      },
      {
        q: "Why is a device missing from the list?",
        a: (
          <>
            <p>A device only shows up if it answers. Common reasons it doesn&rsquo;t:</p>
            <ul>
              <li>It is asleep or in a power-saving mode (phones and tablets often are). Wake it and rescan.</li>
              <li>Its firewall ignores ping and it doesn&rsquo;t advertise any services.</li>
              <li>You are on a guest network or a router with client isolation turned on, which hides devices from each other.</li>
              <li>It is on a different subnet or VLAN from your phone.</li>
            </ul>
          </>
        ),
      },
      {
        q: "What do the ICMP, MDNS and SSDP tags mean?",
        a: (
          <p>
            They show how a device answered. <strong>ICMP</strong> means it replied to a ping.{" "}
            <strong>MDNS</strong> means it announced itself over Bonjour, which is where names
            like &ldquo;Living Room TV&rdquo; come from. <strong>SSDP</strong> means it responded
            to a UPnP search, which often gives the make and model. More tags usually means more
            detail.
          </p>
        ),
      },
      {
        q: "What does the port scan check?",
        a: (
          <p>
            It tries to open a TCP connection to each port and reports the ones that accept.
            Quick scan checks common ports such as SSH, HTTP, HTTPS and RDP. Deep scan checks
            ports 1–1024. Closed and filtered ports look the same from a phone, so a port not
            listed isn&rsquo;t necessarily blocked by a firewall.
          </p>
        ),
      },
      {
        q: "Why doesn't Wake-on-LAN work for my device?",
        a: (
          <p>
            Wake-on-LAN needs the device&rsquo;s MAC address, which phones can&rsquo;t read, and
            it must be enabled in the device&rsquo;s BIOS or network settings. Most devices can
            only be woken over a wired Ethernet connection.
          </p>
        ),
      },
    ],
  },
  {
    title: "Privacy & safety",
    items: [
      {
        q: "Does PingDuck send my data anywhere?",
        a: (
          <p>
            Your device list, notes and network names stay on your phone. To apply the free
            plan&rsquo;s scan limit, the app counts scans against a random anonymous ID on our
            server, with no device or network details attached. If you sign in, we also store
            your email address. There are no analytics and no ads. See the{" "}
            <Link href="/privacy">Privacy Policy</Link> for details.
          </p>
        ),
      },
      {
        q: "How do I delete my data?",
        a: (
          <p>
            Open the Account tab and tap <strong>Clear device inventory</strong>. Uninstalling
            the app also deletes everything it stored on your phone. To delete your account
            and everything stored with it on our server, tap <strong>Delete account</strong>{" "}
            on the Account tab.
          </p>
        ),
      },
      {
        q: "Is it legal to scan a network?",
        a: (
          <p>
            Scanning your own network, or one you have permission to test, is fine. Scanning
            networks you don&rsquo;t own or manage can break their rules or the law, so
            don&rsquo;t. Our <Link href="/terms">Terms of Use</Link> require that you have
            permission.
          </p>
        ),
      },
    ],
  },
  {
    title: "Homelab Agent",
    items: [
      {
        q: "What is the Homelab Agent?",
        a: (
          <p>
            An optional Docker container that runs PingDuck&rsquo;s scanning engine on a Linux
            server, NAS or Proxmox box on your network. Because it is not limited by phone
            sandboxing, it captures exact MAC addresses and vendors, keeps 24/7 history, and
            will alert you when an unknown device joins. Pairing it with the app is coming soon.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="SUPPORT" title="Frequently asked questions">
        <p>
          Can&rsquo;t find your answer? Email{" "}
          <a href={`mailto:${site.email}`} className="text-route underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </PageIntro>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {groups.map((g) => (
          <section key={g.title} className="mb-12">
            <h2 className="font-display mb-4 text-xs font-semibold tracking-[0.25em] text-ink-muted uppercase">
              {g.title}
            </h2>
            <div className="border-t border-ink">
              {g.items.map((item) => (
                <details key={item.q} className="group border-b border-hairline">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-medium hover:text-live">
                    {item.q}
                    <span className="faq-chevron font-display text-xl leading-none text-ink-muted transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="prose-legal -mt-1 pb-5">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
