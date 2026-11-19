import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Profi Autókozmetika">
      <Image
        src="/images/logo.png"
        alt=""
        width={1204}
        height={1302}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
