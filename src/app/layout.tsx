import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WheelIntro } from "@/components/WheelIntro";
import { contact } from "@/lib/site";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Switzer-Extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const description =
  "Professzionális autókozmetika Budapesten: polírozás, belső tisztítás, karosszériavédő fólia, ablakfóliázás és kerámiabevonat. Külső Váci út 51.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.profiautokozmetika.hu"),
  title: {
    default: "Profi Autókozmetika | Professzionális autóápolás Budapest",
    template: "%s | Profi Autókozmetika",
  },
  description,
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Profi Autókozmetika",
    title: "Profi Autókozmetika | Professzionális autóápolás Budapest",
    description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 2400,
        height: 1200,
        alt: "Fekete sportautó oldalnézetben, sötét stúdióban",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Profi Autókozmetika",
  url: "https://www.profiautokozmetika.hu",
  image: "https://www.profiautokozmetika.hu/images/hero.jpg",
  telephone: "+36704332901",
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "külső Váci út 51.",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  areaServed: "Budapest",
  description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${switzer.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black font-sans text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: "history.scrollRestoration='manual';if(!location.hash)window.scrollTo(0,0);",
          }}
        />
        <WheelIntro />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
        >
          Ugrás a tartalomhoz
        </a>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main id="tartalom" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
