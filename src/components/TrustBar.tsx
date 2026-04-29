import { HeartHandshake, Beef, Hammer, Truck } from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Atención local personalizada",
    desc: "Te conocemos por tu nombre y entendemos lo que buscas.",
  },
  {
    icon: Beef,
    title: "Carnes frescas de alta calidad",
    desc: "Selección diaria de cortes premium de res y cerdo.",
  },
  {
    icon: Hammer,
    title: "Productos artesanales",
    desc: "Embutidos caseros, ahumados y curados a la antigua.",
  },
  {
    icon: Truck,
    title: "Pedidos y catering",
    desc: "Listos para servir en eventos, reuniones y celebraciones.",
  },
];

export function TrustBar() {
  return (
    <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[var(--shadow-card-hover)] border border-border/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`p-6 lg:p-8 flex gap-4 ${
              i < items.length - 1 ? "md:border-r border-border/60" : ""
            } ${i < 2 ? "border-b md:border-b-0 lg:border-b-0" : ""} ${
              i === 1 ? "lg:border-r" : ""
            } ${i === 2 ? "border-b lg:border-b-0" : ""}`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
              <it.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-base text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
