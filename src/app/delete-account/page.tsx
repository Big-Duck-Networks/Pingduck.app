import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description: `How to delete your ${site.name} account, and what is deleted or kept.`,
};

/** Account deletion instructions; linked from the Google Play listing. */
export default function DeleteAccountPage() {
  return (
    <>
      <PageIntro eyebrow="ACCOUNT" title={`Delete your ${site.name} account`}>
        <p>
          {site.name} is made by {site.company}, a {site.parentCompany} company. Deleting your account
          is permanent and takes effect immediately.
        </p>
      </PageIntro>
      <article className="prose-legal mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-8 border border-live-border bg-live-fill p-5">
          <p className="!mb-2 !text-ink">
            <strong>In the app (fastest):</strong>
          </p>
          <ol className="list-decimal pl-5 text-ink">
            <li>Open {site.name} and go to the <strong>Account</strong> tab.</li>
            <li>Make sure you are signed in to the account you want to delete.</li>
            <li>
              Tap <strong>Delete account</strong>, then <strong>Delete</strong> to confirm.
            </li>
          </ol>
          <p className="!mt-3 !mb-0 !text-ink">
            Your account is deleted right away, and we send a confirmation to its email address.
          </p>
        </div>

        <h2>Without the app</h2>
        <p>
          Email <a href={`mailto:${site.email}?subject=Delete%20my%20account`}>{site.email}</a> from
          the address you signed up with and ask us to delete your account. We confirm it is your
          address, delete the account within 30 days, and reply when it is done.
        </p>

        <h2>What is deleted</h2>
        <p>Immediately and permanently, from our servers:</p>
        <ul>
          <li>Your account, email address and password (stored only as a secure hash).</li>
          <li>Your plan and its daily scan counts.</li>
          <li>
            Anything linked to the account: saved networks, paired Homelab Agents, devices and
            their event history, and notification tokens.
          </li>
        </ul>

        <h2>What is kept, and for how long</h2>
        <ul>
          <li>
            <strong>Data on your phone.</strong> Your device inventory, names and notes are stored
            only on your phone and were never uploaded. They stay until you tap{" "}
            <strong>Account › Clear device inventory</strong> or uninstall the app.
          </li>
          <li>
            <strong>Logs and backups.</strong> Our service providers&rsquo; request logs and
            database backups may still contain your account for up to 30 days, after which they are
            deleted. We do not restore deleted accounts from them.
          </li>
          <li>
            <strong>Subscriptions.</strong> Apple and Google bill subscriptions, not us. Deleting
            your account does not cancel one: cancel it in the App Store or Google Play. They keep
            their own purchase records under their policies.
          </li>
        </ul>

        <h2>Not signed in?</h2>
        <p>
          If you never created an account, there is nothing to delete beyond a random anonymous ID
          the app uses to count scans, which is not linked to you. Uninstalling the app removes
          everything on your phone. You can still email us to have the anonymous ID deleted.
        </p>

        <p>
          More detail is in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </article>
    </>
  );
}
