import { Quote } from "lucide-react";
import { enterprise } from "@/lib/content";

export function EnterpriseTestimonials() {
  const { testimonials } = enterprise;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {testimonials.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.author}
              className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)]"
            >
              <Quote size={18} className="text-[var(--primary)]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--heading)]">
                — {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
