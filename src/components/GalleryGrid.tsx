"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryFilters, works, type GalleryCategory } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("osszes");
  const visible = useMemo(
    () => (filter === "osszes" ? works : works.filter((work) => work.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Galéria szűrői">
        {galleryFilters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
              className={`h-10 shrink-0 cursor-pointer rounded-full px-4 text-sm font-bold transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active
                  ? "bg-white text-black"
                  : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((work) => (
            <motion.figure
              layout
              key={work.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.55, ease }}
              className="mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src={work.image.src}
                  alt={work.image.alt}
                  width={work.width}
                  height={work.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-110"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pt-14 pb-4 font-display text-xl font-extrabold tracking-[-0.03em]">
                  {work.title}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
