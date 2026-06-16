"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { enterpriseNavLinks, navLinks } from "@/lib/content";

const enterpriseDesktopNavLinks = [
  ...enterpriseNavLinks,
  { href: "/", label: "Início", highlight: true as const },
] as const;

export function Header() {
  const pathname = usePathname();
  const isEnterprisePage = pathname === "/enterprise";
  const desktopNavLinks = isEnterprisePage ? enterpriseDesktopNavLinks : navLinks;
  const mobileNavLinks = isEnterprisePage ? enterpriseDesktopNavLinks : navLinks;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "header-scrolled" : "bg-transparent"
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

        <button
          type="button"
          className="rounded-xl border border-[var(--border)] p-2 text-[var(--foreground)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

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
        </nav>
      </div>
    </header>
  );
}
