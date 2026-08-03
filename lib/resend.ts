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

export async function sendBookingConfirmationEmail(
  to: string,
  props: BookingConfirmationProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(BookingConfirmation(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
    to,
    subject: "Your appointment with Feeney Flooring & Blinds is confirmed",
    html,
  });
}

export async function sendAppointmentReminderEmail(
  to: string,
  props: AppointmentReminderProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(AppointmentReminder(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
    to,
    subject: "Reminder: Your Feeney Flooring appointment is tomorrow",
    html,
  });
}

export async function sendNewBookingNotificationEmail(
  to: string | string[],
  props: NewBookingNotificationProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(NewBookingNotification(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <bookings@feeneyflooring.co.uk>",
    to,
    subject: `New ${formatBookingType(props.bookingType)} — ${props.customerName} — ${formatScheduledAtForSubject(
      props.scheduledAt
    )}`,
    html,
  });
}

export async function sendQuoteConfirmationEmail(
  to: string,
  props: QuoteConfirmationProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(QuoteConfirmation(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
    to,
    subject: "We've received your quote request — Feeney Flooring & Blinds",
    html,
  });
}

export async function sendFollowUpEmail(
  to: string,
  props: FollowUpProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(FollowUp(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
    to,
    subject: "Still thinking about new flooring? We're here to help.",
    html,
  });
}

export async function sendReviewRequestEmail(
  to: string,
  props: ReviewRequestProps
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const html = await render(ReviewRequest(props));

  await resend.emails.send({
    from: "Feeney Flooring & Blinds <updates@feeneyflooring.co.uk>",
    to,
    subject: "How did we do? — Feeney Flooring & Blinds",
    html,
  });
}
