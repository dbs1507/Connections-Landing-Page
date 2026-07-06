import { BookOpen, Brain, Headphones, NotebookPen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { connectlang } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  library: BookOpen,
  listening: Headphones,
  vocab: Brain,
  support: NotebookPen,
};

export function ConnectLangFeatures() {
  return (
    <section id="recursos" className="bg-white pt-32 pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Tudo o que você precisa pra praticar
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {connectlang.features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? BookOpen;
            return (
              <article
                key={feature.title}
                className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--heading)_22%,var(--border))]"
              >
                <div className="mb-4 inline-flex border border-[var(--primary)] bg-[var(--primary)] p-3 text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h5 className="text-lg text-[var(--heading)]">{feature.title}</h5>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
