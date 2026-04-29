import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por WhatsApp ${SITE.whatsappNumber}`}
      title={`WhatsApp ${SITE.whatsappNumber}`}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500" />
    </a>
  );
}
