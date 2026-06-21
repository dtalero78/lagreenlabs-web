import { SECTORS } from "@/lib/content";
import { BrandMark } from "../brand-mark";

export function Sectors() {
  // Duplicamos la lista para un loop continuo sin cortes.
  const items = [...SECTORS, ...SECTORS];

  return (
    <section aria-label="Sectores que atendemos" className="border-y border-line py-10">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
        Diseñado para la operación real de salud
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((sector, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-3 text-lg font-medium text-ink/70"
            >
              <BrandMark className="h-3.5 w-3.5 text-brand/60" />
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
