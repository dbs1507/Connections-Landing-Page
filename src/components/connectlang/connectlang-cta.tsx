import { connectlang } from "@/lib/content";

export function ConnectLangCta() {
  const { finalCta, appUrl, trialMicrocopy } = connectlang;

  return (
    <section id="cta-final" className="surface-hero py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="text-balance text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          {finalCta.title}
        </h2>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={appUrl}
            className="border border-black/70 bg-black/90 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {finalCta.cta}
          </a>
          <p className="text-xs text-[var(--muted)]">{trialMicrocopy}</p>
        </div>
      </div>
    </section>
  );
}
