import { STEPS } from "@/lib/content";
import { Reveal } from "../reveal";

export function Process() {
  return (
    <section id="proceso" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2rem,5vw,4rem)] text-ink">
            Primero el problema, después la solución
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
            Un método simple para que la tecnología te quite trabajo, no te dé
            más problemas. Empezamos pequeño, medimos y mejoramos con tu
            operación real.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={(i % 3) * 0.06} as="li">
              <div className="flex items-baseline gap-4 border-t border-line pt-5">
                <span className="display text-4xl text-brand/40 lg:text-5xl">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
