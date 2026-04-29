import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

const inquiryTypes = [
  "General Inquiry",
  "Product Question",
  "Catering Request",
  "Custom Cutting",
  "Special Order",
];

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  eventDate: string;
  guests: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "Catering Request",
  eventDate: "",
  guests: "",
  message: "",
};

export function CateringForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre";
    if (!form.email.trim()) e.email = "Ingresa tu email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.phone.trim()) e.phone = "Ingresa un teléfono";
    if (!form.message.trim()) e.message = "Cuéntanos qué necesitas";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      // Mailto fallback — listo para integrar con Resend / EmailJS / Formspree
      const subject = encodeURIComponent(`[${form.inquiryType}] ${form.name}`);
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\n` +
          `Tipo de consulta: ${form.inquiryType}\nFecha del evento: ${form.eventDate || "N/A"}\n` +
          `Personas: ${form.guests || "N/A"}\n\nMensaje:\n${form.message}`,
      );
      window.location.href = `mailto:${SITE.emailCatering}?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-foreground placeholder:text-muted-foreground/70";

  return (
    <section id="catering-form" className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden gradient-primary p-1 shadow-[var(--shadow-card-hover)]">
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 sm:p-12">
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  Solicitud
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Cuéntanos sobre tu evento
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Completa el formulario y te responderemos con una cotización a la medida.
                  Tu solicitud se enviará directamente a nuestro equipo.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-secondary/60 text-sm">
                  <div className="font-semibold text-foreground">Respuesta directa</div>
                  <div className="text-muted-foreground mt-1 break-all">
                    Tu mensaje llegará a {SITE.emailCatering}
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} noValidate className="lg:col-span-3 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Nombre *</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputBase} aria-invalid={!!errors.name} required />
                    {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputBase} aria-invalid={!!errors.email} required />
                    {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Teléfono *</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputBase} aria-invalid={!!errors.phone} required />
                    {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium mb-1.5">Tipo de consulta</label>
                    <select id="inquiryType" value={form.inquiryType} onChange={(e) => update("inquiryType", e.target.value)} className={inputBase}>
                      {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium mb-1.5">Fecha del evento</label>
                    <input id="eventDate" type="date" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} className={inputBase} />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-1.5">Personas estimadas</label>
                    <input id="guests" type="number" min="1" value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputBase} placeholder="Ej. 25" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Mensaje *</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputBase} aria-invalid={!!errors.message} required />
                  {errors.message && <p className="text-xs text-primary mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold uppercase tracking-wider text-sm bg-primary text-primary-foreground hover:bg-primary-hover shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {status === "loading" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Enviar consulta</>
                  )}
                </button>

                {status === "success" && (
                  <div role="status" className="flex items-start gap-3 p-4 rounded-lg bg-green-50 text-green-900 border border-green-200">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">¡Solicitud enviada!</div>
                      <div>Te responderemos lo antes posible.</div>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="flex items-start gap-3 p-4 rounded-lg bg-red-50 text-red-900 border border-red-200">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Hubo un problema</div>
                      <div>Intenta de nuevo o llámanos al {SITE.phone}.</div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
