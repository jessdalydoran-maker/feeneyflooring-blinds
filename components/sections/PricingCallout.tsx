export function PricingCallout({
  price,
  unit = "per m²",
  note,
}: {
  price: string;
  unit?: string;
  note?: string;
}) {
  return (
    <div className="inline-flex flex-col items-start border border-gold-border bg-panel px-8 py-6 rounded-[2px]">
      <span className="eyebrow">From</span>
      <span className="font-display text-5xl text-gold">{price}</span>
      <span className="text-sm font-light text-cream-dim">{unit}</span>
      {note && <span className="mt-2 text-xs font-light text-cream-muted">{note}</span>}
    </div>
  );
}
