// Marca geométrica de LagreenLabs: un "bloom" de 4 pétalos (crecimiento / salud / verde).
// Inspirado en el motivo floral de la referencia, ejecutado simple y propio.

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <circle cx="50" cy="26" r="24" />
      <circle cx="50" cy="74" r="24" />
      <circle cx="26" cy="50" r="24" />
      <circle cx="74" cy="50" r="24" />
      <circle cx="50" cy="50" r="15" className="opacity-90" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <BrandMark className="h-6 w-6 text-brand" />
      <span className="text-[1.15rem] font-semibold tracking-tight">
        La<span className="text-brand">green</span>Labs
      </span>
    </span>
  );
}
