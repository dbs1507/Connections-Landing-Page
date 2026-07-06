"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { connectlang, enterpriseNavLinks, navLinks } from "@/lib/content";

const enterpriseDesktopNavLinks = [
  ...enterpriseNavLinks,
  { href: "/", label: "Início", highlight: true as const },
] as const;

// Na ConnectLang, âncoras apontam para seções da própria página + "Início" volta à home.
const connectLangNavLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#idiomas", label: "Idiomas" },
  { href: "#nossos-planos", label: "Nossos planos" },
  { href: "#faq", label: "FAQ" },
  { href: "/", label: "Início", highlight: true as const },
] as const;

export function Header() {
  const pathname = usePathname();
  const isEnterprisePage = pathname === "/enterprise";
  const isConnectLangPage = pathname === "/connectlang";
  const desktopNavLinks = isEnterprisePage
    ? enterpriseDesktopNavLinks
    : isConnectLangPage
      ? connectLangNavLinks
      : navLinks;
  const mobileNavLinks = desktopNavLinks;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [finalCtaInView, setFinalCtaInView] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || !isConnectLangPage) return;
    const target = document.getElementById("cta-final");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaInView(entry.intersectionRatio >= 0.6),
      { threshold: [0, 0.3, 0.6, 1] },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [isConnectLangPage, isMounted]);

  const headerScrolled = isMounted && scrolled;
  const heroPassed = isMounted && pastHero;
  const showStartButton =
    isConnectLangPage && heroPassed && !(isMounted && finalCtaInView);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        headerScrolled ? "header-scrolled" : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 py-0.5 md:px-5 lg:px-6">
        <div className="flex items-center gap-5 md:gap-8 lg:gap-10">
          <Link href="/" className="-ml-0.5 shrink-0 md:-ml-1">
            <Image
              src="/img/logo-black.png"
              alt="Connections Languages"
              width={1536}
              height={1024}
              className="block h-[4.5rem] w-auto md:h-20 lg:h-24"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-4 md:flex lg:gap-5">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-1 py-0.5 text-sm text-[var(--nav)] transition-opacity hover:opacity-75`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {isConnectLangPage ? (
            <>
              <a
                href={connectlang.loginUrl}
                className={`hidden text-sm font-semibold transition-all duration-300 hover:opacity-80 md:inline-block ${
                  heroPassed
                    ? "text-[var(--nav)]"
                    : "border border-black/70 bg-black/90 px-4 py-2.5 text-white lg:px-5"
                }`}
              >
                Entrar
              </a>
              <a
                href={connectlang.appUrl}
                aria-hidden={!showStartButton}
                tabIndex={showStartButton ? undefined : -1}
                className={`hidden border border-black/70 bg-black/90 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 md:inline-block lg:px-5 ${
                  showStartButton
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                Começar grátis
              </a>
            </>
          ) : null}

          <button
            type="button"
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--foreground)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-2 border-b border-[var(--border)] bg-white px-4 py-4 shadow-lg md:hidden md:px-5 lg:px-6`}
        >
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-2 py-1 text-sm text-[var(--nav)] transition-opacity hover:opacity-75 ${
                "highlight" in link && link.highlight ? "font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {isConnectLangPage ? (
            <div className="mt-2 flex flex-col gap-2 border-t border-[var(--border)] pt-3">
              <a
                href={connectlang.loginUrl}
                className="px-2 py-1 text-sm font-semibold text-[var(--nav)]"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </a>
              <a
                href={connectlang.appUrl}
                className="border border-black/70 bg-black/90 px-4 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Começar grátis
              </a>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
