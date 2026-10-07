import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use and End User License Agreement for the PingDuck app.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Terms of Use">
        <p>End User License Agreement · Last updated {site.legalUpdated}</p>
      </PageIntro>
      <article className="prose-legal mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) are an agreement between you and{" "}
          {site.company}, a {site.parentCompany} company (&ldquo;we&rdquo;, &ldquo;us&rdquo;), and govern your use of the PingDuck
          mobile app (the &ldquo;App&rdquo;) and any related services. By downloading or using
          the App you agree to these Terms. If you do not agree, do not use the App.
        </p>

        <h2>1. License</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable license to use the
          App on devices you own or control, in line with these Terms and the usage rules of the
          app store you downloaded it from. You may not copy, modify, distribute, sell, rent or
          reverse engineer the App, except where the law expressly allows it.
        </p>

        <h2>2. Acceptable use</h2>
        <p>
          PingDuck is a network discovery and diagnostic tool. <strong>You may only scan,
          probe or send traffic to networks and devices that you own or are authorized to
          test.</strong> You agree not to use the App to:
        </p>
        <ul>
          <li>access, scan or interfere with networks or devices without permission;</li>
          <li>break any law, regulation or network acceptable-use policy;</li>
          <li>disrupt, overload or degrade any network, device or service.</li>
        </ul>
        <p>You are solely responsible for how you use the App and for any traffic it sends at your direction.</p>

        <h2>3. Subscriptions and purchases</h2>
        <p>
          Core features are free. We may offer optional paid subscriptions. If you buy one:
        </p>
        <ul>
          <li>
            Payment is charged to your Apple ID or Google Play account when you confirm the
            purchase, and the price and billing period are shown before you buy.
          </li>
          <li>
            Subscriptions <strong>renew automatically</strong> unless canceled at least 24
            hours before the end of the current period. Your account is charged for renewal
            within 24 hours before the period ends.
          </li>
          <li>
            You can manage or cancel a subscription in your App Store or Google Play account
            settings. Deleting the App does not cancel it.
          </li>
          <li>
            If a free trial is offered, any unused part of it ends when you purchase a
            subscription.
          </li>
          <li>
            Refunds are handled by Apple or Google under their policies.
          </li>
        </ul>

        <h2>4. Your data</h2>
        <p>
          The <Link href="/privacy">Privacy Policy</Link> explains how information is handled.
          Data the App stores is kept on your device, and you are responsible for it and for
          backing it up if you need it.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          The App, including its software, design, name, mascot and logos, is owned by{" "}
          {site.company} and its licensors and is protected by law. The App includes
          open-source components and data (such as the IEEE OUI registry and SIL Open Font
          License fonts) used under their own licenses.
        </p>

        <h2>6. Disclaimer of warranties</h2>
        <p>
          The App is provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>,
          without warranties of any kind, express or implied, including merchantability,
          fitness for a particular purpose and non-infringement. Network scans may be
          incomplete or inaccurate: devices may not respond, and results such as names,
          vendors and open ports may be wrong. The App is not a security guarantee and should
          not be your only means of protecting a network.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.company} will not be liable for any
          indirect, incidental, special, consequential or punitive damages, or for loss of
          data, profits or business, arising from your use of or inability to use the App. Our
          total liability for any claim is limited to the amount you paid us for the App in
          the 12 months before the claim, or US$50, whichever is greater. Some jurisdictions do
          not allow these limits, so they may not apply to you.
        </p>

        <h2>8. Indemnity</h2>
        <p>
          You agree to indemnify {site.company} against claims arising from your misuse of the
          App or your breach of these Terms, including scanning networks without
          authorization.
        </p>

        <h2>9. Termination</h2>
        <p>
          These Terms apply until ended by you or us. Your rights under them end automatically
          if you fail to comply. On termination you must stop using and delete the App.
        </p>

        <h2>10. Apple App Store terms</h2>
        <p>If you downloaded the App from the Apple App Store:</p>
        <ul>
          <li>
            These Terms are between you and {site.company} only, not Apple. {site.company}, not
            Apple, is solely responsible for the App and its content.
          </li>
          <li>
            Apple has no obligation to provide maintenance or support for the App.
          </li>
          <li>
            If the App fails to conform to any applicable warranty, you may notify Apple and
            Apple will refund the purchase price (if any). To the maximum extent permitted by
            law, Apple has no other warranty obligation for the App.
          </li>
          <li>
            {site.company}, not Apple, is responsible for addressing any claims relating to the
            App, including product liability claims, claims that the App fails to meet legal or
            regulatory requirements, and consumer protection or privacy claims.
          </li>
          <li>
            If a third party claims the App infringes its intellectual property,{" "}
            {site.company}, not Apple, is responsible for the investigation, defense, settlement
            and discharge of that claim.
          </li>
          <li>
            You confirm you are not located in a country subject to a U.S. Government embargo
            or designated as a &ldquo;terrorist supporting&rdquo; country, and are not on any
            U.S. Government list of prohibited or restricted parties.
          </li>
          <li>
            Apple and its subsidiaries are third-party beneficiaries of these Terms and may
            enforce them against you.
          </li>
        </ul>
        <p>
          If you downloaded the App from Google Play, the Google Play Terms of Service also
          apply to your use of the store.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of {site.jurisdiction}, United States, without
          regard to conflict-of-law rules, except where the law of your country of residence
          requires otherwise.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may update these Terms. We will post changes on this page and update the date
          above. Continuing to use the App after changes take effect means you accept them.
        </p>

        <h2>13. Contact</h2>
        <p>
          Questions about these Terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </>
  );
}
