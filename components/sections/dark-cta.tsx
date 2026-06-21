import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { BrandMark } from "../brand-mark";

export function DarkCta() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-forest px-6 py-14 sm:px-12 lg:px-16">
        <BrandMark
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-lime/15"
        />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              ¿Tu operación de salud está lista para automatizarse?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Revisamos tus procesos actuales y te decimos qué se puede resolver
              rápido y qué necesita una solución a la medida. Sin tecnicismos.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicitar diagnóstico
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <p className="mt-3 text-center text-sm text-white/55">
              Gratis y sin compromiso
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
