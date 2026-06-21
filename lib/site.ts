// Datos de contacto del sitio.
// TODO: reemplazar por los datos reales de LagreenLabs antes de publicar.
export const SITE = {
  name: "LagreenLabs",
  // Número de WhatsApp en formato internacional sin "+" ni espacios (ej. Colombia: 57...).
  whatsapp: "573000000000",
  email: "hola@lagreenlabs.co",
  // Mensaje precargado al abrir WhatsApp desde un CTA general.
  whatsappGreeting:
    "Hola LagreenLabs, quiero solicitar un diagnóstico de automatización para mi empresa de salud.",
};

export function waLink(message: string = SITE.whatsappGreeting) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
