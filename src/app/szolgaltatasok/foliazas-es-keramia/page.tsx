import type { Metadata } from "next";
import { ServiceView } from "@/components/content";
import { filmPage } from "@/lib/site";

export const metadata: Metadata = {
  title: filmPage.metaTitle,
  description: filmPage.metaDescription,
};

export default function FilmPage() {
  return <ServiceView page={filmPage} />;
}
