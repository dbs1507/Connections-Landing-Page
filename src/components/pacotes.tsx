import { pacotes } from "@/lib/content";

export function Pacotes() {
  return (
    <section id="pacotes" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Pacotes e <span className="highlight-terracotta">Valores</span>
        </h2>

        {pacotes.map((grupo) => (
          <div key={grupo.title} className="mt-12">
            <p className="mb-6 text-center [font-family:var(--font-body)] text-lg font-semibold text-[var(--heading)] md:text-xl">
              {grupo.title}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {grupo.plans.map((plan) => (
                <div
                  key={plan.name}
                  className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 text-center shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--heading)_22%,var(--border))]"
                >
                  <p className="mb-4 [font-family:var(--font-body)] text-base font-semibold text-[var(--heading)]">
                    {plan.name}
                  </p>
                  <span
                    className="inline-block px-3 py-1 [font-family:var(--font-body)] text-sm font-bold md:text-base"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--primary) 72%, var(--heading))",
                      color: "var(--background)",
                    }}
                  >
                    {plan.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center [font-family:var(--font-body)] text-sm italic text-[var(--muted)]">
              {grupo.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
