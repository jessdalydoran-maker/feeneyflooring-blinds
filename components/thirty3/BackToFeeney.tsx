export function BackToFeeney() {
  return (
    <a
      href="/"
      className="fixed top-5 left-5 z-50 flex items-center gap-2 rounded border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-t3-white backdrop-blur-sm transition-colors hover:text-t3-gold"
      style={{ borderColor: "var(--t3-gold-border)", background: "rgba(13,13,13,0.55)" }}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M11 4 4 11l7 7 1.4-1.4L8.8 12H20v-2H8.8l3.6-3.6Z" />
      </svg>
      Feeney Flooring &amp; Blinds
    </a>
  );
}
