"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

function ServiceIcon({ href }: { href: string }) {
  const icon = "h-[18px] w-[18px] shrink-0 text-accent";
  if (href.includes("autopolirozas")) {
    return (
      <svg viewBox="0 0 18 18" className={icon} fill="none" aria-hidden>
        <circle cx="9" cy="9" r="4.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 2.2v1.6M9 14.2v1.6M2.2 9h1.6M14.2 9h1.6M4.1 4.1l1.1 1.1M12.8 12.8l1.1 1.1M4.1 13.9l1.1-1.1M12.8 5.2l1.1-1.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (href.includes("belso")) {
    return (
      <svg viewBox="0 0 18 18" className={icon} fill="none" aria-hidden>
        <path d="M6.6 2.8h4.8c.6 0 1 .4 1 1V9.6H5.6V3.8c0-.6.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4.4 9.6h9.2c.8 0 1.4.6 1.4 1.4v2.4c0 .7-.6 1.3-1.3 1.3H4.3A1.3 1.3 0 0 1 3 13.4v-2.4c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (href.includes("#karosszeria")) {
    return (
      <svg viewBox="0 0 18 18" className={icon} fill="none" aria-hidden>
        <path d="M9 2.4 3.6 4.5v4.2c0 3.4 2.2 5.7 5.4 6.9 3.2-1.2 5.4-3.5 5.4-6.9V4.5L9 2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (href.includes("#ablak")) {
    return (
      <svg viewBox="0 0 18 18" className={icon} fill="none" aria-hidden>
        <rect x="3" y="4.2" width="12" height="9.6" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8.6h12M9 4.2v9.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 18 18" className={icon} fill="none" aria-hidden>
      <path d="M9 2.6s-3.6 4.2-3.6 7.1a3.6 3.6 0 1 0 7.2 0c0-2.9-3.6-7.1-3.6-7.1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [dropPath, setDropPath] = useState<string | null>(null);
  const [dropBox, setDropBox] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number>(0);
  const open = menuPath === pathname;
  const servicesOpen = dropPath === pathname;
  const servicesActive = pathname.startsWith("/szolgaltatasok");

  const openServices = () => {
    window.clearTimeout(closeTimer.current);
    setDropPath(pathname);
  };
  const closeServicesSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropPath(null), 140);
  };

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!servicesOpen || !servicesBtnRef.current) return;
    const place = () => {
      const rect = servicesBtnRef.current?.getBoundingClientRect();
      if (!rect) return;
      setDropBox({ top: rect.bottom, left: rect.left + rect.width / 2 });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [servicesOpen]);

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
      <div
        className={`pointer-events-auto relative mx-auto w-full ${open ? "max-w-md lg:max-w-6xl" : "max-w-6xl"}`}
      >
        <div className={`nav-glass ${open ? "overflow-hidden rounded-[28px] lg:overflow-visible lg:rounded-full" : "overflow-visible rounded-full"}`}>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center py-1.5 pr-2 pl-4 sm:py-2 sm:pr-3 sm:pl-6 lg:px-10 lg:py-2">
            <div className="col-start-1 flex justify-start">
              <Logo />
            </div>

            <nav className="col-start-2 hidden items-center justify-center gap-7 lg:flex" aria-label="Főmenü">
              <Link href="/" className={linkClass(isCurrent(pathname, "/"))}>
                Főoldal
              </Link>

              <div className="relative" onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
                <button
                  ref={servicesBtnRef}
                  type="button"
                  className={`flex cursor-pointer items-center gap-1.5 ${linkClass(servicesActive || servicesOpen)}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => (servicesOpen ? setDropPath(null) : openServices())}
                >
                  Szolgáltatások
                  <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-500 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden>
                    <path d="M2 4.2 6 8l4-3.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
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
                className="hidden h-9 items-center rounded-full bg-white px-4 text-sm font-bold text-black transition-colors duration-500 hover:bg-accent lg:inline-flex"
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
          </div>

          <AnimatePresence>
            {open ? (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="lg:hidden"
                aria-label="Mobil menü"
              >
                <div className="border-t border-white/10">
                  <div className="max-h-[min(58svh,30rem)] overflow-y-auto px-5 pt-1">
                    <Link href="/" className="block border-b border-white/10 py-2 text-lg font-extrabold" onClick={() => setMenuPath(null)}>
                      Főoldal
                    </Link>
                    {nav.slice(1).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block border-b border-white/10 py-2 text-lg font-extrabold"
                        onClick={() => setMenuPath(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <p className="mt-3 text-[11px] font-bold tracking-[0.12em] text-accent uppercase">Szolgáltatások</p>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 border-b border-white/10 py-2 text-[15px] font-bold text-white/90"
                        onClick={() => setMenuPath(null)}
                      >
                        <ServiceIcon href={service.href} />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                  <div className="px-5 pt-3 pb-4">
                    <Link
                      href="/kapcsolat"
                      className="flex h-11 items-center justify-center rounded-full bg-white text-sm font-bold text-black"
                      onClick={() => setMenuPath(null)}
                    >
                      Időpontot kérek
                    </Link>
                    <a href={contact.phoneHref} className="mt-3 block text-base font-extrabold">
                      {contact.phoneDisplay}
                    </a>
                    <a href={`mailto:${contact.email}`} className="mt-0.5 block text-sm break-all text-white/60">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      {mounted && servicesOpen
        ? createPortal(
            <div
              className="pointer-events-auto fixed z-[60] w-72 -translate-x-1/2 pt-2"
              style={{ top: dropBox.top, left: dropBox.left }}
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <div className="rounded-3xl border border-white/10 bg-black p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(0,0,0,0.55)]">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-white/80 transition-colors duration-500 hover:bg-white/[0.08] hover:text-white"
                    onClick={() => setDropPath(null)}
                  >
                    <ServiceIcon href={service.href} />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
