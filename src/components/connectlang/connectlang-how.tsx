import { connectlang } from "@/lib/content";

export function ConnectLangHow() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Como funciona
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {connectlang.steps.map((step) => (
            <article
              key={step.code}
              className="flex flex-col border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 md:p-8"
            >
              <span
                aria-hidden
                className="inline-flex h-12 w-12 items-center justify-center [font-family:var(--font-body)] text-lg font-bold text-[var(--background)]"
                style={{ backgroundColor: step.theme.bg }}
              >
                {step.code}
              </span>
              <h5 className="mt-5 text-xl text-[var(--heading)]">{step.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
