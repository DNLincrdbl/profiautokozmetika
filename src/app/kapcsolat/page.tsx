import type { Metadata } from "next";
import { PageHero } from "@/components/content";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { Container } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Kérjen ajánlatot polírozásra, belső tisztításra, fóliázásra vagy kerámiabevonatra. Profi Autókozmetika, Budapest, külső Váci út 51.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Vegye fel velünk a kapcsolatot"
        title="Kezdjük autója megújításával."
        highlight="megújításával"
        lead="Legyen szó polírozásról, belső tisztításról, fóliázásról vagy kerámiabevonatról, keressen minket bizalommal!"
      />
      <section className="pt-6 pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="max-w-md leading-8 text-muted">
                Szívesen egyeztetünk az autó állapotáról és a megfelelő szolgáltatási
                lehetőségekről.
              </p>
              <p className="mt-8 text-[13px] font-bold text-accent">Elérhetőségeink</p>
              <div className="mt-2 divide-y divide-white/10 border-y border-white/10">
                <a href={contact.phoneHref} className="block py-5">
                  <span className="text-[13px] font-bold text-white/45">Telefon</span>
                  <span className="mt-1 block font-display text-2xl font-extrabold">{contact.phoneDisplay}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="block py-5">
                  <span className="text-[13px] font-bold text-white/45">E-mail</span>
                  <span className="mt-1 block font-display text-xl font-extrabold break-all sm:text-2xl">
                    {contact.email}
                  </span>
                </a>
                <a
                  href={contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-5"
                >
                  <span className="text-[13px] font-bold text-white/45">Cím</span>
                  <span className="mt-1 block font-display text-2xl font-extrabold">{contact.address}</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <QuoteForm />
            </Reveal>
          </div>
          <Reveal>
          <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 sm:mt-12 sm:rounded-[32px]">
            <iframe
              title="Profi Autókozmetika a térképen: Budapest, külső Váci út 51."
              src="https://www.google.com/maps?q=Budapest%2C%20k%C3%BCls%C5%91%20V%C3%A1ci%20%C3%BAt%2051.&z=16&hl=hu&output=embed"
              className="h-[280px] w-full sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
