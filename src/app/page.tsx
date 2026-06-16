import { Contato } from "@/components/contato";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TopShell } from "@/components/top-shell";
import { Idiomas } from "@/components/idiomas";
import { Importancia } from "@/components/importancia";
import { Metodologia } from "@/components/metodologia";
import { Modalidades } from "@/components/modalidades";
import { Pacotes } from "@/components/pacotes";
import { Professores } from "@/components/professores";
import { SocialProof } from "@/components/social-proof";
import { WhatsappFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <TopShell>
        <Header />
        <HeroSection />
      </TopShell>
        {/* <BentoGridFeatures /> */}
        <Metodologia />
        <Idiomas />
        <Professores />
        <Modalidades />
        {/* <Pacotes /> */}
        {/* <Importancia /> */}
        <SocialProof />
        {/* <Contato /> */}
      <Footer />
      <WhatsappFloat />
    </>
  );
}
