"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, quoteServices } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  service: "",
  message: "",
};

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-[16px] text-white outline-none transition placeholder:text-white/30 focus:border-accent";

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Kérjük, adja meg a nevét.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    errors.phone = "Kérjük, adjon meg egy érvényes telefonszámot.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Kérjük, adjon meg egy érvényes e-mail címet.";
  }
  if (!values.service) errors.service = "Kérjük, válasszon szolgáltatást.";
  if (values.message.length > 2000) errors.message = "Az üzenet legfeljebb 2000 karakter lehet.";
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `Név: ${values.name.trim()}`,
      `Telefonszám: ${values.phone.trim()}`,
      `E-mail: ${values.email.trim()}`,
      `Gépjármű típusa: ${values.vehicle.trim() || "–"}`,
      `Választott szolgáltatás: ${values.service}`,
      "",
      "Üzenet:",
      values.message.trim() || "–",
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Ajánlatkérés – ${values.name.trim()}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
        <p className="text-[13px] font-bold text-accent">Elküldésre kész</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.04em]">
          Megnyitottuk az e-mail programját.
        </h2>
        <p className="mt-4 leading-7 text-muted">
          Az ajánlatkérés a kitöltött adatokkal együtt oda került. Ha az e-mail nem nyílt meg,
          hívjon minket, vagy írjon közvetlenül.
        </p>
        <div className="mt-6 space-y-2 text-sm">
          <a className="block text-white hover:text-accent" href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>
          <a className="block text-white hover:text-accent" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Név" error={errors.name} required>
          <input
            className={`${fieldClass} h-12`}
            name="name"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label="Telefonszám" error={errors.phone} required>
          <input
            className={`${fieldClass} h-12`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label="E-mail cím" error={errors.email} required>
          <input
            className={`${fieldClass} h-12`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field label="Gépjármű típusa" hint="nem kötelező">
          <input
            className={`${fieldClass} h-12`}
            name="vehicle"
            value={values.vehicle}
            onChange={(event) => update("vehicle", event.target.value)}
          />
        </Field>
        <Field label="Választott szolgáltatás" error={errors.service} required className="sm:col-span-2">
          <div className="relative">
            <select
              className={`${fieldClass} h-12 appearance-none pr-10`}
              name="service"
              value={values.service}
              aria-invalid={Boolean(errors.service)}
              onChange={(event) => update("service", event.target.value)}
            >
              <option value="">Válasszon szolgáltatást</option>
              {quoteServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 12 12" className="pointer-events-none absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 text-white/60" aria-hidden>
              <path d="M2 4.2 6 8l4-3.8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
        </Field>
        <Field label="Üzenet" hint="nem kötelező" error={errors.message} className="sm:col-span-2">
          <textarea
            className={`${fieldClass} min-h-36 py-3`}
            name="message"
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            onChange={(event) => update("message", event.target.value)}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-white text-sm font-bold text-black transition hover:bg-accent sm:w-auto sm:px-8"
      >
        AJÁNLATOT KÉREK
      </button>
      <p className="mt-5 text-xs leading-6 text-white/45">
        Az üzenet elküldésével hozzájárul ahhoz, hogy megkeresésével kapcsolatban felvegyük Önnel a
        kapcsolatot. Az adatkezelés részleteit az{" "}
        <Link href="/adatkezeles" className="text-white/80 underline underline-offset-2 hover:text-accent">
          Adatkezelési tájékoztató
        </Link>{" "}
        tartalmazza.
      </p>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  required,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-baseline justify-between gap-3 text-[13px] font-bold text-white/75">
        <span>
          {label}
          {required ? <span className="ml-1 text-accent">*</span> : null}
        </span>
        {hint ? <span className="text-[11px] tracking-normal text-white/35 normal-case">{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-[#ffb4b4]">{error}</span> : null}
    </label>
  );
}
