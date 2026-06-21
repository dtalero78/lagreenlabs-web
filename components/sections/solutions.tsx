import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SEGMENTS } from "@/lib/content";
import { Reveal } from "../reveal";

const SURFACE: Record<string, string> = {
  lime: "bg-lime",
  mint: "bg-mint",
  sage: "bg-sage",
};

export function Solutions() {
  return (
    <section id="soluciones" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              ¿Para quién es?
            </span>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-ink">
              Para cada tamaño de empresa de salud
            </h2>
            <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              Empezamos simple y escalamos contigo. La misma plataforma sirve
              para un consultorio independiente y para una IPS con varias áreas.
            </p>
            <a
              href="#contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-strong active:scale-[0.98]"
            >
              Solicitar diagnóstico
              <ArrowRight size={18} weight="bold" />
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          {SEGMENTS.map((seg, i) => (
            <Reveal
              key={seg.name}
              delay={i * 0.06}
              className={`rounded-[24px] p-8 lg:p-10 ${SURFACE[seg.surface]}`}
            >
              {seg.badge && (
                <span className="mb-4 inline-block rounded-full bg-ink/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
                  {seg.badge}
                </span>
              )}
              <h3 className="display text-[clamp(1.6rem,3.5vw,2.6rem)] text-ink">
                {seg.name}
              </h3>
              <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-ink/75">
                {seg.promise}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {seg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink/85">
                    <Check
                      size={20}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-brand-strong"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
