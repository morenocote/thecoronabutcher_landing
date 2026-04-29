import { useEffect, useState } from "react";
import logo from "@/assets/logo-transparent.png";

export function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1700);
    const t2 = setTimeout(() => setPhase("gone"), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Cinematic light backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(1 0 0) 0%, oklch(0.96 0.01 60) 60%, oklch(0.92 0.02 60) 100%)",
        }}
      />
      {/* Brand glow */}
      <div
        className="absolute w-[520px] h-[520px] max-w-[85vw] max-h-[85vw] rounded-full opacity-30 blur-3xl splash-glow"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      <div className="relative flex flex-col items-center splash-pop">
        <img
          src={logo}
          alt="The Corona Butcher"
          fetchPriority="high"
          decoding="async"
          width={240}
          height={240}
          className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
        />
        <div className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-full splash-bar bg-gradient-to-r from-primary via-gold to-primary" />
        </div>
        <p className="mt-4 font-display italic text-sm text-foreground/70 tracking-wide">
          Fresh service · Local attention
        </p>
      </div>
    </div>
  );
}
