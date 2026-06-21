import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={30} weight="fill" />
    </a>
  );
}
