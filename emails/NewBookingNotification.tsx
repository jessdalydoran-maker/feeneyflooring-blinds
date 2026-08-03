import * as React from "react";
import { Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";
import { formatScheduledAt } from "@/emails/components/format";
import { formatBookingType } from "@/lib/resend";

/**
 * Internal email TO Kevin (not the customer).
 * Subject pattern (constructed in lib/resend.ts):
 * "New [booking type] — [customer name] — [date/time]"
 */
export interface NewBookingNotificationProps {
  customerName: string;
  customerPhone?: string | null;
  customerEmail?: string | null;
  bookingType: "showroom_visit" | "home_measurement";
  scheduledAt: string; // ISO
  notes?: string | null;
}

export default function NewBookingNotification({
  customerName,
  customerPhone,
  customerEmail,
  bookingType,
  scheduledAt,
  notes,
}: NewBookingNotificationProps) {
  const when = formatScheduledAt(scheduledAt);

  return (
    <EmailLayout previewText={`New ${formatBookingType(bookingType)} booked — ${customerName}`}>
      <Text style={styles.heading}>New booking</Text>

      <Text style={styles.text}>
        <strong>Customer:</strong> {customerName}
      </Text>
      <Text style={styles.text}>
        <strong>Phone:</strong>{" "}
        {customerPhone ? (
          <Link href={`tel:${customerPhone}`} style={styles.link}>
            {customerPhone}
          </Link>
        ) : (
          "Not provided"
        )}
      </Text>
      <Text style={styles.text}>
        <strong>Email:</strong>{" "}
        {customerEmail ? (
          <Link href={`mailto:${customerEmail}`} style={styles.link}>
            {customerEmail}
          </Link>
        ) : (
          "Not provided"
        )}
      </Text>
      <Text style={styles.text}>
        <strong>Booking type:</strong> {formatBookingType(bookingType)}
      </Text>
      <Text style={styles.text}>
        <strong>Scheduled for:</strong> {when}
      </Text>
      <Text style={styles.text}>
        <strong>Notes:</strong> {notes ? notes : "None"}
      </Text>
    </EmailLayout>
  );
}
