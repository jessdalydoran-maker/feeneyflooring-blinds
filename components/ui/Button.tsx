import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-near-black hover:bg-gold-light border border-gold",
  secondary:
    "bg-transparent text-cream border border-gold-border hover:border-gold",
  ghost: "bg-transparent text-cream-dim hover:text-gold underline",
};

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 rounded-[2px]";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = clsx(base, variantClasses[variant], className);
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
