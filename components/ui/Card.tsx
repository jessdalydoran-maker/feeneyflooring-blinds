import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "group relative border border-gold-border bg-panel p-8 rounded-[2px] transition-colors duration-300 hover:border-gold",
        className
      )}
      {...props}
    >
      <span className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      {children}
    </div>
  );
}
