import { enterprise } from "@/lib/content";

export function EnterpriseSolutions() {
  const { solutions } = enterprise;

  return (
    <section id="solucoes" className="bg-white pb-20 pt-8 md:pt-10">
      <div className="mx-auto max-w-6xl px-8 md:px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {solutions.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-10">
          {solutions.items.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl text-[var(--heading)]">{item.title}</h3>
              <p className="mt-4 text-justify leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-justify leading-relaxed text-[var(--muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
