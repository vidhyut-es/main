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
  title: "Vidhyut | Powering Your Journey, Simplified",
  description: "Vidhyut is India's leading EV charging platform. Discover stations, compare prices, check real-time availability, book slots, and pay seamlessly.",
  keywords: ["EV Charging", "Electric Vehicles", "Charging Stations India", "EV Payment", "Charging Route Planner", "Vidhyut"],
  authors: [{ name: "Vidhyut Energies Solutions Pvt. Ltd." }],
  openGraph: {
    title: "Vidhyut | Complete EV Charging Infrastructure",
    description: "The Indian EV market is expanding rapidly. Vidhyut empowers users to discover, compare prices, and seamlessly charge their Electric Vehicles anywhere.",
    url: "https://www.vidhyut.in/",
    siteName: "Vidhyut Platform",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhyut | Powering Your Journey",
    description: "One-stop platform for all EV charging stations in India.",
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
        {children}
      </body>
    </html>
  );
}
