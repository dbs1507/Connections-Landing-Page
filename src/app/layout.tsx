import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connections Languages",
  description:
    "Connections Languages - Aprenda idiomas online com professores capacitados e aulas personalizadas.",
  keywords: [
    "idiomas",
    "cursos online",
    "inglês",
    "espanhol",
    "francês",
    "italiano",
    "alemão",
  ],
  authors: [{ name: "Connections Languages" }],
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
