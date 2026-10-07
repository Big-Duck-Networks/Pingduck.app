/** Title block for the FAQ and legal pages. */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-hairline bg-surface-1">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="font-display text-xs font-semibold tracking-[0.25em] text-live">{eyebrow}</p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 text-ink-2">{children}</div>}
      </div>
    </div>
  );
}
