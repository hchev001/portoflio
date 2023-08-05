import { Inter, Barlow } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  variable: "--font-barlow",
});
