export function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border border-gold-border bg-panel rounded-2xl px-6 py-8 text-center">
      <p className="font-display text-4xl text-gold mb-2">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.2em] text-cream-dim">
        {label}
      </p>
    </div>
  );
}
