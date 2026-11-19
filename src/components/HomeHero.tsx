"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { images } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center md:object-contain"
        />
        <div
          className="hero-wordmark-mask pointer-events-none absolute inset-0 z-[1] select-none"
          aria-hidden
          style={{
            WebkitMaskImage: "url(/images/hero-text-mask.png)",
            maskImage: "url(/images/hero-text-mask.png)",
          }}
        >
          <motion.p
            className="absolute inset-x-0 top-[28%] text-center font-display text-[7.8vw] leading-none font-extrabold tracking-[-0.04em] whitespace-nowrap md:top-[26%] md:text-[7.4vw] md:tracking-[-0.03em]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <span className="inline-block origin-bottom scale-y-[1.42] md:scale-y-[1.5]">
              <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:1.1px_white]">PROFI</span>{" "}
              <span className="text-white">AUTÓKOZMETIKA</span>
            </span>
          </motion.p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black via-black/55 to-transparent md:h-[32%] md:via-black/70" />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-4xl px-5 pb-7 text-center sm:pb-12"
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.28, ease }}
      >
        <h1 className="font-display text-[clamp(1.9rem,7.8vw,5.2rem)] font-extrabold leading-[0.94] tracking-[-0.05em] md:text-[clamp(2.6rem,5.4vw,5.2rem)]">
          Több mint tisztaság.
          <br />
          <span className="text-accent">Tökéletes</span> megjelenés.
        </h1>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
          <Button href="#szolgaltatasok" variant="ghost">
            Szolgáltatásaink
          </Button>
          <Button href="/kapcsolat">Időpontot kérek</Button>
        </div>
      </motion.div>
    </section>
  );
}
