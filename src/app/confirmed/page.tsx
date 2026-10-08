import type { Metadata } from "next";
import { ConfirmedStatus } from "./status";

export const metadata: Metadata = {
  title: "Email confirmed",
  description: "Your PingDuck account email is confirmed.",
  robots: { index: false },
};

/** Where the account confirmation email's link lands (Supabase redirects here). */
export default function ConfirmedPage() {
  return <ConfirmedStatus />;
}
