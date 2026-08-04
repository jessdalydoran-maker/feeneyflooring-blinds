import { getSupabaseAdmin, Booking, Contact } from "@/lib/supabase";
import { Eyebrow } from "@/components/ui/Badge";
import { EmptyState } from "@/app/(site)/admin/components/EmptyState";
import { StatusBadge } from "@/app/(site)/admin/components/StatusBadge";
import { formatDateTime } from "@/app/(site)/admin/lib/format";

const BOOKING_TYPE_LABELS: Record<Booking["booking_type"], string> = {
  showroom_visit: "Showroom Visit",
  home_measurement: "Home Measurement",
};

function BookingRow({
  booking,
  contactName,
}: {
  booking: Booking;
  contactName: string;
}) {
  return (
    <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-cream font-medium">
          {BOOKING_TYPE_LABELS[booking.booking_type] ?? booking.booking_type}
        </p>
        <p className="text-cream-dim text-sm">{contactName}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-cream-dim text-sm whitespace-nowrap">
          {formatDateTime(booking.scheduled_at)}
        </p>
        <StatusBadge status={booking.status} />
      </div>
    </div>
  );
}

export default async function AdminBookingsPage() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <div>
        <Eyebrow>Schedule</Eyebrow>
        <h1 className="font-display text-4xl text-cream mb-8">Bookings</h1>
        <EmptyState />
      </div>
    );
  }

  const [{ data: bookingsData }, { data: contactsData }] = await Promise.all([
    supabase
      .from("bookings")
      .select("*")
      .order("scheduled_at", { ascending: true }),
    supabase.from("contacts").select("id, name"),
  ]);

  const bookings = (bookingsData ?? []) as Booking[];
  const contactsById = new Map(
    ((contactsData ?? []) as Pick<Contact, "id" | "name">[]).map((c) => [
      c.id,
      c.name,
    ])
  );

  const now = Date.now();
  const upcoming = bookings.filter(
    (b) => !b.scheduled_at || new Date(b.scheduled_at).getTime() >= now
  );
  const past = bookings.filter(
    (b) => b.scheduled_at && new Date(b.scheduled_at).getTime() < now
  );

  return (
    <div>
      <Eyebrow>Schedule</Eyebrow>
      <h1 className="font-display text-4xl text-cream mb-8">Bookings</h1>

      <h2 className="font-display text-2xl text-cream mb-4">Upcoming</h2>
      <div className="border border-gold-border bg-panel rounded-2xl divide-y divide-gold-border/40 mb-12">
        {upcoming.length === 0 ? (
          <div className="px-6 py-8 text-center text-cream-dim font-light">
            No upcoming bookings.
          </div>
        ) : (
          upcoming.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              contactName={
                (booking.contact_id && contactsById.get(booking.contact_id)) ||
                "Unknown"
              }
            />
          ))
        )}
      </div>

      <h2 className="font-display text-2xl text-cream mb-4">Past</h2>
      <div className="border border-gold-border bg-panel rounded-2xl divide-y divide-gold-border/40">
        {past.length === 0 ? (
          <div className="px-6 py-8 text-center text-cream-dim font-light">
            No past bookings.
          </div>
        ) : (
          past.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              contactName={
                (booking.contact_id && contactsById.get(booking.contact_id)) ||
                "Unknown"
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
