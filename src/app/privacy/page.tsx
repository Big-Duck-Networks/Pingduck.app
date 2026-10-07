import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the PingDuck app handles your data: no account, no analytics, everything stored on your device.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Privacy Policy">
        <p>Last updated {site.legalUpdated}</p>
      </PageIntro>
      <article className="prose-legal mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-8 border border-live-border bg-live-fill p-5">
          <p className="!mb-0 !text-ink">
            <strong>The short version:</strong> PingDuck does not collect, sell or share your
            personal data. There is no account, no analytics, no advertising and no tracking.
            Everything the app learns about your network is stored on your device, and you can
            delete it at any time.
          </p>
        </div>

        <p>
          This policy explains how the PingDuck mobile app for iOS and Android (the
          &ldquo;App&rdquo;), provided by {site.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
          handles information. It also covers this website.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          <strong>We do not collect any personal information through the App.</strong> The App
          does not require an account, does not include analytics, crash-reporting or
          advertising SDKs, and does not send information about you or your network to us or
          to any third party.
        </p>

        <h2>2. Information stored on your device</h2>
        <p>To work, the App keeps the following on your device only:</p>
        <ul>
          <li>
            <strong>Device inventory:</strong> IP addresses, hostnames, manufacturer names,
            advertised services, open ports and latency history of devices found on networks
            you scan.
          </li>
          <li>
            <strong>Saved networks:</strong> the Wi-Fi network name (SSID) and subnet of
            networks you have scanned.
          </li>
          <li>
            <strong>Your notes:</strong> names and notes you add to devices.
          </li>
          <li>
            <strong>Settings:</strong> preferences such as scan timeout.
          </li>
        </ul>
        <p>
          This data never leaves your device. You can delete it with <strong>Account › Clear
          device inventory</strong>, and uninstalling the App removes it entirely. Your
          device&rsquo;s own backup service (such as iCloud or Google backup) may include App
          data if you have enabled it; that is governed by Apple&rsquo;s or Google&rsquo;s
          policies.
        </p>

        <h2>3. Permissions the App uses</h2>
        <ul>
          <li>
            <strong>Local network access</strong> (iOS) and <strong>Wi-Fi / network state</strong>{" "}
            (Android): to discover and communicate with devices on your local network.
          </li>
          <li>
            <strong>Location</strong> (when in use): iOS and Android only reveal the name of the
            connected Wi-Fi network to apps with location permission. The App uses it solely to
            label your network. It does not access GPS coordinates or record, store or transmit
            your location. This permission is optional.
          </li>
          <li>
            <strong>Multicast</strong> (Android): to send and receive mDNS (Bonjour) and SSDP
            (UPnP) discovery messages.
          </li>
          <li>
            <strong>Internet</strong> (Android): required by Android for any network socket,
            including those used to reach devices on your local network.
          </li>
        </ul>

        <h2>4. Network traffic the App sends</h2>
        <p>
          When you scan, the App sends standard discovery traffic (ICMP ping, mDNS, SSDP,
          NetBIOS and DNS lookups, and TCP connection attempts for port scans) to devices on
          your local network. Devices on your network may log this traffic like any other.
          Manufacturer names come from a copy of the public IEEE OUI registry bundled with the
          App, so no lookup is made over the internet.
        </p>

        <h2>5. Future optional features</h2>
        <p>
          We plan optional features such as accounts, cloud sync across your devices, the
          Homelab Agent and in-app subscriptions. These will be opt-in. Before any of them
          launch we will update this policy to describe exactly what is collected, why, and
          how to delete it. Subscription payments, if offered, are processed by Apple or Google;
          we do not receive your payment card details.
        </p>

        <h2>6. This website</h2>
        <p>
          This website does not use cookies, analytics or advertising trackers. Our hosting
          provider may keep standard server logs (such as IP address, browser type and the page
          requested) for security and reliability, for a limited period.
        </p>

        <h2>7. Children</h2>
        <p>
          The App is not directed to children under 13, and we do not knowingly collect
          personal information from anyone, including children.
        </p>

        <h2>8. Your rights</h2>
        <p>
          Depending on where you live (for example under the GDPR or the California Consumer
          Privacy Act), you may have rights to access, correct or delete personal information
          and to opt out of its sale. Because we do not collect or sell personal information
          through the App, there is nothing for us to access or delete, and all App data is
          under your control on your device. You can still contact us with any request or
          question.
        </p>

        <h2>9. Security</h2>
        <p>
          App data is stored in the App&rsquo;s private storage, protected by your
          device&rsquo;s operating system. Keep your device locked and up to date to protect it.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We will post any changes on this page and update the date above. If a change
          materially affects how your data is handled, we will also tell you in the App before
          it takes effect.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </>
  );
}
