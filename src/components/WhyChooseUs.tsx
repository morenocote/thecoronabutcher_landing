import { CheckCircle2, Quote } from "lucide-react";
import storeImg from "@/assets/store-interior.webp";

const reasons = [
  "Atención local y personalizada",
  "Carnes frescas y de alta calidad",
  "Tradición artesanal en cada producto",
  "Embutidos, curados y ahumados caseros",
  "Servicio especializado para carne y caza",
  "Catering para eventos y reuniones",
];

export function WhyChooseUs() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-dark text-dark-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={storeImg}
              alt="Interior de The Corona Butcher en Calgary"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 max-w-xs bg-card text-card-foreground rounded-2xl p-6 shadow-2xl border-l-4 border-gold">
            <Quote className="w-8 h-8 text-gold" />
            <p className="mt-3 font-display text-xl font-semibold leading-snug">
              Quality you can taste. Service you can trust.
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-balance">
            Why Choose <span className="text-gradient-gold">The Corona Butcher</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 text-balance">
            Más que una carnicería: somos un equipo local que cuida la calidad,
            la frescura y la experiencia de cada cliente como si fuera familia.
          </p>

          <ul className="mt-10 space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg text-white/90">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
