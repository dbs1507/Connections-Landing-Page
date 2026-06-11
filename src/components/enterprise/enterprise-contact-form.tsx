"use client";

import { FormEvent, useState } from "react";
import { enterprise, site } from "@/lib/content";

export function EnterpriseContactForm() {
  const [feedback, setFeedback] = useState<string | null>(null);
  const { contact } = enterprise;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const message = [
      "Olá! Gostaria de solicitar uma proposta corporativa.",
      "",
      `Empresa: ${formData.get("empresa")}`,
      `Nome: ${formData.get("nome")}`,
      `Cargo: ${formData.get("cargo")}`,
      `E-mail: ${formData.get("email")}`,
      `Funcionários: ${formData.get("funcionarios")}`,
      `Mensagem: ${formData.get("mensagem") || "—"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.phoneHref}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFeedback("Redirecionando para o WhatsApp com sua solicitação...");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)] md:p-8"
    >
      <div className="mb-4">
        <label htmlFor="empresa" className="mb-2 block text-sm font-semibold text-[var(--heading)]">
          Nome da Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          required
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nome" className="mb-2 block text-sm font-semibold text-[var(--heading)]">
          Seu Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cargo" className="mb-2 block text-sm font-semibold text-[var(--heading)]">
          Seu Cargo
        </label>
        <input
          id="cargo"
          name="cargo"
          type="text"
          required
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--heading)]">
          E-mail Corporativo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="funcionarios"
          className="mb-2 block text-sm font-semibold text-[var(--heading)]"
        >
          Número de Funcionários para Treinamento
        </label>
        <select
          id="funcionarios"
          name="funcionarios"
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        >
          {contact.employeeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold text-[var(--heading)]">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          className="w-full border border-[var(--border)] px-4 py-2 text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
      <button type="submit" className="primary-btn w-full px-4 py-3 text-sm font-semibold">
        {contact.formTitle}
      </button>
      {feedback ? (
        <p className="mt-4 text-center text-sm text-[var(--primary)]">{feedback}</p>
      ) : null}
    </form>
  );
}
