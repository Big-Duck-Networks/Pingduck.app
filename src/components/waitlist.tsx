"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

/** Email sign-up for the launch announcement, shown instead of the store badges before launch. */
export function Waitlist() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${site.supabaseUrl}/rest/v1/rpc/join_waitlist`, {
        method: "POST",
        headers: { apikey: site.supabasePublishableKey, "Content-Type": "application/json" },
        body: JSON.stringify({ p_email: email, p_source: "website" }),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
      const body = await res.json().catch(() => ({}));
      setError(
        body.code === "22023"
          ? "That doesn’t look like an email address."
          : "We couldn’t add you just now. Please try again in a few minutes.",
      );
    } catch {
      setError("We couldn’t reach the server. Check your connection and try again.");
    }
    setStatus("error");
  }

  if (status === "done") {
    return (
      <div className="max-w-md border border-live-border bg-live-fill px-4 py-3 text-ink">
        <strong>You&rsquo;re on the list.</strong> We&rsquo;ll email you once, when PingDuck is
        ready to download.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <label htmlFor={id} className="font-display text-sm font-semibold tracking-wider">
        GET AN EMAIL AT LAUNCH
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id={id}
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 border border-ink bg-canvas px-4 py-2.5 text-base text-ink placeholder:text-ink-muted focus:outline-2 focus:outline-offset-2 focus:outline-route"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-display border border-ink bg-ink px-5 py-2.5 text-sm font-semibold tracking-wider text-white shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-60"
        >
          {status === "sending" ? "JOINING…" : "JOIN THE WAITLIST"}
        </button>
      </div>
      <p className="mt-2 text-sm text-ink-muted" aria-live="polite">
        {status === "error" ? (
          <span className="text-critical">{error}</span>
        ) : (
          <>
            One email when it launches, nothing else.{" "}
            <Link href="/privacy#waitlist" className="underline underline-offset-4">
              Privacy
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
