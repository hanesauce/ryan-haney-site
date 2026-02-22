import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ryan Haney | Atlassian Solutions Leader",
  description:
    "Strategic consultant and technical delivery manager with 15+ years implementing enterprise Atlassian solutions.",
};

export const viewport: Viewport = {
  themeColor: "#1a2332",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
