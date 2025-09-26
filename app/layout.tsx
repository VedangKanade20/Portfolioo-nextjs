// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDock from "@/components/navbar-dock";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedang Kanade | Portfolio",
  description: "Vedang Kanade's personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      
        <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased  relative min-h-screen pb-24`}
  >
    <Header />
    {children}
    <NavbarDock />
    <Footer />
  </body>
    </html>
  );
}