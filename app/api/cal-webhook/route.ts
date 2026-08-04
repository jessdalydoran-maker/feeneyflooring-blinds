import { NextRequest } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { bookingTypeFromEventSlug, type CalWebhookPayload } from "@/lib/cal";
import { calculateLeadScore } from "@/lib/lead-scoring";
import { sendBookingConfirmationEmail, sendNewBookingNotificationEmail } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (secret) {
    const signature = req.headers.get("x-cal-signature-256");
    if (signature !== secret) {
      return Response.json({ error: "invalid_signature" }, { status: 401 });
    }
  }

  const body: CalWebhookPayload = await req.json();

  if (body.triggerEvent !== "BOOKING_CREATED" && body.triggerEvent !== "BOOKING_CONFIRMED") {
    return Response.json({ ok: true, ignored: true });
  }

  const { payload } = body;
  const attendee = payload.attendees[0];
  const name = payload.responses?.name?.value ?? attendee?.name ?? "Unknown";
  const email = payload.responses?.email?.value ?? attendee?.email ?? null;
  const phone = payload.responses?.phone?.value ?? null;
  const bookingType = bookingTypeFromEventSlug(payload.eventType?.slug);

  const supabase = getSupabaseAdmin();
  let contactId: string | null = null;

  if (supabase) {
    const leadScore = calculateLeadScore({ phone, email, hasBooking: true });

    const { data: contact } = await supabase
      .from("contacts")
      .insert({
        name,
        phone,
        email,
        source: "booking",
        status: "booked",
        lead_score: leadScore,
        notes: payload.responses?.notes?.value ?? null,
      })
      .select()
      .single();

    contactId = contact?.id ?? null;

    await supabase.from("bookings").insert({
      contact_id: contactId,
      booking_type: bookingType,
      cal_booking_id: payload.uid,
      scheduled_at: payload.startTime,
      status: "confirmed",
      notes: payload.responses?.notes?.value ?? null,
    });
  }

  if (email) {
    const confirmationResult = await sendBookingConfirmationEmail(email, {
      name,
      bookingType,
      scheduledAt: payload.startTime,
    });

    if (supabase) {
      await supabase.from("email_log").insert({
        contact_id: contactId,
        email_type: "confirmation",
        subject: "Your appointment with Feeney Flooring & Blinds is confirmed",
        sent_at: new Date().toISOString(),
        status: confirmationResult.success ? "sent" : "failed",
      });
    }
  }

  const notificationResult = await sendNewBookingNotificationEmail("jessdalydoran@gmail.com", {
    customerName: name,
    customerPhone: phone,
    customerEmail: email,
    bookingType,
    scheduledAt: payload.startTime,
    notes: payload.responses?.notes?.value ?? null,
  });

  if (supabase) {
    await supabase.from("email_log").insert({
      contact_id: contactId,
      email_type: "confirmation",
      subject: `New ${bookingType} — ${name}`,
      sent_at: new Date().toISOString(),
      status: notificationResult.success ? "sent" : "failed",
    });
  }

  return Response.json({ ok: true, contactId });
}
