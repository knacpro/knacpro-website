import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knacpro Solutions",
  description: "Created by Knacpro Solutions and team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <head>
              <link rel="icon" href="/assets/logo.png" type="image/x-icon" />
              <title>{String(metadata.title)}</title>
              <meta
                  name="description"
                  content={metadata.description || "Default description"}
              />
          </head>
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              {children}
              <FooterSection />
          </body>
      </html>
  );
}
