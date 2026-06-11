import { BookOpenCheck, CalendarClock, MessagesSquare, Sparkles } from "lucide-react";
import { bentoFeatures } from "@/lib/content";

const icons = [BookOpenCheck, MessagesSquare, CalendarClock, Sparkles] as const;

export function BentoGridFeatures() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="mt-4 text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Metodologia prática para resultados reais
        </h2>
      </div>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-6">
        {bentoFeatures.map((feature, index) => {
          const Icon = icons[index % icons.length];
          const spanClass =
            feature.size === "large"
              ? "md:col-span-4 md:row-span-2"
              : feature.size === "medium"
                ? "md:col-span-2 md:row-span-1"
                : "md:col-span-2 md:row-span-1";

          return (
            <article
              key={feature.title}
              className={`section-shell group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-sm ${spanClass}`}
            >
              <div className="mb-4 inline-flex border border-[var(--border)] p-2 text-[var(--primary)] transition-colors group-hover:border-[var(--primary)]">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg text-[var(--heading)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
