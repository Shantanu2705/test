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
  metadataBase: new URL('https://example.com'),
  title: {
    default: "Premium Digital Solutions | Your Company",
    template: "%s | Your Company",
  },
  description: "We deliver cutting-edge digital solutions including SEO, Web Development, and Google Ads to help your business scale.",
  keywords: ["Digital Marketing", "SEO Services", "Web Development", "Google Ads Agency"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Premium Digital Solutions | Your Company",
    description: "Expert SEO, Web Development, and Google Ads services to dominate the digital landscape.",
    siteName: "Your Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Digital Solutions | Your Company",
    description: "Expert SEO, Web Development, and Google Ads services.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
