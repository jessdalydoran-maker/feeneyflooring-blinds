export function EmptyState({
  message = "Connect Supabase to see live data — add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your environment.",
}: {
  message?: string;
}) {
  return (
    <div className="border border-gold-border bg-panel rounded-2xl px-8 py-12 text-center">
      <p className="text-cream-dim font-light">{message}</p>
    </div>
  );
}
