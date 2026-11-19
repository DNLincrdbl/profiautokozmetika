import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/content";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Galéria",
  description:
    "Autópolírozás, belső tisztítás, fóliázás és kerámiabevonat: tekintse meg a Profi Autókozmetika munkáit.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Valódi munkák"
        title="A minőség látható."
        highlight="látható"
        lead="Tekintse meg autóápolási munkáinkat, és fedezze fel a különböző kezelések eredményeit."
      />
      <section className="pt-8 pb-8">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <CtaBand
        title="Hasonló eredményt szeretne?"
        highlight="eredményt"
        text="Kérjen személyre szabott ajánlatot autójához!"
      />
    </>
  );
}
