import { ArrowRight, ShoppingBag } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE } from "@/lib/site";
import porkBeef from "@/assets/product-pork-beef.jpg";
import sausage from "@/assets/product-sausage.jpg";
import cutting from "@/assets/product-cutting.jpg";
import game from "@/assets/product-game.jpg";
import smoking from "@/assets/product-smoking.jpg";
import cheese from "@/assets/product-cheese.jpg";
import bread from "@/assets/product-bread.jpg";
import party from "@/assets/product-party.jpg";

const services = [
  { img: porkBeef, title: "Pork & Beef", desc: "Cortes premium de res y cerdo, frescos cada día." },
  { img: sausage, title: "Homemade Sausage", desc: "Salchichas y embutidos caseros con receta tradicional." },
  { img: cutting, title: "Custom Meat Cutting", desc: "Cortes y empaque a tu medida, listos para llevar." },
  { img: game, title: "Game Processing", desc: "Procesamiento profesional de caza y embutidos especiales." },
  { img: smoking, title: "Curing & Smoking", desc: "Curados y ahumados estilo casero con maderas selectas." },
  { img: cheese, title: "European Cheeses", desc: "Selección de quesos europeos y delicatessen importados." },
  { img: bread, title: "Specialty Breads", desc: "Panes especiales horneados frescos cada día." },
  { img: party, title: "Party Trays & Catering", desc: "Tablas de carnes, quesos y catering para eventos." },
];

export function Services() {
  return (
    <section id="productos" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Nuestra carta
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-foreground text-balance">
            Nuestros Productos y Servicios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
            Desde el corte fresco hasta la mesa de tu evento, todo bajo un mismo techo
            con la atención personalizada que nos caracteriza.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-base sm:text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <a
                  href={SITE.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Ver más <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 flex justify-center">
          <CTAButton href={SITE.store} external variant="primary" size="lg">
            <ShoppingBag className="w-5 h-5" /> Comprar en la tienda online
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
