import Image from "next/image";
import { site } from "@/lib/content";

const whatsappUrl = `https://wa.me/${site.phoneHref}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function Contato() {
  return (
    <section id="contato" className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Quer saber mais sobre a Connections?
        </h2>
        <p className="mb-8 text-xl text-[var(--muted)]">Ficou com alguma dúvida?</p>

        <div className="flex flex-col items-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/icon-whatsapp.png"
              alt="WhatsApp"
              width={80}
              height={80}
              className="mx-auto h-20 w-20 transition-transform hover:scale-105"
            />
          </a>
          <p className="mb-8 mt-4 text-[var(--muted)]">
            Envie uma mensagem pra gente no WhatsApp! Responderemos o mais breve
            possível
          </p>
        </div>

        <div className="section-shell mx-auto max-w-md p-6">
          <h3 className="mb-4 text-xl text-[var(--heading)]">
            Informações de Contato
          </h3>
          <p className="mb-2 text-[var(--muted)]">
            <span className="mr-2 text-[var(--primary)]">📞</span>
            {site.phone}
          </p>
          <p className="mb-2 text-[var(--muted)]">
            <span className="mr-2 text-[var(--primary)]">✉️</span>
            <a
              href={`mailto:${site.email}`}
              className="underline hover:text-[var(--primary)]"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
