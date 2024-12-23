import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Momentum - Co-Working Sessions in London, Ontario",
  description:
    "Momentum is a co-working community where creators, learners, and makers gather to work on passion projects. Join us Sundays at noon in London, Ontario.",
  keywords: [
    "Momentum",
    "Western University",
    "co-working",
    "community",
    "London Ontario",
    "passion projects",
    "creative collaboration",
    "UWO",
  ],
  openGraph: {
    title: "Momentum - Co-Working Sessions",
    description:
      "Join Momentum, a co-working community in London, Ontario, to work on your creative projects in a supportive environment.",
    url: "https://momentum.place",
    images: [
      {
        url: "/og-image.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Momentum Co-Working Sessions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum - Co-Working Sessions",
    description:
      "Momentum is a co-working community in London, Ontario. Join us Sundays at noon to collaborate and create.",
    images: ["/og-image.png"], // Replace with your Open Graph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="manifest"
          href="/site.webmanifest"
        /> {/* Optional for PWA support */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Momentum Team" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://momentum.place"
        /> {/* Replace with your site URL */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
