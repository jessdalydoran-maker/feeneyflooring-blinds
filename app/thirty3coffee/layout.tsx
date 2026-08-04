import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./thirty3.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-t3-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "thirty3coffee | Specialty Coffee & Drive Thru | Nutts Corner, Northern Ireland",
  description:
    "Specialty coffee shop and drive thru at Nutts Corner, Northern Ireland. Open 7 days. Mon-Fri 7am-3pm, Sat-Sun 9am-2pm. Isn't just a coffee shop — it's an experience.",
};

export default function Thirty3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full`}>
      <body className="t3-root min-h-full">{children}</body>
    </html>
  );
}
