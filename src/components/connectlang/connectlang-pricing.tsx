import { Check } from "lucide-react";
import { connectlang } from "@/lib/content";

export function ConnectLangPricing() {
  const { pricing, appUrl, trialMicrocopy } = connectlang;

  return (
    <section id="planos" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--muted)]">
          {pricing.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col bg-[var(--background)] p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-2 border-[var(--primary)] shadow-[0_18px_50px_color-mix(in_srgb,var(--primary)_20%,transparent)]"
                  : "border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)]"
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 right-6 bg-terracotta px-3 py-1 [font-family:var(--font-body)] text-xs font-bold text-[var(--background)]">
                  {plan.badge}
                </span>
              ) : null}

              <h5 className="text-xl text-[var(--heading)]">{plan.name}</h5>

              <div className="mt-4 flex items-end gap-1">
                <span className="[font-family:var(--font-body)] text-4xl font-bold tracking-tight text-[var(--heading)]">
                  {plan.price}
                </span>
                <span className="mb-1 text-sm text-[var(--muted)]">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--primary)]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-2">
                <a
                  href={appUrl}
                  className={`px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                    plan.highlight
                      ? "primary-btn"
                      : "border border-black/70 bg-black/90 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
                <p className="text-center text-xs text-[var(--muted)]">
                  {trialMicrocopy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
