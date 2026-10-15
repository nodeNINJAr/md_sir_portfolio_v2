import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-oswald",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md. Abu Jubayer — Environmentalist & Senior Environmental Specialist",
  description:
    "Environmental conservation, climate resilience, green innovation, PlantScholar, institutional leadership, and environmental research with Md. Abu Jubayer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
