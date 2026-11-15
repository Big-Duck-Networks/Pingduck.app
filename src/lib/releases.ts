import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

/** A released build, as `current_app_release` in Supabase returns it. */
export type AppRelease = {
  platform: string;
  version: string;
  build: number;
  tag: string;
  /** Direct GitHub download link for the installer. */
  url: string;
  sha256: string;
  size: number;
  notes: string;
  minimumBuild: number;
  signed: boolean;
  publishedAt: string;
};

/**
 * The current Windows release. release-windows.yml in the pingduck repo
 * records each one in Supabase (`record_app_release`) once its GitHub release
 * exists; withdrawing one there makes the previous one current again.
 *
 * `release: null` disables the download: with `ok: true` nothing is released
 * yet; with `ok: false` Supabase couldn't be reached. Cached for about a
 * minute, so a new release shows up within a minute or two.
 */
export async function currentWindowsRelease(): Promise<{ ok: boolean; release: AppRelease | null }> {
  "use cache";
  cacheLife("minutes");
  try {
    const res = await fetch(`${site.supabaseUrl}/rest/v1/rpc/current_app_release`, {
      method: "POST",
      headers: { apikey: site.supabasePublishableKey, "Content-Type": "application/json" },
      body: JSON.stringify({ p_platform: "windows" }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { ok: false, release: null };
    const release = (await res.json()) as AppRelease | null;
    // Only ever link to this repo's releases, whatever the row says.
    if (release && !release.url.startsWith(site.windowsReleasePrefix)) return { ok: false, release: null };
    return { ok: true, release };
  } catch {
    return { ok: false, release: null };
  }
}

/** "14.3 MB" */
export function formatSize(bytes: number): string {
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}
