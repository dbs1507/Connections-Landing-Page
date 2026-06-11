import Image from "next/image";
import { modalidades } from "@/lib/content";

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20 pb-32 md:pb-20">
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

          <div className="pointer-events-none relative z-10 -mt-14 -mx-6 h-36 w-[calc(100%+3rem)] overflow-hidden md:-mx-0 md:-mt-28 md:h-auto md:w-full md:overflow-visible lg:-mt-44">
            <Image
              src="/img/pencil-strip.png"
              alt=""
              aria-hidden
              width={1920}
              height={520}
              className="absolute right-0 top-1/2 h-[130%] w-auto max-w-none min-w-[620px] -translate-y-1/2 object-cover object-right md:relative md:right-auto md:top-auto md:h-auto md:min-w-0 md:w-[1150px] md:translate-y-0 md:object-contain md:-translate-x-[35%] lg:w-[1100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
