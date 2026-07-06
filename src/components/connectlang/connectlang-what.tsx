import { connectlang } from "@/lib/content";

export function ConnectLangWhat() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-balance text-2xl leading-relaxed text-[var(--heading)] md:text-3xl [font-family:var(--font-title)]">
          {connectlang.what}
        </p>
      </div>
    </section>
  );
}
