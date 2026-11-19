import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import { images } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const wide = service.image.src === images.hero.src;

  return (
    <Link
      href={service.href}
      className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-black transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-white/30"
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        width={wide ? 2400 : 2000}
        height={wide ? 1200 : 1116}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="photo h-auto w-full"
        style={{ width: "100%", height: "auto" }}
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pt-16 pb-5 sm:px-6 sm:pb-6">
        <h3 className="font-display text-[1.65rem] font-extrabold tracking-[-0.04em] transition duration-500 group-hover:text-accent">
          {service.title}
        </h3>
      </span>
    </Link>
  );
}
