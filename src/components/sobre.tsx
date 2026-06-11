import { site, sobreSlides, sobreTypedStrings } from "@/lib/content";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { TypedText } from "@/components/ui/typed-text";

export function Sobre() {
  return (
    <section id="sobre" className="bg-accent py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-highlight md:text-6xl">
            {site.name}
          </h1>
          <h2 className="mt-2 text-2xl text-highlight md:text-3xl">
            {site.tagline}
          </h2>
          <h3 className="mt-6 text-2xl text-highlight md:text-3xl">Sobre Nós</h3>
          <p className="mt-4 text-justify text-highlight">
            Somos uma escola de idiomas online que prioriza a conexão e a
            comunicação. Nossas aulas são personalizadas e customizadas para os
            seus interesses e gostos. Mudando assim, sua maneira de aprender um
            novo idioma e potencializando sua comunicação.
          </p>
          <p className="mt-4 text-justify text-highlight">
            Contamos com professores capacitados e treinados para te ensinar o
            idioma que deseja!
          </p>
        </div>

        <div className="relative">
          <ImageCarousel slides={sobreSlides} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <TypedText strings={sobreTypedStrings} />
          </div>
        </div>
      </div>
    </section>
  );
}
