import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navigation from "../components/Navigation";
import "./globals.css";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lee & Malaimare",
  description: "We build the tools we always wished existed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}