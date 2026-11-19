import Image from "next/image";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/content";
import { Container, Eyebrow, Frame, Photo, Button } from "@/components/ui";
import { images, services, whyPoints, works } from "@/lib/site";

const collage = [works[0], works[2], works[5], works[9]];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section id="bemutatkozas" className="py-24 sm:py-32">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow>A részletek számítanak</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
                Az autóápolás nálunk <span className="text-accent">precíz</span> munka.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pt-2 lg:pl-12" delay={0.1}>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Egy autó megjelenését nem csupán a tisztaság határozza meg. A fényezés állapota, a
                felületek ragyogása és az utastér ápoltsága együtt adják azt az összhatást, amely
                igazán különlegessé teszi járművét.
              </p>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                A Profi AutóKozmetikánál a professzionális autóápolás különböző területeivel
                foglalkozunk. Legyen szó a fényezés megújításáról, a belső tér alapos tisztításáról
                vagy a karosszéria hosszú távú védelméről, célunk minden esetben az igényes
                végeredmény.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="szolgaltatasok" className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <Eyebrow>Amivel foglalkozunk</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,4.8vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
              Minden részletében <span className="text-accent">megújulhat</span> autója.
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-6">
            {services.map((service, index) => (
              <Reveal
                key={service.href}
                delay={index * 0.06}
                className={
                  index < 2
                    ? "md:col-span-1 xl:col-span-3"
                    : index === 4
                      ? "md:col-span-2 xl:col-span-2"
                      : "md:col-span-1 xl:col-span-2"
                }
              >
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] sm:min-h-[640px] sm:rounded-[32px]">
              <Photo
                src={images.felni.src}
                alt={images.felni.alt}
                sizes="100vw"
                position="center 45%"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20 sm:bg-gradient-to-r sm:from-black sm:via-black/80 sm:to-black/25" />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-6 sm:min-h-[640px] sm:p-12 lg:p-16">
                <div className="max-w-xl">
                  <Eyebrow>A minőség a részletekben rejlik</Eyebrow>
                  <h2 className="mt-4 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">
                    Nem csak a végeredmény számít. Az oda vezető <span className="text-accent">munka</span> is.
                  </h2>
                  <p className="mt-5 leading-8 text-white/75">
                    Az autóápolás minden területe odafigyelést és precizitást igényel. Számunkra
                    fontos, hogy az egyes felületeknek megfelelő megoldást alkalmazzuk, és az
                    elvégzett munka valóban látható eredményt hozzon.
                  </p>
                </div>
                <ul className="mt-12 grid gap-3 sm:grid-cols-2">
                  {whyPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-white/15 bg-black/45 p-5 backdrop-blur-md"
                    >
                      <p className="text-base font-bold leading-6">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="referenciak" className="pb-8 sm:pb-12">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Munkáink</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
                A különbség, amit <span className="text-accent">látni</span> lehet.
              </h2>
              <p className="mt-5 max-w-md leading-8 text-muted">
                Minden autón más és más részleteken van mit javítani. Tekintse meg munkáinkat, és
                fedezze fel, milyen eredményt lehet elérni a megfelelő autóápolási eljárásokkal.
              </p>
              <div className="mt-8">
                <Button href="/galeria">Teljes galéria megtekintése</Button>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
              <div className="space-y-3 sm:space-y-4">
                {collage.slice(0, 2).map((item) => (
                  <Frame key={item.id}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="h-auto w-full"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Frame>
                ))}
              </div>
              <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12">
                {collage.slice(2).map((item) => (
                  <Frame key={item.id}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="h-auto w-full"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Frame>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        highlight="megérdemelt"
        title="Adja meg autójának a megérdemelt törődést."
        text="Fényezésmegújítás, belső tisztítás vagy hosszú távú felületvédelem? Vegye fel velünk a kapcsolatot, és egyeztessünk az autójához leginkább megfelelő megoldásról."
      />
    </>
  );
}
