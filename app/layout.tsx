import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FlynnChatbot } from "@/components/layout/FlynnChatbot";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Feeney Flooring & Blinds | Premium Flooring & Blinds Crumlin, Northern Ireland",
  description:
    "Expert flooring and blinds supply and fit in Crumlin, Antrim and Belfast. Free measuring service. Engineered wood, LVT, carpet, laminate and made to measure blinds. 5 star rated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-near-black text-cream">
        <JsonLd data={localBusinessSchema()} />
        <Navigation />
        <main className="flex-1 pt-[81px]">{children}</main>
        <Footer />
        <FlynnChatbot />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
