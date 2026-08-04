import * as React from "react";
import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";

/**
 * Shared brand styles for all Feeney Flooring & Blinds transactional emails.
 * Email clients don't support CSS variables or most modern CSS, so every
 * colour is hardcoded here as a hex value and reused via these style objects.
 */
export const colors = {
  gold: "#B8934A",
  goldLight: "#CDA55C",
  nearBlack: "#141410",
  panel: "#202018",
  cream: "#F2EDE0",
  creamDim: "rgba(242,237,224,0.6)",
} as const;

export const fonts = {
  heading: "Georgia, 'Times New Roman', serif",
  body: "Helvetica, Arial, sans-serif",
} as const;

export const styles = {
  body: {
    backgroundColor: colors.nearBlack,
    fontFamily: fonts.body,
    margin: 0,
    padding: "32px 16px",
  } as React.CSSProperties,
  container: {
    backgroundColor: colors.panel,
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid rgba(184,147,74,0.25)",
  } as React.CSSProperties,
  headerSection: {
    padding: "28px 32px 20px",
    textAlign: "center" as const,
    borderBottom: "1px solid rgba(184,147,74,0.2)",
  } as React.CSSProperties,
  headerText: {
    color: colors.gold,
    fontFamily: fonts.body,
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
    margin: 0,
  } as React.CSSProperties,
  contentSection: {
    padding: "32px",
  } as React.CSSProperties,
  heading: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: "26px",
    lineHeight: "1.3",
    margin: "0 0 20px",
    fontWeight: 400,
  } as React.CSSProperties,
  subheading: {
    color: colors.gold,
    fontFamily: fonts.heading,
    fontSize: "18px",
    lineHeight: "1.3",
    margin: "0 0 12px",
    fontWeight: 400,
  } as React.CSSProperties,
  text: {
    color: colors.cream,
    fontFamily: fonts.body,
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 16px",
  } as React.CSSProperties,
  mutedText: {
    color: colors.creamDim,
    fontFamily: fonts.body,
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0 0 12px",
  } as React.CSSProperties,
  link: {
    color: colors.gold,
    textDecoration: "underline",
  } as React.CSSProperties,
  button: {
    backgroundColor: colors.gold,
    color: colors.nearBlack,
    fontFamily: fonts.body,
    fontSize: "15px",
    fontWeight: 700,
    textDecoration: "none",
    textAlign: "center" as const,
    padding: "14px 28px",
    borderRadius: "6px",
    display: "inline-block",
  } as React.CSSProperties,
  secondaryButton: {
    backgroundColor: "transparent",
    color: colors.gold,
    fontFamily: fonts.body,
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    textAlign: "center" as const,
    padding: "12px 26px",
    borderRadius: "6px",
    border: `1px solid ${colors.gold}`,
    display: "inline-block",
  } as React.CSSProperties,
  hr: {
    borderColor: "rgba(184,147,74,0.2)",
    margin: "24px 0",
  } as React.CSSProperties,
  footerSection: {
    padding: "24px 32px 32px",
    borderTop: "1px solid rgba(184,147,74,0.2)",
  } as React.CSSProperties,
  footerText: {
    color: colors.creamDim,
    fontFamily: fonts.body,
    fontSize: "12px",
    lineHeight: "1.6",
    margin: "0 0 4px",
    textAlign: "center" as const,
  } as React.CSSProperties,
};

export function Header() {
  return (
    <Section style={styles.headerSection}>
      <Text style={styles.headerText}>FEENEY FLOORING &amp; BLINDS</Text>
    </Section>
  );
}

export function Footer() {
  return (
    <Section style={styles.footerSection}>
      <Hr style={styles.hr} />
      <Text style={styles.footerText}>42 Belfast Road, Nutts Corner, Crumlin, BT29 4TH, Northern Ireland</Text>
      <Text style={styles.footerText}>
        Thursday 10am&ndash;8pm &middot; Friday 10am&ndash;5pm &middot; Saturday 10am&ndash;5pm
      </Text>
      <Text style={styles.footerText}>Closed Sunday, Monday, Tuesday &amp; Wednesday</Text>
    </Section>
  );
}

interface EmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export function EmailLayout({ previewText, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Header />
          <Section style={styles.contentSection}>{children}</Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
