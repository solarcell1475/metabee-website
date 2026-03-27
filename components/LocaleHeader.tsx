"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale, prefix, navLabels, langSwitchLabels } from "@/lib/i18n";

export default function LocaleHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const p = prefix(locale);
  const t = navLabels[locale];

  const navLinks = [
    { href: `${p}/`, label: t.home },
    { href: `${p}/about-us`, label: t.about },
    { href: `${p}/projects`, label: t.projects },
    { href: `${p}/products`, label: t.products },
    { href: `${p}/contact-us`, label: t.contact },
  ];

  const locales: Locale[] = ["en", "sc", "jp"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={`${p}/`} className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/logo/logo-metabee-navbar-animated.gif"
              alt="MetaBee"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-[#f0b429] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-4">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`${prefix(loc)}/`}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    loc === locale
                      ? "bg-[#f0b429]/20 text-[#f0b429]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {langSwitchLabels[loc]}
                </Link>
              ))}
            </div>
          </div>

          <button
            className="md:hidden p-2 text-zinc-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-[#f0b429]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`${prefix(loc)}/`}
                  className={`text-xs px-3 py-1.5 rounded transition-colors ${
                    loc === locale
                      ? "bg-[#f0b429]/20 text-[#f0b429]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {langSwitchLabels[loc]}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
