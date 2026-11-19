import type { MetadataRoute } from "next";

const routes = [
  "",
  "/szolgaltatasok/autopolirozas",
  "/szolgaltatasok/belso-autokozmetika",
  "/szolgaltatasok/foliazas-es-keramia",
  "/galeria",
  "/rolunk",
  "/kapcsolat",
  "/adatkezeles",
  "/impresszum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://www.profiautokozmetika.hu${path}`,
    lastModified: "2026-11-19",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
