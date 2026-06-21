import Image from "next/image";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { COMPLIANCE_DOMAINS } from "@/lib/content";
import { Reveal } from "../reveal";

export function Compliance() {
  return (
    <section id="salud" className="px-4 py-6 sm:px-6">
      <Reveal className="mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-sage px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 overflow-hidden rounded-[20px] lg:order-1">
            <Image
              src="/images/salud.jpg"
              alt="Equipo administrativo de salud revisando documentos y procesos en una clínica"
              width={1400}
              height={933}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/12 text-brand-strong">
              <ShieldCheck size={28} weight="duotone" />
            </span>
            <h2 className="display mt-6 max-w-[16ch] text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
              En salud no basta con automatizar
            </h2>
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              Los procesos deben quedar claros, trazables y alineados con las
              exigencias del sector. Conocemos la operación real de IPS,
              consultorios, laboratorios y salud ocupacional, y diseñamos cada
              solución con criterio normativo y operativo.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {COMPLIANCE_DOMAINS.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink/80"
                >
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-ink-soft">
              No prometemos cumplimiento garantizado. Te ayudamos a ejecutar los
              procesos obligatorios de forma más ordenada, medible y trazable.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
