import type { Metadata } from "next";
import { PageHero } from "@/components/content";
import { Reveal } from "@/components/Reveal";
import { Button, Container, Frame, Photo } from "@/components/ui";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "A Profi AutóKozmetika professzionális autóápolást és felületvédelmet kínál Budapesten, a részletekre figyelve.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Profi Autókozmetika"
        title="Szenvedélyünk az autók kifogástalan megjelenése."
        highlight="kifogástalan"
        lead="A Profi AutóKozmetika célja, hogy professzionális autóápolási és felületvédelmi megoldásokat kínáljon mindazok számára, akik fontosnak tartják járművük állapotának és megjelenésének megőrzését."
      />
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className="space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                Tevékenységünk középpontjában a fényezés megújítása, a belső felületek tisztítása,
                valamint a különböző fóliázási és kerámiabevonati megoldások állnak.
              </p>
              <p>
                Hiszünk abban, hogy a részletek határozzák meg az összképet. Ezért minden autónál
                fontos a megfelelő szolgáltatás kiválasztása és a felületek állapotának
                figyelembevétele.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
            <Frame className="aspect-[4/3] sm:aspect-[16/11]">
              <Photo
                src={images.kormany.src}
                alt={images.kormany.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Frame>
            </Reveal>
          </div>

          <Reveal>
          <div className="mt-12 grid gap-4 sm:mt-24 lg:grid-cols-3">
            <Frame className="aspect-[16/11] lg:col-span-2">
              <Photo
                src={images.polirozas.src}
                alt={images.polirozas.alt}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Frame>
            <Frame className="aspect-[16/11] lg:aspect-auto lg:h-full">
              <Photo
                src={images.tetokarpit.src}
                alt={images.tetokarpit.alt}
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </Frame>
          </div>
          </Reveal>

          <Reveal>
          <p className="mt-12 max-w-4xl font-display text-[clamp(1.85rem,8vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.045em] sm:mt-24">
            Profi autóápolás.
            <br />
            Igényes megjelenés.
            <br />
            Tudatos <span className="text-accent">felületvédelem</span>.
          </p>
          <div className="mt-8">
            <Button href="/kapcsolat">Időpontot kérek</Button>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
