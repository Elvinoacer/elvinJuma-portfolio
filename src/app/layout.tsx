import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "../components/ScrollToTop";
import { site } from "../data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvin-juma-portfolio.vercel.app"),
  title: {
    default: `${site.name} · Founding Engineer & Product Systems Builder`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Elvin Omondi Juma",
    "Founding Engineer Kenya",
    "Full-Stack Developer Kenya",
    "Product Engineer",
    "Next.js 16 Developer",
    "React 19 Developer",
    "TypeScript Engineer",
    "PostgreSQL",
    "Prisma",
    "M-Pesa Daraja Developer",
    "Realtime Systems",
    "Multi-tenant SaaS",
    "Great Thumbs Software Solutions",
    "Afyvia",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: "https://elvin-juma-portfolio.vercel.app",
    title: `${site.name} · Founding Engineer & Product Systems Builder`,
    description: site.tagline,
    images: [{ url: "/images/elvin-logo-1.png", width: 1200, height: 630 }],
    locale: "en_KE",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Founding Engineer & Product Systems Builder`,
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070909] text-slate-200 font-sans antialiased selection:bg-lime-300/25 selection:text-white">
        <CustomCursor />
        <ScrollToTop />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
