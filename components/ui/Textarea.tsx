import { TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={5}
      className={clsx(
        "w-full border border-gold-border bg-panel px-4 py-3 text-cream placeholder:text-cream-muted focus:border-gold focus:outline-none rounded-[2px] font-body font-light",
        className
      )}
      {...props}
    />
  );
});
