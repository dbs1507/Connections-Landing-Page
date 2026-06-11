import { ChartLine, Globe, Users } from "lucide-react";
import { enterprise } from "@/lib/content";

const icons = [Globe, ChartLine, Users] as const;

export function EnterpriseAdvantages() {
  const { advantages } = enterprise;

  return (
    <section id="vantagens" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {advantages.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {advantages.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 text-center shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--heading)_22%,var(--border))]"
              >
                <div className="mx-auto mb-4 inline-flex border border-[var(--primary)] bg-[var(--primary)] p-3 text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h5 className="text-xl text-[var(--heading)]">{item.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
