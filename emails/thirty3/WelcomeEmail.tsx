import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

/**
 * Subject line (constructed by the caller):
 * "Welcome to the thirty3coffee family ☕"
 *
 * Fully self-contained — no shared styles or components from the Feeney
 * Flooring & Blinds emails. Email clients don't support CSS variables or
 * web fonts reliably, so colours are hardcoded hex and headings use a bold
 * sans-serif fallback stack to approximate Space Grotesk.
 */
const colors = {
  black: "#0d0d0d",
  panel: "#1c1c1c",
  gold: "#f5c518",
  goldDark: "#d4a800",
  goldBorder: "rgba(245,197,24,0.25)",
  white: "#ffffff",
  offWhite: "#f5f0e8",
} as const;

const fonts = {
  heading: "'Arial Black', Arial, sans-serif",
  body: "Helvetica, Arial, sans-serif",
} as const;

const styles = {
  body: {
    backgroundColor: colors.black,
    fontFamily: fonts.body,
    margin: 0,
    padding: "32px 16px",
  } as React.CSSProperties,
  container: {
    backgroundColor: colors.panel,
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "4px",
    overflow: "hidden",
    border: `1px solid ${colors.goldBorder}`,
  } as React.CSSProperties,
  headerSection: {
    padding: "32px 32px 8px",
    textAlign: "center" as const,
  } as React.CSSProperties,
  bigThirtyThree: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: "48px",
    fontWeight: 900,
    margin: 0,
  } as React.CSSProperties,
  contentSection: {
    padding: "16px 32px 32px",
    textAlign: "center" as const,
  } as React.CSSProperties,
  heading: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: "24px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "0 0 16px",
  } as React.CSSProperties,
  text: {
    color: colors.offWhite,
    fontFamily: fonts.body,
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 16px",
    textAlign: "left" as const,
  } as React.CSSProperties,
  hoursBox: {
    border: `1px solid ${colors.goldBorder}`,
    borderRadius: "4px",
    padding: "18px 20px",
    margin: "0 0 24px",
    textAlign: "left" as const,
  } as React.CSSProperties,
  hoursRow: {
    color: colors.offWhite,
    fontFamily: fonts.body,
    fontSize: "14px",
    margin: "0 0 6px",
  } as React.CSSProperties,
  hoursValue: {
    color: colors.gold,
    fontWeight: 700,
  } as React.CSSProperties,
  button: {
    backgroundColor: colors.gold,
    color: colors.black,
    fontFamily: fonts.body,
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    textDecoration: "none",
    textAlign: "center" as const,
    padding: "14px 28px",
    borderRadius: "4px",
    display: "inline-block",
  } as React.CSSProperties,
  tagline: {
    color: colors.offWhite,
    fontFamily: fonts.body,
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "24px 0 0",
  } as React.CSSProperties,
  hr: {
    borderColor: colors.goldBorder,
    margin: "24px 0",
  } as React.CSSProperties,
  footerSection: {
    padding: "0 32px 32px",
    textAlign: "center" as const,
  } as React.CSSProperties,
  socialLink: {
    color: colors.gold,
    fontFamily: fonts.body,
    fontSize: "13px",
    textDecoration: "none",
    margin: "0 10px",
  } as React.CSSProperties,
  footerText: {
    color: colors.goldDark,
    fontFamily: fonts.body,
    fontSize: "11px",
    lineHeight: "1.6",
    margin: "16px 0 0",
  } as React.CSSProperties,
  unsubscribe: {
    color: "rgba(245,240,232,0.4)",
    fontFamily: fonts.body,
    fontSize: "11px",
    textDecoration: "underline",
  } as React.CSSProperties,
};

export interface WelcomeEmailProps {
  unsubscribeUrl?: string;
}

export default function WelcomeEmail({ unsubscribeUrl = "#" }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the thirty3coffee family ☕</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.headerSection}>
            <Text style={styles.bigThirtyThree}>33</Text>
          </Section>

          <Section style={styles.contentSection}>
            <Text style={styles.heading}>Welcome to the family.</Text>
            <Text style={styles.text}>
              Thanks for signing up. You&apos;ll be the first to hear about
              new menu items, specials, and what&apos;s on at thirty3coffee
              &mdash; nothing else, we promise.
            </Text>

            <div style={styles.hoursBox}>
              <Text style={styles.hoursRow}>
                Mon &mdash; Fri: <span style={styles.hoursValue}>7:00am &mdash; 3:00pm</span>
              </Text>
              <Text style={{ ...styles.hoursRow, margin: 0 }}>
                Sat &mdash; Sun: <span style={styles.hoursValue}>9:00am &mdash; 2:00pm</span>
              </Text>
            </div>

            <Text style={styles.text}>Nutts Corner, Northern Ireland</Text>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=thirty3coffee+Nutts+Corner+Northern+Ireland"
              style={styles.button}
            >
              Get Directions
            </Link>

            <Text style={styles.tagline}>
              Good Coffee. Good Company. Great Experience.
            </Text>
          </Section>

          <Hr style={styles.hr} />

          <Section style={styles.footerSection}>
            <Link href="https://www.instagram.com/thirty3.coffee/" style={styles.socialLink}>
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61586683685409"
              style={styles.socialLink}
            >
              Facebook
            </Link>
            <Text style={styles.footerText}>
              &copy; 2026 thirty3coffee &middot; Nutts Corner, Northern Ireland
            </Text>
            <Text style={{ margin: "8px 0 0" }}>
              <Link href={unsubscribeUrl} style={styles.unsubscribe}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
