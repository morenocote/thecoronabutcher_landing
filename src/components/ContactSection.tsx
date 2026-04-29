import { Phone, MapPin, Clock, Navigation, Mail } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Contacto
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Visítanos o contáctanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{SITE.tagline}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl border border-border/60 shadow-[var(--shadow-card)] p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground">{SITE.name}</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Dirección</div>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Teléfono</div>
                  <a href={SITE.phoneHref} className="text-muted-foreground hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <div className="font-semibold text-foreground">Email</div>
                  <ul className="text-muted-foreground space-y-1">
                    <li>
                      <a href={`mailto:${SITE.emailOrders}`} className="hover:text-primary break-all">
                        Pedidos: {SITE.emailOrders}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${SITE.emailCatering}`} className="hover:text-primary break-all">
                        Catering: {SITE.emailCatering}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-2">Horarios</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {SITE.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className={h.time === "Closed" ? "text-primary font-medium" : ""}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CTAButton href={SITE.phoneHref} variant="primary" size="md" className="flex-1">
                <Phone className="w-4 h-4" /> Llamar Ahora
              </CTAButton>
              <CTAButton href={SITE.maps} external variant="secondary" size="md" className="flex-1">
                <Navigation className="w-4 h-4" /> Cómo llegar
              </CTAButton>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-card)] min-h-[420px]">
            <iframe
              title="Mapa de The Corona Butcher"
              src="https://www.google.com/maps?q=1840+36+St+SE,+Calgary,+AB+T2B+0X6&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[420px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
