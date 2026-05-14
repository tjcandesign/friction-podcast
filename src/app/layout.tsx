import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Agentic Everything — AI Readiness for Agencies",
  description:
    "Embedded AI consulting for agencies and creative teams. Executive alignment, team enablement, operational redesign. A retainer-based practice by TJ Cichecki.",
  openGraph: {
    title: "Agentic Everything — AI Readiness for Agencies",
    description:
      "Embedded AI consulting for agencies and creative teams. Executive alignment, team enablement, operational redesign.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
