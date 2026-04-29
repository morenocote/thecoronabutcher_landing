import { MapPin, Phone, ShoppingBag, Mail } from "lucide-react";
import logo from "@/assets/logo-footer.png";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#catering", label: "Catering" },
  { href: "#contacto", label: "Contacto" },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88V14.9H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98C18.34 21.12 22 16.99 22 12z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M21.35 11.1H12v2.9h5.35c-.23 1.4-1.66 4.1-5.35 4.1-3.22 0-5.85-2.66-5.85-5.95S8.78 6.2 12 6.2c1.84 0 3.07.78 3.78 1.45l2.57-2.48C16.78 3.7 14.6 2.8 12 2.8 6.92 2.8 2.8 6.92 2.8 12s4.12 9.2 9.2 9.2c5.31 0 8.83-3.73 8.83-8.98 0-.6-.07-1.07-.18-1.52z"/>
  </svg>
);

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.google.com/search?q=The+Corona+Butcher+Calgary", label: "Google", Icon: GoogleIcon },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt={SITE.name} loading="lazy" decoding="async" width={160} height={160} className="h-24 w-auto rounded-lg" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed">{SITE.tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-gold">Navegación</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-white transition">{l.label}</a>
                </li>
              ))}
              <li>
                <a href={SITE.store} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gold hover:text-gold/80 font-medium transition">
                  <ShoppingBag className="w-4 h-4" /> Tienda online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-gold">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />{SITE.address}</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href={`mailto:${SITE.emailOrders}`} className="hover:text-white break-all">{SITE.emailOrders}</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href={`mailto:${SITE.emailCatering}`} className="hover:text-white break-all">{SITE.emailCatering}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-gold">Horarios</h3>
            <ul className="mt-5 space-y-1.5 text-sm text-white/70">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className={h.time === "Closed" ? "text-primary font-medium" : "text-white/90"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-white/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-display italic text-gold">Fresh service. Local attention.</p>
        </div>

        <div className="mt-4 text-center text-xs text-white/50">
          Desarrollado por{" "}
          <a
            href="https://rcwinnovation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 font-semibold transition"
          >
            Rcw Innovation Inc
          </a>
        </div>
      </div>
    </footer>
  );
}
