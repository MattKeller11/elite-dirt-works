import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elite Dirt Works",
    template: "%s | Elite Dirt Works",
  },
  description:
    "Elite Dirt Works offers professional excavation, tree removal, and dirt work services in Zimmerman, MN. Get a free quote today!",
  keywords: [
    "elite",
    "dirt works",
    "dirt",
    "excavation",
    "landscaping",
    "tree removal",
    "land clearing",
    "dirt work",
    "land prep",
    "site clearing",
    "zimmerman",
  ],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Elite Dirt Works",
    description:
      "Elite Dirt Works offers professional excavation, tree removal, and dirt work services in Zimmerman, MN. Get a free quote today!",
    url: "https://www.elitedirtworksmn.com",
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

const gtagSnippet = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5HN1V7R0NM');
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5HN1V7R0NM"
          strategy="afterInteractive"
        ></Script>
        <Script id="gtag-init" strategy="lazyOnload">
          {gtagSnippet}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
