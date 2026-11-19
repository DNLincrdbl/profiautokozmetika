import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/content";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A Profi Autókozmetika impresszuma és elérhetőségei.",
};

export default function ImpressumPage() {
  return (
    <LegalLayout eyebrow="Jogi információk" title="Impresszum">
      <h2>A szolgáltató</h2>
      <p>Profi AutóKozmetika</p>
      <p>{contact.address}</p>
      <p>
        Telefon: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
      </p>
      <p>
        E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        Web:{" "}
        <a href="https://www.profiautokozmetika.hu">www.profiautokozmetika.hu</a>
      </p>

      <h2>Tevékenység</h2>
      <p>
        Professzionális autóápolás és felületvédelem: autópolírozás, fényezésrestaurálás, belső
        tisztítás, karosszériavédő fóliázás, ablakfóliázás és kerámiabevonat.
      </p>

      <h2>A weboldalon közölt információk</h2>
      <p>
        A szolgáltatások leírása tájékoztató jellegű. A polírozás, a fóliázás és a kerámiabevonat
        ténylegesen elérhető eredménye az autó állapotától és a választott megoldástól függ. Az
        ajánlat egyedi egyeztetés alapján készül.
      </p>
      <p>
        A cégjegyzékszám és az adószám a vállalkozás hivatalos okirataiban szerepel. Kérésre a
        kapcsolatfelvétel során megadjuk.
      </p>

      <h2>Szerzői jog</h2>
      <p>
        A weboldal szövege és arculata a Profi AutóKozmetika hozzájárulása nélkül nem másolható. A
        fényképek a szolgáltatások illusztrációi.
      </p>

      <p>
        Az adatkezelés részleteit az <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>{" "}
        tartalmazza.
      </p>
    </LegalLayout>
  );
}
