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
    default: `${site.name} - Software Engineer, Front-end & App Developer`,
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
    "Founding Engineer",
    "PostgreSQL",
    "Product Engineer",
    "Tamal Sen style portfolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: "https://elvin-juma-portfolio.vercel.app",
    title: `${site.name} - Software Engineer, Front-end & App Developer`,
    description: site.tagline,
    images: [{ url: "/images/elvin-logo-1.png", width: 1200, height: 630 }],
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Software Engineer, Front-end & App Developer`,
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f0f11] text-[#e2e8f0] font-sans antialiased selection:bg-[#66d9ed]/25 selection:text-white">
        <CustomCursor />
        <ScrollToTop />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
