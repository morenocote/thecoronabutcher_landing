import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marta R.",
    role: "Cliente local · Calgary",
    text: "Las mejores carnes que he probado en Calgary. La atención es cercana y siempre encuentro cortes frescos y de calidad.",
    initials: "MR",
  },
  {
    name: "Jonathan K.",
    role: "Anfitrión de eventos",
    text: "Pedí una tabla de embutidos y quesos para una reunión y fue un éxito total. Profesionales y muy detallistas.",
    initials: "JK",
  },
  {
    name: "Sofía L.",
    role: "Cliente frecuente",
    text: "Los embutidos caseros y los panes especiales son únicos. Se nota la tradición y el cuidado en cada producto.",
    initials: "SL",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Testimonios
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base text-foreground leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
