import type { Metadata } from "next";
import { EnterpriseAdvantages } from "@/components/enterprise/enterprise-advantages";
import { EnterpriseContact } from "@/components/enterprise/enterprise-contact";
import { EnterpriseHero } from "@/components/enterprise/enterprise-hero";
import { EnterpriseMethodology } from "@/components/enterprise/enterprise-methodology";
import { EnterpriseSolutions } from "@/components/enterprise/enterprise-solutions";
import { EnterpriseTestimonials } from "@/components/enterprise/enterprise-testimonials";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TopShell } from "@/components/top-shell";
import { WhatsappFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Connections Languages para Empresas",
  description:
    "Connections Languages - Cursos de idiomas corporativos para capacitar sua equipe.",
  keywords: [
    "inglês empresarial",
    "treinamento corporativo",
    "idiomas para empresas",
    "capacitação profissional",
  ],
};

export default function EnterprisePage() {
  return (
    <>
      <TopShell>
        <Header />
        <EnterpriseHero />
      </TopShell>
      <main>
        <EnterpriseAdvantages />
        <EnterpriseMethodology />
        <EnterpriseSolutions />
        <EnterpriseTestimonials />
        {/* <EnterpriseContact /> */}
      </main>
      <Footer />
      <WhatsappFloat messageKey="enterprise" />
    </>
  );
}
