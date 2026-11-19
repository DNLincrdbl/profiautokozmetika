"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { works } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryGrid() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {works.map((work, index) => (
        <motion.figure
          key={work.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.04, ease }}
          className="mb-4 break-inside-avoid"
        >
          <div className="group overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src={work.image.src}
              alt={work.image.alt}
              width={work.width}
              height={work.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-110"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.figure>
      ))}
    </div>
  );
}
