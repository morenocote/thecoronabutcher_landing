import { useState } from "react";
import { Check, ZoomIn } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Lightbox } from "./Lightbox";
import tray1 from "@/assets/catering-tray-1.jpg";
import tray2 from "@/assets/catering-tray-2.jpg";
import tray3 from "@/assets/catering-tray-3.jpg";
import tray4 from "@/assets/catering-tray-4.jpg";

const options = [
  "Meat & Cheese Trays",
  "Sandwich trays",
  "Menús personalizados",
  "Opciones listas para servir",
];

const gallery = [
  { src: tray1, alt: "Bandeja de catering con carnes curadas y quesos europeos" },
  { src: tray2, alt: "Bandeja de sandwiches gourmet para catering" },
  { src: tray3, alt: "Tabla grande de charcutería para eventos" },
  { src: tray4, alt: "Bandeja de carnes asadas para catering" },
];

export function Catering() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="catering" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Catering
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-foreground text-balance leading-tight">
              Catering para eventos y reuniones
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground text-balance">
              The Corona Butcher ofrece opciones de catering ideales para reuniones familiares,
              eventos corporativos, celebraciones y ocasiones especiales.
            </p>

            <ul className="mt-8 space-y-3">
              {options.map((o) => (
                <li key={o} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </span>
                  <span className="text-base font-medium text-foreground">{o}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTAButton href="#catering-form" variant="primary" size="lg">
                Solicitar Cotización
              </CTAButton>
            </div>
          </div>

          {/* Modern editorial mosaic gallery */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-gold/10 to-transparent rounded-[2.5rem] blur-3xl -z-10" />

            {/* Mobile: clean 2x2 + 1 wide. Desktop: editorial asymmetric */}
            <div className="grid grid-cols-2 sm:grid-cols-12 auto-rows-[110px] sm:auto-rows-[130px] gap-3 sm:gap-4">
              {/* Hero — large featured */}
              <button
                type="button"
                onClick={() => setOpenIndex(0)}
                aria-label={`Ampliar imagen: ${gallery[0].alt}`}
                className="group relative col-span-2 sm:col-span-7 row-span-2 sm:row-span-3 overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/15 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-white text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-white font-display text-lg sm:text-2xl font-bold leading-tight">
                      Charcuterie & Quesos
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mt-1">Selección premium europea</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-white/95 text-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </button>

              {/* Top right small */}
              <button
                type="button"
                onClick={() => setOpenIndex(1)}
                aria-label={`Ampliar imagen: ${gallery[1].alt}`}
                className="group relative col-span-1 sm:col-span-5 row-span-1 sm:row-span-2 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img src={gallery[1].src} alt={gallery[1].alt} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs sm:text-sm font-semibold">
                  Sandwich Trays
                </span>
              </button>

              {/* Right middle small */}
              <button
                type="button"
                onClick={() => setOpenIndex(2)}
                aria-label={`Ampliar imagen: ${gallery[2].alt}`}
                className="group relative col-span-1 sm:col-span-5 row-span-1 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img src={gallery[2].src} alt={gallery[2].alt} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition" />
              </button>

              {/* Bottom wide banner */}
              <button
                type="button"
                onClick={() => setOpenIndex(3)}
                aria-label={`Ampliar imagen: ${gallery[3].alt}`}
                className="group relative col-span-2 sm:col-span-12 row-span-1 sm:row-span-2 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img src={gallery[3].src} alt={gallery[3].alt} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/30 to-transparent" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 max-w-[70%]">
                  <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">Listas para servir</span>
                  <p className="text-white font-display text-base sm:text-xl font-semibold mt-1 leading-snug">
                    Bandejas elegantes para cualquier ocasión
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={gallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </section>
  );
}
