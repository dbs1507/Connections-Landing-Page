import type { Metadata } from "next";
import { ConnectLangCta } from "@/components/connectlang/connectlang-cta";
import { ConnectLangFaq } from "@/components/connectlang/connectlang-faq";
import { ConnectLangFeatures } from "@/components/connectlang/connectlang-features";
import { ConnectLangHero } from "@/components/connectlang/connectlang-hero";
import { ConnectLangHow } from "@/components/connectlang/connectlang-how";
import { ConnectLangLanguages } from "@/components/connectlang/connectlang-languages";
import { ConnectLangPreview } from "@/components/connectlang/connectlang-preview";
import { ConnectLangPricing } from "@/components/connectlang/connectlang-pricing";
import { ConnectLangWhat } from "@/components/connectlang/connectlang-what";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TopShell } from "@/components/top-shell";
import { WhatsappFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "ConnectLang — Plataforma de idiomas da Connections",
  description:
    "Pratique idiomas todo dia com textos, áudios e vocabulário. 5 dias grátis, cancele quando quiser.",
  keywords: [
    "plataforma de idiomas",
    "estudar idiomas online",
    "aprender inglês",
    "vocabulário",
    "listening",
    "ConnectLang",
  ],
};

export default function ConnectLangPage() {
  return (
    <>
      <TopShell>
        <Header />
        <ConnectLangHero />
      </TopShell>
      <main>
        <ConnectLangPreview />
        {/* <ConnectLangWhat /> */}
        <ConnectLangFeatures />
        <ConnectLangHow />
        <ConnectLangLanguages />
        <ConnectLangPricing />
        <ConnectLangFaq />
        <ConnectLangCta />
      </main>
      <Footer />
      <WhatsappFloat messageKey="connectlang" />
    </>
  );
}
