import * as React from "react";
import { Button, Hr, Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";
import { formatScheduledAt } from "@/emails/components/format";
import { formatBookingType } from "@/lib/resend";

/**
 * Subject line (constructed in lib/resend.ts):
 * "Reminder: Your Feeney Flooring appointment is tomorrow"
 */
export interface AppointmentReminderProps {
  name: string;
  bookingType: "showroom_visit" | "home_measurement";
  scheduledAt: string; // ISO
  rescheduleUrl?: string;
}

export default function AppointmentReminder({
  name,
  bookingType,
  scheduledAt,
  rescheduleUrl,
}: AppointmentReminderProps) {
  const isShowroomVisit = bookingType === "showroom_visit";
  const firstName = name.split(" ")[0] || name;
  const when = formatScheduledAt(scheduledAt);

  return (
    <EmailLayout previewText={`Just a reminder — your ${formatBookingType(bookingType)} is tomorrow`}>
      <Text style={styles.heading}>See you tomorrow</Text>
      <Text style={styles.text}>Hi {firstName},</Text>
      <Text style={styles.text}>
        Just a quick reminder about your <strong>{formatBookingType(bookingType)}</strong> with
        Feeney Flooring &amp; Blinds:
      </Text>
      <Text style={{ ...styles.text, color: styles.heading.color, fontWeight: 700, fontSize: "18px" }}>
        {when}
      </Text>

      {isShowroomVisit ? (
        <Text style={styles.text}>
          We&apos;re at 32-34 Main Street, Crumlin, BT29 4UP &mdash; plenty of parking right
          outside.
        </Text>
      ) : (
        <Text style={styles.text}>
          Kevin will come to you &mdash; just make sure he can access the rooms you&apos;d like
          measured.
        </Text>
      )}

      <Text style={styles.text}>
        Need anything before then? Call Kevin on{" "}
        <Link href="tel:07720981809" style={styles.link}>
          07720 981809
        </Link>
        .
      </Text>

      {rescheduleUrl ? (
        <>
          <Hr style={styles.hr} />
          <Text style={styles.text}>Need to reschedule?</Text>
          <Button href={rescheduleUrl} style={styles.button}>
            Reschedule appointment
          </Button>
        </>
      ) : null}
    </EmailLayout>
  );
}
