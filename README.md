# LagreenLabs — Landing web

Landing corporativa de **LagreenLabs** (automatización e IA para empresas de salud).
Construida con la estructura visual de [ploy.ai](https://ploy.ai/features/answer-engine-optimization)
y la marca verde de LagreenLabs, a partir del brief maestro.

## Stack

- **Next.js 16** (App Router, Turbopack) — la home se genera 100% estática.
- **Tailwind CSS v4** — tokens de marca en [`app/globals.css`](app/globals.css).
- **Motion** (`motion/react`) — reveals al hacer scroll, con soporte de `prefers-reduced-motion`.
- **Phosphor Icons** — iconografía.
- Tipografías vía `next/font`: **Anton** (display) + **Geist** (texto).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
```

## Antes de publicar (datos reales)

Edita [`lib/site.ts`](lib/site.ts) y reemplaza los marcadores:

- `whatsapp`: número en formato internacional sin `+` ni espacios (ej. Colombia `57...`).
- `email`: correo de contacto real.

> El formulario de contacto no usa backend: arma un mensaje con los datos y abre
> **WhatsApp** (`wa.me`). Es justo lo que pide el brief ("formulario y WhatsApp para
> solicitar diagnóstico"). Si más adelante quieres guardar los leads, se puede
> conectar a un endpoint o a una hoja de cálculo.

## Estructura del contenido

Todo el copy vive en [`lib/content.ts`](lib/content.ts): agentes IA, problemas,
soluciones por cliente, pasos del método y sectores. Cambiar textos no requiere
tocar los componentes.

## Secciones (orden en `app/page.tsx`)

1. Hero
2. Strip de sectores
3. Problemas que resolvemos (bloque verde 2×2)
4. Agentes IA (8 agentes)
5. Banner CTA oscuro
6. Soluciones por tipo de cliente
7. Salud y cumplimiento (diferencial normativo)
8. Cómo trabajamos (método de 6 pasos)
9. Cierre + formulario de diagnóstico
10. Footer

## Escalabilidad

La web está pensada para crecer (como pide el brief): se pueden agregar páginas
por agente, paquete comercial, sector o caso de uso creando rutas en `app/`.
Posibles próximas secciones/páginas: Comercialización y tercerización de ventas,
Telemedicina, Paquetes comerciales.

## Deploy

Al ser estática, despliega en cualquier hosting de Node/estático. Para
DigitalOcean (App Platform): build `npm run build`, run `npm run start`.

## Notas de diseño

- Light mode por decisión de marca (la referencia ploy.ai es light). Se puede
  añadir dark mode si se requiere.
- La página es type-forward (sin fotografía), igual que la referencia. Si se
  quiere más calidez/credibilidad, se pueden añadir 1-2 fotos reales (hero o
  sección de salud).
