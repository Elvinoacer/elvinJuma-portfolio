import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import localFont from "next/font/local";

import { site } from "../data/site";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "./fonts/Manrope-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Manrope-Semibold.woff2", weight: "500 600", style: "normal" },
    { path: "./fonts/Manrope-ExtraBold.woff2", weight: "700 800", style: "normal" },
  ], variable: "--font-manrope", display: "swap",
});
const display = localFont({ src: "./fonts/BarlowCondensed-SemiBold.woff2", variable: "--font-display", display: "swap" });
const mono = localFont({ src: "./fonts/DMMono-Regular.woff2", variable: "--font-dm-mono", display: "swap", preload: false });

const socialImage = {
  url: "/images/elvin-juma-og-2026.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Elvin Juma, full-stack software engineer. An engineer with an artist’s eye. Portrait on a charcoal and lime background.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elvin-juma-portfolio.vercel.app"),
  title: {
    default: `${site.name} - ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "React Developer Kenya",
    "Great Thumbs Software Solutions",
    "Multi-tenant SaaS",
    "Offline Systems",
    "PostgreSQL",
    "Product Engineer",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: "https://elvin-juma-portfolio.vercel.app",
    title: `${site.name} - ${site.title}`,
    description: site.tagline,
    images: [socialImage],
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.title}`,
    description: site.tagline,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${manrope.variable} ${mono.variable} ${display.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: 'try{if(localStorage.getItem("motion")==="off")document.documentElement.dataset.motion="off"}catch(e){}' }} /></head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="relative min-h-screen" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
