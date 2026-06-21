import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { BrandMark } from "../brand-mark";
import { SITE, waLink } from "@/lib/site";

const COLUMNS = [
  {
    title: "Explora",
    links: [
      { label: "Agentes IA", href: "#agentes" },
      { label: "Soluciones por cliente", href: "#soluciones" },
      { label: "Salud y cumplimiento", href: "#salud" },
      { label: "Cómo trabajamos", href: "#proceso" },
    ],
  },
  {
    title: "Agentes IA",
    links: [
      { label: "Secretaria virtual", href: "#agentes" },
      { label: "Agendamiento", href: "#agentes" },
      { label: "Cobranza", href: "#agentes" },
      { label: "PQRS y calidad", href: "#agentes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest px-4 pb-10 pt-16 text-white sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2">
              <BrandMark className="h-7 w-7 text-lime" />
              <span className="text-xl font-semibold tracking-tight">
                La<span className="text-lime">green</span>Labs
              </span>
            </span>
            <p className="mt-5 max-w-[40ch] leading-relaxed text-white/65">
              Construimos, probamos y mejoramos la operación de tu empresa de
              salud. Más productividad con los mismos recursos.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-lime"
            >
              <ArrowUpRight size={20} weight="bold" />
              {SITE.email}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="#contacto"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  Solicitar diagnóstico
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
                >
                  <WhatsappLogo size={17} weight="fill" className="text-lime" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-sm text-white/55 sm:flex-row">
          <p>© 2026 LagreenLabs. Automatización e IA para salud.</p>
          <p>Hecho con criterio normativo y operativo.</p>
        </div>
      </div>
    </footer>
  );
}
