import Image from "next/image";
import { connectlang } from "@/lib/content";

export function ConnectLangPreview() {
  const { hero } = connectlang;

  return (
    <section className="bg-white">
      <div className="relative w-full overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          width={1917}
          height={1029}
          priority
          sizes="100vw"
          className="block h-auto w-full min-w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
