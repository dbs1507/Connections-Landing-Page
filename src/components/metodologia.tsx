import Image from "next/image";
import { metodologia } from "@/lib/content";

export function Metodologia() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-white py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-[38%] z-0 w-[min(112vw,900px)] md:-bottom-32 md:-left-[24%] md:w-[min(62vw,980px)]"
      >
        <Image
          src="/img/triangulo.png"
          alt=""
          width={1536}
          height={1024}
          className="h-auto w-full opacity-95 [mix-blend-mode:lighten]"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 -right-[18%] z-0 w-[min(62vw,460px)] -translate-y-[52%] md:-right-[16%] md:w-[min(38vw,620px)] md:-translate-y-[58%]"
      >
        <Image
          src="/img/quadrado_verde_textura.svg"
          alt=""
          width={1536}
          height={1024}
          className="h-auto w-full opacity-95 [mix-blend-mode:lighten]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Nossa Metodologia
        </h2>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
          {metodologia.map((item, index) => (
            <article
              key={item.title}
              className={`self-start border border-[var(--border)] bg-[var(--background-muted)] p-6 md:p-8 ${
                index === 0 ? "max-w-sm md:max-w-md" : "md:mt-20 lg:mt-24"
              }`}
            >
              <h3 className="text-2xl text-[var(--heading)]">{item.title}</h3>

              <div className="mt-6">
                {item.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-justify leading-relaxed text-[var(--muted)] first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
