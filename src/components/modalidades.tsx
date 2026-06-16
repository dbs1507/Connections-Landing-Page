import Image from "next/image";
import { modalidades } from "@/lib/content";

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Modalidades de Aula
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {modalidades.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl text-[var(--heading)]">{item.title}</h3>

              <p className="mt-4 text-justify leading-relaxed text-[var(--muted)]">
                {item.paragraphs[0]}
              </p>


              {item.paragraphs.slice(1).map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-justify leading-relaxed text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-[var(--heading)]">
                  Pacotes
                </span>
                {item.pacotes.map((pacote) => (
                  <span
                    key={pacote}
                    className="inline-block text-black highlight-terracotta px-3 py-1 [font-family:var(--font-body)] text-xs font-bold text-background md:text-sm"
                  >
                    {pacote}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none relative -mx-6 mt-10 h-[clamp(9rem,32vw,15rem)] w-[calc(100%+3rem)] md:-mx-10 md:mt-14 md:h-[clamp(21rem,28vw,16rem)] md:w-[calc(100%+5rem)]"
        >
          <Image
            src="/img/pencil-strip.png"
            alt=""
            width={1920}
            height={520}
            className="absolute bottom-0 left-1/3 h-[135%] w-[min(148%,1280px)] max-w-none -translate-x-1/2 object-contain object-bottom md:h-[140%] md:w-[min(120%,100vw)] md:max-w-[88rem]"
          />
        </div>
      </div>
    </section>
  );
}
