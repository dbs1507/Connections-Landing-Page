import { idiomas } from "@/lib/content";

export function Idiomas() {
  return (
    <section id="idiomas" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Idiomas
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {idiomas.map((idioma) => (
            <article
              key={idioma.name}
              className={`relative flex min-h-[168px] flex-col justify-between overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 md:min-h-[192px] ${
                idioma.layout === "wide" ? "sm:col-span-2" : ""
              }`}
              style={{
                backgroundColor: idioma.theme.bg,
                color: idioma.theme.text,
              }}
            >
              <span
                aria-hidden
                className="[font-family:var(--font-body)] text-6xl font-bold leading-none tracking-tight md:text-7xl"
              >
                {idioma.code}
              </span>

              <p className="[font-family:var(--font-body)] text-xl font-bold tracking-tight">
                {idioma.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
