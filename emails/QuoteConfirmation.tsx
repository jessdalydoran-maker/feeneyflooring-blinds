import * as React from "react";
import { Link, Text } from "@react-email/components";

import { EmailLayout, styles } from "@/emails/components/EmailLayout";

/**
 * Subject line (constructed in lib/resend.ts):
 * "We've received your quote request — Feeney Flooring & Blinds"
 */
export interface QuoteConfirmationProps {
  name: string;
  serviceType: "flooring" | "blinds" | "both";
  roomType?: string | null;
  budget?: string | null;
  timescale?: string | null;
}

function serviceTypeLabel(serviceType: QuoteConfirmationProps["serviceType"]): string {
  switch (serviceType) {
    case "flooring":
      return "flooring";
    case "blinds":
      return "blinds";
    case "both":
      return "flooring and blinds";
  }
}

export default function QuoteConfirmation({
  name,
  serviceType,
  roomType,
  budget,
  timescale,
}: QuoteConfirmationProps) {
  const firstName = name.split(" ")[0] || name;

  return (
    <EmailLayout previewText="Thanks for your enquiry — Kevin will be in touch within 2 hours">
      <Text style={styles.heading}>Thanks for your enquiry</Text>
      <Text style={styles.text}>Hi {firstName},</Text>
      <Text style={styles.text}>
        Thanks for getting in touch with Feeney Flooring &amp; Blinds. Here&apos;s what we&apos;ve
        got down for you:
      </Text>

      <Text style={styles.text}>
        <strong>What you&apos;re after:</strong> {serviceTypeLabel(serviceType)}
        {roomType ? ` for the ${roomType}` : ""}
      </Text>
      {budget ? (
        <Text style={styles.text}>
          <strong>Budget:</strong> {budget}
        </Text>
      ) : null}
      {timescale ? (
        <Text style={styles.text}>
          <strong>Timescale:</strong> {timescale}
        </Text>
      ) : null}

      <Text style={styles.text}>
        Kevin will be in touch within 2 hours during opening hours. If it&apos;s urgent, give him a
        call on{" "}
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
