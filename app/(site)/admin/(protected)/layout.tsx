import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated, adminLogout } from "@/app/(site)/admin/actions";

const NAV_ITEMS = [
  { label: "Overview", href: "/admin" },
  { label: "Contacts", href: "/admin/contacts" },
  { label: "Bookings", href: "/admin/bookings" },
  { label: "Quotes", href: "/admin/quotes" },
  { label: "Chat Logs", href: "/admin/chat-logs" },
  { label: "Emails", href: "/admin/emails" },
];

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-near-black text-cream">
      <header className="border-b border-gold-border bg-panel">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <span className="font-display text-xl text-gold">
              Feeney Admin
            </span>
            <nav className="flex flex-wrap items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.15em] text-cream-dim hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <form action={adminLogout}>
            <button
              type="submit"
              className="text-[11px] uppercase tracking-[0.15em] text-cream-dim hover:text-gold transition-colors underline"
            >
              Log Out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
