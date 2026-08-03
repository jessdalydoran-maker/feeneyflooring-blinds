import * as React from "react";
import { Button, Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";

/**
 * Subject line (constructed in lib/resend.ts):
 * "How did we do? — Feeney Flooring & Blinds"
 */
export interface ReviewRequestProps {
  name: string;
  googleReviewUrl: string;
  facebookReviewUrl: string;
}

export default function ReviewRequest({
  name,
  googleReviewUrl,
  facebookReviewUrl,
}: ReviewRequestProps) {
  const firstName = name.split(" ")[0] || name;

  return (
    <EmailLayout previewText="How did we do? A quick review would mean the world">
      <Text style={styles.heading}>How did we do?</Text>
      <Text style={styles.text}>Hi {firstName},</Text>
      <Text style={styles.text}>
        We hope you&apos;re loving your new flooring or blinds! It would mean a lot if you could
        take two minutes to leave us a review &mdash; it only takes 2 minutes and helps other local
        families find us.
      </Text>

      <Button href={googleReviewUrl} style={styles.button}>
        Leave a Google review
      </Button>

      <Text style={{ ...styles.text, marginTop: "20px" }}>
        Prefer Facebook?{" "}
        <Link href={facebookReviewUrl} style={styles.link}>
          Leave a review there instead
        </Link>
        .
      </Text>

      <Text style={styles.text}>Thanks so much for choosing Feeney Flooring &amp; Blinds.</Text>
    </EmailLayout>
  );
}
