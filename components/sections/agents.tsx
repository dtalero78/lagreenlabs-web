import {
  Headset,
  CalendarCheck,
  ChartLineUp,
  Wallet,
  ClipboardText,
  SealCheck,
  FileText,
  Heartbeat,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { AGENTS } from "@/lib/content";
import { Reveal } from "../reveal";

const ICONS: Record<string, Icon> = {
  Headset,
  CalendarCheck,
  ChartLineUp,
  Wallet,
  ClipboardText,
  SealCheck,
  FileText,
  Heartbeat,
};

export function Agents() {
  return (
    <section id="agentes" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Agentes IA
          </span>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-ink">
            Asistentes que hacen lo repetitivo
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            No reemplazan el criterio humano. Liberan tiempo para que tu equipo
            se enfoque en lo importante: responder, agendar, hacer seguimiento,
            recordar pagos, organizar solicitudes y preparar documentos.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border-l border-t border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent, i) => {
            const IconCmp = ICONS[agent.icon];
            return (
              <Reveal
                key={agent.name}
                delay={(i % 4) * 0.05}
                className="flex flex-col border-b border-r border-line p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-brand-strong">
                  {IconCmp ? <IconCmp size={22} weight="duotone" /> : null}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {agent.name}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {agent.does}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-strong">
                  {agent.benefit}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <a
            href="#contacto"
            className="mt-10 inline-flex items-center gap-2 text-base font-medium text-brand transition-colors hover:text-brand-strong"
          >
            ¿No ves tu proceso? También creamos agentes a la medida
            <ArrowRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
