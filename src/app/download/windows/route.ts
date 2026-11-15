import { currentWindowsRelease } from "@/lib/releases";
import { site } from "@/lib/site";

/**
 * pingduck.app/download/windows: a stable link to the Windows installer, for
 * the app's install steps, emails and anywhere a link must not change.
 * Redirects to the current release's direct GitHub link from Supabase. With
 * no release there (or Supabase unreachable) it goes to /agent, where the
 * download button is disabled, the same rule as the button.
 */
export async function GET() {
  const { release } = await currentWindowsRelease();
  return Response.redirect(release?.url ?? new URL("/agent", site.url).toString(), 307);
}
