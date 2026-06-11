import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
      <div className="mx-auto w-full max-w-none px-3 md:px-6 lg:px-8">
        <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80 lg:h-128">
          <Image
            src="/img/logo-connections.png"
            alt="Connections Languages"
            width={1920}
            height={1080}
            className="absolute bottom-0 left-0 h-auto w-full max-w-none"
          />
        </div>
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          &copy; {year} Connections Languages. Todos os direitos reservados.
        </p>
      </div>
  );
}
