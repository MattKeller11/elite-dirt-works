import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Dirt Works",
  description:
    "Elite Dirt Works offers professional excavation, tree removal, and dirt work services in Zimmerman, MN. Get a free quote today!",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Elite Dirt Works",
    description:
      "Elite Dirt Works offers professional excavation, tree removal, and dirt work services in Zimmerman, MN. Get a free quote today!",
    url: "https://elite-dirt-works.vercel.app/",
    siteName: "Elite Dirt Works",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Elite Dirt Works Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
