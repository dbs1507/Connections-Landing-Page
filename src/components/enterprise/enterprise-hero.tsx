import Image from "next/image";
import Link from "next/link";
import { enterprise } from "@/lib/content";

export function EnterpriseHero() {
  const { hero } = enterprise;

  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-transparent px-6 pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-4xl text-center">
        <div>
          <h1 className="text-balance text-4xl leading-[1.15] tracking-tight text-[var(--heading)] md:text-5xl lg:text-5xl">
            {hero.title}{" "}
            <span className="block">
              para <span className="highlight-terracotta highlight-compact">Empresas</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:mt-8 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 md:mt-10">
            <Link
              href="#contato"
              className="primary-btn inline-block px-8 py-3 text-sm font-semibold"
            >
              {hero.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
