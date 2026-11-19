"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { images } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
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
            className="absolute inset-x-0 top-[26.5%] text-center font-display text-[6.6vw] leading-none font-extrabold tracking-[-0.045em] whitespace-nowrap sm:top-[26%] sm:text-[6.8vw] lg:top-[26%] lg:text-[7.2vw] lg:tracking-[-0.03em]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <span className="inline-block origin-bottom scale-y-[1.55] sm:scale-y-[1.48] lg:scale-y-[1.5]">
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
        <h1 className="font-display text-[clamp(1.75rem,7vw,5.2rem)] font-extrabold leading-[0.94] tracking-[-0.05em] sm:text-[clamp(2.1rem,5.6vw,5.2rem)]">
          Több mint tisztaság.
          <br />
          <span className="text-accent">Tökéletes</span> megjelenés.
        </h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
          <Button href="#szolgaltatasok" variant="ghost" className="h-11 px-5 sm:h-12 sm:px-6">
            Szolgáltatásaink
          </Button>
          <Button href="/kapcsolat" className="h-11 px-5 sm:h-12 sm:px-6">
            Időpontot kérek
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
