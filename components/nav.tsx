"use client";

import { useEffect, useState } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { Logo } from "./brand-mark";
import { waLink } from "@/lib/site";

const LINKS = [
  { href: "#agentes", label: "Agentes IA" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#salud", label: "Salud" },
  { href: "#proceso", label: "Cómo trabajamos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="LagreenLabs, inicio" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/30"
          >
            <WhatsappLogo size={18} weight="fill" className="text-brand" />
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-strong active:scale-[0.98]"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg lg:hidden">
          <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6">
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-ink hover:bg-sage"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink"
              >
                <WhatsappLogo size={18} weight="fill" className="text-brand" />
                Escríbenos por WhatsApp
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-white"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
