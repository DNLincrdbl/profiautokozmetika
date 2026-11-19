import type { Metadata } from "next";
import { ServiceView } from "@/components/content";
import { polishPage } from "@/lib/site";

export const metadata: Metadata = {
  title: polishPage.metaTitle,
  description: polishPage.metaDescription,
};

export default function PolishPage() {
  return <ServiceView page={polishPage} />;
}
