import Image from "next/image";

export function Importancia() {
  return (
    <section id="importancia" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Qual a importância de aprender outro idioma?
        </h2>

        <div className="mt-8 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-justify text-[var(--muted)]">
              Aprender um novo idioma é uma habilidade transformadora que pode
              abrir portas para inúmeras oportunidades. No âmbito profissional,
              aumenta as chances de promoções, facilita negociações
              internacionais e amplia a rede de contatos.
            </p>
            <p className="mt-4 text-justify text-[var(--muted)]">
              Além disso, aprender um idioma permite fazer conexões mais
              profundas com pessoas de diferentes culturas, enriquecendo sua
              visão de mundo e promovendo a troca de experiências únicas.
            </p>
            <p className="mt-4 text-justify text-[var(--muted)]">
              Viajar se torna mais fácil e prazeroso, pois você pode se
              comunicar diretamente com os locais, explorar culturas de maneira
              autêntica e adquirir conhecimentos valiosos sobre diferentes
              países.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
