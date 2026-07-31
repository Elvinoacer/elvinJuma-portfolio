import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { site } from "../data/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elvin-juma-portfolio.vercel.app"),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.tagline,
  keywords: [
    "Full-stack developer Kenya",
    "Next.js developer",
    "TypeScript engineer",
    "React developer Eldoret",
    "Great Thumbs Software Solutions",
    "Founding engineer",
    "PostgreSQL",
    "Product engineer Kenya",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: "https://elvin-juma-portfolio.vercel.app",
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    images: [{ url: "/images/elvin-logo-1.png", width: 1200, height: 630 }],
    locale: "en_KE",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#030712] text-slate-200 font-sans antialiased">
        <div className="noise-overlay" aria-hidden />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
