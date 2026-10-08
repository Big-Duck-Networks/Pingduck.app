import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the PingDuck app handles your data: no sign-up needed, no analytics, your device list stays on your phone.",
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
            <strong>The short version:</strong> Everything the app learns about your network
            stays on your device, and you can delete it at any time. You don&rsquo;t need an
            account: the app uses a random anonymous ID only to count scans for the free plan.
            If you choose to sign in, we also store your email address. There are no
            analytics, no advertising and no tracking, and we never sell your data.
          </p>
        </div>

        <p>
          This policy explains how the PingDuck mobile app for iOS and Android (the
          &ldquo;App&rdquo;), provided by {site.company}, a {site.parentCompany} company (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
          handles information. It also covers this website.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          The App does not include analytics, crash-reporting or advertising SDKs. It never
          sends your device inventory, network names, notes or scan results to us or to
          anyone else. The only information that reaches our servers is:
        </p>
        <ul>
          <li>
            <strong>An anonymous ID.</strong> The first time you scan, the App creates a random
            identifier on our server so the free plan&rsquo;s daily scan limit can be applied.
            It is not linked to your name, email, phone number or advertising ID.
          </li>
          <li>
            <strong>A daily scan count.</strong> Each scan you start records one count against
            that ID for the current day (UTC). We store only the date and the number, nothing
            about the network or devices scanned, and delete counts after about a week.
          </li>
          <li>
            <strong>Your email address, if you sign in.</strong> An account is optional. If you
            create one, we store your email address to identify your account, to confirm it
            with a one-time link and to let you reset your password. Your password is stored
            only as a secure hash, so we cannot read it. We do not send marketing email, and we
            never share or sell your address.
          </li>
          <li>
            <strong>Your plan.</strong> Which plan the account is on (for example Free), so the
            App can apply its limits.
          </li>
          <li>
            <strong>Standard request logs.</strong> Like any online service, our servers log
            requests, including your IP address, the time and basic app and device information,
            for security, abuse prevention and troubleshooting. These logs are kept for a
            limited period.
          </li>
        </ul>
        <p>
          The App keeps you signed in with a session token stored in its private storage on
          your device.
        </p>

        <h2>2. Service providers</h2>
        <p>
          We use a small number of providers to run the service. They process data only on our
          behalf and under their own security and privacy commitments:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong>: database and sign-in (stores the anonymous ID, scan
            counts, your email address and password hash if you create an account, and request
            logs).
          </li>
          <li>
            <strong>Resend</strong>: delivers account emails such as confirmation links,
            password reset codes and a confirmation when you delete your account (receives your email address and the message).
          </li>
        </ul>
        <p>
          These providers may store data in the United States or other countries. We do not
          share your information with anyone else unless the law requires it.
        </p>

        <h2>3. Information stored on your device</h2>
        <p>To work, the App keeps the following on your device only, whether or not you sign in:</p>
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
          This data never leaves your device, and signing in does not upload it. You can delete it with <strong>Account › Clear
          device inventory</strong>, and uninstalling the App removes it entirely. Your
          device&rsquo;s own backup service (such as iCloud or Google backup) may include App
          data if you have enabled it; that is governed by Apple&rsquo;s or Google&rsquo;s
          policies.
        </p>

        <h2>4. Permissions the App uses</h2>
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

        <h2>5. Network traffic the App sends</h2>
        <p>
          When you scan, the App sends standard discovery traffic (ICMP ping, mDNS, SSDP,
          NetBIOS and DNS lookups, and TCP connection attempts for port scans) to devices on
          your local network. Devices on your network may log this traffic like any other.
          Manufacturer names come from a copy of the public IEEE OUI registry bundled with the
          App, so no lookup is made over the internet. Apart from this local traffic, the App
          contacts our servers only for the purposes in section 1.
        </p>

        <h2>6. Future optional features</h2>
        <p>
          We plan optional features such as cloud sync across your devices, the Homelab
          Agent, intrusion alerts and in-app subscriptions. These will be opt-in. Before any of them
          launch we will update this policy to describe exactly what is collected, why, and
          how to delete it. Subscription payments, if offered, are processed by Apple or Google;
          we do not receive your payment card details.
        </p>

        <h2>7. This website</h2>
        <p>
          This website does not use cookies, analytics or advertising trackers. Our hosting
          provider may keep standard server logs (such as IP address, browser type and the page
          requested) for security and reliability, for a limited period.
        </p>

        <h2>8. Children</h2>
        <p>
          The App is not directed to children under 13, and we do not knowingly collect
          personal information from children. If you believe a child has created an account,
          contact us and we will delete it.
        </p>

        <h2>9. Your rights and deleting your data</h2>
        <p>
          Depending on where you live (for example under the GDPR or the California Consumer
          Privacy Act), you may have rights to access, correct, delete or export your personal
          information and to object to its use. We do not sell or share personal information.
        </p>
        <ul>
          <li>
            <strong>Data on your device:</strong> delete it with <strong>Account › Clear device
            inventory</strong>, or uninstall the App.
          </li>
          <li>
            <strong>Your account:</strong> tap <strong>Account › Delete account</strong> in
            the App. This immediately and permanently deletes the account and everything our
            server holds for it, including your email address and scan counts. Signing out does
            not delete your account. If you no longer have the App, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> from the address on the account and
            we will delete it within 30 days.
          </li>
          <li>
            <strong>Anonymous ID:</strong> it is not linked to you, but you can still ask us to
            delete it.
          </li>
        </ul>
        <p>You can contact us with any other request or question.</p>

        <h2>10. Security</h2>
        <p>
          App data is stored in the App&rsquo;s private storage, protected by your
          device&rsquo;s operating system. Keep your device locked and up to date to protect it.
          Data sent to our servers is encrypted in transit, and access controls let each account
          read only its own records.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          We will post any changes on this page and update the date above. If a change
          materially affects how your data is handled, we will also tell you in the App before
          it takes effect.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </>
  );
}
