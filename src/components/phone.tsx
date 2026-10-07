import Image from "next/image";

/** A screenshot from the app in a plain device frame. Screens are 1280×2856. */
export function Phone({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2.25rem] border-[6px] border-ink bg-ink shadow-[0_24px_60px_-20px_rgba(17,24,39,0.35)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={2856}
        priority={priority}
        sizes="(max-width: 640px) 70vw, 300px"
        className="block h-auto w-full rounded-[1.75rem]"
      />
    </div>
  );
}
