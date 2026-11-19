import Link from "next/link";
import { contact, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl font-extrabold tracking-[-0.04em]">PROFI AUTÓKOZMETIKA</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
            Professzionális autóápolás és felületvédelem Budapesten.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[13px] font-bold text-accent">Navigáció</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/">Főoldal</Link></li>
            <li><Link className="hover:text-white" href="/#szolgaltatasok">Szolgáltatások</Link></li>
            <li><Link className="hover:text-white" href="/galeria">Galéria</Link></li>
            <li><Link className="hover:text-white" href="/rolunk">Rólunk</Link></li>
            <li><Link className="hover:text-white" href="/kapcsolat">Kapcsolat</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[13px] font-bold text-accent">Szolgáltatások</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.href}>
                <Link className="hover:text-white" href={service.href}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[13px] font-bold text-accent">Kapcsolat</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a className="hover:text-white" href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="break-all hover:text-white" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={contact.maps} target="_blank" rel="noopener noreferrer">
                {contact.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Profi AutóKozmetika. Minden jog fenntartva.</p>
          <p className="flex gap-4">
            <Link className="hover:text-white" href="/adatkezeles">Adatkezelési tájékoztató</Link>
            <Link className="hover:text-white" href="/impresszum">Impresszum</Link>
          </p>
        </div>
        <p className="pb-6 text-center text-[11px] tracking-[0.16em] text-white/40 uppercase">
          Készítette:{" "}
          <a
            href="https://noctra.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white/80 transition-colors duration-500 hover:text-accent"
          >
            NOCTRA
          </a>
        </p>
      </div>
    </footer>
  );
}
