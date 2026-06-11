import Image from "next/image";
import { modalidades } from "@/lib/content";

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Modalidades de Aula
        </h2>

        <div className="relative isolate mt-12">
          <div className="relative z-0 grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-10">
            {modalidades.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl text-[var(--heading)]">{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-justify leading-relaxed text-[var(--muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="pointer-events-none relative z-10 -mt-24 overflow-visible md:-mt-28 lg:-mt-44">
            <Image
              src="/img/pencil-strip.png"
              alt=""
              aria-hidden
              width={1920}
              height={520}
              className="h-auto w-[1050px] max-w-none -translate-x-[35%] md:w-[1150px] lg:w-[1100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
