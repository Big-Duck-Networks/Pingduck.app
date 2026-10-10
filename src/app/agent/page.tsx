import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

// TODO(launch): this page is unlisted until launch. At launch: set
// site.agentWindowsUrl, drop `robots` below, and link /agent from the nav,
// footer and FAQ. Tracked in pingduck/docs/ROADMAP.md, Phase 8.
export const metadata: Metadata = {
  title: "Get PingDuck Agent",
  description: `Install the ${site.name} Agent on a Windows PC, Linux box, Raspberry Pi or NAS to watch your network around the clock.`,
  robots: { index: false, follow: false },
};

const run = `docker run -d --name pingduck-agent --restart unless-stopped \\
  --net=host --cap-add=NET_RAW --cap-add=NET_ADMIN \\
  -v pingduck:/var/lib/pingduck \\
  ${site.agentImage}`;

const compose = `services:
  pingduck-agent:
    image: ${site.agentImage}
    network_mode: host
    cap_add: [NET_RAW, NET_ADMIN]
    volumes: [pingduck:/var/lib/pingduck]
    restart: unless-stopped
volumes:
  pingduck:`;

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-2 overflow-x-auto border border-hairline bg-surface-2 p-3 font-mono text-xs leading-5 text-ink">
      {children}
    </pre>
  );
}

function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mt-4 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center border-2 border-ink text-sm font-semibold">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1 pt-1 text-ink">{item}</div>
        </li>
      ))}
    </ol>
  );
}

/** Where the app's "Add monitoring unit" steps send people. Unlisted until launch. */
export default function AgentPage() {
  return (
    <>
      <PageIntro eyebrow="MONITORING UNIT" title={`Get ${site.name} Agent`}>
        <p>
          The agent runs on an always-on computer on your network. It finds the devices your phone
          can&rsquo;t see, with their MAC addresses and makers, and keeps watching when you&rsquo;re
          away.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <section className="border-2 border-ink bg-canvas p-6 shadow-hard">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-ink-2">WINDOWS PC</p>
          <h2 className="font-display mt-2 text-2xl font-bold">{site.name} Agent for Windows</h2>
          <p className="mt-2 text-ink-2">
            Sits in the tray and monitors the network your PC is on. Windows 10 or 11, 64-bit.
          </p>
          {site.agentWindowsUrl ? (
            <a
              href={site.agentWindowsUrl}
              className="font-display mt-5 inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 text-sm font-semibold tracking-wide text-canvas shadow-hard"
            >
              DOWNLOAD FOR WINDOWS
            </a>
          ) : (
            <span className="font-display mt-5 inline-flex border-2 border-partition bg-surface-2 px-5 py-3 text-sm font-semibold tracking-wide text-ink-muted">
              WINDOWS DOWNLOAD COMING SOON
            </span>
          )}
          <Steps
            items={[
              <>Download and run the installer.</>,
              <>
                Sign in with your {site.name} account in the tray app, or leave it waiting and add it
                from your phone.
              </>,
              <>
                On your phone, open {site.name} and go to <strong>Account › Add monitoring unit</strong>
                . Your PC shows up under <strong>Find my agent</strong>.
              </>,
            ]}
          />
        </section>

        <h2 className="font-display mt-14 text-2xl font-bold">Linux or Proxmox</h2>
        <p className="mt-2 text-ink-2">Docker on any 64-bit Linux box or VM.</p>
        <Steps items={[<>Open a terminal on the box.</>, <>Run:<Code>{run}</Code></>]} />

        <h2 className="font-display mt-12 text-2xl font-bold">Raspberry Pi</h2>
        <p className="mt-2 text-ink-2">Pi 3, 4 or 5 with 64-bit Raspberry Pi OS.</p>
        <Steps
          items={[
            <>Install Docker:<Code>curl -fsSL https://get.docker.com | sh</Code></>,
            <>Run:<Code>{`sudo ${run}`}</Code></>,
          ]}
        />

        <h2 className="font-display mt-12 text-2xl font-bold">Synology or QNAP NAS</h2>
        <p className="mt-2 text-ink-2">Container Manager (Synology) or Container Station (QNAP).</p>
        <Steps
          items={[
            <>Open Container Manager or Container Station.</>,
            <>Create a project (an application on QNAP) from this compose file:<Code>{compose}</Code></>,
          ]}
        />

        <div className="mt-14 border border-hairline bg-surface-1 p-5 text-sm text-ink-2">
          <p className="!mb-2 font-semibold text-ink">Then, on your phone</p>
          <p>
            Open {site.name} on the same Wi-Fi, go to <strong>Account › Add monitoring unit</strong>{" "}
            and tap <strong>Find my agent</strong>. If the box is on another VLAN or behind a VPN,
            tap <strong>Use a pairing code</strong> instead. Monitoring needs {site.name} Premium.
          </p>
        </div>
      </div>
    </>
  );
}
