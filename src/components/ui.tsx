import Image from "next/image";
import Link from "next/link";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <p className={`text-[13px] font-bold uppercase tracking-[0.12em] text-accent ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

export function Emphasize({ text, word }: { text: string; word?: string }) {
  if (!word) return text;
  const index = text.indexOf(word);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="text-accent">{word}</span>
      {text.slice(index + word.length)}
    </>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-white text-black hover:bg-accent"
      : "border border-white/20 text-white hover:border-white/70 hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Photo({
  src,
  alt,
  position = "center",
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover photo ${className}`}
      style={{ objectPosition: position }}
    />
  );
}

export function Frame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-neutral-950 ${className}`}>
      {children}
    </div>
  );
}
