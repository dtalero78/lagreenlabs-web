import { Nav } from "@/components/nav";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Sectors } from "@/components/sections/sectors";
import { Problems } from "@/components/sections/problems";
import { Agents } from "@/components/sections/agents";
import { DarkCta } from "@/components/sections/dark-cta";
import { Solutions } from "@/components/sections/solutions";
import { Compliance } from "@/components/sections/compliance";
import { Process } from "@/components/sections/process";
import { ClosingContact } from "@/components/sections/closing-contact";
import { Footer } from "@/components/sections/footer";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LagreenLabs",
  description:
    "Consultoría en automatización, inteligencia artificial y soluciones digitales para salud.",
  email: SITE.email,
  areaServed: "CO",
  knowsAbout: [
    "Automatización de procesos en salud",
    "Agentes de inteligencia artificial",
    "Agendamiento y recordatorios",
    "Cobranza y cartera",
    "PQRS y atención al usuario",
    "Telemedicina",
    "Calidad y cumplimiento normativo",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Sectors />
        <Problems />
        <Agents />
        <DarkCta />
        <Solutions />
        <Compliance />
        <Process />
        <ClosingContact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
