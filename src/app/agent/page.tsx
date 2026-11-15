import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { currentWindowsRelease, formatSize } from "@/lib/releases";
import { site } from "@/lib/site";

// TODO(launch): this page is unlisted until launch. At launch: drop `robots`
// below and link /agent from the nav, footer and FAQ. Tracked in
// pingduck/docs/ROADMAP.md, Phase 8.
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

/**
 * The current release's direct GitHub link from Supabase, with its version
 * and size. Only a release recorded in Supabase enables the button: with
 * none (nothing released yet, or Supabase unreachable) it's disabled.
 */
async function WindowsDownload() {
  const { ok, release } = await currentWindowsRelease();
  if (!release) {
    return (
      <div className="mt-5">
        <button
          type="button"
          disabled
          className="font-display inline-flex cursor-not-allowed items-center gap-2 border-2 border-partition bg-surface-2 px-5 py-3 text-sm font-semibold tracking-wide text-ink-muted"
        >
          DOWNLOAD FOR WINDOWS
        </button>
        <p className="mt-2 text-xs text-ink-muted">
          {ok ? "Coming soon." : "The download isn’t available right now. Try again in a few minutes."}
        </p>
      </div>
    );
  }
  return (
    <div className="mt-5">
      <a
        href={release.url}
        className="font-display inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 text-sm font-semibold tracking-wide text-canvas shadow-hard"
      >
        DOWNLOAD FOR WINDOWS
      </a>
      <p className="mt-2 text-xs text-ink-muted">
        Version {release.version} · {formatSize(release.size)}
      </p>
    </div>
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
          <h2 className="font-display mt-2 text-2xl font-bold">{site.name} for Windows</h2>
          <p className="mt-2 text-ink-2">
            The full {site.name} app on your PC, with the agent built in: it scans your network,
            sits in the tray and keeps monitoring with the window closed. Windows 10 or 11, 64-bit.
          </p>
          <WindowsDownload />
          <Steps
            items={[
              <>Download and run the installer.</>,
              <>
                Sign in with your {site.name} account to get your data in sync.
              </>,
              <>
                Under <strong>Account › This PC</strong>, choose <strong>Monitor this network</strong>.
                Or add it from your phone: <strong>Account › Add monitoring unit › Find my agent</strong>.
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
