"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [{ name: "Work", href: "/#work", path: "/projects" }, { name: "About", href: "/about", path: "/about" }, { name: "Contact", href: "/contact", path: "/contact" }];

export default function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const close = () => { if (query.matches) menuRef.current?.close(); };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="page-shell header-inner">
          <Link href="/" className="brand-link" aria-label="Elvin Juma home"><span className="brand-mark">e<span>j</span><i /></span><span className="brand-name">elvin juma<span>®</span></span></Link>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map((link, i) => <Link key={link.name} href={link.href} aria-current={pathname === link.path ? "page" : undefined} className="nav-link"><span className="nav-index">0{i + 1}</span>{link.name}</Link>)}</nav>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="header-resume">Résumé <ArrowUpRight size={16} /></a>
          <button type="button" onClick={() => menuRef.current?.showModal()} className="mobile-menu-button icon-button" aria-label="Open navigation" aria-haspopup="dialog"><Menu size={22} /></button>
        </div>
      </header>
      <dialog ref={menuRef} className="mobile-menu-dialog" aria-label="Navigation menu">
        <div className="mobile-menu-top"><span className="eyebrow">ELVIN JUMA / NAVIGATION</span><button className="icon-button" aria-label="Close navigation" onClick={() => menuRef.current?.close()}><X /></button></div>
        <nav aria-label="Mobile navigation" className="mobile-nav">{links.map((link, i) => <Link key={link.name} href={link.href} onClick={() => menuRef.current?.close()}><span>0{i + 1}</span>{link.name}<ArrowUpRight size={28} /></Link>)}</nav>
        <a href={site.resume} target="_blank" rel="noopener noreferrer" className="button-primary" onClick={() => menuRef.current?.close()}>View résumé <ArrowUpRight size={18} /></a>
        <p className="mt-auto pt-10 text-sm text-[#a2a59b]">{site.location}<br />Open to possibilities, everywhere.</p>
      </dialog>
    </>
  );
}
