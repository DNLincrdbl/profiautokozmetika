"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { contact, nav, services } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const ease = [0.22, 1, 0.36, 1] as const;

const linkClass = (active: boolean) =>
  `text-sm font-semibold transition-colors duration-500 ${active ? "text-white" : "text-white/65 hover:text-white"}`;

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [dropPath, setDropPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const servicesOpen = dropPath === pathname;
  const servicesActive = pathname.startsWith("/szolgaltatasok");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        setDropPath(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="pointer-events-auto relative mx-auto max-w-[92rem]">
        <motion.div
          className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/10 bg-[#0c0c0c] py-2 pr-2 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:pr-2.5 sm:pl-4"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="col-start-1">
            <Logo />
          </div>

          <nav className="col-start-2 hidden items-center justify-center gap-7 lg:flex" aria-label="Főmenü">
            <Link href="/" className={linkClass(isCurrent(pathname, "/"))}>
              Főoldal
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropPath(pathname)}
              onMouseLeave={() => setDropPath(null)}
            >
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-1.5 ${linkClass(servicesActive || servicesOpen)}`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setDropPath(servicesOpen ? null : pathname)}
              >
                Szolgáltatások
                <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-500 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden>
                  <path d="M2 4.2 6 8l4-3.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.45, ease }}
                    className="absolute top-full left-1/2 z-20 w-64 -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-3xl border border-white/10 bg-[#141414] p-2 shadow-2xl">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block rounded-2xl px-3 py-2.5 text-sm font-semibold text-white/75 transition-colors duration-500 hover:bg-white/8 hover:text-white"
                          onClick={() => setDropPath(null)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {nav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(isCurrent(pathname, item.href))}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="col-start-3 flex items-center justify-end gap-2">
            <Link
              href="/kapcsolat"
              className="hidden h-9 items-center rounded-full bg-white px-4 text-sm font-bold text-black transition-colors duration-500 hover:bg-accent sm:inline-flex"
            >
              Időpontot kérek
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 transition-colors duration-500 hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              onClick={() => setMenuPath(open ? null : pathname)}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-px w-4 bg-white transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-px w-4 bg-white transition-opacity duration-500 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-px w-4 bg-white transition-all duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
              className="mt-2 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-[28px] border border-white/10 bg-[#101010] p-5 shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col" aria-label="Mobil menü">
                <Link href="/" className="border-b border-white/10 py-3 font-display text-2xl font-extrabold sm:text-3xl" onClick={() => setMenuPath(null)}>
                  Főoldal
                </Link>
                {nav.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/10 py-3 font-display text-2xl font-extrabold sm:text-3xl"
                    onClick={() => setMenuPath(null)}
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-5 text-[13px] font-bold tracking-[0.12em] text-accent uppercase">Szolgáltatások</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="border-b border-white/10 py-3 text-lg font-bold text-white/90"
                    onClick={() => setMenuPath(null)}
                  >
                    {service.title}
                  </Link>
                ))}
                <a href={contact.phoneHref} className="mt-5 font-display text-2xl font-extrabold">
                  {contact.phoneDisplay}
                </a>
                <a href={`mailto:${contact.email}`} className="mt-1 text-sm text-white/60">
                  {contact.email}
                </a>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
