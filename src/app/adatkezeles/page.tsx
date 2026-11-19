import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/content";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: "A Profi Autókozmetika adatkezelési tájékoztatója az ajánlatkérés és a kapcsolatfelvétel során kezelt adatokról.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Adatvédelem" title="Adatkezelési tájékoztató">
      <h2>Adatkezelő</h2>
      <p>
        Az adatkezelő a Profi AutóKozmetika ({contact.address}). Elérhetőség:{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>,{" "}
        <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.
      </p>

      <h2>Milyen adatokat kezelünk</h2>
      <p>Ajánlatkéréskor és kapcsolatfelvételkor az alábbi adatokat kezeljük, ha megadja őket:</p>
      <ul>
        <li>név</li>
        <li>telefonszám</li>
        <li>e-mail cím</li>
        <li>gépjármű típusa</li>
        <li>választott szolgáltatás</li>
        <li>az üzenet tartalma</li>
      </ul>

      <h2>Az adatkezelés célja és jogalapja</h2>
      <p>
        Az adatokat azért kezeljük, hogy a megkeresésére válaszoljunk, és az autó állapotához
        illeszkedő ajánlatot tudjunk adni. A jogalap a GDPR 6. cikk (1) bekezdés b) pontja: az
        Ön kérésére megtett, szerződéskötést megelőző lépések.
      </p>

      <h2>Hogyan jutnak el hozzánk az adatok</h2>
      <p>
        Az ajánlatkérő űrlap nem tárolja az adatokat a weboldal szerverén. Az elküldés a saját
        e-mail programját nyitja meg, és az üzenet e-mailben érkezik meg hozzánk. A postaládát a
        Google (Gmail) biztosítja, ezért a kézbesítés során a Google rendszerein is áthaladhat az
        üzenet.
      </p>

      <h2>Megőrzés</h2>
      <p>
        A megkereséseket a válaszadáshoz és az esetleges egyeztetéshez szükséges ideig, ennek
        hiányában a lezárástól számított 12 hónapig őrizzük meg. Ha a levelezésből szerződés vagy
        számla keletkezik, a vonatkozó bizonylatokat a számviteli előírások szerinti ideig
        tároljuk.
      </p>

      <h2>Kinek továbbítjuk az adatokat</h2>
      <p>
        Az adatokat nem adjuk el, és nem használjuk hirdetésre. Hozzáfér az adatkezelő, valamint a
        levelezés technikai lebonyolításához az e-mail szolgáltató. Automatizált döntéshozatalt és
        profilalkotást nem végzünk.
      </p>

      <h2>Kötelező-e megadni az adatokat</h2>
      <p>
        Ajánlatkéréshez a név, a telefonszám, az e-mail cím és a választott szolgáltatás szükséges.
        A gépjármű típusa és az üzenet megadása önkéntes, de segít pontosabb választ adni.
      </p>

      <h2>Az Ön jogai</h2>
      <p>Az adatkezeléssel kapcsolatban kérheti:</p>
      <ul>
        <li>a hozzáférést a kezelt adataihoz</li>
        <li>azok helyesbítését vagy törlését</li>
        <li>az adatkezelés korlátozását</li>
        <li>tiltakozhat a jogos érdeken alapuló kezelés ellen, ha ilyet alkalmazunk</li>
        <li>az adathordozhatóságot, ahol annak feltételei fennállnak</li>
      </ul>
      <p>
        Kérelmét a fenti e-mail címen fogadjuk. A választ legkésőbb egy hónapon belül megadjuk.
      </p>

      <h2>Panasz</h2>
      <p>
        Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz fordulhat: 1055 Budapest,
        Falk Miksa utca 9–11.,{" "}
        <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>,{" "}
        <a href="tel:+3613911400">+36 1 391 1400</a>,{" "}
        <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">
          naih.hu
        </a>
        . Bírósághoz is fordulhat.
      </p>

      <h2>Sütik</h2>
      <p>
        A weboldal jelenlegi változata nem használ analitikai vagy marketing sütiket. A kapcsolat
        felvétele e-mailben történik, nem sütiben tárolt azonosítóval.
      </p>

      <p>
        Az űrlap melletti tájékoztatás szerint az üzenet elküldésével hozzájárul ahhoz, hogy a
        megkeresésével kapcsolatban felvegyük Önnel a kapcsolatot. Vissza a{" "}
        <Link href="/kapcsolat">kapcsolat</Link> oldalra.
      </p>
    </LegalLayout>
  );
}
