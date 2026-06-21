import { Reveal } from "../reveal";

export function AutomationShowcase() {
  return (
    <section id="ips-automatizacion" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2rem,5vw,4rem)] text-ink">
            Así se ve la operación de una IPS, automatizada
          </h2>
          <p className="mt-5 max-w-[64ch] text-lg leading-relaxed text-ink-soft">
            Mensajes, citas, cartera y PQRS dejan de vivir en WhatsApp, llamadas
            y Excel. Entran por un solo flujo, los procesan agentes de IA y salen
            organizados, medibles y trazables.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 overflow-hidden rounded-[28px] border border-line bg-forest shadow-sm"
        >
          <video
            className="block w-full"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/video/ips-automation-poster.jpg"
            aria-label="Animación del flujo de automatización de una IPS: las solicitudes entran por WhatsApp, llamadas, correo y formularios, pasan por el motor de IA y salen organizadas en agendamiento, cobranza, PQRS y reportes."
          >
            <source src="/video/ips-automation.mp4" type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}
