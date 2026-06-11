import { Quote } from "lucide-react";
import { depoimentos } from "@/lib/content";

export function SocialProof() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          O que nossos alunos dizem
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {depoimentos.map((item) => (
            <article key={item.author} className="section-shell p-6">
              <Quote size={18} className="text-[var(--primary)]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
