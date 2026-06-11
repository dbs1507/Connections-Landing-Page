import Image from "next/image";
import { site } from "@/lib/content";

const instagramUrl = "https://www.instagram.com/connectionslanguages/";

function InstagramIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="relative w-full overflow-hidden bg-white">
        <div className="relative h-[clamp(11rem,42vw,36rem)] w-full sm:h-[clamp(13rem,38vw,38rem)] md:h-[clamp(15rem,34vw,40rem)]">
          <Image
            src="/img/logo-connections.png"
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            className="absolute bottom-0 left-0 h-auto w-full"
          />
        </div>
      </div>

      <div className="bg-[#1A1A1A] pt-12 sm:pt-14 md:pt-16">
        <div className="border-y border-white/15">
          <div className="flex flex-col items-center gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6 md:px-10">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="order-2 text-white/70 transition-opacity hover:text-white sm:order-1"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <p className="order-1 text-center text-xs leading-relaxed text-white/50 sm:order-2">
              &copy; {year} {site.name} — Todos os direitos reservados.
            </p>

            <div className="order-3 hidden w-[18px] sm:block" aria-hidden />
          </div>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-10">
          <div className="max-h-[clamp(1rem,36vw,15rem)] w-full overflow-hidden md:max-h-[clamp(17rem,2vw,2rem)]">
            <Image
              src="/img/connections-footer.png"
              alt="Connections Languages"
              width={1536}
              height={1024}
              className="-mt-[calc(100%*1024/1536*0.33)] block h-auto w-full max-w-none"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
