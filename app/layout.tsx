import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import ParentWrapper from "./parent-wrapper";

const syne = Syne({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Paul Chen - Portfolio",
  description:
    "Paul Chen is a Creative Developer with 3 years of experience based in Manila, Philippines.",
  other: {
    "theme-coloer": "#1E2124",
    "color-scheme": "dark-only",
    "twitter-image": "https://i.ibb.co/tsPKgBn/seo-image.jpg",
    "og:url": "https://paulkevinchen.vercel.app/",
    "og:image": "https://i.ibb.co/tsPKgBn/seo-image.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <ParentWrapper>{children}</ParentWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
