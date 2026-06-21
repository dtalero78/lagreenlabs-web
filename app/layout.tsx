import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Anton: display condensado pesado, sustituto cercano al "FK Screamer" de la referencia.
const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lagreenlabs.co"),
  title: {
    default: "LagreenLabs | Automatización e IA para empresas de salud",
    template: "%s | LagreenLabs",
  },
  description:
    "Ayudamos a profesionales independientes, pymes e instituciones de salud a atender más rápido, vender mejor y reducir tareas manuales con agentes de IA y automatización fáciles de usar.",
  keywords: [
    "automatización salud",
    "inteligencia artificial salud",
    "agentes IA salud",
    "automatización de citas",
    "cobranza automática",
    "PQRS",
    "telemedicina",
    "software para IPS",
    "secretaria virtual salud",
    "soluciones digitales para salud",
  ],
  authors: [{ name: "LagreenLabs" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "LagreenLabs | Automatización e IA para empresas de salud",
    description:
      "Más productividad, mejor atención y menos tareas manuales para tu empresa de salud. Agentes de IA y soluciones digitales diseñadas con criterio normativo y operativo.",
    siteName: "LagreenLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "LagreenLabs | Automatización e IA para empresas de salud",
    description:
      "Más productividad, mejor atención y menos tareas manuales para tu empresa de salud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${anton.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
