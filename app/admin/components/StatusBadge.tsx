import clsx from "clsx";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-gold-subtle text-gold border-gold-border",
  contacted: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  quoted: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  booked: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  complete: "bg-cream/10 text-cream-dim border-cream/10",
  confirmed: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  cancelled: "bg-red-500/10 text-red-300 border-red-500/20",
  completed: "bg-cream/10 text-cream-dim border-cream/10",
  sent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  failed: "bg-red-500/10 text-red-300 border-red-500/20",
  pending: "bg-gold-subtle text-gold border-gold-border",
};

export function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? "bg-panel-2 text-cream-dim border-gold-border";
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full border text-[10px] uppercase tracking-[0.12em] font-medium whitespace-nowrap",
        style
      )}
    >
      {status.replace(/_/g, " ")}
    </span>
  );
}

export function HighPriorityBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-gold bg-gold-subtle text-gold text-[10px] uppercase tracking-[0.12em] font-semibold whitespace-nowrap">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      High Priority
    </span>
  );
}
