"use client";

import { useSyncExternalStore } from "react";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

// Android Chrome blocks bare custom schemes from some in-app browsers; an
// intent URL opens the app, or its Play Store page if it isn't installed.
const androidLink = "intent://auth-callback#Intent;scheme=pingduck;package=app.webcap.pingduck;end";
const appLink = "pingduck://auth-callback";

const noop = () => () => {};

type State = { failed: boolean; reason?: string; platform: "android" | "ios" | "desktop" };

/** Supabase reports a bad or expired link as error params in the hash or query. */
function parse(query: string, ua: string): State {
  const params = new URLSearchParams(query);
  return {
    failed: params.has("error") || params.has("error_code"),
    reason: params.get("error_description")?.replace(/\+/g, " ") ?? undefined,
    platform: /android/i.test(ua) ? "android" : /iphone|ipad|ipod/i.test(ua) ? "ios" : "desktop",
  };
}

export function ConfirmedStatus() {
  // Browser-only values; null while server rendering.
  const query = useSyncExternalStore(noop, () => window.location.hash.slice(1) || window.location.search, () => null);
  const ua = useSyncExternalStore(noop, () => navigator.userAgent, () => null);
  const state = query === null || ua === null ? null : parse(query, ua);

  if (state?.failed) {
    return (
      <PageIntro eyebrow="ACCOUNT" title="This link didn’t work">
        <p>
          {state.reason ?? "The link is invalid or has expired."} Links work once and expire after an
          hour. In PingDuck, tap <strong>Resend link</strong> to get a new one.
        </p>
        <p className="mt-4">
          Still stuck? Email{" "}
          <a href={`mailto:${site.email}`} className="text-route underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </PageIntro>
    );
  }

  return (
    <PageIntro eyebrow="ACCOUNT" title="Email confirmed">
      <p>
        Your PingDuck account is ready. Go back to the app to finish. It picks up the confirmation on its
        own.
      </p>
      {state && state.platform !== "desktop" ? (
        <a
          href={state.platform === "android" ? androidLink : appLink}
          className="font-display mt-8 inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-sm font-semibold tracking-wider text-white shadow-hard transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          OPEN PINGDUCK
        </a>
      ) : (
        state && <p className="mt-4">Open PingDuck on your phone. You can close this tab.</p>
      )}
    </PageIntro>
  );
}
