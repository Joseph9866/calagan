"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topline"><span>Building with care across Nairobi and beyond</span><a href="tel:+254715212295"><Phone size={13} /> +254 715 212 295</a></div>
    <header className="header">
      <a className="brand" href="/" aria-label="Calagan Construction home"><img src="/Images/logo.png" alt="" /><span><strong>CALAGAN</strong><small>CONSTRUCTION COMPANY LIMITED</small></span></a>
      <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
        {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["House plans", "/house-plans"], ["Projects", "/projects"]].map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="/contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="footer"><div><a className="brand brand-footer" href="/"><img src="/Images/logo.png" alt="" /><span><strong>CALAGAN</strong><small>CONSTRUCTION COMPANY LIMITED</small></span></a><p>Dream better. Build better.</p></div><span>© {new Date().getFullYear()} Calagan Construction Company Limited.</span><a href="/contact">Start a project ↗</a></footer>;
}
