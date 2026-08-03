import * as React from "react";
import { Button, Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";

/**
 * Subject line (constructed in lib/resend.ts):
 * "Still thinking about new flooring? We're here to help."
 */
export interface FollowUpProps {
  name: string;
  quoteUrl?: string;
}

export default function FollowUp({ name, quoteUrl }: FollowUpProps) {
  const firstName = name.split(" ")[0] || name;

  return (
    <EmailLayout previewText="No pressure — just checking in on your flooring or blinds enquiry">
      <Text style={styles.heading}>Still thinking it over?</Text>
      <Text style={styles.text}>Hi {firstName},</Text>
      <Text style={styles.text}>
        A little while back you got in touch with Feeney Flooring &amp; Blinds &mdash; no pressure
        at all, we just wanted to check in and see if you had any questions we can help with.
      </Text>
      <Text style={styles.text}>
        If you&apos;d like to take the next step, you can book a free measure below, or if
        you&apos;ve just got a quick question, Flynn (our chat assistant on the website) is
        available any time to point you in the right direction.
      </Text>

      {quoteUrl ? (
        <Button href={quoteUrl} style={styles.button}>
          Book a free measure
        </Button>
      ) : null}

      <Text style={{ ...styles.text, marginTop: "24px" }}>
        Prefer to talk it through? Call Kevin on{" "}
        <Link href="tel:07720981809" style={styles.link}>
          07720 981809
        </Link>{" "}
        or message us on{" "}
        <Link href="https://wa.me/447720981809" style={styles.link}>
          WhatsApp
        </Link>
        .
      </Text>
    </EmailLayout>
  );
}
