"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
};

type TestimonialCarouselProps = {
  testimonials: readonly Testimonial[];
  intervalMs?: number;
};

export function TestimonialCarousel({
  testimonials,
  intervalMs = 3000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [testimonials.length, intervalMs]);

  const goTo = (index: number) => setActiveIndex(index);
  const goPrev = () =>
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-lg border-2 border-accent bg-white p-8 text-center shadow-lg">
        <p className="italic text-gray-700">&ldquo;{current.quote}&rdquo;</p>
        <p className="mt-4 font-semibold text-accent">- {current.author}</p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-full border border-accent px-3 py-1 text-accent hover:bg-accent hover:text-highlight"
          aria-label="Depoimento anterior"
        >
          ←
        </button>

        <div className="flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                index === activeIndex ? "bg-accent" : "bg-accent/30"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-accent px-3 py-1 text-accent hover:bg-accent hover:text-highlight"
          aria-label="Próximo depoimento"
        >
          →
        </button>
      </div>
    </div>
  );
}
