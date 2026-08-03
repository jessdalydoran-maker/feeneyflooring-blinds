import * as React from "react";
import { Button, Hr, Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";
import { formatScheduledAt } from "@/emails/components/format";
import { formatBookingType } from "@/lib/resend";

/**
 * Subject line (constructed in lib/resend.ts):
 * "Your appointment with Feeney Flooring & Blinds is confirmed"
 */
export interface BookingConfirmationProps {
  name: string;
  bookingType: "showroom_visit" | "home_measurement";
  scheduledAt: string; // ISO
  rescheduleUrl?: string;
}

export default function BookingConfirmation({
  name,
  bookingType,
  scheduledAt,
  rescheduleUrl,
}: BookingConfirmationProps) {
  const isShowroomVisit = bookingType === "showroom_visit";
  const firstName = name.split(" ")[0] || name;
  const when = formatScheduledAt(scheduledAt);

  return (
    <EmailLayout previewText={`Your ${formatBookingType(bookingType)} is confirmed for ${when}`}>
      <Text style={styles.heading}>You&apos;re all booked in</Text>
      <Text style={styles.text}>Hi {firstName},</Text>
      <Text style={styles.text}>
        Thanks for booking a <strong>{formatBookingType(bookingType)}</strong> with Feeney Flooring
        &amp; Blinds. We&apos;ve confirmed your appointment for:
      </Text>
      <Text style={{ ...styles.text, color: styles.heading.color, fontWeight: 700, fontSize: "18px" }}>
        {when}
      </Text>

      {isShowroomVisit ? (
        <Text style={styles.text}>
          We&apos;re at 32-34 Main Street, Crumlin, BT29 4UP. Pop in any time during your slot, no
          need to bring anything &mdash; we&apos;ll have samples ready for you.
        </Text>
      ) : (
        <Text style={styles.text}>
          No need to come to us &mdash; Kevin will come to you. Just make sure Kevin can access the
          rooms you&apos;d like measured.
        </Text>
      )}

      <Text style={styles.text}>
        Questions before then? Call Kevin on{" "}
        <Link href="tel:07720981809" style={styles.link}>
          07720 981809
        </Link>{" "}
        or message us on{" "}
        <Link href="https://wa.me/447720981809" style={styles.link}>
          WhatsApp
        </Link>
        .
      </Text>

      {rescheduleUrl ? (
        <>
          <Hr style={styles.hr} />
          <Text style={styles.text}>Can&apos;t make it?</Text>
          <Button href={rescheduleUrl} style={styles.button}>
            Reschedule appointment
          </Button>
        </>
      ) : null}
    </EmailLayout>
  );
}
