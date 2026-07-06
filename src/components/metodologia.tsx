import Image from "next/image";
import { metodologia, metodologiaPlataforma } from "@/lib/content";

export function Metodologia() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-white py-20">
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

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {metodologia.map((item) => (
            <article
              key={item.title}
              className="h-full border border-[var(--border)] bg-[var(--background-muted)] p-6 md:p-8"
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

      <div className="relative mt-16 md:mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -left-40 z-[1] w-[min(80vw,700px)] translate-y-[30%] md:-bottom-12 md:-left-128 md:w-[min(52vw,780px)] md:translate-y-[38%]"
          >
            <Image
              src="/img/triangulo.png"
              alt=""
              width={1536}
              height={1024}
              className="h-auto w-full opacity-95 [mix-blend-mode:lighten]"
            />
          </div>

          <h3 className="relative z-10 text-2xl text-[var(--heading)]">
            {metodologiaPlataforma.title}
          </h3>
          <p className="relative z-10 mt-4 max-w-3xl text-justify leading-relaxed text-[var(--muted)]">
            {metodologiaPlataforma.description}
          </p>
          <div className="mt-6">
            <a
              href="#modalidades"
              className="px-5 py-3 text-sm font-semibold text-white bg-black/90"
            >Quero conhecer
          </a>
          </div>
        </div>

        <div className="relative z-10 mt-6 w-full overflow-hidden md:mt-8">
          <Image
            src={metodologiaPlataforma.image}
            alt={metodologiaPlataforma.imageAlt}
            width={1917}
            height={1029}
            sizes="100vw"
            className="block h-auto w-full min-w-full scale-[1] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
