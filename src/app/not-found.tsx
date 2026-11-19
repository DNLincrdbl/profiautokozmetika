import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-5 pt-24 text-center">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">
        Ez az oldal nem található.
      </h1>
      <p className="mt-4 max-w-md leading-7 text-muted">
        A keresett tartalom áthelyezésre került, vagy nem létezik.
      </p>
      <div className="mt-8">
        <Button href="/">Vissza a főoldalra</Button>
      </div>
    </section>
  );
}
