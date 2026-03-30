import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const germanyScript = Great_Vibes({
  variable: "--font-germany",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "la-cremossa",
  description: "cremig bis zum letzen Bissen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${germanyScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
