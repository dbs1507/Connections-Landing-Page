import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TopShell } from "@/components/top-shell";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { connectlang } from "@/lib/content";

export const metadata: Metadata = {
  title: "Em breve — ConnectLang",
  description:
    "A ConnectLang, plataforma de idiomas da Connections, estará disponível em breve.",
  robots: { index: false, follow: false },
};

export default function ConnectLangComingSoonPage() {
  const { comingSoon } = connectlang;

  return (
    <>
      <TopShell>
        <Header />
        <section className="flex min-h-svh flex-col items-center justify-center overflow-x-clip bg-transparent px-6 pb-12 pt-24 md:pb-16 md:pt-28">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h1 className="text-balance text-4xl leading-[1.35] tracking-tight text-[var(--heading)] md:text-5xl md:leading-[1.2] lg:text-5xl">
              {comingSoon.titleLead}{" "}
              <span className="highlight-primary">{comingSoon.titleHighlight}</span>{" "}
              {comingSoon.titleTail}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:mt-8 md:text-lg">
              {comingSoon.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10">
              <Link
                href="/connectlang"
                className="border border-black/70 bg-black/90 px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {comingSoon.backConnectLang}
              </Link>
              <Link
                href="/"
                className="border border-black/70 px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80"
              >
                {comingSoon.backHome}
              </Link>
            </div>
          </div>
        </section>
      </TopShell>
      <Footer />
      <WhatsappFloat messageKey="connectlang" />
    </>
  );
}
