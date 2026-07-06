import { connectlang } from "@/lib/content";

export function ConnectLangHero() {
  const { hero, trialMicrocopy, appUrl } = connectlang;

  return (
    <section className="flex min-h-svh flex-col items-center justify-center overflow-x-clip bg-transparent px-6 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="text-balance text-4xl leading-[1.35] tracking-tight text-[var(--heading)] md:text-5xl md:leading-[1.2] lg:text-5xl">
          {hero.headlineLead}{" "}
          <span className="whitespace-nowrap">
            <span className="highlight-terracotta">{hero.headlineHighlight}</span>,
          </span>{" "}
          {hero.headlineMiddle}{" "}
          <span className="highlight-primary">{hero.headlinePrimary}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:mt-8 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 md:mt-10">
          <a
            href={appUrl}
            className="border border-black/70 bg-black/90 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
