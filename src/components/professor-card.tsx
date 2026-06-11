"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProfessorSocial } from "@/components/professor-social";
import type { professores } from "@/lib/content";

type Professor = (typeof professores)[number];

type ProfessorCardProps = {
  professor: Professor;
};

export function ProfessorCard({ professor }: ProfessorCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex min-h-[22rem] flex-col items-center self-start border border-[color-mix(in_srgb,var(--heading)_12%,var(--border))] bg-[var(--background)] p-6 text-center shadow-[0_14px_40px_color-mix(in_srgb,var(--heading)_10%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--heading)_22%,var(--border))]">
      <div className="rounded-full">
        <Image
          src={professor.image}
          alt={professor.name}
          width={192}
          height={192}
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>

      <h3 className="mt-4 [font-family:var(--font-body)] text-lg font-bold text-[var(--heading)]">
        {professor.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[var(--nav)]">{professor.role}</p>

      <div className="mt-4 flex min-h-[4.5rem] flex-wrap content-start justify-center gap-2">
        {professor.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 [font-family:var(--font-body)] text-xs font-bold"
            style={{
              backgroundColor: professor.theme.tagBg,
              color: professor.theme.tagText,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto w-full pt-4">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="mx-auto flex items-center gap-1 [font-family:var(--font-body)] text-sm font-bold text-[var(--heading)] transition-opacity hover:opacity-75"
        >
          Sobre
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`text-[var(--primary)] transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pt-2 text-left text-sm leading-relaxed whitespace-pre-line text-[var(--foreground)]">
              {professor.bio}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <ProfessorSocial
            instagram={professor.instagram}
            youtube={"youtube" in professor ? professor.youtube : undefined}
          />
        </div>
      </div>
    </article>
  );
}
