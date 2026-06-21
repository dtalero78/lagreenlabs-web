import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { BrandMark } from "../brand-mark";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:pb-24 lg:pt-28"
    >
      {/* Resplandor verde sutil detrás del titular */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-lime/35 blur-[120px]"
      />

      <div className="mx-auto max-w-[1000px] text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft">
            <BrandMark className="h-4 w-4 text-brand" />
            Automatización e IA para salud
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="display mt-7 text-[clamp(2.6rem,8.5vw,7rem)] text-ink">
            Automatiza tu empresa
            <br className="hidden sm:block" /> de salud{" "}
            <span className="text-brand">con IA</span>
            <BrandMark className="ml-3 inline-block h-[0.7em] w-[0.7em] translate-y-[0.04em] text-lime [filter:drop-shadow(0_2px_8px_rgba(14,122,80,0.25))]" />
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-[58ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
            Atiende más rápido, vende mejor y reduce tareas manuales con agentes
            de IA y soluciones digitales fáciles de usar.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-strong active:scale-[0.98] sm:w-auto"
            >
              Solicitar diagnóstico
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#agentes"
              className="inline-flex w-full items-center justify-center rounded-full border border-line bg-surface px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              Ver los agentes IA
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
