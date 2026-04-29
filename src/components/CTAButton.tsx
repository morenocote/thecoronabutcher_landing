import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "gold" | "outline";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  href?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[var(--shadow-cta)] hover:shadow-[0_14px_36px_-8px_oklch(0.45_0.2_25/0.55)]",
  secondary:
    "bg-dark text-dark-foreground hover:bg-dark/90 shadow-[var(--shadow-cta)]",
  gold:
    "bg-gold text-gold-foreground hover:bg-gold/90 shadow-[var(--shadow-cta)]",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ variant = "primary", size = "md", className, href, external, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className,
    );

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
CTAButton.displayName = "CTAButton";
