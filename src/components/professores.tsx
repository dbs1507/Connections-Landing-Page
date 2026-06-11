import { professores } from "@/lib/content";
import { ProfessorCard } from "@/components/professor-card";

export function Professores() {
  return (
    <section id="professores" className=" py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl tracking-tight text-[var(--heading)] md:text-4xl">
          Conheça Nossos{" "}
          <span className="highlight-terracotta">Professores</span>
        </h2>

        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {professores.map((professor) => (
            <ProfessorCard key={professor.name} professor={professor} />
          ))}
        </div>
      </div>
    </section>
  );
}
