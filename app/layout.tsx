import type { Metadata } from "next";
import { Syne } from "next/font/google";

import "./globals.css";
import ParentWrapper from "./parent-wrapper";

const syne = Syne({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Paul Chen - Portfolio",
  description:
    "Paul Chen is a Creative Developer with 3 years of experience based in Manila, Philippines.",
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
      </body>
    </html>
  );
}
