import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Power Exchange | Sell crypto and gift cards",
    template: "%s | Power Exchange"
  },
  description: "Your premium concierge exchange desk. We buy crypto and gift cards and pay in naira. Fast, secure, and reliable digital solutions since 2022.",
  keywords: ["Crypto Exchange", "Gift Cards", "USDT to Naira", "Bitcoin to Naira", "Digital Services", "Cross-border payouts", "Nigeria"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://powerexchange.ng",
    title: "Power Exchange | Digital Services Platform",
    description: "Your premium concierge exchange desk. Swap crypto and gift cards at the best rates—confirmed securely via WhatsApp.",
    siteName: "Power Exchange",
    images: [
      {
        url: "/logo.png", // Next.js will resolve this automatically if placed in public
        width: 1200,
        height: 630,
        alt: "Power Exchange Brand Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Exchange | Digital Services Platform",
    description: "Your premium concierge exchange desk. We buy crypto and gift cards and pay in naira.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-text-primary min-h-screen selection:bg-brand-orange/30 overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
