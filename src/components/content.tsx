import { Reveal } from "./Reveal";
import { Button, Container, Emphasize, Eyebrow, Frame, Photo } from "./ui";
import type { ChapterContent, Photo as PhotoType, ServicePageContent } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imagePosition = "center",
  highlight,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: PhotoType;
  imagePosition?: string;
  highlight?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-40">
      <Container className="relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.15rem,10vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.05em] sm:text-[clamp(2.7rem,6vw,5.4rem)] sm:leading-[0.94]">
            <Emphasize text={title} word={highlight} />
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">{lead}</p>
          ) : null}
          {children ? <div className="mt-7 sm:mt-8">{children}</div> : null}
        </Reveal>
        {image ? (
          <Reveal delay={0.12}>
          <Frame className="mt-8 aspect-[4/3] sm:mt-12 sm:aspect-[16/7]">
            <Photo
              src={image.src}
              alt={image.alt}
              position={imagePosition}
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
          </Frame>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

export function Chapter({
  chapter,
  band = false,
}: {
  chapter: ChapterContent;
  band?: boolean;
}) {
  return (
    <section
      id={chapter.id}
      className={`scroll-mt-24 py-16 sm:py-24 ${band ? "bg-white/[0.025]" : ""}`}
    >
      <Container>
        <div
          className={
            chapter.image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              : "mx-auto max-w-3xl"
          }
        >
          <Reveal className={chapter.flip ? "lg:order-2" : ""}>
            <Eyebrow>{chapter.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
              {chapter.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {chapter.note ? (
              <p className="mt-6 text-sm font-semibold leading-7 text-white/80">{chapter.note}</p>
            ) : null}
          </Reveal>
          {chapter.image ? (
            <Reveal delay={0.1} className={chapter.flip ? "lg:order-1" : ""}>
            <Frame className="aspect-[4/3] sm:aspect-[16/11]">
              <Photo
                src={chapter.image.src}
                alt={chapter.image.alt}
                position={chapter.imagePosition}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Frame>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  label = "Ajánlatot kérek",
  href = "/kapcsolat",
  highlight,
}: {
  title: string;
  text?: string;
  label?: string;
  href?: string;
  highlight?: string;
}) {
  return (
    <section className="px-5 pt-4 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-12 sm:rounded-[32px] sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <h2 className="max-w-3xl font-display text-[clamp(2.2rem,4.6vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">
          <Emphasize text={title} word={highlight} />
        </h2>
        {text ? <p className="mt-5 max-w-xl leading-8 text-muted">{text}</p> : null}
        <div className="mt-8">
          <Button href={href}>{label}</Button>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export function ServiceView({ page }: { page: ServicePageContent }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.lead}
        image={page.heroImage}
        imagePosition={page.heroPosition}
        highlight={page.highlight}
      >
        {page.ctaLabel ? <Button href="/kapcsolat">{page.ctaLabel}</Button> : null}
      </PageHero>
      {page.chapters.map((chapter, index) => (
        <Chapter key={chapter.index} chapter={chapter} band={index % 2 === 1} />
      ))}
      <CtaBand title={page.cta.title} text={page.cta.text} highlight={page.cta.highlight} />
    </>
  );
}

export function LegalLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-32 pb-24 sm:pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">
            {title}
          </h1>
          <div className="legal-copy mt-10 text-[15px] leading-8 text-muted sm:text-base">
            {children}
          </div>
        </div>
      </Container>
    </article>
  );
}
