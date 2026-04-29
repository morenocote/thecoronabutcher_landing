import { Tag, Snowflake, PartyPopper, CroissantIcon, ShoppingBag } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE } from "@/lib/site";
import sausages from "@/assets/sausages.webp";

const items = [
  { icon: Tag, title: "Weekly Butcher Specials", desc: "Promociones semanales en cortes seleccionados." },
  { icon: Snowflake, title: "Freezer Specials", desc: "Paquetes para congelador con excelente precio." },
  { icon: PartyPopper, title: "Party Trays", desc: "Tablas listas para impresionar a tus invitados." },
  { icon: CroissantIcon, title: "Specialty Breads", desc: "Panes artesanales horneados frescos cada día." },
];

export function Specials() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card-hover)]">
              <img src={sausages} alt="Embutidos artesanales" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-bold uppercase tracking-widest">
                  Especiales
                </span>
                <p className="mt-3 font-display text-2xl font-semibold">
                  Frescura, sabor y precio justo cada semana.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Valor diferencial
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Especiales que no querrás perderte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Promociones rotativas, paquetes para congelador y productos exclusivos
              hechos en casa. Todo con la calidad que nos define.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="flex gap-4 p-5 bg-card rounded-xl border border-border/60 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <it.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton href={SITE.store} external variant="primary" size="lg">
                <ShoppingBag className="w-5 h-5" /> Ver productos
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
