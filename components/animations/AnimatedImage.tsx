"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AnimatedImage({
  src,
  alt,
  sizes,
  className = "",
  containerClassName = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-gold-border ${containerClassName}`}
      initial={reduce ? undefined : { opacity: 0, scale: 1.08 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${className}`}
        sizes={sizes ?? "(min-width: 1024px) 40vw, 100vw"}
      />
    </motion.div>
  );
}
