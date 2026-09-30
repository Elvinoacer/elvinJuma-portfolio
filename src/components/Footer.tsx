import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return <footer className="site-footer"><div className="page-shell"><div className="footer-top"><Link href="/" className="footer-name">elvin juma<span>®</span></Link><p>Thoughtful interfaces.<br />Dependable systems.</p><div className="footer-socials"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href={`mailto:${site.email}`}>Email <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ELVIN JUMA</span><span>MADE WITH INTENTION, IN KENYA.</span><a href="#main-content">BACK TO TOP ↑</a></div></div></footer>;
}
