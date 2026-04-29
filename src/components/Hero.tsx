import { useEffect, useState } from "react";
import { ShoppingBag, UtensilsCrossed, Beef, Sandwich, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/butcher-counter.webp";
import slide2 from "@/assets/fresh-meats.webp";
import slide3 from "@/assets/sausages.webp";
import slide4 from "@/assets/display-case.webp";
import { CTAButton } from "./CTAButton";

const slides = [
  { src: heroImg, alt: "Vitrina de carnicería con cortes premium" },
  { src: slide2, alt: "Carnes frescas de alta calidad" },
  { src: slide3, alt: "Embutidos artesanales caseros" },
  { src: slide4, alt: "Vitrinas de productos premium" },
];

const badges = [
  { icon: Beef, label: "Fresh meats" },
  { icon: Sandwich, label: "Homemade sausage" },
  { icon: UtensilsCrossed, label: "Catering available" },
  { icon: MapPin, label: "Local Calgary service" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) =>
    setCurrent((c) => (c + dir + slides.length) % slides.length);

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding={i === 0 ? "sync" : "async"}
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Calgary · Since day one
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05]">
            Carnes Premium,{" "}
            <span className="text-gradient-gold">Tradición Artesanal</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-white/85 max-w-2xl text-balance">
            Fresh service, local attention y calidad en cada corte. Descubre carnes premium,
            embutidos caseros y catering para toda ocasión.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CTAButton href="https://store.thecoronabutcher.ca/" external variant="primary" size="lg">
              <ShoppingBag className="w-5 h-5" /> Comprar Ahora
            </CTAButton>
            <CTAButton href="#catering" variant="outline" size="lg">
              <UtensilsCrossed className="w-5 h-5" /> Solicitar Catering
            </CTAButton>
          </div>

          <ul className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-sm font-medium"
              >
                <b.icon className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slider controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Imagen anterior"
        className="hidden sm:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Imagen siguiente"
        className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-8 bg-gold" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
