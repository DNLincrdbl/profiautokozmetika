import type { Metadata } from "next";
import { ServiceView } from "@/components/content";
import { interiorPage } from "@/lib/site";

export const metadata: Metadata = {
  title: interiorPage.metaTitle,
  description: interiorPage.metaDescription,
};

export default function InteriorPage() {
  return <ServiceView page={interiorPage} />;
}
