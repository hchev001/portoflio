import { barlow, inter } from "@/components/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamilton",
  description: "Hamilton Chevez personal portfolio. Come check it out!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
