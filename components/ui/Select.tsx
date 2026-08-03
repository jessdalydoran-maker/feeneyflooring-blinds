import { SelectHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={clsx(
        "w-full border border-gold-border bg-panel px-4 py-3 text-cream focus:border-gold focus:outline-none rounded-[2px] font-body font-light",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});
