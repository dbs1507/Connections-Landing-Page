import { connectlang, site } from "@/lib/content";

type WhatsappFloatProps = {
  messageKey?: "default" | "enterprise" | "connectlang";
};

export function WhatsappFloat({ messageKey = "default" }: WhatsappFloatProps) {
  const message =
    messageKey === "enterprise"
      ? site.enterpriseWhatsappMessage
      : messageKey === "connectlang"
        ? connectlang.whatsappMessage
        : site.whatsappMessage;
  const whatsappUrl = `https://wa.me/${site.phoneHref}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      WhatsApp
    </a>
  );
}
