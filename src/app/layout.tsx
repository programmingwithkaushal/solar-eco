import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Affordable Solar Installation | Lowest Cost Energy Solutions",
  description: "Complete Solar Solutions for Homes and Businesses. Installation, Wiring, Net Metering Support and Long-Term Maintenance. Get a free quote today!",
  keywords: ["Solar Installation", "Solar Panel Installation", "Residential Solar Installation", "Commercial Solar Installation", "Affordable Solar Installation", "Solar Company India"],
  openGraph: {
    title: "Affordable Solar Installation | Lowest Cost Energy Solutions",
    description: "Complete Solar Solutions for Homes and Businesses. Installation, Wiring, Net Metering Support and Long-Term Maintenance.",
    type: "website",
    locale: "en_IN",
  },
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <LeadCapturePopup />
      </body>
    </html>
  );
}
