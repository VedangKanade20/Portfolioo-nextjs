import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDock from "@/components/navbar-dock";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import HelloIntro from "@/components/HelloIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedang Kanade | Software Engineer",
  description:
    "Vedang Kanade - Software Engineer (Java Full Stack / BFSI) specializing in enterprise banking systems, Java, Spring Boot, React, Next.js, and AI research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050506] text-[#f5f7fa] selection:bg-[#3f7fd0] selection:text-white relative min-h-screen pb-24`}
      >
        <HelloIntro />
        <Header />
        <main className="relative z-10">{children}</main>
        <NavbarDock />
        <Footer />
      </body>
    </html>
  );
}
