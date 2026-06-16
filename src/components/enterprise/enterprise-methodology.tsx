import { enterprise } from "@/lib/content";

export function EnterpriseMethodology() {
  const { methodology } = enterprise;

  return (
    <section id="metodologia" className="bg-white pt-24 pb-10 md:pt-32 md:pb-12 lg:pt-36 lg:pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {methodology.title}{" "}
          <span className="highlight-terracotta highlight-compact">Corporativa</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center md:py-4">
            <h5 className="text-xl text-[var(--heading)] md:text-2xl lg:text-3xl">
              {methodology.heading}
            </h5>
            <p className="mt-4 [font-family:var(--font-body)] text-sm leading-relaxed text-[var(--muted)] md:text-base lg:text-lg">
              {methodology.description}
            </p>
            <div
              className="mt-6 h-[3px] w-12 bg-[var(--terracotta)]"
              aria-hidden
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {methodology.pillars.map((pillar) => (
              <article
                key={pillar.code}
                className="flex min-h-[168px] flex-col justify-between overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-0.5 md:min-h-[200px] md:p-6 lg:min-h-[228px] lg:p-7"
                style={{
                  backgroundColor: pillar.theme.bg,
                  color: pillar.theme.text,
                }}
              >
                <span
                  aria-hidden
                  className="[font-family:var(--font-body)] text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl"
                >
                  {pillar.code}
                </span>
                <p className="[font-family:var(--font-body)] text-sm font-bold leading-snug tracking-tight md:text-base lg:text-lg">
                  {pillar.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
