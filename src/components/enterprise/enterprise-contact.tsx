import { enterprise, site } from "@/lib/content";
import { EnterpriseContactForm } from "./enterprise-contact-form";

export function EnterpriseContact() {
  const { contact } = enterprise;

  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            {contact.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 text-center shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)]">
            <h3 className="mb-4 text-xl text-[var(--heading)]">Informações de Contato</h3>
            <p className="mb-2 text-[var(--muted)]">
              <span className="mr-2 text-[var(--primary)]">📞</span>
              {site.phone}
            </p>
            <p className="text-[var(--muted)]">
              <span className="mr-2 text-[var(--primary)]">✉️</span>
              <a
                href={`mailto:${site.email}`}
                className="underline hover:text-[var(--primary)]"
              >
                {site.email}
              </a>
            </p>
          </div>
          <EnterpriseContactForm />
        </div>
      </div>
    </section>
  );
}
