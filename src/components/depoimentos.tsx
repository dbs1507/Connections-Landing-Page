import { depoimentos } from "@/lib/content";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-accent">
          O que nossos alunos dizem
        </h2>
        <div className="mt-8">
          <TestimonialCarousel testimonials={depoimentos} />
        </div>
      </div>
    </section>
  );
}
