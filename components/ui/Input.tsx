import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full border border-gold-border bg-panel px-4 py-3 text-cream placeholder:text-cream-muted focus:border-gold focus:outline-none rounded-[2px] font-body font-light",
          className
        )}
        {...props}
      />
    );
  }
);
