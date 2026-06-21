import { PROBLEMS } from "@/lib/content";
import { Reveal } from "../reveal";

export function Problems() {
  return (
    <section id="problemas" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1280px] rounded-[28px] bg-lime px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2rem,5vw,3.75rem)] text-ink">
            El desorden diario tiene solución
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink/75">
            En salud, la información se reparte entre WhatsApp, correos, Excel y
            papeles. Ordenamos esos procesos para que tu equipo deje de repetir
            trabajo y nada importante se quede sin respuesta.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.06}
              className="rounded-2xl bg-surface p-7 lg:p-8"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
                {p.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
