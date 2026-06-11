import { site } from "@/lib/content";

const whatsappUrl = `https://wa.me/${site.phoneHref}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function HeroSection() {
  const { heroHeadline } = site;

  return (
    <section
      id="sobre"
      className="flex min-h-svh flex-col items-center justify-center bg-transparent px-6 pb-12 pt-24 md:pb-16 md:pt-28"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="text-balance text-4xl leading-[1.15] tracking-tight text-[var(--heading)] md:text-5xl lg:text-5xl">
          {heroHeadline.lead}{" "}
          <span className="highlight-terracotta">
            {heroHeadline.highlightTerracotta}
          </span>{" "}
          {heroHeadline.middle}{" "}
          <span className="inline-block whitespace-nowrap">
            {heroHeadline.tail}{" "}
            <span className="highlight-primary">
              {heroHeadline.highlightYellow}
            </span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:mt-8 md:text-lg">
          {site.ctaSubtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn px-5 py-3 text-sm font-semibold"
          >
            Quero começar agora
          </a>
          <a
            href="#pacotes"
            className="secondary-btn border-white/70 bg-white/90 px-5 py-3 text-sm font-semibold"
          >
            Ver pacotes
          </a>
        </div>
      </div>
    </section>
  );
}
