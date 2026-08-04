import { Resend } from "resend";
import { render } from "@react-email/components";

import BookingConfirmation, {
  type BookingConfirmationProps,
} from "@/emails/BookingConfirmation";
import AppointmentReminder, {
  type AppointmentReminderProps,
} from "@/emails/AppointmentReminder";
import NewBookingNotification, {
  type NewBookingNotificationProps,
} from "@/emails/NewBookingNotification";
import QuoteConfirmation, {
  type QuoteConfirmationProps,
} from "@/emails/QuoteConfirmation";
import FollowUp, { type FollowUpProps } from "@/emails/FollowUp";
import ReviewRequest, { type ReviewRequestProps } from "@/emails/ReviewRequest";

export type BookingType = "showroom_visit" | "home_measurement";

export interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Maps the internal booking type enum to human-readable copy used across
 * both the send helpers below and the email templates themselves.
 */
export function formatBookingType(type: BookingType): string {
  return type === "showroom_visit" ? "showroom visit" : "home measurement";
}

/**
 * Returns a configured Resend client, or null if RESEND_API_KEY isn't set.
 * Mirrors the graceful-degradation pattern used in app/actions.ts — callers
 * should no-op rather than throw when this returns null.
 */
export function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function formatScheduledAtForSubject(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * Sends via Resend and always resolves (never throws) with a result the
 * caller can act on. Resend's SDK returns `{ data, error }` rather than
 * throwing on API-level failures (e.g. an unverified sending domain), so
 * without this check a failed send would silently look identical to a
 * successful one.
 */
async function send(
  params: Parameters<Resend["emails"]["send"]>[0],
  context: string
): Promise<EmailResult> {
  const resend = getResendClient();
  if (!resend) return { success: false, error: "resend_not_configured" };

  const { error } = await resend.emails.send(params);

  if (error) {
    console.error(`[Resend] Failed to send ${context}:`, error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function sendBookingConfirmationEmail(
  to: string,
  props: BookingConfirmationProps
): Promise<EmailResult> {
  const html = await render(BookingConfirmation(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
      to,
      subject: "Your appointment with Feeney Flooring & Blinds is confirmed",
      html,
    },
    "booking confirmation"
  );
}

export async function sendAppointmentReminderEmail(
  to: string,
  props: AppointmentReminderProps
): Promise<EmailResult> {
  const html = await render(AppointmentReminder(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
      to,
      subject: "Reminder: Your Feeney Flooring appointment is tomorrow",
      html,
    },
    "appointment reminder"
  );
}

export async function sendNewBookingNotificationEmail(
  to: string | string[],
  props: NewBookingNotificationProps
): Promise<EmailResult> {
  const html = await render(NewBookingNotification(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
      to,
      subject: `New ${formatBookingType(props.bookingType)} — ${props.customerName} — ${formatScheduledAtForSubject(
        props.scheduledAt
      )}`,
      html,
    },
    "new booking notification"
  );
}

export async function sendQuoteConfirmationEmail(
  to: string,
  props: QuoteConfirmationProps
): Promise<EmailResult> {
  const html = await render(QuoteConfirmation(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
      to,
      subject: "We've received your quote request — Feeney Flooring & Blinds",
      html,
    },
    "quote confirmation"
  );
}

export async function sendFollowUpEmail(
  to: string,
  props: FollowUpProps
): Promise<EmailResult> {
  const html = await render(FollowUp(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
      to,
      subject: "Still thinking about new flooring? We're here to help.",
      html,
    },
    "follow-up"
  );
}

export async function sendReviewRequestEmail(
  to: string,
  props: ReviewRequestProps
): Promise<EmailResult> {
  const html = await render(ReviewRequest(props));
  return send(
    {
      from: "Feeney Flooring & Blinds <updates@feeneyflooring.co.uk>",
      to,
      subject: "How did we do? — Feeney Flooring & Blinds",
      html,
    },
    "review request"
  );
}
