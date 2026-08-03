const items = [
  "5 Star Rated",
  "Free Measuring Service",
  "Supply & Fit",
  "Ville Stockist",
  "Clas Sen Stockist",
  "Johnstone's Trade",
  "98% Recommend on Facebook",
  "Est. 2017",
  "Crumlin Showroom",
  "Northern Ireland",
];

export function TrustStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold-border bg-panel py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 text-[11px] font-medium uppercase tracking-[0.2em] text-cream-dim"
          >
            {item} <span className="text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
